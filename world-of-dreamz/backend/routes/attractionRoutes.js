const express = require('express');
const router = express.Router();
// Make sure you have an Attraction model defined in your models folder
// If you don't have one yet, create backend/models/Attraction.js
const Attraction = require('../models/Attraction'); 

// GET all attractions (Public)
router.get('/', async (req, res) => {
  try {
    const attractions = await Attraction.find({});
    res.json({ success: true, data: attractions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;