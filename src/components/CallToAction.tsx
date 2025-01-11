import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
}

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full flex justify-center mb-20">
      <section className="w-[800px] max-w-[95%] mt-[-50px] p-6 lg:p-8 rounded-2xl z-10
                      bg-gradient-to-br from-primary-500 to-primary-800 
                      shadow-[0_10px_50px_-12px_rgba(139,0,0,0.4)] 
                      hover:shadow-[0_20px_80px_-12px_rgba(139,0,0,0.5)]
                      transition-all duration-500 relative
                      border border-white/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-400/20 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary-800/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
        
        <div className="relative">
          <div className="text-center">
            <div className="inline-block">
              <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-black mb-2 bg-gradient-to-r from-white via-red-50 to-white bg-clip-text text-transparent
                         relative z-10 tracking-tight">
                רוצים להתשתדRED?
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-50"></div>
              </h2>
            </div>
            <p className="text-sm lg:text-base 2xl:text-lg leading-relaxed mt-4 mb-6 text-white/90 max-w-xl mx-auto">
              בואו להיות חלק ממהפכת הבינה המלאכותית שלנו
              <span className="block mt-1 text-primary-200">אנחנו נדאג לכם להכל, לכם רק נשאר להשאיר פרטים</span>
            </p>

            <form onSubmit={handleSubmit} 
                  className="max-w-2xl mx-auto p-4 rounded-xl
                          bg-gradient-to-b from-white/[0.15] to-white/[0.05]
                          border border-white/20 backdrop-blur-sm
                          shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="שם מלא"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 text-sm text-white bg-white/10 rounded-lg 
                          border-2 border-white/20 transition-all duration-300
                          placeholder:text-white/40 outline-none
                          focus:border-white/40 focus:bg-white/20
                          hover:border-white/30"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="מספר טלפון"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 text-sm text-white bg-white/10 rounded-lg 
                          border-2 border-white/20 transition-all duration-300
                          placeholder:text-white/40 outline-none
                          focus:border-white/40 focus:bg-white/20
                          hover:border-white/30"
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 px-4 text-sm font-medium rounded-lg transition-all duration-300
                          bg-white text-primary-600
                          hover:bg-primary-50 hover:-translate-y-0.5 
                          hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)]
                          active:translate-y-0 active:shadow-none
                          border-2 border-transparent
                          focus:outline-none focus:border-white/40"
                >
                  קבל הצעת מחיר
                </button>
              </div>
              <p className="text-xs mt-3 text-white/70">
                נחזור אליך תוך 24 שעות עם הצעה מותאמת אישית לצרכים שלך
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
