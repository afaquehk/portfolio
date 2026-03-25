import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Training } from './components/Training';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }

    return window.localStorage.getItem('theme') ?? 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.toggle('dark', isDark);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="global-grid-bg text-slate-900 dark:text-white overflow-x-hidden min-h-screen relative transition-colors duration-300">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[20%] w-96 h-96 rounded-full bg-indigo-500/20 dark:bg-cyan-600/10 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-teal-500/20 dark:bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Training />
          <Projects />
          <Certifications />
          <Achievements />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      <Chatbot />
    </div>
  );
}

export default App;
