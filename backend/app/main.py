from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import smtplib
import os
import traceback
from dotenv import load_dotenv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from datetime import datetime
from typing import Optional

# .env file se credentials load kar rahe hain
load_dotenv()

app = FastAPI(title="SMU Nexora Tech API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_NAME = "database.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS inquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            service TEXT NOT NULL,
            message TEXT NOT NULL,
            has_resume INTEGER DEFAULT 0,
            form_type TEXT DEFAULT 'Inquiry',
            submitted_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Database initialize kar rahe hain
init_db()

SENDER_EMAIL = os.getenv("SENDER_EMAIL", "smunextech@gmail.com")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD", "athervrnbjqncmcd")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "SMU Nexora Backend API is running successfully!",
        "endpoints": {
            "contact_api": "/api/contact",
            "inquiries_api": "/api/inquiries"
        }
    }

def send_email_with_attachment(name: str, email: str, phone: str, service: str, message: str, form_type: str = "Inquiry", resume_file: Optional[UploadFile] = None):
    try:
        msg = MIMEMultipart()
        is_application = "JOB APPLICATION" if form_type == "Application" else "GENERAL INQUIRY"
        msg["Subject"] = f"📌 [{is_application}] {name} - {service}"
        msg["From"] = SENDER_EMAIL
        msg["To"] = SENDER_EMAIL

        has_resume_text = "YES (Attached with Email)" if resume_file else "NO"

        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; background-color: #f8fafc; color: #0f172a; padding: 20px;">
                <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
                    <div style="background-color: {'#2563eb' if form_type == 'Application' else '#0d9488'}; padding: 10px 15px; border-radius: 6px; font-weight: bold; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #ffffff; text-align: center; margin-bottom: 20px;">
                        Category: {is_application}
                    </div>
                    <h2 style="color: #1e40af; margin-top: 0;">📬 New Message Received - SMU Nexora</h2>
                    <hr style="border-color: #e2e8f0;" />
                    <p><strong>Full Name:</strong> {name}</p>
                    <p><strong>Email:</strong> <a href="mailto:{email}" style="color: #2563eb;">{email}</a></p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p><strong>Service/Interest:</strong> <span style="background-color: #1e40af; padding: 3px 8px; border-radius: 4px; color: white;">{service}</span></p>
                    <p><strong>Resume Attached:</strong> <span style="color: #16a34a;">{has_resume_text}</span></p>
                    <p><strong>Message / Requirement:</strong></p>
                    <blockquote style="background-color: #f1f5f9; padding: 12px; border-left: 4px solid #2563eb; border-radius: 4px;">
                        {message}
                    </blockquote>
                    <hr style="border-color: #e2e8f0;" />
                    <p style="font-size: 12px; color: #64748b;">Saved to SMU Nexora SQLite Database.</p>
                </div>
            </body>
        </html>
        """

        msg.attach(MIMEText(html_content, "html"))

        if resume_file:
            resume_bytes = resume_file.file.read()
            part = MIMEApplication(resume_bytes, Name=resume_file.filename)
            part['Content-Disposition'] = f'attachment; filename="{resume_file.filename}"'
            msg.attach(part)

        server = smtplib.SMTP_SSL("smtp.gmail.com", 465)
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, SENDER_EMAIL, msg.as_string())
        server.quit()
        print(f"📧 Notification email ({is_application}) successfully sent!")
    except Exception as e:
        print(f"⚠️ Email Sending Failed: {str(e)}")

@app.post("/api/contact")
async def receive_contact(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    service: str = Form(...),
    message: str = Form(...),
    form_type: str = Form("Inquiry"),
    resume: Optional[UploadFile] = File(None)
):
    try:
        conn = sqlite3.connect(DB_NAME)
        cursor = conn.cursor()
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        has_resume = 1 if resume else 0

        cursor.execute('''
            INSERT INTO inquiries (name, email, phone, service, message, has_resume, form_type, submitted_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (name, email, phone, service, message, has_resume, form_type, timestamp))

        conn.commit()
        conn.close()

        send_email_with_attachment(name, email, phone, service, message, form_type, resume)

        return {
            "status": "success",
            "message": f"Thank you {name}! Your message has been received successfully."
        }
    except Exception as e:
        print("\n❌ DETAILED SERVER ERROR:")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=f"Server Error: {str(e)}")

@app.get("/api/inquiries")
def get_all_inquiries():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM inquiries ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()

    inquiries = []
    for row in rows:
        inquiries.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "phone": row[3],
            "service": row[4],
            "message": row[5],
            "has_resume": row[6],
            "form_type": row[7] if len(row) > 7 else "Inquiry",
            "submitted_at": row[8] if len(row) > 8 else row[7]
        })

    return {"count": len(inquiries), "data": inquiries}