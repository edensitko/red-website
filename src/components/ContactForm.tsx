import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  const projectTypes = [
    {
      id: 'website',
      name: 'אתר תדמית',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 'ecommerce',
      name: 'חנות אונליין',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      id: 'app',
      name: 'אפליקציה',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'system',
      name: 'מערכת ניהול',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 'other',
      name: 'אחר',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      )
    }
  ];

  const InputWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 bg-primary-50 rounded-full"
          >
            <span className="text-sm font-bold text-primary-600">
              בואו נדבר על הפרויקט שלכם 🚀
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-4
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent">
            צרו איתנו קשר
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            מלאו את הטופס ונחזור אליכם תוך 24 שעות עם הצעה מותאמת אישית
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <InputWrapper>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        focused === 'name' ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-200'
                      } focus:outline-none transition-all duration-200`}
                      placeholder="שם מלא"
                      required
                    />
                  </div>
                </InputWrapper>

                <InputWrapper>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        focused === 'email' ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-200'
                      } focus:outline-none transition-all duration-200`}
                      placeholder="אימייל"
                      required
                    />
                  </div>
                </InputWrapper>

                <InputWrapper>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        focused === 'phone' ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-200'
                      } focus:outline-none transition-all duration-200`}
                      placeholder="טלפון"
                      required
                    />
                  </div>
                </InputWrapper>

                <InputWrapper>
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      אני מתעניין/ת ב:
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {projectTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                          className={`p-4 rounded-xl border ${
                            formData.projectType === type.id 
                              ? 'border-primary-500 bg-primary-50 text-primary-700' 
                              : 'border-gray-200 hover:border-primary-200 hover:bg-gray-50'
                          } transition-all duration-200 flex flex-col items-center gap-2 text-center`}
                        >
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            formData.projectType === type.id 
                              ? 'bg-primary-100 text-primary-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {type.icon}
                          </div>
                          <span className="text-sm font-medium">{type.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </InputWrapper>

                <InputWrapper>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      focused === 'message' ? 'border-primary-500 ring-2 ring-primary-500/20' : 'border-gray-200'
                    } focus:outline-none transition-all duration-200 min-h-[120px] resize-y`}
                    placeholder="ספרו לנו על הפרויקט שלכם (אופציונלי)"
                  />
                </InputWrapper>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-primary-500
                         text-white font-bold rounded-xl shadow-lg shadow-primary-500/30
                         hover:shadow-xl hover:shadow-primary-500/40 
                         active:shadow-md transition-all duration-200"
                type="submit"
              >
                שליחה
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8 space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
              <div className="space-y-4">
                <a href="tel:+972123456789" className="flex items-center gap-4 p-4 rounded-xl
                                                    hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">טלפון</div>
                    <div className="text-gray-600">+972-123-456-789</div>
                  </div>
                </a>

                <a href="mailto:info@example.com" className="flex items-center gap-4 p-4 rounded-xl
                                                         hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">אימייל</div>
                    <div className="text-gray-600">info@example.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">כתובת</div>
                    <div className="text-gray-600">תל אביב, ישראל</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">שעות פעילות</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ראשון - חמישי</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">שישי</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">שבת</span>
                  <span className="font-medium">סגור</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2
                       bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg"
            >
              הטופס נשלח בהצלחה! נחזור אליכם בהקדם
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
