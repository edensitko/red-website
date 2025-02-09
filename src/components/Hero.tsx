import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles, textStyles, buttonStyles } from '../styles/design-system';

const Hero: React.FC = () => {
  return (
    <div className={`relative w-full h-screen overflow-hidden`} id="home">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className={containerStyles.mainContent}>
        <motion.div 
          className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title */}
          <motion.h1 
            className={`${textStyles.sectionTitle} max-w-4xl mx-auto mb-6`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            חברת תוכנה המתמחה בפיתוח פתרונות דיגיטליים מתקדמים
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className={`${textStyles.sectionSubtitle} mb-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            אנחנו מפתחים פתרונות טכנולוגיים חדשניים שעוזרים לעסקים להצליח בעידן הדיגיטלי
            <span className={textStyles.accentText}>
              מהחזון ועד לביצוע, אנחנו כאן בשבילכם
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <motion.button
              className={`${buttonStyles.primary} text-lg font-medium`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              צור קשר
            </motion.button>
            <motion.button
              className={`${buttonStyles.secondary} text-lg font-medium`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              עוד עלינו
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;