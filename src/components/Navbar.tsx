import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px] rounded-2xl transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur shadow-lg scale-[1.02] -translate-y-1 w-[98%] max-w-[1400px]' 
        : 'bg-white/60 backdrop-blur-sm shadow-md scale-100'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16 lg:h-[4.5rem]' : 'h-14 lg:h-16'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/r copy.png" alt="Red Logo" className={`transition-all duration-300 ${
              scrolled ? 'h-9 lg:h-10' : 'h-8 lg:h-9'
            }`} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 mx-8">
            <div className="flex items-center justify-center space-x-12 rtl:space-x-reverse">
              <a 
                href="#home" 
                onClick={() => handleLinkClick('home')}
                className={`relative group text-gray-700 px-2 py-2 font-medium transition-all duration-300 ${
                  scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
                } ${clickedLink === 'home' ? 'pointer-events-none' : ''}`}
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  clickedLink === 'home' ? 'text-gray-700' : 'group-hover:text-primary-600'
                }`}>בית</span>
                <span className={`absolute bottom-1.5 left-0 w-full h-[2px] bg-primary-600/20 transition-all duration-300 transform origin-left ${
                  clickedLink === 'home' ? 'scale-x-0' : 'group-hover:scale-x-100 group-hover:bg-primary-600/30'
                } scale-x-0`}></span>
              </a>
              <a 
                href="#about"
                onClick={() => handleLinkClick('about')}
                className={`relative group text-gray-700 px-2 py-2 font-medium transition-all duration-300 ${
                  scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
                } ${clickedLink === 'about' ? 'pointer-events-none' : ''}`}
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  clickedLink === 'about' ? 'text-gray-700' : 'group-hover:text-primary-600'
                }`}>אודות</span>
                <span className={`absolute bottom-1.5 left-0 w-full h-[2px] bg-primary-600/20 transition-all duration-300 transform origin-left ${
                  clickedLink === 'about' ? 'scale-x-0' : 'group-hover:scale-x-100 group-hover:bg-primary-600/30'
                } scale-x-0`}></span>
              </a>
              <a 
                href="#services"
                onClick={() => handleLinkClick('services')}
                className={`relative group text-gray-700 px-2 py-2 font-medium transition-all duration-300 ${
                  scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
                } ${clickedLink === 'services' ? 'pointer-events-none' : ''}`}
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  clickedLink === 'services' ? 'text-gray-700' : 'group-hover:text-primary-600'
                }`}>שירותים</span>
                <span className={`absolute bottom-1.5 left-0 w-full h-[2px] bg-primary-600/20 transition-all duration-300 transform origin-left ${
                  clickedLink === 'services' ? 'scale-x-0' : 'group-hover:scale-x-100 group-hover:bg-primary-600/30'
                } scale-x-0`}></span>
              </a>
              <a 
                href="#projects"
                onClick={() => handleLinkClick('projects')}
                className={`relative group text-gray-700 px-2 py-2 font-medium transition-all duration-300 ${
                  scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
                } ${clickedLink === 'projects' ? 'pointer-events-none' : ''}`}
              >
                <span className={`relative z-10 transition-colors duration-200 ${
                  clickedLink === 'projects' ? 'text-gray-700' : 'group-hover:text-primary-600'
                }`}>פרויקטים</span>
                <span className={`absolute bottom-1.5 left-0 w-full h-[2px] bg-primary-600/20 transition-all duration-300 transform origin-left ${
                  clickedLink === 'projects' ? 'scale-x-0' : 'group-hover:scale-x-100 group-hover:bg-primary-600/30'
                } scale-x-0`}></span>
              </a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block flex-shrink-0 mr-2">
            <a 
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className={`inline-flex items-center justify-center px-6 py-2.5 border border-transparent font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 shadow-sm shadow-primary-600/10 hover:shadow-primary-600/20 hover:scale-105 ${
                scrolled ? 'text-base lg:text-lg' : 'text-[0.95rem] lg:text-base'
              } ${clickedLink === 'contact' ? 'transform-none shadow-none hover:scale-100' : ''}`}
            >
              צור קשר
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50/80'
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
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-gray-100/50 rounded-b-2xl"
      >
        <div className="px-4 pt-2 pb-3 space-y-2">
          <a 
            href="#home" 
            onClick={() => {
              handleLinkClick('home');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-600 hover:text-primary-600'
            } hover:bg-gray-50/80 ${clickedLink === 'home' ? 'pointer-events-none' : ''}`}
          >
            בית
          </a>
          <a 
            href="#about"
            onClick={() => {
              handleLinkClick('about');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-600 hover:text-primary-600'
            } hover:bg-gray-50/80 ${clickedLink === 'about' ? 'pointer-events-none' : ''}`}
          >
            אודות
          </a>
          <a 
            href="#services"
            onClick={() => {
              handleLinkClick('services');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-600 hover:text-primary-600'
            } hover:bg-gray-50/80 ${clickedLink === 'services' ? 'pointer-events-none' : ''}`}
          >
            שירותים
          </a>
          <a 
            href="#projects"
            onClick={() => {
              handleLinkClick('projects');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all duration-300 ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-gray-600 hover:text-primary-600'
            } hover:bg-gray-50/80 ${clickedLink === 'projects' ? 'pointer-events-none' : ''}`}
          >
            פרויקטים
          </a>
          <a 
            href="#contact"
            onClick={() => {
              handleLinkClick('contact');
              setIsOpen(false);
            }}
            className={`block px-4 py-2.5 rounded-xl text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 text-center shadow-sm shadow-primary-600/10 ${
              clickedLink === 'contact' ? 'transform-none shadow-none' : ''
            }`}
          >
            צור קשר
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
