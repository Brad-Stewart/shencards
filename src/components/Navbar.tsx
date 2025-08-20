import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Calendar, Users, Info, Store } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Shop', href: '/shop', icon: ShoppingBag },
  { label: 'Events', href: '/events', icon: Calendar },
  { label: 'Community', href: '/community', icon: Users },
  { label: 'About', href: '/about', icon: Info },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    window.location.href = '/';
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
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700' 
          : 'bg-slate-900'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={goHome}
              className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              <Store className="h-6 w-6 md:h-8 md:w-8" />
              Shenanigan's CardStop
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-2 px-3 py-2 font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => handleNavClick('/events')}
              >
                Join Event
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-slate-700">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => handleNavClick('/events')}
                >
                  Join Event
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}