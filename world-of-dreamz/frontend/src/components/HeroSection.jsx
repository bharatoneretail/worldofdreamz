import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f0720]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-27605-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0720]/70 via-[#0f0720]/50 to-[#0f0720]"></div>
      </div>

      {/* Animated Glowing Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Floating 3D Elements */}
      <motion.div style={{ y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-600/20 backdrop-blur-md rounded-2xl border border-purple-500/30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-pink-600/20 backdrop-blur-md rounded-full border border-pink-500/30 animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-cyan-600/20 backdrop-blur-md rotate-45 border border-cyan-500/30 animate-float"></div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-20 text-center px-4 max-w-6xl">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          
        </motion.div>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-block px-6 py-2 mb-8 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/50 backdrop-blur-sm"
        >
          <span className="text-purple-300 text-sm md:text-base font-semibold tracking-wider">✨ CREATING INFINITE ENTERTAINMENT</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-glow bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] animate-gradient"
        >
          World of Dreamz
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Redefining Indoor & Outdoor Entertainment. We don't just build parks; 
          we craft immersive, tech-driven ambiances tailored to your audience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link 
            to="/formats" 
            className="group relative px-8 py-4 bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,0,127,0.5)]"
          >
            <span className="relative z-10">Explore Formats</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] via-[#FF007F] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Get a Custom Quote
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;