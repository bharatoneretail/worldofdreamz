const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String },
  interestedFormat: { type: String, enum: ['Castillo', 'Pallacia', 'Imperio', 'Custom Consultation'] },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Lead', leadSchema);