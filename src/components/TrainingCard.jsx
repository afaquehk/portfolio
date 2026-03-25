import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export function TrainingCard({ training, index, isLast }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="hidden md:flex items-center justify-between w-full relative">
        <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 ${isLast ? 'bg-gradient-to-b from-black/10 dark:from-white/10 to-transparent' : 'bg-black/10 dark:bg-white/10'} top-0 bottom-[-3rem]`}></div>

        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 dark:bg-cyan-500 z-10 hover:scale-125 transition-transform shadow-[0_0_10px_rgba(79,70,229,0.35)] dark:shadow-[0_0_10px_#22d3ee]">
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-indigo-400 dark:bg-cyan-400"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4 }}
          className={`w-[45%] glass p-6 rounded-2xl hover:border-indigo-500/30 dark:hover:border-cyan-500/30 transition-all ${index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}
        >
          <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{training.title}</h3>
            <span className="text-indigo-600 dark:text-cyan-400 font-medium">{training.organization}</span>
            <div className={`flex items-center gap-2 text-slate-500 dark:text-gray-400 text-sm mt-1 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <Briefcase size={14} />
              <span>{training.period}</span>
            </div>
          </div>

          <ul className={`space-y-2 mb-4 text-slate-600 dark:text-gray-300 text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
            {training.details.map((item, detailIndex) => (
              <li key={detailIndex} className={`flex items-start gap-2 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-indigo-500 dark:text-cyan-500 mt-1 flex-shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            {training.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="md:hidden relative border-l-2 border-black/10 dark:border-white/10 pb-8 pl-6">
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 dark:bg-cyan-500">
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-indigo-400 dark:bg-cyan-400"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass p-5 rounded-xl border border-black/10 dark:border-white/10"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{training.title}</h3>
          <span className="text-indigo-600 dark:text-cyan-400 font-medium">{training.organization}</span>
          <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-gray-400 text-xs mt-2 mb-4">
            <span className="flex items-center gap-1"><Briefcase size={12} /> {training.period}</span>
          </div>

          <ul className="space-y-2 mb-4 text-slate-600 dark:text-gray-300 text-sm">
            {training.details.map((item, detailIndex) => (
              <li key={detailIndex} className="flex items-start gap-2">
                <span className="text-indigo-500 dark:text-cyan-500 mt-0.5">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {training.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="text-xs px-2 py-1 rounded bg-indigo-500/10 text-indigo-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
