import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'פלטפורמת מסחר אלקטרוני',
      description: 'פלטפורמת מסחר מודרנית שנבנתה עם React ו-Node.js, כוללת ניהול מלאי בזמן אמת ועיבוד תשלומים מאובטח.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      title: 'אפליקציית בריאות',
      description: 'מערכת ניהול בריאות מקיפה המסייעת למרפאות ובתי חולים לייעל את פעילותם.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      link: '#'
    },
    {
      title: 'ניתוח נתונים מבוסס AI',
      description: 'לוח מחוונים אנליטי המשתמש בלמידת מכונה כדי לספק תובנות ותחזיות למדדים עסקיים.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      technologies: ['Python', 'TensorFlow', 'React', 'AWS'],
      link: '#'
    },
    {
      title: 'מערכת בית חכם',
      description: 'מערכת אוטומציה לבית חכם מבוססת IoT עם שליטה קולית ותכונות אופטימיזציה של אנרגיה.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60',
      technologies: ['IoT', 'Python', 'React', 'AWS IoT'],
      link: '#'
    },
    {
      title: 'פלטפורמת מדיה חברתית',
      description: 'פלטפורמת רשת חברתית מודרנית עם יכולות הודעות מיידיות ושיתוף תוכן בזמן אמת.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60',
      technologies: ['React', 'Node.js', 'Socket.io', 'Redis'],
      link: '#'
    },
    {
      title: 'פתרון פינטק',
      description: 'פלטפורמת טכנולוגיה פיננסית מאובטחת לתשלומים דיגיטליים ועסקאות מטבע קריפטוגרפי.',
      image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60',
      technologies: ['Blockchain', 'Node.js', 'React', 'PostgreSQL'],
      link: '#'
    }
  ];

  const [mainIndex, setMainIndex] = useState(0);
  const [, setDirection] = useState(0);

  const getVisibleProjects = () => {
    const total = projects.length;
    return {
      main: projects[mainIndex],
      right: [
        projects[(mainIndex + 1) % total],
        projects[(mainIndex + 2) % total]
        
      ]
    };
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setMainIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { main, right } = getVisibleProjects();

  return (
    <section id="projects" dir="rtl" className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black mb-3
                       bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 
                       bg-clip-text text-transparent
                       tracking-tight">
            הפרויקטים שלנו
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            גלו את הפרויקטים האחרונים שלנו
            <span className="block mt-1 text-primary-500">
              ותראו איך אנחנו יכולים לעזור גם לכם
            </span>
          </p>
        </div>

        <div className="relative flex flex-row-reverse gap-4 h-[400px]">
          {/* Main Project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mainIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="w-2/3 h-full"
            >
              <div className="h-full bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.01]">
                <div className="relative h-[55%]">
                  <div className="absolute inset-0 bg-primary-600/20"></div>
                  <img 
                    src={main.image} 
                    alt={main.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 text-right">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {main.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {main.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {main.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {main.link && (
                    <a 
                      href={main.link}
                      className="inline-block px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg font-bold hover:bg-primary-700 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      צפה בפרויקט
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side Projects */}
          <div className="w-1/3 space-y-3">
            {right.map((project, index) => (
              <motion.div
                key={`${mainIndex}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setMainIndex((mainIndex + index + 1) % projects.length)}
              >
                <div className="flex flex-row-reverse h-[100px]">
                  <div className="w-1/3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-3 text-right">
                    <h4 className="font-bold text-gray-800 mb-1 text-sm line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > mainIndex ? 1 : -1);
                  setMainIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  index === mainIndex 
                    ? 'w-4 bg-primary-600' 
                    : 'bg-primary-200 hover:bg-primary-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
