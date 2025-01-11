import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="relative max-w-[1400px] 2xl:max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-black mb-4
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent
                       tracking-tight">
            קצת עלינו
          </h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            הכירו את הצוות שעומד מאחורי המהפכה הדיגיטלית
            <span className="block mt-1 text-primary-500">
              ומוביל את החדשנות בתחום הבינה המלאכותית
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex items-center justify-center p-8">
            <div className="relative w-full aspect-square max-w-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-primary-500/10 to-transparent rounded-full"></div>
              <img 
                src="r copy.png" 
                alt="Red Logo" 
                className="w-full h-full object-contain animate-float"
              />
            </div>
          </div>

          <div className="space-y-6 text-right">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                מי אנחנו?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                אנחנו צוות של מומחי בינה מלאכותית ופיתוח תוכנה, עם ניסיון עשיר בהובלת פרויקטים דיגיטליים מורכבים. המטרה שלנו היא להפוך את הטכנולוגיה המתקדמת ביותר לנגישה ושימושית עבור העסק שלך.
              </p>
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">
                החזון שלנו
              </h3>
              <p className="text-gray-600 leading-relaxed">
                אנחנו מאמינים שכל עסק יכול להפוך לחדשני ומתקדם טכנולוגית. החזון שלנו הוא להוביל את המהפכה הדיגיטלית ולעזור לעסקים להתפתח באמצעות פתרונות AI חכמים ומותאמים אישית.
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="text-right pt-4">
                    <div className="text-4xl font-black text-primary-600 mb-2">+100</div>
                    <div className="text-gray-600 font-medium">פרויקטים מוצלחים</div>
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">😊</span>
                  </div>
                  <div className="text-right pt-4">
                    <div className="text-4xl font-black text-primary-600 mb-2">98%</div>
                    <div className="text-gray-600 font-medium">לקוחות מרוצים</div>
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div className="text-right pt-4">
                    <div className="text-4xl font-black text-primary-600 mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">תמיכה זמינה</div>
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white shadow-lg border border-primary-100 transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-6 -mr-6 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="text-right pt-4">
                    <div className="text-4xl font-black text-primary-600 mb-2">50+</div>
                    <div className="text-gray-600 font-medium">לקוחות פעילים</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
