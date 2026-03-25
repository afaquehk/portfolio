import React, { startTransition, useDeferredValue, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { SkillBadge } from './SkillBadge';
import { BarChart3, Brain, TrendingUp, MessageSquare, Network, Code } from 'lucide-react';

const skillsData = [
  // Languages
  { name: 'Python', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', level: 90 },
  { name: 'C++', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', level: 90 },
  { name: 'SQL', category: 'Languages', iconUrl: 'https://cdn.simpleicons.org/mysql/4479A1', level: 60 },
  { name: 'R', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg', level: 50 },
  { name: 'Java', category: 'Languages', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', level: 50 },

  // Libraries
  { name: 'Pandas', category: 'Libraries', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', level: 90 },
  { name: 'NumPy', category: 'Libraries', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', level: 90 },
  { name: 'Django', category: 'Libraries', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', level: 90 },
  { name: 'Matplotlib', category: 'Libraries', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg', level: 50 },
  { name: 'Flask', category: 'Libraries', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', level: 50 },

  // Tools
  { name: 'Power BI', category: 'Tools', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', level: 80 },
  { name: 'Jupyter', category: 'Tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', level: 80 },
  { name: 'MySQL', category: 'Tools', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', level: 75 },
  { name: 'Tableau', category: 'Tools', iconUrl: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', level: 70 },
  { name: 'Microsoft Excel', category: 'Tools', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', level: 85 },
];
export function Skills() {
  const filters = ['All', 'Languages', 'Libraries', 'Tools'];
  const coreStrengths = [
    { name: 'Exploratory Data Analysis', icon: BarChart3 },
    { name: 'Statistical Thinking', icon: TrendingUp },
    { name: 'Machine Learning Foundations', icon: Brain },
    { name: 'Data Storytelling', icon: MessageSquare },
    { name: 'Deep Learning', icon: Network },
    { name: 'Web Development', icon: Code },
  ];
  const [activeFilter, setActiveFilter] = useState('All');
  const deferredFilter = useDeferredValue(activeFilter);

  const filterTransition = {
    type: 'spring',
    stiffness: 130,
    damping: 18,
    mass: 0.85,
  };

  const filteredSkills =
    deferredFilter === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === deferredFilter);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Data Science Toolkit" 
          subtitle="Skills positioned around the foundations most current data scientist roles look for: programming, analysis libraries, visualization, and data tools."
          badge="Skills"
        />

        <LayoutGroup>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <motion.button
                  layout
                  key={filter}
                  type="button"
                  onClick={() => startTransition(() => setActiveFilter(filter))}
                  whileTap={{ scale: 0.98 }}
                  transition={filterTransition}
                  className={`relative isolate overflow-hidden rounded-full border px-5 py-2.5 text-sm font-medium transition-[color,border-color,box-shadow] duration-300 ${
                    isActive
                      ? 'border-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.18)] dark:border-cyan-400 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                      : 'border-black/10 bg-transparent text-slate-700 hover:border-indigo-600/70 hover:text-indigo-600 dark:border-white/10 dark:text-white dark:hover:border-cyan-400/70 dark:hover:text-cyan-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 -z-10 rounded-full bg-indigo-600 dark:bg-cyan-400"
                      transition={filterTransition}
                    />
                  )}
                  <span className="relative z-10">{filter}</span>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            layout
            transition={filterTransition}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-12 glass rounded-3xl p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-indigo-600 dark:text-cyan-400">
            Core Strengths
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {coreStrengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <span
                  key={strength.name}
                  className="inline-flex items-center gap-2 cursor-default rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-indigo-500/50 hover:bg-indigo-500/20 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] dark:border-cyan-500/20 dark:bg-cyan-500/10 dark:text-cyan-300 dark:hover:border-cyan-500/50 dark:hover:bg-cyan-500/20 dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                >
                  <Icon size={16} className="shrink-0" />
                  {strength.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
