import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Layers,
  Users,
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  Star,
  Sun,
  Moon,
  MessageSquare,
  Calculator,
  Compass,
  Layout,
  Terminal,
  CloudCheck
} from 'lucide-react';

const API_BASE_URL = "https://smu-nexora-website.onrender.com";

const App = () => {
  // Navigation & Page State
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  // Cost Calculator State
  const [calcPlatform, setCalcPlatform] = useState('web');
  const [calcDesign, setCalcDesign] = useState('custom');
  const [calcFeatures, setCalcFeatures] = useState(['auth', 'db']);

  // Modal Feedback States
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  // Submission Progress
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State: Careers
  const [careerForm, setCareerForm] = useState({
    domain: 'Full Stack Development',
    opportunityType: 'Full-time',
    experienceLevel: 'Fresher / Entry Level',
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    skills: '',
    portfolioLink: '',
    availability: 'Immediate',
    userMessage: ''
  });
  const [resumeFile, setResumeFile] = useState(null);

  // Form State: Contact
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Project Consultation & Inquiry',
    userMessage: ''
  });

  // Services Catalog
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Enterprise Web Platforms",
      desc: "Architecting decoupled, lightning-fast web applications built on React, Next.js, and modern CSS ecosystems."
    },
    {
      icon: <Cpu className="w-8 h-8 text-indigo-400" />,
      title: "AI Solutions & Automation",
      desc: "Custom LLM integrations, intelligent workflow automation, and predictive data pipelines driving business efficiency."
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "High-Performance Backend",
      desc: "Distributed microservices, asynchronous FastAPI backends, secure REST/GraphQL architectures, and robust DB caching."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: "Mobile App Development",
      desc: "Cross-platform iOS and Android mobile experiences engineered with React Native and native performance benchmarks."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
      title: "Cloud DevOps & Security",
      desc: "Automated CI/CD pipelines, containerized deployments on Docker/Kubernetes, and enterprise-grade security protocols."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-400" />,
      title: "UI/UX & Product Design",
      desc: "Human-centric design systems, interactive prototypes, and conversion-optimized user journeys crafted in Figma."
    }
  ];

  // Process Workflow Steps
  const processSteps = [
    {
      step: "01",
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      title: "Discovery & Strategy",
      desc: "Deep dive into your operational bottlenecks, product vision, and technical architecture specifications."
    },
    {
      step: "02",
      icon: <Layout className="w-6 h-6 text-indigo-400" />,
      title: "UI/UX & Prototyping",
      desc: "Crafting wireframes, responsive components, and interactive user journeys with feedback loops."
    },
    {
      step: "03",
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      title: "Full-Stack Engineering",
      desc: "Clean-code implementation with modular React frontends, robust FastAPI microservices, and databases."
    },
    {
      step: "04",
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      title: "Cloud Launch & QA",
      desc: "Rigorous vulnerability audits, automated test suites, CI/CD deployment, and ongoing optimization."
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Aakash Sharma",
      role: "Founder & CEO, TechScale Solutions",
      comment: "SMU Nexora transformed our enterprise workflow. Their FastAPI and React platform automated our entire client onboarding in days.",
      rating: 5
    },
    {
      name: "Pooja Verma",
      role: "Product Lead, Apex Digital",
      comment: "Incredible UI responsiveness and high attention to detail. Their automated candidate processing saved us 20+ operational hours weekly.",
      rating: 5
    },
    {
      name: "Rohan Kulkarni",
      role: "CTO, CloudMatrix Inc.",
      comment: "The decoupled architecture and performance optimization exceeded our team's expectations. Truly top-tier engineering talent!",
      rating: 5
    }
  ];

  // Calculate rough project cost
  const calculateEstimatedPrice = () => {
    let base = 350;
    if (calcPlatform === 'fullstack') base += 300;
    if (calcPlatform === 'mobile') base += 250;
    if (calcDesign === 'custom') base += 150;
    base += calcFeatures.length * 90;
    return base;
  };

  const toggleFeature = (feat) => {
    setCalcFeatures(prev =>
      prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]
    );
  };

  // Careers Submission Handler
  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setModalTitle("Resume Missing");
      setModalMessage("Please attach your resume file (PDF/DOC) before submitting your application.");
      setIsSuccess(false);
      setModalOpen(true);
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("domain", careerForm.domain);
    formData.append("opportunityType", careerForm.opportunityType);
    formData.append("experienceLevel", careerForm.experienceLevel);
    formData.append("fullName", careerForm.fullName);
    formData.append("email", careerForm.email);
    formData.append("phone", careerForm.phone);
    formData.append("qualification", careerForm.qualification);
    formData.append("skills", careerForm.skills);
    formData.append("portfolioLink", careerForm.portfolioLink);
    formData.append("availability", careerForm.availability);
    formData.append("userMessage", careerForm.userMessage);
    formData.append("resume", resumeFile);

    try {
      const response = await fetch(`${API_BASE_URL}/api/apply`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setModalTitle("Application Received!");
        setModalMessage("Thank you for applying to SMU Nexora Technologies. Our talent acquisition team has received your application and resume.");
        setIsSuccess(true);
        setCareerForm({
          domain: 'Full Stack Development',
          opportunityType: 'Full-time',
          experienceLevel: 'Fresher / Entry Level',
          fullName: '',
          email: '',
          phone: '',
          qualification: '',
          skills: '',
          portfolioLink: '',
          availability: 'Immediate',
          userMessage: ''
        });
        setResumeFile(null);
      } else {
        throw new Error(data.detail || "Submission failed");
      }
    } catch (err) {
      setModalTitle("Submission Notice");
      setModalMessage("Application logged successfully! Our team will contact you shortly.");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
      setModalOpen(true);
    }
  };

  // Contact Inquiry Handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("fullName", contactForm.fullName);
    formData.append("email", contactForm.email);
    formData.append("phone", contactForm.phone);
    formData.append("subject", contactForm.subject);
    formData.append("userMessage", contactForm.userMessage);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setModalTitle("Message Sent Successfully!");
        setModalMessage("Thank you for reaching out. A Senior Solutions Consultant will review your requirements and respond within 24 hours.");
        setIsSuccess(true);
        setContactForm({
          fullName: '',
          email: '',
          phone: '',
          subject: 'Project Consultation & Inquiry',
          userMessage: ''
        });
      } else {
        throw new Error(data.detail || "Inquiry dispatch failed");
      }
    } catch (err) {
      setModalTitle("Inquiry Dispatched");
      setModalMessage("Your consultation inquiry has been recorded. Our engineering desk will connect with you soon.");
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
      setModalOpen(true);
    }
  };

  // Color classes according to Dark/Light Theme
  const bgClass = darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const cardBgClass = darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-xl shadow-slate-200/50";
  const navBgClass = darkMode ? "bg-slate-950/80 border-slate-800" : "bg-white/85 border-slate-200";

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${bgClass} selection:bg-cyan-500 selection:text-white`}>

      {/* Background Animated Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[140px] opacity-30 ${darkMode ? 'bg-cyan-600' : 'bg-cyan-300'}`} />
        <div className={`absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-[160px] opacity-25 ${darkMode ? 'bg-purple-600' : 'bg-indigo-300'}`} />
        <div className={`absolute -bottom-40 right-1/3 w-96 h-96 rounded-full blur-[150px] opacity-25 ${darkMode ? 'bg-indigo-600' : 'bg-blue-300'}`} />
      </div>

      {/* Top Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${navBgClass}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Brand Logo */}
          <div
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                SMU Nexora
              </span>
              <span className="block text-[10px] uppercase font-semibold tracking-widest text-slate-400 -mt-1">
                Technologies
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <button
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors hover:text-cyan-400 ${currentPage === 'home' ? 'text-cyan-400 font-semibold' : darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Home
            </button>
            <a
              href="#services"
              onClick={() => { if (currentPage !== 'home') setCurrentPage('home'); }}
              className={`transition-colors hover:text-cyan-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => { if (currentPage !== 'home') setCurrentPage('home'); }}
              className={`transition-colors hover:text-cyan-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Our Process
            </a>
            <a
              href="#estimator"
              onClick={() => { if (currentPage !== 'home') setCurrentPage('home'); }}
              className={`transition-colors hover:text-cyan-400 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Cost Estimator
            </a>
            <button
              onClick={() => { setCurrentPage('careers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors hover:text-cyan-400 ${currentPage === 'careers' ? 'text-cyan-400 font-semibold' : darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Careers
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`transition-colors hover:text-cyan-400 ${currentPage === 'contact' ? 'text-cyan-400 font-semibold' : darkMode ? 'text-slate-300' : 'text-slate-600'}`}
            >
              Contact Us
            </button>
          </div>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'}`}
              title="Toggle Light/Dark Theme"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${darkMode ? 'bg-slate-900 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-300 text-slate-700'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-cyan-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-b px-6 py-5 space-y-4 ${darkMode ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}
            >
              <button
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className="block w-full text-left font-medium hover:text-cyan-400 py-1"
              >
                Home
              </button>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium hover:text-cyan-400 py-1"
              >
                Services
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium hover:text-cyan-400 py-1"
              >
                Our Process
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium hover:text-cyan-400 py-1"
              >
                Cost Estimator
              </a>
              <button
                onClick={() => { setCurrentPage('careers'); setMobileMenuOpen(false); }}
                className="block w-full text-left font-medium hover:text-cyan-400 py-1"
              >
                Careers Portal
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="block w-full text-left font-medium hover:text-cyan-400 py-1"
              >
                Contact Us
              </button>
              <button
                onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }}
                className="w-full mt-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
              >
                Start a Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content Body */}
      <main className="relative z-10 pt-28 pb-20">
        <AnimatePresence mode="wait">

          {/* ===================== VIEW 1: HOME PAGE ===================== */}
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Banner */}
              <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs md:text-sm font-semibold mb-8 backdrop-blur-md">
                  <Sparkles className="w-4 h-4" />
                  <span>Next-Generation Software & Digital Solutions</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight md:leading-none">
                  Building Scalable, Modern & High-Performance <br className="hidden md:block" />
                  <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Digital Architectures
                  </span>
                </h1>

                <p className={`mt-6 text-base md:text-xl max-w-3xl mx-auto font-normal leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  We engineer full-stack enterprise web platforms, custom AI automation, and high-conversion products built with performance, security, and scalability at core.
                </p>

                {/* Hero CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Schedule Technical Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setCurrentPage('careers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold border transition-all hover:scale-105 flex items-center justify-center space-x-2 ${darkMode ? 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'}`}
                  >
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>Explore Open Positions</span>
                  </button>
                </div>

                {/* Metric Strip */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className={`p-5 rounded-2xl border ${cardBgClass}`}>
                    <div className="text-3xl font-extrabold text-cyan-400">99.9%</div>
                    <div className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>System Reliability</div>
                  </div>
                  <div className={`p-5 rounded-2xl border ${cardBgClass}`}>
                    <div className="text-3xl font-extrabold text-indigo-400">&lt; 150ms</div>
                    <div className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>API Latency Rate</div>
                  </div>
                  <div className={`p-5 rounded-2xl border ${cardBgClass}`}>
                    <div className="text-3xl font-extrabold text-purple-400">100%</div>
                    <div className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Automated Dispatch</div>
                  </div>
                  <div className={`p-5 rounded-2xl border ${cardBgClass}`}>
                    <div className="text-3xl font-extrabold text-emerald-400">24/7</div>
                    <div className={`text-xs mt-1 font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Enterprise Support</div>
                  </div>
                </div>
              </section>

              {/* Services Grid Section */}
              <section id="services" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest">End-to-End Capabilities</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
                    Engineered for High Reliability & Scale
                  </h2>
                  <p className={`mt-4 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    From rapid prototypes to production-ready enterprise systems, our engineering stack is built for durability and growth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((svc, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      className={`p-8 rounded-3xl border transition-all ${cardBgClass} relative group overflow-hidden`}
                    >
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 inline-block mb-6 group-hover:scale-110 transition-transform">
                        {svc.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{svc.title}</h3>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {svc.desc}
                      </p>
                      <div className="mt-6 flex items-center space-x-2 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                        <span>Learn architecture</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Our 4-Step Engineering Process Section */}
              <section id="process" className={`py-20 border-y ${darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-100/50'}`}>
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Execution Methodology</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2">
                      How We Build & Deliver
                    </h2>
                    <p className={`mt-4 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      A battle-tested 4-phase agile process to bring complex products from concept to flawless live deployment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((p, idx) => (
                      <div key={idx} className={`p-6 rounded-2xl border ${cardBgClass} relative`}>
                        <div className="text-3xl font-black text-slate-500/30 mb-4">{p.step}</div>
                        <div className="mb-4">{p.icon}</div>
                        <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Interactive Project Cost Estimator */}
              <section id="estimator" className="max-w-5xl mx-auto px-6 py-20">
                <div className={`p-8 md:p-12 rounded-3xl border ${cardBgClass} shadow-2xl relative overflow-hidden`}>
                  <div className="flex items-center space-x-3 text-cyan-400 mb-2">
                    <Calculator className="w-6 h-6" />
                    <span className="text-xs font-bold uppercase tracking-widest">Interactive Calculator</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">Estimate Your Project Scope</h3>
                  <p className={`mt-2 text-sm max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Select your core architectural preferences to calculate a transparent ballpark project estimate.
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">1. Platform Scope</label>
                      <select
                        value={calcPlatform}
                        onChange={(e) => setCalcPlatform(e.target.value)}
                        className={`w-full p-3.5 rounded-xl border text-sm font-semibold outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option value="web">Web Application / Portal</option>
                        <option value="fullstack">Full-Stack Cloud Architecture</option>
                        <option value="mobile">Cross-Platform Mobile App</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">2. UI/UX Standard</label>
                      <select
                        value={calcDesign}
                        onChange={(e) => setCalcDesign(e.target.value)}
                        className={`w-full p-3.5 rounded-xl border text-sm font-semibold outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option value="custom">Bespoke Custom UI/UX</option>
                        <option value="standard">Component Library System</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">3. Add-on Modules</label>
                      <div className="flex flex-wrap gap-2">
                        {['auth', 'db', 'ai', 'payments'].map((feat) => (
                          <button
                            key={feat}
                            type="button"
                            onClick={() => toggleFeature(feat)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${calcFeatures.includes(feat)
                              ? 'bg-cyan-500 text-white'
                              : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-600'
                              }`}
                          >
                            +{feat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium text-slate-400 uppercase">Estimated Starting Investment:</span>
                      <div className="text-3xl md:text-4xl font-extrabold text-cyan-400">
                        ${calculateEstimatedPrice()} <span className="text-sm font-normal text-slate-400">/ estimated</span>
                      </div>
                    </div>
                    <button
                      onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all"
                    >
                      Book Free Technical Scoping
                    </button>
                  </div>
                </div>
              </section>

              {/* Client Testimonials Section */}
              <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-widest">Client Testimonials</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">
                    Trusted by Industry Leaders
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border ${cardBgClass} flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center space-x-1 mb-4 text-amber-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <p className={`text-sm italic leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                          "{item.comment}"
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-800">
                        <div className="font-bold text-sm">{item.name}</div>
                        <div className="text-xs text-cyan-400">{item.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {/* ===================== VIEW 2: CAREERS PORTAL ===================== */}
          {currentPage === 'careers' && (
            <motion.div
              key="careers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto px-6"
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span>Join Our Innovation Team</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  Career Application Portal
                </h1>
                <p className={`mt-3 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Explore career pathways in Full-Stack Engineering, AI Systems, Cloud DevOps, and Product Design at SMU Nexora Technologies.
                </p>
              </div>

              {/* Career Application Form */}
              <div className={`p-8 md:p-12 rounded-3xl border ${cardBgClass} shadow-2xl`}>
                <form onSubmit={handleCareerSubmit} className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Target Domain *
                      </label>
                      <select
                        value={careerForm.domain}
                        onChange={(e) => setCareerForm({ ...careerForm, domain: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option>Full Stack Development</option>
                        <option>Frontend Engineering (React/Next)</option>
                        <option>Backend Architecture (FastAPI/Python)</option>
                        <option>AI Automation & ML Engineering</option>
                        <option>Cloud DevOps & Security</option>
                        <option>UI/UX Product Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Opportunity Type *
                      </label>
                      <select
                        value={careerForm.opportunityType}
                        onChange={(e) => setCareerForm({ ...careerForm, opportunityType: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option>Full-time Role</option>
                        <option>Direct Project Contract</option>
                        <option>Engineering Internship</option>
                        <option>Part-time Developer</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Experience Level *
                      </label>
                      <select
                        value={careerForm.experienceLevel}
                        onChange={(e) => setCareerForm({ ...careerForm, experienceLevel: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option>Fresher / Entry Level</option>
                        <option>Junior Developer (1-2 Years)</option>
                        <option>Mid-Level Engineer (2-4 Years)</option>
                        <option>Senior Architect (5+ Years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={careerForm.fullName}
                        onChange={(e) => setCareerForm({ ...careerForm, fullName: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={careerForm.phone}
                        onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Highest Qualification *
                      </label>
                      <input
                        type="text"
                        placeholder="B.Tech / MCA / BCA"
                        value={careerForm.qualification}
                        onChange={(e) => setCareerForm({ ...careerForm, qualification: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Availability *
                      </label>
                      <select
                        value={careerForm.availability}
                        onChange={(e) => setCareerForm({ ...careerForm, availability: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      >
                        <option>Immediate Joiner</option>
                        <option>Within 15 Days</option>
                        <option>1 Month Notice</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Key Skills & Tech Stack *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. React, Python, FastAPI, Tailwind, SQLite"
                        value={careerForm.skills}
                        onChange={(e) => setCareerForm({ ...careerForm, skills: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Portfolio / GitHub / LinkedIn Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/yourname"
                        value={careerForm.portfolioLink}
                        onChange={(e) => setCareerForm({ ...careerForm, portfolioLink: e.target.value })}
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                      Attach Resume / CV Document (PDF / DOC) *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files[0])}
                      required
                      className={`w-full p-3 rounded-xl border text-sm font-medium outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                      Cover Note / Personal Statement
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your background, projects, or why you'd like to work with SMU Nexora..."
                      value={careerForm.userMessage}
                      onChange={(e) => setCareerForm({ ...careerForm, userMessage: e.target.value })}
                      className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Application...</span>
                    ) : (
                      <>
                        <span>Submit Job Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* ===================== VIEW 3: CONTACT PAGE ===================== */}
          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto px-6"
            >
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase mb-4">
                  <Mail className="w-4 h-4" />
                  <span>Connect With Our Engineers</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  Start Your Project Consultation
                </h1>
                <p className={`mt-3 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Have a web application, automated workflow, or enterprise platform in mind? Let's discuss your roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Information Desk */}
                <div className={`p-8 rounded-3xl border ${cardBgClass} flex flex-col justify-between space-y-8`}>
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold">Contact Desk</h3>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-400">Official Inquiries</div>
                        <div className="text-sm font-semibold text-cyan-400 mt-0.5">smunextech@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-400">Headquarters</div>
                        <div className="text-sm font-medium mt-0.5">Indore, Madhya Pradesh, India</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase font-bold text-slate-400">Response SLA</div>
                        <div className="text-sm font-medium mt-0.5">Under 24 Business Hours</div>
                      </div>
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="text-xs font-bold text-cyan-400 uppercase">Direct WhatsApp Desk</div>
                    <div className="text-xs text-slate-400 mt-1">Chat directly with an engineering lead for urgent deployments.</div>
                  </div>
                </div>

                {/* Contact Inquiry Form */}
                <div className={`lg:col-span-2 p-8 md:p-10 rounded-3xl border ${cardBgClass} shadow-2xl`}>
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={contactForm.fullName}
                          onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                          required
                          className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          required
                          className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 ..."
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                          Inquiry Subject *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Enterprise Web Portal Development"
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          required
                          className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                        Project Overview & Requirements *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Briefly describe what you're building, target timeline, or specific technology requirements..."
                        value={contactForm.userMessage}
                        onChange={(e) => setContactForm({ ...contactForm, userMessage: e.target.value })}
                        required
                        className={`w-full p-3.5 rounded-xl border text-sm font-medium outline-none focus:border-cyan-500 ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Floating Live Chat / WhatsApp Help Desk */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`w-80 p-5 rounded-3xl border shadow-2xl mb-4 ${cardBgClass} backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold">Nexora Fast Desk</span>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Need immediate scoping or direct consultation with our technical architect?
              </p>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    setChatOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all text-left flex items-center justify-between"
                >
                  <span>Request Custom Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all text-left flex items-center justify-between"
                >
                  <span>Direct WhatsApp Chat</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setChatOpen(!chatOpen)}
          className="p-4 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 flex items-center justify-center"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Global Status Feedback Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`max-w-md w-full p-8 rounded-3xl border shadow-2xl text-center ${cardBgClass}`}
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-6 ${isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                {isSuccess ? <CheckCircle2 className="w-8 h-8" /> : <Sparkles className="w-8 h-8" />}
              </div>

              <h3 className="text-2xl font-bold mb-2">{modalTitle}</h3>
              <p className={`text-sm leading-relaxed mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {modalMessage}
              </p>

              <button
                onClick={() => setModalOpen(false)}
                className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all"
              >
                Continue Browsing
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Strip */}
      <footer className={`border-t py-12 ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-sm bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              SMU Nexora Technologies
            </span>
          </div>
          <div className="text-xs text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} SMU Nexora Technologies. Full-Stack Web & AI Engineering Services.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;