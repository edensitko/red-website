import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      icon: '🎯',
      title: 'אפיון ותכנון',
      description: 'מנתחים את הצרכים שלכם ומתכננים פתרון מותאם אישית',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      icon: '💡',
      title: 'עיצוב ופיתוח',
      description: 'מעצבים ומפתחים את המוצר תוך שימוש בטכנולוגיות מתקדמות',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      icon: '🔍',
      title: 'בדיקות ואופטימיזציה',
      description: 'מבצעים בדיקות מקיפות ומייעלים את הביצועים',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      borderColor: 'border-green-200'
    },
    {
      icon: '🚀',
      title: 'השקה ותמיכה',
      description: 'משיקים את המוצר ומספקים תמיכה מתמשכת',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      borderColor: 'border-orange-200'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section dir="rtl" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent">
            איך אנחנו עושים את זה?
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            התהליך שלנו מבטיח תוצאות מעולות ושקיפות מלאה לאורך כל הדרך
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative p-6 rounded-2xl ${step.color} border-2 ${step.borderColor} 
                         transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 w-8 h-0.5 bg-gray-300 -mr-8"></div>
              )}
              
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white 
                            border-2 border-primary-500 flex items-center justify-center
                            text-sm font-bold text-primary-600">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 ${step.iconBg} rounded-2xl mb-4
                             flex items-center justify-center text-3xl`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Features List */}
              <ul className="mt-4 space-y-2">
                {[1, 2, 3].map((_, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    {getFeature(index, i)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary-600 text-white rounded-xl
                       font-bold shadow-lg shadow-primary-500/30 
                       hover:bg-primary-700 transform hover:scale-105
                       transition-all duration-300"
            >
              בואו נתחיל את הפרויקט שלכם
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get features for each step
const getFeature = (stepIndex: number, featureIndex: number): string => {
  const features = {
    0: [ // Planning
      'ניתוח דרישות מפורט',
      'הגדרת יעדים ומדדי הצלחה',
      'תכנון ארכיטקטורה'
    ],
    1: [ // Development
      'עיצוב ממשק משתמש מתקדם',
      'פיתוח Full-Stack',
      'אינטגרציה עם מערכות'
    ],
    2: [ // Testing
      'בדיקות פונקציונליות',
      'אופטימיזציית ביצועים',
      'בדיקות אבטחה'
    ],
    3: [ // Launch
      'העלאה לשרתי הייצור',
      'ניטור וביצועים',
      'תמיכה טכנית מתמשכת'
    ]
  };

  return features[stepIndex as keyof typeof features][featureIndex];
};

export default Process;
