const mongoose = require('mongoose');
const attractionSchema = new mongoose.Schema({
  formatName: { type: String, required: true },
  tagline: { type: String, required: true },
  targetAudience: { type: String, required: true },
  spaceRequired: { type: String, required: true },
  ceilingHeight: { type: String, required: true },
  projectCost: { type: String, required: true },
  advantages: [{ type: String }],
  attractions: [{ type: String }],
  description: { type: String }
});
module.exports = mongoose.model('Attraction', attractionSchema);