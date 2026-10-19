import React from "react";
import { motion } from "framer-motion";
import {
  FaHotjar,
  FaGamepad,
  FaVrCardboard,
  FaTicketAlt,
  FaUsers,
  FaFootballBall,
  FaStar,
  FaTrophy,
  FaBolt,
  FaMountain,
  FaDungeon,
  FaRobot,
  FaSpaceShuttle,
  FaDragon,
  FaGhost,
  FaCrosshairs,
  FaCar,
  FaMotorcycle,
  FaPlane,
  FaShieldAlt,
  FaSnowflake,
  FaMusic,
  FaFish,
  FaDice,
  FaBowlingBall,
  FaSkullCrossbones,
  FaFire,
  FaWind,
  FaWater,
  FaCrown,
  FaHammer,
  FaAnchor,
  FaGlobe,
  FaRocket,
  FaHeartbeat,
  FaChartLine,
  FaBuilding,
  FaIndustry,
  FaMapMarkedAlt
} from "react-icons/fa";

const Attractions = () => {
  const categories = [
    // 1. SOFT PLAY ARENA
    {
      id: 1,
      title: "Soft Play Arena",
      subtitle: "For Kids Up to 12 Years",
      badge: "🔥 HOT SELLING",
      icon: <FaHotjar className="text-4xl" />,
      description:
        "A dedicated world of play, exploration and skill development, our Soft Play Arena is specially designed for children up to 12 years of age. Packed with skill-based games and playful challenges, the zone encourages kids to learn, explore and develop while having endless fun. The experience gets even more exciting with Augmented Reality, projection-based games and interactive activities, creating a dynamic playground where technology and imagination come together.",
      examples: [
        { name: "3D Soft Play Structures", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=600&q=80" },
        { name: "AR Interactive Games", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80" },
        { name: "Projection Games", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-500/60",
      shadowColor: "rgba(236, 72, 153, 0.6)",
    },

    // 2. ADVENTURE & TRAMPOLINE
    {
      id: 2,
      title: "Adventure & Trampoline",
      subtitle: "Thrill, Challenge & Conquer",
      icon: <FaMountain className="text-4xl" />,
      description:
        "Get ready to jump, climb, challenge and conquer! Our Adventure & Trampoline zone is designed to become a true attraction destination—not just for your city, but for the entire region. Featuring thrilling adventure rides, unconventional challenges and never-seen-before activities, the zone delivers an adrenaline-packed experience for adventure enthusiasts. And when it comes to pure high-energy fun, our Takeshi's Castle-inspired trampoline experiences take jumping, balancing and battling to an entirely new level!",
      examples: [
        { name: "Trampoline Park", image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=600&q=80" },
        { name: "Wall Climbing", image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&q=80" },
        { name: "Ninja Warrior Course", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-purple-500 to-indigo-600",
      borderColor: "border-purple-500/60",
      shadowColor: "rgba(139, 92, 246, 0.6)",
    },

    // 3. VR GAMES & FREE ROAM VR ARENA
    {
      id: 3,
      title: "VR Games & Free Roam VR Arena",
      subtitle: "Immersive Virtual Reality Experience",
      icon: <FaVrCardboard className="text-4xl" />,
      description:
        "Leave the screen behind and step inside the game! Enter the majestic world of Virtual Reality through immersive VR games and our exciting Free Roam VR Arena, where players can move, interact and experience virtual worlds in real time. Imagine stepping out of your screen and into games inspired by experiences such as PUB-G and Battleground-style combat, where friends and family can play together, compete together and experience the action together. It's gaming—reimagined for the real world.",
      subcategories: [
        {
          name: "Flight Theme",
          icon: <FaPlane className="text-2xl" />,
          items: ["Sky Moto/VR Flying Ride", "VR Time Travel", "VR Cyclone", "Storm Fighter", "Cyber Flight", "VR Cinemax"],
          color: "from-cyan-400 to-blue-500",
        },
        {
          name: "Dynamic Theme",
          icon: <FaBolt className="text-2xl" />,
          items: ["Robot Storm", "Armor Strike R-8", "Monster Jeep", "VR Magic UFO", "VR Fun Theater", "VR Pilot"],
          color: "from-orange-400 to-red-500",
        },
        {
          name: "Shooting Theme",
          icon: <FaCrosshairs className="text-2xl" />,
          items: ["VR Arena", "Mini World", "Dragon War", "Ion Impact", "Zombie Frenzy", "Zombie Frenzy Solo", "Crazy Gatling", "VR Gun Shooter"],
          color: "from-red-500 to-pink-600",
        },
        {
          name: "Racing Theme",
          icon: <FaCar className="text-2xl" />,
          items: ["Twin Blaze Racer", "F1 Super Car", "Speed Racing", "3 Screen Racing", "VR Speed Rider", "VR Kart Racing"],
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "More Machines",
          icon: <FaRobot className="text-2xl" />,
          items: ["VR Drop Tower", "VR FUN Warship", "Gunfight Hero", "VR Dragon Treasure"],
          color: "from-green-400 to-emerald-500",
        },
      ],
      examples: [
        { name: "Free Roam VR Arena", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80" },
        { name: "VR Battle Combat", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
        { name: "VR Racing Experience", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500/60",
      shadowColor: "rgba(6, 182, 212, 0.6)",
    },

    // 4. ARCADES & REDEMPTION GAMES
    {
      id: 4,
      title: "Arcades & Redemption Games",
      subtitle: "Win Exciting Prizes & Rewards",
      icon: <FaTicketAlt className="text-4xl" />,
      description:
        "Experience the timeless charm of classic arcade gaming with a modern twist! Our Arcade & Redemption zone brings together the excitement of video games, skill-based challenges and the thrill of winning. Play, compete, collect points and enter a magical world of rewards where every win brings you closer to exciting prizes—from the latest gadgets and toys to soft toys, memorabilia and much more. It's the perfect combination of nostalgia, competition and instant gratification.",
      subcategories: [
        {
          name: "Hockey Games",
          icon: <FaStar className="text-2xl" />,
          items: ["Polar Bear Hockey"],
          color: "from-blue-400 to-cyan-500",
        },
        {
          name: "Power Games",
          icon: <FaHammer className="text-2xl" />,
          items: ["Hercules"],
          color: "from-red-400 to-orange-500",
        },
        {
          name: "Racing Machines",
          icon: <FaCar className="text-2xl" />,
          items: ["Snow Storm", "Speed Duel", "Curve Drift", "Phantom District DX"],
          color: "from-yellow-400 to-orange-500",
        },
        {
          name: "Music Games",
          icon: <FaMusic className="text-2xl" />,
          items: ["Funky Beat"],
          color: "from-purple-400 to-pink-500",
        },
        {
          name: "Fishing Machines",
          icon: <FaFish className="text-2xl" />,
          items: ["Abyss Legend"],
          color: "from-teal-400 to-blue-500",
        },
      ],
      examples: [
        { name: "Arcade Gaming Zone", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" },
        { name: "Redemption Prize Counter", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
        { name: "Classic Arcade Cabinets", image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-yellow-400 to-orange-500",
      borderColor: "border-yellow-500/60",
      shadowColor: "rgba(234, 179, 8, 0.6)",
    },

    // 5. IMMERSIVE ACTIVITY GAMES
    {
      id: 5,
      title: "Immersive Activity Games",
      subtitle: "Group & Individual Adventures",
      icon: <FaUsers className="text-4xl" />,
      description:
        "Get ready to play together, compete together and experience something extraordinary! Our Immersive Activity Games bring groups and individuals together through highly engaging, technology-driven experiences. From projection-based immersive bowling lanes enhanced with Augmented Reality to high-energy attractions such as Laser Tag and simulation-based games, every activity is designed to create excitement, interaction and memorable moments. Combine these attractions together and watch the energy of the entire park go up several notches!",
      examples: [
        { name: "AR Bowling Lanes", image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=600&q=80" },
        { name: "Laser Tag Arena", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
        { name: "Cricket Simulator", image: "https://images.unsplash.com/photo-1531415074968-036ba1b5f6da?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-green-400 to-emerald-600",
      borderColor: "border-green-500/60",
      shadowColor: "rgba(16, 185, 129, 0.6)",
    },

    // 6. OUTDOOR ACTIVITIES & GAMES
    {
      id: 6,
      title: "Outdoor Activities & Games",
      subtitle: "Next-Gen Hybrid Entertainment",
      icon: <FaFootballBall className="text-4xl" />,
      description:
        "Entertainment has evolved—and so have entertainment parks. In today's high-tech, hybrid world, the most successful entertainment destinations are no longer confined to traditional indoor attractions. By creating the perfect balance between outdoor activities and next-generation indoor experiences, our park delivers a more diverse, aspirational and complete entertainment proposition. This unique combination encourages longer visits, wider audience appeal, stronger engagement and higher footfall—while creating a distinctive brand experience and stronger recall that keeps guests coming back for more.",
      examples: [
        { name: "Go-Karting Track", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
        { name: "Turf Cricket", image: "https://images.unsplash.com/photo-1531415074968-036ba1b5f6da?auto=format&fit=crop&w=600&q=80" },
        { name: "Pickle Ball Court", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-red-500 to-pink-600",
      borderColor: "border-red-500/60",
      shadowColor: "rgba(239, 68, 68, 0.6)",
    },

    // 7. POPULAR SCIENCE TOPICS (New Section)
    {
      id: 7,
      title: "Popular Science Topics",
      subtitle: "Educational & Experiential Learning",
      icon: <FaGlobe className="text-4xl" />,
      description:
        "Bring education to life through immersive, hands-on science experiences! Our Popular Science zones transform learning into an unforgettable adventure. From earthquake simulations to typhoon experiences, visitors don't just read about natural phenomena—they feel them. These attractions combine cutting-edge technology with educational content, making science accessible, exciting and memorable for visitors of all ages.",
      examples: [
        { name: "MR Holographic Museum", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
        { name: "Earthquake Experience Hall", image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=600&q=80" },
        { name: "Typhoon Experience Hall", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-teal-400 to-cyan-600",
      borderColor: "border-teal-500/60",
      shadowColor: "rgba(20, 184, 166, 0.6)",
    },

    // 8. CUSTOMIZE VR THEME PARK (New Section)
    {
      id: 8,
      title: "Customize VR Theme Park",
      subtitle: "Scalable Revenue Engines",
      icon: <FaBuilding className="text-4xl" />,
      description:
        "Build your dream VR theme park with our scalable, revenue-generating solutions! Whether you're starting small or planning a mega destination, we offer customizable packages designed to maximize ROI. From compact 300m² fast-return units to expansive 3000m² mega profit destinations, each package is engineered for profitability, guest satisfaction and operational efficiency. Choose the size that fits your vision and watch your investment grow.",
      subcategories: [
        {
          name: "300m² Fast Return Unit",
          icon: <FaChartLine className="text-2xl" />,
          items: ["Compact VR Zone", "Quick Setup", "High Turnover", "Low Investment"],
          color: "from-green-400 to-emerald-500",
        },
        {
          name: "500m² Profit Engine",
          icon: <FaIndustry className="text-2xl" />,
          items: ["Mid-Size VR Park", "Diverse Attractions", "Steady Revenue", "Growing Footfall"],
          color: "from-blue-400 to-cyan-500",
        },
        {
          name: "1500m² Revenue Powerhouse",
          icon: <FaTrophy className="text-2xl" />,
          items: ["Large VR Destination", "Multiple Zones", "Premium Experience", "High Capacity"],
          color: "from-purple-400 to-pink-500",
        },
        {
          name: "3000m² Mega Profit Destination",
          icon: <FaCrown className="text-2xl" />,
          items: ["Mega VR Theme Park", "Full-Scale Operations", "Maximum Revenue", "Landmark Attraction"],
          color: "from-yellow-400 to-orange-500",
        },
      ],
      examples: [
        { name: "300m² Compact Unit", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=600&q=80" },
        { name: "1500m² Revenue Park", image: "https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=600&q=80" },
        { name: "3000m² Mega Destination", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
      ],
      color: "from-indigo-500 to-purple-600",
      borderColor: "border-indigo-500/60",
      shadowColor: "rgba(99, 102, 241, 0.6)",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0720] pt-24 pb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 mb-16 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 text-glow">
          Our{" "}
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] bg-clip-text text-transparent">
            Attractions
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover a world of endless fun and excitement with our cutting-edge entertainment attractions. From immersive VR experiences to thrilling outdoor adventures, we have something for everyone!
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 space-y-24">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Category Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div
                className={`p-5 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                style={{ boxShadow: `0 0 30px ${category.shadowColor}` }}
              >
                {category.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.title}
                  </h2>
                  {category.badge && (
                    <span className="px-4 py-1.5 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-full animate-pulse shadow-lg shadow-red-500/50">
                      {category.badge}
                    </span>
                  )}
                </div>
                <p className={`text-lg bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-semibold`}>
                  {category.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <div
              className={`bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border ${category.borderColor} mb-8 shadow-lg`}
              style={{ boxShadow: `0 0 20px ${category.shadowColor.replace("0.6", "0.2")}` }}
            >
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Subcategories (if any) */}
            {category.subcategories && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {category.subcategories.map((subcat, subIdx) => (
                  <motion.div
                    key={subIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: subIdx * 0.05 }}
                    className={`bg-gray-900/60 backdrop-blur-sm p-5 rounded-xl border ${category.borderColor}/40 hover:border-opacity-80 transition-all group`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${subcat.color} text-white`}>
                        {subcat.icon}
                      </div>
                      <h3 className="text-white font-bold text-lg">{subcat.name}</h3>
                    </div>
                    <ul className="space-y-2">
                      {subcat.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-gray-300 text-sm group-hover:text-white transition-colors">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${subcat.color}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.examples.map((example, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative overflow-hidden rounded-2xl border ${category.borderColor} bg-gray-900 shadow-lg transition-all duration-300`}
                  style={{ boxShadow: `0 0 15px ${category.shadowColor.replace("0.6", "0.3")}` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={example.image}
                      alt={example.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-bold text-lg drop-shadow-lg">
                      {example.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 mt-24 text-center"
      >
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-10 md:p-14 rounded-3xl border border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Dream Entertainment Park?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you build an unforgettable entertainment experience with our world-class attractions and turnkey solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] text-white text-xl font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,0,127,0.6)] transition-all transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Attractions;