import React, { useState } from 'react';
import axios from 'axios';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Job Application",
    message: ""
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("service", formData.service);
    submitData.append("message", formData.message);
    submitData.append("form_type", "Application");
    if (resumeFile) {
      submitData.append("resume", resumeFile);
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/contact", submitData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setStatus({ type: "success", msg: res.data.message });
      setFormData({ name: "", email: "", phone: "", service: "Job Application", message: "" });
      setResumeFile(null);
    } catch (err) {
      setStatus({ 
        type: "error", 
        msg: "❌ Application submission failed. Ensure backend API is online." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
            Careers at SMU Nexora
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">
            Build The Future With Us
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg">
            We are always looking for passionate engineers, digital marketers, designers, and problem solvers to join our team in Indore.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-slate-900">Growth Environment</h3>
            <p className="text-slate-600 text-sm mt-2">Work on cutting-edge technologies and enterprise projects with direct mentorship.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-bold text-slate-900">Innovation First</h3>
            <p className="text-slate-600 text-sm mt-2">We encourage fresh ideas, creative strategies, and continuous learning culture.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-slate-900">Competitive Packages</h3>
            <p className="text-slate-600 text-sm mt-2">Industry-standard compensation, performance rewards, and career elevation.</p>
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Submit Your Job Application</h3>
            <p className="text-xs text-slate-500 mt-1">Attach your resume to get reviewed directly by our recruitment team.</p>
          </div>

          {status.msg && (
            <div className={`p-4 mb-6 rounded-xl text-sm font-medium ${
              status.type === 'success' 
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                : 'bg-rose-50 text-rose-800 border border-rose-200'
            }`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Carpenter"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Applied Profile</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              >
                <option value="Digital Marketing Role">Digital Marketing Specialist</option>
                <option value="Frontend Developer">Frontend / React Developer</option>
                <option value="Backend Developer">Backend / Python Developer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Business Developer">Business Development Executive</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Upload Resume (PDF / Doc)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-slate-700 text-xs file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Cover Note / Experience Summary</label>
              <textarea
                name="message"
                required
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your skill set and experience..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20 text-sm uppercase tracking-wider cursor-pointer"
            >
              {loading ? "Submitting Application..." : "Submit Application"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}