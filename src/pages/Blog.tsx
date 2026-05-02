import { useLanguage } from '../LanguageContext';
import { blogData } from '../data';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export default function Blog() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-6">
          {t('Latest Insights', 'Latest Insights')}
        </h2>
        
        <div className="space-y-6">
          {blogData.map((post, index) => {
            const d = new Date(post.date);
            const month = d.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'short' });
            const day = d.getDate();

            return (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="min-w-[60px] text-center shrink-0">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{month}</p>
                  <p className="text-lg font-black text-slate-800">{day}</p>
                </div>
                <div>
                  <Link to={`/blog`}>
                    <h4 className="font-bold text-sm text-slate-800 hover:text-indigo-600 cursor-pointer transition-colors">
                      {post.title[language]}
                    </h4>
                  </Link>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {post.summary[language]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
