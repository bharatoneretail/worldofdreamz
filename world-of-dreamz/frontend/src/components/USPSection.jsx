import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPaintBrush, FaBoxOpen, FaChartLine, FaShieldAlt, FaHandHoldingUsd, FaUsers, FaCog, FaHeadset } from 'react-icons/fa';

const usps = [
  { 
    icon: <FaLightbulb />, 
    title: "Created with a Difference", 
    desc: "Unique, impactful experiences driven by storytelling and innovation.",
    color: "from-yellow-400 to-orange-500"
  },
  { 
    icon: <FaPaintBrush />, 
    title: "Thematic Design & Interiors", 
    desc: "Complete look & feel of the park, from concept to interior execution.",
    color: "from-purple-400 to-pink-500"
  },
  { 
    icon: <FaBoxOpen />, 
    title: "One-Stop Solution", 
    desc: "End-to-end setup and establishment for Indoor & Outdoor Entertainment Parks.",
    color: "from-pink-400 to-rose-500"
  },
  { 
    icon: <FaChartLine />, 
    title: "Effective Product Mix", 
    desc: "Curated attractions designed to maximize guest engagement and dwell time.",
    color: "from-cyan-400 to-blue-500"
  },
  { 
    icon: <FaShieldAlt />, 
    title: "Market-Adaptive Ambience", 
    desc: "We create parks that sustain volatility and fit existing market scenarios.",
    color: "from-blue-400 to-indigo-500"
  },
  { 
    icon: <FaHandHoldingUsd />, 
    title: "ROI-Focused Scalability", 
    desc: "Focus on ROI-making scalable pilot projects for long-term success.",
    color: "from-green-400 to-emerald-500"
  },
  { 
    icon: <FaUsers />, 
    title: "Pan-India Scale", 
    desc: "Operational presence across major commercial hubs with local expertise.",
    color: "from-orange-400 to-red-500"
  },
  { 
    icon: <FaCog />, 
    title: "Tech-Driven Operations", 
    desc: "Leveraging AR, AI, and cutting-edge technology for seamless experiences.",
    color: "from-indigo-400 to-purple-500"
  },
  { 
    icon: <FaHeadset />, 
    title: "24/7 Dedicated Support", 
    desc: "Round-the-clock assistance and maintenance for uninterrupted operations.",
    color: "from-teal-400 to-cyan-500"
  },
];

const USPSection = () => {
  return (
    <section className="py-24 bg-[#0f0720] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black text-white mb-4 text-glow">
            Why Choose <span className="bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] bg-clip-text text-transparent">World of Dreamz</span>?
          </h2>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto">
            We are the architects of amusement. Our holistic approach ensures your entertainment hub is not just a facility, but a destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`bg-gradient-to-br ${usp.color} p-0.5 rounded-3xl card-lift h-full`}>
                <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl p-8 rounded-[22px] h-full border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className="text-5xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF]">
                    {usp.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{usp.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{usp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;