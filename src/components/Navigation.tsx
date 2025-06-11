
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
  }>;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getIconColor = (id: string) => {
    switch (id.toLowerCase()) {
      case 'profile':
        return 'text-primary-600';
      case 'education':
        return 'text-success-600';
      case 'courses':
        return 'text-accent-600';
      case 'experience':
        return 'text-warning-600';
      case 'certificates':
        return 'text-danger-600';
      case 'skills':
        return 'text-primary-700';
      case 'family':
        return 'text-accent-500';
      case 'contact':
        return 'text-primary-500';
      case 'share':
        return 'text-success-500';
      default:
        return 'text-secondary-600';
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'glass-effect shadow-elevated' 
          : 'bg-white/95 backdrop-blur-sm border-b border-secondary-200'
      )}
    >
      <div className="container-responsive">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl text-secondary-700 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.target || item.id)}
                className={cn(
                  'nav-item',
                  activeSection === (item.target || item.id)
                    ? 'nav-item-active'
                    : 'nav-item-inactive'
                )}
              >
                <div className={`w-5 h-5 ${getIconColor(item.id)}`}>
                  {item.icon}
                </div>
                <span>
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="premium-button text-sm px-4 py-2"
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-secondary-200 rounded-b-2xl shadow-elevated">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.target || item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'w-full nav-item',
                    activeSection === (item.target || item.id)
                      ? 'nav-item-active'
                      : 'nav-item-inactive'
                  )}
                >
                  <div className={`w-6 h-6 ${getIconColor(item.id)}`}>
                    {item.icon}
                  </div>
                  <span>
                    {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
