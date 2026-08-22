import React, { useState, useEffect } from 'react';

const headlines = [
  "Building Scalable Enterprise Software",
  "Accelerating Brands via Data-Driven Digital Marketing",
  "Engineering Next-Gen Mobile & Web Applications",
  "Architecting Cloud & AI Solutions for Tomorrow"
];


export default function Hero({ onNavigate }) {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-36 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs md:text-sm font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            SMU Nexora Technologies Pvt. Ltd.
          </div>

          {/* Dynamic Rotating Headline */}
          <div className="h-28 md:h-36 flex items-center justify-center">
            <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight transition-all duration-500">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
                {headlines[currentHeadline]}
              </span>
            </h1>
          </div>

          <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            We empower global startups, growing enterprises, and industry leaders with bespoke digital products, high-velocity web development, and ROI-focused digital marketing campaigns.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all text-sm uppercase tracking-wider cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-300 shadow-sm transition-all text-sm uppercase tracking-wider cursor-pointer"
            >
              Explore Solutions
            </button>
          </div>

        </div>

        {/* Corporate Trust & Statistics Counter Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black text-blue-600">50+</p>
            <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Digital Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-blue-600">99.9%</p>
            <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-blue-600">24/7</p>
            <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Technical Support</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-blue-600">100%</p>
            <p className="text-xs md:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">Data Security</p>
          </div>
        </div>

      </div>
    </section>
  );
}