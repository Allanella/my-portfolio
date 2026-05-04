'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';

export function NavigationSimple() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="nav-brand">Baliddawa Allan</div>

        {/* Desktop Navigation */}
        <div className="nav-links hidden md:flex">
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>
            Skills
          </a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </a>
          <a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, 'education')}>
            Education
          </a>
          <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, 'services')}>
            Services
          </a>
          <a
            href="#testimonials"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Testimonials
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>

          <button onClick={toggleTheme} className="theme-toggle">
            {mounted && (
              <>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#020617]/95 backdrop-blur-lg border-b border-blue-400/20 z-50">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#about"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
            <a
              href="#skills"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'projects')}
            >
              Projects
            </a>
            <a
              href="#education"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'education')}
            >
              Education
            </a>
            <a
              href="#services"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'services')}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block nav-link text-lg"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>

            <button onClick={toggleTheme} className="theme-toggle w-full justify-center text-lg">
              {mounted && (
                <>
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
