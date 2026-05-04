'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Sabbath School Tracker (PWA)',
    description: 'A modern Progressive Web App for tracking Sabbath School attendance, activities, and financial contributions for SDA churches.',
    image: '/images/sst.PNG',
    tech: ['React', 'Node.js', 'Supabase', 'PWA', 'Tailwind CSS'],
    category: 'fullstack',
    github: 'https://github.com/Allanella',
    demo: '#'
  },
  {
    id: 2,
    title: 'Allanova Social App',
    description: 'A modern full-stack social media platform with real-time chat, user authentication, and scalability for 1,000+ users. Built with Socket.io for real-time features.',
    image: '/images/allanova-screenshot.jpeg',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    category: 'fullstack',
    github: 'https://github.com/Allanella/allanova-social-app',
    demo: 'https://allanova-demo.vercel.app'
  },
  {
    id: 3,
    title: 'Iona Institute of Technology',
    description: 'Official website with modern UI, smooth navigation, and optimized components that improved load times by 40%.',
    image: '/images/ionashot.png',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/Allanella/iona-tech-website',
    demo: '#'
  },
  {
    id: 4,
    title: 'Student Management System',
    description: 'Full-stack application for managing student data with secure authentication, CRUD operations, and automated processes reducing data entry time by 50%.',
    image: '/images/edup.png',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    category: 'fullstack',
    github: 'https://github.com/Allanella',
    demo: '#'
  },
  {
    id: 5,
    title: 'Acculate Construction',
    description: 'Professional construction company website with project galleries and contact forms that increased client inquiries.',
    image: '/images/image.png',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/Allanella',
    demo: '#'
  },
  {
    id: 6,
    title: 'OpenELIS Global',
    description: 'Open-source laboratory information system. Contributed to development enhancing data accuracy and workflow efficiency for healthcare labs worldwide.',
    image: '/images/openelis-screenshot.png',
    tech: ['Java', 'Open Source', 'Healthcare'],
    category: 'opensource',
    github: 'https://github.com/OpenELIS/OpenELIS-Global-2',
    demo: '#'
  },
  {
    id: 7,
    title: 'SDA Kanyanya Website',
    description: 'Church website with worship schedules, ministries, sermons, and events. Improved community engagement through integrated calendars.',
    image: '/images/knnshot.png',
    tech: ['Next.js', 'Tailwind CSS'],
    category: 'frontend',
    github: 'https://github.com/Allanella',
    demo: '#'
  }
]

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'opensource', label: 'Open Source' }
]

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-accent text-white border-accent transform translate-y-[-2px]'
                  : 'bg-background-card text-text-secondary border-border hover:bg-gradient-accent hover:text-white hover:border-accent hover:translate-y-[-2px]'
              } border`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white/3 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:translate-y-[-12px] hover:scale-102 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="project-image h-52 bg-gradient-primary relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="project-overlay absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <span className="text-white font-bold">View Project</span>
                </div>
              </div>
              
              <div className="p-7">
                <h3 className="project-title text-xl font-bold text-text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="project-description text-text-muted text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                
                <div className="project-tech flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge bg-accent/10 text-accent px-3 py-1 rounded-xl text-xs font-semibold border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link flex-1 text-center bg-gradient-accent text-white py-2.5 px-5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link flex-1 text-center bg-gradient-accent text-white py-2.5 px-5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
