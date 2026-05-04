'use client';

import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of the People',
    period: '2019 – 2023',
    location: 'Kampala, Uganda',
    description:
      'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
    achievements: [
      "Dean's List for 3 consecutive semesters",
      'Lead Developer for University Tech Club',
      'Published research on Machine Learning applications',
    ],
  },
  {
    id: 2,
    degree: 'Full-Stack Web Development Bootcamp',
    institution: 'Microverse',
    period: '2022 – 2023',
    location: 'Remote',
    description:
      'Intensive program covering modern web technologies with emphasis on React, Node.js, and cloud deployment.',
    achievements: [
      'Completed 50+ projects',
      'Mentored 15+ junior developers',
      'Achieved 95% code review approval rate',
    ],
  },
  {
    id: 3,
    degree: 'AWS Cloud Practitioner Certification',
    institution: 'Amazon Web Services',
    period: '2023',
    location: 'Online',
    description:
      'Certification covering cloud computing fundamentals, AWS services, and best practices.',
    achievements: [
      'AWS Certified Cloud Practitioner',
      'Deployed 10+ applications on AWS',
      'Optimised cloud infrastructure reducing costs by 30%',
    ],
  },
];

export function EducationSectionSimple() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        :root {
          --e-bg: #080c14;
          --e-surface: rgba(255,255,255,0.032);
          --e-border: rgba(255,255,255,0.07);
          --e-border-hover: rgba(96,165,250,0.28);
          --e-accent: #3b82f6;
          --e-accent2: #06b6d4;
          --e-text: #f1f5f9;
          --e-muted: #94a3b8;
          --e-dim: #64748b;
          --e-pill: 9999px;
          --e-radius: 1.25rem;
          --e-ease: 0.28s cubic-bezier(0.4,0,0.2,1);
          --font-body: 'DM Sans', ui-sans-serif, sans-serif;
        }

        /* ── Section shell ── */
        .e-section {
          position: relative;
          background: var(--e-bg);
          padding: clamp(5rem, 10vw, 8rem) 1.5rem;
          overflow: hidden;
          font-family: var(--font-body);
        }

        .e-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
          z-index: 0;
        }

        .e-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
          pointer-events: none;
          z-index: 0;
        }

        .e-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .e-orb-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
          top: 5%; right: -8%;
          animation: eOrbDrift 20s ease-in-out infinite alternate;
        }

        .e-orb-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(6,182,212,0.055) 0%, transparent 70%);
          bottom: 10%; left: -5%;
          animation: eOrbDrift 15s ease-in-out infinite alternate-reverse;
        }

        @keyframes eOrbDrift {
          from { transform: translate(0,0); }
          to   { transform: translate(20px, -15px); }
        }

        /* ── Container ── */
        .e-container {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .e-header {
          text-align: center;
          margin-bottom: 4rem;
          animation: eFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
        }

        .e-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--e-accent);
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.18);
          padding: 0.32rem 0.85rem;
          border-radius: var(--e-pill);
          margin-bottom: 1rem;
        }

        .e-eyebrow::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--e-accent);
          box-shadow: 0 0 7px var(--e-accent);
          animation: ePulse 2s ease-in-out infinite;
        }

        @keyframes ePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.8); }
        }

        .e-heading {
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

        .e-subheading {
          font-size: 1rem;
          color: var(--e-muted);
          font-weight: 400;
        }

        /* ── Timeline track ── */
        .e-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Vertical line */
        .e-timeline::before {
          content: '';
          position: absolute;
          left: 27px;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 10%, rgba(59,130,246,0.3) 90%, transparent);
          z-index: 0;
        }

        @media (min-width: 640px) {
          .e-timeline::before { left: 31px; }
        }

        /* ── Timeline item ── */
        .e-item {
          position: relative;
          display: flex;
          gap: 1.5rem;
          padding-bottom: 2rem;
          animation: eFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both;
        }

        .e-item:last-child { padding-bottom: 0; }

        .e-item:nth-child(1) { animation-delay: 0s; }
        .e-item:nth-child(2) { animation-delay: 0.12s; }
        .e-item:nth-child(3) { animation-delay: 0.24s; }

        @keyframes eFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Icon node ── */
        .e-node {
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          width: 56px; height: 56px;
          border-radius: 50%;
          background: rgba(59,130,246,0.09);
          border: 1px solid rgba(59,130,246,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--e-accent);
          transition: background var(--e-ease), border-color var(--e-ease), box-shadow var(--e-ease), transform var(--e-ease);
        }

        .e-card:hover .e-node {
          background: rgba(59,130,246,0.16);
          border-color: rgba(59,130,246,0.45);
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
          transform: scale(1.08);
        }

        /* ── Card ── */
        .e-card {
          flex: 1;
          background: var(--e-surface);
          border: 1px solid var(--e-border);
          border-radius: var(--e-radius);
          padding: 1.75rem;
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: border-color var(--e-ease), background var(--e-ease), box-shadow var(--e-ease), transform var(--e-ease);
          position: relative;
          overflow: hidden;
        }

        /* Shimmer top line */
        .e-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
          opacity: 0;
          transition: opacity var(--e-ease);
        }

        /* Tint overlay */
        .e-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--e-radius);
          background: linear-gradient(135deg, rgba(59,130,246,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity var(--e-ease);
          pointer-events: none;
        }

        .e-card:hover {
          border-color: var(--e-border-hover);
          background: rgba(255,255,255,0.05);
          box-shadow: 0 16px 48px rgba(0,0,0,0.38), 0 0 0 1px rgba(59,130,246,0.1);
          transform: translateY(-3px);
        }

        .e-card:hover::before,
        .e-card:hover::after { opacity: 1; }

        /* ── Card top row ── */
        .e-card-top {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.85rem;
          position: relative;
          z-index: 1;
        }

        .e-degree {
          font-size: clamp(1rem, 2vw, 1.15rem);
          font-weight: 600;
          color: var(--e-text);
          letter-spacing: -0.01em;
          line-height: 1.3;
          flex: 1;
          min-width: 0;
          transition: color var(--e-ease);
        }

        .e-card:hover .e-degree { color: #fff; }

        .e-institution-badge {
          display: inline-flex;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--e-accent);
          background: rgba(59,130,246,0.09);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 0.28rem 0.75rem;
          border-radius: var(--e-pill);
          white-space: nowrap;
        }

        /* ── Meta pills ── */
        .e-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .e-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--e-muted);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--e-border);
          padding: 0.28rem 0.75rem;
          border-radius: var(--e-pill);
        }

        .e-pill svg { color: var(--e-accent); flex-shrink: 0; }

        /* ── Description ── */
        .e-desc {
          font-size: 0.875rem;
          line-height: 1.75;
          color: var(--e-muted);
          margin-bottom: 1.1rem;
          position: relative;
          z-index: 1;
          transition: color var(--e-ease);
        }

        .e-card:hover .e-desc { color: #9bb0c6; }

        /* ── Achievements ── */
        .e-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          z-index: 1;
          padding-top: 1rem;
          border-top: 1px solid var(--e-border);
        }

        .e-achievement {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.8rem;
          color: var(--e-dim);
          transition: color var(--e-ease);
        }

        .e-card:hover .e-achievement { color: var(--e-muted); }

        .e-achievement-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--e-accent);
          box-shadow: 0 0 6px rgba(59,130,246,0.5);
          flex-shrink: 0;
          margin-top: 0.38rem;
        }
      `}</style>

      <section id="education" className="e-section">
        <div className="e-grid-bg" />
        <div className="e-orb e-orb-1" />
        <div className="e-orb e-orb-2" />

        <div className="e-container">
          {/* Header */}
          <div className="e-header">
            <span className="e-eyebrow">Background</span>
            <h2 className="e-heading">Education & Certifications</h2>
            <p className="e-subheading">
              My academic journey and continuous learning path to excellence
            </p>
          </div>

          {/* Timeline */}
          <div className="e-timeline">
            {education.map((edu, index) => (
              <div key={edu.id} className="e-item" style={{ animationDelay: `${index * 0.12}s` }}>
                {/* Node */}
                <div className="e-node">
                  <GraduationCap size={22} />
                </div>

                {/* Card */}
                <div className="e-card">
                  <div className="e-card-top">
                    <h3 className="e-degree">{edu.degree}</h3>
                    <span className="e-institution-badge">{edu.institution}</span>
                  </div>

                  <div className="e-meta">
                    <span className="e-pill">
                      <Calendar size={11} /> {edu.period}
                    </span>
                    <span className="e-pill">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>

                  <p className="e-desc">{edu.description}</p>

                  <div className="e-achievements">
                    {edu.achievements.map((a, i) => (
                      <div key={i} className="e-achievement">
                        <span className="e-achievement-dot" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
