import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Gradient Bar */}
      <div className="h-1 bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed from justify-between to items-center, and added ml-auto to the right container */}
        <div className="flex items-center h-20">
          
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/logo2.png" 
              alt="World of Dreamz" 
              className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:scale-110 transition-transform"
            />
          </Link>

          {/* Right Side Container - Pushed to the far right */}
          <div className="ml-auto flex items-center space-x-6">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['Home', 'About', 'Formats', 'Attractions'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-[#FFD700] font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF007F] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-[#FFD700] via-[#FF007F] to-[#00FFFF] text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,0,127,0.5)] transition-all transform hover:scale-105"
              >
                Connect Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#050505]/95 backdrop-blur-md rounded-2xl mt-2 p-4 border border-purple-500/30">
            {['Home', 'About', 'Formats', 'Attractions', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="block py-3 text-gray-300 hover:text-[#FFD700] font-medium border-b border-gray-800 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;