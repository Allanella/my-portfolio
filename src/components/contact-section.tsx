'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Globe, Copy, Check, ArrowUpRight, Clock } from 'lucide-react';

const EMAIL = 'allanbaliddawa@gmail.com';

const contactMethods = [
  {
    id: 1,
    title: 'Email me',
    description: EMAIL,
    note: 'Replies within 24 hours',
    icon: Mail,
    href: `mailto:${EMAIL}`,
  },
  {
    id: 2,
    title: 'GitHub',
    description: 'Browse my repositories',
    note: 'See how I write code',
    icon: Github,
    href: 'https://github.com/Allanella',
  },
  {
    id: 3,
    title: 'LinkedIn',
    description: "Let's connect professionally",
    note: 'Experience & recommendations',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/allan-baliddawa-828771286/',
  },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Allanella', icon: Github },
  { name: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/allan-baliddawa-828771286/',
    icon: Linkedin,
  },
  { name: 'Portfolio', href: 'https://my-portfolio-flame-tau-63.vercel.app/', icon: Globe },
];

const styles = `
  .ct {
    --bg: #080c14;
    --surface: rgba(255,255,255,0.032);
    --border: rgba(255,255,255,0.08);
    --border-hover: rgba(96,165,250,0.4);
    --accent: #3b82f6;
    --text: #f1f5f9;
    --text-2: #94a3b8;
    --text-3: #64748b;
    --ease: 0.28s cubic-bezier(0.4,0,0.2,1);
    position: relative; overflow: hidden; background: var(--bg); color: var(--text);
    padding: clamp(5rem, 10vw, 8rem) 1.5rem;
    font-family: 'DM Sans', ui-sans-serif, sans-serif;
  }
  .ct-grid {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
  }
  .ct-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
  .ct-orb-1 { width: 420px; height: 420px; bottom: -15%; left: -8%;
    background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%); }
  .ct-orb-2 { width: 300px; height: 300px; top: 5%; right: -5%;
    background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%); }

  .ct-container { position: relative; z-index: 1; max-width: 1040px; margin: 0 auto; }

  .ct-reveal { animation: ctUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
  @keyframes ctUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }

  .ct-header { text-align: center; margin-bottom: 3.5rem; }
  .ct-eyebrow {
    display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.68rem; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
    background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.18);
    padding: 0.32rem 0.85rem; border-radius: 9999px; margin-bottom: 1rem;
  }
  .ct-eyebrow::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
    box-shadow: 0 0 7px var(--accent); animation: ctPulse 2s ease-in-out infinite;
  }
  @keyframes ctPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .45; transform: scale(.8); } }
  .ct-heading {
    font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1;
    margin: 0 0 0.85rem;
    background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 55%, #3b82f6 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .ct-sub { color: var(--text-2); font-size: 1rem; line-height: 1.7; max-width: 50ch; margin: 0 auto; }

  /* Primary CTA panel */
  .ct-panel {
    position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 1.5rem;
    align-items: center; text-align: center; padding: 2.25rem 1.75rem; margin-bottom: 1.5rem;
    border-radius: 1.5rem; border: 1px solid rgba(59,130,246,0.25);
    background: linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,182,212,0.05) 60%, rgba(255,255,255,0.02));
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  }
  @media (min-width: 768px) {
    .ct-panel { flex-direction: row; justify-content: space-between; text-align: left; padding: 2.25rem 2.5rem; }
  }
  .ct-panel-title { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 0.4rem; }
  .ct-panel-text { font-size: 0.9rem; color: var(--text-2); line-height: 1.6; max-width: 46ch; }
  .ct-panel-meta {
    display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.8rem;
    font-size: 0.75rem; color: #86efac;
  }
  .ct-actions { display: flex; flex-direction: column; gap: 0.75rem; width: 100%; }
  @media (min-width: 480px) { .ct-actions { flex-direction: row; width: auto; } }

  .ct-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; cursor: pointer;
    font-family: inherit; font-size: 0.88rem; font-weight: 600; padding: 0.8rem 1.5rem;
    border-radius: 9999px; border: 1px solid transparent; text-decoration: none; white-space: nowrap;
    transition: transform var(--ease), box-shadow var(--ease), background var(--ease), border-color var(--ease);
  }
  .ct-btn:active { transform: scale(0.97); }
  .ct-btn:focus-visible { outline: 2px solid #60a5fa; outline-offset: 3px; }
  .ct-btn-primary { background: linear-gradient(135deg, var(--accent), #2563eb); color: #fff; }
  .ct-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(59,130,246,0.4); }
  .ct-btn-ghost { background: rgba(255,255,255,0.05); color: var(--text); border-color: var(--border); }
  .ct-btn-ghost:hover { transform: translateY(-2px); border-color: var(--border-hover); background: rgba(255,255,255,0.08); }
  .ct-btn-ghost.ct-copied { color: #86efac; border-color: rgba(74,222,128,0.4); }

  /* Cards */
  .ct-cards { display: grid; gap: 1.25rem; grid-template-columns: 1fr; margin-bottom: 2.5rem; }
  @media (min-width: 768px) { .ct-cards { grid-template-columns: repeat(3, 1fr); } }

  .ct-card {
    position: relative; overflow: hidden; display: flex; flex-direction: column; gap: 1.1rem;
    padding: 1.6rem; border-radius: 1.25rem; text-decoration: none; color: inherit;
    background: var(--surface); border: 1px solid var(--border);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease), background var(--ease);
  }
  .ct-card::before {
    content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent);
    opacity: 0; transition: opacity var(--ease);
  }
  .ct-card:hover {
    transform: translateY(-5px); border-color: var(--border-hover); background: rgba(255,255,255,0.05);
    box-shadow: 0 18px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(59,130,246,0.1);
  }
  .ct-card:hover::before { opacity: 1; }
  .ct-card:focus-visible { outline: 2px solid #60a5fa; outline-offset: 3px; }

  .ct-card-top { display: flex; align-items: center; justify-content: space-between; }
  .ct-icon {
    width: 48px; height: 48px; border-radius: 14px; display: flex; align-items: center; justify-content: center;
    color: #fff; background: linear-gradient(135deg, var(--accent), #06b6d4);
    box-shadow: 0 8px 22px rgba(59,130,246,0.35); transition: transform var(--ease);
  }
  .ct-card:hover .ct-icon { transform: scale(1.08) rotate(-4deg); }
  .ct-arrow { color: var(--text-3); transition: transform var(--ease), color var(--ease); }
  .ct-card:hover .ct-arrow { color: #60a5fa; transform: translate(3px, -3px); }

  .ct-card-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem; }
  .ct-card-desc { font-size: 0.85rem; color: var(--text-2); word-break: break-word; }
  .ct-card-note { font-size: 0.75rem; color: var(--text-3); margin-top: 0.5rem; }

  /* Social row */
  .ct-social-wrap { text-align: center; }
  .ct-social-label {
    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
    color: var(--text-3); margin-bottom: 1rem;
  }
  .ct-socials { display: flex; justify-content: center; flex-wrap: wrap; gap: 0.85rem; }
  .ct-social {
    width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: var(--text-2); background: var(--surface); border: 1px solid var(--border);
    transition: all var(--ease);
  }
  .ct-social:hover {
    color: #fff; transform: translateY(-4px); border-color: var(--border-hover);
    background: linear-gradient(135deg, rgba(59,130,246,0.35), rgba(6,182,212,0.2));
    box-shadow: 0 10px 26px rgba(59,130,246,0.3);
  }
  .ct-social:focus-visible { outline: 2px solid #60a5fa; outline-offset: 3px; }

  @media (prefers-reduced-motion: reduce) {
    .ct-reveal, .ct-eyebrow::before { animation: none; }
    .ct-card, .ct-btn, .ct-social, .ct-icon, .ct-arrow { transition: none; }
  }
`;

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="ct">
      <style>{styles}</style>
      <div className="ct-grid" />
      <div className="ct-orb ct-orb-1" />
      <div className="ct-orb ct-orb-2" />

      <div className="ct-container">
        <div className="ct-header ct-reveal">
          <span className="ct-eyebrow">Contact</span>
          <h2 className="ct-heading">Let&apos;s build something great</h2>
          <p className="ct-sub">
            Hiring for your team or have a project in mind? Send me a message and I&apos;ll get
            back to you quickly.
          </p>
        </div>

        {/* Primary call to action */}
        <div className="ct-panel ct-reveal" style={{ animationDelay: '0.1s' }}>
          <div>
            <h3 className="ct-panel-title">Ready when you are</h3>
            <p className="ct-panel-text">
              Open to full-time roles, contracts and freelance work, remote or on-site.
            </p>
            <span className="ct-panel-meta">
              <Clock size={13} /> Typically replies within 24 hours
            </span>
          </div>
          <div className="ct-actions">
            <a href={`mailto:${EMAIL}`} className="ct-btn ct-btn-primary">
              <Mail size={16} /> Send an email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className={`ct-btn ct-btn-ghost ${copied ? 'ct-copied' : ''}`}
              aria-live="polite"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied!' : 'Copy email'}
            </button>
          </div>
        </div>

        {/* Contact cards */}
        <div className="ct-cards">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            const external = method.href.startsWith('http');
            return (
              <a
                key={method.id}
                href={method.href}
                className="ct-card ct-reveal"
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="ct-card-top">
                  <div className="ct-icon">
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight size={18} className="ct-arrow" />
                </div>
                <div>
                  <h3 className="ct-card-title">{method.title}</h3>
                  <p className="ct-card-desc">{method.description}</p>
                  <p className="ct-card-note">{method.note}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social row */}
        <div className="ct-social-wrap ct-reveal" style={{ animationDelay: '0.5s' }}>
          <p className="ct-social-label">Find me online</p>
          <div className="ct-socials">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                className="ct-social"
                aria-label={name}
                title={name}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}