import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '🚀',
      title: 'פריצת דרך דיגיטלית',
      description:
        'הפכו את העסק שלכם למוביל בעידן הדיגיטלי עם פתרונות AI מתקדמים',
    },
    {
      icon: '💡',
      title: 'חדשנות ללא גבולות',
      description: 'פתרונות טכנולוגיים מותאמים אישית לצרכי העסק שלכם',
    },
    {
      icon: '🎯',
      title: 'תוצאות מוכחות',
      description: 'שיפור משמעותי בביצועים ובחווית המשתמש',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full py-10 overflow-hidden" dir="rtl">
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 lg:px-8 backdrop-blur-3xl bg-white/5 rounded-2xl border border-white/10 shadow-xl p-8">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-black mb-4
                              bg-gradient-to-r from-white via-red-200 to-red-300 
                              bg-clip-text text-transparent
                              tracking-tight">
                  בואו נבנה משהו מדהים ביחד
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  אנחנו כאן כדי להפוך את החזון שלכם למציאות עם פתרונות דיגיטליים חדשניים
                </p>
              </div>

              {/* Animated Features */}
              <div className="relative h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-4xl">{features[activeFeature].icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-gray-300">
                          {features[activeFeature].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Feature Indicators */}
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeFeature
                        ? 'w-8 bg-red-400'
                        : 'bg-white/20 hover:bg-red-400/50'
                    }`}
                    aria-label={`Go to feature ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        שם מלא
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-white/10 rounded-xl
                                 text-white placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-colors duration-200"
                        placeholder="הכנס את שמך"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        טלפון
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-white/10 rounded-xl
                                 text-white placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-colors duration-200"
                        placeholder="הכנס את מספר הטלפון שלך"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-red-500 text-white rounded-xl
                               hover:bg-red-600 transition-colors duration-300
                               shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30"
                    >
                      קבל ייעוץ חינם
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-8"
                  >
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-2">תודה על פנייתך!</h3>
                    <p className="text-gray-300">נציג שלנו יחזור אליך בהקדם</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;