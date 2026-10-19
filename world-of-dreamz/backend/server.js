const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { protect } = require('./middleware/authMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Auth Routes (Public)
app.use('/api/auth', require('./routes/authRoutes'));

// 2. Leads Routes (POST is public for contact form, GET is protected for Admin)
const leadRoutes = require('./routes/leadRoutes');
app.use('/api/leads', (req, res, next) => {
  if (req.method === 'GET') {
    return protect(req, res, next); // Require token to VIEW leads
  }
  next(); // Allow POST without token
}, leadRoutes);

// 3. Attractions Route (Public)
app.use('/api/attractions', require('./routes/attractionRoutes'));

// Health Check
app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));