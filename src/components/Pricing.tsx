import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const plans = [
    {
      name: 'בסיסי',
      description: 'מושלם לעסקים קטנים המתחילים את דרכם הדיגיטלית',
      price: isAnnual ? 2990 : 299,
      features: [
        { text: 'אתר תדמית מותאם אישית', highlight: false },
        { text: 'עיצוב רספונסיבי מלא', highlight: true },
        { text: 'אופטימיזציה למנועי חיפוש', highlight: false },
        { text: 'טפסי יצירת קשר', highlight: false },
        { text: 'חיבור לרשתות חברתיות', highlight: true },
        { text: 'אחסון ודומיין לשנה', highlight: false },
        { text: 'תמיכה טכנית בסיסית', highlight: false }
      ],
      color: 'blue',
      popular: false,
      icon: '🚀'
    },
    {
      name: 'מקצועי',
      description: 'הפתרון המושלם לעסקים בצמיחה',
      price: isAnnual ? 5990 : 599,
      features: [
        { text: 'כל התכונות של החבילה הבסיסית', highlight: false },
        { text: 'חנות אונליין מלאה', highlight: true },
        { text: 'מערכת ניהול תוכן מתקדמת', highlight: true },
        { text: 'אינטגרציה עם מערכות תשלום', highlight: false },
        { text: 'ניהול מלאי ומוצרים', highlight: false },
        { text: 'דשבורד אנליטיקס מתקדם', highlight: true },
        { text: 'תמיכה טכנית 24/7', highlight: true },
        { text: 'עדכוני תוכן חודשיים', highlight: false }
      ],
      color: 'purple',
      popular: true,
      icon: '⭐'
    },
    {
      name: 'פרימיום',
      description: 'לעסקים הדורשים פתרון מקיף ומותאם אישית',
      price: isAnnual ? 9990 : 999,
      features: [
        { text: 'כל התכונות של החבילה המקצועית', highlight: false },
        { text: 'פיתוח מותאם אישית', highlight: true },
        { text: 'אפליקציה היברידית', highlight: true },
        { text: 'אינטגרציה עם מערכות ארגוניות', highlight: true },
        { text: 'אבטחה מתקדמת', highlight: false },
        { text: 'גיבוי אוטומטי יומי', highlight: false },
        { text: 'מנהל פרויקט ייעודי', highlight: true },
        { text: 'דוחות ביצועים חודשיים', highlight: false },
        { text: 'תמיכה VIP', highlight: true }
      ],
      color: 'orange',
      popular: false,
      icon: '👑'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getGradientClasses = (color: string) => ({
    blue: 'from-blue-500 to-blue-600 shadow-blue-500/30',
    purple: 'from-purple-500 to-purple-600 shadow-purple-500/30',
    orange: 'from-orange-500 to-orange-600 shadow-orange-500/30'
  }[color]);

  const getLightColorClasses = (color: string) => ({
    blue: 'bg-gradient-to-br from-blue-50 to-white border-blue-200',
    purple: 'bg-gradient-to-br from-purple-50 to-white border-purple-200',
    orange: 'bg-gradient-to-br from-orange-50 to-white border-orange-200'
  }[color]);

  return (
    <section id="pricing" dir="rtl" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 bg-primary-50 rounded-full"
          >
            <span className="text-sm font-bold text-primary-600">
              מחירים שקופים, ללא הפתעות 🎯
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-4
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent">
            תוכניות ומחירים
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            בחרו את התוכנית המתאימה לכם ונתחיל לבנות את הנוכחות הדיגיטלית שלכם
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12" dir="ltr">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              חיוב חודשי
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 items-center rounded-full
                       transition-colors duration-300 focus:outline-none"
              style={{ 
                backgroundColor: isAnnual ? '#4F46E5' : '#94A3B8'
              }}
            >
              <motion.span
                layout
                className="inline-block h-5 w-5 transform rounded-full bg-white shadow-lg"
                animate={{ x: isAnnual ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              חיוב שנתי
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mr-1.5 inline-block px-2 py-0.5 bg-primary-100 text-primary-600 
                          text-xs font-bold rounded-full"
              >
                חסכו 20%
              </motion.span>
            </span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl border-2 overflow-hidden backdrop-blur-sm
                         transform transition-all duration-500
                         ${getLightColorClasses(plan.color)}
                         ${plan.popular ? 'lg:-mt-8 lg:mb-8 border-primary-500 shadow-xl z-10' : 'hover:shadow-lg'}
                         ${selectedPlan === index ? 'ring-4 ring-primary-500 ring-opacity-50' : ''}`}
              onClick={() => setSelectedPlan(index)}
            >
              {plan.popular && (
                <div className="absolute top-8 left-5 -translate-y-1/2 px-4 py-1.5
                              bg-gradient-to-r from-primary-600 to-primary-500
                              text-white text-sm font-bold rounded-full
                              shadow-lg shadow-primary-500/30 whitespace-nowrap">
                  המומלץ ביותר
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{plan.icon}</span>
                  <h3 className="text-2xl font-black text-gray-900">
                    {plan.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ₪{plan.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {isAnnual ? '/שנה' : '/חודש'}
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-primary-600 font-medium mt-2">
                      או ₪{Math.round(plan.price / 12).toLocaleString()} לחודש
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-4 px-6 rounded-xl text-white font-bold
                             bg-gradient-to-r ${getGradientClasses(plan.color)}
                             transform transition-all duration-300
                             hover:shadow-lg hover:-translate-y-0.5
                             active:translate-y-0 active:shadow-md`}
                >
                  בחרו תוכנית
                </button>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full 
                                    ${feature.highlight ? 'bg-primary-100' : 'bg-gray-100'}
                                    flex items-center justify-center`}>
                        <svg 
                          className={`w-3 h-3 ${feature.highlight ? 'text-primary-600' : 'text-gray-500'}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm ${feature.highlight ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-gray-900 mb-12"
          >
            שאלות נפוצות
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                q: 'האם אפשר לשדרג תוכנית באמצע התקופה?',
                a: 'כן, ניתן לשדרג את התוכנית בכל עת. ההפרש יחושב באופן יחסי לתקופה הנותרת.'
              },
              {
                q: 'האם יש התחייבות לתקופה מינימלית?',
                a: 'אין התחייבות מינימלית. ניתן לבטל את המנוי בכל עת ללא קנסות יציאה.'
              },
              {
                q: 'מה כולל השירות הטכני?',
                a: 'השירות כולל תמיכה בתקלות 24/7, עדכוני אבטחה שוטפים, שדרוגי מערכת, וסיוע טכני מצוות המומחים שלנו.'
              },
              {
                q: 'האם אפשר להתאים חבילה לצרכים שלי?',
                a: 'בהחלט! צרו איתנו קשר ונתאים לכם חבילה מותאמת אישית לפי הצרכים והדרישות הספציפיות של העסק שלכם.'
              },
              {
                q: 'איך מתבצע תהליך התשלום?',
                a: 'התשלום מתבצע באמצעות כרטיס אשראי או העברה בנקאית. ניתן לבחור בין תשלום חודשי או שנתי עם הנחה משמעותית.'
              },
              {
                q: 'האם אקבל חשבונית מס?',
                a: 'כן, בוודאי. חשבונית מס תישלח באופן אוטומטי למייל שלכם מיד לאחר כל תשלום.'
              },
              {
                q: 'מה קורה אם ארצה לבטל את המנוי?',
                a: 'ניתן לבטל את המנוי בכל עת. הביטול ייכנס לתוקף בסוף תקופת החיוב הנוכחית ותקבלו החזר יחסי עבור התקופה שלא נוצלה.'
              },
              {
                q: 'האם יש תמיכה בעברית?',
                a: 'כן, צוות התמיכה שלנו דובר עברית ואנגלית ונותן מענה מקצועי ומהיר בשתי השפות.'
              }
            ].map((faq, index) => {
              const [isOpen, setIsOpen] = useState(false);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-6 py-5 flex items-center justify-between text-right
                             hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h4 className="font-bold text-gray-900">{faq.q}</h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 mr-4"
                    >
                      <svg 
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-gray-100"
                      >
                        <p className="px-6 py-4 text-gray-600 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-600 mb-6">
            צריכים עזרה בבחירת התוכנית המתאימה?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white
                     rounded-xl font-bold hover:bg-gray-800 transition-colors duration-300"
          >
            דברו איתנו
            <span className="text-lg">👋</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
