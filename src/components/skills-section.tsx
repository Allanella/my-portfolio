'use client';

import { useEffect, useRef } from 'react';

const skills = [
  'Java',
  'Spring Boot',
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Docker',
  'Tailwind CSS',
  'REST APIs',
  'Sound Engineering',
  'Master of Ceremonies',
];

const techStack = [
  { name: 'Java & Spring Boot', level: 90 },
  { name: 'React & Next.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'Database Management', level: 80 },
  { name: 'Docker & DevOps', level: 75 },
];

export function SkillsSection() {
  // Using an array ref or a single div ref depending on your intersection logic
  const techBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.tech-fill') as NodeListOf<HTMLElement>;
            fills.forEach((fill) => {
              const targetWidth = fill.getAttribute('data-level') + '%';
              fill.style.width = '0%';
              // Trigger reflow for animation
              fill.offsetHeight; 
              setTimeout(() => {
                fill.style.width = targetWidth;
              }, 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the container of the tech bars
    const currentRef = techBarsRef.current[0];
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-5xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-tag bg-white/5 backdrop-blur-md border border-white/10 text-text-primary py-3 px-4 rounded-2xl text-sm font-semibold text-center transition-all duration-300 cursor-pointer hover:translate-y-[-4px] hover:scale-105 hover:border-accent hover:shadow-lg hover:shadow-accent/30 hover:text-white"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <div
          className="tech-stack max-w-3xl mx-auto"
          // Fix: Wrap assignment in braces to ensure the function returns void
          ref={(el) => {
            techBarsRef.current[0] = el;
          }}
        >
          {techStack.map((tech) => (
            <div key={tech.name} className="mb-6">
              <div className="flex justify-between mb-2 text-sm font-semibold text-text-secondary">
                <span>{tech.name}</span>
                <span>{tech.level}%</span>
              </div>
              <div className="tech-bar h-2.5 bg-background-card rounded-full overflow-hidden border border-border">
                <div
                  className="tech-fill h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${tech.level}%` }}
                  // Store the level in a data attribute for the IntersectionObserver to read
                  data-level={tech.level}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}