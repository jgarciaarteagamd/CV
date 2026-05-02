import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { cvData } from '../data';
import { Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Github, MessageSquare, Globe, Flag, Brain } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';

const Logos: Record<string, React.FC<{ className?: string }>> = {
  microsoft: ({ className }) => (
    <svg viewBox="0 0 23 23" className={className}>
      <path fill="#f35325" d="M0 0h11v11H0z" />
      <path fill="#81bc06" d="M12 0h11v11H12z" />
      <path fill="#05a6f0" d="M0 12h11v11H0z" />
      <path fill="#ffba08" d="M12 12h11v11H12z" />
    </svg>
  ),
  meetingpharma: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="12" fill="#011b33" />
      <path d="M12 4v16M5.07 8l13.86 8M18.93 8L5.07 16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  pmi: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#6c2bd9" />
      <text x="12" y="16" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">PMI</text>
    </svg>
  )
};

export default function Resume() {
  const { language, t } = useLanguage();
  const data = cvData[language as keyof typeof cvData] || cvData.en;
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('print') === 'true') {
      setTimeout(() => {
        window.print();
      }, 500);
    }
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 print:max-w-none print:p-0 print:m-0 print:bg-white">
      <div className="flex justify-end items-center mb-8 print:hidden">
        <button 
          onClick={() => window.print()} 
          className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm rounded-full px-6 h-10 text-sm"
        >
          {t('Imprimir Currículum', 'Print CV')}
        </button>
      </div>

      {/* Print Header */}
      <div className="hidden print:flex flex-col border-b border-slate-300 pb-6 mb-6">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2 tracking-tight">
          {data.hero.name}
        </h1>
        <h2 className="text-lg text-slate-600 font-medium mb-4">{data.hero.title}</h2>
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 font-mono tracking-tight items-center justify-center">
          <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-indigo-600" /> {data.contact.email}</span>
          <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-indigo-600" /> {data.contact.phone}</span>
          <span className="flex items-center gap-1"><Globe className="w-4 h-4 text-indigo-600" /> {data.contact.websiteUrl.replace("https://", "")}</span>
          <span className="flex items-center gap-1 print:hidden"><Flag className="w-4 h-4 text-indigo-600" /> {data.contact.nationality}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6 print:flex print:flex-col print:gap-8">
        {/* Left Sidebar */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 print:mb-0">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-full space-y-8 print:p-0 print:border-none print:shadow-none print:grid print:grid-cols-2 print:gap-x-12 print:gap-y-6 print:space-y-0">
          {/* Contact Board (Hidden in print as it's in the header) */}
          <div className="print:hidden">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              {t('Contacto', 'Contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href={`mailto:${data.contact.email}`} className="hover:text-indigo-600 transition-colors break-all">
                  {data.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{data.contact.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{data.contact.location}</span>
              </li>
              
              <li className="pt-2">
                <Separator className="bg-slate-100" />
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Globe className="w-5 h-5 text-indigo-500 shrink-0" />
                <a href={data.contact.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors break-all">
                  {t('Sitio web', 'Website')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Linkedin className="w-5 h-5 text-[#0077b5] shrink-0" />
                <a href={data.contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] font-medium transition-colors break-all">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <MessageSquare className="w-5 h-5 text-[#ff4500] shrink-0" />
                <a href={data.contact.redditUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4500] font-medium transition-colors break-all">
                  Reddit
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Github className="w-5 h-5 text-slate-800 shrink-0" />
                <a href={data.contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-black font-medium transition-colors break-all">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Brain className="w-5 h-5 text-teal-600 shrink-0" />
                <a href={data.contact.openTrainUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 font-medium transition-colors break-all">
                  OpenTrain AI
                </a>
              </li>
              <li className="pt-2">
                <Separator className="bg-slate-100" />
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <Flag className="w-5 h-5 text-indigo-500 shrink-0" />
                <span>{data.contact.nationality}</span>
              </li>
            </ul>
          </div>

          <Separator className="print:hidden" />

          {/* Core Skills */}
          <div className="print:break-inside-avoid print:order-1">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 print:mb-2 print:text-black">
              {t('Tech & AI para Medicina', 'Tech & AI for Healthcare')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="print:hidden" />

          {/* Courses */}
          <div className="print:break-inside-avoid print:order-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 print:mb-2 print:text-black">
              {t('Cursos', 'Courses')}
            </h3>
            <ul className="space-y-3">
              {data.courses.map((course, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="print:hidden" />

          {/* Licenses */}
          <div className="print:break-inside-avoid print:order-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 print:mb-2 print:text-black">
              {t('Licencias y Registros', 'Licenses & Registrations')}
            </h3>
            <ul className="space-y-3">
              {data.licenses.map((license, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600 leading-snug">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  <span>{license}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="print:hidden" />

          {/* Languages */}
          <div className="print:break-inside-avoid print:order-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 print:mb-2 print:text-black">
              {t('Idiomas', 'Languages')}
            </h3>
            <div className="space-y-4 print:space-y-3">
              {data.languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-800">{lang.name}</span>
                    <span className="text-slate-500">{lang.level}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 print:bg-slate-200">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${lang.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links for Print only - placed here to recover space below languages */}
            <div className="hidden print:block mt-6 border-t border-slate-100 pt-6">
              <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-3">
                {t('Links Sociales', 'Social Links')}
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-800">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">jgarciaarteaga.netlify.app</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-800">
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span className="font-medium">linkedin.com/in/jgarciaarteaga</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-800">
                  <MessageSquare className="w-4 h-4 text-[#ff4500]" />
                  <span className="font-medium">reddit.com/user/jga-ent</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-800">
                  <Github className="w-4 h-4 text-slate-800" />
                  <span className="font-medium">github.com/jgarciaarteaga</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-800">
                  <Brain className="w-4 h-4 text-teal-600" />
                  <span className="font-medium">app.opentrain.ai/labeler-profile/juan-g-15</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6 print:block">
          
          {/* Experience Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 print:p-0 print:border-none print:shadow-none print:mb-8">
            <div className="flex items-center justify-between mb-6 print:mb-4">
              <h2 className="text-xl font-bold text-slate-800 print:text-2xl print:border-b print:border-slate-200 print:pb-2 print:w-full">
                {t('Experiencia Profesional', 'Professional Experience')}
              </h2>
            </div>
            
            <div className="space-y-8 print:space-y-6">
              {data.experience.map((job, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 border-b border-slate-100 pb-6 last:border-0 last:pb-0 print:flex-row print:break-inside-avoid print:pb-4">
                  <div className="md:w-40 shrink-0 pt-1 print:w-40">
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase print:text-slate-600">
                      {job.duration}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-bold text-slate-800 print:text-base">{job.title}</h3>
                    <p className="text-xs font-medium text-indigo-600 mt-1 mb-2 tracking-wide uppercase print:text-slate-600">{job.location}</p>
                    <p className="text-sm text-slate-500 leading-relaxed print:text-slate-800">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Educación Universitaria Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 print:p-0 print:border-none print:shadow-none print:mb-8 print:bg-white">
            <div className="flex justify-between items-center mb-6 print:mb-4">
              <h2 className="text-xl font-bold text-slate-800 print:text-2xl print:border-b print:border-slate-200 print:pb-2 print:w-full">
                {t('Educación Universitaria', 'University Education')}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-6">
              {data.universityEducation.map((edu, index) => {
                const LogoComponent = edu.logo ? Logos[edu.logo as keyof typeof Logos] : null;
                return (
                  <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 flex p-4 print:bg-white print:border-none print:p-0 print:break-inside-avoid">
                    {LogoComponent && <div className="mr-3 shrink-0"><LogoComponent className="w-10 h-10 mt-1" /></div>}
                    <div className="flex flex-col flex-grow">
                      <h4 className="font-bold text-sm text-slate-800 print:text-base">{edu.title}</h4>
                      <p className="text-[10px] text-indigo-600 font-mono tracking-tighter uppercase mt-1 mb-2 print:text-slate-600 print:text-xs">{edu.location}</p>
                      <p className="text-xs text-slate-500 leading-relaxed flex-grow print:text-slate-800 print:text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Formación Becaria Hospitalaria Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 print:p-0 print:border-none print:shadow-none print:mb-8 print:bg-white">
            <div className="flex justify-between items-center mb-6 print:mb-4">
              <h2 className="text-xl font-bold text-slate-800 print:text-2xl print:border-b print:border-slate-200 print:pb-2 print:w-full">
                {t('Formación Becaria Hospitalaria', 'Hospital Fellowship Training')}
              </h2>
            </div>
            
            <div className="space-y-6">
              {data.hospitalEducation.map((edu, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 flex flex-col p-4 print:bg-white print:border-none print:border-b print:border-slate-100 print:rounded-none print:p-0 print:pb-4 print:break-inside-avoid last:print:border-0 last:print:pb-0">
                  <h4 className="font-bold text-sm text-slate-800 print:text-base">{edu.title}</h4>
                  <p className="text-[10px] text-indigo-600 font-mono tracking-tighter uppercase mt-1 mb-2 print:text-slate-600 print:text-xs">{edu.location}</p>
                  <p className="text-xs text-slate-500 leading-relaxed flex-grow print:text-slate-800 print:text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Training Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 print:p-0 print:border-none print:shadow-none print:mb-8 print:break-inside-avoid">
            <div className="flex justify-between items-center mb-6 print:mb-4">
              <h2 className="text-xl font-bold text-slate-800 print:text-2xl print:border-b print:border-slate-200 print:pb-2 print:w-full">
                {t('Formación en Inteligencia Artificial', 'Artificial Intelligence Training')}
              </h2>
            </div>
            
            <div className="space-y-6">
              {data.aiTraining.map((ai, index) => {
                const LogoComponent = ai.logo ? Logos[ai.logo as keyof typeof Logos] : null;
                return (
                  <div key={index} className="flex flex-col md:flex-row gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0 print:border-none print:pb-2">
                    <div className="md:w-32 shrink-0 pt-1 print:w-32">
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase print:text-slate-600">
                        {ai.date}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start gap-2">
                        {LogoComponent && <LogoComponent className="w-5 h-5 shrink-0 mt-0.5" />}
                        <h3 className="text-sm font-bold text-slate-800 print:text-base">
                          {ai.url ? (
                            <a href={ai.url} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                              {ai.title}
                            </a>
                          ) : (
                            ai.title
                          )}
                        </h3>
                      </div>
                      <p className="text-xs font-medium text-slate-600 mt-1">{ai.institution}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Publications Section */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 print:p-0 print:border-none print:shadow-none print:mb-8 print:break-inside-avoid">
            <div className="flex justify-between items-center mb-6 print:mb-4">
              <h2 className="text-xl font-bold text-slate-800 print:text-2xl print:border-b print:border-slate-200 print:pb-2 print:w-full">
                {t('Publicaciones', 'Publications')}
              </h2>
            </div>
            
            <div className="space-y-6">
              {data.publications.map((pub, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0 print:border-none print:pb-2">
                  <div className="md:w-32 shrink-0 pt-1 print:w-32">
                     <span className="text-xs font-bold text-slate-400 tracking-widest uppercase print:text-slate-600">
                      {pub.year}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-sm font-bold text-slate-800 print:text-base">
                      {pub.url ? (
                        <a href={pub.url} target="_blank" rel="noreferrer" className="hover:text-indigo-600 transition-colors">
                          {pub.title}
                        </a>
                      ) : (
                        pub.title
                      )}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600 mt-1 uppercase tracking-wide print:text-slate-600">{pub.journal}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
