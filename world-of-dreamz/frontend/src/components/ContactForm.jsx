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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Phone must be 10 digits";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('sending');
    try {
      // Uses relative path which works perfectly with Vite proxy or ngrok
      await axios.post('/api/leads', formData); 
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', interestedFormat: 'Castillo', message: '' });
    } catch (error) { 
      console.error("Form submission error:", error);
      setStatus('error'); 
    }
  };

  // Common input classes: EXPLICITLY set bg-white and text-gray-900 (dark text)
  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-900 placeholder-gray-500";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-purple-500/20">
      
      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg font-medium text-center border border-green-200">
          ✅ Thank you! Our team will reach you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg font-medium text-center border border-red-200">
          ❌ Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-800 font-bold mb-2">Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your Name" />
          {errors.name && <p className="text-red-500 text-sm mt-1 font-medium">{errors.name}</p>}
        </div>
        
        <div>
          <label className="block text-gray-800 font-bold mb-2">Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
          {errors.email && <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-800 font-bold mb-2">Phone *</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="10-digit mobile number" maxLength={10} />
          {errors.phone && <p className="text-red-500 text-sm mt-1 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-gray-800 font-bold mb-2">Company (Optional)</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company Name" />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-800 font-bold mb-2">Interested Format *</label>
        <select name="interestedFormat" value={formData.interestedFormat} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
          <option value="Castillo">Castillo (Kids & Family)</option>
          <option value="Pallacia">Pallacia (Teens & Young Adults)</option>
          <option value="Imperio">Imperio (Indoor + Outdoor Multiverse)</option>
          <option value="Custom Consultation">Custom Consultation</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-800 font-bold mb-2">Message *</label>
        <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your space, city, and requirements..."></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>}
      </div>

      <button 
        type="submit" 
        disabled={status === 'sending'} 
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all transform hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending Inquiry...' : 'Submit Enquiry'}
      </button>
    </form>
  );
};

export default ContactForm;