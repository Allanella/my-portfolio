'use client'

export function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="education-card bg-white/3 backdrop-blur-xl border border-white/10 p-9 rounded-2xl max-w-3xl mx-auto shadow-2xl transition-all duration-300 hover:translate-y-[-4px] hover:border-accent relative overflow-hidden animate-fade-in">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-primary opacity-3 animate-rotate"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
              <div className="education-degree text-2xl font-bold text-text-primary">
                Associate's Degree in Computer Science
              </div>
              <div className="education-date text-sm text-accent font-semibold px-4 py-1.5 bg-accent/10 rounded-full">
                Graduated: January 2026
              </div>
            </div>
            
            <div className="education-institution text-lg text-text-secondary font-semibold mb-3">
              University of the People
            </div>
            
            <p className="text-text-muted leading-8">
              Completed degree with a focus on software engineering principles, algorithms, data
              structures, and full-stack development. Coursework included database management,
              networking, and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
