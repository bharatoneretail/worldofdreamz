import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#0f0720] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center text-white mb-12 text-glow"
        >
          Terms & Conditions
        </motion.h1>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30">
          <p className="text-gray-400 mb-6">Last Updated: January 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing and using the World of Dreamz website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">2. Booking and Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Booking Process</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>All bookings are subject to availability</li>
              <li>Valid identification may be required at entry</li>
              <li>Age restrictions apply to certain attractions</li>
              <li>Maximum capacity limits may apply</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Payment</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Full payment is required at the time of booking</li>
              <li>We accept all major credit/debit cards and digital payment methods</li>
              <li>Prices are subject to change without notice</li>
              <li>All prices include applicable taxes unless stated otherwise</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">3. Cancellation and Refund Policy</h2>
            
            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Cancellations</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Cancellations made 48 hours before the visit: Full refund</li>
              <li>Cancellations made 24-48 hours before: 50% refund</li>
              <li>Cancellations made less than 24 hours before: No refund</li>
              <li>No-shows are not eligible for refunds</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#FF007F] mb-3">Refunds</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
              <li>Refunds will be processed within 7-10 business days</li>
              <li>Refunds will be credited to the original payment method</li>
              <li>In case of force majeure, full refunds will be provided</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">4. Code of Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To ensure a safe and enjoyable experience for all guests, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Follow all safety instructions and guidelines</li>
              <li>Treat staff and other guests with respect</li>
              <li>Not engage in any disruptive or violent behavior</li>
              <li>Not bring outside food or beverages (unless permitted)</li>
              <li>Not smoke or consume alcohol in prohibited areas</li>
              <li>Supervise children at all times</li>
              <li>Report any safety concerns to staff immediately</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">5. Liability and Waiver</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By visiting our facilities, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Participation in activities is at your own risk</li>
              <li>World of Dreamz is not liable for injuries resulting from failure to follow safety instructions</li>
              <li>We are not responsible for loss or damage to personal belongings</li>
              <li>You waive any claims against World of Dreamz for ordinary negligence</li>
              <li>We reserve the right to refuse entry or remove guests violating our policies</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">6. Age and Health Restrictions</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Certain attractions have minimum/maximum age requirements</li>
              <li>Height and weight restrictions apply to specific rides</li>
              <li>Pregnant women and individuals with certain medical conditions should consult a doctor before participating</li>
              <li>Children under 12 must be accompanied by an adult</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, and software, is the property of World of Dreamz Entertainment Pvt. Ltd. and protected by copyright laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">8. Photography and Recording</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By entering our facilities, you grant World of Dreamz permission to use photographs and videos taken on the premises for promotional and marketing purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">9. Modifications to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">10. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">11. Contact Information</h2>
            <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30">
              <p className="text-gray-300 mb-4">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
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

export default TermsConditions;