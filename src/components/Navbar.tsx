import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
      
      // Determine active section
      const sections = ['about', 'skills', 'projects', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        currentSection = '';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-gray-900 px-4 py-2 rounded-md z-50 focus:ring-2 focus:ring-business-primary focus:ring-offset-2"
      >
        Skip to content
      </a>

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-shadow-elegant border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        {/* Scroll Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-business-primary to-dev-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-business-primary transition-colors"
            >
              Brad Stewart
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`font-medium transition-colors relative group ${
                      isScrolled ? 'text-gray-700 hover:text-business-primary' : 'text-white hover:text-white/80'
                    } ${isActive ? (isScrolled ? 'text-business-primary' : 'text-white') : ''}`}
                  >
                    {item.label}
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-business-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                );
              })}
              <Button 
                variant="outline" 
                className={isScrolled ? 'btn-outline-business' : 'bg-white/10 border-white/30 text-white hover:bg-white hover:text-gray-900'}
                onClick={() => handleNavClick('#contact')}
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                      isActive 
                        ? 'text-business-primary bg-business-primary/10 border-l-2 border-business-primary' 
                        : 'text-gray-700 hover:text-business-primary hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full btn-business"
                  onClick={() => handleNavClick('#contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}