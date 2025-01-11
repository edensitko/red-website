import React from 'react';

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
    description: 'פתרונות תוכנה חדשניים המותאמים לצרכים הייחודיים של העסק שלך',
    benefits: [
      'טכנולוגיות מתקדמות',
      'התאמה אישית מלאה',
      'ביצועים מהירים',
      'אבטחה מתקדמת'
    ],
    icon: '💻',
    gradient: 'from-green-300 via-yellow-300 to-orange-300'
  },
  {
    title: 'עיצוב חווית משתמש',
    description: 'עיצוב ממשק משתמש מודרני ואינטואיטיבי שמספק חוויה מעולה',
    benefits: [
      'עיצוב מותאם אישית',
      'חוויית משתמש מעולה',
      'נגישות מלאה',
      'תמיכה בכל המכשירים'
    ],
    icon: '🎨',
    gradient: 'from-red-300 via-orange-300 to-pink-300'
  },
  {
    title: 'אינטגרציה עם AI',
    description: 'שילוב טכנולוגיות בינה מלאכותית מתקדמות לייעול תהליכים',
    benefits: [
      'למידת מכונה',
      'אוטומציה חכמה',
      'תובנות עסקיות',
      'התאמה אישית'
    ],
    icon: '🤖',
    gradient: 'from-green-300 via-teal-300 to-blue-300'
  }
];

const Features: React.FC = () => {
  return (
    <section className="relative py-32 bg-primary-950 overflow-hidden " dir="rtl" >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient Orbs */}
        {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-500/30 to-pink-500/30 rounded-full blur-3xl" /> */}
        
        {/* Grid Pattern */}
        
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#ffffff10,transparent)]" />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-primary-950/80 to-primary-950/50" />
      </div>

      <div className="relative max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-black mb-4
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent
                       tracking-tight">
            הפתרונות שלנו
          </h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            אנחנו מציעים מגוון פתרונות דיגיטליים מתקדמים 
            <span className="block mt-1 text-primary-500">
              שיעזרו לעסק שלך לצמוח ולהתפתח
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} 
                 className="group relative bg-primary-100/40 rounded-3xl 
                          transition-all duration-500 hover:-translate-y-2 overflow-hidden
                          hover:bg-primary-100/80">
              {/* Card Header with Icon */}
              <div className={`h-32 flex items-center justify-center bg-gradient-to-r ${feature.gradient} 
                           relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-6xl transform transition-all duration-300 
                            group-hover:scale-110 group-hover:-rotate-12">
                  {feature.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-black/90 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} 
                        className="flex items-center text-black/80 transition-colors duration-300
                                 hover:text-black transform hover:translate-x-2">
                      <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary-300 
                                   to-primary-600 rounded-lg mr-3 shadow-lg shadow-primary-500/20">
                        ✓
                      </span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Border */}
              <div className="absolute inset-0 border border-black/10 rounded-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
