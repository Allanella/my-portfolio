'use client';

import { useState } from 'react';
import { Star, Quote, Building2, Users, Briefcase, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Okello John',
    company: 'TechStart Inc.',
    role: 'CEO',
    content:
      'Allan delivered our e-commerce platform on time and exceeded all expectations. His attention to detail and innovative solutions helped us increase conversion by 40%.',
    rating: 5,
    avatar: '/images/phonec.jpg',
    project: 'E-commerce Platform Redesign',
  },
  {
    id: 2,
    name: 'Jackie',
    company: 'Global Finance Solutions',
    role: 'CTO',
    content:
      'The student management system Allan built transformed our operations. We now process 10x more students with 50% less manual work. His technical expertise and problem-solving skills are exceptional.',
    rating: 5,
    avatar: '/images/jacky.jpg',
    project: 'Student Management System',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'Creative Agency',
    role: 'Creative Director',
    content:
      'Working with Allan was a game-changer for our agency. His modern design approach and understanding of user experience helped us win several major contracts. Highly recommended!',
    rating: 5,
    avatar: '/images/code.jpeg',
    project: 'Brand Identity & Web Design',
  },
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Don't just take my word for it — see what my clients have to say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 ${
                activeTestimonial === testimonial.id ? 'ring-2 ring-accent/20' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() =>
                setActiveTestimonial(activeTestimonial === testimonial.id ? 0 : testimonial.id)
              }
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-accent" />
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">{testimonial.name}</h3>
                        <p className="text-sm text-accent font-semibold">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="w-5 h-5 text-text-muted opacity-50" />
                  </div>

                  <blockquote className="text-text-secondary leading-relaxed mb-6">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-1">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-text-muted font-medium">
                        {testimonial.project} • {testimonial.rating}/5
                      </span>
                    </div>
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
