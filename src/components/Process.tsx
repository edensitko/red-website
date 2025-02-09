import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles, animationVariants } from '../styles/design-system';

const Process: React.FC = () => {
  const steps = [
    {
      icon: '🎯',
      title: 'אפיון ותכנון',
      description: 'מנתחים את הצרכים שלכם ומתכננים פתרון מותאם אישית'
    },
    {
      icon: '💡',
      title: 'עיצוב ופיתוח',
      description: 'מעצבים ומפתחים את המוצר תוך שימוש בטכנולוגיות מתקדמות'
    },
    {
      icon: '🔍',
      title: 'בדיקות ואופטימיזציה',
      description: 'מבצעים בדיקות מקיפות ומייעלים את הביצועים'
    },
    {
      icon: '🚀',
      title: 'השקה ותמיכה',
      description: 'משיקים את המוצר ומספקים תמיכה מתמשכת'
    }
  ];

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
        {/* Main Container with Glassmorphic Effect */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 w-full max-w-6xl mx-auto px-4 lg:px-8 py-12
                   bg-gradient-to-br from-white/[0.12] to-transparent 
                   backdrop-blur-xl rounded-3xl
                   border border-white/20
                   shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-6xl font-black mb-6
                     bg-gradient-to-r from-white via-red-200 to-red-300 
                     bg-clip-text text-transparent
                     tracking-tight drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]"
            >
              תהליך העבודה שלנו
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              איך אנחנו עובדים
              <span className="block mt-2 text-red-400 font-semibold drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                משלב הרעיון ועד לתוצאה הסופית
              </span>
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-red-500/30 via-red-500/20 to-red-500/30 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-white/[0.15] to-transparent 
                               backdrop-blur-xl rounded-2xl
                               border border-white/20
                               transition-all duration-500
                               hover:border-red-500/40
                               hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]
                               shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                               p-6">
                    {/* Step Number */}
                    <div className="absolute -top-6 right-6">
                      <div className="w-12 h-12 bg-red-500/30 rounded-full 
                                  flex items-center justify-center
                                  border border-red-500/30
                                  shadow-[0_4px_12px_rgba(248,113,113,0.3)]">
                        <span className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 text-4xl text-red-400 drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3
                               group-hover:-translate-y-1 transition-transform duration-300
                               drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {step.title}
                    </h3>
                    <p className="text-gray-200 leading-relaxed
                               drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Process;
