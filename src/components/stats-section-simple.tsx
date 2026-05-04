'use client';

import { useState, useEffect } from 'react';
import { Code, Users, Clock, Award, TrendingUp, Target } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: 50,
    label: 'Projects Delivered',
    icon: Code,
    suffix: '+',
    description: 'Successfully completed web applications'
  },
  {
    id: 2,
    value: 30,
    label: 'Happy Clients',
    icon: Users,
    suffix: '+',
    description: 'Satisfied customers worldwide'
  },
  {
    id: 3,
    value: 5,
    label: 'Years Experience',
    icon: Clock,
    suffix: '+',
    description: 'Professional development experience'
  },
  {
    id: 4,
    value: 15,
    label: 'Technologies',
    icon: Award,
    suffix: '+',
    description: 'Frameworks and languages mastered'
  },
  {
    id: 5,
    value: 95,
    label: 'Client Satisfaction',
    icon: TrendingUp,
    suffix: '%',
    description: 'Repeat business and referrals'
  },
  {
    id: 6,
    value: 24,
    label: 'Hour Response',
    icon: Target,
    suffix: 'h',
    description: 'Average response time to inquiries'
  }
];

export function StatsSectionSimple() {
  const [mounted, setMounted] = useState(false);
  const [visibleStats, setVisibleStats] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const statsSection = document.getElementById('stats');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && visibleStats.length === 0) {
          // Animate stats appearing one by one
          stats.forEach((_, index) => {
            setTimeout(() => {
              setVisibleStats(prev => [...prev, index]);
            }, index * 200);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleStats.length]);

  const AnimatedCounter = ({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (isAnimating) {
        const startTime = Date.now();
        const endTime = startTime + duration;

        const animate = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeOutQuart * value));

          if (now < endTime) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isAnimating, value, duration]);

    useEffect(() => {
      setIsAnimating(true);
    }, []);

    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  if (!mounted) return null;

  return (
    <section id="stats" className="section-enhanced">
      <div className="container-enhanced">
        <div className="text-center mb-16">
          <h2 className="heading-enhanced mb-4">Proven Results & Impact</h2>
          <p className="subheading-enhanced">
            Numbers that speak to my commitment to excellence and client success
          </p>
        </div>

        <div className="grid-enhanced-3">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`card-enhanced text-center group animate-slide-up ${
                visibleStats.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>

              <div className="mb-2">
                <div className="text-4xl font-bold text-blue-400 mb-1">
                  {visibleStats.includes(index) ? (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-blue-500/10 px-6 py-3 rounded-full border border-blue-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-medium">Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
