import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: { es: 'Inicio', en: 'Home' } },
  { path: '/resume', label: { es: 'CV', en: 'Resume' } },
  { path: '/projects', label: { es: 'Proyectos', en: 'Projects' } },
  { path: '/contact', label: { es: 'Contacto', en: 'Contact' } },
];

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-800">
                {language === 'es' ? 'Dr. J. García Arteaga' : 'Juan Garcia Arteaga, MD'}
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center pb-1 text-sm font-semibold transition-colors ${
                    location.pathname === item.path
                      ? 'text-indigo-600 border-b-2 border-indigo-600'
                      : 'text-slate-500 border-b-2 border-transparent hover:text-slate-800'
                  }`}
                >
                  {language === 'es' ? item.label.es : item.label.en}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-2">
              <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                {language === 'es' ? 'EN' : 'ES'}
              </Button>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-b bg-white"
            >
              <div className="pt-2 pb-3 space-y-1 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-sm font-semibold transition-colors ${
                      location.pathname === item.path
                        ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
                        : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {language === 'es' ? item.label.es : item.label.en}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-8 py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200 print:hidden">
          <p>
            © {new Date().getFullYear()} {language === 'es' ? 'Dr. Juan García Arteaga' : 'Juan Garcia Arteaga, MD'}
          </p>
          <p>{t('Todos los derechos reservados.', 'All rights reserved.')}</p>
      </footer>
    </div>
  );
}
