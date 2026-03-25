import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EducationCard } from './EducationCard';

const educationData = [
  {
    title: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Aug 2023 - Present',
    details: [
      'CGPA: 7.02'
    ],
    tags: ['B.Tech', 'CSE']
  },
  {
    title: 'CBSE (Class XII)',
    institution: 'Kendriya Vidyalaya Air Force Station Bagdogra',
    location: 'West Bengal',
    period: 'May 2021 - May 2022',
    details: [
      'Percentage: 76%'
    ],
    tags: ['Class 12']
  },
  {
    title: 'CBSE (Class X)',
    institution: 'Kendriya Vidyalaya Air Force Station Bagdogra',
    location: 'West Bengal',
    period: 'May 2019 - May 2020',
    details: [
      'Percentage: 91%'
    ],
    tags: ['Class 10']
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/[0.03] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="My Education" 
          subtitle="My academic foundation for building a career in data science."
          badge="Education"
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-col gap-12 md:gap-0">
            {educationData.map((edu, index) => (
              <EducationCard 
                key={index} 
                education={edu} 
                index={index} 
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
