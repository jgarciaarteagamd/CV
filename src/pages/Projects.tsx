import { useLanguage } from '../LanguageContext';
import { projectsData } from '../data';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Bot, Code2, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import audiometricImg from '../AudiometricReport.png';

const ProjectImages: Record<string, string> = {
  audiometric: audiometricImg
};

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            {t('Proyectos Destacados', 'Featured Projects')}
          </h2>
        </div>
        <p className="text-sm text-slate-500 mb-8 max-w-3xl">
          {t('Una selección de herramientas ofimáticas y desarrollos orientados a optimizar flujos clínicos mediante tecnología, datos e Inteligencia Artificial.', 'A selection of office tools and developments aimed at optimizing clinical workflows through technology, data, and Artificial Intelligence.')}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 flex flex-col h-full"
            >
              <div className="h-40 bg-indigo-50 flex items-center justify-center transition-colors group-hover:bg-indigo-100 overflow-hidden">
                {'imageId' in project && project.imageId && ProjectImages[project.imageId] ? (
                   <img 
                     src={ProjectImages[project.imageId]} 
                     alt={project.title[language as keyof typeof project.title]} 
                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                   />
                ) : (
                  index % 2 === 0 ? <Code2 className="w-12 h-12 text-indigo-400 group-hover:text-indigo-500 transition-colors" /> : <Bot className="w-12 h-12 text-indigo-400 group-hover:text-indigo-500 transition-colors" />
                )}
              </div>
              <div className="p-4 flex-grow">
                <div className="flex justify-between items-start mb-1 w-full">
                  {'link' in project && project.link ? (
                    <a href={project.link as string} target="_blank" rel="noreferrer" className="flex justify-between w-full items-start group">
                      <h4 className="font-bold text-sm text-slate-800 group-hover:text-indigo-600 transition-colors">{project.title[language as keyof typeof project.title]}</h4>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </a>
                  ) : (
                    <>
                      <h4 className="font-bold text-sm text-slate-800">{project.title[language as keyof typeof project.title]}</h4>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                    </>
                  )}
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {project.description[language]}
                </p>
              </div>
              <div className="p-4 border-t border-slate-200 flex justify-between items-center">
                <span className="text-[10px] text-indigo-600 font-mono tracking-tighter uppercase">
                  {project.tech.join(' / ')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
