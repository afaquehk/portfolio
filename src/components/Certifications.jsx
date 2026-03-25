import React from 'react';
import { CertificationCard } from './CertificationCard';
import { SectionHeader } from './SectionHeader';

const certificationsData = [
  {
    title: 'Oracle Cloud Infrastructure Data Science Professional',
    issuer: 'Oracle',
    date: '30 Sep 2025',
    image: '/certificates/oci-datascience.svg',
    tags: ['Oracle Cloud', 'Data Science', 'OCI'],
    linkUrl: 'https://drive.google.com/file/d/1If_WnbVe40e5vAcBEuzt9LvJjhNNSxoo/view?usp=drive_link',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    date: '2 Aug 2025',
    image: '/certificates/deloitte-analytics.svg',
    tags: ['Data Analytics', 'Business Insights', 'Simulation'],
    linkUrl: 'https://drive.google.com/file/d/1d23JfzBA1cAXY69osjdfG9gNj1JfvQKQ/view?usp=drive_link',
  },
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'April',
    image: '/certificates/nptel-social.svg',
    tags: ['Privacy', 'Security', 'Social Media'],
    linkUrl: 'https://drive.google.com/file/d/1eh_-tFl9UYRQRE_syBdtqEHxf1WtSPx0/view?usp=drive_link',
  },
  {
    title: 'Machine Learning using Python',
    issuer: 'Simplilearn',
    date: '25 Sep 2025',
    image: '/certificates/simplilearn-ml.png',
    tags: ['Machine Learning', 'Python', 'Foundations'],
    linkUrl: 'https://drive.google.com/file/d/1bgcFvnjA6f6caRrakYOAFNnml8p-csdd/view?usp=drive_link',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Certifications"
          subtitle="Credentials from the CV that support my path toward data science through cloud, analytics, security, and machine learning."
          badge="Certifications"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {certificationsData.map((certification, index) => (
            <CertificationCard
              key={`${certification.title}-${certification.issuer}`}
              certification={certification}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
