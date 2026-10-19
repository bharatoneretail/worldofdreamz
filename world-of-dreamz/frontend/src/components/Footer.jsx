import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <img 
              src="/logo2.png" 
              alt="World of Dreamz" 
              className="h-16 w-auto object-contain mb-6 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Redefining indoor and outdoor entertainment across India. Creating immersive experiences that bring joy to millions.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Formats'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-[#FF007F] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>

          {/* Formats */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FF007F]">Our Formats</h3>
            <ul className="space-y-3">
              <li><Link to="/format/castillo" className="text-gray-400 hover:text-[#FFD700] transition-colors">Castillo</Link></li>
              <li><Link to="/format/pallacia" className="text-gray-400 hover:text-[#FFD700] transition-colors">Pallacia</Link></li>
              <li><Link to="/format/imperio" className="text-gray-400 hover:text-[#FFD700] transition-colors">Imperio</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FFFF]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#00FFFF]" />
                <a 
                  href="tel:+919830085101" 
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors"
                >
                  +91-9830085101
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#00FFFF]" />
                <a 
                  href="mailto:connect@worldofdreamz.in" 
                  className="text-gray-400 hover:text-[#00FFFF] transition-colors"
                >
                  connect@worldofdreamz.in
                </a>
              </li>
              <li className="text-gray-400 mt-4">
                <p>Company Name:</p>
                <p className="mt-1">BharatOne Retail Ventures Corp</p>
                
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyright © 2026 World of Dreamz. All Rights Reserved
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;