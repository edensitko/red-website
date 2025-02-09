import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaGlobe, FaRobot, FaMobile, FaPaintBrush, FaCogs, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const categories = [
  { id: 'websites', name: 'אתרים', icon: <FaGlobe /> },
  { id: 'automation', name: 'אוטומציה', icon: <FaCogs /> },
  { id: 'bots', name: 'בוטים', icon: <FaRobot /> },
  { id: 'apps', name: 'אפליקציות', icon: <FaMobile /> },
  { id: 'branding', name: 'מיתוג', icon: <FaPaintBrush /> },
  { id: 'all', name: 'חבילות משולבות', icon: <FaRocket /> },
];

const pricingPlans = {
  websites: [
    {
      name: 'דף נחיתה',
      price: '1,499',
      description: 'דף נחיתה מקצועי ומותאם אישית',
      features: [
        'עיצוב מותאם אישית',
        'תאימות למובייל',
        'טפסי לידים',
        'אינטגרציה עם מערכות CRM',
        'אחסון ודומיין לשנה',
      ],
      notIncluded: ['תחזוקה חודשית', 'קידום אורגני', 'תוכן שיווקי'],
      popular: false,
    },
    {
      name: 'אתר עסקי',
      price: '2,999',
      description: 'אתר מקצועי לעסקים קטנים ובינוניים',
      features: [
        'עד 5 עמודים',
        'עיצוב מותאם אישית',
        'פאנל ניהול',
        'אופטימיזציה למנועי חיפוש',
        'תמיכה טכנית',
        'אחסון ודומיין לשנה',
      ],
      notIncluded: ['חנות אונליין', 'שפות נוספות'],
      popular: true,
    },
    {
      name: 'אתר מסחר',
      price: '4,999',
      description: 'חנות אונליין מלאה עם מערכת ניהול',
      features: [
        'מערכת ניהול מוצרים',
        'סליקת אשראי',
        'ניהול מלאי',
        'דוחות מכירות',
        'אינטגרציה עם שילוח',
        'רב-לשוני',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
  automation: [
    {
      name: 'בסיסי',
      price: '999',
      description: 'אוטומציה בסיסית לתהליכים פשוטים',
      features: [
        'אוטומציה של תהליך אחד',
        'אינטגרציה בסיסית',
        'דוחות ביצועים',
        'תמיכה טכנית',
      ],
      notIncluded: ['אוטומציה מורכבת', 'API מותאם אישית'],
      popular: false,
    },
    {
      name: 'מתקדם',
      price: '2,499',
      description: 'אוטומציה מתקדמת למספר תהליכים',
      features: [
        'אוטומציה של עד 3 תהליכים',
        'אינטגרציה מתקדמת',
        'API מותאם אישית',
        'דוחות מפורטים',
        'תמיכה 24/7',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  bots: [
    {
      name: 'צאט בוט',
      price: '1,499',
      description: 'בוט צאט חכם לשירות לקוחות',
      features: [
        'למידת מכונה בסיסית',
        'אינטגרציה עם וואטסאפ/פייסבוק',
        'דוחות שיחות',
        'ממשק ניהול',
      ],
      notIncluded: ['AI מתקדם', 'אינטגרציה עם CRM'],
      popular: true,
    },
    {
      name: 'בוט AI',
      price: '3,999',
      description: 'בוט מבוסס AI מתקדם',
      features: [
        'למידת מכונה מתקדמת',
        'זיהוי כוונות מתקדם',
        'אינטגרציה מלאה',
        'התאמה אישית מלאה',
        'דוחות אנליטיים',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
  apps: [
    {
      name: 'אפליקציה בסיסית',
      price: '9,999',
      description: 'אפליקציה בסיסית לאנדרואיד/iOS',
      features: [
        'עיצוב מותאם אישית',
        'פיתוח נייטיב',
        'אינטגרציה עם שרת',
        'פאנל ניהול',
      ],
      notIncluded: ['תכונות מתקדמות', 'אנליטיקס מתקדם'],
      popular: false,
    },
    {
      name: 'אפליקציה מתקדמת',
      price: '19,999',
      description: 'אפליקציה מלאה עם תכונות מתקדמות',
      features: [
        'פיתוח מלא לשתי הפלטפורמות',
        'עיצוב UX/UI מתקדם',
        'אינטגרציה מלאה',
        'מערכת אנליטיקס',
        'פאנל ניהול מתקדם',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  branding: [
    {
      name: 'בסיסי',
      price: '2,999',
      description: 'חבילת מיתוג בסיסית לעסקים',
      features: [
        'עיצוב לוגו',
        'כרטיס ביקור',
        'ניירת משרדית',
        'מדריך מיתוג בסיסי',
      ],
      notIncluded: ['אסטרטגיית מיתוג', 'חומרי שיווק'],
      popular: false,
    },
    {
      name: 'מקיף',
      price: '5,999',
      description: 'חבילת מיתוג מקיפה',
      features: [
        'אסטרטגיית מיתוג',
        'עיצוב לוגו מתקדם',
        'חומרי שיווק מלאים',
        'מדריך מיתוג מקיף',
        'נוכחות דיגיטלית',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  all: [
    {
      name: 'סטארטאפ',
      price: '14,999',
      description: 'חבילה מקיפה לעסקים מתחילים',
      features: [
        'אתר עסקי',
        'מיתוג בסיסי',
        'צאט בוט',
        'אוטומציה בסיסית',
        'תמיכה שנתית',
      ],
      notIncluded: ['אפליקציה', 'קמפיינים ממומנים'],
      popular: true,
    },
    {
      name: 'ארגוני',
      price: '29,999',
      description: 'פתרון דיגיטלי מקיף לארגונים',
      features: [
        'אתר מסחר מתקדם',
        'מיתוג מקיף',
        'בוט AI',
        'אוטומציה מתקדמת',
        'אפליקציה בסיסית',
        'תמיכה VIP',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
};

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('websites');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-red-500/5 to-black/0" />
        <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff_30%,transparent)]">
          <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-black mb-6
                     bg-gradient-to-r from-white via-red-200 to-red-300 
                     bg-clip-text text-transparent
                     tracking-tight"
          >
            תוכניות ומחירים
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            בחר את הפתרון המתאים לך
            <span className="block mt-2 text-red-400">
              פתרונות דיגיטליים מקיפים לכל צורך
            </span>
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-28 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
                flex items-center gap-2
                ${selectedCategory === category.id
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'text-gray-400 hover:text-white border border-white/10 hover:border-white/30'
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Plans Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {pricingPlans[selectedCategory as keyof typeof pricingPlans].map((plan, index) => (
              <motion.div
                key={plan.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative group ${plan.popular ? 'lg:-mt-8' : ''}`}
                onHoverStart={() => setHoveredPlan(index)}
                onHoverEnd={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium
                                 flex items-center gap-1">
                      <HiSparkles className="text-yellow-300" />
                      הכי פופולרי
                    </div>
                  </div>
                )}

                <div className={`relative h-full bg-gradient-to-br from-white/[0.08] to-transparent 
                             backdrop-blur-xl rounded-2xl p-8
                             border border-white/10
                             transition-all duration-500
                             ${plan.popular ? 'border-red-500/30 shadow-[0_0_30px_rgba(248,113,113,0.15)]' : ''}
                             group-hover:border-red-500/30
                             group-hover:shadow-[0_0_30px_rgba(248,113,113,0.15)]`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-black text-white">₪{plan.price}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 
                                      flex items-center justify-center">
                            <FaCheck className="text-red-400 text-sm" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {plan.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 opacity-50">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-500/20 
                                      flex items-center justify-center">
                            <FaTimes className="text-gray-400 text-sm" />
                          </div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <button className={`w-full py-4 rounded-xl font-medium
                                     transition-all duration-300
                                     ${plan.popular
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-white/10 text-white hover:bg-white/20'
                        }`}>
                        בחר תוכנית
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Pricing;
