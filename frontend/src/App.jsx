import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Sparkles, Code2, Globe, ShieldCheck,
  Megaphone, GraduationCap, ArrowRight, ArrowLeft,
  Upload, CheckCircle2, MessageSquare, Briefcase, User, Mail, Phone, Award, FileText,
  ChevronDown, Building, Stethoscope, School, Compass, Hotel, ShoppingCart,
  CheckCircle, Users, Target, Laptop, Send, Layers, MessageCircle, AlertCircle, X, Camera, Menu
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

  // REMOVED: AI & ML, Data Science, Cloud & DevOps
  const fields = [
    { id: 'web-dev', title: "Web & Game Development", icon: Globe, color: "#4f46e5", desc: "Engineered scalable web applications and interactive gaming experiences.", techStack: "React, Next.js, Node.js, Unity, WebGL, TypeScript", businessImpact: "Accelerates conversion rates, handles high concurrent users, and ensures 99.9% uptime." },
    { id: 'cyber-security', title: "Cyber Security & Auditing", icon: ShieldCheck, color: "#e11d48", desc: "Vulnerability assessments, penetration testing, and end-to-end data encryption.", techStack: "Kali Linux, Wireshark, OWASP Tools, Encrypted DB Protocols", businessImpact: "Safeguards intellectual property and critical customer financial records." },
    { id: 'digital-marketing', title: "Digital Growth & SEO", icon: Megaphone, color: "#d97706", desc: "Performance marketing, technical SEO, and brand growth strategies.", techStack: "Google Analytics 4, SEMrush, Meta Ads Manager, Ahrefs", businessImpact: "Drives organic lead acquisition and lowers Customer Acquisition Cost (CAC)." },
    { id: 'e-commerce', title: "E-Commerce Systems", icon: ShoppingCart, color: "#059669", desc: "High-converting Shopify stores and custom headless marketplace architectures.", techStack: "Shopify Plus, Liquid, WooCommerce, Stripe / Razorpay Integration", businessImpact: "Boosts e-commerce revenue with frictionless mobile checkout flows." },
    { id: 'consulting', title: "IT Strategic Consulting", icon: Code2, color: "#4338ca", desc: "Modernizing legacy architectures and defining digital product roadmaps.", techStack: "Agile Architecture, System Design Blueprints, Legacy Code Refactoring", businessImpact: "Aligns software engineering roadmaps directly with core business revenue goals." }
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

  const pastelBg = "#f4f6fc";

  return (
    <div style={{ backgroundColor: pastelBg, color: '#1e293b', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", position: 'relative', overflowX: 'hidden' }}>

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
          background-color: #6366f1;
          transition: width 0.25s ease;
        }
        .nav-btn-hover:hover {
          color: #6366f1 !important;
        }
        .nav-btn-hover:hover:after {
          width: 100%;
        }

        .hover-card {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease !important;
        }
        .hover-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 14px 28px rgba(99, 102, 241, 0.12) !important;
          border-color: #cbd5e1 !important;
        }

        .hover-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease !important;
        }
        .hover-btn:hover {
          transform: translateY(-2px) scale(1.02) !important;
          box-shadow: 0 8px 16px rgba(99, 102, 241, 0.25) !important;
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
          color: #1e1b4b;
          cursor: pointer;
          padding: 6px;
        }

        @media (max-width: 868px) {
          .nav-items-container {
            display: ${mobileMenuOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            width: 100% !important;
            align-items: flex-start !important;
            margin-top: 1rem !important;
            padding-top: 1rem !important;
            border-top: 1px solid #e0e7ff !important;
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

      {/* FIXED NAV BAR */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e0e7ff', padding: '0.8rem 1.5rem', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>

          {/* Company Logo & Title */}
          <div onClick={() => navigateTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 10px rgba(99, 102, 241, 0.25)' }}>
              SN
            </div>
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e1b4b', letterSpacing: '-0.02em' }}>SMU NEXORA</span>
              <span style={{ fontSize: '0.7rem', display: 'block', color: '#6366f1', fontWeight: '700', letterSpacing: '0.05em' }}>TECHNOLOGIES</span>
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
                          <IconComp size={18} color="#6366f1" /><span>{item.name}</span>
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
                    <div style={{ flex: 1, borderLeft: '1px solid #e0e7ff', paddingLeft: '10px' }}>
                      {fields.map((f) => (
                        <div key={f.id} onMouseEnter={() => setActiveService(f.id)} onClick={() => scrollToSection('services')} style={{ ...dropdownItemStyle, backgroundColor: activeService === f.id ? '#e0e7ff' : 'transparent', borderRadius: '8px' }}>
                          <f.icon size={16} color={f.color} />
                          <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{f.title}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ flex: 1.5, padding: '14px', background: '#f8fafc', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #e2e8f0' }}>
                      {(() => {
                        const curr = fields.find(item => item.id === activeService) || fields[0];
                        return (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '6px' }}>
                              <curr.icon size={22} color={curr.color} />
                              <h4 style={{ margin: 0, fontSize: '0.98rem', color: '#1e1b4b', fontWeight: '800' }}>SMU {curr.title}</h4>
                            </div>
                            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.4', margin: 0 }}>{curr.desc}</p>
                            <div style={{ background: '#ffffff', padding: '8px', borderRadius: '8px', border: '1px solid #e0e7ff' }}>
                              <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#6366f1', display: 'block' }}>TECH STACK:</span>
                              <span style={{ fontSize: '0.75rem', color: '#334155' }}>{curr.techStack}</span>
                            </div>
                            <button onClick={() => navigateTo('careers', curr.title)} className="hover-btn" style={{ marginTop: '4px', background: curr.color, color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', cursor: 'pointer' }}>
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

            {/* Corporate Deck Action Button */}
            <button
              onClick={() => { setIsDeckOpen(true); setMobileMenuOpen(false); }}
              className="hover-btn"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.82rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 10px rgba(99, 102, 241, 0.25)'
              }}
            >
              <FileText size={14} />
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
              <section style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden', background: '#1e1b4b' }}>
                <AnimatePresence mode="wait">
                  <motion.div key={currentSlide} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4)), url(${slides[currentSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
                    <div style={{ maxWidth: '750px', zIndex: 2, color: '#ffffff' }}>
                      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: '900', margin: '0 0 12px 0', lineHeight: '1.2' }}>{slides[currentSlide].title}</motion.h1>
                      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ fontSize: '1.1rem', color: '#e2e8f0', margin: '0 0 24px 0', lineHeight: '1.6' }}>{slides[currentSlide].subtitle}</motion.p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <motion.button initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6 }} onClick={() => navigateTo('careers')} className="hover-btn" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: '#fff', border: 'none', padding: '13px 26px', borderRadius: '10px', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)' }}>
                          <span>Apply For Opportunities</span><ArrowRight size={18} />
                        </motion.button>

                        <motion.button initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 }} onClick={() => setIsDeckOpen(true)} className="hover-btn" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', padding: '13px 22px', borderRadius: '10px', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <FileText size={18} /><span>View Corporate Deck</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </section>

              <motion.section id="about" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '4rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '800', textTransform: 'uppercase' }}>Corporate Identity</span>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '8px 0 0 0', color: '#1e1b4b' }}>About SMU Nexora Technologies</h2>
                </div>
                <div className="hover-card" style={{ ...pastelCardStyle, borderLeft: '5px solid #6366f1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                    <Laptop size={28} color="#6366f1" />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#1e1b4b', margin: 0 }}>Who We Are</h3>
                  </div>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.7', margin: 0 }}>
                    <strong>SMU Nexora Technologies</strong> is a software engineering and IT consulting firm based in Indore. We build modern web apps, e-commerce platforms, and secured backend architectures while providing industry project experience to passionate students and developers.
                  </p>
                </div>
              </motion.section>

              <motion.section id="services" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '4rem 1.5rem', background: '#eef2ff', borderTop: '1px solid #e0e7ff', borderBottom: '1px solid #e0e7ff' }}>
                <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
                  <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '800', textTransform: 'uppercase' }}>Client IT Services</span>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '8px 0 0 0', color: '#1e1b4b' }}>Core Technology Domains</h2>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '20px' }}>
                    {fields.map((field) => (
                      <div key={field.id} className="hover-card" style={{ ...pastelCardStyle, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: `${field.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                            <field.icon size={24} color={field.color} />
                          </div>
                          <h3 style={{ fontSize: '1.15rem', margin: '0 0 8px 0', color: '#1e1b4b', fontWeight: '700' }}>{field.title}</h3>
                          <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: '1.5' }}>{field.desc}</p>
                        </div>
                        <button onClick={() => navigateTo('careers', field.title)} className="hover-btn" style={{ marginTop: '1.4rem', background: '#ffffff', border: `1px solid ${field.color}`, color: field.color, padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <span>Apply For Field</span><ArrowRight size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <motion.section id="home-contact" initial={{ opacity: 0, scale: 0.9, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '4.5rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: '800', textTransform: 'uppercase' }}>Quick Connect</span>
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

                      <a href="mailto:smunextech@gmail.com" className="hover-social" style={socialBadgeStyle('#6366f1')}>
                        <Mail size={22} color="#6366f1" />
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
                      <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: '700', fontSize: '0.95rem', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
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
                <div style={{ textAlign: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
                  <Briefcase size={40} color="#6366f1" style={{ margin: '0 auto 10px auto' }} />
                  <h1 style={{ margin: 0, fontSize: '2.2rem', color: '#1e1b4b', fontWeight: '800' }}>SMU Nexora Career Application</h1>
                </div>

                <form onSubmit={handleCareerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><Layers size={18} color="#6366f1" /><span>1. Select Domain & Role</span></div>
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
                    <div style={sectionHeaderStyle}><User size={18} color="#6366f1" /><span>2. Personal Information</span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                      <div><label style={labelStyle}>Full Name *</label><input type="text" name="fullName" placeholder="Enter your full name" required value={careerData.fullName} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Email Address *</label><input type="email" name="email" placeholder="Enter your email address" required value={careerData.email} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Phone / WhatsApp *</label><input type="tel" name="phone" placeholder="Enter your phone / WhatsApp number" required value={careerData.phone} onChange={handleCareerInputChange} style={inputStyle} /></div>
                    </div>
                  </div>

                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><Award size={18} color="#6366f1" /><span>3. Technical Background</span></div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
                      <div><label style={labelStyle}>Highest Qualification *</label><input type="text" name="qualification" placeholder="Enter your highest qualification" required value={careerData.qualification} onChange={handleCareerInputChange} style={inputStyle} /></div>
                      <div><label style={labelStyle}>Key Skills *</label><input type="text" name="skills" placeholder="Enter your key technical skills" required value={careerData.skills} onChange={handleCareerInputChange} style={inputStyle} /></div>
                    </div>
                  </div>

                  <div style={sectionBoxStyle}>
                    <div style={sectionHeaderStyle}><FileText size={18} color="#6366f1" /><span>4. Resume Attachment</span></div>
                    <div style={{ border: '2px dashed #cbd5e1', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', background: '#f8fafc' }}>
                      <Upload size={26} color="#64748b" style={{ marginBottom: '6px' }} />
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155', fontWeight: '600' }}>Upload Resume (PDF or DOCX)</p>
                      <input type="file" required accept=".pdf,.docx" onChange={(e) => setResumeFile(e.target.files[0])} style={{ marginTop: '10px', fontSize: '0.85rem' }} />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '15px', borderRadius: '12px', border: 'none', background: isSubmitting ? '#94a3b8' : '#6366f1', color: '#ffffff', fontWeight: '700', fontSize: '1rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.25)' }}>
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
                  <Building size={32} color="#6366f1" style={{ marginBottom: '1rem' }} />
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
                    <button type="submit" disabled={isSubmitting} className="hover-btn" style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer' }}>
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <selectedDetail.icon size={30} color="#6366f1" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#6366f1', fontWeight: '800', textTransform: 'uppercase' }}>Industry Vertical</span>
                    <h1 style={{ margin: 0, fontSize: '2rem', color: '#1e1b4b', fontWeight: '800' }}>{selectedDetail.name} Solutions</h1>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#6366f1', fontWeight: '700', marginBottom: '1rem' }}>{selectedDetail.tagline}</h3>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>{selectedDetail.description}</p>

                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e1b4b', marginBottom: '1rem' }}>Key Capabilities:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '2.5rem' }}>
                  {selectedDetail.features.map((feat, idx) => (
                    <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '12px 16px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#10b981" />
                      <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#334155' }}>{feat}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => navigateTo('contact')} className="hover-btn" style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '0.95rem', cursor: 'pointer' }}>
                  Inquire For {selectedDetail.name} Solutions
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {modalState.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
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
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                textAlign: 'center',
                position: 'relative',
                border: modalState.type === 'success' ? '2px solid #10b981' : '2px solid #ef4444'
              }}
            >
              <button
                onClick={closeModal}
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  background: '#f1f5f9', border: 'none', borderRadius: '50%',
                  width: '32px', height: '32px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }}
              >
                <X size={18} color="#64748b" />
              </button>

              {modalState.type === 'success' ? (
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <CheckCircle2 size={44} color="#10b981" />
                </div>
              ) : (
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem auto' }}>
                  <AlertCircle size={44} color="#ef4444" />
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

              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.88rem', color: '#334155', marginBottom: '1.5rem', textAlign: 'left' }}>
                <strong>Status Message:</strong> {modalState.message}
              </div>

              <button
                onClick={closeModal}
                className="hover-btn"
                style={{
                  width: '100%', padding: '12px', borderRadius: '10px',
                  border: 'none', background: modalState.type === 'success' ? '#10b981' : '#ef4444',
                  color: '#ffffff', fontWeight: '700', fontSize: '0.98rem', cursor: 'pointer'
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

      {/* Footer */}
      <footer style={{ background: '#0f172a', color: '#fff', padding: '2.5rem 1.5rem', textAlign: 'center', marginTop: '4rem' }}>
        <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
          © {new Date().getFullYear()} SMU Nexora Technologies. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

const navLinkStyle = { background: 'none', border: 'none', color: '#334155', fontWeight: '600', fontSize: '0.92rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '5px' };
const dropdownContainerStyle = { position: 'absolute', top: '100%', left: 0, marginTop: '10px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e0e7ff', boxShadow: '0 20px 30px -10px rgba(0,0,0,0.08)', padding: '12px', zIndex: 100, minWidth: '220px' };
const dropdownItemStyle = { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', color: '#334155', fontSize: '0.88rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease' };
const pastelCardStyle = { background: '#ffffff', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.04)' };
const sectionBoxStyle = { background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '1.4rem' };
const sectionHeaderStyle = { display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', fontSize: '0.95rem', color: '#1e1b4b', marginBottom: '1.2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' };
const labelStyle = { display: 'block', fontWeight: '600', fontSize: '0.88rem', marginBottom: '6px', color: '#334155' };
const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', background: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' };

const socialBadgeStyle = (borderColor) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  background: '#f8fafc',
  borderRadius: '12px',
  border: `1px solid ${borderColor}40`,
  textDecoration: 'none',
  transition: 'all 0.2s ease'
});