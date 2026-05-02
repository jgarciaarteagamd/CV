import { useLanguage } from '../LanguageContext';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Send, Mail, MapPin } from 'lucide-react';
import { cvData } from '../data';

export default function Contact() {
  const { language, t } = useLanguage();
  const data = cvData[language];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white">
        <h3 className="text-lg font-bold mb-6">{t('Get in touch', 'Get in touch')}</h3>
        <p className="text-sm text-slate-300 mb-6">
          {t('Estoy interesado en oportunidades de colaboración en IA médica, estructuración de datos en salud o consultoría clínica especializada.', 'I am interested in collaboration opportunities in medical AI, health data structuring, or specialized clinical consulting.')}
        </p>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder={t('Tu nombre', 'Full Name')}
              className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-400 outline-none transition-shadow" 
            />
            <input 
              type="email" 
              placeholder={t('Email', 'Email Address')}
              className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-400 outline-none transition-shadow" 
            />
          </div>
          <input 
            type="text" 
            placeholder={t('Asunto', 'Subject')}
            className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-400 outline-none transition-shadow" 
          />
          <textarea 
            rows={4} 
            placeholder={t('¿Cómo podemos colaborar?', 'Your message...')}
            className="w-full bg-slate-800 border-none rounded-lg p-3 text-xs focus:ring-2 focus:ring-indigo-500 text-white placeholder-slate-400 outline-none transition-shadow resize-y"
          ></textarea>
          <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg text-xs font-bold transition-colors">
            {t('Enviar Mensaje', 'Send Message')}
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-slate-800 grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-indigo-400" />
            <a href={`mailto:${data.contact.email}`} className="text-slate-300 hover:text-white transition-colors">
              {data.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-slate-300">
              {data.contact.location}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
