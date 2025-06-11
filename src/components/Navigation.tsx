
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
        return 'text-blue-600';
      case 'education':
        return 'text-emerald-600';
      case 'courses':
        return 'text-purple-600';
      case 'experience':
        return 'text-orange-600';
      case 'certificates':
        return 'text-red-600';
      case 'skills':
        return 'text-indigo-600';
      case 'family':
        return 'text-pink-600';
      case 'contact':
        return 'text-cyan-600';
      case 'share':
        return 'text-teal-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.target || item.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200',
                  activeSection === (item.target || item.id)
                    ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-200'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                <div className={`w-5 h-5 ${getIconColor(item.id)}`}>
                  {item.icon}
                </div>
                <span className="font-medium text-sm">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
              'hover:from-blue-700 hover:to-purple-700 shadow-md',
              'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'
            )}
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.target || item.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    activeSection === (item.target || item.id)
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  <div className={`w-6 h-6 ${getIconColor(item.id)}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-sm">
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
