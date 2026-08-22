from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import sqlite3
import os
import shutil
import base64
import resend
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="SMU Nexora Technologies API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

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
        return True
    except Exception as e:
        return False

@app.get("/api/health")
def health_check():
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
✉️ Email: {email}
📞 Phone: {phone}
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
        return {"success": True, "message": "Inquiry submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ==================== SERVE REACT FRONTEND ====================
if os.path.exists("frontend/frontend/dist"):
    app.mount("/assets", StaticFiles(directory="frontend/frontend/dist/assets"), name="assets")

    @app.get("/{full_path:path}")
    async def serve_react_app(full_path: str):
        if full_path.startswith("api"):
            raise HTTPException(status_code=404, detail="Not found")
            
        file_path = os.path.join("frontend/frontend/dist", full_path)
        if full_path and os.path.exists(file_path):
            return FileResponse(file_path)
        return FileResponse("frontend/frontend/dist/index.html")