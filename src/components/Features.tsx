import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles } from '../styles/design-system';

interface Feature {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  gradient: string;
}

const features: Feature[] = [
  {
    title: 'פיתוח אפליקציות מתקדמות',
    description:
      'פתרונות תוכנה חדשניים המותאמים לצרכים הייחודיים של העסק שלך',
    benefits: [
      'טכנולוגיות מתקדמות',
      'התאמה אישית מלאה',
      'ביצועים מהירים',
      'אבטחה מתקדמת',
    ],
    icon: '💻',
    gradient: 'from-red-400 via-red-500 to-blue-500',
  },
  {
    title: 'עיצוב חווית משתמש',
    description:
      'עיצוב ממשק משתמש מודרני ואינטואיטיבי שמספק חוויה מעולה',
    benefits: [
      'עיצוב מותאם אישית',
      'חוויית משתמש מעולה',
      'נגישות מלאה',
      'תמיכה בכל המכשירים',
    ],
    icon: '🎨',
    gradient: 'from-red-500 via-blue-500 to-red-400',
  },
  {
    title: 'אינטגרציה עם AI',
    description:
      'שילוב טכנולוגיות בינה מלאכותית מתקדמות לייעול תהליכים',
    benefits: [
      'למידת מכונה',
      'אוטומציה חכמה',
      'תובנות עסקיות',
      'התאמה אישית',
    ],
    icon: '🤖',
    gradient: 'from-blue-500 via-red-400 to-red-500',
  },
  {
    title: 'פיתוח אתרים מתקדם',
    description:
      'בניית אתרים מודרניים ומרשימים עם טכנולוגיות חדשניות',
    benefits: [
      'עיצוב רספונסיבי',
      'אופטימיזציה למנועי חיפוש',
      'ביצועים מהירים',
      'חווית משתמש מעולה',
    ],
    icon: '🌐',
    gradient: 'from-purple-500 via-red-400 to-blue-500',
  },
  {
    title: 'אבטחת מידע',
    description:
      'הגנה על המידע והנכסים הדיגיטליים שלך עם פתרונות אבטחה מתקדמים',
    benefits: [
      'הצפנת מידע',
      'אבטחת תקשורת',
      'הגנה מפני התקפות',
      'גיבוי ושחזור',
    ],
    icon: '🔒',
    gradient: 'from-red-400 via-purple-500 to-blue-500',
  },
  {
    title: 'ייעוץ טכנולוגי',
    description:
      'ליווי מקצועי והכוונה בבחירת הפתרונות הטכנולוגיים המתאימים',
    benefits: [
      'אסטרטגיה דיגיטלית',
      'ייעוץ ארכיטקטורה',
      'בחירת טכנולוגיות',
      'תכנון פרויקטים',
    ],
    icon: '💡',
    gradient: 'from-blue-500 via-red-400 to-purple-500',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features: React.FC = () => {
  return (
    <section className="relative w-full py-10 overflow-hidden" dir="rtl">
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 lg:px-8 backdrop-blur-3xl bg-white/5 rounded-2xl border border-white/10 shadow-xl p-8 transform transition-all duration-500">
          {/* Enhanced Grid background with animation */}
          <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff_40%,transparent)]">
            <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]
                     animate-[pulse_4s_ease-in-out_infinite]" />
          </div>

          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 mb-6 rounded-full 
                       bg-gradient-to-r from-red-500/20 to-purple-500/20 
                       backdrop-blur-md border border-white/10"
            >
              <span className="text-lg text-transparent bg-clip-text 
                           bg-gradient-to-r from-red-400 to-red-300">
                הפתרונות שלנו
              </span>
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-black mb-4
                         bg-gradient-to-r from-white via-red-200 to-red-300 
                         bg-clip-text text-transparent
                         tracking-tight drop-shadow-[0_2px_4px_rgba(99,102,241,0.5)]">
              השירותים שלנו
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              הפתרונות המתקדמים שאנחנו מציעים
              <span className="block mt-2 bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent">
                כל מה שהעסק שלך צריך כדי להצליח בעידן הדיגיטלי
              </span>
            </p>
          </div>

          {/* Features Grid with enhanced spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-xl
                         bg-gradient-to-br from-white/5 to-white/10
                         border border-white/10 shadow-lg
                         p-8"
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 opacity-20 bg-gradient-to-r ${feature.gradient}`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 mb-6
                               bg-gradient-to-br from-red-400/20 to-red-500/20 
                               rounded-2xl text-red-400 text-3xl
                               shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4
                               bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-center text-gray-300"
                      >
                        <span className="flex-shrink-0 w-5 h-5 mr-3 rounded-full 
                                     bg-red-400/20 flex items-center justify-center">
                          <span className="text-red-400 text-sm">•</span>
                        </span>
                        <span>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 
                              bg-gradient-to-br from-red-400/10 to-purple-500/10 
                              rounded-full blur-2xl" />
                <div className="absolute -top-8 -left-8 w-48 h-48 
                              bg-gradient-to-br from-purple-500/10 to-red-400/10 
                              rounded-full blur-2xl" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Blurred Circles */}
       
      </div>
    </section>
  );
};

export default Features;
