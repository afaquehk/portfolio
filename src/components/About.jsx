import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Code2, GraduationCap, MapPin, Database } from 'lucide-react';

export function About() {
  const highlightCards = [
    { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE' },
    { icon: MapPin, label: 'Current Base', value: 'Punjab, India' },
    { icon: Code2, label: 'Data Stack', value: 'Python, R, SQL' },
    { icon: Database, label: 'Focus Areas', value: 'ML and Analytics' }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="About Me" 
          subtitle="A quick introduction to my academic background and the data science skills I am building through projects, analysis, and practical problem solving."
          badge="Introduction"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 relative"
          >
            {/* Cyan Left Accent */}
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 dark:from-cyan-500 rounded-full hidden md:block"></div>

            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed content-start md:pl-0">
              I'm Afaque Hayat Khan, a Bachelor of Technology student in Computer Science at Lovely Professional University who wants to build a career as a data scientist. My focus is on developing the analytical, technical, and communication skills that modern entry-level data science roles expect.
            </p>
            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
              My recent work spans startup risk analysis, electric vehicle trend exploration, and data-backed product workflows. These projects have helped me practice data cleaning, exploratory analysis, predictive thinking, and presenting findings in a way that supports decisions.
            </p>
            <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
              I'm building with <span className="text-indigo-600 dark:text-cyan-400 font-medium">Python</span>, R, SQL through MySQL, Power BI, Tableau and web tools like <span className="text-teal-500 dark:text-purple-400 font-medium">Django</span> and Flask when a project needs both analysis and a usable interface. I enjoy using <span className="text-indigo-600 dark:text-cyan-400 font-medium">Machine Learning Algorithms </span> and<span className="text-teal-500 dark:text-purple-400 font-medium"> Deep Learning Models</span>  in verious tech projects.
            </p>
          </motion.div>

          {/* Right - Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlightCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:border-indigo-500/30 dark:hover:border-cyan-500/30 transition-all flex flex-col items-center text-center gap-3 group"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-500/20 dark:bg-cyan-500/10 dark:text-cyan-400 dark:group-hover:bg-cyan-500/20 transition-all">
                  <card.icon size={24} />
                </div>
                <div>
                  <h4 className="text-slate-500 dark:text-gray-400 text-sm mb-1">{card.label}</h4>
                  <p className="text-slate-900 dark:text-white font-medium">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
