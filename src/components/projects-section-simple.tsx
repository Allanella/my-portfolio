'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

type Category = 'web' | 'app' | 'system';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  impact: string;
  category: Category;
};

const filters: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Websites' },
  { id: 'app', label: 'Web Apps' },
  { id: 'system', label: 'Systems' },
];

const categoryLabel: Record<Category, string> = {
  web: 'Website',
  app: 'Web App',
  system: 'System',
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Sabbath School Tracker (PWA)',
    description:
      'Church management PWA that increased member engagement by 60% and streamlined administrative processes for 50+ SDA churches.',
    image: '/images/sst.PNG',
    tech: ['React', 'Node.js', 'Supabase', 'PWA', 'Tailwind CSS'],
    github: 'https://github.com/Allanella',
    demo: '#',
    impact: '60% increase in member engagement',
    category: 'app',
  },
  {
    id: 2,
    title: 'Mount Rwenzori Golf Resort & Spa',
    description:
      'Luxurious hospitality web platform featuring immersive visual galleries, booking inquiries, and high-performance frontend architecture.',
    image: '/images/mt. Rwenzori golf resort and spar.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Allanella',
    demo: 'https://www.mtrwenzorigolfresortspa.com/',
    impact: 'Premium resort digital experience',
    category: 'web',
  },
  {
    id: 3,
    title: 'MachineMan Uganda',
    description:
      'Industrial equipment and commercial machinery supplier platform showcasing catalog listings, technical specs, and client inquiries.',
    image: '/images/machineman.png',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Allanella',
    demo: 'https://machinemanuganda.com',
    impact: 'Expanded commercial equipment reach',
    category: 'web',
  },
  {
    id: 4,
    title: 'Permaculture Hub',
    description:
      'Sustainable agriculture and eco-living information platform promoting regenerative land management and community education.',
    image: '/images/permaculture.png',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Allanella',
    demo: 'https://permaculture-hub.vercel.app/',
    impact: 'Eco-education & community outreach',
    category: 'web',
  },
  {
    id: 5,
    title: 'St. Elizabeth Nkoowe',
    description:
      'Comprehensive institutional website for educational and medical support, providing updates, admissions info, and community resources.',
    image: '/images/StElizabeth.png',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Allanella',
    demo: 'https://stelizabethnkoowe.com/',
    impact: 'Streamlined institutional communications',
    category: 'web',
  },
  {
    id: 6,
    title: 'Soothing Wellness Platform',
    description:
      'Calming wellness and mental health support web application offering guided relaxation sessions, resources, and user dashboards.',
    image: '/images/soothing.png',
    tech: ['React', 'Tailwind CSS', 'Next.js'],
    github: 'https://github.com/Allanella',
    demo: 'https://soothing-eight.vercel.app',
    impact: 'Enhanced digital wellness accessibility',
    category: 'app',
  },
  {
    id: 7,
    title: 'Kaloli Digital Platform',
    description:
      'Modern web application tailored for local enterprise productivity, rapid digital publishing, and user engagement.',
    image: '/images/kaloli.png',
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Allanella',
    demo: 'https://kaloli.vercel.app/',
    impact: 'Optimized digital workflow',
    category: 'web',
  },
  {
    id: 8,
    title: 'Solace Web Experience',
    description:
      'Sleek, responsive digital experience focused on minimalist UI design, performance optimization, and smooth animations.',
    image: '/images/solace.png',
    tech: ['React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Allanella',
    demo: 'https://solace-eta-one.vercel.app/',
    impact: 'High-performance interactive design',
    category: 'web',
  },
  {
    id: 9,
    title: 'Iona Institute Website',
    description:
      'High-performance educational platform that boosted student inquiries by 45% and reduced page load time by 40% through optimized architecture.',
    image: '/images/ionashot.png',
    tech: ['React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Allanella/iona-tech-website',
    demo: 'https://iona-institute.com',
    impact: '45% increase in student inquiries',
    category: 'web',
  },
  {
    id: 10,
    title: 'Student Management System',
    description:
      'Enterprise-grade academic management solution handling 5,000+ students with automated grading, attendance tracking, and comprehensive reporting.',
    image: '/images/edup.png',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/Allanella/student-management',
    demo: '#',
    impact: '5,000+ students managed',
    category: 'system',
  },
  {
    id: 11,
    title: 'OpenELIS Laboratory System',
    description:
      'Medical lab management platform that improved sample processing efficiency by 70% and reduced errors by 85% for healthcare providers.',
    image: '/images/openelis-screenshot.png',
    tech: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Allanella/openelis',
    demo: '#',
    impact: '70% efficiency improvement',
    category: 'system',
  },
  {
    id: 12,
    title: 'E-commerce Platform',
    description:
      'Complete online retail solution with payment processing, inventory management, and analytics that drove $500K+ in sales for clients.',
    image: '/images/knnshot.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Allanella/ecommerce-platform',
    demo: '#',
    impact: '$500K+ in client revenue',
    category: 'app',
  },
];

const INITIAL_COUNT = 6;
const liveCount = projects.filter((p) => p.demo !== '#').length;

const styles = `
  .pj {
    --bg: #080c14;
    --surface: rgba(255,255,255,0.035);
    --border: rgba(255,255,255,0.08);
    --border-hover: rgba(96,165,250,0.4);
    --accent: #3b82f6;
    --text: #f1f5f9;
    --text-2: #94a3b8;
    --text-3: #64748b;
    --ease: 0.3s cubic-bezier(0.4,0,0.2,1);
    position: relative; overflow: hidden; background: var(--bg); color: var(--text);
    padding: clamp(5rem, 10vw, 8rem) 1.5rem;
    font-family: 'DM Sans', ui-sans-serif, sans-serif;
  }
  .pj-grid-bg {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
    -webkit-mask-image: radial-gradient(ellipse 85% 80% at 50% 50%, black 10%, transparent 80%);
  }
  .pj-orb { position: absolute; border-radius: 50%; filter: blur(90px); pointer-events: none; }
  .pj-orb-1 { width: 420px; height: 420px; top: 0; left: -8%;
    background: radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%); }
  .pj-orb-2 { width: 340px; height: 340px; bottom: 5%; right: -6%;
    background: radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%); }

  .pj-container { position: relative; z-index: 1; max-width: 1180px; margin: 0 auto; }

  /* Header */
  .pj-header { text-align: center; margin-bottom: 2.5rem; }
  .pj-eyebrow {
    display: inline-flex; align-items: center; gap: 0.45rem; font-size: 0.68rem; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent);
    background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.18);
    padding: 0.32rem 0.85rem; border-radius: 9999px; margin-bottom: 1rem;
  }
  .pj-eyebrow::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--accent);
    box-shadow: 0 0 7px var(--accent); animation: pjPulse 2s ease-in-out infinite;
  }
  @keyframes pjPulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .45; transform: scale(.8); } }
  .pj-heading {
    font-size: clamp(1.9rem, 4vw, 3rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.1;
    margin: 0 0 0.85rem;
    background: linear-gradient(135deg, #f1f5f9 0%, #94a3b8 55%, #3b82f6 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .pj-sub { color: var(--text-2); font-size: 1rem; line-height: 1.7; max-width: 54ch; margin: 0 auto 1.25rem; }
  .pj-count { font-size: 0.8rem; color: var(--text-3); }
  .pj-count strong { color: #86efac; font-weight: 600; }

  /* Filters */
  .pj-filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2.5rem; }
  .pj-filter {
    cursor: pointer; font-family: inherit; font-size: 0.82rem; font-weight: 500; color: var(--text-2);
    background: rgba(255,255,255,0.04); border: 1px solid var(--border);
    padding: 0.5rem 1.1rem; border-radius: 9999px; transition: all var(--ease);
  }
  .pj-filter:hover { color: var(--text); border-color: var(--border-hover); }
  .pj-filter[aria-pressed='true'] {
    color: #fff; border-color: transparent;
    background: linear-gradient(135deg, #3b82f6, #2563eb); box-shadow: 0 6px 20px rgba(59,130,246,0.35);
  }
  .pj-filter:focus-visible { outline: 2px solid #60a5fa; outline-offset: 2px; }

  /* Grid */
  .pj-list { display: grid; gap: 1.5rem; grid-template-columns: 1fr; }
  @media (min-width: 700px)  { .pj-list { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1040px) { .pj-list { grid-template-columns: repeat(3, 1fr); } }

  /* Card */
  .pj-card {
    position: relative; display: flex; flex-direction: column; overflow: hidden;
    background: var(--surface); border: 1px solid var(--border); border-radius: 1.4rem;
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    transition: transform var(--ease), border-color var(--ease), box-shadow var(--ease), background var(--ease);
    animation: pjUp 0.6s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes pjUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
  .pj-card:hover {
    transform: translateY(-6px); border-color: var(--border-hover); background: rgba(255,255,255,0.05);
    box-shadow: 0 22px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(59,130,246,0.1);
  }

  /* Image */
  .pj-media { position: relative; aspect-ratio: 16 / 10; overflow: hidden; background: #0f172a; }
  .pj-media img { object-fit: cover; object-position: top; transition: transform 0.7s cubic-bezier(0.22,1,0.36,1); }
  .pj-card:hover .pj-media img { transform: scale(1.06); }
  .pj-media::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background: linear-gradient(to top, rgba(8,12,20,0.75) 0%, rgba(8,12,20,0) 55%);
  }
  .pj-badge {
    position: absolute; z-index: 2; top: 0.85rem; left: 0.85rem;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #e2e8f0;
    background: rgba(8,12,20,0.7); border: 1px solid var(--border);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    padding: 0.3rem 0.7rem; border-radius: 9999px;
  }
  .pj-live {
    position: absolute; z-index: 2; top: 0.85rem; right: 0.85rem; display: inline-flex; align-items: center;
    gap: 0.4rem; font-size: 0.68rem; font-weight: 600; color: #86efac;
    background: rgba(8,12,20,0.7); border: 1px solid rgba(74,222,128,0.3);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    padding: 0.3rem 0.7rem; border-radius: 9999px;
  }
  .pj-live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #4ade80; box-shadow: 0 0 8px #4ade80; }

  .pj-visit {
    position: absolute; z-index: 3; right: 0.9rem; bottom: 0.9rem; display: inline-flex; align-items: center; gap: 0.35rem;
    font-size: 0.78rem; font-weight: 600; color: #fff; text-decoration: none;
    background: linear-gradient(135deg, #3b82f6, #2563eb); padding: 0.5rem 0.95rem; border-radius: 9999px;
    opacity: 0; transform: translateY(8px); transition: all var(--ease);
    box-shadow: 0 8px 22px rgba(59,130,246,0.45);
  }
  .pj-card:hover .pj-visit, .pj-visit:focus-visible { opacity: 1; transform: none; }
  @media (hover: none) { .pj-visit { opacity: 1; transform: none; } }

  /* Body */
  .pj-body { display: flex; flex-direction: column; flex: 1; padding: 1.5rem; }
  .pj-title { font-size: 1.2rem; font-weight: 700; letter-spacing: -0.015em; margin: 0 0 0.6rem; color: var(--text); transition: color var(--ease); }
  .pj-card:hover .pj-title { color: #93c5fd; }
  .pj-desc { font-size: 0.88rem; line-height: 1.7; color: var(--text-2); margin: 0 0 1.1rem; }

  .pj-impact {
    display: inline-flex; align-items: center; gap: 0.5rem; align-self: flex-start;
    font-size: 0.78rem; font-weight: 600; color: #86efac;
    background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.22);
    padding: 0.4rem 0.8rem; border-radius: 0.7rem; margin-bottom: 1.1rem;
  }
  .pj-impact::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #4ade80; flex-shrink: 0; }

  .pj-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.4rem; }
  .pj-chip {
    font-size: 0.72rem; font-weight: 500; color: #93c5fd; background: rgba(59,130,246,0.1);
    border: 1px solid rgba(59,130,246,0.22); padding: 0.28rem 0.65rem; border-radius: 9999px;
    transition: all var(--ease);
  }
  .pj-chip:hover { background: rgba(59,130,246,0.2); border-color: rgba(96,165,250,0.45); }

  .pj-links { display: flex; gap: 0.6rem; margin-top: auto; padding-top: 1.1rem; border-top: 1px solid var(--border); }
  .pj-link {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem; flex: 1;
    font-family: inherit; font-size: 0.82rem; font-weight: 600; text-decoration: none;
    padding: 0.65rem 1rem; border-radius: 0.8rem; border: 1px solid transparent; transition: all var(--ease);
  }
  .pj-link:focus-visible { outline: 2px solid #60a5fa; outline-offset: 2px; }
  .pj-link-ghost { color: var(--text-2); background: rgba(255,255,255,0.04); border-color: var(--border); }
  .pj-link-ghost:hover { color: var(--text); border-color: var(--border-hover); background: rgba(255,255,255,0.08); }
  .pj-link-primary { color: #fff; background: linear-gradient(135deg, #3b82f6, #2563eb); }
  .pj-link-primary:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(59,130,246,0.4); }

  /* Show more */
  .pj-more { display: flex; justify-content: center; margin-top: 2.75rem; }
  .pj-more-btn {
    display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer; font-family: inherit;
    font-size: 0.88rem; font-weight: 600; color: var(--text); background: var(--surface);
    border: 1px solid var(--border); padding: 0.8rem 1.8rem; border-radius: 9999px; transition: all var(--ease);
  }
  .pj-more-btn:hover { transform: translateY(-2px); border-color: var(--border-hover); background: rgba(255,255,255,0.07); box-shadow: 0 10px 28px rgba(0,0,0,0.3); }
  .pj-more-btn:focus-visible { outline: 2px solid #60a5fa; outline-offset: 3px; }

  @media (prefers-reduced-motion: reduce) {
    .pj-card, .pj-eyebrow::before { animation: none; }
    .pj-card, .pj-media img, .pj-visit, .pj-link, .pj-chip { transition: none; }
  }
`;

export function ProjectsSectionSimple() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const [expanded, setExpanded] = useState(false);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const canExpand = filtered.length > INITIAL_COUNT;

  return (
    <section id="projects" className="pj">
      <style>{styles}</style>
      <div className="pj-grid-bg" />
      <div className="pj-orb pj-orb-1" />
      <div className="pj-orb pj-orb-2" />

      <div className="pj-container">
        <div className="pj-header">
          <span className="pj-eyebrow">Portfolio</span>
          <h2 className="pj-heading">Featured Projects</h2>
          <p className="pj-sub">
            Real products for real clients, from resort websites to hospital-grade lab systems.
          </p>
          <p className="pj-count">
            {projects.length} projects · <strong>{liveCount} live sites</strong> you can open right now
          </p>
        </div>

        <div className="pj-filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              className="pj-filter"
              aria-pressed={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                setExpanded(false);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="pj-list" key={filter}>
          {visible.map((project, index) => {
            const hasDemo = project.demo !== '#';
            return (
              <article
                key={project.id}
                className="pj-card"
                style={{ animationDelay: `${(index % 6) * 0.08}s` }}
              >
                <div className="pj-media">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 33vw"
                  />
                  <span className="pj-badge">{categoryLabel[project.category]}</span>
                  {hasDemo && <span className="pj-live">Live</span>}
                  {hasDemo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-visit"
                      aria-label={`Visit ${project.title}`}
                    >
                      Visit site <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <div className="pj-body">
                  <h3 className="pj-title">{project.title}</h3>
                  <p className="pj-desc">{project.description}</p>

                  <span className="pj-impact">{project.impact}</span>

                  <div className="pj-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="pj-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pj-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-link pj-link-ghost"
                    >
                      <Github size={16} /> Code
                    </a>
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pj-link pj-link-primary"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {canExpand && (
          <div className="pj-more">
            <button
              className="pj-more-btn"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  Show fewer <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show all {filtered.length} projects <ChevronDown size={16} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}