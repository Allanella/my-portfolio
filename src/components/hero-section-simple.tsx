'use client';

import Image from 'next/image';
import { Download, Mail } from 'lucide-react';

export function HeroSectionSimple() {
  return (
    <>
      <style>{`
        /* ── Design tokens ── */
        :root {
          --hero-bg: #080c14;
          --hero-surface: rgba(255,255,255,0.035);
          --hero-border: rgba(255,255,255,0.08);
          --hero-border-hover: rgba(96,165,250,0.35);
          --accent-primary: #3b82f6;
          --accent-secondary: #06b6d4;
          --accent-glow: rgba(59,130,246,0.18);
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --text-muted: #64748b;
          --radius-pill: 9999px;
          --radius-card: 1.25rem;
          --transition-base: 0.25s cubic-bezier(0.4,0,0.2,1);
          --font-display: 'Clash Display', 'DM Sans', ui-sans-serif, sans-serif;
          --font-body: 'DM Sans', 'Instrument Sans', ui-sans-serif, sans-serif;
        }

        /* ── Google Fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');

        /* ── Hero wrapper ── */
        .hero-enhanced {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background-color: var(--hero-bg);
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* ── Noise grain overlay ── */
        .hero-enhanced::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Radial spotlight ── */
        .hero-enhanced::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 65% 45%, rgba(59,130,246,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(6,182,212,0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Animated mesh grid ── */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Floating orbs ── */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
          animation: orbDrift var(--dur, 18s) ease-in-out infinite alternate;
        }

        .orb-1 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          top: -10%; right: -5%;
          --dur: 20s;
        }

        .orb-2 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%);
          bottom: 5%; left: -8%;
          --dur: 15s;
          animation-delay: -7s;
        }

        .orb-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%);
          top: 40%; left: 35%;
          --dur: 12s;
          animation-delay: -4s;
        }

        @keyframes orbDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(30px, -20px) scale(1.08); }
        }

        /* ── Container ── */
        .container-enhanced {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }

        @media (min-width: 768px) {
          .container-enhanced { padding: 6rem 2.5rem; }
        }

        /* ── Inner layout ── */
        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .hero-inner {
            flex-direction: row;
            align-items: center;
            gap: 4rem;
          }
        }

        /* ── Text column ── */
        .hero-text {
          flex: 1;
          text-align: center;
          order: 2;
          animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }

        @media (min-width: 1024px) {
          .hero-text { text-align: left; order: 1; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Eyebrow label ── */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent-primary);
          background: rgba(59,130,246,0.08);
          border: 1px solid rgba(59,130,246,0.2);
          padding: 0.35rem 0.9rem;
          border-radius: var(--radius-pill);
          margin-bottom: 1.25rem;
        }

        .hero-eyebrow::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent-primary);
          box-shadow: 0 0 8px var(--accent-primary);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        /* ── Heading ── */
        .hero-heading {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 60%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Sub-heading ── */
        .hero-sub {
          font-size: clamp(0.95rem, 1.6vw, 1.05rem);
          font-weight: 400;
          line-height: 1.75;
          color: var(--text-secondary);
          max-width: 52ch;
          margin: 0 auto 1.75rem;
        }

        @media (min-width: 1024px) {
          .hero-sub { margin-left: 0; }
        }

        /* ── Badge strip ── */
        .badge-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
          margin-bottom: 2.25rem;
        }

        @media (min-width: 1024px) {
          .badge-strip { justify-content: flex-start; }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--hero-surface);
          border: 1px solid var(--hero-border);
          padding: 0.45rem 1rem;
          border-radius: var(--radius-pill);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: color var(--transition-base), border-color var(--transition-base), background var(--transition-base);
          cursor: default;
        }

        .badge:hover {
          color: var(--text-primary);
          border-color: var(--hero-border-hover);
          background: rgba(255,255,255,0.06);
        }

        /* ── CTA buttons ── */
        .cta-row {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        @media (min-width: 480px) {
          .cta-row {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .cta-row { justify-content: flex-start; }
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius-pill);
          border: 1px solid transparent;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          transition: transform var(--transition-base), box-shadow var(--transition-base), background var(--transition-base), border-color var(--transition-base), color var(--transition-base);
          position: relative;
          overflow: hidden;
        }

        .btn:active { transform: scale(0.97); }

        /* Primary */
        .btn-primary {
          background: linear-gradient(135deg, var(--accent-primary) 0%, #2563eb 100%);
          color: #fff;
          box-shadow: 0 0 0 0 rgba(59,130,246,0);
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(59,130,246,0.38);
        }

        .btn-primary:hover::after { opacity: 1; }

        /* Outline */
        .btn-outline {
          background: var(--hero-surface);
          color: var(--text-secondary);
          border-color: var(--hero-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .btn-outline:hover {
          transform: translateY(-2px);
          color: var(--text-primary);
          border-color: var(--hero-border-hover);
          background: rgba(255,255,255,0.065);
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
        }

        /* ── Image column ── */
        .hero-image-col {
          flex-shrink: 0;
          order: 1;
          display: flex;
          justify-content: center;
          animation: fadeSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.15s both;
        }

        @media (min-width: 1024px) {
          .hero-image-col { order: 2; }
        }

        /* ── Image frame ── */
        .image-frame {
          position: relative;
          width: clamp(160px, 30vw, 260px);
          aspect-ratio: 1;
          border-radius: 28px;
          animation: floatY 5s ease-in-out infinite;
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }

        /* Outer glow ring */
        .image-frame::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 30px;
          background: linear-gradient(135deg, rgba(59,130,246,0.5), rgba(6,182,212,0.3), transparent 60%);
          z-index: -1;
        }

        /* Inner shadow layer */
        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 28px;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.06) inset,
            0 32px 60px rgba(0,0,0,0.55);
          z-index: 2;
          pointer-events: none;
        }

        .image-frame img {
          border-radius: 28px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .image-frame:hover img {
          transform: scale(1.04);
        }

        /* Reflection dot accents */
        .image-dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .image-dot-1 {
          width: 10px; height: 10px;
          background: var(--accent-primary);
          box-shadow: 0 0 16px 4px rgba(59,130,246,0.6);
          bottom: -5px; right: 20%;
          animation: dotPop 3s ease-in-out infinite;
        }

        .image-dot-2 {
          width: 6px; height: 6px;
          background: var(--accent-secondary);
          box-shadow: 0 0 12px 3px rgba(6,182,212,0.5);
          top: 12%; left: -3px;
          animation: dotPop 3s ease-in-out 1.5s infinite;
        }

        @keyframes dotPop {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
      `}</style>

      <section className="hero-enhanced">
        {/* Depth layers */}
        <div className="hero-grid" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container-enhanced">
          <div className="hero-inner">

            {/* ── Text ── */}
            <div className="hero-text">
              <span className="hero-eyebrow">Full-Stack Developer</span>

              <h1 className="hero-heading">Baliddawa Allan</h1>

              <p className="hero-sub">
                Transform your ideas into powerful, scalable web applications. I deliver exceptional
                full-stack solutions that drive business growth and user engagement.
              </p>

              <div className="badge-strip">
                <span className="badge">📍 Kampala, Uganda</span>
                <span className="badge">💼 Available for Projects</span>
                <span className="badge">🚀 5+ Years Experience</span>
              </div>

              <div className="cta-row">
                <a href="#projects" className="btn btn-primary">
                  <Download size={16} /> View My Work
                </a>
                <a href="#contact" className="btn btn-outline">
                  <Mail size={16} /> Start a Project
                </a>
              </div>
            </div>

            {/* ── Image ── */}
            <div className="hero-image-col">
              <div className="image-frame">
                <Image
                  src="/images/allan.jpg"
                  alt="Baliddawa Allan"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 230px, 260px"
                />
                <span className="image-dot image-dot-1" />
                <span className="image-dot image-dot-2" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}