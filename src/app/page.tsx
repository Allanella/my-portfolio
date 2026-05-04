import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { EducationSection } from '@/components/education-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CaseStudiesSection } from '@/components/case-studies-section';
import { ServicesSection } from '@/components/services-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CaseStudiesSection />
      <ContactSection />
      <TestimonialsSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}