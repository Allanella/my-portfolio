'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Download, Rocket, Mail, MapPin, Briefcase, Mic } from 'lucide-react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMousePosition({ x, y });
    };

    const heroWrapper = document.querySelector('.hero-image-wrapper');
    if (heroWrapper) {
      heroWrapper.addEventListener('mousemove', handleMouseMove as any);
    }

    return () => {
      if (heroWrapper) {
        heroWrapper.removeEventListener('mousemove', handleMouseMove as any);
      }
    };
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="hero-content animate-slide-in-left">
            <div className="flex items-center gap-2 text-accent text-lg font-semibold mb-3">
              <span className="animate-wave">👋</span>
              <span className="animate-typewriter">Hello, I'm Allan</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-hero bg-200% bg-clip-text text-transparent animate-gradient-move">
              Full-Stack Software Engineer
            </h1>

            <p className="text-2xl text-text-secondary mb-3 font-medium">
              Building Modern Web Solutions & Digital Experiences
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-6">
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin size={16} />
                <span>Kampala, Uganda</span>
              </div>
              <span className="badge">
                <Briefcase size={14} />
                Freelancer
              </span>
              <span className="badge">
                <Mic size={14} />
                MC & Sound Engineer
              </span>
            </div>

            <p className="text-text-secondary mb-8 text-lg">
              I specialize in <strong>Java/Spring Boot</strong> and <strong>React/Next.js</strong>,
              crafting scalable web applications and beautiful user interfaces. I also provide
              professional sound engineering and MC services for events.
            </p>

            <div className="flex flex-wrap gap-4 animate-bounce-in">
              <a
                href="./cv/Baliddawa_Allan_CV.pdf"
                download
                className="btn btn-primary flex items-center gap-2 animate-glow"
              >
                <Download size={18} />
                Download CV
              </a>
              <a href="#projects" className="btn btn-outline flex items-center gap-2">
                <Rocket size={18} />
                View Projects
              </a>
              <a href="#contact" className="btn btn-gradient flex items-center gap-2">
                <Mail size={18} />
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper animate-slide-in-right relative">
            <div className="profile-image relative w-full max-w-md mx-auto">
              <div className="profile-image-inner relative w-full pt-[100%] rounded-3xl overflow-hidden shadow-2xl border-4 border-accent animate-pulse-border animate-float backdrop-blur-sm">
                <Image
                  src="/images/allan.jpg"
                  alt="Baliddawa Allan"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="floating-icon icon-1 absolute top-[10%] -right-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="floating-icon icon-2 absolute bottom-[20%] -left-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="floating-icon icon-3 absolute top-[50%] -right-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>

              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="particle absolute w-1 h-1 bg-accent rounded-full animate-pulse"
                  style={{ top: '20%', left: '10%', animationDelay: '0s' }}
                ></div>
                <div
                  className="particle absolute w-1 h-1 bg-accent/50 rounded-full animate-pulse"
                  style={{ top: '30%', left: '80%', animationDelay: '0.5s' }}
                ></div>
                <div
                  className="particle absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse"
                  style={{ top: '60%', left: '20%', animationDelay: '1s' }}
                ></div>
                <div
                  className="particle absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
                  style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}
                ></div>
                <div
                  className="particle absolute w-1 h-1 bg-accent/20 rounded-full animate-pulse"
                  style={{ top: '15%', left: '60%', animationDelay: '2s' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
