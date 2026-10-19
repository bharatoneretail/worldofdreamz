const express = require('express');
const router = express.Router();
const { getAttractions } = require('../controllers/attractionController');
router.get('/', getAttractions);
module.exports = router;