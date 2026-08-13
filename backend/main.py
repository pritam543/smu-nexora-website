from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os
import shutil
import base64
import resend
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SMU Nexora Backend API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Resend API Key Setup
resend.api_key = os.getenv("RESEND_API_KEY", "").strip()
RECEIVER_EMAIL = "smunextech@gmail.com"

def init_db():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            form_type TEXT NOT NULL,
            domain_or_subject TEXT,
            opportunity_type TEXT,
            experience_level TEXT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            qualification TEXT,
            skills TEXT,
            portfolio_link TEXT,
            availability TEXT,
            user_message TEXT,
            resume_path TEXT,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    conn.close()

init_db()

def send_resend_email(subject: str, body_text: str, attachment_path: str = None):
    try:
        attachments = []
        if attachment_path and os.path.exists(attachment_path):
            with open(attachment_path, "rb") as f:
                file_data = f.read()
                encoded_file = base64.b64encode(file_data).decode('utf-8')
                attachments.append({
                    "filename": os.path.basename(attachment_path),
                    "content": encoded_file
                })

        params = {
            "from": "SMU Nexora Portal <onboarding@resend.dev>",
            "to": [RECEIVER_EMAIL],
            "subject": subject,
            "text": body_text,
        }
        if attachments:
            params["attachments"] = attachments

        email = resend.Emails.send(params)
        print("✅ [RESEND SUCCESS] Email sent! ID:", email)
        return True
    except Exception as e:
        print("❌ [RESEND FAILED] Error:", str(e))
        return False

@app.get("/")
def home():
    return {"status": "Active", "message": "SMU Nexora Technologies API is running!"}

@app.post("/api/apply")
async def submit_application(
    domain: str = Form(...),
    opportunityType: str = Form(...),
    experienceLevel: str = Form(...),
    fullName: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    qualification: str = Form(...),
    skills: str = Form(...),
    portfolioLink: str = Form(""),
    availability: str = Form(...),
    userMessage: str = Form(""),
    resume: UploadFile = File(...)
):
    try:
        file_path = os.path.join(UPLOAD_DIR, f"CAREER_{fullName.replace(' ', '_')}_{resume.filename}")
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(resume.file, buffer)

        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO submissions (
                form_type, domain_or_subject, opportunity_type, experience_level, full_name, email, phone,
                qualification, skills, portfolio_link, availability, user_message, resume_path
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            'CAREERS_APPLICATION', domain, opportunityType, experienceLevel, fullName, email, phone,
            qualification, skills, portfolioLink, availability, userMessage, file_path
        ))
        conn.commit()
        conn.close()

        email_body = f"""
🚀 NEW CAREER APPLICATION RECEIVED!

👤 Full Name: {fullName}
💻 Target Domain: {domain}
🎯 Opportunity Type: {opportunityType}
📈 Experience Level: {experienceLevel}
✉️ Email: {email}
📞 Phone / WhatsApp: {phone}
🎓 Qualification: {qualification}
🛠️ Key Skills: {skills}
📝 User Message: {userMessage}

📎 Candidate resume is attached.
        """
        send_resend_email(f"[NEW CAREER APPLICATION] - {fullName} ({domain})", email_body, file_path)
        return {"success": True, "message": "Application submitted successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/contact")
async def submit_contact_inquiry(
    fullName: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    subject: str = Form(...),
    userMessage: str = Form(...)
):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO submissions (
                form_type, domain_or_subject, full_name, email, phone, user_message
            ) VALUES (?, ?, ?, ?, ?, ?)
        """, (
            'CONTACT_INQUIRY', subject, fullName, email, phone, userMessage
        ))
        conn.commit()
        conn.close()

        email_body = f"""
📩 NEW CONTACT INQUIRY RECEIVED!

👤 Name: {fullName}
✉️ Email: {email}
📞 Phone: {phone}
📌 Subject: {subject}
💬 Message: {userMessage}
        """
        send_resend_email(f"[NEW CONTACT INQUIRY] - {subject} from {fullName}", email_body)
        return {"success": True, "message": "Inquiry submitted successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))