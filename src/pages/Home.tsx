import { ArrowRight, Stethoscope, Mail, Download, Linkedin, MessageSquare, Github } from 'lucide-react';
import { Button, buttonVariants } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../LanguageContext';
import { cvData } from '../data';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  const { language, t } = useLanguage();
  const data = cvData[language];

  return (
    <div className="w-full">
      {/* Hero Section - SaaS Landing Style split layout */}
      <section className="relative overflow-hidden bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 min-h-[85vh] lg:h-[85vh] items-center py-16">
            
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-indigo-400 border border-slate-700 w-fit mb-6 text-xs font-semibold tracking-wide uppercase">
                <Stethoscope className="w-4 h-4" />
                <span>Health Tech & AI Innovator</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
                {data.hero.name}
              </h1>
              <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-6">
                {data.hero.title}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-xl">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Link to="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 text-base" })}>
                    {t('Contactar Ahora', 'Contact Now')}
                    <Mail className="ml-2 w-4 h-4" />
                  </Link>
                  <Link to="/resume?print=true" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 h-12 text-base border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white" })}>
                    <Download className="mr-2 w-4 h-4" />
                    {t('Imprimir CV', 'Print CV')}
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  <a href={data.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "rounded-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-[#0077b5] hover:text-white transition-colors hover:border-[#0077b5]" })}>
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a href={data.contact.redditUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "rounded-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-[#ff4500] hover:text-white transition-colors hover:border-[#ff4500]" })}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Reddit
                  </a>
                  <a href={data.contact.githubUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "rounded-full border-slate-700 bg-slate-800 text-slate-300 hover:bg-white hover:text-black transition-colors hover:border-white" })}>
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:flex justify-center items-center h-full"
            >
              {/* Abstract decorative floating cards replicating a tech interface */}
              <div className="relative w-full max-w-md">
                
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/30 rounded-full blur-[80px]"></div>

                {/* Card 1 */}
                <Card className="absolute top-10 -left-12 w-64 bg-slate-800/80 backdrop-blur border-slate-700 shadow-2xl p-4 rotate-[-4deg] animate-[float_6s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center">
                      <span className="text-indigo-400 font-mono text-xs">AI</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t('Validación LLM', 'LLM Validation')}</div>
                      <div className="text-xs text-slate-400">Medical Datasets</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-indigo-500 w-3/4 h-full rounded-full"></div>
                  </div>
                </Card>

                {/* Card 2 */}
                <Card className="absolute top-48 -right-8 w-72 bg-slate-800/80 backdrop-blur border-slate-700 shadow-2xl p-5 z-20 translate-x-4 rotate-[2deg] animate-[float_7s_ease-in-out_infinite_reverse]">
                  <h3 className="text-sm font-bold text-white mb-1"><span className="text-emerald-400">●</span> {t('Precisión Clínica', 'Clinical Precision')}</h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    {t('Experiencia en quirófano y diagnóstico especializado en ORL.', 'Operating room experience and specialized ENT diagnostics.')}
                  </p>
                </Card>

                {/* Card 3 */}
                <Card className="relative z-10 w-80 bg-slate-900 border-indigo-500/50 shadow-2xl p-6 shadow-indigo-500/10">
                  <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">{t('Áreas de Expertise', 'Areas of Expertise')}</h3>
                  <div className="space-y-3">
                    {data.skills.slice(0,4).map((skill, i) => (
                      <div key={skill} className="flex justify-between items-center text-sm">
                        <span className="text-slate-300">{skill}</span>
                        <span className="text-indigo-400 font-mono">{(98 - i*2)}%</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section - Clean Utility Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {data.valueProposition.title}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {data.valueProposition.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.valueProposition.points.map((point, i) => {
              const parts = point.split(':');
              const title = parts[0];
              const desc = parts.slice(1).join(':').trim();
              return (
                <Card key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-grow transition-transform hover:-translate-y-1 duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-indigo-50 rounded text-indigo-600 flex items-center justify-center font-bold text-xl mb-6 shadow-sm border border-indigo-100/50">
                      0{i+1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {desc}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/resume" className={buttonVariants({ variant: "link", className: "text-indigo-600 font-semibold group h-auto p-0 inline-flex items-center text-lg hover:no-underline" })}>
              {t('Ver Experiencia Completa', 'Explore Full Experience')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CSS internal for animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(auto); }
          50% { transform: translateY(-10px) rotate(auto); }
          100% { transform: translateY(0px) rotate(auto); }
        }
      `}</style>
    </div>
  );
}
