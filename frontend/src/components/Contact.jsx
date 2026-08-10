import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Marketing",
    message: ""
  });

  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    submitData.append("form_type", "General Contact");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/contact", submitData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setStatus({ type: "success", msg: res.data.message });
      setFormData({ name: "", email: "", phone: "", service: "Digital Marketing", message: "" });
    } catch (err) {
      setStatus({ 
        type: "error", 
        msg: "❌ Server connection error. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info & Social Connections */}
        <div>
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase px-3 py-1 bg-blue-100 rounded-full">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 leading-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-slate-600 mt-4 text-base leading-relaxed">
            Reach out to our team at SMU Nexora Technologies for custom software inquiries, digital marketing proposals, or technical partnerships.
          </p>

          <div className="mt-8 space-y-4">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-2xl hover:bg-emerald-100/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-200 text-emerald-800 rounded-xl text-2xl">💬</div>
                <div>
                  <h4 className="text-slate-900 font-bold group-hover:text-emerald-700 transition-colors">WhatsApp Business Chat</h4>
                  <p className="text-xs text-slate-500">Instant messaging with support team</p>
                </div>
              </div>
              <span className="text-emerald-700 text-sm font-bold">Chat Now →</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:smunextech@gmail.com"
              className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-2xl hover:bg-blue-100/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-200 text-blue-800 rounded-xl text-2xl">📧</div>
                <div>
                  <h4 className="text-slate-900 font-bold group-hover:text-blue-700 transition-colors">Official Email</h4>
                  <p className="text-xs text-slate-500">smunextech@gmail.com</p>
                </div>
              </div>
              <span className="text-blue-700 text-sm font-bold">Send Mail →</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-pink-50 border border-pink-200 rounded-2xl hover:bg-pink-100/60 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-200 text-pink-800 rounded-xl text-2xl">📸</div>
                <div>
                  <h4 className="text-slate-900 font-bold group-hover:text-pink-700 transition-colors">Instagram Profile</h4>
                  <p className="text-xs text-slate-500">Follow for official updates & announcements</p>
                </div>
              </div>
              <span className="text-pink-700 text-sm font-bold">Follow Us →</span>
            </a>

          </div>
        </div>

        {/* General Inquiry Form */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900">Send Direct Message</h3>
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
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@email.com"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Interested Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              >
                <option value="Digital Marketing">Digital Marketing & Growth</option>
                <option value="Web Development">Web Application Development</option>
                <option value="Mobile App">Mobile App Development</option>
                <option value="Cloud Solutions">Cloud Infrastructure</option>
                <option value="General Partnership">General Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Project Message</label>
              <textarea
                name="message"
                required
                rows="3"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your requirements..."
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider cursor-pointer"
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}