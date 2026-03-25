import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function SkillBadge({ skill }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const cardTransition = {
    layout: {
      type: 'spring',
      stiffness: 130,
      damping: 18,
      mass: 0.85,
    },
    opacity: {
      duration: 0.18,
      ease: 'easeOut',
    },
    scale: {
      duration: 0.22,
      ease: 'easeOut',
    },
  };

  // Provide a default value for progress if skill.level isn't defined in your data
  const progress = skill.level ?? 75;

  const getProficiencyLabel = (prog) => {
    if (prog >= 85) return 'Advanced';
    if (prog >= 60) return 'Intermediate';
    return 'Familiar';
  };


  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={cardTransition}
      whileHover={{ y: -4, scale: 1.02 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="group relative flex min-h-[180px] w-full cursor-default flex-col items-center justify-center [perspective:1000px]"
    >
      <motion.div
        className="absolute inset-0 h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/40 p-6 text-center backdrop-blur-sm transition-all [backface-visibility:hidden] dark:border-white/10 dark:bg-white/5 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_15px_rgba(79,70,229,0.12)] dark:group-hover:border-cyan-500/30 dark:group-hover:shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          {!imgError ? (
            <img
              src={skill.iconUrl}
              alt={`${skill.name} logo`}
              className="h-14 w-14 object-contain"
              loading="lazy"
              onError={(event) => {
                if (skill.fallbackIconUrl && event.currentTarget.src !== skill.fallbackIconUrl) {
                  event.currentTarget.src = skill.fallbackIconUrl;
                } else {
                  setImgError(true);
                }
              }}
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-600 dark:bg-cyan-900/30 dark:text-cyan-400">
              {skill.name.charAt(0)}
            </div>
          )}

          <h3 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">{skill.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-gray-500">{skill.category}</p>
        </div>

        {/* Back of the card */}
        <div 
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-2xl border border-indigo-500/30 bg-white/80 p-6 text-center backdrop-blur-md transition-all [backface-visibility:hidden] dark:border-cyan-500/30 dark:bg-[#0a0a0f]/90 shadow-[0_0_15px_rgba(79,70,229,0.12)] dark:shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h3 className="mb-4 text-lg font-bold text-indigo-600 dark:text-cyan-400">Proficiency</h3>
          
          <div className="mb-3 h-2.5 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
            <motion.div 
              className="h-full rounded-full bg-indigo-600 dark:bg-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: isFlipped ? `${progress}%` : 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            />
          </div>
          
          <div className="flex w-full justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
            <span>{getProficiencyLabel(progress)}</span>
            <span className="text-indigo-600 dark:text-cyan-400">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
