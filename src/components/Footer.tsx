import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../styles/design-system';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'פיתוח אתרים', href: '#' },
      { name: 'אפליקציות', href: '#' },
      { name: 'UI/UX עיצוב', href: '#' },
      { name: 'ייעוץ טכנולוגי', href: '#' },
    ],
    company: [
      { name: 'אודות', href: '#' },
      { name: 'צוות', href: '#' },
      { name: 'קריירה', href: '#' },
      { name: 'בלוג', href: '#' },
    ],
    legal: [
      { name: 'תנאי שימוש', href: '#' },
      { name: 'פרטיות', href: '#' },
      { name: 'מדיניות עוגיות', href: '#' },
    ],
    social: [
      {
        name: 'Instagram',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
      {
        name: 'Facebook',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props: any) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="relative " dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff_30%,transparent)]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]" />
      </div>

      <div className="relative w-full mx-auto">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 
          bg-gradient-to-br from-white/[0.07] to-white/[0.03]
          backdrop-blur-xl 
          border-t border-x border-white/10
          shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.3)]
          overflow-hidden">
          
          {/* Frosted Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5" />
          
          {/* Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Logo and Newsletter Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Logo and Description */}
              <div>
                <motion.div 
                  variants={animationVariants.fadeUp}
                  className="flex items-center mb-6"
                >
                  <img
                    className="h-20 w-auto"
                    src="/r.png"
                    alt="Red Digital"
                  />
                  <span className="mr-3 text-2xl font-bold bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent">
              
                  </span>
                </motion.div>
                <motion.p 
                  variants={animationVariants.fadeUp}
                  className="text-gray-300 max-w-md leading-relaxed"
                >
                  אנחנו מאמינים בכוח של טכנולוגיה לשנות את העולם. הצטרפו אלינו למסע של חדשנות ויצירתיות.
                </motion.p>
              </div>

              {/* Newsletter */}
              <div>
                <motion.h3 
                  variants={animationVariants.fadeUp}
                  className="text-xl font-semibold text-white mb-4"
                >
                  הישארו מעודכנים
                </motion.h3>
                <motion.form 
                  variants={animationVariants.fadeUp}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="האימייל שלך"
                    className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/10 
                             rounded-xl text-white placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20
                             transition-all duration-300 hover:bg-white/[0.05]
                             backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
                             text-white font-semibold rounded-xl
                             transform transition-all duration-300
                             hover:from-red-600 hover:to-red-700
                             active:scale-95
                             shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30"
                  >
                    הרשמה
                  </button>
                </motion.form>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <motion.div variants={animationVariants.fadeUp}>
                <h3 className="text-lg font-semibold text-white mb-6">שירותים</h3>
                <ul className="space-y-4">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={animationVariants.fadeUp}>
                <h3 className="text-lg font-semibold text-white mb-6">חברה</h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={animationVariants.fadeUp}>
                <h3 className="text-lg font-semibold text-white mb-6">משפטי</h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={animationVariants.fadeUp}>
                <h3 className="text-lg font-semibold text-white mb-6">עקבו אחרינו</h3>
                <div className="flex space-x-4">
                  {footerLinks.social.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-red-400 p-2 bg-white/5 rounded-xl 
                               hover:bg-white/10 transition-all duration-300
                               transform hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 mt-8 border-t border-white/10">
              <motion.p 
                variants={animationVariants.fadeUp}
                className="text-center text-gray-400 text-sm"
              >
                &copy; {new Date().getFullYear()} Red Digital. כל הזכויות שמורות.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
