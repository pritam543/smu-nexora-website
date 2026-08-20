import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Sparkles, Code2, Globe, ShieldCheck,
  Megaphone, GraduationCap, ArrowRight, ArrowLeft,
  Upload, CheckCircle2, MessageSquare, Briefcase, User, Mail, Phone, Award, FileText,
  ChevronDown, Building, Stethoscope, School, Compass, Hotel, ShoppingCart,
  CheckCircle, Users, Target, Laptop, Send, Layers, MessageCircle, AlertCircle, X, Camera, Menu,
  Check, Lock, Zap, Quote, Star, Palette
} from 'lucide-react';
import CorporateDeck from './components/CorporateDeck';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success',
    userName: '',
    fieldTitle: '',
    message: ''
  });

  const [activeService, setActiveService] = useState('web-dev');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [careerData, setCareerData] = useState({
    domain: 'Web & Game Development',
    opportunityType: 'Internship Program',
    experienceLevel: 'Fresher / Student',
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    skills: '',
    portfolioLink: '',
    availability: 'Immediate Joining',
    userMessage: ''
  });
  const [resumeFile, setResumeFile] = useState(null);

  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Business Inquiry',
    userMessage: ''
  });

  // LIVE RENDER BACKEND BASE URL
  const API_BASE_URL = "https://smu-nexora-website.onrender.com";

  // ==================== EXACT BACK BUTTON ROUTING LOGIC ====================
  useEffect(() => {
    window.history.replaceState({ page: 'home' }, '', '#home');

    const handlePopState = (event) => {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setSelectedDetail(null);
        window.history.pushState({ page: 'home' }, '', '#home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage]);

  const navigateTo = (pageName, preselectDomain = null, detailObj = null) => {
    if (preselectDomain) {
      setCareerData(prev => ({ ...prev, domain: preselectDomain }));
    }
    if (detailObj) {
      setSelectedDetail(detailObj);
    }

    setWhatWeDoOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);

    if (pageName === 'home') {
      setCurrentPage('home');
      setSelectedDetail(null);
      window.history.pushState({ page: 'home' }, '', '#home');
    } else {
      setCurrentPage(pageName);
      window.history.pushState({ page: pageName }, '', `#${pageName}`);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const slides = [
    {
      title: "Building Enterprise Digital Ecosystems",
      subtitle: "Empowering global businesses with high-performance Full-Stack Web Platforms and Microservices.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      target: "services"
    },
    {
      title: "Transforming Careers Through Technology",
      subtitle: "Join SMU Nexora's mentorship program to work on real-world IT client systems and platforms.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      target: "careers"
    },
    {
      title: "Security Hardened & Conversion Architectures",
      subtitle: "Safeguarding digital systems with robust encryption protocols and performance web frameworks.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      target: "services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // EXACT 5 CORE FIELDS (3 TOP + 2 BOTTOM CENTERED) - PASTEL PALETTE
  const fields = [
    {
      id: 'web-dev',
      title: "Web & Game Development",
      icon: Globe,
      color: "#0284c7",
      pastelBg: "#e0f2fe",
      borderGlow: "#bae6fd",
      desc: "Engineered scalable web applications, client dashboards, and interactive gaming experiences.",
      techStack: "React, Next.js, Node.js, Unity, WebGL, TypeScript",
      businessImpact: "Accelerates conversion rates, handles high concurrent traffic, and ensures 99.9% uptime."
    },
    {
      id: 'cyber-security',
      title: "Cyber Security & Auditing",
      icon: ShieldCheck,
      color: "#db2777",
      pastelBg: "#fce7f3",
      borderGlow: "#fbcfe8",
      desc: "Vulnerability assessments, penetration testing, and end-to-end data encryption protocols.",
      techStack: "Kali Linux, Wireshark, OWASP Protocols, Encrypted DBs",
      businessImpact: "Safeguards intellectual property and critical customer financial records."
    },
    {
      id: 'digital-marketing',
      title: "Digital Growth & SEO",
      icon: Megaphone,
      color: "#d97706",
      pastelBg: "#fef3c7",
      borderGlow: "#fde68a",
      desc: "Performance marketing, technical on-page SEO, and brand ROI conversion strategies.",
      techStack: "Google Analytics 4, SEMrush, Meta Ads Manager, Ahrefs",
      businessImpact: "Drives organic lead acquisition and lowers Customer Acquisition Cost (CAC)."
    },
    {
      id: 'e-commerce',
      title: "E-Commerce Systems",
      icon: ShoppingCart,
      color: "#059669",
      pastelBg: "#d1fae5",
      borderGlow: "#a7f3d0",
      desc: "High-converting Shopify Plus stores and custom headless marketplace architectures.",
      techStack: "Shopify Plus, Liquid, WooCommerce, Stripe / Razorpay",
      businessImpact: "Boosts online checkout conversions with frictionless mobile payment flows."
    },
    {
      id: 'consulting',
      title: "IT Strategic Consulting",
      icon: Code2,
      color: "#2563eb",
      pastelBg: "#dbeafe",
      borderGlow: "#bfdbfe",
      desc: "Modernizing legacy architectures and defining digital product technical roadmaps.",
      techStack: "System Design Blueprints, Modular APIs, Legacy Refactoring",
      businessImpact: "Aligns software engineering roadmaps directly with core business revenue goals."
    }
  ];

  // 1. FOUNDER & CO-FOUNDER (PASTEL PINK & POWDER BLUE BORDERS)
  const leaders = [
    {
      title: "Founder",
      name: "Sakshi Pare",
      image: "/images/founder.jpg",
      quote: "Our vision is to engineer resilient, high-speed digital platforms that accelerate client businesses while fostering next-generation IT engineering talent in Indore.",
      badgeColor: "#db2777",
      badgeBg: "#fce7f3",
      borderColor: "#f472b6",
      glowShadow: "rgba(244, 114, 182, 0.35)"
    },
    {
      title: "Co-Founder",
      name: "Technical Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      quote: "We architect decoupled, asynchronous microservices and conversion-focused web systems engineered strictly for 99.9% uptime and bulletproof security.",
      badgeColor: "#0284c7",
      badgeBg: "#e0f2fe",
      borderColor: "#38bdf8",
      glowShadow: "rgba(56, 189, 248, 0.35)"
    }
  ];

  // 2. WORKING SQUAD (PASTEL BORDERS & EXTRA LARGE PHOTOS)
  const teamMembers = [
    {
      role: "Frontend Developer",
      name: "Lead Full-Stack Developer",
      field: "React.js, Next.js & TypeScript Systems",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      badgeColor: "#0284c7",
      badgeBg: "#e0f2fe",
      borderColor: "#7dd3fc",
      glowShadow: "rgba(125, 211, 252, 0.3)"
    },
    {
      role: "Backend Developer",
      name: "Backend Systems Engineer",
      field: "Python, FastAPI & Relational Databases",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      badgeColor: "#059669",
      badgeBg: "#d1fae5",
      borderColor: "#6ee7b7",
      glowShadow: "rgba(110, 231, 183, 0.3)"
    },
    {
      role: "Digital Marketing Specialist",
      name: "Digital Growth Strategist",
      field: "Performance Marketing, Ads & Technical SEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      badgeColor: "#db2777",
      badgeBg: "#fce7f3",
      borderColor: "#f472b6",
      glowShadow: "rgba(244, 114, 182, 0.3)"
    }
  ];

  const whatWeDoList = [
    { id: 'education', name: "Education", icon: GraduationCap, tagline: "Empowering Modern Learning Environments", description: "Digitizing educational ecosystems with modern LMS portals, online exam engines, and cloud campus portals.", features: ["Student Analytics Dashboard", "Live Interactive Classrooms", "Automated Grading Systems"] },
    { id: 'healthcare', name: "Healthcare", icon: Stethoscope, tagline: "Digital Health Solutions & Patient Care Systems", description: "Building HIPAA-compliant telemedicine platforms, EHR integrations, and hospital inventory workflows.", features: ["Tele-Consultation Systems", "EHR/EMR Cloud Integration", "Hospital Management Suite"] },
    { id: 'schools', name: "Schools", icon: School, tagline: "Smart Campus Automation for K-12 Institutions", description: "Comprehensive ERP systems designed for schools to simplify fee collection and attendance tracking.", features: ["Parent Mobile Application", "Biometric & Attendance ERP", "Fee Management Gateway"] },
    { id: 'architectures', name: "Architectures", icon: Compass, tagline: "Digital Engineering for Infrastructure & Design", description: "Delivering 3D rendering management, CAD file sync cloud tools, and project collaboration software.", features: ["3D Project Portals", "Cloud Asset Management", "Client Design Review Suite"] },
    { id: 'hospitality', name: "Hospitality", icon: Hotel, tagline: "Guest Experience Platforms & Hotel Tech", description: "Smart booking engines, guest management software, room controls, and loyalty program integrations.", features: ["Contactless Check-In/Out", "Direct Booking Engine", "POS & Room Service Integration"] }
  ];

  const handleCareerInputChange = (e) => {
    const { name, value } = e.target;
    setCareerData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  };

  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setModalState({ isOpen: true, type: 'error', userName: careerData.fullName || 'Applicant', fieldTitle: careerData.domain, message: 'Please attach your Resume PDF/DOCX before submitting!' });
      return;
    }

    setIsSubmitting(true);
    const submitData = new FormData();
    submitData.append("domain", careerData.domain);
    submitData.append("opportunityType", careerData.opportunityType);
    submitData.append("experienceLevel", careerData.experienceLevel);
    submitData.append("fullName", careerData.fullName);
    submitData.append("email", careerData.email);
    submitData.append("phone", careerData.phone);
    submitData.append("qualification", careerData.qualification);
    submitData.append("skills", careerData.skills);
    submitData.append("portfolioLink", careerData.portfolioLink);
    submitData.append("availability", careerData.availability);
    submitData.append("userMessage", careerData.userMessage);
    submitData.append("resume", resumeFile);

    try {
      const response = await fetch(`${API_BASE_URL}/api/apply`, { method: "POST", body: submitData });
      const result = await response.json();
      if (response.ok && result.success) {
        setModalState({ isOpen: true, type: 'success', userName: careerData.fullName, fieldTitle: careerData.domain, message: 'Your application has been received successfully. Email alert dispatched.' });
      } else {
        setModalState({ isOpen: true, type: 'error', userName: careerData.fullName || 'User', fieldTitle: careerData.domain, message: result.detail || 'Failed to submit application. Please check backend server.' });
      }
    } catch (err) {
      setModalState({ isOpen: true, type: 'error', userName: careerData.fullName || 'User', fieldTitle: careerData.domain, message: 'Backend Connection Failed! Live server is starting up or unreachable.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append("fullName", contactData.fullName);
    submitData.append("email", contactData.email);
    submitData.append("phone", contactData.phone);
    submitData.append("subject", contactData.subject);
    submitData.append("userMessage", contactData.userMessage);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, { method: "POST", body: submitData });
      const result = await response.json();
      if (response.ok && result.success) {
        setModalState({ isOpen: true, type: 'success', userName: contactData.fullName, fieldTitle: contactData.subject, message: 'Your inquiry message has been submitted. Email alert dispatched.' });
        setContactData({ fullName: '', email: '', phone: '', subject: 'General Business Inquiry', userMessage: '' });
      } else {
        setModalState({ isOpen: true, type: 'error', userName: contactData.fullName || 'User', fieldTitle: contactData.subject, message: result.detail || 'Inquiry submission failed. Please try again.' });
      }
    } catch (err) {
      setModalState({ isOpen: true, type: 'error', userName: contactData.fullName || 'User', fieldTitle: contactData.subject, message: 'Backend Connection Failed! Live server is starting up or unreachable.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (id) => {
    setWhatWeDoOpen(false);
    setServicesOpen(false);
    setMobileMenuOpen(false);

    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pure Pastel Palette from User's Image
  const pastelMainBg = "linear-gradient(135deg, #fdf2f8 0%, #faf8f2 50%, #eff6ff 100%)";

  return (
    <div style={{ background: pastelMainBg, color: '#1e293b', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", position: 'relative', overflowX: 'hidden' }}>

      {/* GLOBAL HOVER & RESPONSIVE STYLES */}
      <style>{`
        .nav-btn-hover {
          position: relative;
          transition: color 0.25s ease;
        }
        .nav-btn-hover:after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #38bdf8;
          transition: width 0.25s ease;
        }
        .nav-btn-hover:hover {
          color: #0284c7 !important;
        }
        .nav-btn-hover:hover:after {
          width: 100%;
        }

        .hover-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease !important;
        }
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 32px rgba(186, 230, 253, 0.45) !important;
          border-color: #bae6fd !important;
        }

        .hover-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease !important;
        }
        .hover-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 8px 18px rgba(191, 219, 254, 0.5) !important;
        }

        .hover-social {
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease !important;
        }
        .hover-social:hover {
          transform: translateX(4px) !important;
          background: #ffffff !important;
        }

        .mobile-hamburger-btn {
          display: none;
          background: none;
          border: none;
          color: #1e293b;
          cursor: pointer;
          padding: 6px;
        }

        /* 3 TOP + 2 BOTTOM CENTERED FLEX GRID */
        .services-centered-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-flex-card {
          flex: 0 1 100%;
          width: 100%;
          box-sizing: border-box;
        }

        @media (min-width: 768px) {
          .services-flex-card {
            flex: 0 1 calc(50% - 16px);
            max-width: calc(50% - 16px);
          }
        }

        @media (min-width: 1040px) {
          .services-flex-card {
            flex: 0 1 calc(33.333% - 18px);
            max-width: calc(33.333% - 18px);
          }
        }

        @media (max-width: 868px) {
          .nav-items-container {
            display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            width: 100% !important;
            align-items: flex-start !important;
            margin-top: 1rem !important;
            padding-top: 1rem !important;
            border-top: 1px solid #e0f2fe !important;
            gap: 1rem !important;
          }
          .mobile-hamburger-btn {
            display: block !important;
          }
          .dropdown-desktop-panel {
            position: relative !important;
            width: 100% !important;
            box-shadow: none !important;
            margin-top: 8px !important;
          }
          .services-desktop-panel {
            flex-direction: column-reverse !important;
          }
        }
      `}</style>

      {/* FIXED NAV BAR (PASTEL FROSTED) */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #e2edf8', padding: '0.8rem 1.5rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          {/* Company Logo & Title */}
          <div onClick={() => navigateTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #fbcfe8 0%, #bfdbfe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e293b', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(191, 219, 254, 0.35)', border: '1px solid #ffffff' }}>
              SN
            </div>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e1b4b', letterSpacing: '-0.02em' }}>SMU NEXORA</span>
              <span style={{ fontSize: '0.7rem', display: 'block', color: '#0284c7', fontWeight: '700', letterSpacing: '0.05em' }}>TECHNOLOGIES</span>
            </div>
          </div>

          {/* Right Corner Hamburger Button (Only on Mobile) */}
          <button className="mobile-hamburger-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Desktop & Mobile Menu Bar */}
          <div className="nav-items-container" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', position: 'relative' }}>
            <button onClick={() => navigateTo('home')} className="nav-btn-hover" style={navLinkStyle}>Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-btn-hover" style={navLinkStyle}>About Us</button>

            {/* What We Do Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setWhatWeDoOpen(true)} onMouseLeave={() => setWhatWeDoOpen(false)}>
              <button onClick={() => setWhatWeDoOpen(!whatWeDoOpen)} className="nav-btn-hover" style={navLinkStyle}>
                What We Do <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {whatWeDoOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="dropdown-desktop-panel" style={dropdownContainerStyle}>
                    {whatWeDoList.map((item) => {
                      const IconComp = item.icon;
                      return (
                        <div key={item.id} onClick={() => navigateTo('what-we-do-detail', null, item)} style={dropdownItemStyle}>
                          <IconComp size={18} color="#0284c7" /><span>{item.name}</span>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button onClick={() => { setServicesOpen(!servicesOpen); scrollToSection('services'); }} className="nav-btn-hover" style={navLinkStyle}>
                Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="dropdown-desktop-panel services-desktop-panel" style={{ ...dropdownContainerStyle, width: 'min(92vw, 680px)', right: 0, left: 'auto', display: 'flex', gap: '15px', flexDirection: 'row-reverse' }}>
                    <div style={{ flex: 1, borderLeft: '1px solid #e0f2fe', paddingLeft: '10px' }}>
                      {fields.map((f) => (
                        <div key={f.id} onMouseEnter={() => setActiveService(f.id)} onClick={() => scrollToSection('services')} style={{ ...dropdownItemStyle, backgroundColor: activeService === f.id ? '#e0f2fe' : 'transparent', borderRadius: '8px' }}>
                          <f.icon size={16} color={f.color} />
                          <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{f.title}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ flex: 1.5, padding: '14px', background: '#faf9f5', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #e2edf8' }}>
                      {(() => {
                        const curr = fields.find(item => item.id === activeService) || fields[0];
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #e2edf8', paddingBottom: '6px' }}>
                              <curr.icon size={22} color={curr.color} />
                              <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#1e1b4b', fontWeight: '800' }}>SMU {curr.title}</h4>
                            </div>
                            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.4', margin: 0 }}>{curr.desc}</p>
                            <div style={{ background: '#ffffff', padding: '8px', borderRadius: '8px', border: '1px solid #e0f2fe' }}>
                              <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#0284c7', display: 'block' }}>TECH STACK:</span>
                              <span style={{ fontSize: '0.75rem', color: '#334155' }}>{curr.techStack}</span>
                            </div>
                            <button onClick={() => navigateTo('careers', curr.title)} className="hover-btn" style={{ marginTop: '4px', background: 'linear-gradient(135deg, #dbeafe 0%, #fce7f3 100%)', color: '#1e1b4b', border: '1px solid #bfdbfe', padding: '8px 12px', borderRadius: '8px', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer' }}>
                              Apply / Inquire For {curr.title}
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => navigateTo('careers')} className="nav-btn-hover" style={navLinkStyle}>Careers</button>
            <button onClick={() => navigateTo('contact')} className="nav-btn-hover" style={navLinkStyle}>Contact Us</button>

            {/* Corporate Deck Action Button (Pastel Frosted) */}
            <button
              onClick={() => { setIsDeckOpen(true); setMobileMenuOpen(false); }}
              className="hover-btn"
              style={{
                background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)',
                color: '#1e293b',
                border: '1px solid #bfdbfe',
                padding: '8px 16px',
                borderRadius: '10px',
                fontWeight: '700',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 12px rgba(191, 219, 254, 0.3)'
              }}
            >
              <FileText size={14} color="#0284c7" />
              <span>Corporate Deck</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div style={{ paddingTop: '70px' }}>
        <AnimatePresence mode="wait">

          {currentPage === 'home' && (
            <motion.div key="home-page">

              {/* ==================== RESTORED HERO BANNER SLIDESHOW WITH IMAGES ==================== */}
              <section style={{ position: 'relative', width: '100%', height: '520px', overflow: 'hidden', borderBottom: '1px solid #e2edf8' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `linear-gradient(to right, rgba(253, 242, 248, 0.90) 0%, rgba(250, 248, 242, 0.84) 50%, rgba(239, 246, 255, 0.65) 100%), url(${slides[currentSlide].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 clamp(1.5rem, 5vw, 4rem)',
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{ maxWidth: '800px', zIndex: 2 }}>

                      {/* Soft Pastel Badge */}
                      <motion.div
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', border: '1px solid #bfdbfe', padding: '6px 16px', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: '800', color: '#0284c7', marginBottom: '1.2rem', boxShadow: '0 2px 8px rgba(191, 219, 254, 0.3)' }}
                      >
                        <Sparkles size={16} color="#0284c7" />
                        <span>Enterprise Digital Engineering</span>
                      </motion.div>

                      {/* Animated Title */}
                      <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: '900', color: '#1e293b', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}
                      >
                        {slides[currentSlide].title}
                      </motion.h1>

                      {/* Animated Subtitle */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        style={{ fontSize: '1.1rem', color: '#475569', margin: '0 0 28px 0', lineHeight: '1.7', maxWidth: '680px' }}
                      >
                        {slides[currentSlide].subtitle}
                      </motion.p>

                      {/* Pastel Action Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                        <motion.button
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          onClick={() => navigateTo('careers')}
                          className="hover-btn"
                          style={{
                            background: 'linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #fce7f3 100%)',
                            color: '#1e293b',
                            border: '1px solid #bfdbfe',
                            padding: '13px 26px',
                            borderRadius: '12px',
                            fontWeight: '800',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 6px 18px rgba(191, 219, 254, 0.4)'
                          }}
                        >
                          <span>Apply For Opportunities</span>
                          <ArrowRight size={18} color="#0284c7" />
                        </motion.button>

                        <motion.button
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          onClick={() => setIsDeckOpen(true)}
                          className="hover-btn"
                          style={{
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            color: '#334155',
                            padding: '13px 22px',
                            borderRadius: '12px',
                            fontWeight: '700',
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                          }}
                        >
                          <FileText size={18} color="#0284c7" />
                          <span>View Corporate Deck</span>
                        </motion.button>
                      </div>

                    </div>
                  </motion.div>
                </AnimatePresence>
              </section>

              {/* ABOUT US SECTION */}
              <motion.section id="about" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#e0f2fe', padding: '5px 16px', borderRadius: '9999px', border: '1px solid #bae6fd' }}>
                    Corporate Profile & Values
                  </span>
                  <h2 style={{ fontSize: '2.4rem', fontWeight: '900', margin: '10px 0 0 0', color: '#1e1b4b' }}>
                    About SMU Nexora Technologies
                  </h2>
                  <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '6px', maxWidth: '650px', margin: '6px auto 0 auto' }}>
                    A modern software development firm engineered for high reliability, digital growth, and professional tech incubation in Central India.
                  </p>
                </div>

                {/* Primary Overview Box */}
                <div className="hover-card" style={{ ...pastelCardStyle, borderLeft: '5px solid #38bdf8', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.2rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Laptop size={26} color="#0284c7" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>Engineering Tomorrow's Platforms Today</h3>
                      <span style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: '700' }}>Headquartered in Indore, Madhya Pradesh</span>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                    <strong>SMU Nexora Technologies Pvt. Ltd.</strong> is an enterprise software engineering and IT strategic consulting firm. We specialize in building decoupled React web systems, high-converting digital storefronts, and hardened API architectures. Simultaneously, we operate an active technology incubation environment in Indore, bridging the industry-academia divide by mentoring engineers on live production codebases.
                  </p>
                </div>

                {/* 4 Multi-Dimensional Corporate Pillars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div className="hover-card" style={{ ...pastelCardStyle, padding: '1.6rem', border: '1px solid #dbeafe', background: '#ffffff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Code2 size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Modern Engineering</h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Clean, modular React & Python FastAPI architectures built for low-latency non-blocking performance.
                    </p>
                  </div>

                  <div className="hover-card" style={{ ...pastelCardStyle, padding: '1.6rem', border: '1px solid #d1fae5', background: '#ffffff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Zap size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Agile Sprint Delivery</h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Two-week milestone sprints with transparent client demos, real-time code staging, and on-time launches.
                    </p>
                  </div>

                  <div className="hover-card" style={{ ...pastelCardStyle, padding: '1.6rem', border: '1px solid #fce7f3', background: '#ffffff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fce7f3', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Lock size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Security & Compliance</h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Parameterized SQL abstractions, HTTPS transport protection, and strict OWASP top-10 mitigation.
                    </p>
                  </div>

                  <div className="hover-card" style={{ ...pastelCardStyle, padding: '1.6rem', border: '1px solid #e0f2fe', background: '#ffffff' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Users size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 6px 0' }}>Talent Incubation</h4>
                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: '1.6', margin: 0 }}>
                      Structured mentorship programs for junior developers and students to gain hands-on production experience.
                    </p>
                  </div>
                </div>

                {/* Corporate Metrics Strip (Pastel Tone) */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', padding: '1.6rem', background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)', borderRadius: '20px', border: '1px solid #dbeafe', textAlign: 'center', boxShadow: '0 4px 16px rgba(191, 219, 254, 0.25)' }}>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: '900', color: '#0284c7' }}>99.9%</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '700' }}>Platform Uptime</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: '900', color: '#059669' }}>&lt; 24 Hrs</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '700' }}>Consultation SLA</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: '900', color: '#d97706' }}>100%</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '700' }}>Code IP Ownership</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: '900', color: '#db2777' }}>24/7</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: '700' }}>Support Desk</div>
                  </div>
                </div>
              </motion.section>

              {/* ==================== LEADERSHIP & CORE TEAM SECTION ==================== */}
              <motion.section id="team-and-testimonials" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '5.5rem 1.5rem', background: 'linear-gradient(180deg, #ffffff 0%, #faf8f5 100%)', borderTop: '1px solid #e2edf8', borderBottom: '1px solid #e2edf8' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                  {/* Section Title */}
                  <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#e0f2fe', padding: '5px 16px', borderRadius: '9999px', border: '1px solid #bae6fd' }}>
                      Leadership & Execution Team
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', margin: '12px 0 0 0', color: '#1e1b4b' }}>
                      Client Testimonial
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '6px', maxWidth: '600px', margin: '6px auto 0 auto' }}>
                      The driving visionary and technical leadership powering SMU Nexora Technologies.
                    </p>
                  </div>

                  {/* 1. FOUNDER & CO-FOUNDER (EXTRA LARGE IMAGES WITH PASTEL BORDERS) */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', marginBottom: '4.5rem' }}>
                    {leaders.map((leader, idx) => (
                      <div
                        key={idx}
                        className="hover-card"
                        style={{
                          ...pastelCardStyle,
                          border: `1.5px solid ${leader.borderColor}40`,
                          background: 'linear-gradient(135deg, #ffffff 0%, #faf8f5 50%, #f0f7ff 100%)',
                          borderRadius: '26px',
                          padding: '2.8rem 2.2rem',
                          position: 'relative',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div style={{ position: 'absolute', top: '16px', right: '20px', opacity: 0.12 }}>
                          <Quote size={64} color={leader.badgeColor} />
                        </div>

                        <div>
                          {/* Image -> Title -> Name Layout */}
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '1.6rem' }}>

                            {/* EXTRA LARGE PROFILE PHOTO (175px x 175px) */}
                            <div style={{ width: '175px', height: '175px', borderRadius: '50%', overflow: 'hidden', border: `4px solid ${leader.borderColor}`, boxShadow: `0 12px 28px ${leader.glowShadow}`, marginBottom: '16px', background: '#f8fafc' }}>
                              <img
                                src={leader.image}
                                alt={leader.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            </div>

                            {/* 1. Title: Founder / Co-Founder */}
                            <div style={{ fontSize: '0.92rem', fontWeight: '800', color: leader.badgeColor, background: leader.badgeBg, padding: '5px 18px', borderRadius: '9999px', display: 'inline-block', border: `1px solid ${leader.borderColor}50`, marginBottom: '6px' }}>
                              {leader.title}
                            </div>

                            {/* 2. Name */}
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#1e1b4b', margin: '4px 0 0 0' }}>
                              {leader.name}
                            </h3>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginBottom: '14px', color: '#f59e0b' }}>
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="#f59e0b" />
                            ))}
                            <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#1e1b4b', marginLeft: '6px' }}>Executive Perspective</span>
                          </div>

                          <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: '1.8', fontStyle: 'italic', margin: 0, textAlign: 'center' }}>
                            "{leader.quote}"
                          </p>
                        </div>

                        <div style={{ marginTop: '2.2rem', paddingTop: '1.2rem', borderTop: '1px solid #e2edf8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                          <span style={{ fontWeight: '700', color: '#64748b' }}>SMU Nexora Technologies</span>
                          <span style={{ fontWeight: '800', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <CheckCircle2 size={16} /> Executive Office
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 2. CORE WORKING TEAM (EXTRA LARGE IMAGES: 145px x 145px WITH PASTEL BORDERS) */}
                  <div>
                    <div style={{ textAlign: 'center', marginBottom: '2.8rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#e0f2fe', padding: '5px 18px', borderRadius: '9999px', border: '1px solid #bae6fd' }}>
                        Core Development & Marketing Squad
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.2rem', maxWidth: '1080px', margin: '0 auto' }}>
                      {teamMembers.map((member, idx) => (
                        <div
                          key={idx}
                          className="hover-card"
                          style={{
                            ...pastelCardStyle,
                            padding: '2.6rem 2rem',
                            textAlign: 'center',
                            borderRadius: '24px',
                            border: `1px solid ${member.borderColor}40`,
                            background: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <div>
                            {/* EXTRA LARGE SQUAD IMAGE (145px x 145px) */}
                            <div style={{ width: '145px', height: '145px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem auto', border: `4px solid ${member.borderColor}`, boxShadow: `0 10px 22px ${member.glowShadow}` }}>
                              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            {/* Role Title */}
                            <div style={{ fontSize: '0.84rem', fontWeight: '800', color: member.badgeColor, background: member.badgeBg, padding: '4px 14px', borderRadius: '9999px', display: 'inline-block', marginBottom: '8px', border: `1px solid ${member.borderColor}50` }}>
                              {member.role}
                            </div>

                            {/* Member Name */}
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '900', color: '#1e1b4b', margin: '0 0 6px 0' }}>
                              {member.name}
                            </h4>

                            <p style={{ fontSize: '0.86rem', color: '#64748b', margin: 0, fontWeight: '600' }}>
                              {member.field}
                            </p>
                          </div>

                          <div style={{ marginTop: '1.8rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#059669', fontSize: '0.84rem', fontWeight: '700' }}>
                            <CheckCircle2 size={16} />
                            <span>Active Project Lead</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.section>

              {/* CORE TECHNOLOGY DOMAINS (PASTEL CARDS: 3 TOP + 2 BOTTOM CENTERED) */}
              <motion.section id="services" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #fdf2f8 0%, #f0f7ff 100%)', borderTop: '1px solid #e2edf8', borderBottom: '1px solid #e2edf8' }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                  <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#e0f2fe', padding: '5px 16px', borderRadius: '9999px', border: '1px solid #bae6fd' }}>
                      Client IT Services
                    </span>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: '900', margin: '12px 0 0 0', color: '#1e1b4b' }}>
                      Core Technology Domains
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '6px', maxWidth: '600px', margin: '6px auto 0 auto' }}>
                      Specialized software engineering practices built for scale, reliability, and business growth.
                    </p>
                  </div>

                  {/* 3 TOP + 2 BOTTOM CENTERED CONTAINER */}
                  <div className="services-centered-flex">
                    {fields.map((field) => (
                      <div
                        key={field.id}
                        className="hover-card services-flex-card"
                        style={{
                          ...pastelCardStyle,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          border: `1px solid ${field.borderGlow}`,
                          background: '#ffffff',
                          borderRadius: '22px',
                          padding: '2rem'
                        }}
                      >
                        <div>
                          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: field.pastelBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', border: `1px solid ${field.borderGlow}` }}>
                            <field.icon size={24} color={field.color} />
                          </div>
                          <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: '#1e1b4b', fontWeight: '800' }}>
                            {field.title}
                          </h3>
                          <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: '1.6' }}>
                            {field.desc}
                          </p>
                        </div>

                        <div style={{ marginTop: '1.6rem', paddingTop: '1.2rem', borderTop: '1px solid #f1f5f9' }}>
                          <button
                            onClick={() => navigateTo('careers', field.title)}
                            className="hover-btn"
                            style={{
                              width: '100%',
                              background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)',
                              border: `1px solid #bfdbfe`,
                              color: '#1e293b',
                              padding: '10px 16px',
                              borderRadius: '10px',
                              fontWeight: '700',
                              fontSize: '0.84rem',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px'
                            }}
                          >
                            <span>Explore & Inquire</span>
                            <ArrowRight size={14} color="#0284c7" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* QUICK CONNECT SECTION */}
              <motion.section id="home-contact" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#e0f2fe', padding: '5px 16px', borderRadius: '9999px', border: '1px solid #bae6fd' }}>
                    Quick Connect
                  </span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '8px 0 0 0', color: '#1e1b4b' }}>Get In Touch With SMU Nexora</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                  <div className="hover-card" style={pastelCardStyle}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 1.2rem 0' }}>Connect On Social Media</h3>
                    <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      Have a project query or internship doubt? Contact us directly via WhatsApp, Instagram, or Email.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <a href="https://wa.me/918435299100" target="_blank" rel="noreferrer" className="hover-social" style={socialBadgeStyle('#25D366')}>
                        <MessageCircle size={22} color="#25D366" />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>WhatsApp / Call</span>
                          <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b' }}>8435299100</span>
                        </div>
                      </a>

                      <a href="https://instagram.com/smunextech" target="_blank" rel="noreferrer" className="hover-social" style={socialBadgeStyle('#E1306C')}>
                        <Camera size={22} color="#E1306C" />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Instagram Handle</span>
                          <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b' }}>@smunextech</span>
                        </div>
                      </a>

                      <a href="mailto:smunextech@gmail.com" className="hover-social" style={socialBadgeStyle('#38bdf8')}>
                        <Mail size={22} color="#0284c7" />
                        <div>
                          <span style={{ display: 'block', fontSize: '0.78rem', color: '#64748b' }}>Official Support Email</span>
                          <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#1e1b4b' }}>smunextech@gmail.com</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="hover-card" style={pastelCardStyle}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 1rem 0' }}>Send Inquiry Message</h3>
                    <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Your Full Name *</label>
                        <input type="text" name="fullName" placeholder="Enter your full name" required value={contactData.fullName} onChange={handleContactInputChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input type="email" name="email" placeholder="Enter your email address" required value={contactData.email} onChange={handleContactInputChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Subject *</label>
                        <input type="text" name="subject" placeholder="Enter inquiry subject" required value={contactData.subject} onChange={handleContactInputChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Your Message *</label>
                        <textarea name="userMessage" rows="3" placeholder="Enter your message here..." required value={contactData.userMessage} onChange={handleContactInputChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                      </div>
                      {/* Pastel Blue/White Action Button */}
                      <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #bfdbfe', background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)', color: '#1e293b', fontWeight: '800', fontSize: '0.95rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 4px 14px rgba(191, 219, 254, 0.4)' }}>
                        {isSubmitting ? 'Sending Message...' : 'Send Inquiry Message'}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          )}

          {currentPage === 'careers' && (
            <motion.div key="careers-page" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1.5rem' }}>
              <button onClick={() => navigateTo('home')} className="hover-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', border: '1px solid #cbd5e1', padding: '9px 18px', borderRadius: '10px', color: '#334155', fontWeight: '600', cursor: 'pointer', marginBottom: '1.8rem' }}>
                <ArrowLeft size={18} /><span>Back to Home</span>
              </button>

              <div style={pastelCardStyle}>
                <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2edf8', paddingBottom: '1.5rem' }}>
                  <Briefcase size={40} color="#0284c7" style={{ margin: '0 auto 10px auto' }} />
                  <h1 style={{ margin: 0, fontSize: '2.2rem', color: '#1e1b4b', fontWeight: '800' }}>SMU Nexora Career Application</h1>
                </div>

                <form onSubmit={handleCareerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><Layers size={18} color="#0284c7" /><span>1. Select Domain & Role</span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                      <div>
                        <label style={labelStyle}>Target Technology Domain *</label>
                        <select name="domain" value={careerData.domain} onChange={handleCareerInputChange} style={inputStyle}>
                          {fields.map(f => (<option key={f.id} value={f.title}>{f.title}</option>))}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Applying As *</label>
                        <select name="opportunityType" value={careerData.opportunityType} onChange={handleCareerInputChange} style={inputStyle}>
                          <option value="Internship Program">Internship Program</option>
                          <option value="Full-Time Job">Full-Time Job</option>
                          <option value="Part-Time / Freelance">Part-Time / Freelance</option>
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Experience Level *</label>
                        <select name="experienceLevel" value={careerData.experienceLevel} onChange={handleCareerInputChange} style={inputStyle}>
                          <option value="Fresher / Student">Fresher / Student</option>
                          <option value="0 - 1 Year">0 - 1 Year</option>
                          <option value="1 - 3 Years">1 - 3 Years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><User size={18} color="#0284c7" /><span>2. Personal Information</span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                      <div><label style={labelStyle}>Full Name *</label><input type="text" name="fullName" placeholder="Enter your full name" required value={careerData.fullName} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Email Address *</label><input type="email" name="email" placeholder="Enter your email address" required value={careerData.email} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Phone / WhatsApp *</label><input type="tel" name="phone" placeholder="Enter your phone / WhatsApp number" required value={careerData.phone} onChange={handleCareerInputChange} style={inputStyle} /></div>
                    </div>
                  </div>

                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><Award size={18} color="#0284c7" /><span>3. Technical Background</span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                      <div><label style={labelStyle}>Highest Qualification *</label><input type="text" name="qualification" placeholder="Enter your highest qualification" required value={careerData.qualification} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Key Skills *</label><input type="text" name="skills" placeholder="Enter your key technical skills" required value={careerData.skills} onChange={handleCareerInputChange} style={inputStyle} /></div>
                    </div>
                  </div>

                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><FileText size={18} color="#0284c7" /><span>4. Resume Attachment</span></div>
                    <div style={{ border: '2px dashed #bfdbfe', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', background: '#faf9f5' }}>
                      <Upload size={26} color="#64748b" style={{ marginBottom: '6px' }} />
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', fontWeight: '600' }}>Upload Resume (PDF or DOCX)</p>
                      <input type="file" required accept=".pdf,.docx" onChange={(e) => setResumeFile(e.target.files[0])} style={{ marginTop: '10px', fontSize: '0.85rem' }} />
                    </div>
                  </div>

                  {/* Pastel Blue/White Action Button */}
                  <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #bfdbfe', background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)', color: '#1e293b', fontWeight: '800', fontSize: '1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 8px 20px rgba(191, 219, 254, 0.4)' }}>
                    {isSubmitting ? 'Submitting Application...' : 'Submit Career Application'}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div key="contact-page" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} style={{ maxWidth: '1000px', margin: '2rem auto', padding: '0 1.5rem' }}>
              <button onClick={() => navigateTo('home')} className="hover-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', border: '1px solid #cbd5e1', padding: '9px 18px', borderRadius: '10px', color: '#334155', fontWeight: '600', cursor: 'pointer', marginBottom: '1.8rem' }}>
                <ArrowLeft size={18} /><span>Back to Home</span>
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                <div className="hover-card" style={pastelCardStyle}>
                  <Building size={32} color="#0284c7" style={{ marginBottom: '1rem' }} />
                  <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 1rem 0' }}>Corporate Desk</h2>
                  <p style={{ color: '#475569', lineHeight: '1.6' }}><strong>SMU Nexora Technologies Pvt. Ltd.</strong><br />Indore, MP, India</p>

                  <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href="https://wa.me/918435299100" target="_blank" rel="noreferrer" className="hover-social" style={socialBadgeStyle('#25D366')}>
                      <MessageCircle size={20} color="#25D366" /><span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e1b4b' }}>WhatsApp / Call: 8435299100</span>
                    </a>
                    <a href="https://instagram.com/smunextech" target="_blank" rel="noreferrer" className="hover-social" style={socialBadgeStyle('#E1306C')}>
                      <Camera size={20} color="#E1306C" /><span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e1b4b' }}>Insta: @smunextech</span>
                    </a>
                  </div>
                </div>

                <div className="hover-card" style={pastelCardStyle}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 1rem 0' }}>Send Inquiry Message</h3>
                  <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div><label style={labelStyle}>Your Name *</label><input type="text" name="fullName" placeholder="Enter your full name" required value={contactData.fullName} onChange={handleContactInputChange} style={inputStyle} /></div>
                    <div><label style={labelStyle}>Email Address *</label><input type="email" name="email" placeholder="Enter your email address" required value={contactData.email} onChange={handleContactInputChange} style={inputStyle} /></div>
                    <div><label style={labelStyle}>Subject *</label><input type="text" name="subject" placeholder="Enter inquiry subject" required value={contactData.subject} onChange={handleContactInputChange} style={inputStyle} /></div>
                    <div><label style={labelStyle}>Your Message *</label><textarea name="userMessage" rows="3" placeholder="Enter your message here..." required value={contactData.userMessage} onChange={handleContactInputChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea></div>
                    {/* Pastel Blue/White Action Button */}
                    <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '13px', borderRadius: '12px', border: '1px solid #bfdbfe', background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)', color: '#1e293b', fontWeight: '800', fontSize: '0.95rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 4px 14px rgba(191, 219, 254, 0.4)' }}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

          {currentPage === 'what-we-do-detail' && selectedDetail && (
            <motion.div key="what-we-do-page" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1.5rem' }}>
              <button onClick={() => navigateTo('home')} className="hover-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ffffff', border: '1px solid #cbd5e1', padding: '9px 18px', borderRadius: '10px', color: '#334155', fontWeight: '600', cursor: 'pointer', marginBottom: '1.8rem' }}>
                <ArrowLeft size={18} /><span>Back to Home</span>
              </button>

              <div style={pastelCardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem', borderBottom: '1px solid #e2edf8', paddingBottom: '1.5rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <selectedDetail.icon size={30} color="#0284c7" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: '800', textTransform: 'uppercase' }}>Industry Vertical</span>
                    <h1 style={{ margin: 0, fontSize: '2rem', color: '#1e1b4b', fontWeight: '800' }}>{selectedDetail.name} Solutions</h1>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#0284c7', fontWeight: '700', marginBottom: '1rem' }}>{selectedDetail.tagline}</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>{selectedDetail.description}</p>

                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '1rem' }}>Key Capabilities:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '2.5rem' }}>
                  {selectedDetail.features.map((feat, idx) => (
                    <div key={idx} style={{ background: '#faf9f5', border: '1px solid #e2edf8', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#10b981" />
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => navigateTo('contact')} className="hover-btn" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #fce7f3 100%)', color: '#1e293b', border: '1px solid #bfdbfe', padding: '14px 28px', borderRadius: '12px', fontWeight: '800', fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(191, 219, 254, 0.4)' }}>
                  Inquire For {selectedDetail.name} Solutions
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* POPUP MODAL (FROSTED PASTEL LIGHT) */}
      <AnimatePresence>
        {modalState.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(240, 244, 255, 0.65)',
              backdropFilter: 'blur(12px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '2.2rem 2rem',
                maxWidth: '480px',
                width: '100%',
                boxShadow: '0 25px 50px -12px rgba(191, 219, 254, 0.45)',
                textAlign: 'center',
                position: 'relative',
                border: modalState.type === 'success' ? '2px solid #bbf7d0' : '2px solid #fecdd3'
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: '#f8fafc', border: 'none', borderRadius: '50%',
                  width: '32px', height: '32px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }}
              >
                <X size={18} color="#64748b" />
              </button>

              {modalState.type === 'success' ? (
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <CheckCircle2 size={44} color="#16a34a" />
                </div>
              ) : (
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#ffe4e6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <AlertCircle size={44} color="#e11d48" />
                </div>
              )}

              <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1e1b4b', margin: '0 0 8px 0' }}>
                {modalState.type === 'success' ? 'Form Submitted Successfully!' : 'Submission Failed'}
              </h2>

              <p style={{ color: '#475569', fontSize: '0.95rem', margin: '0 0 1.2rem 0', lineHeight: '1.5' }}>
                {modalState.type === 'success' ? (
                  <>Thank you, <strong>{modalState.userName}</strong>! Your submission for <strong>{modalState.fieldTitle}</strong> has been logged.</>
                ) : (
                  <>Hello <strong>{modalState.userName}</strong>, we couldn't process your request for <strong>{modalState.fieldTitle}</strong>.</>
                )}
              </p>

              <div style={{ background: '#faf9f5', padding: '12px', borderRadius: '12px', border: '1px solid #e2edf8', fontSize: '0.88rem', color: '#334155', marginBottom: '1.5rem', textAlign: 'left' }}>
                <strong>Status Message:</strong> {modalState.message}
              </div>

              <button
                onClick={closeModal}
                className="hover-btn"
                style={{
                  width: '100%', padding: '12px', borderRadius: '10px',
                  border: '1px solid #bfdbfe', background: modalState.type === 'success' ? 'linear-gradient(135deg, #dcfce7 0%, #dbeafe 100%)' : 'linear-gradient(135deg, #ffe4e6 0%, #dbeafe 100%)',
                  color: '#1e293b', fontWeight: '800', fontSize: '0.98rem', cursor: 'pointer'
                }}
              >
                Close & Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 10-PAGE INTERACTIVE CORPORATE DECK COMPONENT */}
      <CorporateDeck isOpen={isDeckOpen} onClose={() => setIsDeckOpen(false)} />

      {/* Footer (Pastel Light Tone) */}
      <footer style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #faf8f2 50%, #e0f2fe 100%)', color: '#334155', padding: '2.5rem 1.5rem', textAlign: 'center', marginTop: '4rem', borderTop: '1px solid #e2edf8' }}>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', fontWeight: '600' }}>
          © {new Date().getFullYear()} SMU Nexora Technologies. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

const navLinkStyle = { background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.92rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' };
const dropdownContainerStyle = { position: 'absolute', top: '100%', left: 0, marginTop: '10px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2edf8', boxShadow: '0 20px 30px -10px rgba(186, 230, 253, 0.35)', padding: '12px', zIndex: 100, minWidth: '220px' };
const dropdownItemStyle = { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#334155', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease' };
const pastelCardStyle = { background: '#ffffff', padding: '2rem', borderRadius: '20px', border: '1px solid #e2edf8', boxShadow: '0 6px 16px rgba(186, 230, 253, 0.25)' };
const sectionBoxStyle = { background: '#faf9f5', border: '1px solid #e2edf8', borderRadius: '14px', padding: '1.4rem' };
const sectionHeaderStyle = { display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', fontSize: '0.95rem', color: '#1e1b4b', marginBottom: '1.2rem', borderBottom: '1px solid #e2edf8', paddingBottom: '8px' };
const labelStyle = { display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '6px', color: '#334155' };
const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' };

const socialBadgeStyle = (borderColor) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  background: '#faf9f5',
  borderRadius: '12px',
  border: `1px solid ${borderColor}40`,
  textDecoration: 'none',
  transition: 'all 0.2s ease'
});