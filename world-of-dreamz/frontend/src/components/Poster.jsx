import React from 'react';
import { motion } from 'framer-motion';

const Poster = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full py-8 md:py-12 px-4 bg-gradient-to-b from-[#0f0720] to-[#1a0b2e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,0,127,0.3)] border-4 border-purple-500/30">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl"></div>
          
          {/* Poster Image */}
          <div className="relative z-10">
            <img
              src="/poster.png" 
              alt="Our Lineage - World of Dreamz"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Poster;