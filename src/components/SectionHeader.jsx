import { motion } from 'framer-motion';

export function SectionHeader({ title, subtitle, badge }) {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-16">
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-medium mb-4 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-cyan-400 animate-pulse"></span>
          {badge}
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
