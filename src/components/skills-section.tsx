'use client'

import { useEffect, useRef } from 'react'

const skills = [
  'Java', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'TypeScript',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Tailwind CSS', 'REST APIs',
  'Sound Engineering', 'Master of Ceremonies'
]

const techStack = [
  { name: 'Java & Spring Boot', level: 90 },
  { name: 'React & Next.js', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'Database Management', level: 75 },
  { name: 'Docker & DevOps', level: 70 },
]

export function SkillsSection() {
  const techBarsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll('.tech-fill')
            fills.forEach((fill) => {
              const element = fill as HTMLElement
              const width = element.style.width
              element.style.width = '0'
              setTimeout(() => {
                element.style.width = width
              }, 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    techBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar)
    })

    return () => {
      techBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar)
      })
    }
  }, [])

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
                animationDelay: `${index * 0.1}s`
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="tech-stack max-w-3xl mx-auto" ref={(el) => techBarsRef.current[0] = el}>
          {techStack.map((tech, index) => (
            <div key={tech.name} className="mb-6">
              <div className="flex justify-between mb-2 text-sm font-semibold text-text-secondary">
                <span>{tech.name}</span>
                <span>{tech.level}%</span>
              </div>
              <div className="tech-bar h-2.5 bg-background-card rounded-full overflow-hidden border border-border">
                <div
                  className="tech-fill h-full bg-gradient-accent rounded-full transition-all duration-1500 ease-out relative"
                  style={{ width: `${tech.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
