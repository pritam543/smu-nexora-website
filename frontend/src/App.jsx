import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Careers from './components/Careers';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <div className="pt-20">
            <Services />
          </div>
        );
      case 'about':
        return (
          <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
            <div className="text-center">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
                About SMU Nexora
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">
                Pioneering Tech & Growth Agency
              </h2>
            </div>
            <p className="text-slate-600 mt-8 leading-relaxed text-lg text-justify">
              SMU Nexora Technologies Pvt. Ltd., headquartered in Indore, Madhya Pradesh, is a modern technology and growth agency. We specialize in engineering high-speed web platforms, enterprise mobile applications, custom cloud solutions, and ROI-driven Digital Marketing strategies that elevate corporate brands globally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-600">Our Mission</h3>
                <p className="text-sm text-slate-600 mt-2">Delivering clean code, responsive digital products, and ROI-centric marketing campaigns.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-600">Our Vision</h3>
                <p className="text-sm text-slate-600 mt-2">Empowering brands with seamless automation, modern cloud platforms, and global reach.</p>
              </div>
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-xl font-bold text-blue-600">Our Commitment</h3>
                <p className="text-sm text-slate-600 mt-2">Dedicated support, continuous server uptime, and transparent business operations.</p>
              </div>
            </div>
          </div>
        );
      case 'careers':
        return (
          <div className="pt-20">
            <Careers />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      default:
        return (
          <div>
            <Hero onNavigate={(page) => setCurrentPage(page)} />
            <Services />
            <div className="py-20 bg-slate-100 text-center border-t border-slate-200">
              <h3 className="text-3xl font-extrabold text-slate-900">Ready to Grow Your Career?</h3>
              <p className="text-slate-600 mt-2">Explore job roles and submit your application on our dedicated Careers portal.</p>
              <button 
                onClick={() => setCurrentPage('careers')}
                className="mt-6 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-md text-sm uppercase tracking-wider cursor-pointer"
              >
                View Career Opportunities
              </button>
            </div>
            <Contact />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Light Corporate Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <button 
            onClick={() => setCurrentPage('home')} 
            className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-900 cursor-pointer"
          >
            <span className="text-blue-600">SMU</span> NEXORA
          </button>

          <div className="flex items-center gap-8 text-sm font-bold text-slate-700">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${currentPage === 'home' ? 'text-blue-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${currentPage === 'services' ? 'text-blue-600' : ''}`}
            >
              Services
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${currentPage === 'about' ? 'text-blue-600' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setCurrentPage('careers')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${currentPage === 'careers' ? 'text-blue-600' : ''}`}
            >
              Careers
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${currentPage === 'contact' ? 'text-blue-600' : ''}`}
            >
              Contact
            </button>
          </div>

          <button 
            onClick={() => setCurrentPage('contact')}
            className="hidden md:block px-5 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all cursor-pointer uppercase tracking-wider shadow-md"
          >
            Get In Touch
          </button>
        </div>
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-200 bg-slate-50">
        © {new Date().getFullYear()} SMU Nexora Technologies Pvt. Ltd. | Official Mail: <a href="mailto:smunextech@gmail.com" className="text-blue-600 hover:underline">smunextech@gmail.com</a>
      </footer>
    </div>
  );
}

export default App;