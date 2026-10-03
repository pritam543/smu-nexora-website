from fastapi import FastAPI, File, UploadFile, Form, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3
import os
import shutil
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
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

def send_smtp_email(subject: str, body_text: str, attachment_path: str = None):
    try:
        sender_email = os.getenv("SENDER_EMAIL", "smunextech@gmail.com").strip()
        gmail_password = os.getenv("GMAIL_APP_PASSWORD", "").strip()

        if not gmail_password:
            print("❌ [SMTP ERROR] GMAIL_APP_PASSWORD is missing!")
            return False

        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = RECEIVER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body_text, 'plain'))

        if attachment_path and os.path.exists(attachment_path):
            with open(attachment_path, "rb") as f:
                part = MIMEApplication(f.read(), Name=os.path.basename(attachment_path))
                part['Content-Disposition'] = f'attachment; filename="{os.path.basename(attachment_path)}"'
                msg.attach(part)

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, gmail_password)
        server.sendmail(sender_email, RECEIVER_EMAIL, msg.as_string())
        server.quit()
        print("✅ [GMAIL SMTP SUCCESS] Email sent successfully!")
        return True
    except Exception as e:
        print("❌ [GMAIL SMTP FAILED] Error:", str(e))
        return False

@app.get("/")
def home():
    return {"status": "Active", "message": "SMU Nexora Technologies API is running!"}

class VisitorLead(BaseModel):
    fullName: str
    email: str
    phone: str

@app.post("/api/visitor-lead")
async def submit_visitor_lead(lead: VisitorLead, background_tasks: BackgroundTasks):
    try:
        conn = sqlite3.connect("database.db")
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO submissions (
                form_type, domain_or_subject, full_name, email, phone
            ) VALUES (?, ?, ?, ?, ?)
        """, (
            'VISITOR_POPUP_LEAD', 'Website Entry Registration', lead.fullName, lead.email, lead.phone
        ))
        conn.commit()
        conn.close()

        email_body = f"""
🌟 NEW WEBSITE VISITOR LEAD REGISTERED!

👤 Full Name: {lead.fullName}
✉️ Email: {lead.email}
📞 Phone: {lead.phone}
        """
        background_tasks.add_task(send_smtp_email, f"[NEW VISITOR LEAD] - {lead.fullName}", email_body)

        return {"success": True, "message": "Visitor lead logged successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/apply")
async def submit_application(
    background_tasks: BackgroundTasks,
    domain: str = Form(...),
    opportunityType: str = Form(...),
    experienceLevel: str = Form(...),
    fullName: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    qualification: str = Form("N/A"),
    skills: str = Form("N/A"),
    portfolioLink: str = Form(""),
    availability: str = Form("Immediate Joining"),
    userMessage: str = Form(""),
    resume: UploadFile = File(None)
):
    try:
        file_path = None
        if resume and resume.filename and resume.filename != "resume.txt":
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
💻 Domain: {domain}
🎯 Type: {opportunityType}
✉️ Email: {email}
📞 Phone: {phone}
        """
        background_tasks.add_task(send_smtp_email, f"[NEW CAREER APPLICATION] - {fullName} ({domain})", email_body, file_path)
        return {"success": True, "message": "Application submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/contact")
async def submit_contact_inquiry(
    background_tasks: BackgroundTasks,
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
        background_tasks.add_task(send_smtp_email, f"[NEW CONTACT INQUIRY] - {subject} from {fullName}", email_body)
        return {"success": True, "message": "Inquiry submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))