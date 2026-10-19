import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const FormatCard = () => {
  const [formats, setFormats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ FIX: Get API base URL from environment variable
  const API_BASE = import.meta.env.VITE_API_URL || '';

  useEffect(() => {
    const fetchFormats = async () => {
      try {
        // ✅ FIX: Use full URL for production, relative for local dev
        const url = `${API_BASE}/api/attractions`;
        console.log("🔍 Fetching formats from:", url);
        
        const res = await axios.get(url);
        const data = res.data?.data || [];
        setFormats(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch formats:", err);
        setFormats([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFormats();
  }, [API_BASE]);

  const imageMap = {
    CASTILLO: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80",
    IMPERIO: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
    PALLACIA: "https://upload.wikimedia.org/wikipedia/commons/9/9b/%D0%9A%D0%BB%D0%B0%D1%81_60.jpg",
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-[#0f0720] flex items-center justify-center min-h-[400px]">
        <div className="text-purple-400 text-xl font-semibold animate-pulse">
          Loading Formats...
        </div>
      </section>
    );
  }

  if (!formats || formats.length === 0) {
    return (
      <section className="py-24 bg-[#0f0720] flex items-center justify-center min-h-[400px]">
        <div className="text-gray-400 text-center p-8 border border-purple-500/30 rounded-2xl">
          <p className="text-xl mb-2 text-white">No formats found.</p>
          <p className="text-sm">
            Please ensure you have run{" "}
            <code className="bg-gray-800 px-2 py-1 rounded">npm run seed</code>{" "}
            in the backend.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#0f0720] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center text-white mb-16 text-glow"
        >
          Our Signature Formats
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {formats.map((format, idx) => {
            if (!format) return null;
            const formatName = format.formatName || "Unknown Format";
            const attractions = Array.isArray(format.attractions)
              ? format.attractions
              : [];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-500/80 transition-all duration-500 shadow-2xl"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      imageMap[formatName] ||
                      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={formatName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-4xl font-black text-white tracking-wider drop-shadow-lg">
                    {formatName}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-purple-400 font-semibold mb-6 text-lg">
                    {format.tagline || ""}
                  </p>

                  <div className="space-y-3 mb-8 text-sm text-gray-300 bg-purple-900/20 p-4 rounded-xl border border-purple-500/10">
                    <p>
                      <span className="text-purple-300 font-bold">
                        Target Audience:
                      </span>{" "}
                      {format.targetAudience || "N/A"}
                    </p>
                    <p>
                      <span className="text-purple-300 font-bold">Space:</span>{" "}
                      {format.spaceRequired || "N/A"}
                    </p>
                  </div>

                  

                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FormatCard;