import React from 'react';
import { SectionHeader } from './SectionHeader';
import { TrainingCard } from './TrainingCard';

const trainingData = [
  {
    title: 'From Data to Decisions (Data Science)',
    organization: 'Lovely Professional University',
    period: 'May 2025- Jun 2025',
    details: [
      'Built a regression-based housing price prediction model to study market trends and support real-estate decision-making.',
      'Used Python for data cleaning, feature analysis, and visualization, then translated the work into an interactive Power BI dashboard.',
      'Identified location as the strongest driver and converted the analysis into actionable neighborhood-level insights.'
    ],
    tags: ['Python', 'EDA', 'Regression', 'Power BI']
  },
  {
    title: 'Data Science Internship',
    organization: 'SkillCraft Technology',
    period: 'Jun 2025-Jul 2025',
    details: [
      'Completed a 1-month internship focused on applying data science concepts to real-world problems.',
      'Worked on data cleaning, exploratory data analysis, and data visualization using Python.',
      'Built and analyzed datasets to identify patterns, trends, and actionable insights.',
      'Applied statistical techniques and basic machine learning concepts for data-driven decision-making.',
      'Strengthened practical skills in Python, data analysis, and problem-solving in an industry-like environment.'
    ],
    tags: ['Python', 'EDA', 'Visualization', 'Statistics', 'Machine Learning']
  }
];

export function Training() {
  return (
    <section id="training" className="py-24 px-6 bg-slate-900/[0.03] dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Training & Internship" 
          subtitle="Hands-on training and internship experience that strengthened the Python, analysis, visualization, and decision-support skills used in current data science roles."
          badge="Training"
        />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-col gap-12 md:gap-0">
            {trainingData.map((training, index) => (
              <TrainingCard 
                key={index} 
                training={training} 
                index={index} 
                isLast={index === trainingData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
