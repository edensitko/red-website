import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'מהפכת AI: איך טכנולוגיה חדשנית משנה את עולם העסקים',
      excerpt: 'סקירה מעמיקה על השפעת בינה מלאכותית על תהליכי עבודה וחדשנות בארגונים',
      author: 'אדן סיטקובצקי',
      date: 'פברואר 2025',
      readTime: '5 דקות קריאה',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpPzoK8n6VvNolqguSrb7NcdS7psfCtV_D9g&s',
      tags: ['AI', 'טכנולוגיה', 'חדשנות']
    },
    {
      id: 2,
      title: 'עיצוב UX: המפתח להצלחה דיגיטלית',
      excerpt: 'טיפים וטרנדים מובילים בעיצוב חוויית משתמש שיהפכו את האתר שלכם למוביל בתחום',
      author: 'מיכל כהן',
      date: 'ינואר 2025',
      readTime: '4 דקות קריאה',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHxrvF5Q3q4YPXSHcpuzBB_PnAfZx_bT1mQ&s',
      tags: ['UX', 'עיצוב', 'דיגיטל']
    },
    {
      id: 3,
      title: 'אסטרטגיות שיווק דיגיטלי בעידן המודרני',
      excerpt: 'כיצד לבנות אסטרטגיית שיווק דיגיטלי אפקטיבית שתגדיל את החשיפה והמכירות',
      author: 'דני גולדשטיין',
      date: 'דצמבר 2024',
      readTime: '6 דקות קריאה',
      imageUrl: 'data:image/jpeg;base64,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',
      tags: ['שיווק', 'דיגיטל', 'אסטרטגיה']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the indices for left, center, and right posts based on currentIndex
  const getCarouselIndices = () => {
    const total = blogPosts.length;
    const leftIndex = (currentIndex + total - 1) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;
    return [leftIndex, centerIndex, rightIndex];
  };

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? blogPosts.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= blogPosts.length ? 0 : prev + 1
    );
  };

  // 3D transform variants for each card position
  const cardVariants = (position: 'left' | 'center' | 'right') => {
    switch (position) {
      case 'left':
        return {
          initial: { opacity: 0, scale: 0.9, x: -200, rotateY: 45 },
          animate: {
            opacity: 1,
            scale: 0.9,
            x: -150,
            rotateY: 15,
            transition: { type: 'spring', stiffness: 200 }
          },
          exit: { opacity: 0, scale: 0.9, x: -200, rotateY: 45 }
        };
      case 'center':
        return {
          initial: { opacity: 0, scale: 0.8, x: 0, rotateY: 0 },
          animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            rotateY: 0,
            transition: { type: 'spring', stiffness: 200 }
          },
          exit: { opacity: 0, scale: 0.8, x: 0, rotateY: 0 }
        };
      case 'right':
      default:
        return {
          initial: { opacity: 0, scale: 0.9, x: 200, rotateY: -45 },
          animate: {
            opacity: 1,
            scale: 0.9,
            x: 150,
            rotateY: -15,
            transition: { type: 'spring', stiffness: 200 }
          },
          exit: { opacity: 0, scale: 0.9, x: 200, rotateY: -45 }
        };
    }
  };

  const [leftIndex, centerIndex, rightIndex] = getCarouselIndices();

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
              הבלוג שלנו
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              מאמרים וטיפים מקצועיים
              <span className="block mt-2 text-red-400 font-semibold drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                הישארו מעודכנים בחדשות ובטרנדים האחרונים
              </span>
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white/[0.15] to-transparent 
                             backdrop-blur-xl rounded-2xl
                             border border-white/20
                             transition-all duration-500
                             hover:border-red-500/40
                             hover:shadow-[0_0_30px_rgba(248,113,113,0.2)]
                             shadow-[0_4px_16px_rgba(0,0,0,0.3)]
                             overflow-hidden">
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-700
                               group-hover:scale-110"
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1.5 rounded-full text-sm 
                                   bg-red-500/20 text-white
                                   border border-red-500/30
                                   shadow-[0_2px_8px_rgba(248,113,113,0.2)]">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 
                                 group-hover:-translate-y-1 transition-transform duration-300
                                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {post.title}
                    </h3>
                    <p className="text-gray-200 mb-4 line-clamp-2
                               drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <img
                          src="https://via.placeholder.com/40"
                          alt={post.author}
                          className="w-8 h-8 rounded-full border border-white/20
                                   shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                        />
                        <span className="text-gray-300">{post.author}</span>
                      </div>
                      <span className="text-red-400 font-medium drop-shadow-[0_1px_2px_rgba(248,113,113,0.4)]">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="px-6 pb-6 pt-0">
                    <Link to={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 
                                 transition-colors font-medium
                                 group-hover:translate-x-1 duration-300
                                 drop-shadow-[0_1px_2px_rgba(248,113,113,0.4)]"
                      >
                        קרא עוד
                        <FaArrowLeft className="text-sm" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link to="/blog">
              <a
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                       bg-gradient-to-r from-red-500/20 to-red-500/10
                       backdrop-blur-xl border border-red-500/30
                       text-white font-medium
                       transition-all duration-300
                       hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]
                       shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
              >
                לכל המאמרים
                <FaArrowLeft className="text-sm" />
              </a>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default Blog;
