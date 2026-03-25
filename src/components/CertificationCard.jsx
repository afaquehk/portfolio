import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function CertificationCard({ certification, index }) {
  const hasValidLink =
    typeof certification.linkUrl === 'string' &&
    certification.linkUrl.trim() !== '' &&
    certification.linkUrl.trim() !== '#';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col h-full hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(79,70,229,0.12)] dark:hover:border-cyan-500/50 dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all bg-white/70 dark:bg-[#0a0a0f]"
    >
      <div className="relative aspect-video overflow-hidden bg-black/[0.03] dark:bg-white/5">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-slate-50/85 dark:bg-[#0a0a0f]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={hasValidLink ? certification.linkUrl : undefined}
            target={hasValidLink ? '_blank' : undefined}
            rel={hasValidLink ? 'noopener noreferrer' : undefined}
            onClick={(event) => {
              if (!hasValidLink) {
                event.preventDefault();
              }
            }}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-3 font-medium transition-colors shadow-lg ${
              hasValidLink
                ? 'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-cyan-500 dark:text-[#0a0a0f] dark:hover:bg-cyan-400'
                : 'bg-slate-300 text-slate-600 cursor-not-allowed dark:bg-white/10 dark:text-gray-400'
            }`}
            aria-label={`View ${certification.title} certificate`}
          >
            <ExternalLink size={18} />
            View Certificate
          </motion.a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 border-t border-black/5 dark:border-white/5">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
          {certification.title}
        </h3>

        <div className="flex items-center justify-between gap-4 mb-6 text-sm">
          <span className="text-slate-700 dark:text-gray-300 font-medium">{certification.issuer}</span>
          <span className="text-slate-500 dark:text-gray-400">{certification.date}</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
          {certification.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
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
