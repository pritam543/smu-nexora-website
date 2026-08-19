import React, { useState } from 'react';
import {
    Building2,
    Sparkles,
    Code2,
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
    FileText,
    ShoppingCart,
    Megaphone
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
                    <div style={{ padding: '2.5rem', borderRadius: '24px', background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)', color: '#1e1b4b', border: '1px solid #c7d2fe', boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.15)', position: 'relative', overflow: 'hidden' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4f46e5', background: '#ffffff', padding: '5px 14px', borderRadius: '9999px', border: '1px solid #c7d2fe', boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                            Official Capabilities Deck
                        </span>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', marginTop: '1.2rem', lineHeight: '1.2', color: '#1e1b4b' }}>
                            Building Scalable & High-Impact <br />
                            <span style={{ background: 'linear-gradient(90deg, #4f46e5, #6366f1, #0284c7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Enterprise Digital Systems
                            </span>
                        </h2>
                        <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '1rem', maxWidth: '650px', lineHeight: '1.6' }}>
                            SMU Nexora Technologies is a specialized software engineering firm delivering high-throughput web platforms, asynchronous backend APIs, high-converting e-commerce systems, and performance digital strategies.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #c7d2fe' }}>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#4f46e5' }}>Indore, IN</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Corporate HQ</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0284c7' }}>Full-Stack</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Core Specialization</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#059669' }}>99.9%</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Uptime SLA</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#d97706' }}>24/7</div>
                                <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>Technical Desk</div>
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
            title: "Vision, Mission & Core Values",
            subtitle: "The engineering principles that power our client digital architectures.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.6rem', borderRadius: '20px', background: '#ffffff', border: '1px solid #e0e7ff', color: '#1e1b4b', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.05)' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#eef2ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Compass size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '0 0 8px 0', color: '#1e1b4b' }}>Our Vision</h3>
                        <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                            To be a premier technology partner empowering businesses with high-speed web platforms, robust data protection, and transparent delivery milestones.
                        </p>
                    </div>

                    <div style={{ padding: '1.6rem', borderRadius: '20px', background: '#ffffff', border: '1px solid #e0e7ff', color: '#1e1b4b', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.05)' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Zap size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '0 0 8px 0', color: '#1e1b4b' }}>Our Mission</h3>
                        <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                            Crafting modular React frontend interfaces backed by asynchronous FastAPI microservices and conversion-focused design systems.
                        </p>
                    </div>

                    <div style={{ padding: '1.6rem', borderRadius: '20px', background: '#ffffff', border: '1px solid #e0e7ff', color: '#1e1b4b', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.05)' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#faf5ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '0 0 8px 0', color: '#1e1b4b' }}>Core Pillars</h3>
                        <ul style={{ fontSize: '0.84rem', color: '#475569', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#4f46e5" /> Transparent Code Architecture</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#4f46e5" /> Strict Security & Privacy</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={14} color="#4f46e5" /> Agile 2-Week Sprint Delivery</li>
                        </ul>
                    </div>
                </div>
            )
        },

        // SLIDE 3: Enterprise Web Engineering
        {
            id: 3,
            badge: "Core Service Pillar 01",
            title: "Enterprise Web Applications",
            subtitle: "High-conversion frontends engineered with React & modern CSS toolkits.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 10px 0' }}>Modern Component Architecture</h3>
                        <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.6', margin: '0 0 14px 0' }}>
                            We build responsive, decoupled user interfaces that load in milliseconds. Every layout is crafted with atomic reusability, accessibility, and high conversion at core.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ padding: '10px 14px', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '12px', fontSize: '0.84rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4f46e5' }} />
                                <span>Modular React.js & Tailwind CSS Frameworks</span>
                            </div>
                            <div style={{ padding: '10px 14px', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '12px', fontSize: '0.84rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0284c7' }} />
                                <span>Framer Motion Micro-Interactions & Transitions</span>
                            </div>
                            <div style={{ padding: '10px 14px', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '12px', fontSize: '0.84rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }} />
                                <span>100% Mobile, Tablet & Desktop Viewport Optimization</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '20px', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.05)' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase' }}>Technical Specifications</span>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>Core UI</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e1b4b', marginTop: '2px' }}>React 18 / Vite</div>
                            </div>
                            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>Styles</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e1b4b', marginTop: '2px' }}>Tailwind CSS</div>
                            </div>
                            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>State</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e1b4b', marginTop: '2px' }}>React Hooks</div>
                            </div>
                            <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600' }}>API Client</div>
                                <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#1e1b4b', marginTop: '2px' }}>Async Fetch / Axios</div>
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
                        <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px' }}>
                            <div style={{ color: '#4f46e5', fontWeight: '800', fontSize: '0.95rem', marginBottom: '6px' }}>⚡ FastAPI Non-Blocking I/O</div>
                            <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>
                                ASGI-compliant asynchronous routing capable of processing concurrent requests with sub-150ms response times.
                            </p>
                        </div>
                        <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px' }}>
                            <div style={{ color: '#0284c7', fontWeight: '800', fontSize: '0.95rem', marginBottom: '6px' }}>🗄️ Relational Schemas</div>
                            <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>
                                SQLite & PostgreSQL architectures with ACID guarantees, structured indexing, and parameterized query security.
                            </p>
                        </div>
                        <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px' }}>
                            <div style={{ color: '#16a34a', fontWeight: '800', fontSize: '0.95rem', marginBottom: '6px' }}>📧 Instant Email Dispatch</div>
                            <p style={{ color: '#475569', fontSize: '0.82rem', lineHeight: '1.5', margin: 0 }}>
                                Real-time SMTP and API email alerts streaming candidate resume attachments and customer consultation leads.
                            </p>
                        </div>
                    </div>

                    <div style={{ padding: '1.2rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', fontFamily: 'monospace', fontSize: '0.82rem' }}>
                        <div style={{ color: '#64748b' }}>// SMU Nexora Production API Benchmarks</div>
                        <div style={{ color: '#4f46e5', marginTop: '4px', fontWeight: '600' }}>POST /api/apply → Candidate Ingestion + Resume File Upload</div>
                        <div style={{ color: '#0284c7', marginTop: '4px', fontWeight: '600' }}>POST /api/contact → Client Inquiries + DB Record + Real-time Alert</div>
                        <div style={{ color: '#16a34a', marginTop: '4px', fontWeight: '700' }}>Average API Ingestion Latency: &lt; 120ms</div>
                    </div>
                </div>
            )
        },

        // SLIDE 5: Cyber Security & Data Protection
        {
            id: 5,
            badge: "Core Service Pillar 03",
            title: "Cyber Security & Compliance",
            subtitle: "Vulnerability audits, penetration testing, and end-to-end data encryption.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '20px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fef2f2', color: '#e11d48', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <ShieldCheck size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Security Assessments & Audits</h3>
                        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            Comprehensive vulnerability scanning, OWASP top-10 mitigation, and database security hardened against data exposure.
                        </p>
                        <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#e11d48" /> Parameterized Database Protections</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#e11d48" /> Strict CORS Policy & Header Isolation</div>
                        </div>
                    </div>

                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '20px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Zap size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Data Privacy & Encryption</h3>
                        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            All application secrets, API tokens, and client credentials are isolated inside encrypted environment variable vaults.
                        </p>
                        <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#16a34a" /> HTTPS/TLS Data Transport Layer</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#16a34a" /> Automated Daily System Backups</div>
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 6: E-Commerce & Growth Solutions
        {
            id: 6,
            badge: "Core Service Pillar 04",
            title: "E-Commerce & Digital Growth",
            subtitle: "High-converting online stores, performance marketing, and technical SEO.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '20px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <ShoppingCart size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Custom E-Commerce Stores</h3>
                        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            High-converting Shopify Plus stores and custom headless marketplace architectures with seamless mobile checkout flows.
                        </p>
                        <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#059669" /> Stripe & Razorpay Payment Integrations</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#059669" /> Real-time Inventory & Order Sync</div>
                        </div>
                    </div>

                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '20px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#fffbeb', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <Megaphone size={22} />
                        </div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Digital Growth & SEO</h3>
                        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            Technical on-page SEO, conversion funnel optimizations, and analytics tracking with Google Analytics 4 (GA4).
                        </p>
                        <div style={{ fontSize: '0.82rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#d97706" /> Organic Search Ranking Acceleration</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="#d97706" /> Lowered Customer Acquisition Costs (CAC)</div>
                        </div>
                    </div>
                </div>
            )
        },

        // SLIDE 7: 4-Step Agile Delivery Framework
        {
            id: 7,
            badge: "Execution Methodology",
            title: "Our 4-Phase Delivery Framework",
            subtitle: "How we take digital products from technical scoping to production launch.",
            render: () => (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(99, 102, 241, 0.15)', position: 'absolute', top: '10px', right: '12px' }}>01</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 1</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Technical Scoping</h4>
                        <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                            Analyzing business requirements, defining API endpoints, database schemas, and UX wireframes.
                        </p>
                    </div>

                    <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(2, 132, 199, 0.15)', position: 'absolute', top: '10px', right: '12px' }}>02</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 2</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>UI/UX & Prototyping</h4>
                        <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                            Creating responsive component libraries, high-fidelity mockups, and conversion user flows.
                        </p>
                    </div>

                    <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(147, 51, 234, 0.15)', position: 'absolute', top: '10px', right: '12px' }}>03</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#9333ea', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 3</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Full-Stack Sprints</h4>
                        <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                            Clean React development, asynchronous FastAPI endpoints, and automated integration tests.
                        </p>
                    </div>

                    <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px', position: 'relative' }}>
                        <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'rgba(22, 163, 74, 0.15)', position: 'absolute', top: '10px', right: '12px' }}>04</span>
                        <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#16a34a', textTransform: 'uppercase', marginBottom: '6px' }}>Phase 4</div>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Launch & Quality QA</h4>
                        <p style={{ fontSize: '0.78rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                            Security reviews, production container deployment, DNS setup, and 24/7 reliability monitoring.
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
                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '18px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', marginBottom: '6px' }}>Model 01</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Fixed Milestone Project</h3>
                        <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            For well-defined web platforms, business portals, or custom API integrations.
                        </p>
                        <ul style={{ fontSize: '0.8rem', color: '#334155', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Clear scope & deliverables</li>
                            <li>• Guaranteed deadline timeline</li>
                            <li>• 30-day post-launch support</li>
                        </ul>
                    </div>

                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '2px solid #6366f1', borderRadius: '18px', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.15)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#6366f1', textTransform: 'uppercase', marginBottom: '6px' }}>Model 02 (Recommended)</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Dedicated Developer Squad</h3>
                        <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            Full-time embedded engineers (React + FastAPI) acting directly as an extension of your team.
                        </p>
                        <ul style={{ fontSize: '0.8rem', color: '#334155', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Direct sprint access via Slack/Git</li>
                            <li>• Weekly deliverable demos</li>
                            <li>• Agile architecture scaling</li>
                        </ul>
                    </div>

                    <div style={{ padding: '1.6rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '18px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#9333ea', textTransform: 'uppercase', marginBottom: '6px' }}>Model 03</div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>Strategic IT Consultation</h3>
                        <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                            Architecture audits, legacy migration roadmap, and application performance tuning.
                        </p>
                        <ul style={{ fontSize: '0.8rem', color: '#334155', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>• Codebase vulnerability audits</li>
                            <li>• UI/UX conversion audits</li>
                            <li>• Database performance tuning</li>
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
                        <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '18px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#4f46e5' }}>&lt; 150ms</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b', marginTop: '4px' }}>API Latency</div>
                            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '4px 0 0 0' }}>High-speed async I/O benchmarks.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '18px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#0284c7' }}>&lt; 24 Hrs</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b', marginTop: '4px' }}>Inquiry SLA</div>
                            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '4px 0 0 0' }}>Guaranteed consultant response.</p>
                        </div>
                        <div style={{ padding: '1.5rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '18px', textAlign: 'center' }}>
                            <div style={{ fontSize: '2.2rem', fontWeight: '900', color: '#16a34a' }}>100%</div>
                            <div style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b', marginTop: '4px' }}>Source Code IP</div>
                            <p style={{ fontSize: '0.78rem', color: '#64748b', margin: '4px 0 0 0' }}>Full IP transfer upon project sign-off.</p>
                        </div>
                    </div>

                    <div style={{ padding: '1.4rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e1b4b' }}>Modern Clean-Code Engineering Standards</div>
                            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>Type-hinted Python backends with ESLint-validated modular React frontends.</div>
                        </div>
                        <div style={{ padding: '6px 14px', background: '#f0fdf4', color: '#16a34a', border: '1px solid #bbf7d0', borderRadius: '10px', fontSize: '0.78rem', fontWeight: '700' }}>
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
                <div style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e0e7ff', borderRadius: '24px', textAlign: 'center' }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto', color: '#ffffff', boxShadow: '0 8px 16px rgba(99, 102, 241, 0.25)' }}>
                        <Sparkles size={26} />
                    </div>

                    <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: '#1e1b4b', margin: '0 0 6px 0' }}>
                        SMU Nexora Technologies Pvt. Ltd.
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: '#475569', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: '1.5' }}>
                        Contact our engineering leads for project estimations, corporate consultation, or technical mentorship inquiries.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', maxWidth: '650px', margin: '0 auto 1.5rem auto', textAlign: 'left' }}>
                        <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Official Email</div>
                            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#4f46e5', marginTop: '2px' }}>smunextech@gmail.com</div>
                        </div>
                        <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Corporate HQ</div>
                            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#1e1b4b', marginTop: '2px' }}>Indore, MP, India</div>
                        </div>
                        <div style={{ padding: '12px 14px', background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                            <div style={{ fontSize: '0.7rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Direct WhatsApp</div>
                            <div style={{ fontSize: '0.84rem', fontWeight: '700', color: '#16a34a', marginTop: '2px' }}>+91 8435299100</div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <a
                            href="mailto:smunextech@gmail.com"
                            style={{ padding: '11px 24px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: '700', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', boxShadow: '0 6px 14px rgba(99, 102, 241, 0.2)' }}
                        >
                            <Mail size={16} /> Email Engineering Desk
                        </a>
                        <a
                            href="https://wa.me/918435299100"
                            target="_blank"
                            rel="noreferrer"
                            style={{ padding: '11px 24px', borderRadius: '12px', fontSize: '0.88rem', fontWeight: '700', background: '#ffffff', color: '#1e1b4b', textDecoration: 'none', border: '1px solid #cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: 'rgba(30, 27, 75, 0.45)', backdropFilter: 'blur(12px)' }}>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e0e7ff', borderRadius: '24px', width: '100%', maxWidth: '980px', height: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)', overflow: 'hidden' }}>

                {/* Top Header Bar */}
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                            <Building2 size={18} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>SMU Nexora Technologies</h3>
                            <p style={{ fontSize: '0.7rem', color: '#6366f1', fontWeight: '700', margin: 0 }}>Corporate Capabilities Deck 2026</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            onClick={() => window.print()}
                            style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#334155', padding: '6px 14px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                            title="Print or Save as PDF"
                        >
                            <Download size={14} />
                            <span>Save / Print</span>
                        </button>
                        <button
                            onClick={onClose}
                            style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#64748b', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Slide Body */}
                <div style={{ padding: '1.5rem 2rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '850px', margin: '0 auto', width: '100%' }}>
                        <div style={{ marginBottom: '1.2rem' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {slides[currentSlide].badge}
                            </span>
                            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1e1b4b', margin: '4px 0 0 0' }}>
                                {slides[currentSlide].title}
                            </h2>
                            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '4px 0 0 0' }}>
                                {slides[currentSlide].subtitle}
                            </p>
                        </div>

                        {slides[currentSlide].render()}
                    </div>
                </div>

                {/* Bottom Controls */}
                <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid #e0e7ff', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                        onClick={handlePrev}
                        disabled={currentSlide === 0}
                        style={{ background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155', padding: '8px 16px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700', cursor: currentSlide === 0 ? 'not-allowed' : 'pointer', opacity: currentSlide === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '6px' }}
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
                                    background: currentSlide === idx ? '#4f46e5' : '#cbd5e1',
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
                        style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', border: 'none', color: '#ffffff', padding: '8px 18px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '700', cursor: currentSlide === slides.length - 1 ? 'not-allowed' : 'pointer', opacity: currentSlide === slides.length - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)' }}
                    >
                        <span>Next</span>
                        <ArrowRight size={16} />
                    </button>
                </div>

            </div>
        </div>
    );
}