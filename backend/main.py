from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os
import shutil
import smtplib
import traceback
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
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

# Email Env Variables
SENDER_EMAIL = os.getenv("SENDER_EMAIL", "smunextech@gmail.com").strip()
raw_pass = os.getenv("GMAIL_APP_PASSWORD", "") or os.getenv("SENDER_PASSWORD", "")
SENDER_PASSWORD = raw_pass.replace(" ", "").replace('"', '').replace("'", "").strip()

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

def dispatch_gmail(subject: str, body_text: str, attachment_path: str = None):
    print("\n=================== STARTING EMAIL DISPATCH ===================")
    print(f"📧 Sender: {SENDER_EMAIL}")
    print(f"🔑 Password Length: {len(SENDER_PASSWORD)}")

    if not SENDER_PASSWORD:
        print("❌ [CRITICAL ERROR] GMAIL_APP_PASSWORD Key is EMPTY in Render Environment!")
        print("===============================================================\n")
        return False, "GMAIL_APP_PASSWORD is empty in Render settings."

    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = SENDER_EMAIL
        msg['Subject'] = subject
        msg.attach(MIMEText(body_text, 'plain'))

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

        # Try Port 587 first (STARTTLS)
        try:
            print("🔄 Connecting via Port 587 (STARTTLS)...")
            server = smtplib.SMTP("smtp.gmail.com", 587, timeout=20)
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg.as_string())
            server.quit()
            print("✅ [SUCCESS] Email delivered via Port 587!")
            print("===============================================================\n")
            return True, "Email sent successfully"
        except Exception as e587:
            print(f"⚠️ Port 587 failed ({str(e587)}), trying Port 465 (SSL)...")
            server_ssl = smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=20)
            server_ssl.login(SENDER_EMAIL, SENDER_PASSWORD)
            server_ssl.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg.as_string())
            server_ssl.quit()
            print("✅ [SUCCESS] Email delivered via Port 465!")
            print("===============================================================\n")
            return True, "Email sent successfully"

    except Exception as err:
        error_msg = f"❌ [SMTP FAILED] {str(err)}"
        print(error_msg)
        print(traceback.format_exc())
        print("===============================================================\n")
        return False, error_msg

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

📎 Candidate resume is attached with this email notification.
        """
        
        # Synchronous Email dispatch
        email_sent, log_msg = dispatch_gmail(f"[NEW CAREER APPLICATION] - {fullName} ({domain})", email_body, file_path)

        return {"success": True, "message": "Application saved!", "email_status": log_msg}

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
        
        email_sent, log_msg = dispatch_gmail(f"[NEW CONTACT INQUIRY] - {subject} from {fullName}", email_body)

        return {"success": True, "message": "Inquiry saved!", "email_status": log_msg}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))