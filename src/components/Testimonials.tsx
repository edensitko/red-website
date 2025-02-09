import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar, FaLinkedin, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'דניאל כהן',
    role: 'מנכ״ל TechFlow',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    content: 'שיתוף הפעולה עם RED היה מדהים. הצוות המקצועי שלהם עזר לנו להפוך את החזון שלנו למציאות עם פתרון דיגיטלי מושלם.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'פיתוח אפליקציה',
  },
  {
    id: 2,
    name: 'מיכל לוי',
    role: 'סמנכ״לית שיווק HealthTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    content: 'התוצאות שקיבלנו מהשירותים של RED עלו על כל הציפיות. האתר החדש שלנו לא רק נראה מדהים, אלא גם הביא לעלייה משמעותית בהמרות.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'עיצוב ופיתוח אתר',
  },
  {
    id: 3,
    name: 'אלון ברק',
    role: 'מייסד StartupPro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    content: 'הבוט שRED פיתחו עבורנו שינה את כל מערך שירות הלקוחות שלנו. החיסכון בזמן ובמשאבים הוא עצום, והלקוחות מרוצים יותר.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'פיתוח בוט AI',
  },
  {
    id: 4,
    name: 'שירה גולן',
    role: 'מנהלת תפעול FoodTech',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    content: 'המערכת האוטומטית שRED פיתחו עבורנו חסכה לנו שעות רבות של עבודה ידנית. היכולת שלהם להבין את הצרכים שלנו ולתרגם אותם לפתרון טכנולוגי היא יוצאת דופן.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'אוטומציה של תהליכים',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

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
              מה הלקוחות אומרים
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              הסיפורים של הלקוחות שלנו
              <span className="block mt-2 text-red-400 font-semibold drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                ההצלחה שלהם היא ההצלחה שלנו
              </span>
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative p-8 rounded-2xl 
                              bg-gradient-to-br from-white/[0.05] to-transparent
                              border border-white/10 backdrop-blur-sm
                              hover:from-white/[0.08] hover:to-white/[0.02]
                              transition-all duration-300 transform hover:scale-[1.02]
                              h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-4xl text-red-500/20">
                    "
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <p className="text-base sm:text-lg text-gray-300 mb-6 mt-4">
                      {testimonial.content}
                    </p>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full object-cover border-2 border-red-500/20"
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      </div>
                      <div className="mr-4">
                        <div className="text-base font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {testimonial.role}
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 drop-shadow-[0_2px_4px_rgba(234,179,8,0.4)]" />
                          ))}
                        </div>
                        <a
                          href={testimonial.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mt-2
                                   hover:shadow-[0_0_10px_rgba(248,113,113,0.2)]"
                        >
                          <FaLinkedin className="text-lg" />
                          <span className="font-medium">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Testimonials;
