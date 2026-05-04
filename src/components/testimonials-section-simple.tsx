'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Okello',
    company: 'TechStart Inc.',
    role: 'CEO',
    content:
      'Allan delivered our e-commerce platform on time and exceeded all expectations. His attention to detail and innovative solutions helped us increase conversion by 40%.',
    rating: 5,
    avatar: '/images/phonec.jpg',
    project: 'E-commerce Platform Redesign',
    metric: '+40% conversion',
  },
  {
    id: 2,
    name: 'Sarah Jackie',
    company: 'Global Finance Solutions',
    role: 'CTO',
    content:
      'The student management system Allan built transformed our operations. We now process 10x more students with 50% less manual work. His technical expertise is exceptional.',
    rating: 5,
    avatar: '/images/jacky.jpg',
    project: 'Student Management System',
    metric: '10x throughput',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Digital Agency',
    role: 'Creative Director',
    content:
      'Working with Allan was a game-changer for our agency. His modern design approach and deep understanding of user experience helped us win several major contracts.',
    rating: 5,
    avatar: '/images/code.jpeg',
    project: 'Brand Identity & Web Design',
    metric: 'Multiple contracts won',
  },
];

export function TestimonialsSectionSimple() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <style>{`
        /* ── Tokens (shared with hero) ── */
        :root {
          --t-bg: #080c14;
          --t-surface: rgba(255,255,255,0.035);
          --t-border: rgba(255,255,255,0.07);
          --t-border-hover: rgba(96,165,250,0.3);
          --t-accent: #3b82f6;
          --t-accent2: #06b6d4;
          --t-text: #f1f5f9;
          --t-muted: #94a3b8;
          --t-dim: #64748b;
          --t-radius: 1.25rem;
          --t-pill: 9999px;
          --t-ease: 0.28s cubic-bezier(0.4,0,0.2,1);
          --font-body: 'DM Sans', ui-sans-serif, sans-serif;
        }

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        /* ── Section ── */
        .t-section {
          position: relative;
          background: var(--t-bg);
          padding: clamp(5rem, 10vw, 8rem) 1.5rem;
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* Noise grain */
        .t-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
          z-index: 0;
        }

        /* Grid overlay */
        .t-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 10%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .t-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .t-orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          top: -15%; left: -10%;
          animation: tOrbDrift 22s ease-in-out infinite alternate;
        }

        .t-orb-2 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%);
          bottom: -10%; right: -5%;
          animation: tOrbDrift 16s ease-in-out infinite alternate-reverse;
        }

        @keyframes tOrbDrift {
          from { transform: translate(0,0); }
          to   { transform: translate(25px, -18px); }
        }

        /* ── Container ── */
        .t-container {
          position: relative;
          z-index: 1;
          max-width: 1140px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .t-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: tFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        .t-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--t-accent);
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.18);
          padding: 0.32rem 0.85rem;
          border-radius: var(--t-pill);
          margin-bottom: 1rem;
        }

        .t-eyebrow::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--t-accent);
          box-shadow: 0 0 7px var(--t-accent);
          animation: tPulse 2s ease-in-out infinite;
        }

        @keyframes tPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.8); }
        }

        .t-heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 55%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
        }

        .t-subheading {
          font-size: 1rem;
          color: var(--t-muted);
          font-weight: 400;
        }

        /* ── Grid ── */
        .t-grid-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 768px) {
          .t-grid-cards { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Card ── */
        .t-card {
          position: relative;
          background: var(--t-surface);
          border: 1px solid var(--t-border);
          border-radius: var(--t-radius);
          padding: 1.75rem;
          cursor: pointer;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: transform var(--t-ease), border-color var(--t-ease), box-shadow var(--t-ease), background var(--t-ease);
          animation: tFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
          overflow: hidden;
        }

        .t-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--t-radius);
          background: linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 60%);
          opacity: 0;
          transition: opacity var(--t-ease);
        }

        /* Shimmer line top */
        .t-card::after {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
          opacity: 0;
          transition: opacity var(--t-ease);
        }

        .t-card:hover,
        .t-card.is-active {
          transform: translateY(-5px);
          border-color: var(--t-border-hover);
          background: rgba(255,255,255,0.055);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.12);
        }

        .t-card:hover::before,
        .t-card.is-active::before { opacity: 1; }

        .t-card:hover::after,
        .t-card.is-active::after { opacity: 1; }

        .t-card:nth-child(1) { animation-delay: 0s; }
        .t-card:nth-child(2) { animation-delay: 0.1s; }
        .t-card:nth-child(3) { animation-delay: 0.2s; }

        @keyframes tFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Avatar row ── */
        .t-avatar-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .t-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .t-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid rgba(59,130,246,0.3);
          transition: border-color var(--t-ease);
        }

        .t-card:hover .t-avatar,
        .t-card.is-active .t-avatar {
          border-color: rgba(59,130,246,0.6);
        }

        .t-avatar-badge {
          position: absolute;
          bottom: -2px; right: -2px;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: var(--t-accent);
          border: 2px solid var(--t-bg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .t-avatar-info {
          flex: 1;
          min-width: 0;
        }

        .t-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--t-text);
          margin-bottom: 0.1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .t-role {
          font-size: 0.78rem;
          color: var(--t-accent);
          font-weight: 500;
        }

        .t-company {
          font-size: 0.72rem;
          color: var(--t-dim);
        }

        /* ── Quote icon ── */
        .t-quote-icon {
          position: absolute;
          top: 1.5rem; right: 1.5rem;
          opacity: 0.08;
          color: var(--t-text);
          z-index: 0;
          transition: opacity var(--t-ease);
        }

        .t-card:hover .t-quote-icon,
        .t-card.is-active .t-quote-icon {
          opacity: 0.15;
        }

        /* ── Blockquote ── */
        .t-blockquote {
          position: relative;
          z-index: 1;
          font-size: 0.875rem;
          line-height: 1.75;
          color: var(--t-muted);
          margin: 0 0 1.25rem;
          transition: color var(--t-ease);
        }

        .t-card:hover .t-blockquote,
        .t-card.is-active .t-blockquote {
          color: #b0bfcc;
        }

        /* ── Footer row ── */
        .t-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .t-stars {
          display: flex;
          gap: 2px;
          color: #f59e0b;
        }

        .t-metric {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--t-accent);
          background: rgba(59,130,246,0.09);
          border: 1px solid rgba(59,130,246,0.18);
          padding: 0.22rem 0.65rem;
          border-radius: var(--t-pill);
        }

        .t-project {
          font-size: 0.68rem;
          color: var(--t-dim);
          width: 100%;
          margin-top: 0.4rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--t-border);
        }

        /* ── CTA footer ── */
        .t-cta {
          text-align: center;
          animation: tFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.35s both;
        }

        .t-cta p {
          font-size: 0.875rem;
          color: var(--t-dim);
          margin-bottom: 1.25rem;
        }

        .t-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, var(--t-accent), #2563eb);
          border: none;
          padding: 0.75rem 1.9rem;
          border-radius: var(--t-pill);
          text-decoration: none;
          cursor: pointer;
          transition: transform var(--t-ease), box-shadow var(--t-ease);
          position: relative;
          overflow: hidden;
        }

        .t-cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity var(--t-ease);
        }

        .t-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59,130,246,0.38);
        }

        .t-cta-btn:hover::after { opacity: 1; }
        .t-cta-btn:active { transform: scale(0.97); }
      `}</style>

      <section id="testimonials" className="t-section">
        <div className="t-grid" />
        <div className="t-orb t-orb-1" />
        <div className="t-orb t-orb-2" />

        <div className="t-container">

          {/* Header */}
          <div className="t-header">
            <span className="t-eyebrow">Testimonials</span>
            <h2 className="t-heading">Client Success Stories</h2>
            <p className="t-subheading">What my clients say about working with me</p>
          </div>

          {/* Cards */}
          <div className="t-grid-cards">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className={`t-card${active === t.id ? ' is-active' : ''}`}
                onClick={() => setActive(active === t.id ? null : t.id)}
              >
                {/* Big decorative quote */}
                <Quote className="t-quote-icon" size={52} aria-hidden />

                {/* Avatar + info */}
                <div className="t-avatar-row">
                  <div className="t-avatar-wrap">
                    <img
                      src={t.avatar}
                      alt={`${t.name}, ${t.role} at ${t.company}`}
                      className="t-avatar"
                      loading="lazy"
                    />
                    <span className="t-avatar-badge" aria-hidden>
                      <Star size={9} style={{ fill: '#fff', color: '#fff' }} />
                    </span>
                  </div>
                  <div className="t-avatar-info">
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role}</p>
                    <p className="t-company">{t.company}</p>
                  </div>
                  <span className="t-metric">{t.metric}</span>
                </div>

                {/* Quote */}
                <blockquote className="t-blockquote">"{t.content}"</blockquote>

                {/* Footer */}
                <div className="t-footer-row">
                  <div className="t-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={13} style={{ fill: 'currentColor' }} />
                    ))}
                  </div>
                  <p className="t-project">{t.project}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="t-cta">
            <p>Ready to be the next success story? Let's work together.</p>
            <a href="#contact" className="t-cta-btn">
              Start a Project →
            </a>
          </div>

        </div>
      </section>
    </>
  );
}