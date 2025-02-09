import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  links?: { url: string; text: string }[];
  id: number;
}

const faqs: FAQItem[] = [
  {
    question: "אילו שירותים טכנולוגיים RED מספקת?",
    answer: "RED מציעה מגוון רחב של שירותי פיתוח טכנולוגיים, כולל: פיתוח אפליקציות מותאמות אישית, בניית אתרים מתקדמים, פתרונות e-commerce, פיתוח מערכות ניהול תוכן (CMS), אינטגרציות API, ופתרונות ענן. אנו מתמחים בטכנולוגיות החדישות ביותר תוך שימת דגש על חדשנות וביצועים מעולים.",
    id: 1,
    links: [
      { text: "צפו בפרויקטים שלנו", url: "/projects" },
      { text: "שירותים נוספים", url: "/services" }
    ]
  },
  {
    question: "כמה זמן לוקח לפתח אפליקציה או אתר?",
    answer: "משך הפיתוח משתנה בהתאם למורכבות הפרויקט. אתרים בסיסיים יכולים להיות מוכנים תוך 4-6 שבועות, בעוד שאפליקציות מורכבות עשויות להימשך 3-6 חודשים. אנו עובדים בשיטת Agile ומספקים עדכונים שוטפים ושחרורים הדרגתיים לאורך כל תהליך הפיתוח.",
    id: 2
  },
  {
    question: "באילו טכנולוגיות אתם משתמשים?",
    answer: "אנו עובדים עם מגוון טכנולוגיות מתקדמות כולל React, React Native, Node.js, Python, TypeScript, AWS, ו-Firebase. הבחירה בטכנולוגיה נעשית בהתאם לצרכי הפרויקט, תוך התחשבות בגורמים כמו ביצועים, סקלביליות, ותחזוקה לטווח ארוך.",
    id: 3,
    links: [
      { text: "המומחיות הטכנולוגית שלנו", url: "/tech-stack" }
    ]
  },
  {
    question: "מה כולל תהליך הפיתוח שלכם?",
    answer: "תהליך הפיתוח שלנו כולל: אפיון מעמיק של הדרישות, תכנון ארכיטקטורה, עיצוב UI/UX, פיתוח, בדיקות איכות, והטמעה. אנו מספקים ליווי צמוד לאורך כל הדרך, כולל תמיכה טכנית ותחזוקה שוטפת לאחר ההשקה.",
    id: 4
  },
  {
    question: "איך מתחילים פרויקט עם RED?",
    answer: "התהליך מתחיל בפגישת ייעוץ טכנולוגית בה נבין את הצרכים והמטרות שלכם. לאחר מכן, נגבש הצעה מפורטת הכוללת אפיון טכני, לוחות זמנים ותקציב. ברגע שנגיע להסכמה, נתחיל בתהליך האפיון המפורט והפיתוח.",
    id: 5,
    links: [
      { text: "קביעת פגישת ייעוץ", url: "/contact" }
    ]
  },
  {
    question: "האם אתם מספקים תמיכה לאחר ההשקה?",
    answer: "כן, אנו מציעים חבילות תמיכה ותחזוקה מקיפות הכוללות: ניטור ביצועים, עדכוני אבטחה, גיבויים, תיקון באגים, ושדרוגים. הצוות שלנו זמין 24/7 לטיפול בכל בעיה טכנית שעולה.",
    id: 6
  },
  {
    question: "האם אתם מפתחים גם לסטארטאפים?",
    answer: "בהחלט! יש לנו ניסיון רב בעבודה עם סטארטאפים, החל מפיתוח MVP ועד למוצר מלא. אנו מבינים את הצורך בגמישות ומהירות, ומציעים פתרונות מותאמים לתקציב ולצרכים המשתנים של סטארטאפים.",
    id: 7
  },
  {
    question: "מה מייחד את RED מחברות פיתוח אחרות?",
    answer: "המומחיות שלנו משלבת ידע טכנולוגי מעמיק עם הבנה עסקית. אנו מתמקדים לא רק בפיתוח, אלא גם באופטימיזציה לחוויית משתמש מעולה וביצועים גבוהים. בנוסף, אנו מציעים שירות אישי, זמינות גבוהה, ומחויבות מלאה להצלחת הפרויקט.",
    id: 8,
    links: [
      { text: "קראו עוד על הגישה שלנו", url: "/about" }
    ]
  },
  {
    question: "האם אתם מספקים שירותי UI/UX?",
    answer: "כן, יש לנו צוות מעצבי UI/UX מנוסה המתמחה בעיצוב ממשקים אינטואיטיביים ומודרניים. אנו מבצעים מחקר משתמשים, בונים פרוטוטייפים, ומתכננים חוויות משתמש מותאמות אישית שמשפרות את המעורבות והקונברסיה.",
    id: 9,
    links: [
      { text: "צפו בתיק העבודות שלנו", url: "/portfolio" }
    ]
  },
  {
    question: "איך אתם מבטיחים את איכות הקוד?",
    answer: "אנו מקפידים על סטנדרטים גבוהים של פיתוח, כולל: בדיקות אוטומטיות, code reviews, CI/CD, ותיעוד מקיף. הקוד שלנו נכתב באופן מודולרי ונקי, מה שמאפשר תחזוקה קלה ושדרוגים עתידיים.",
    id: 10,
    links: [
      { text: "תהליכי האיכות שלנו", url: "/quality" }
    ]
  }
];

const QandA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              שאלות נפוצות
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              התשובות לשאלות הנפוצות ביותר
              <span className="block mt-2 text-red-400 font-semibold drop-shadow-[0_2px_4px_rgba(248,113,113,0.4)]">
                כל מה שרציתם לדעת במקום אחד
              </span>
            </motion.p>
          </div>

          {/* Q&A Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden
                          bg-gradient-to-br from-white/[0.05] to-transparent
                          border border-white/10 backdrop-blur-sm
                          hover:from-white/[0.08] hover:to-white/[0.02]
                          transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-right p-6 flex items-center justify-between"
                  >
                    <span className="text-lg sm:text-xl font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-red-400 transform transition-transform duration-300">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-base sm:text-lg text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-200 mb-6">
              לא מצאתם את התשובה שחיפשתם?
              <span className="block text-red-400 font-semibold mt-1">
                אנחנו כאן בשבילכם
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full text-lg font-medium
                     bg-gradient-to-r from-red-500 to-red-600
                     text-white
                     transition-all duration-300
                     hover:shadow-[0_0_20px_rgba(248,113,113,0.4)]
                     shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            >
              צרו קשר
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[100px] -z-10 animate-pulse" />
    </section>
  );
};

export default QandA;
