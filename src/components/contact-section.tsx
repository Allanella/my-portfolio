'use client'

import { Mail, Github, Linkedin } from 'lucide-react'

const contactMethods = [
  {
    id: 1,
    title: 'Email Me',
    description: 'allanbaliddawa@gmail.com',
    icon: Mail,
    action: 'mailto:allanbaliddawa@gmail.com'
  },
  {
    id: 2,
    title: 'GitHub',
    description: 'Check out my repositories',
    icon: Github,
    action: 'https://github.com/Allanella'
  },
  {
    id: 3,
    title: 'LinkedIn',
    description: 'Let\'s connect professionally',
    icon: Linkedin,
    action: 'https://www.linkedin.com/in/allan-baliddawa-828771286/'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Allanella',
    icon: Github
  },
  {
    name: 'Email',
    href: 'mailto:allanbaliddawa@gmail.com',
    icon: Mail
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/allan-baliddawa-828771286/',
    icon: Linkedin
  },
  {
    name: 'Portfolio',
    href: 'https://my-portfolio-flame-tau-63.vercel.app/',
    icon: Mail // Will replace with appropriate icon
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <div
                key={method.id}
                onClick={() => {
                  if (method.action.startsWith('mailto:')) {
                    window.location.href = method.action
                  } else {
                    window.open(method.action, '_blank')
                  }
                }}
                className="contact-card bg-white/3 backdrop-blur-xl border border-white/10 p-7 rounded-2xl flex items-center gap-5 transition-all duration-300 cursor-pointer hover:translate-y-[-8px] hover:scale-102 hover:border-accent hover:shadow-xl hover:shadow-accent/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="contact-icon w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0 relative z-10 shadow-lg shadow-accent/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-5 group-hover:shadow-xl group-hover:shadow-accent/60">
                  <Icon size={28} className="text-white" />
                </div>
                
                <div className="contact-info relative z-10">
                  <h3 className="text-lg font-bold text-text-primary mb-1.5 group-hover:text-white transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-sm text-text-muted group-hover:text-white transition-colors duration-300">
                    {method.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center flex-wrap gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-14 h-14 rounded-full bg-background-card border border-border flex items-center justify-center transition-all duration-300 hover:scale-115 hover:rotate-5 hover:border-accent hover:bg-gradient-accent group"
                title={social.name}
              >
                <Icon size={24} className="text-text-primary transition-colors duration-300 group-hover:text-white" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
