const Attraction = require('../models/Attraction');
exports.getAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.status(200).json({ success: true, data: attractions });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};