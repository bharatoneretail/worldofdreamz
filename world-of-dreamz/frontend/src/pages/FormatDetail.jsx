import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaRulerCombined, FaUsers, FaMoneyBillWave } from 'react-icons/fa';

const FormatDetail = () => {
  const { formatName } = useParams();
  const navigate = useNavigate();
  const [format, setFormat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFormat = async () => {
      try {
        const res = await axios.get('/api/attractions');
        const foundFormat = res.data.data.find(
          f => f.formatName.toLowerCase().replace(/\s+/g, '-') === formatName
        );
        setFormat(foundFormat);
      } catch (error) {
        console.error('Error fetching format:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchFormat();
  }, [formatName]);

  // Detailed attraction descriptions
  const attractionDetails = {
    'CASTILLO': {
      'Soft Play Arena': {
        description: 'A multi-level soft play structure designed for safe, imaginative play. Features climbing frames, slides, and interactive elements that promote physical activity and social interaction.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Augmented Reality Games': {
        description: 'Cutting-edge AR technology that blends digital elements with the physical world. Kids can interact with virtual characters and objects while staying active.',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80'
      },
      'Interactive Projection Games': {
        description: 'Floor and wall projection systems that transform any surface into an interactive playground. Children can kick, jump, and touch to play engaging educational games.',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=800&q=80'
      },
      'Obstacle Course': {
        description: 'Challenging yet safe obstacle courses that develop motor skills, balance, and coordination. Features tunnels, bridges, and climbing elements.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Rope Course': {
        description: 'Elevated rope bridges and balancing challenges that build confidence and physical strength in a controlled, safe environment with soft landing zones.',
        image: 'https://images.unsplash.com/photo-1521534631845-655f7b554895?auto=format&fit=crop&w=800&q=80'
      },
      'LED Tunnels': {
        description: 'Mesmerizing light tunnels with changing colors and patterns. Creates a sensory experience that delights children and stimulates visual development.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
      },
      'Webbing Tunnel': {
        description: 'Three-dimensional climbing nets that challenge kids to navigate through a spider-web-like structure, enhancing spatial awareness and problem-solving.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
      },
      'Sky Wall': {
        description: 'Vertical climbing walls with colorful handholds and safety features. Builds upper body strength and determination while providing thrilling adventure.',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80'
      },
      'LED Slides': {
        description: 'Illuminated slides with embedded LED lights that create a magical glowing effect. Combines traditional sliding fun with modern visual excitement.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Trumpet Slides': {
        description: 'Wide, funnel-shaped slides that provide an exhilarating spinning descent. The unique trumpet design offers a thrilling yet safe sliding experience.',
        image: 'https://images.unsplash.com/photo-1566004100631-6180d64dd5fe?auto=format&fit=crop&w=800&q=80'
      },
      'Dancing Bridge': {
        description: 'Suspended bridge that sways gently as children cross, improving balance and coordination while adding an element of playful challenge.',
        image: 'https://images.unsplash.com/photo-1521534631845-655f7b554895?auto=format&fit=crop&w=800&q=80'
      },
      'Swing Play': {
        description: 'Variety of swings including bucket swings for toddlers and traditional swings for older kids. Promotes vestibular development and pure joy.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Ball Pool': {
        description: 'Massive pools filled with thousands of colorful plastic balls. Kids can dive, swim, and play in this sensory-rich environment.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Foam Pool': {
        description: 'Soft foam blocks create a safe, cushioned play area where children can build, jump, and play without any risk of injury.',
        image: 'https://images.unsplash.com/photo-1566004100631-6180d64dd5fe?auto=format&fit=crop&w=800&q=80'
      },
      'Sand Pool & Sand Table': {
        description: 'Clean, sanitized sand play areas with tables and pools. Encourages tactile exploration, creativity, and fine motor skill development.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Kiddie Karts': {
        description: 'Miniature go-karts designed specifically for young children. Safe, battery-powered vehicles that introduce kids to driving in a controlled environment.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
      },
      'Kiddie Corner': {
        description: 'Dedicated safe zone for toddlers with age-appropriate toys, soft play equipment, and gentle activities designed for ages 1-4.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Merry Go Round': {
        description: 'Classic rotating carousel that provides gentle spinning fun. Helps develop balance and creates joyful shared experiences.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Kiddie Rides': {
        description: 'Coin-operated or automatic ride-on toys featuring popular characters. Provides entertainment and imaginative play opportunities.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
      },
      'Princess House': {
        description: 'Themed playhouse where children can engage in role-play as royalty. Encourages imagination, social skills, and creative storytelling.',
        image: 'https://images.unsplash.com/photo-1566004100631-6180d64dd5fe?auto=format&fit=crop&w=800&q=80'
      },
      'Role Play House 1 & 2': {
        description: 'Multiple themed environments (kitchen, shop, doctor office, etc.) where kids can act out real-life scenarios and develop social understanding.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Redemption Games': {
        description: 'Skill-based arcade games where players win tickets redeemable for prizes. Combines entertainment with tangible rewards.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
      },
      'Table Games': {
        description: 'Classic and modern table games including air hockey, foosball, and interactive digital tables. Perfect for friendly competition.',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=800&q=80'
      },
      'Waiting Lounge': {
        description: 'Comfortable seating area for parents with WiFi, refreshments, and clear visibility of play areas. Relax while keeping an eye on your children.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Dreamz Café': {
        description: 'In-house café serving fresh snacks, beverages, and meals. Nutritious options for kids and delicious treats for the whole family.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
      },
      'Dedicated Party Rooms': {
        description: 'Private, decorated rooms for birthday parties and celebrations. Includes party hosting services, decorations, and special packages.',
        image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?auto=format&fit=crop&w=800&q=80'
      },
      'Maternity Corner': {
        description: 'Private, comfortable space for nursing mothers and baby care. Equipped with comfortable seating, changing facilities, and privacy.',
        image: 'https://images.unsplash.com/photo-1555252301-67536e666e24?auto=format&fit=crop&w=800&q=80'
      }
    },
    'PALLACIA': {
      'Laser Arena': {
        description: 'High-tech laser tag arena with fog effects, neon lighting, and multiple game modes. Teams compete in strategic battles in a futuristic environment.',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=800&q=80'
      },
      'Arcade Games': {
        description: 'Classic and modern arcade cabinets featuring racing games, shooting games, rhythm games, and prize machines. Nostalgic fun for all ages.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
      },
      'Virtual Reality (VR) Games': {
        description: 'Immersive VR experiences with latest headsets. Explore virtual worlds, play interactive games, and experience adventures beyond reality.',
        image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80'
      },
      'Stimulation Games – Cricket/Goalie': {
        description: 'Interactive sports simulators that use motion sensors and screens. Practice cricket batting or soccer goalkeeping with virtual opponents.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b5f6da?auto=format&fit=crop&w=800&q=80'
      },
      'Indoor Archery': {
        description: 'Safe, supervised archery range with foam-tipped arrows and professional targets. Learn precision and focus in a controlled environment.',
        image: 'https://images.unsplash.com/photo-1517649763962-0c62e99f9998?auto=format&fit=crop&w=800&q=80'
      },
      'Indoor Shooting': {
        description: 'Virtual shooting gallery with light guns and interactive screens. Test your aim and reflexes in various game scenarios.',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=800&q=80'
      },
      'Redemption Games': {
        description: 'Skill and chance games that award tickets for prizes. From basketball hoops to coin pushers, win rewards while having fun.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
      },
      'Lounge Games (Pool, Dart)': {
        description: 'Professional pool tables, dart boards, and other lounge games. Perfect for teens and adults to relax and enjoy friendly competition.',
        image: 'https://images.unsplash.com/photo-1532339142463-fd0a8971701a?auto=format&fit=crop&w=800&q=80'
      },
      'Bumper Cars': {
        description: 'Electric bumper cars in a dedicated arena. Drive, bump, and laugh in this classic amusement park attraction designed for indoor use.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
      },
      'Kiddie Rides': {
        description: 'Gentle rides suitable for younger siblings accompanying teens. Ensures the whole family can enjoy their visit together.',
        image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=800&q=80'
      },
      'Soft Play Arena': {
        description: 'Multi-activity zone featuring interactive projection games, augmented reality experiences, obstacle courses, rope courses, LED tunnels, webbing tunnels, sky walls, dancing bridges, swings, ball/foam/sand pools, kiddie karts, merry-go-round, and various activity zones.',
        image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80'
      },
      'Dreamz Café': {
        description: 'Trendy café serving gourmet snacks, mocktails, milkshakes, and meals. A social hub where friends can gather and refuel.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
      },
      'Dedicated Party Rooms': {
        description: 'Stylish party spaces for teen celebrations, corporate events, and group gatherings. Customizable themes and catering options available.',
        image: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?auto=format&fit=crop&w=800&q=80'
      },
      'Maternity Corner': {
        description: 'Comfortable private area for mothers with infants. Ensures families with young children feel welcome and accommodated.',
        image: 'https://images.unsplash.com/photo-1555252301-67536e666e24?auto=format&fit=crop&w=800&q=80'
      }
    },
    'IMPERIO': {
      'All Indoor Attractions from Pallacia': {
        description: 'Complete access to all Pallacia indoor facilities including laser arena, VR games, arcade, archery, shooting, bumper cars, soft play arena, café, and party rooms. Best of both worlds.',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'
      },
      'GO KARTING': {
        description: 'Professional outdoor go-kart track with high-performance electric or gas karts. Experience speed, competition, and adrenaline rush on a purpose-built circuit.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
      },
      'TURF CRICKET': {
        description: 'Professional artificial turf cricket pitch with floodlights for day and night matches. Perfect for tournaments, practice sessions, and casual games.',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b5f6da?auto=format&fit=crop&w=800&q=80'
      },
      'PICKLE BALL': {
        description: 'Dedicated pickleball courts for this fast-growing sport. Easy to learn, fun to play, suitable for all ages and skill levels.',
        image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
      },
      'PAINT BALL': {
        description: 'Outdoor paintball arena with obstacles, bunkers, and themed zones. Team-based tactical game that builds strategy, communication, and excitement.',
        image: 'https://images.unsplash.com/photo-1517649763962-0c62e99f9998?auto=format&fit=crop&w=800&q=80'
      },
      'SKY WALLS': {
        description: 'Tall outdoor climbing walls with various difficulty levels. Challenge yourself with heights while secured by professional safety equipment.',
        image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80'
      },
      'OUTDOOR ADVENTURE GAMES': {
        description: 'Variety of outdoor team-building and adventure activities including rope courses, zip lines, obstacle challenges, and group games.',
        image: 'https://images.unsplash.com/photo-1521534631845-655f7b554895?auto=format&fit=crop&w=800&q=80'
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-purple-400 text-2xl font-semibold animate-pulse">Loading Format Details...</div>
      </div>
    );
  }

  if (!format) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Format Not Found</h2>
          <Link to="/formats" className="text-purple-400 hover:text-purple-300 underline">
            Back to Formats
          </Link>
        </div>
      </div>
    );
  }

  const details = attractionDetails[format.formatName] || {};
  const formatImages = {
    'CASTILLO': 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1200&q=80',
    'PALLACIA': 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80',
    'IMPERIO': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80'
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={formatImages[format.formatName] || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80'}
          alt={format.formatName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white mb-4 hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Back to Formats
          </button>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">{format.formatName}</h1>
          <p className="text-2xl text-purple-300">{format.tagline}</p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-900/30 p-6 rounded-2xl border border-purple-500/30">
            <FaUsers className="text-4xl text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Target Audience</h3>
            <p className="text-gray-300">{format.targetAudience}</p>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-2xl border border-purple-500/30">
            <FaRulerCombined className="text-4xl text-purple-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Space Required</h3>
            <p className="text-gray-300">{format.spaceRequired}</p>
          </div>
          
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{format.description}</p>
        </div>

        {/* Key Attractions */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Key Attractions</h2>
          <div className="grid gap-8">
            {format.attractions.map((attraction, index) => {
              const detail = details[attraction];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto overflow-hidden">
                      <img 
                        src={detail?.image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'}
                        alt={attraction}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-purple-400 mb-3">{attraction}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {detail?.description || 'An exciting attraction that provides entertainment and fun for all ages.'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Advantages */}
        {format.advantages && format.advantages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose {format.formatName}?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {format.advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-6 rounded-2xl border border-purple-500/30 flex items-start"
                >
                  <FaCheckCircle className="text-purple-400 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <p className="text-gray-200 text-lg">{advantage}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center py-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream Entertainment Center?</h2>
          <p className="text-gray-300 mb-8 text-lg">Let's discuss how {format.formatName} can transform your space</p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all transform hover:scale-105"
          >
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormatDetail;