import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', subject: 'General Business Inquiry', userMessage: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const API_BASE_URL = "https://smu-nexora-website.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const submitData = new FormData();
    submitData.append("fullName", formData.fullName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone || "Not Provided");
    submitData.append("subject", formData.subject);
    submitData.append("userMessage", formData.userMessage);

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        body: submitData
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ fullName: '', email: '', phone: '', subject: 'General Business Inquiry', userMessage: '' });
      } else {
        setErrorMessage(result.detail || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Backend Connection Failed! Live server is starting up or unreachable.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch With SMU Nexora</h2>
        <p className="text-gray-300 text-base">Have an enterprise requirement? Reach out to our team in Indore.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#0b101d] p-10 rounded-3xl border border-gray-800 shadow-2xl">
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
          <p className="text-gray-300 mb-4"><strong>Location:</strong> Indore, Madhya Pradesh, India</p>
          <p className="text-gray-300 mb-4"><strong>Email:</strong> contact@smunexora.com / smunextech@gmail.com</p>
          <p className="text-gray-300 mb-4"><strong>Phone / WhatsApp:</strong> +91 8435299100</p>
          <p className="text-gray-300"><strong>Support Hours:</strong> Mon - Sat (9:00 AM - 7:00 PM)</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="fullName"
            placeholder="Your Full Name" 
            required 
            value={formData.fullName}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#030712] border border-gray-800 text-white outline-none focus:border-sky-500 transition"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#030712] border border-gray-800 text-white outline-none focus:border-sky-500 transition"
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number (Optional)" 
            value={formData.phone}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#030712] border border-gray-800 text-white outline-none focus:border-sky-500 transition"
          />
          <input 
            type="text" 
            name="subject"
            placeholder="Inquiry Subject" 
            required 
            value={formData.subject}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#030712] border border-gray-800 text-white outline-none focus:border-sky-500 transition"
          />
          <textarea 
            name="userMessage"
            placeholder="Your Message" 
            rows="4" 
            required 
            value={formData.userMessage}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#030712] border border-gray-800 text-white outline-none focus:border-sky-500 transition resize-none"
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-sky-400 to-indigo-500 text-white p-4 rounded-xl font-bold shadow-lg hover:opacity-90 transition cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </button>
          {submitted && <p className="text-sky-400 text-center font-semibold mt-2">Message sent successfully!</p>}
          {errorMessage && <p className="text-red-400 text-center font-semibold mt-2 text-sm">{errorMessage}</p>}
        </form>
      </div>
    </section>
  );
}