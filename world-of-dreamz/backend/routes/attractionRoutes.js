const express = require('express');
const router = express.Router();
const Attraction = require('../models/Attraction');

// GET all attractions/formats
router.get('/', async (req, res) => {
  try {
    const attractions = await Attraction.find({});
    res.json({ success: true, data: attractions });
  } catch (error) {
    console.error('Error fetching attractions:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;