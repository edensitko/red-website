import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLinkClick = (link: string) => {
    setClickedLink(link);
    setTimeout(() => setClickedLink(null), 300); // Reset after animation duration
  };

  const links = [
    { name: 'בית', href: '#home' },
    { name: 'אודות', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'פרויקטים', href: '#projects' },
  ];

  const handleCTA = () => {
    // Add CTA button functionality here
  };

  const ctaText = 'צור קשר';

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px] rounded-2xl transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1a1a1a]/95 backdrop-blur shadow-lg scale-[1.02] -translate-y-1 w-[98%] max-w-[1400px]' 
        : 'bg-[#1a1a1a]/60 backdrop-blur-sm shadow-md scale-100'
    }`}>
      <div className="max-w-8xl mx-auto px-5 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/r copy.png" alt="Red Logo" className={`transition-all duration-300 ${
              scrolled ? 'h-14 lg:h-16' : 'h-14 lg:h-14'
            }`} />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 items-center">
            {links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`relative group text-gray-300 px-3 py-2 font-medium transition-all duration-300 hover:text-white ${
                  scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
                } ${clickedLink === link.name ? 'pointer-events-none' : ''}`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
                <span className={`absolute bottom-1.5 left-0 w-full h-[2px] bg-red-600/20 transition-all duration-300 transform origin-left ${
                  clickedLink === link.name ? 'scale-x-0' : 'group-hover:scale-x-100 group-hover:bg-red-600/50'
                } scale-x-0`}></span>
              </a>
            ))}
            
         
  

            {/* CTA Button */}
            <button 
              className="ml-4 px-4 py-2 bg-red-600/20 text-red-300 hover:bg-red-600/40 hover:text-white rounded-lg transition-all duration-300 font-medium text-sm"
              onClick={handleCTA}
            >
              {ctaText}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-2xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-100 hover:text-primary-100 hover:bg-gray-50'
                  : 'text-gray-100 hover:text-primary-100 hover:bg-gray-50/80'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-gray-100/50 rounded-2xl"
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              onClick={() => {
                handleLinkClick(link.name);
                setIsOpen(false);
              }}
              className={`block px-4 py-2.5 rounded-2xl text-base font-medium transition-all duration-300 ${
                scrolled ? 'text-gray-100 hover:text-primary-100' : 'text-gray-100 hover:text-primary-600'
              } hover:bg-gray-50/80 ${clickedLink === link.name ? 'pointer-events-none' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => {
              handleLinkClick('contact');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-2xl text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-all duration-300 text-center shadow-sm shadow-red-600/10 ${
              clickedLink === 'contact' ? 'transform-none shadow-none' : ''
            }`}
          >
            {ctaText}
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
