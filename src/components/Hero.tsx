import React, { useEffect, useRef } from 'react';




const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div id="hero" className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center font-heebo" dir="rtl">
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/main.mp4" type="video/mp4" />
          הדפדפן שלך אינו תומך בתג וידאו.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
          <div className="max-w-[600px] lg:max-w-[700px] 2xl:max-w-[800px]">
            <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-black text-white mb-6 leading-[1.1]">
              <span className="inline-block text-white">תשוקה אמיתית </span>
              <br />
              מתחילה בצבע{' '}
              <span 
                className="relative inline-block text-[3.5rem] lg:text-[4.2rem] 2xl:text-[5rem] font-black text-primary-500 transform translate-y-0.5 
                          [text-shadow:2px_2px_4px_rgba(152,28,28,0.7)] [-webkit-text-stroke:2px_white] 
                          [filter:drop-shadow(0_0_2px_rgba(255,255,255,0.5))]"
              >
                הנכון
              </span>
            </h1>
            <p className="text-xl lg:text-2xl 2xl:text-3xl mb-10 text-white/90 leading-relaxed font-light max-w-[90%]">
              שדרגו את הנוכחות הדיגיטלית שלכם עם הפתרונות החדשניים שלנו,
              אנחנו יוצרים אפליקציות אינטרנט ומובייל חזקות שמניעות צמיחה והצלחה.
            </p>
            <div className="flex gap-4 flex-row-reverse">
              <button className="px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg 2xl:text-xl font-medium bg-primary-500 text-white rounded-lg 
                               transition-all duration-300 backdrop-blur hover:bg-primary-600 hover:-translate-y-0.5
                               shadow-lg shadow-primary-500/20">
                בואו נתחיל
              </button>
              <button className="px-8 lg:px-10 py-3 lg:py-4 text-base lg:text-lg 2xl:text-xl font-medium bg-white/10 text-white border-2 border-white rounded-lg 
                               transition-all duration-300 backdrop-blur hover:bg-white hover:text-primary-500 hover:-translate-y-0.5
                               shadow-lg shadow-black/5">
                למידע נוסף
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
