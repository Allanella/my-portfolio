'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Mail, Github, Linkedin, MapPin } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'Java & Spring Boot Engineer',
  'React & Next.js Builder',
];

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '50+', label: 'Projects delivered' },
  { value: '95%', label: 'Client satisfaction' },
];

const socials = [
  { name: 'GitHub', href: 'https://github.com/Allanella', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/allan-baliddawa-828771286/',
    icon: Linkedin,
  },
  { name: 'Email', href: 'mailto:allanbaliddawa@gmail.com', icon: Mail },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

  .hx {
    --bg: #080c14;
    --surface: rgba(255,255,255,0.035);
    --border: rgba(255,255,255,0.08);
    --border-hover: rgba(96,165,250,0.4);
    --accent: #3b82f6;
    --accent-2: #06b6d4;
    --text: #f1f5f9;
    --text-2: #94a3b8;
    --text-3: #64748b;
    --ease: 0.28s cubic-bezier(0.4,0,0.2,1);
    position: relative;
    min-height: 100svh;
    display: flex;
    align-items: center;
    background: var(--bg);
    overflow: hidden;
    font-family: 'DM Sans', ui-sans-serif, sans-serif;
    color: var(--text);
  }

  /* Background layers */
  .hx::before {
    content: '';
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 70% 40%, rgba(59,130,246,0.09) 0%, transparent 70%),
      radial-gradient(ellipse 50% 40% at 15% 85%, rgba(6,182,212,0.06) 0%, transparent 60%);
    pointer-events: none;
  }
  .hx-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%);
    pointer-events: none;
  }
  .hx-orb {
    position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none;
    animation: hxDrift var(--dur, 18s) ease-in-out infinite alternate;
  }
  .hx-orb-1 { width: 420px; height: 420px; top: -10%; right: -5%; --dur: 20s;
    background: radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%); }
  .hx-orb-2 { width: 320px; height: 320px; bottom: 5%; left: -8%; --dur: 15s; animation-delay: -7s;
    background: radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%); }
  .hx-orb-3 { width: 220px; height: 220px; top: 45%; left: 40%; --dur: 12s; animation-delay: -4s;
    background: radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%); }
  @keyframes hxDrift {
    from { transform: translate(0,0) scale(1); }
    to   { transform: translate(30px,-20px) scale(1.08); }
  }

  /* Layout */
  .hx-container {
    position: relative; z-index: 1; width: 100%; max-width: 1160px;
    margin: 0 auto; padding: 6rem 1.5rem 4rem;
  }
  @media (min-width: 768px) { .hx-container { padding: 7rem 2.5rem 5rem; } }

  .hx-inner { display: flex; flex-direction: column; align-items: center; gap: 3rem; }
  @media (min-width: 1024px) { .hx-inner { flex-direction: row; gap: 4.5rem; } }

  .hx-text {
    flex: 1; text-align: center; order: 2;
    animation: hxUp 0.8s cubic-bezier(0.22,1,0.36,1) both;
  }
  @media (min-width: 1024px) { .hx-text { text-align: left; order: 1; } }
  @keyframes hxUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }

  /* Availability pill */
  .hx-avail {
    display: inline-flex; align-items: center; gap: 0.55rem;
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em;
    color: #86efac; background: rgba(74,222,128,0.08);
    border: 1px solid rgba(74,222,128,0.22);
    padding: 0.4rem 0.95rem; border-radius: 9999px; margin-bottom: 1.5rem;
  }
  .hx-avail-dot {
    width: 7px; height: 7px; border-radius: 50%; background: #4ade80;
    box-shadow: 0 0 0 0 rgba(74,222,128,0.6); animation: hxPing 2s ease-out infinite;
  }
  @keyframes hxPing {
    0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.55); }
    100% { box-shadow: 0 0 0 9px rgba(74,222,128,0); }
  }

  .hx-hello { font-size: 1rem; color: var(--text-2); margin-bottom: 0.4rem; font-weight: 500; }

  .hx-name {
    font-size: clamp(2.6rem, 7vw, 4.6rem); font-weight: 700; line-height: 1.04;
    letter-spacing: -0.035em; margin: 0 0 0.9rem;
    background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 45%, #3b82f6 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }

  .hx-role-line {
    font-size: clamp(1.1rem, 2.4vw, 1.5rem); font-weight: 500; color: var(--text-2);
    margin-bottom: 1.25rem; min-height: 2rem; display: flex; align-items: center;
    justify-content: center; gap: 0.5rem;
  }
  @media (min-width: 1024px) { .hx-role-line { justify-content: flex-start; } }
  .hx-role {
    color: #60a5fa; display: inline-block;
    animation: hxRole 0.5s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes hxRole { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  .hx-caret {
    width: 2px; height: 1.2em; background: var(--accent); animation: hxBlink 1s steps(1) infinite;
  }
  @keyframes hxBlink { 50% { opacity: 0; } }

  .hx-sub {
    font-size: clamp(0.95rem, 1.5vw, 1.05rem); line-height: 1.8; color: var(--text-2);
    max-width: 54ch; margin: 0 auto 1.75rem;
  }
  @media (min-width: 1024px) { .hx-sub { margin-left: 0; } }

  .hx-loc {
    display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.8rem;
    color: var(--text-3); margin-bottom: 1.75rem;
  }

  /* Buttons */
  .hx-cta { display: flex; flex-direction: column; gap: 0.875rem; margin-bottom: 2rem; }
  @media (min-width: 480px) { .hx-cta { flex-direction: row; flex-wrap: wrap; justify-content: center; } }
  @media (min-width: 1024px) { .hx-cta { justify-content: flex-start; } }

  .hx-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
    font-family: inherit; font-size: 0.9rem; font-weight: 600; padding: 0.85rem 1.85rem;
    border-radius: 9999px; border: 1px solid transparent; text-decoration: none;
    white-space: nowrap; position: relative; overflow: hidden;
    transition: transform var(--ease), box-shadow var(--ease), background var(--ease),
                border-color var(--ease), color var(--ease);
  }
  .hx-btn:active { transform: scale(0.97); }
  .hx-btn:focus-visible { outline: 2px solid #60a5fa; outline-offset: 3px; }
  .hx-btn svg { transition: transform var(--ease); }
  .hx-btn:hover svg.hx-arrow { transform: translateX(4px); }

  .hx-btn-primary { background: linear-gradient(135deg, var(--accent), #2563eb); color: #fff; }
  .hx-btn-primary::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent 60%);
    opacity: 0; transition: opacity var(--ease);
  }
  .hx-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(59,130,246,0.42); }
  .hx-btn-primary:hover::after { opacity: 1; }

  .hx-btn-outline {
    background: var(--surface); color: var(--text); border-color: var(--border);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  }
  .hx-btn-outline:hover {
    transform: translateY(-2px); border-color: var(--border-hover);
    background: rgba(255,255,255,0.07); box-shadow: 0 8px 24px rgba(0,0,0,0.28);
  }

  /* Social + stats row */
  .hx-foot {
    display: flex; flex-direction: column; gap: 1.75rem; align-items: center;
    padding-top: 1.75rem; border-top: 1px solid var(--border);
  }
  @media (min-width: 640px) { .hx-foot { flex-direction: row; justify-content: space-between; } }

  .hx-socials { display: flex; gap: 0.6rem; }
  .hx-social {
    width: 42px; height: 42px; border-radius: 50%; display: flex; align-items: center;
    justify-content: center; color: var(--text-2); background: var(--surface);
    border: 1px solid var(--border); transition: all var(--ease);
  }
  .hx-social:hover { color: #fff; border-color: var(--border-hover); transform: translateY(-3px);
    background: rgba(59,130,246,0.15); box-shadow: 0 8px 20px rgba(59,130,246,0.25); }
  .hx-social:focus-visible { outline: 2px solid #60a5fa; outline-offset: 2px; }

  .hx-stats { display: flex; gap: 2rem; }
  .hx-stat-value { font-size: 1.6rem; font-weight: 700; letter-spacing: -0.02em; color: var(--text); line-height: 1; }
  .hx-stat-label { font-size: 0.72rem; color: var(--text-3); margin-top: 0.35rem; }

  /* Image */
  .hx-image-col {
    flex-shrink: 0; order: 1; display: flex; justify-content: center; position: relative;
    animation: hxUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s both;
  }
  @media (min-width: 1024px) { .hx-image-col { order: 2; } }

  .hx-frame {
    position: relative; width: clamp(180px, 32vw, 300px); aspect-ratio: 1;
    border-radius: 32px; animation: hxFloat 6s ease-in-out infinite;
  }
  @keyframes hxFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  .hx-frame::before {
    content: ''; position: absolute; inset: -2px; border-radius: 34px; z-index: -1;
    background: linear-gradient(135deg, rgba(59,130,246,0.6), rgba(6,182,212,0.35), transparent 65%);
  }
  .hx-frame::after {
    content: ''; position: absolute; inset: 0; border-radius: 32px; z-index: 2; pointer-events: none;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.07) inset, 0 36px 70px rgba(0,0,0,0.55);
  }
  .hx-frame img { border-radius: 32px; object-fit: cover; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); }
  .hx-frame:hover img { transform: scale(1.04); }

  .hx-chip {
    position: absolute; z-index: 3; display: flex; align-items: center; gap: 0.5rem;
    font-size: 0.72rem; font-weight: 600; color: var(--text);
    background: rgba(8,12,20,0.78); border: 1px solid var(--border);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    padding: 0.5rem 0.85rem; border-radius: 0.9rem; box-shadow: 0 12px 30px rgba(0,0,0,0.4);
    animation: hxFloat 5s ease-in-out infinite;
  }
  .hx-chip-1 { bottom: -14px; left: -18px; animation-delay: -1s; }
  .hx-chip-2 { top: 16px; right: -22px; animation-delay: -3s; }
  .hx-chip-icon { font-size: 0.95rem; }

  @media (max-width: 480px) {
    .hx-chip-1 { left: -6px; }
    .hx-chip-2 { right: -6px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hx-orb, .hx-frame, .hx-chip, .hx-text, .hx-image-col, .hx-role,
    .hx-avail-dot, .hx-caret { animation: none !important; }
  }
`;

export function HeroSectionSimple() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hx">
      <style>{styles}</style>

      <div className="hx-grid" />
      <div className="hx-orb hx-orb-1" />
      <div className="hx-orb hx-orb-2" />
      <div className="hx-orb hx-orb-3" />

      <div className="hx-container">
        <div className="hx-inner">
          {/* Text */}
          <div className="hx-text">
            <span className="hx-avail">
              <span className="hx-avail-dot" />
              Open to full-time roles &amp; freelance projects
            </span>

            <p className="hx-hello">Hi, I&apos;m</p>
            <h1 className="hx-name">Baliddawa Allan</h1>

            <div className="hx-role-line" aria-live="polite">
              <span key={roleIndex} className="hx-role">
                {roles[roleIndex]}
              </span>
              <span className="hx-caret" aria-hidden="true" />
            </div>

            <p className="hx-sub">
              I turn ideas into fast, reliable web applications, from the database and API to the
              interface people actually enjoy using. Clean code, clear communication, and results
              you can measure.
            </p>

            <div className="hx-loc">
              <MapPin size={14} /> Kampala, Uganda · Available for remote work worldwide
            </div>

            <div className="hx-cta">
              <a href="#projects" className="hx-btn hx-btn-primary">
                View My Work <ArrowRight size={16} className="hx-arrow" />
              </a>
              <a href="#contact" className="hx-btn hx-btn-outline">
                <Mail size={16} /> Let&apos;s Talk
              </a>
            </div>

            <div className="hx-foot">
              <div className="hx-stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="hx-stat-value">{s.value}</div>
                    <div className="hx-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="hx-socials">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="hx-social"
                    aria-label={name}
                    title={name}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hx-image-col">
            <div className="hx-frame">
              <Image
                src="/images/allan.jpg"
                alt="Baliddawa Allan"
                fill
                priority
                quality={90}
                sizes="(max-width: 480px) 180px, (max-width: 1024px) 240px, 300px"
              />
              <div className="hx-chip hx-chip-1">
                <span className="hx-chip-icon">☕</span> Java · Spring Boot
              </div>
              <div className="hx-chip hx-chip-2">
                <span className="hx-chip-icon">⚛️</span> React · Next.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}