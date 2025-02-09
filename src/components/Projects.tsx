import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { textStyles, cardStyles, animationVariants } from '../styles/design-system';

const projects = [
  {
    title: 'פלטפורמת מסחר אלקטרוני',
    description: 'פלטפורמת מסחר מודרנית שנבנתה עם React ו-Node.js, כוללת ניהול מלאי בזמן אמת ועיבוד תשלומים מאובטח.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    category: 'web'
  },
  {
    title: 'אפליקציית בריאות',
    description: 'מערכת ניהול בריאות מקיפה המסייעת למרפאות ובתי חולים לייעל את פעילותם.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    category: 'mobile'
  },
  {
    title: 'ניתוח נתונים מבוסס AI',
    description: 'לוח מחוונים אנליטי המשתמש בלמידת מכונה כדי לספק תובנות ותחזיות למדדים עסקיים.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    link: '#',
    category: 'data'
  },
  {
    title: 'מערכת בית חכם',
    description: 'מערכת אוטומציה לבית חכם מבוססת IoT עם שליטה קולית ותכונות אופטימיזציה של אנרגיה.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60',
    tags: ['IoT', 'Python', 'React', 'AWS IoT'],
    link: '#',
    category: 'iot'
  },
  {
    title: 'פלטפורמת מדיה חברתית',
    description: 'פלטפורמת רשת חברתית מודרנית עם יכולות הודעות מיידיות ושיתוף תוכן בזמן אמת.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'Socket.io', 'Redis'],
    link: '#',
    category: 'web'
  },
  {
    title: 'פתרון פינטק',
    description: 'פלטפורמת טכנולוגיה פיננסית מאובטחת לתשלומים דיגיטליים ועסקאות מטבע קריפטוגרפי.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60',
    tags: ['Blockchain', 'Node.js', 'React', 'PostgreSQL'],
    link: '#',
    category: 'fintech'
  }
];

const categories = ['הכל', 'web', 'mobile', 'data', 'iot', 'fintech'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === 'הכל' || project.category === selectedCategory
  );

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
          {/* Header Section */}
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
              הפרויקטים שלנו
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              הצצה לחלק מהפרויקטים שביצענו
              <span className="block mt-2 text-red-400 font-semibold drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                פתרונות מותאמים אישית ללקוחות מרוצים
              </span>
            </motion.p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-red-500/30 text-white border-2 border-red-500/50 shadow-[0_0_15px_rgba(248,113,113,0.3)]'
                    : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/40 hover:bg-white/5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative"
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative bg-gradient-to-br from-white/[0.15] to-transparent 
                                 backdrop-blur-xl rounded-2xl
                                 border border-white/20
                                 transition-all duration-500
                                 group-hover:border-red-500/40
                                 group-hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]
                                 overflow-hidden
                                 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700
                                 group-hover:scale-110"
                      />
                      {/* Overlay Content */}
                      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white mb-2 
                                   transform transition-transform duration-500
                                   group-hover:-translate-y-2
                                   drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm transform transition-all duration-500
                                  opacity-0 group-hover:opacity-100 group-hover:-translate-y-2
                                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="p-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full text-sm 
                                   bg-red-500/20 text-white
                                   border border-red-500/30
                                   shadow-[0_2px_8px_rgba(248,113,113,0.2)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Projects;
