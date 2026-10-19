import React from 'react';
import { motion } from 'framer-motion';

const GeographicPresence = () => {
  return (
    <section className="py-20 bg-[#0f0720] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0720] via-purple-900/20 to-[#0f0720]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header - KEPT EXACTLY AS IT WAS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-glow">
            Connecting <span className="bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] bg-clip-text text-transparent">World Of Dreamz</span> with India
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our operational presence across key commercial hubs
          </p>
        </motion.div>

        {/* VIDEO ONLY CONTAINER - No images, no region cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] bg-black"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            
            src="/map.mp4" 
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

      </div>
    </section>
  );
};

export default GeographicPresence;