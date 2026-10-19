const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Attraction = require('./models/Attraction');

// Load environment variables
dotenv.config();

console.log('🔄 Connecting to MongoDB...');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB Connection Failed:', err.message);
    process.exit(1);
  });

const seedData = [
  {
    formatName: "CASTILLO",
    tagline: "State-of-the-Art Indoor Family Entertainment Centre",
    targetAudience: "Toddlers, Young kids up to 12 years & their families",
    spaceRequired: "Upto 8000 sq.ft Usable Area",
    ceilingHeight: "Minimum 12 ft. - 13 ft. from the beam bottom",
    projectCost: "INR 3,000 / sq.ft on usable area + GST",
    advantages: ["Complete Fun centric zone for kids & families", "One stop destination for Social Gatherings & Birthday Parties", "Enhances Skill Development, Hand-Eye coordination, Reflex actions", "Audio-Visual Interaction enhances Learning Skills"],
    attractions: ["Soft Play Arena", "Augmented Reality Games", "Interactive Projection Games", "Obstacle Course", "Rope Course", "LED Tunnels", "Webbing Tunnel", "Sky Wall", "LED Slides", "Trumpet Slides", "Dancing Bridge", "Swing Play", "Ball Pool", "Foam Pool", "Sand Pool & Sand Table", "Kiddie Karts", "Kiddie Corner", "Merry Go Round", "Kiddie Rides", "Princess House", "Role Play House 1 & 2", "Redemption Games", "Table Games", "Waiting Lounge", "Dreamz Café", "Dedicated Party Rooms", "Maternity Corner"],
    description: "Unleash the World of Wholesome Entertainment. Backed with AR & AI, these fun-centered activities elevate skills while kids learn and play."
  },
  {
    formatName: "PALLACIA",
    tagline: "Wholesome Indoor Entertainment Zone for Teens & Young Adults",
    targetAudience: "Teenagers, Millennials & Young Adults",
    spaceRequired: "Upto 28000 sq.ft Usable Area",
    ceilingHeight: "Minimum 12 ft. - 13 ft. from the beam bottom",
    projectCost: "INR 3,500 / sq.ft on usable area + GST",
    advantages: ["Wholesome Indoor Entertainment Zone for all ages", "Pure Nostalgia of Arcade Games + Excitement of latest VR", "Complete one-stop Family Entertainment Destination with In-House Café"],
    attractions: ["Laser Arena", "Arcade Games", "Virtual Reality (VR) Games", "Stimulation Games – Cricket/Goalie", "Indoor Archery", "Indoor Shooting", "Redemption Games", "Lounge Games (Pool, Dart)", "Bumper Cars", "Kiddie Rides", "Soft Play Arena (Interactive Projection, AR, Obstacle, Rope, LED Tunnels, Webbing, Sky Wall, Dancing Bridge, Swing, Ball/Foam/Sand Pools, Kiddie Karts, Merry Go Round, Activity Zones)", "Dreamz Café", "Dedicated Party Rooms", "Maternity Corner"],
    description: "Witness Real-Time Experiential Shooting for the 1st time in India. A pure nostalgia of arcade games mixed with the excitement of the latest VR."
  },
  {
    formatName: "IMPERIO",
    tagline: "The Multiverse Park (Indoor + Outdoor)",
    targetAudience: "All age groups seeking extended adventures",
    spaceRequired: "above 28000 sq.ft Usable Area",
    ceilingHeight: "Minimum 12 ft. - 13 ft. from the beam bottom for indoor premises",
    projectCost: "INR 1,500 / sq.ft on usable area + GST",
    advantages: ["Low per capita Capex", "Wide range of Games & activities", "Outdoor Adventure & Real Time games", "Excitement of Adrenaline Rush"],
    attractions: ["All Indoor Attractions from Pallacia", "GO KARTING", "TURF CRICKET", "PICKLE BALL", "PAINT BALL", "SKY WALLS", "OUTDOOR ADVENTURE GAMES"],
    description: "A Multiverse Park designed both indoors & outdoors. Enjoy the epitome of Turf/Box Cricket under floodlights or indulge in Paintball."
  }
];

const seedDB = async () => {
  try {
    console.log('🗑️ Clearing existing attractions...');
    await Attraction.deleteMany({});
    console.log('🌱 Inserting new attraction data...');
    
    const inserted = await Attraction.insertMany(seedData);
    console.log(`✅ Successfully inserted ${inserted.length} formats into the database!`);
    
    // Verify it's actually there
    const count = await Attraction.countDocuments();
    console.log(`🔍 Verification: Database now contains ${count} formats.`);
    
  } catch (error) {
    console.error('❌ Seeding Failed:', error);
  } finally {
    console.log('🔌 Disconnecting from MongoDB...');
    mongoose.disconnect();
    process.exit();
  }
};

seedDB();