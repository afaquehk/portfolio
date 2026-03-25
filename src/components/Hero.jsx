import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-medium mb-6 dark:bg-cyan-500/10 dark:border-cyan-500/20 dark:text-cyan-400"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75 dark:bg-cyan-400"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 dark:bg-cyan-500"></span>
            </span>
            Open to Data Science and Deep Learning opportunities
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-slate-900 dark:text-white">
            Aspiring <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500 dark:from-cyan-400 dark:to-purple-500">
              Data Scientist
            </span>
          </h1>

          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I'm Afaque Hayat Khan, a Computer Science student who wants to become a data scientist and is building toward current role expectations through Python, SQL-based analysis, machine learning fundamentals, dashboards, and business-focused storytelling.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="Afaque_Hayat_Khan_CV.pdf"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-[#0a0a0f] font-semibold px-6 py-3.5 rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.2)] dark:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-colors"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="inline-flex items-center gap-2 glass hover:border-indigo-500/30 hover:text-indigo-700 dark:hover:border-cyan-500/30 dark:hover:text-cyan-300 font-medium px-6 py-3.5 rounded-xl transition-colors"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/afaquehk' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/afaque-hayat-khan/' },
              { icon: Mail, href: 'mailto:afaquehayat1504@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -4 }}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3.5 glass rounded-xl hover:border-indigo-500/50 hover:text-indigo-600 hover:shadow-[0_0_15px_rgba(79,70,229,0.16)] dark:hover:border-cyan-500/50 dark:hover:text-cyan-400 dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all"
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-md"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
              {/* LAYER 4: Outer Purple Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full rounded-full border border-purple-500/20 z-10"
              >
                {/* Dot anchored perfectly on the bottom edge */}
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_15px_#c084fc] -translate-x-1/2 translate-y-1/2">
                  {/* Counter-rotating Text absolute-positioned relative to the dot */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0a0a0f]/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs md:text-sm text-white border border-white/10 font-medium whitespace-nowrap z-50"
                  >
                    150+ DSA Questions Solved
                  </motion.div>
                </div>
              </motion.div>

              {/* LAYER 3: Inner Cyan Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/20 z-20"
              >
                {/* Dot anchored perfectly on the top edge */}
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee] -translate-x-1/2 -translate-y-1/2">
                  {/* Counter-rotating Text pushed outward to avoid center circle */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#0a0a0f]/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs md:text-sm text-white border border-white/10 font-medium whitespace-nowrap z-50"
                  >
                    7+ Projects
                  </motion.div>
                </div>
              </motion.div>

              <div className="absolute inset-0 m-auto h-[68%] w-[68%] rounded-full border border-black/5 bg-white/60 shadow-[0_25px_60px_rgba(79,70,229,0.08)] backdrop-blur-md dark:border-white/5 dark:bg-[#17172a]/70 dark:shadow-[0_25px_60px_rgba(34,211,238,0.08)] z-10"></div>

              <div className="absolute inset-0 m-auto h-[63%] w-[63%] rounded-full bg-gradient-to-br from-indigo-500/20 to-teal-500/20 blur-2xl dark:from-cyan-500/20 dark:to-purple-500/20 z-0" />

              {/* Updated Center Profile Image */}
              <div className="absolute inset-0 m-auto h-[58%] w-[58%] rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)] z-20">
                <img 
                  src="/profile/profile.png" 
                  alt="Profile"
                  className="w-full h-full object-cover brightness-110 scale-125"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-widest text-[10px]">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-black/15 dark:border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
