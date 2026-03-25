import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';

function ThemeToggleButton({ theme, onToggleTheme, className = '' }) {
  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-cyan-400 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Navigation({ theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (event, href) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Training', href: '#training' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 backdrop-blur-lg bg-slate-50/80 border-b border-black/5 dark:bg-[#0a0a0f]/80 dark:border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[92rem] items-center justify-between pl-6 pr-4 md:pl-8 md:pr-5">
          <a href="#home" onClick={(event) => handleSmoothScroll(event, '#home')} className="text-2xl font-bold tracking-tighter">
            <span className="text-indigo-600 dark:text-cyan-400">&lt;</span>
            <span className="text-slate-900 dark:text-white">Afaque Hayat Khan</span>
            <span className="text-indigo-600 dark:text-cyan-400">/&gt;</span>
          </a>

          <div className="hidden lg:flex items-center gap-4">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(event) => handleSmoothScroll(event, link.href)}
                    className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors group relative py-2 dark:text-gray-300 dark:hover:text-cyan-400"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 dark:bg-cyan-400"></span>
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggleButton theme={theme} onToggleTheme={onToggleTheme} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggleButton theme={theme} onToggleTheme={onToggleTheme} />
            <button
              type="button"
              className="text-slate-900 hover:text-indigo-600 transition-colors dark:text-white dark:hover:text-cyan-400"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-slate-50/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl flex flex-col pt-20 px-6 pb-10 lg:hidden"
          >
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-slate-900 hover:text-indigo-600 transition-colors dark:text-white dark:hover:text-cyan-400"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <div className="flex-1 flex flex-col justify-center">
              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={(event) => handleSmoothScroll(event, link.href)}
                      className="text-3xl font-bold text-slate-700 hover:text-indigo-600 transition-colors block py-2 dark:text-gray-300 dark:hover:text-cyan-400"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center gap-6 mt-auto"
            >
              <a href="https://github.com/afaquehk" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl hover:border-indigo-500/50 hover:text-indigo-600 transition-all dark:hover:border-cyan-500/50 dark:hover:text-cyan-400">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/afaque-hayat-khan/" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-xl hover:border-indigo-500/50 hover:text-indigo-600 transition-all dark:hover:border-cyan-500/50 dark:hover:text-cyan-400">
                <Linkedin size={24} />
              </a>
              <a href="mailto:afaquehayat1504@gmail.com" className="glass p-3 rounded-xl hover:border-indigo-500/50 hover:text-indigo-600 transition-all dark:hover:border-cyan-500/50 dark:hover:text-cyan-400">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
