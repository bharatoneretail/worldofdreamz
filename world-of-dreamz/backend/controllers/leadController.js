const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

// Email Setup (Updated for better Gmail compatibility)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.createLead = async (req, res) => {
  try {
    // 1. Save Lead to Database
    const newLead = new Lead(req.body);
    await newLead.save();
    console.log('✅ Lead saved to database successfully.');

    // 2. Send Email Notification
    console.log('📧 Attempting to send Email...');
    const mailOptions = {
      from: `"World of Dreamz" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New WOD Lead: ${newLead.name} (${newLead.interestedFormat})`,
      html: `
        <h2 style="color: #6b21a8;">New Lead Received!</h2>
        <p><strong>Name:</strong> ${newLead.name}</p>
        <p><strong>Email:</strong> ${newLead.email}</p>
        <p><strong>Phone:</strong> ${newLead.phone}</p>
        <p><strong>Company:</strong> ${newLead.company || 'N/A'}</p>
        <p><strong>Interested Format:</strong> ${newLead.interestedFormat}</p>
        <p><strong>Message:</strong> ${newLead.message}</p>
        <p><strong>Time:</strong> ${new Date(newLead.createdAt).toLocaleString()}</p>
      `
    };

    try {
      const emailInfo = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully! Message ID:', emailInfo.messageId);
    } catch (emailError) {
      console.error('❌ EMAIL FAILED. Error details:', emailError.message);
    }

    // 3. Send Telegram Message Notification
    console.log('📱 Attempting to send Telegram message...');
    const telegramMessage = `🚀 *New World of Dreamz Lead!*\n\n👤 *Name:* ${newLead.name}\n📞 *Phone:* ${newLead.phone}\n📧 *Email:* ${newLead.email}\n🏢 *Format:* ${newLead.interestedFormat}\n💬 *Message:* ${newLead.message}`;
    
    try {
      const telegramResponse = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown'
        })
      });
      
      const telegramData = await telegramResponse.json();
      if (telegramData.ok) {
        console.log('✅ Telegram sent successfully!');
      } else {
        console.error('❌ TELEGRAM FAILED. Error details:', telegramData);
      }
    } catch (telegramError) {
      console.error('❌ TELEGRAM FAILED. Error details:', telegramError.message);
    }

    // Always return success to the user so the website UX isn't broken
    res.status(201).json({ success: true, message: 'Thank you! World of Dreamz will contact you shortly.' });
    
  } catch (error) {
    console.error('❌ Lead Save Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};