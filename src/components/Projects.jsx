import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';

const projectsData = [
  {
    title: 'RoyalsWheels Vehicle Rental Platform (Web Dev)',
    description:
      'Full-stack Django vehicle rental platform that manages structured booking data, user interactions, and admin workflows, giving me hands-on experience with clean data capture and operational decision logic.',
    image: '/projects/Screenshot 2026-03-26 021224.png',
    tags: ['Django', 'Python', 'Structured Data', 'Booking Logic', 'SQLite'],
    liveUrl: 'https://car-and-bike-rental-website.onrender.com/',
    sourceUrl: 'https://github.com/afaquehk/Car-and-Bike-Rental-website',
  },
  {
    title: 'Startup Analyser (Machine Learning)',
    description:
      'Data science-focused project that studies startup signals to estimate business risk, compare failure patterns, and surface interpretable insights through predictive modeling and decision-friendly outputs.',
    image: '/projects/image.png',
    tags: ['Predictive Analytics', 'Risk Modeling', 'NLP Signals', 'XGBoost', 'Dashboards'],
    liveUrl: 'https://ews-dashboard-ui.vercel.app/',
    sourceUrl: 'https://github.com/afaquehk/EWS-dashboard-ui',
  },
  {
    title: 'Electric Vehicle Insights (Data Analysis)',
    description:
      'Exploratory data analysis project focused on EV population trends, post-2020 growth, and market patterns using Python-based cleaning, analysis, and visualization workflows to turn raw data into clear insights.',
    image: '/projects/ev-analysis.svg',
    tags: ['Python', 'EDA', 'Pandas', 'Visualization', 'Business Insights'],
    liveUrl: 'https://github.com/afaquehk/EV_dataset_analysis/blob/main/EV_analysis%20(5).ipynb',
    sourceUrl: 'https://github.com/afaquehk/EV_dataset_analysis',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="Selected projects that show how I approach structured data, analysis, predictive thinking, and insight communication."
          badge="Portfolio"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
