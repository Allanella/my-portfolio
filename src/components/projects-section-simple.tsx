'use client';

import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sabbath School Tracker (PWA)',
    description:
      'Revolutionary church management PWA that increased member engagement by 60% and streamlined administrative processes for 50+ SDA churches.',
    image: '/images/sst.PNG',
    tech: ['React', 'Node.js', 'Supabase', 'PWA', 'Tailwind CSS'],
    github: 'https://github.com/Allanella',
    demo: '#',
    impact: '60% increase in member engagement',
  },
  {
    id: 2,
    title: 'Allanova Social App',
    description:
      'Scalable social platform supporting 10,000+ concurrent users with real-time messaging, content sharing, and advanced privacy controls.',
    image: '/images/allanova-screenshot.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/Allanella/allanova-social-app',
    demo: 'https://allanova-demo.vercel.app',
    impact: '10,000+ concurrent users',
  },
  {
    id: 3,
    title: 'Iona Institute Website',
    description:
      'High-performance educational platform that boosted student inquiries by 45% and reduced page load time by 40% through optimized architecture.',
    image: '/images/ionashot.png',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Allanella/iona-tech-website',
    demo: 'https://iona-institute.com',
    impact: '45% increase in student inquiries',
  },
  {
    id: 4,
    title: 'Student Management System',
    description:
      'Enterprise-grade academic management solution handling 5,000+ students with automated grading, attendance tracking, and comprehensive reporting.',
    image: '/images/edup.png',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/Allanella/student-management',
    demo: '#',
    impact: '5,000+ students managed',
  },
  {
    id: 5,
    title: 'OpenELIS Laboratory System',
    description:
      'Medical lab management platform that improved sample processing efficiency by 70% and reduced errors by 85% for healthcare providers.',
    image: '/images/openelis-screenshot.png',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Allanella/openelis',
    demo: '#',
    impact: '70% efficiency improvement',
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    description:
      'Complete online retail solution with payment processing, inventory management, and analytics that drove $500K+ in sales for clients.',
    image: '/images/knnshot.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Allanella/ecommerce-platform',
    demo: '#',
    impact: '$500K+ in client revenue',
  },
];

export function ProjectsSectionSimple() {
  return (
    <section id="projects" className="section-enhanced section-transition">
      <div className="container-enhanced">
        <div className="text-center mb-16">
          <h2 className="heading-enhanced mb-4">Featured Projects</h2>
          <p className="subheading-enhanced">
            A showcase of my recent work and contributions to modern web development
          </p>
        </div>

        <div className="grid-enhanced-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-enhanced group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-container image-landscape mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-blue-400 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              {/* Impact Metric */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold text-sm">{project.impact}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full border border-blue-500/30 transition-all hover:bg-blue-500/30 hover:border-blue-400/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-500/10"
                >
                  <Github size={18} /> Code
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all hover:scale-105 px-3 py-2 rounded-lg hover:bg-blue-500/10"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
