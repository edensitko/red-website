import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/red-digital-solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'GitHub',
      url: 'https://github.com/red-digital-solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram',
      url: 'https://instagram.com/red.digital.solutions',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  const footerLinks = [
    {
      title: 'שירותים',
      links: [
        { name: 'פיתוח אתרים', href: '#services' },
        { name: 'חנויות אונליין', href: '#ecommerce' },
        { name: 'אפליקציות', href: '#apps' },
        { name: 'מערכות ניהול', href: '#systems' }
      ]
    },
    {
      title: 'החברה',
      links: [
        { name: 'אודות', href: '#about' },
        { name: 'צוות', href: '#team' },
        { name: 'קריירה', href: '#careers' },
        { name: 'בלוג', href: '#blog' }
      ]
    },
    {
      title: 'משאבים',
      links: [
        { name: 'מדריכים', href: '#guides' },
        { name: 'מחקרים', href: '#research' },
        { name: 'שאלות נפוצות', href: '#faq' },
        { name: 'תמיכה', href: '#support' }
      ]
    }
  ];

  return (
    <footer className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]" dir="rtl">
      {/* Top Divider with Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary-500/20 via-primary-500 to-primary-500/20"></div>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <img src="/r copy.png" alt="Red Logo" className="h-12 w-auto mb-4" />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md text-right">
                אנחנו מתמחים בפיתוח פתרונות דיגיטליים מתקדמים המותאמים במיוחד לצרכים העסקיים שלכם.
                עם ניסיון של שנים בתעשייה, אנו מספקים שירותי פיתוח ברמה הגבוהה ביותר.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections with Dividers */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`space-y-4 ${
                index < footerLinks.length - 1 ? 'lg:border-r lg:border-gray-100 lg:pr-8' : ''
              }`}
            >
              <h3 className="text-lg font-bold text-primary-600">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Enhanced Divider */}
        <div className="relative mt-12 pt-8">
          {/* Gradient Divider */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-500 text-sm text-center sm:text-right">
              &copy; {new Date().getFullYear()} Red Digital Solutions. כל הזכויות שמורות.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
              <a href="#privacy" className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                מדיניות פרטיות
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="#terms" className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                תנאי שימוש
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <a href="#cookies" className="text-gray-500 hover:text-primary-600 transition-colors duration-200">
                מדיניות עוגיות
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Divider with Gradient */}
      <div className="h-1 bg-gradient-to-r from-primary-500/20 via-primary-500 to-primary-500/20"></div>
    </footer>
  );
};

export default Footer;
