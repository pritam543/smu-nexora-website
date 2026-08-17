import React, { useState } from 'react';
import {
    Building2,
    Sparkles,
    Code2,
    Cpu,
    ShieldCheck,
    Zap,
    Layers,
    Globe,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
    ArrowLeft,
    X,
    Download,
    CheckCircle2,
    Check,
    Terminal,
    Compass,
    Clock,
    Award,
    Users,
    Server,
    FileText
} from 'lucide-react';

export default function CorporateDeck({ isOpen, onClose }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!isOpen) return null;

    const slides = [
        // SLIDE 1: Executive Cover & Mission
        {
            id: 1,
            badge: "Corporate Dossier 2026",
            title: "SMU Nexora Technologies",
            subtitle: "Enterprise Software Engineering & Digital Solutions",
            render: () => (
                <div className="space-y-6">
                    <div style={{ padding: '2rem', borderRadius: '24px', background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', color: '#ffffff', border: '1px solid #334155', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8', background: 'rgba(56, 189, 248, 0.12)', padding: '4px 12px', borderRadius: '9999px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                            Official Capabilities Deck
                        </span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', marginTop: '1rem', lineHeight: '1.2' }}>
                            Architecting Resilient & Scalable <br />
                            <span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Digital Architectures
                            </span>
                        </h2>
                        <p style={{ color: '#cbd5e1', fontSize: '0.95rem', marginTop: '1rem', maxWidth: '650px', lineHeight: '1.6' }}>
                            SMU Nexora Technologies is a technology engineering firm delivering high-throughput web platforms, asynchronous backend APIs, custom AI automation, and strategic digital solutions for modern enterprises.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginTop: '1.8rem', paddingTop: '1.4rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#38bdf8' }}>Indore, IN</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Corporate HQ</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#818cf8' }}>Full-Stack</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Core Focus</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#c084fc' }}>99.9%</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Uptime SLA</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#34d399' }}>24/7</div>
                                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Support Desk</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 2: Company Vision & Core Values
        {
            id: 2,
            badge: "Who We Are",
            title: "Vision, Mission & Engineering Principles",
            subtitle: "The core values powering every platform and architecture we engineer.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.5rem', borderRadius: '18px', background: '#0f172a', border: '1px solid #1e293b', color: '#f8fafc' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Compass size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0 0 8px 0' }}>Our Vision</h3>
                        <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                            To be a premier technology partner enabling startups and established brands to scale workflows, build decoupled web architectures, and lead digital markets.
                        </p>
                    </div>

                    <div style={{ padding: '1.5rem', borderRadius: '18px', background: '#0f172a', border: '1px solid #1e293b', color: '#f8fafc' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.15)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Zap size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0 0 8px 0' }}>Our Mission</h3>
                        <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                            Engineering robust, modular digital products with clean React codebases, asynchronous Python backends, and continuous security compliance.
                        </p>
                    </div>

                    <div style={{ padding: '1.5rem', borderRadius: '18px', background: '#0f172a', border: '1px solid #1e293b', color: '#f8fafc' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: '0 0 8px 0' }}>Core Pillars</h3>
                        <ul style={{ fontSize: '0.82rem', color: '#94a3b8', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#38bdf8" /> Clean Architecture & Speed</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#38bdf8" /> Data Privacy & Reliability</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#38bdf8" /> Transparent Delivery Sprints</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // SLIDE 3: Enterprise Web Engineering
        {
            id: 3,
            badge: "Core Service Pillar 01",
            title: "Enterprise Web Platforms",
            subtitle: "High-conversion frontends engineered with React & modern CSS toolkits.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#ffffff', margin: '0 0 10px 0' }}>Modern Component Architecture</h3>
                        <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 14px 0' }}>
                            We build responsive, decoupled user interfaces that load in milliseconds. Every layout is crafted with reusability, accessibility, and high conversion at core.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ padding: '10px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', fontSize: '0.82rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                                <span>Modular React.js & Tailwind CSS Frameworks</span>
                            </div>
                            <div style={{ padding: '10px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', fontSize: '0.82rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#818cf8' }} />
                                <span>Framer Motion Micro-Interactions & Transitions</span>
                            </div>
                            <div style={{ padding: '10px 14px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', fontSize: '0.82rem', color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c084fc' }} />
                                <span>100% Mobile, Tablet & Desktop Viewport Optimization</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '18px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase' }}>Technical Specifications</span>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                            <div style={{ padding: '10px', background: '#020617', borderRadius: '10px', border: '1px solid #1e293b' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Core UI</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#f8fafc', marginTop: '2px' }}>React 18 / Vite</div>
                            </div>
                            <div style={{ padding: '10px', background: '#020617', borderRadius: '10px', border: '1px solid #1e293b' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Styles</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#f8fafc', marginTop: '2px' }}>Tailwind CSS</div>
                            </div>
                            <div style={{ padding: '10px', background: '#020617', borderRadius: '10px', border: '1px solid #1e293b' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>State</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#f8fafc', marginTop: '2px' }}>React Hooks</div>
                            </div>
                            <div style={{ padding: '10px', background: '#020617', borderRadius: '10px', border: '1px solid #1e293b' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>API Client</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#f8fafc', marginTop: '2px' }}>Async Fetch / Axios</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 4: High-Performance Backend & APIs
        {
            id: 4,
            badge: "Core Service Pillar 02",
            title: "Backend Microservices & APIs",
            subtitle: "Asynchronous Python FastAPI engines handling structured enterprise logic.",
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px' }}>
                            <div style={{ color: '#38bdf8', fontWeight: '700', fontSize: '0.92rem', marginBottom: '6px' }}>⚡ FastAPI Non-Blocking I/O</div>
                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>
                                ASGI-compliant asynchronous routing capable of processing concurrent requests with sub-150ms response times.
                            </p>
                        </div>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px' }}>
                            <div style={{ color: '#818cf8', fontWeight: '700', fontSize: '0.92rem', marginBottom: '6px' }}>🗄️ Relational Schemas</div>
                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>
                                SQLite & PostgreSQL architectures with ACID guarantees, structured indexing, and parameterized query security.
                            </p>
                        </div>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px' }}>
                            <div style={{ color: '#34d399', fontWeight: '700', fontSize: '0.92rem', marginBottom: '6px' }}>📧 Instant Email Dispatch</div>
                            <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: '1.5', margin: 0 }}>
                                Real-time SMTP and API email alerts streaming candidate resume attachments and customer consultation leads.
                            </p>
                        </div>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#020617', border: '1px solid #1e293b', borderRadius: '14px', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                        <div style={{ color: '#64748b' }}>// SMU Nexora Production API Benchmarks</div>
                        <div style={{ color: '#38bdf8', marginTop: '4px' }}>POST /api/apply → Candidate Ingestion + Resume File Upload</div>
                        <div style={{ color: '#818cf8', marginTop: '4px' }}>POST /api/contact → Client Inquiries + DB Record + Real-time Alert</div>
                        <div style={{ color: '#34d399', marginTop: '4px' }}>Average API Ingestion Latency: &lt; 120ms</div>
                    </div>
                </div>
            )
        },

        // SLIDE 5: AI Solutions & Automation
        {
            id: 5,
            badge: "Core Service Pillar 03",
            title: "AI Solutions & Workflow Automation",
            subtitle: "Custom language models, automated data extraction, and intelligent pipelines.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '18px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Cpu size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>Custom LLM Integrations</h3>
                        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            We integrate enterprise LLM agents to automate document parsing, smart client query classification, and predictive business insights.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#c084fc" /> Automated Resume Screening & Tagging</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#c084fc" /> 24/7 AI-Driven Lead Qualification Bots</div>
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '18px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Zap size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>Process Pipeline Automation</h3>
                        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            Connect webhooks, transactional alerts, and analytics trackers into unified real-time reporting dashboards.
                        </p>
                        <div style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#38bdf8" /> Instant WhatsApp & Email Notifications</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#38bdf8" /> Automated Google Analytics Traffic Reports</div>
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 6: Cloud DevOps & Security Protocols
        {
            id: 6,
            badge: "Infrastructure & Security",
            title: "Cloud DevOps & Enterprise Security",
            subtitle: "Hardened deployments with automated CI/CD and 99.9% uptime guarantees.",
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🐳</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>Dockerized</div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>Isolated Containers</div>
                        </div>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🚀</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>CI/CD Pipeline</div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>Zero-Downtime Push</div>
                        </div>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🔒</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>HTTPS / TLS</div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>Encrypted Transport</div>
                        </div>
                        <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.8rem', marginBottom: '6px' }}>🛡️</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#ffffff' }}>CORS Shield</div>
                            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>Strict Origin Filter</div>
                        </div>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px' }}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Security & Data Privacy Standard</h4>
                        <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>
                            All SMU Nexora endpoints follow strict OWASP mitigation protocols. Database transactions use parameterized SQL abstractions to eliminate injection vectors, while API credentials and keys are isolated inside encrypted environment variable vaults.
                        </p>
                    </div>
                </div>
            )
        },

        // SLIDE 7: 4-Step Agile Delivery Framework
        {
            id: 7,
            badge: "Execution Methodology",
            title: "Our 4-Phase Delivery Framework",
            subtitle: "How we bring software from technical scoping to production deployment.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(56, 189, 248, 0.2)', position: 'absolute', top: '10px', right: '12px' }}>01</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 1</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Technical Scoping</h4>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                            Analyzing operational requirements, defining API endpoints, database schemas, and UX wireframes.
                        </p>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(129, 140, 248, 0.2)', position: 'absolute', top: '10px', right: '12px' }}>02</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#818cf8', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 2</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>UI/UX & Prototyping</h4>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                            Creating responsive components, high-fidelity mockups, and conversion-focused user journeys.
                        </p>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(192, 132, 252, 0.2)', position: 'absolute', top: '10px', right: '12px' }}>03</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#c084fc', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 3</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Full-Stack Sprints</h4>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                            Modular coding, asynchronous FastAPI endpoints, and automated end-to-end integration tests.
                        </p>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(52, 211, 153, 0.2)', position: 'absolute', top: '10px', right: '12px' }}>04</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#34d399', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 4</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Cloud Launch & QA</h4>
                        <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                            Security audits, automated container deployment, DNS setup, and 24/7 reliability monitoring.
                        </p>
                    </div>
                </div>
            )
        },

        // SLIDE 8: Commercial Collaboration Models
        {
            id: 8,
            badge: "Commercial Models",
            title: "Flexible Engagement Models",
            subtitle: "Transparent collaboration tiers designed for startups, SMEs, and growth brands.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', marginBottom: '6px' }}>Model 01</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>Fixed Milestone Project</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            For well-defined web apps, business landing portals, or specific API integrations.
                        </p>
                        <ul style={{ fontSize: '0.78rem', color: '#cbd5e1', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Clear scope & deliverables</li>
                            <li>• Guaranteed deadline timeline</li>
                            <li>• 30-day post-launch support</li>
                        </ul>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '2px solid #6366f1', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.2)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#818cf8', textTransform: 'uppercase', marginBottom: '6px' }}>Model 02 (Recommended)</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>Dedicated Developer Squad</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            Full-time embedded engineers (React + FastAPI) acting directly as an extension of your team.
                        </p>
                        <ul style={{ fontSize: '0.78rem', color: '#cbd5e1', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Direct sprint access via Slack/Git</li>
                            <li>• Weekly deliverable demos</li>
                            <li>• Agile architecture scaling</li>
                        </ul>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#c084fc', textTransform: 'uppercase', marginBottom: '6px' }}>Model 03</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>Technical Consultation</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            Architecture reviews, legacy system migration planning, and cloud optimization.
                        </p>
                        <ul style={{ fontSize: '0.78rem', color: '#cbd5e1', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Codebase vulnerability audits</li>
                            <li>• Cloud scaling roadmap</li>
                            <li>• Performance tuning</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // SLIDE 9: Quality Benchmarks & SLA
        {
            id: 9,
            badge: "SLA Commitments",
            title: "Quality Standards & Guarantees",
            subtitle: "Measurable performance benchmarks backing our corporate solutions.",
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ padding: '1.4rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#38bdf8' }}>&lt; 150ms</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>API Latency</div>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '4px 0 0 0' }}>High-speed async I/O benchmarks.</p>
                        </div>
                        <div style={{ padding: '1.4rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#818cf8' }}>&lt; 24 Hrs</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>Inquiry SLA</div>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '4px 0 0 0' }}>Guaranteed consultant response.</p>
                        </div>
                        <div style={{ padding: '1.4rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: '900', color: '#34d399' }}>100%</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#ffffff', marginTop: '4px' }}>Source Code IP</div>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '4px 0 0 0' }}>Full IP transfer upon sign-off.</p>
                        </div>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                        <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#ffffff' }}>ISO & Modern Clean-Code Engineering Standards</div>
                            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '2px' }}>Type-hinted Python backends with ESLint-validated modular React frontends.</div>
                        </div>
                        <div style={{ padding: '6px 14px', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '10px', fontSize: '0.78rem', fontWeight: '700' }}>
                            Verified Production Standard
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 10: Official Contact Desk & Collaboration
        {
            id: 10,
            badge: "Direct Collaboration",
            title: "Connect With Our Engineering Desk",
            subtitle: "Ready to accelerate your technical roadmap? Reach out today.",
            render: () => (
                <div style={{ padding: '1.8rem', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', color: '#ffffff' }}>
                        <Sparkles size={26} />
                    </div>

                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#ffffff', margin: '0 0 6px 0' }}>
                        SMU Nexora Technologies Pvt. Ltd.
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: '1.5' }}>
                        Contact our engineering leads for project estimations, corporate consultation, or technical mentorship inquiries.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', maxWidth: '650px', margin: '0 auto 1.5rem auto', textAlign: 'left' }}>
                        <div style={{ padding: '12px', background: '#020617', borderRadius: '12px', border: '1px solid #1e293b' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Official Email</div>
                            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#38bdf8', marginTop: '2px' }}>smunextech@gmail.com</div>
                        </div>
                        <div style={{ padding: '12px', background: '#020617', borderRadius: '12px', border: '1px solid #1e293b' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Corporate HQ</div>
                            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#f8fafc', marginTop: '2px' }}>Indore, MP, India</div>
                        </div>
                        <div style={{ padding: '12px', background: '#020617', borderRadius: '12px', border: '1px solid #1e293b' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Direct WhatsApp</div>
                            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#34d399', marginTop: '2px' }}>+91 8435299100</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <a
                            href="mailto:smunextech@gmail.com"
                            style={{ padding: '10px 22px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: '700', background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                            <Mail size={16} /> Email Engineering Desk
                        </a>
                        <a
                            href="https://wa.me/918435299100"
                            target="_blank"
                            rel="noreferrer"
                            style={{ padding: '10px 22px', borderRadius: '10px', fontSize: '0.85rem', fontWeight: '700', background: '#1e293b', color: '#f8fafc', textDecoration: 'none', border: '1px solid #334155', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                        >
                            Direct WhatsApp Chat
                        </a>
                    </div>
                </div>
            )
        }
    ];

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(12px)' }}>
            <div style={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '24px', width: '100%', maxWidth: '980px', height: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden' }}>

                {/* Top Header Bar */}
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(15, 23, 42, 0.7)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                            <Building2 size={18} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#ffffff', margin: 0 }}>SMU Nexora Technologies</h3>
                            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>Corporate Capabilities Deck 2026</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            onClick={() => window.print()}
                            style={{ background: '#0f172a', border: '1px solid #334155', color: '#cbd5e1', padding: '6px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                            title="Print or Save as PDF"
                        >
                            <Download size={14} />
                            <span>Save / Print</span>
                        </button>
                        <button
                            onClick={onClose}
                            style={{ background: '#0f172a', border: '1px solid #334155', color: '#94a3b8', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Slide Body */}
                <div style={{ padding: '1.5rem 2rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {slides[currentSlide].badge}
                            </span>
                            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', margin: '4px 0 0 0' }}>
                                {slides[currentSlide].title}
                            </h2>
                            <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '4px 0 0 0' }}>
                                {slides[currentSlide].subtitle}
                            </p>
                        </div>

                        {slides[currentSlide].render()}
                    </div>
                </div>

                {/* Bottom Controls */}
                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #1e293b', background: 'rgba(15, 23, 42, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        style={{ background: '#0f172a', border: '1px solid #334155', color: '#cbd5e1', padding: '8px 16px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer', opacity: currentSlide === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                        <ArrowLeft size={16} />
                        <span>Previous</span>
                    </button>

                    {/* Dots Indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {slides.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                style={{
                                    height: '8px',
                                    width: currentSlide === idx ? '24px' : '8px',
                                    borderRadius: '9999px',
                                    background: currentSlide === idx ? '#38bdf8' : '#334155',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'all 0.2s ease'
                                }}
                                title={`Jump to Slide ${idx + 1}`}
                            />
                        ))}
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#64748b', marginLeft: '10px' }}>
                            Slide {currentSlide + 1} of {slides.length}
                        </span>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentSlide === slides.length - 1}
                        style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)', border: 'none', color: '#ffffff', padding: '8px 18px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700', cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer', opacity: currentSlide === slides.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.25)' }}
                    >
                        <span>Next</span>
                        <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </div>
    );
}