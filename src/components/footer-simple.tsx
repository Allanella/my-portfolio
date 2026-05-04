'use client';

import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function FooterSimple() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

        :root {
          --f-bg: #06090f;
          --f-surface: rgba(255,255,255,0.032);
          --f-border: rgba(255,255,255,0.07);
          --f-accent: #3b82f6;
          --f-accent2: #06b6d4;
          --f-text: #f1f5f9;
          --f-muted: #94a3b8;
          --f-dim: #475569;
          --f-pill: 9999px;
          --f-ease: 0.25s cubic-bezier(0.4,0,0.2,1);
          --font-body: 'DM Sans', ui-sans-serif, sans-serif;
        }

        /* ── Footer shell ── */
        .f-footer {
          position: relative;
          background: var(--f-bg);
          border-top: 1px solid var(--f-border);
          font-family: var(--font-body);
          overflow: hidden;
        }

        /* Noise grain */
        .f-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 180px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orb */
        .f-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
          width: 500px; height: 300px;
          background: radial-gradient(circle, rgba(59,130,246,0.055) 0%, transparent 70%);
          bottom: -80px; left: 50%;
          transform: translateX(-50%);
        }

        /* ── Container ── */
        .f-container {
          position: relative;
          z-index: 1;
          max-width: 1140px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        @media (min-width: 768px) {
          .f-container { padding: 5rem 2.5rem 2.5rem; }
        }

        /* ── Top divider line ── */
        .f-top-line {
          position: absolute;
          top: 0; left: 10%; right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent);
        }

        /* ── Grid ── */
        .f-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        @media (min-width: 640px) {
          .f-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .f-grid { grid-template-columns: 2fr 1fr 1fr 1.4fr; gap: 3rem; }
        }

        /* ── Brand column ── */
        .f-brand-name {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 55%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .f-brand-desc {
          font-size: 0.845rem;
          line-height: 1.7;
          color: var(--f-muted);
          margin-bottom: 1.5rem;
          max-width: 30ch;
        }

        /* ── Social icons ── */
        .f-socials {
          display: flex;
          gap: 0.6rem;
        }

        .f-social-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--f-muted);
          background: var(--f-surface);
          border: 1px solid var(--f-border);
          text-decoration: none;
          transition: color var(--f-ease), background var(--f-ease), border-color var(--f-ease), transform var(--f-ease), box-shadow var(--f-ease);
        }

        .f-social-btn:hover {
          color: var(--f-text);
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(59,130,246,0.2);
        }

        /* ── Column headings ── */
        .f-col-heading {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--f-accent);
          margin-bottom: 1.1rem;
        }

        /* ── Nav links ── */
        .f-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .f-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.855rem;
          color: var(--f-muted);
          text-decoration: none;
          transition: color var(--f-ease), gap var(--f-ease);
        }

        .f-link::before {
          content: '';
          width: 0;
          height: 1px;
          background: var(--f-accent);
          transition: width var(--f-ease);
          flex-shrink: 0;
        }

        .f-link:hover {
          color: var(--f-text);
          gap: 0.65rem;
        }

        .f-link:hover::before { width: 10px; }

        /* ── Contact list ── */
        .f-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
        }

        .f-contact-icon {
          color: var(--f-accent);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .f-contact-text {
          font-size: 0.835rem;
          color: var(--f-muted);
          line-height: 1.5;
          word-break: break-word;
        }

        /* ── Bottom bar ── */
        .f-bottom {
          border-top: 1px solid var(--f-border);
          padding-top: 1.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .f-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .f-copy {
          font-size: 0.775rem;
          color: var(--f-dim);
        }

        .f-bottom-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Status pill */
        .f-status {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: #4ade80;
          background: rgba(74,222,128,0.07);
          border: 1px solid rgba(74,222,128,0.18);
          padding: 0.3rem 0.8rem;
          border-radius: var(--f-pill);
        }

        .f-status-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: fPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes fPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.8); }
        }

        /* Scroll-to-top */
        .f-scroll-top {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--f-muted);
          background: var(--f-surface);
          border: 1px solid var(--f-border);
          cursor: pointer;
          transition: color var(--f-ease), background var(--f-ease), border-color var(--f-ease), transform var(--f-ease), box-shadow var(--f-ease);
        }

        .f-scroll-top:hover {
          color: var(--f-text);
          background: rgba(59,130,246,0.12);
          border-color: rgba(59,130,246,0.3);
          transform: translateY(-3px);
          box-shadow: 0 6px 18px rgba(59,130,246,0.22);
        }
      `}</style>

      <footer className="f-footer">
        <div className="f-top-line" />
        <div className="f-orb" />

        <div className="f-container">
          {/* Grid */}
          <div className="f-grid">
            {/* Brand */}
            <div>
              <p className="f-brand-name">Baliddawa Allan</p>
              <p className="f-brand-desc">
                Transforming ideas into powerful, scalable web applications that drive business
                growth and user engagement.
              </p>
              <div className="f-socials">
                <a
                  href="https://github.com/Allanella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="f-social-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="mailto:allanbaliddawa@gmail.com"
                  className="f-social-btn"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="f-col-heading">Services</p>
              <ul className="f-links">
                {[
                  'Full-Stack Development',
                  'E-Commerce Solutions',
                  'Mobile App Development',
                  'Cloud Deployment',
                ].map((s) => (
                  <li key={s}>
                    <a href="#services" className="f-link">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="f-col-heading">Quick Links</p>
              <ul className="f-links">
                {[
                  ['#about', 'About Me'],
                  ['#projects', 'Portfolio'],
                  ['#testimonials', 'Testimonials'],
                  ['#contact', 'Contact'],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a href={href} className="f-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="f-col-heading">Contact</p>
              <ul className="f-contact-list">
                <li className="f-contact-item">
                  <Mail size={14} className="f-contact-icon" />
                  <span className="f-contact-text">allanbaliddawa@gmail.com</span>
                </li>
                <li className="f-contact-item">
                  <Phone size={14} className="f-contact-icon" />
                  <span className="f-contact-text">+256 700966715</span>
                </li>
                <li className="f-contact-item">
                  <MapPin size={14} className="f-contact-icon" />
                  <span className="f-contact-text">Kampala, Uganda</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="f-bottom">
            <p className="f-copy">
              © {new Date().getFullYear()} Baliddawa Allan. All rights reserved.
            </p>

            <div className="f-bottom-right">
              <span className="f-status">
                <span className="f-status-dot" />
                Available for projects
              </span>
              <button onClick={scrollToTop} className="f-scroll-top" aria-label="Scroll to top">
                <ArrowUp size={15} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
