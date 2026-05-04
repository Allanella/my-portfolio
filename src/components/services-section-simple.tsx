'use client';

import { Code, Database, Globe, Smartphone, Cloud, Shield } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    description: 'End-to-end web application development using modern frameworks and best practices. From concept to deployment, I create scalable, performant solutions.',
    icon: Code,
    features: ['React/Next.js', 'Node.js/Express', 'REST APIs', 'Database Design'],
    pricing: 'Starting at $5,000'
  },
  {
    id: 2,
    title: 'E-Commerce Solutions',
    description: 'Complete online retail platforms with payment processing, inventory management, and analytics to drive sales and customer engagement.',
    icon: Globe,
    features: ['Payment Integration', 'Inventory Systems', 'User Analytics', 'Mobile Responsive'],
    pricing: 'Starting at $8,000'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Progressive Web Apps and mobile-first applications that provide native-like experiences across all devices.',
    icon: Smartphone,
    features: ['PWA Development', 'Mobile Optimization', 'Offline Support', 'App Store Ready'],
    pricing: 'Starting at $6,000'
  },
  {
    id: 4,
    title: 'Database Architecture',
    description: 'Robust database design and optimization ensuring data integrity, performance, and scalability for growing applications.',
    icon: Database,
    features: ['Schema Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions'],
    pricing: 'Starting at $3,000'
  },
  {
    id: 5,
    title: 'Cloud Deployment',
    description: 'Seamless cloud infrastructure setup and deployment using AWS, Vercel, and other leading platforms for optimal performance.',
    icon: Cloud,
    features: ['AWS/Azure Setup', 'CI/CD Pipelines', 'Load Balancing', 'Security Hardening'],
    pricing: 'Starting at $2,000'
  },
  {
    id: 6,
    title: 'Security & Performance',
    description: 'Comprehensive security audits and performance optimization to protect your application and ensure fast, reliable service.',
    icon: Shield,
    features: ['Security Audits', 'Performance Testing', 'Code Review', 'Optimization'],
    pricing: 'Starting at $1,500'
  }
];

export function ServicesSectionSimple() {
  return (
    <section id="services" className="section-enhanced">
      <div className="container-enhanced">
        <div className="text-center mb-16">
          <h2 className="heading-enhanced mb-4">Services & Solutions</h2>
          <p className="subheading-enhanced">
            Comprehensive development services tailored to transform your business ideas into reality
          </p>
        </div>

        <div className="grid-enhanced-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card-enhanced group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <a
                    href="#contact"
                    className="text-sm text-blue-300 hover:text-blue-400 transition-colors font-medium"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that meets your exact needs.
            </p>
            <a href="#contact" className="btn btn-primary">
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
