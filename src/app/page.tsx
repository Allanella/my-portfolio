import { HeroSectionSimple } from '@/components/hero-section-simple';
import { NavigationSimple } from '@/components/navigation-simple';
import { StatsSectionSimple } from '@/components/stats-section-simple';
import { ProjectsSectionSimple } from '@/components/projects-section-simple';
import { ServicesSectionSimple } from '@/components/services-section-simple';
import { EducationSectionSimple } from '@/components/education-section-simple';
import { TestimonialsSectionSimple } from '@/components/testimonials-section-simple';
import { FooterSimple } from '@/components/footer-simple';
import { Mail, Phone, MapPin } from 'lucide-react';

/* ─────────────────────────────────────────────
   Inline styles scoped to this page's sections
───────────────────────────────────────────── */
const pageStyles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  :root {
    --p-bg: #080c14;
    --p-surface: rgba(255,255,255,0.032);
    --p-border: rgba(255,255,255,0.07);
    --p-border-hover: rgba(96,165,250,0.28);
    --p-accent: #3b82f6;
    --p-text: #f1f5f9;
    --p-muted: #94a3b8;
    --p-dim: #64748b;
    --p-green: #4ade80;
    --p-pill: 9999px;
    --p-radius: 1.25rem;
    --p-ease: 0.28s cubic-bezier(0.4,0,0.2,1);
    --font-body: 'DM Sans', ui-sans-serif, sans-serif;
  }

  /* ── Shared section shell ── */
  .ps-section {
    position: relative;
    background: var(--p-bg);
    padding: clamp(5rem, 10vw, 8rem) 1.5rem;
    overflow: hidden;
    font-family: var(--font-body);
  }

  .ps-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    background-size: 180px;
    pointer-events: none;
    z-index: 0;
  }

  .ps-grid-bg {
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

  .ps-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Container ── */
  .ps-container {
    position: relative;
    z-index: 1;
    max-width: 1140px;
    margin: 0 auto;
  }

  /* ── Shared header ── */
  .ps-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .ps-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--p-accent);
    background: rgba(59,130,246,0.08);
    border: 1px solid rgba(59,130,246,0.18);
    padding: 0.32rem 0.85rem;
    border-radius: var(--p-pill);
    margin-bottom: 1rem;
  }

  .ps-eyebrow::before {
    content: '';
    width: 5px; height: 5px;
    border-radius: 50%;
    background: var(--p-accent);
    box-shadow: 0 0 7px var(--p-accent);
    animation: psPulse 2s ease-in-out infinite;
  }

  @keyframes psPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.45; transform: scale(0.8); }
  }

  .ps-heading {
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

  .ps-subheading {
    font-size: 1rem;
    color: var(--p-muted);
    font-weight: 400;
  }

  /* ── Shared card ── */
  .ps-card {
    background: var(--p-surface);
    border: 1px solid var(--p-border);
    border-radius: var(--p-radius);
    padding: 1.75rem;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: border-color var(--p-ease), background var(--p-ease),
                box-shadow var(--p-ease), transform var(--p-ease);
    position: relative;
    overflow: hidden;
  }

  .ps-card::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent);
    opacity: 0;
    transition: opacity var(--p-ease);
  }

  .ps-card:hover {
    border-color: var(--p-border-hover);
    background: rgba(255,255,255,0.05);
    box-shadow: 0 16px 48px rgba(0,0,0,0.38), 0 0 0 1px rgba(59,130,246,0.1);
    transform: translateY(-3px);
  }

  .ps-card:hover::before { opacity: 1; }

  .ps-card-heading {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--p-accent);
    margin-bottom: 1rem;
  }

  /* ── Skills grid ── */
  .ps-skills-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    .ps-skills-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .ps-skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .ps-tag {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--p-muted);
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--p-border);
    padding: 0.28rem 0.7rem;
    border-radius: var(--p-pill);
    transition: color var(--p-ease), border-color var(--p-ease), background var(--p-ease);
  }

  .ps-card:hover .ps-tag {
    color: #b0bfcc;
    border-color: rgba(59,130,246,0.2);
  }

  /* ── Contact grid ── */
  .ps-contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    .ps-contact-grid { grid-template-columns: 1.1fr 1fr; }
  }

  /* ── Form ── */
  .ps-form-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .ps-label {
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--p-muted);
    letter-spacing: 0.02em;
  }

  .ps-input,
  .ps-select,
  .ps-textarea {
    width: 100%;
    padding: 0.7rem 1rem;
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--p-border);
    border-radius: 0.75rem;
    color: var(--p-text);
    font-family: var(--font-body);
    font-size: 0.875rem;
    outline: none;
    transition: border-color var(--p-ease), background var(--p-ease), box-shadow var(--p-ease);
    box-sizing: border-box;
  }

  .ps-input::placeholder,
  .ps-textarea::placeholder { color: var(--p-dim); }

  .ps-select option { background: #0f172a; color: var(--p-text); }

  .ps-input:focus,
  .ps-select:focus,
  .ps-textarea:focus {
    border-color: rgba(59,130,246,0.4);
    background: rgba(59,130,246,0.04);
    box-shadow: 0 0 0 3px rgba(59,130,246,0.08);
  }

  .ps-textarea { resize: none; line-height: 1.65; }

  .ps-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.8rem 1.75rem;
    background: linear-gradient(135deg, var(--p-accent), #2563eb);
    color: #fff;
    font-family: var(--font-body);
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    border-radius: var(--p-pill);
    cursor: pointer;
    margin-top: 0.5rem;
    transition: transform var(--p-ease), box-shadow var(--p-ease);
    position: relative;
    overflow: hidden;
  }

  .ps-submit::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    opacity: 0;
    transition: opacity var(--p-ease);
  }

  .ps-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(59,130,246,0.38);
  }

  .ps-submit:hover::after { opacity: 1; }
  .ps-submit:active { transform: scale(0.97); }

  /* ── Contact info items ── */
  .ps-info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid var(--p-border);
  }

  .ps-info-item:first-child { padding-top: 0; }
  .ps-info-item:last-child  { border-bottom: none; padding-bottom: 0; }

  .ps-info-icon {
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: rgba(59,130,246,0.09);
    border: 1px solid rgba(59,130,246,0.2);
    color: var(--p-accent);
  }

  .ps-info-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--p-accent);
    margin-bottom: 0.2rem;
  }

  .ps-info-value {
    font-size: 0.875rem;
    color: var(--p-text);
    font-weight: 500;
    margin-bottom: 0.15rem;
  }

  .ps-info-note {
    font-size: 0.75rem;
    color: var(--p-dim);
  }

  /* ── Why work with me ── */
  .ps-why-list {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    margin-top: 0.25rem;
  }

  .ps-why-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    font-size: 0.855rem;
    color: var(--p-muted);
  }

  .ps-why-dot {
    width: 18px; height: 18px;
    border-radius: 50%;
    background: rgba(74,222,128,0.12);
    border: 1px solid rgba(74,222,128,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .ps-why-dot::after {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--p-green);
    box-shadow: 0 0 6px var(--p-green);
  }

  /* ── Fade-up animation ── */
  .ps-fade-up {
    animation: psFadeUp 0.65s cubic-bezier(0.22,1,0.36,1) both;
  }

  @keyframes psFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;

const skills = [
  {
    label: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular', 'HTML5', 'CSS3'],
  },
  {
    label: 'Backend',
    tags: [
      'Java',
      'Spring Boot',
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'REST APIs',
    ],
  },
  {
    label: 'Tools & Cloud',
    tags: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'CI/CD', 'Agile', 'VS Code'],
  },
];

const contactInfo = [
  {
    icon: <Mail size={16} />,
    label: 'Email',
    value: 'allanbaliddawa@gmail.com',
    note: 'Response within 24 hours',
  },
  {
    icon: <Phone size={16} />,
    label: 'Phone',
    value: '+256 700966715',
    note: 'Available 9 AM – 6 PM EAT',
  },
  {
    icon: <MapPin size={16} />,
    label: 'Location',
    value: 'Kampala, Uganda',
    note: 'Available for remote work worldwide',
  },
];

const reasons = [
  '5+ years of proven experience',
  '50+ successful projects delivered',
  '95% client satisfaction rate',
  'Ongoing support and maintenance',
];

export default function Home() {
  return (
    <>
      <style>{pageStyles}</style>

      <div style={{ background: '#080c14' }}>
        <NavigationSimple />

        {/* ── Hero ── */}
        <section id="about">
          <HeroSectionSimple />
        </section>

        {/* ── Stats ── */}
        <StatsSectionSimple />

        {/* ── Skills ── */}
        <section id="skills" className="ps-section">
          <div className="ps-grid-bg" />
          <div
            className="ps-orb"
            style={{
              width: 380,
              height: 380,
              background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
              top: '-10%',
              right: '-5%',
            }}
          />

          <div className="ps-container">
            <div className="ps-header ps-fade-up">
              <span className="ps-eyebrow">Stack</span>
              <h2 className="ps-heading">Technical Expertise</h2>
              <p className="ps-subheading">
                Cutting-edge technologies and tools I master to deliver exceptional results
              </p>
            </div>

            <div className="ps-skills-grid">
              {skills.map((s, i) => (
                <div
                  key={s.label}
                  className="ps-card ps-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <p className="ps-card-heading">{s.label}</p>
                  <div className="ps-skill-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="ps-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <ServicesSectionSimple />

        {/* ── Projects ── */}
        <ProjectsSectionSimple />

        {/* ── Education ── */}
        <EducationSectionSimple />

        {/* ── Testimonials ── */}
        <TestimonialsSectionSimple />

        {/* ── Contact ── */}
        <section id="contact" className="ps-section">
          <div className="ps-grid-bg" />
          <div
            className="ps-orb"
            style={{
              width: 420,
              height: 420,
              background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
              bottom: '-15%',
              left: '-8%',
            }}
          />
          <div
            className="ps-orb"
            style={{
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(6,182,212,0.055) 0%, transparent 70%)',
              top: '10%',
              right: '-5%',
            }}
          />

          <div className="ps-container">
            <div className="ps-header ps-fade-up">
              <span className="ps-eyebrow">Contact</span>
              <h2 className="ps-heading">Start Your Project Today</h2>
              <p className="ps-subheading">
                Let's build something amazing together. Your success is my priority.
              </p>
            </div>

            <div className="ps-contact-grid">
              {/* Form */}
              <div className="ps-card ps-fade-up">
                <p className="ps-card-heading">Send a Message</p>

                <div className="ps-form-group">
                  <label className="ps-label">Your Name</label>
                  <input type="text" className="ps-input" placeholder="John Doe" />
                </div>

                <div className="ps-form-group">
                  <label className="ps-label">Email Address</label>
                  <input type="email" className="ps-input" placeholder="john@example.com" />
                </div>

                <div className="ps-form-group">
                  <label className="ps-label">Project Type</label>
                  <select className="ps-select">
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="ps-form-group">
                  <label className="ps-label">Project Details</label>
                  <textarea
                    rows={4}
                    className="ps-textarea"
                    placeholder="Tell me about your project…"
                  />
                </div>

                <button type="submit" className="ps-submit">
                  Send Project Inquiry →
                </button>
              </div>

              {/* Right column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Direct contact */}
                <div className="ps-card ps-fade-up" style={{ animationDelay: '0.1s' }}>
                  <p className="ps-card-heading">Get in Touch Directly</p>
                  <div>
                    {contactInfo.map((c) => (
                      <div key={c.label} className="ps-info-item">
                        <div className="ps-info-icon">{c.icon}</div>
                        <div>
                          <p className="ps-info-label">{c.label}</p>
                          <p className="ps-info-value">{c.value}</p>
                          <p className="ps-info-note">{c.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why work with me */}
                <div className="ps-card ps-fade-up" style={{ animationDelay: '0.2s' }}>
                  <p className="ps-card-heading">Why Work With Me</p>
                  <div className="ps-why-list">
                    {reasons.map((r) => (
                      <div key={r} className="ps-why-item">
                        <span className="ps-why-dot" />
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSimple />
      </div>
    </>
  );
}
