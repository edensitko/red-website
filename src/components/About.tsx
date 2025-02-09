import React from 'react';
import { motion } from 'framer-motion';
import { animationVariants } from '../styles/design-system';

const About = () => {
  const stats = [
    { label: 'פרויקטים', value: '150+' },
    { label: 'לקוחות מרוצים', value: '50+' },
    { label: 'שנות ניסיון', value: '7+' },
    { label: 'טכנולוגיות', value: '20+' },
  ];

  const values = [
    {
      title: 'חדשנות',
      description: 'אנחנו תמיד בחזית הטכנולוגיה, מביאים את הפתרונות המתקדמים ביותר',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'איכות',
      description: 'כל פרויקט מקבל את תשומת הלב המירבית, עם דגש על פרטים ומצוינות',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'שירות',
      description: 'זמינות מלאה ותמיכה מקצועית לאורך כל הדרך',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-10 overflow-hidden" dir="rtl">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-0 [mask-image:radial-gradient(#fff_30%,transparent)]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]" />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <motion.div 
              variants={animationVariants.fadeIn}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span 
                  variants={animationVariants.fadeUp}
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-400"
                >
                  אודות
                </motion.span>
                <motion.h2 
                  variants={animationVariants.fadeUp}
                  className="text-4xl font-bold bg-gradient-to-r from-white via-red-200 to-red-300 bg-clip-text text-transparent"
                >
                  מובילים את המהפכה הדיגיטלית
                </motion.h2>
                <motion.p 
                  variants={animationVariants.fadeUp}
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  אנחנו מאמינים שטכנולוגיה צריכה להיות נגישה, יעילה ומותאמת אישית. 
                  הצוות שלנו מורכב ממומחים מובילים בתחומם, המחויבים להביא את הפתרונות 
                  הטכנולוגיים המתקדמים ביותר עבור הלקוחות שלנו.
                </motion.p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={animationVariants.fadeUp}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm
                             transform transition-all duration-300 hover:bg-white/[0.05]"
                  >
                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              variants={animationVariants.fadeIn}
              className="relative"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/10 mix-blend-overlay" />
                <img
                  src="/r.png"
                  alt="Red Digital Team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Values Section */}
          <div className="mt-24">
            <motion.h3 
              variants={animationVariants.fadeUp}
              className="text-2xl font-bold text-center text-white mb-12"
            >
              הערכים שמנחים אותנו
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={animationVariants.fadeUp}
                  className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm
                           transform transition-all duration-300 hover:bg-white/[0.05]
                           group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6
                               group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
