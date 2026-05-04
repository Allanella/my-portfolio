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
      const x = (e.clientX - rect.left - rect.width / 2) / 25; // Dampened movement
      const y = (e.clientY - rect.top - rect.height / 2) / 25;
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
    <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="hero-content animate-fade-in">
            <div className="flex items-center gap-2 text-accent text-lg font-semibold mb-4">
              <span className="animate-bounce">👋</span>
              <span>Hello, I'm Allan</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-hero bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-move">
              Full-Stack Software Engineer
            </h1>

            <p className="text-2xl text-slate-300 mb-4 font-medium">
              Building Modern Web Solutions & Digital Experiences
            </p>

            <div className="flex items-center gap-3 flex-wrap mb-8">
              <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                <MapPin size={14} />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                <Briefcase size={14} />
                <span>Freelancer</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                <Mic size={14} />
                <span>MC & Sound Engineer</span>
              </div>
            </div>

            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-xl">
              I specialize in <strong className="text-white">Java/Spring Boot</strong> and <strong className="text-white">React/Next.js</strong>,
              crafting scalable web applications. Based in Kampala, I combine technical expertise with professional event sound services.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/cv/Baliddawa_Allan_CV.pdf" download className="px-8 py-3 bg-primary rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20">
                <Download size={18} /> Download CV
              </a>
              <a href="#projects" className="px-8 py-3 border border-slate-700 rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center gap-2">
                <Rocket size={18} /> Projects
              </a>
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-accent to-primary rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                <Mail size={18} /> Contact
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="hero-image-wrapper relative"
            style={{ 
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10" />
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl relative">
                <Image
                  src="/images/allan.jpg"
                  alt="Baliddawa Allan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Icons - Simplified for standard Tailwind */}
              <div className="absolute -top-4 -right-4 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl animate-float">
                <Rocket className="text-accent" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl animate-float [animation-delay:1s]">
                <Briefcase className="text-primary" size={24} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}