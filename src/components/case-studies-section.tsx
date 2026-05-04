'use client';

import { TrendingUp, Target, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'TechStart Inc.',
    project: 'E-commerce Platform Redesign',
    description: 'Increased conversion rate by 40% and reduced cart abandonment by 25%',
    metrics: ['40% Conversion Rate', '25% Cart Reduction', '60% Faster Load Times'],
    result: 'Launched new platform serving 10,000+ users',
    image: '/images/sst.PNG',
  },
  {
    id: 2,
    client: 'Global Finance Solutions',
    project: 'Student Management System',
    description:
      'Automated 50% of manual data entry work, saving 15 hours/week for administrative staff',
    metrics: ['50% Time Savings', '100% Data Accuracy', '30% Cost Reduction'],
    result: 'Deployed to 5 universities, serving 50,000+ students',
    image: '/images/edup.png',
  },
  {
    id: 3,
    client: 'Creative Agency',
    project: 'Brand Identity & Web Design',
    description:
      'Developed comprehensive brand guidelines and responsive website that increased client inquiries by 200%',
    metrics: ['200% Inquiry Increase', '150% Traffic Growth', '95% Client Satisfaction'],
    result: 'Won 3 major design awards and featured in design publications',
    image: '/images/code.jpeg',
  },
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Real results from real businesses who trusted my expertise to transform their digital
            challenges into opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="case-study-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white shadow-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{study.client}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{study.description}</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-text-muted">
                        Project: {study.project}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Award className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-text-muted">
                        Result: {study.result}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Key Metrics</h4>
                  <div className="space-y-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent/20 rounded-full"></div>
                        <span className="text-sm text-text-muted">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a href="#contact" className="btn btn-primary w-full">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
