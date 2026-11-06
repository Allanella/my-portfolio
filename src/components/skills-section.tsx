'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Server, Database, Container, Mic, Sparkles } from 'lucide-react';

type Category = {
  id: string;
  label: string;
  icon: React.ReactNode;
  skills: string[];
};

const categories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Code2 size={16} />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={16} />,
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    id: 'data',
    label: 'Databases',
    icon: <Database size={16} />,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: <Container size={16} />,
    skills: ['Docker', 'Git', 'CI/CD', 'Vercel'],
  },
];

const expertise = [
  { name: 'Java & Spring Boot', level: 90, note: 'Enterprise-grade backends' },
  { name: 'React & Next.js', level: 85, note: 'Fast, polished interfaces' },
  { name: 'Node.js & Express', level: 80, note: 'APIs that scale' },
  { name: 'Database Design', level: 80, note: 'SQL & NoSQL modelling' },
  { name: 'Docker & DevOps', level: 75, note: 'Reliable delivery pipelines' },
];

const beyondCode = [
  {
    icon: <Mic size={18} />,
    title: 'Master of Ceremonies',
    text: 'Comfortable leading a room, communicating clearly and staying calm under pressure.',
  },
  {
    icon: <Sparkles size={18} />,
    title: 'Sound Engineering',
    text: 'An ear for detail, which carries into the polish and care I put into every interface.',
  },
];

const styles = `
  .sk-section {
    position: relative;
    background: #080c14;
    padding: clamp(5rem, 10vw, 8rem) 1.5rem;
    overflow: hidden;
    font-family: 'DM Sans', ui-sans-serif, sans-serif;
    color: #f1f5f9;
  }
  .sk-grid-bg {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
    pointer-events: none;
  }
  .sk-orb {
    position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none;
  }
  .sk-orb-1 { width: 380px; height: 380px; top: -10%; right: -5%;
    background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%); }
  .sk-orb-2 { width: 320px; height: 320px; bottom: -10%; left: -6%;
    background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%); }

  .sk-container { position: relative; z-index: 1; max-width: 1140px; margin: 0 auto; }

  /* Reveal */
  .sk-reveal { opacity: 0; transform: translateY(22px);
    transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1); }
  .sk-in .sk-reveal { opacity: 1; transform: translateY(0); }

  /* Header */
  .sk-header { text-align: center; margin-bottom: 3.5rem; }
  .sk-eyebrow {
    display: inline-flex; align-items: center; gap: 0.45rem;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase;
    color: #3b82f6; background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.18);
    padding: 0.32rem 0.85rem; border-radius: 9999px; margin-bottom: 1rem;
  }
  .sk-eyebrow::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: #3b82f6; box-shadow: 0 0 7px #3b82f6; animation: skPulse 2s ease-in-out infinite;
  }
  @keyframes skPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .45; transform: scale(.8); } }
  .sk-heading {
    font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1;
    background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 55%, #3b82f6 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
    margin-bottom: 0.75rem;
  }
  .sk-sub { color: #94a3b8; font-size: 1rem; max-width: 52ch; margin: 0 auto; line-height: 1.7; }

  /* Layout */
  .sk-layout { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
  @media (min-width: 960px) { .sk-layout { grid-template-columns: 1.1fr 1fr; align-items: start; } }

  /* Card */
  .sk-card {
    position: relative; overflow: hidden;
    background: rgba(255,255,255,0.032); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 1.25rem; padding: 1.75rem;
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    transition: border-color .28s ease, box-shadow .28s ease;
  }
  .sk-card:hover { border-color: rgba(96,165,250,0.28); box-shadow: 0 16px 48px rgba(0,0,0,0.38); }
  .sk-card-title {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    color: #3b82f6; margin-bottom: 1.5rem;
  }

  /* Proficiency bars */
  .sk-bar-row { margin-bottom: 1.4rem; }
  .sk-bar-row:last-child { margin-bottom: 0; }
  .sk-bar-top { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; }
  .sk-bar-name { font-size: 0.92rem; font-weight: 600; color: #f1f5f9; }
  .sk-bar-note { font-size: 0.75rem; color: #64748b; margin-top: 2px; }
  .sk-bar-pct { font-size: 0.85rem; font-weight: 600; color: #60a5fa; font-variant-numeric: tabular-nums; }
  .sk-track {
    height: 8px; border-radius: 9999px; overflow: hidden;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.05);
  }
  .sk-fill {
    position: relative; height: 100%; width: 0; border-radius: 9999px;
    background: linear-gradient(90deg, #2563eb, #3b82f6 55%, #06b6d4);
    box-shadow: 0 0 14px rgba(59,130,246,0.45);
    transition: width 1.3s cubic-bezier(0.22,1,0.36,1);
  }
  .sk-in .sk-fill { width: var(--level); }
  .sk-fill::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
    transform: translateX(-100%); animation: skShimmer 2.8s ease-in-out 1.4s infinite;
  }
  @keyframes skShimmer { to { transform: translateX(100%); } }

  /* Tabs */
  .sk-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
  .sk-tab {
    display: inline-flex; align-items: center; gap: 0.4rem; cursor: pointer;
    font-family: inherit; font-size: 0.78rem; font-weight: 500; color: #94a3b8;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
    padding: 0.45rem 0.95rem; border-radius: 9999px;
    transition: all .25s ease;
  }
  .sk-tab:hover { color: #f1f5f9; border-color: rgba(96,165,250,0.35); }
  .sk-tab[aria-pressed='true'] {
    color: #fff; border-color: transparent;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    box-shadow: 0 6px 20px rgba(59,130,246,0.35);
  }
  .sk-tab:focus-visible { outline: 2px solid #60a5fa; outline-offset: 2px; }

  /* Chips */
  .sk-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; min-height: 7.5rem; align-content: flex-start; }
  .sk-chip {
    font-size: 0.82rem; font-weight: 500; color: #cbd5e1;
    background: rgba(255,255,255,0.045); border: 1px solid rgba(255,255,255,0.09);
    padding: 0.5rem 1rem; border-radius: 0.85rem;
    animation: skChipIn .45s cubic-bezier(0.22,1,0.36,1) both;
    transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease, color .25s ease;
  }
  .sk-chip:hover {
    transform: translateY(-3px); color: #fff; border-color: rgba(96,165,250,0.45);
    box-shadow: 0 8px 22px rgba(59,130,246,0.25);
  }
  @keyframes skChipIn { from { opacity: 0; transform: translateY(8px) scale(.96); } to { opacity: 1; transform: none; } }

  /* Beyond code */
  .sk-beyond { margin-top: 1.5rem; display: grid; gap: 1rem; }
  .sk-beyond-item { display: flex; gap: 1rem; align-items: flex-start; }
  .sk-beyond-icon {
    width: 40px; height: 40px; flex-shrink: 0; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; color: #3b82f6;
    background: rgba(59,130,246,0.09); border: 1px solid rgba(59,130,246,0.2);
  }
  .sk-beyond-title { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.2rem; }
  .sk-beyond-text { font-size: 0.82rem; color: #94a3b8; line-height: 1.6; }

  @media (prefers-reduced-motion: reduce) {
    .sk-reveal, .sk-fill, .sk-chip { transition: none; animation: none; }
    .sk-reveal { opacity: 1; transform: none; }
    .sk-fill::after, .sk-eyebrow::before { animation: none; }
  }
`;

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>('all');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shownSkills =
    active === 'all'
      ? categories.flatMap((c) => c.skills)
      : categories.find((c) => c.id === active)?.skills ?? [];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`sk-section ${visible ? 'sk-in' : ''}`}
    >
      <style>{styles}</style>
      <div className="sk-grid-bg" />
      <div className="sk-orb sk-orb-1" />
      <div className="sk-orb sk-orb-2" />

      <div className="sk-container">
        <div className="sk-header sk-reveal">
          <span className="sk-eyebrow">Stack</span>
          <h2 className="sk-heading">Skills that ship products</h2>
          <p className="sk-sub">
            From database to deployment, I build complete, production-ready systems, and I
            communicate clearly while doing it.
          </p>
        </div>

        <div className="sk-layout">
          {/* Left: proficiency */}
          <div className="sk-card sk-reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="sk-card-title">Core Expertise</p>
            {expertise.map((item, i) => (
              <div className="sk-bar-row" key={item.name}>
                <div className="sk-bar-top">
                  <div>
                    <div className="sk-bar-name">{item.name}</div>
                    <div className="sk-bar-note">{item.note}</div>
                  </div>
                  <span className="sk-bar-pct">{item.level}%</span>
                </div>
                <div
                  className="sk-track"
                  role="progressbar"
                  aria-label={item.name}
                  aria-valuenow={item.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="sk-fill"
                    style={
                      {
                        '--level': `${item.level}%`,
                        transitionDelay: `${0.25 + i * 0.12}s`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: tools + beyond code */}
          <div>
            <div className="sk-card sk-reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="sk-card-title">Tools & Technologies</p>

              <div className="sk-tabs" role="group" aria-label="Filter skills by category">
                <button
                  className="sk-tab"
                  aria-pressed={active === 'all'}
                  onClick={() => setActive('all')}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    className="sk-tab"
                    aria-pressed={active === c.id}
                    onClick={() => setActive(c.id)}
                  >
                    {c.icon} {c.label}
                  </button>
                ))}
              </div>

              <div className="sk-chips" key={active}>
                {shownSkills.map((skill, i) => (
                  <span
                    key={skill}
                    className="sk-chip"
                    style={{ animationDelay: `${i * 0.04}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="sk-card sk-beyond sk-reveal" style={{ transitionDelay: '0.3s' }}>
              <p className="sk-card-title" style={{ marginBottom: 0 }}>
                Beyond the Code
              </p>
              {beyondCode.map((b) => (
                <div className="sk-beyond-item" key={b.title}>
                  <div className="sk-beyond-icon">{b.icon}</div>
                  <div>
                    <p className="sk-beyond-title">{b.title}</p>
                    <p className="sk-beyond-text">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}