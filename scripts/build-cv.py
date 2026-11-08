#!/usr/bin/env python3
"""Build the sanitized portfolio CV PDF for Muhammad Izaz Haider.

Uses ONLY the sanitized bullets from research/CONTENT-MODEL.md and the
site's own Experience page wording. Never add: bounty amounts, the
test-pass count figure, the file-upload mechanism detail, a street
address, or a phone number. Output text is extractable (ReportLab).
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable,
)

OUT = "/home/hatch/workspace/portfolio-v2/public/files/Muhammad_Izaz_Haider_CV.pdf"

INK = HexColor("#17191C")
MUTED = HexColor("#5C6068")
BLUE = HexColor("#5A45D6")
LINE = HexColor("#9680EB")

sTitle = ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=20, leading=24, textColor=INK)
sSub = ParagraphStyle("sub", fontName="Helvetica", fontSize=11, leading=15, textColor=BLUE)
sContact = ParagraphStyle("contact", fontName="Helvetica", fontSize=9.5, leading=14, textColor=MUTED)
sH = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=BLUE, spaceBefore=12, spaceAfter=4)
sBody = ParagraphStyle("body", fontName="Helvetica", fontSize=10, leading=14.5, textColor=INK, spaceAfter=4)
sBullet = ParagraphStyle("bullet", parent=sBody, leftIndent=12, bulletIndent=4, spaceAfter=3)
sSmall = ParagraphStyle("small", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=INK, spaceAfter=3)

def bullet(text):
    return Paragraph(text, sBullet, bulletText="\u2022")

def job(title, org, period):
    t = Table(
        [[Paragraph(f"<b>{title}</b>", sBody), Paragraph(period, ParagraphStyle("p", parent=sBody, alignment=2, textColor=MUTED))]],
        colWidths=[340, 140],
    )
    t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)]))
    return [t, Paragraph(org, ParagraphStyle("o", parent=sBody, textColor=MUTED, spaceAfter=4))]

story = []
story.append(Paragraph("Muhammad Izaz Haider", sTitle))
story.append(Paragraph("Penetration Tester, AI x Offensive Security", sSub))
story.append(Spacer(1, 4))
story.append(Paragraph(
    "mizazhaiderceh@gmail.com &nbsp;|&nbsp; mizazhaider-ceh.dev &nbsp;|&nbsp; "
    "github.com/mizazhaider-ceh &nbsp;|&nbsp; linkedin.com/in/muhammad-izaz-haider-091639314<br/>"
    "Sijsele-Damme, Belgium",
    sContact))
story.append(Spacer(1, 4))
story.append(HRFlowable(width="100%", thickness=1, color=LINE))

story.append(Paragraph("About", sH))
story.append(Paragraph(
    "Second-year BSc Cybersecurity student at Howest University of Applied Sciences in Belgium, "
    "with a first year completed at 60 out of 60 credits at the first attempt. I learn security by "
    "building and breaking: I built PenTrix-VulnLab, an open source vulnerable web application with "
    "201 challenges across 29 modules, and I hunt vulnerabilities on YesWeHack, where I earned "
    "quarterly recognition for responsible disclosure. In the Cyber Security Challenge Belgium 2026 "
    "I ranked first in Web in the Junior Division, third overall among juniors, and 26th out of 806 "
    "participants nationally. Available for offensive security internships and junior roles: "
    "Feb to Apr 2027 and Jul to Sep 2027, on site in Kortrijk, Ghent, Brussels, or Diegem, or remote from Belgium.",
    sBody))

story.append(Paragraph("Work experience", sH))
story += job("Bug Bounty Hunter", "YesWeHack, remote, part time", "Feb 2026 to Present")
story.append(bullet("Responsible disclosure on live programmes, by category only: authentication, authorization, injection, business logic, information disclosure, cryptography, file upload, and rate limiting."))
story.append(bullet("35 reports submitted to date, 3 rewarded, by my own count, with quarterly recognition for performance."))
story += job("Junior DevSecOps and AI Security Engineer", "Damno Solutions, remote, part time, 20 hours per week", "Nov 2025 to Jun 2026")
story.append(bullet("Delivered 13 vulnerabilities against a brief of 3 or more."))
story.append(bullet("Fixed 2 critical vulnerabilities: a remote code execution flaw and a SQL injection flaw."))
story.append(bullet("Built GitLab CI/CD security pipelines, reviewed the CBAM codebase, and wrote more than 1,800 lines of security documentation."))
story += job("Founder and Offensive Security Researcher", "The PenTrix, self founded", "")
story.append(bullet("Built for the next generation of security researchers: PenTrix-VulnLab, 30 Days of Practical Pentesting, the PenTrix platform, and Security-Books."))
story.append(bullet("Every project ships with a write up that explains the method, not just the result."))

story.append(Paragraph("Education", sH))
story += job("BSc Cybersecurity", "Howest University of Applied Sciences, Bruges, Belgium, 180 ECTS", "Sep 2025 to Jun 2028")
story.append(bullet("First year: 60 out of 60 credits, first attempt, no retakes."))
story += job("ICS, Intermediate in Computer Science", "Dawn Science College, Barnala, Pakistan, Grade A+", "2022 to 2024")
story += job("Matriculation, Computer Science", "Govt. High School for Boys, Hazara Mughlan, Pakistan", "2020 to 2022")

story.append(Paragraph("Projects", sH))
story.append(Paragraph("<b>PenTrix-VulnLab.</b> Deliberately vulnerable web app for learning web penetration testing: 201 challenges across 29 modules, 3 kill chain scenarios, and 3 career paths with verifiable certificates. Express and SQLite.", sSmall))
story.append(Paragraph("<b>PowerShell Academy.</b> Free PowerShell learning with no account: 18 chapters, 61 lessons, 102 commands, and 48 glossary terms across 6 stages.", sSmall))
story.append(Paragraph("<b>BugHunt Arsenal.</b> Free browser based web pentesting and security research platform: 800+ payloads across 21 categories, 150+ tools, 60+ CTF tools, 50+ free labs, 14+ modules.", sSmall))
story.append(Paragraph("<b>Ai-Terminal-X.</b> AI powered Linux terminal assistant: plain language to executable commands through Google Gemini, with safe execution checks.", sSmall))
story.append(Paragraph("<b>APK Security Pipeline.</b> Pure Python, v2.1.0: one command security checks an Android app, with static rules, Frida dynamic traces, scoring, and HTML and JSON reports. 64 tests passing.", sSmall))
story.append(Paragraph("<b>AgentArsenal.</b> Unified skills repository: 353 skills across 29 domains, per skill versioning, automated testing, quality scoring, and a one command installer.", sSmall))

story.append(Paragraph("Certifications", sH))
for name, org in [
    ("Certified Network Security Practitioner (CNSP), with Merit", "The SecOps Group"),
    ("Certified Ethical Hacking v12 (CEH), course certificate", "LearnKartS"),
    ("CompTIA PenTest+ Specialization, course", "Packt"),
    ("AI Agents and Agentic AI", "Vanderbilt University"),
    ("Application Security for Developers and DevOps Professionals", "IBM"),
    ("Web Application Security Testing with OWASP ZAP", "Coursera"),
    ("Linux 101", "TCM Security"),
    ("Web App Security Testing with Google Hacking", "CodeRed"),
    ("Google AI Essentials", "Google"),
    ("Advanced Python Scripting", "Issuer unknown"),
]:
    story.append(Paragraph(f"<b>{name}</b> &mdash; {org}", sSmall))
story.append(Paragraph("In progress, not held yet: eJPT and eWPT through INE Security. Courses studied, exams coming.", sSmall))

story.append(Paragraph("Honours and awards", sH))
story.append(bullet("Cyber Security Challenge Belgium 2026: 1st in Web (Junior Division), 3rd overall (Junior Division), 26th out of 806 participants nationally, 26 flags solved. Represented Howest."))
story.append(bullet("YesWeHack quarterly recognition for bug bounty performance."))

story.append(Paragraph("Languages", sH))
story.append(Paragraph("Mother tongues: Urdu, Punjabi. English: C1. Dutch: A1.", sBody))

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=18*mm, rightMargin=18*mm, topMargin=16*mm, bottomMargin=16*mm,
                        title="Muhammad Izaz Haider, CV", author="Muhammad Izaz Haider")
doc.build(story)
print("wrote", OUT)
