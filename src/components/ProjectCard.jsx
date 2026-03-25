import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ project, index }) {
  const hasLiveUrl =
    typeof project.liveUrl === 'string' &&
    project.liveUrl.trim() !== '' &&
    project.liveUrl.trim() !== '#';

  const hasSourceUrl =
    typeof project.sourceUrl === 'string' &&
    project.sourceUrl.trim() !== '' &&
    project.sourceUrl.trim() !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.12)] dark:hover:border-cyan-500/50 dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all bg-white/70 dark:bg-[#0a0a0f]"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-black/[0.03] dark:bg-white/5">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay Hover Actions */}
        {(hasLiveUrl || hasSourceUrl) && (
          <div className="absolute inset-0 bg-slate-50/85 dark:bg-[#0a0a0f]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {hasLiveUrl && (
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-lg dark:bg-cyan-500 dark:text-[#0a0a0f] dark:hover:bg-cyan-400"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} className="ml-0.5 mb-0.5" />
              </motion.a>
            )}
            {hasSourceUrl && (
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors shadow-lg"
                aria-label="Source Code"
              >
                <Github size={20} />
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-1 border-t border-black/5 dark:border-white/5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2.5 py-1 rounded-md glass text-slate-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
