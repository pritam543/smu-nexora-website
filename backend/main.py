from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os
import shutil
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders

app = FastAPI(title="SMU Nexora Backend API")

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# GMAIL CONFIGURATION
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
SENDER_EMAIL = "smunextech@gmail.com"

# 👇 Aapka 16-digit App Password yahan rakhein:
SENDER_PASSWORD = "athervrnbjqncmcd" 

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

def send_email_notification(subject: str, body_text: str, attachment_path: str = None):
    if not SENDER_PASSWORD or SENDER_PASSWORD == "YOUR_16_DIGIT_APP_PASSWORD":
        print("⚠️ [PASSWORD NOTICE] Please set your 16-digit App Password in SENDER_PASSWORD!")
        return

    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = SENDER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body_text, 'plain'))

        # Attach Resume PDF/DOCX if available
        if attachment_path and os.path.exists(attachment_path):
            with open(attachment_path, "rb") as attachment:
                part = MIMEBase("application", "octet-stream")
                part.set_payload(attachment.read())
            encoders.encode_base64(part)
            part.add_header(
                "Content-Disposition",
                f"attachment; filename={os.path.basename(attachment_path)}",
            )
            msg.attach(part)

        # Connect to Gmail SMTP via SSL
        server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT)
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg.as_string())
        server.quit()
        print(f"📧 [EMAIL DISPATCH SUCCESS] Notification sent to {SENDER_EMAIL}")
    except Exception as e:
        print(f"❌ [EMAIL FAILED] SMTP Error: {e}")

@app.get("/")
def home():
    return {"status": "Active", "message": "SMU Nexora Technologies API with Direct Mail Service is running!"}

# 1. CAREERS APPLICATION ENDPOINT
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

        # Save into SQLite DB
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

        # Email body
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

📎 Note: Candidate resume is attached with this email.
        """
        send_email_notification(f"[NEW CAREER APPLICATION] - {fullName} ({domain})", email_body, file_path)

        return {"success": True, "message": "Careers application submitted & email sent successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# 2. CONTACT INQUIRY ENDPOINT
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
        send_email_notification(f"[NEW CONTACT INQUIRY] - {subject} from {fullName}", email_body)

        return {"success": True, "message": "Inquiry submitted & email sent successfully!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))