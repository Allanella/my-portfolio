'use client';

import {
  Code,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  Users,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Custom websites, web applications, and e-commerce platforms built with modern technologies and best practices. Specializing in React, Next.js, and responsive design.',
    icon: Code,
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Performance',
      'Modern Frameworks',
      'Fast Loading',
    ],
    highlights: ['50+ Projects Delivered', '95% Client Satisfaction', '24/7 Support'],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android with exceptional user experience and performance.',
    icon: Smartphone,
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'User interface design with focus on usability, accessibility, and creating intuitive user experiences that drive engagement.',
    icon: Zap,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    id: 4,
    title: 'Backend Development',
    description:
      'Robust server-side solutions with APIs, databases, and scalable architecture for enterprise applications.',
    icon: Database,
    features: ['REST APIs', 'GraphQL', 'Microservices', 'Cloud Architecture'],
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing strategies including SEO, content marketing, and social media management to grow your online presence.',
    icon: Globe,
    features: ['SEO Strategy', 'Content Marketing', 'Social Media Management', 'Analytics'],
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure and deployment solutions with focus on reliability, security, and cost optimization.',
    icon: Cloud,
    features: ['Auto-scaling', 'Security', '24/7 Support', 'Cost Optimization'],
  },
  {
    id: 7,
    title: 'Consulting & Training',
    description:
      'Technical consulting and team training services to help businesses leverage technology effectively and teams to reach their full potential.',
    icon: Users,
    features: [
      'Technical Consulting',
      'Team Training',
      'Process Optimization',
      'Knowledge Transfer',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Business Services
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-2xl hover:shadow-accent/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-white shadow-lg shadow-accent/30">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-white shadow-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-muted leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">What We Offer</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                          <span className="text-sm font-medium text-text-primary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <a href="#contact" className="btn btn-primary w-full">
                      Start Your Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
