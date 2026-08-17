import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import {
  Calculator,
  Compass,
  Layout,
  Terminal,
  Zap,
  Star,
  MessageSquare,
  X,
  ArrowRight,
  Sparkles,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  // Interactive Project Cost Estimator States
  const [calcPlatform, setCalcPlatform] = useState('web');
  const [calcDesign, setCalcDesign] = useState('custom');
  const [calcFeatures, setCalcFeatures] = useState(['auth', 'db']);

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

  const processSteps = [
    {
      step: "01",
      icon: <Compass className="w-7 h-7 text-blue-600" />,
      title: "Discovery & Strategy",
      desc: "Deep dive into your product vision, enterprise workflows, and system architecture specifications."
    },
    {
      step: "02",
      icon: <Layout className="w-7 h-7 text-indigo-600" />,
      title: "UI/UX & Prototyping",
      desc: "Crafting wireframes, high-fidelity responsive components, and conversion-focused user journeys."
    },
    {
      step: "03",
      icon: <Terminal className="w-7 h-7 text-purple-600" />,
      title: "Full-Stack Engineering",
      desc: "Clean modular React interfaces backed by high-throughput FastAPI microservices and secure databases."
    },
    {
      step: "04",
      icon: <Zap className="w-7 h-7 text-emerald-600" />,
      title: "Cloud Deployment & QA",
      desc: "Comprehensive testing, CI/CD integration, automated security checks, and 24/7 reliability monitoring."
    }
  ];

  const testimonials = [
    {
      name: "Aakash Sharma",
      role: "Founder & CEO, TechScale Solutions",
      comment: "SMU Nexora transformed our enterprise workflow. Their FastAPI and React platform automated our entire onboarding within days.",
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

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dark/Light dynamic classes
  const themeBg = darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900";
  const themeCard = darkMode ? "bg-slate-900 border-slate-800 text-slate-100" : "bg-white border-slate-200 text-slate-900 shadow-xl";

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${themeBg}`}>

      {/* Top Navbar Component */}
      {Navbar ? (
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      ) : (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-lg text-blue-600">SMU Nexora Technologies</span>
          <div className="flex gap-4 text-sm font-semibold">
            <button onClick={() => handleNavigate('home')}>Home</button>
            <button onClick={() => handleNavigate('services')}>Services</button>
            <button onClick={() => handleNavigate('careers')}>Careers</button>
            <button onClick={() => handleNavigate('contact')}>Contact</button>
          </div>
        </nav>
      )}

      {/* Floating Theme Switcher Button */}
      <div className="fixed top-24 right-6 z-40">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-2xl border shadow-lg transition-all ${darkMode
              ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800'
              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          title="Toggle Theme"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Main Routed Content */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Services Section */}
            <Services onNavigate={handleNavigate} />

            {/* 3. NEW: Execution Methodology / Process */}
            <section className={`py-24 border-t ${darkMode ? 'border-slate-800 bg-slate-900/40' : 'border-slate-200 bg-slate-100/60'}`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
                    Execution Methodology
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black mt-4">
                    How We Build & Deliver
                  </h2>
                  <p className="text-slate-500 mt-4 text-base">
                    A battle-tested 4-phase agile engineering pipeline designed for transparent milestone delivery and high code quality.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {processSteps.map((p, idx) => (
                    <div key={idx} className={`p-8 rounded-3xl border ${themeCard} relative transition-transform hover:-translate-y-1`}>
                      <div className="text-3xl font-black text-slate-300 dark:text-slate-700 mb-4">{p.step}</div>
                      <div className="mb-4 p-3 bg-blue-50 dark:bg-slate-800 rounded-2xl inline-block">{p.icon}</div>
                      <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                      <p className="text-xs leading-relaxed text-slate-500">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. NEW: Interactive Project Cost Estimator */}
            <section className="max-w-5xl mx-auto px-6 py-20">
              <div className={`p-8 md:p-12 rounded-3xl border ${themeCard} relative overflow-hidden`}>
                <div className="flex items-center space-x-2 text-blue-600 mb-2">
                  <Calculator className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Interactive Scope Calculator</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black">Estimate Your Project Scope</h3>
                <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                  Select your core architecture preferences to get an instant transparent ballpark estimate for your project.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">1. Platform Type</label>
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
                    <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">2. UI/UX Design Standard</label>
                    <select
                      value={calcDesign}
                      onChange={(e) => setCalcDesign(e.target.value)}
                      className={`w-full p-3.5 rounded-xl border text-sm font-semibold outline-none ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'}`}
                    >
                      <option value="custom">Bespoke Custom UI/UX</option>
                      <option value="standard">Component System Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-slate-500 mb-2 block">3. Add-on Modules</label>
                    <div className="flex flex-wrap gap-2">
                      {['auth', 'db', 'ai', 'payments'].map((feat) => (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => toggleFeature(feat)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${calcFeatures.includes(feat)
                              ? 'bg-blue-600 text-white'
                              : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-700'
                            }`}
                        >
                          +{feat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase">Estimated Starting Range:</span>
                    <div className="text-3xl md:text-4xl font-black text-blue-600">
                      ${calculateEstimatedPrice()} <span className="text-sm font-normal text-slate-500">/ estimated</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-6 py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all text-sm uppercase tracking-wider"
                  >
                    Book Free Consultation
                  </button>
                </div>
              </div>
            </section>

            {/* 5. NEW: Testimonials & Client Reviews */}
            <section className="max-w-7xl mx-auto px-6 py-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
                  Client Endorsements
                </span>
                <h2 className="text-3xl md:text-4xl font-black mt-3">
                  Trusted by Forward-Thinking Brands
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                  <div key={idx} className={`p-8 rounded-3xl border ${themeCard} flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-center space-x-1 mb-4 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                        "{item.comment}"
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                      <div className="font-bold text-sm">{item.name}</div>
                      <div className="text-xs text-blue-600">{item.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Contact Section Preview */}
            <Contact />
          </>
        )}

        {currentPage === 'services' && (
          <div className="pt-16">
            <Services onNavigate={handleNavigate} />
            <Contact />
          </div>
        )}

        {currentPage === 'careers' && (
          <div className="pt-16">
            <Careers />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="pt-16">
            <Contact />
          </div>
        )}
      </main>

      {/* Floating Live Desk / WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className={`w-80 p-5 rounded-3xl border shadow-2xl mb-4 ${themeCard} backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200`}>
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold">SMU Nexora Quick Desk</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              Need immediate project scoping or direct consultation with our lead architect?
            </p>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => {
                  handleNavigate('contact');
                  setChatOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-all text-left flex items-center justify-between"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 transition-all text-left flex items-center justify-between"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="p-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center transition-transform hover:scale-105"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>

      {/* Footer */}
      <footer className={`border-t py-12 ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-slate-800 dark:text-slate-200">
              SMU Nexora Technologies Pvt. Ltd.
            </span>
          </div>
          <div className="text-xs text-slate-500 text-center md:text-right">
            © {new Date().getFullYear()} SMU Nexora Technologies. Enterprise Software & Digital Solutions.
          </div>
        </div>
      </footer>
    </div>
  );
}