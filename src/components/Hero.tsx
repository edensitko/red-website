import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden" dir="rtl">
      {/* Video Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto space-y-8"
        >
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight
                       bg-gradient-to-r from-white via-red-200 to-red-300 
                       bg-clip-text text-transparent"
          >
            פתרונות דיגיטליים
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              שיקחו אותך קדימה
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            אנחנו מתמחים בפיתוח פתרונות דיגיטליים מתקדמים המשלבים טכנולוגיות חדשניות
            עם חווית משתמש מעולה
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 
                        rounded-xl text-white font-semibold text-lg
                        transform transition-all duration-300
                        hover:from-red-600 hover:to-red-700
                        shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30
                        min-w-[200px]"
            >
              צור קשר
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 
                        rounded-xl text-white font-semibold text-lg
                        transform transition-all duration-300
                        hover:bg-white/10 backdrop-blur-sm
                        min-w-[200px]"
            >
              גלה עוד
            </motion.button>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Hero;