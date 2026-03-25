import React from 'react';
import { SectionHeader } from './SectionHeader';

const achievements = [
  '\u{1F3C0} Second Runner-Up in Basketball at the Sports Utsav event, representing the college team',
  '\u{1F3F8} Third Position Holder in the Inter-Hostel Badminton Tournament, representing the hostel team',
  '\u{1F4BB} Solved over 200+ problem across verious platform like Leetcode, GFG , CODEHELP and coding Ninja',
  '\u{1F4BB} 5⭐ in python on Hackerrank '
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-marquee {
          animation: scroll-marquee 20s linear infinite;
        }
        .group:hover .animate-scroll-marquee {
          animation-play-state: paused !important;
        }
      `}} />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          title="Achievements"
          subtitle="Extra-curricular highlights from the CV that reflect team spirit, consistency, and competitive participation."
          badge="Highlights"
        />
      </div>

      <div className="relative mt-12 w-full overflow-hidden px-4 sm:px-6">
        <div className="group mx-auto max-w-7xl overflow-hidden rounded-full border border-black/10 bg-white/70 py-5 shadow-[0_18px_45px_rgba(79,70,229,0.08)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_45px_rgba(34,211,238,0.08)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent dark:from-[#0a0a0f] dark:via-[#0a0a0f]/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent dark:from-[#0a0a0f] dark:via-[#0a0a0f]/80" />

          <div
            className="flex w-max items-center whitespace-nowrap py-1 will-change-transform animate-scroll-marquee"
          >
            {[...achievements, ...achievements].map((achievement, index) => {
              const [icon, ...textParts] = achievement.split(' ');
              const separatorClassName =
                index % 2 === 0 ? 'bg-cyan-400 dark:bg-cyan-400' : 'bg-purple-400 dark:bg-purple-400';

              return (
                <React.Fragment key={`${achievement}-${index}`}>
                  <div className="mx-3 flex shrink-0 items-center gap-4 rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600/10 text-2xl dark:bg-cyan-500/10">
                      {icon}
                    </span>
                    <span className="text-xl font-semibold text-slate-900 md:text-2xl dark:text-white">
                      {textParts.join(' ')}
                    </span>
                  </div>

                  <span
                    className={`mx-2 h-3 w-3 shrink-0 rounded-full shadow-[0_0_18px_currentColor] ${separatorClassName}`}
                    aria-hidden="true"
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
