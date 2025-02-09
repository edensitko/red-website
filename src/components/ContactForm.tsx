import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textStyles, cardStyles, animationVariants } from '../styles/design-system';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    projectType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: '',
        projectType: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📱',
      title: 'טלפון',
      value: '+972-50-000-0000',
      link: 'tel:+972500000000'
    },
    {
      icon: '✉️',
      title: 'אימייל',
      value: 'info@red.co.il',
      link: 'mailto:info@red.co.il'
    },
    {
      icon: '📍',
      title: 'כתובת',
      value: 'תל אביב, ישראל',
      link: 'https://maps.google.com/?q=Tel+Aviv'
    }
  ];

  const inputClasses = `w-full px-4 py-3 bg-white/[0.03] border border-white/10 
    rounded-xl text-white placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500/20
    transition-all duration-300 hover:bg-white/[0.05]
    backdrop-blur-sm`;

  const buttonStyles = {
    primary: `px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 
              text-white font-semibold rounded-xl
              transform transition-all duration-300
              hover:from-red-600 hover:to-red-700
              active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
              shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30
              focus:outline-none focus:ring-2 focus:ring-red-500/20`,
  };

  return (
    <section className="relative w-full py-10 overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(#fff_30%,transparent)]">
        <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(to_right,theme(colors.red.400)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.red.500)_1px,transparent_1px)]" />
      </div>
      

      <div className="relative  w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 lg:px-8 py-8 
          bg-gradient-to-br from-white/[0.07] to-white/[0.03]
          backdrop-blur-xl 
          rounded-3xl 
          border border-white/10
          shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]
          overflow-hidden">
          
          {/* Frosted Glass Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5" />
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <motion.h2
                variants={animationVariants.fadeUp}
                className="text-5xl lg:text-6xl 2xl:text-7xl font-black mb-6
                          bg-gradient-to-r from-white via-red-200 to-red-300 
                          bg-clip-text text-transparent
                          tracking-tight drop-shadow-[0_2px_4px_rgba(99,102,241,0.5)]"
              >
                צור קשר
              </motion.h2>
              <motion.p
                variants={animationVariants.fadeUp}
                className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                נשמח לשמוע על הפרויקט שלך
                <span className="block mt-2 text-2xl bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent font-semibold">
                  ולעזור לך להפוך אותו למציאות
                </span>
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start px-4 lg:px-8">
              {/* Contact Form */}
              <motion.div
                variants={animationVariants.fadeUp}
                className="lg:col-span-3 bg-white/[0.03] p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        שם מלא
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="השם שלך"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        אימייל
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="האימייל שלך"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        טלפון
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="הטלפון שלך"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        חברה
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                        placeholder="שם החברה"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                      סוג הפרויקט
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">בחר סוג פרויקט</option>
                      <option value="website">אתר אינטרנט</option>
                      <option value="webapp">אפליקציית ווב</option>
                      <option value="mobileapp">אפליקציית מובייל</option>
                      <option value="ecommerce">חנות אונליין</option>
                      <option value="other">אחר</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      תקציב משוער
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">בחר תקציב</option>
                      <option value="10k-20k">₪10,000 - ₪20,000</option>
                      <option value="20k-50k">₪20,000 - ₪50,000</option>
                      <option value="50k-100k">₪50,000 - ₪100,000</option>
                      <option value="100k+">₪100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      פרטי הפרויקט
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={inputClasses}
                      placeholder="ספר לנו על הפרויקט שלך..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={buttonStyles.primary}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          שולח...
                        </span>
                      ) : (
                        'שלח פנייה'
                      )}
                    </button>
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
                    >
                      הטופס נשלח בהצלחה! נחזור אליך בהקדם.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
                    >
                      אירעה שגיאה בשליחת הטופס. אנא נסה שוב.
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={animationVariants.fadeUp}
                className="lg:col-span-2 space-y-8"
              >
                {/* Contact Details Card */}
                <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    פרטי התקשרות
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl 
                                 bg-gradient-to-r from-white/[0.05] to-transparent
                                 hover:from-white/[0.08] hover:to-white/[0.02]
                                 border border-white/5
                                 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <span className="text-2xl text-red-400">{info.icon}</span>
                        <div>
                          <div className="text-sm text-gray-400">{info.title}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Social Links Card */}
                <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    עקבו אחרינו
                  </h3>
                  <div className="flex gap-4">
                    {/* Social Icons */}
                    <motion.a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent
                               hover:from-white/[0.08] hover:to-white/[0.02]
                               border border-white/5
                               transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent
                               hover:from-white/[0.08] hover:to-white/[0.02]
                               border border-white/5
                               transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent
                               hover:from-white/[0.08] hover:to-white/[0.02]
                               border border-white/5
                               transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
