import React, { useState } from 'react';
import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [hasProfileImageError, setHasProfileImageError] = useState(false);
  const profileImagePath = '/profile/profile.png';

  return (
    <footer className="relative z-20 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-black/10 bg-white/70 p-6 shadow-[0_18px_45px_rgba(79,70,229,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0f]/80 dark:shadow-[0_18px_45px_rgba(34,211,238,0.08)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-[28px] border border-black/10 bg-gradient-to-br from-indigo-600/10 to-teal-500/10 p-1 dark:border-white/10 dark:from-cyan-500/10 dark:to-purple-500/10">
                <div className="h-full w-full overflow-hidden rounded-[24px] bg-white/80 dark:bg-white/5">
                  {hasProfileImageError ? (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600 to-teal-500 text-lg font-semibold text-white dark:from-cyan-500 dark:to-purple-500">
                      AK
                    </div>
                  ) : (
                    <img
                      src={profileImagePath}
                      alt="Afaque Hayat Khan profile"
                      className="h-full w-full object-cover scale-125"
                      loading="lazy"
                      onError={() => setHasProfileImageError(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-cyan-400">
                  Afaque Hayat Khan
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                  Aspiring Data Scientist & CSE Student
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-gray-400">
                  Building analytical projects, predictive models, and dashboards that turn data into useful decisions.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-gray-400">
                &copy; {currentYear} All rights reserved. Built with
                <Heart
                  size={14}
                  className="text-indigo-600 fill-indigo-600 dark:text-cyan-500 dark:fill-cyan-500"
                />
                and React + Framer Motion.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/afaquehk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 p-3 text-slate-600 transition-colors hover:bg-black/[0.03] hover:text-indigo-600 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/afaque-hayat-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-black/10 p-3 text-slate-600 transition-colors hover:bg-black/[0.03] hover:text-indigo-600 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:afaquehayat1504@gmail.com"
                  className="rounded-2xl border border-black/10 p-3 text-slate-600 transition-colors hover:bg-black/[0.03] hover:text-indigo-600 dark:border-white/10 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
