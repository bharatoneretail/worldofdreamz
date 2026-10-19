import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0f0720] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center text-white mb-12 text-glow"
        >
          Privacy Policy
        </motion.h1>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30">
          <p className="text-gray-400 mb-6">Last Updated: January 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Welcome to World of Dreamz Entertainment Pvt. Ltd. ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or visit our entertainment centers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Date of birth and age verification</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Booking history and preferences</li>
              <li>Photographs and videos taken at our facilities (with consent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Website usage data and browsing patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Process bookings and payments</li>
              <li>Send booking confirmations and updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send promotional offers and newsletters (with your consent)</li>
              <li>Improve our services and website functionality</li>
              <li>Ensure safety and security at our facilities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>With payment processors to complete transactions</li>
              <li>With service providers who assist in our operations</li>
              <li>To comply with legal requirements or protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">6. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">8. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our entertainment centers welcome families. We collect minimal information from children and always require parental consent for children under 13 years of age.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30">
              <p className="text-gray-300">
                <strong>Email:</strong> connect@worldofdreamz.in<br />
                <strong>Phone:</strong> +91-9830085101<br />
                
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;