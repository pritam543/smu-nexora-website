import React, { useState } from 'react';

const services = [
  {
    id: "web-app",
    title: "Web & App Application Development",
    desc: "Custom, ultra-fast web and mobile app solutions built with modern React, Next.js, and Python microservices.",
    icon: "💻",
    tag: "High Performance",
    details: "At SMU Nexora, we engineer enterprise-grade web and mobile applications tailored to your business operations. Our solutions prioritize speed, SEO-ready architecture, robust security protocols, and seamless API integrations to give your brand a competitive digital edge."
  },
  {
    id: "consulting",
    title: "IT Strategic Consulting",
    desc: "Modernizing legacy architectures and defining digital product technical roadmaps for scalable growth.",
    icon: "📈",
    tag: "Strategic Tech",
    details: "Expert technical guidance to optimize your tech stack, streamline workflows, and scale your operations efficiently. We align software engineering roadmaps directly with core business revenue goals."
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Auditing",
    desc: "Vulnerability assessments, penetration testing, and end-to-end data encryption protocols.",
    icon: "🛡️",
    tag: "Core Security",
    details: "Advanced protection protocols, vulnerability assessments, and secure system design to safeguard intellectual property, sensitive corporate data, and critical customer financial records."
  },
  {
    id: "digital-marketing",
    title: "Digital Growth & BEST SEO",
    desc: "Data-driven BEST SEO, Performance Ads, Content Strategy, and Targeted Social Media Campaigns.",
    icon: "🚀",
    tag: "ROI Focused",
    details: "We scale your brand's online presence through targeted lead generation, search engine dominance (BEST SEO), PPC advertising (Google & Meta Ads), and high-converting funnel design."
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    desc: "Scalable cloud infrastructure setup, automated CI/CD pipelines, and 24/7 server monitoring.",
    icon: "☁️",
    tag: "AWS & Docker",
    details: "Modernize your IT infrastructure with automated cloud deployments on AWS, Google Cloud, or Azure. We reduce downtime, optimize server costs, and ensure zero-friction scaling."
  },
  {
    id: "ai-software",
    title: "AI & Custom Software Tools",
    desc: "Intelligent automation tools, custom AI integration, and workflow optimization software.",
    icon: "🤖",
    tag: "Next-Gen Tech",
    details: "Automate manual tasks and streamline operations with custom AI chatbots, machine learning tools, and specialized business logic software engineered specifically for your team's needs."
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
            Our Core Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 tracking-tight">
            Cutting-Edge Tech & Growth Solutions
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            Empowering modern enterprises with custom software engineering, scalable cloud systems, and high-impact digital marketing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const isExpanded = activeService === srv.id;
            return (
              <div 
                key={srv.id}
                onClick={() => toggleService(srv.id)}
                className={`bg-white border rounded-2xl p-7 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-between ${
                  isExpanded ? 'border-blue-600 ring-2 ring-blue-500/20' : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl p-3 bg-blue-50 rounded-xl">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-blue-700 rounded-full border border-slate-200">
                      {srv.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {srv.desc}
                  </p>

                  {/* Expandable Content Box */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-blue-100 bg-blue-50/60 p-4 rounded-xl text-slate-700 text-sm leading-relaxed animate-fadeIn">
                      <p className="font-semibold text-blue-900 mb-1">How SMU Nexora Delivers Value:</p>
                      {srv.details}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-blue-600 font-bold text-sm flex items-center justify-between">
                  <span>{isExpanded ? "Click to Show Less" : "Click for Details"}</span>
                  <span className={`transform transition-transform text-lg ${isExpanded ? 'rotate-180' : ''}`}>↓</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}