import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    company: '', 
    interestedFormat: 'Castillo', 
    message: '' 
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); 

  // ✅ CRITICAL FIX: Explicitly define API base with fallback
  const API_BASE = import.meta.env.VITE_API_URL || ''; 
  
  // Debug log to verify env var is loaded (Check Browser Console F12)
  console.log("🔗 API Base URL:", API_BASE); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Please enter a valid email";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g,''))) tempErrors.phone = "Please enter a valid 10-digit number";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('sending');
    try {
      const targetUrl = `${API_BASE}/api/leads`;
      console.log("📤 Sending form to:", targetUrl); // Verify destination in console
      
      await axios.post(targetUrl, formData, {
        timeout: 60000, // 60s timeout for Render free tier wake-up
        headers: { 'Content-Type': 'application/json' }
      }); 
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', interestedFormat: 'Castillo', message: '' });
    } catch (error) { 
      console.error("❌ Form submission failed:", error.response?.data || error.message);
      setStatus('error'); 
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 placeholder-gray-500 transition-all";
  const labelClass = "block text-gray-800 font-bold mb-2 text-sm uppercase tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-purple-500/20">
      
      {/* Status Messages */}
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg font-medium text-center border border-green-200 animate-fade-in">
          ✅ Thank you! Our team will reach out to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg font-medium text-center border border-red-200 animate-fade-in">
           Something went wrong. Please check your connection or WhatsApp us directly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" maxLength={13} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className={labelClass}>Company / City</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Optional" />
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass}>Interested Format *</label>
        <select name="interestedFormat" value={formData.interestedFormat} onChange={handleChange} className={`${inputClass} cursor-pointer appearance-none`}>
          <option value="Castillo">Castillo (Kids & Family Entertainment)</option>
          <option value="Pallacia">Pallacia (Teens & Young Adults)</option>
          <option value="Imperio">Imperio (Indoor + Outdoor Multiverse)</option>
          <option value="Custom Consultation">Custom Consultation / Other</option>
        </select>
      </div>

      <div className="mb-8">
        <label className={labelClass}>Your Message *</label>
        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your available space, location, and vision..."></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={status === 'sending'} 
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform ${
          status === 'sending' 
            ? 'bg-gray-400 cursor-not-allowed opacity-70' 
            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-[1.02]'
        } text-white`}
      >
        {status === 'sending' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Inquiry...
          </span>
        ) : 'Submit Enquiry'}
      </button>
      
      <p className="text-center text-gray-400 text-xs mt-4">
        ⚡ First submission may take 30-45 seconds as our server wakes up.
      </p>
    </form>
  );
};

export default ContactForm;