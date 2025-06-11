
import { Element } from 'react-scroll';
import { Download, ScrollText } from './icons';
import { cn } from '../lib/utils';

interface ProfileSectionProps {
  language: 'en' | 'bn';
  content: any;
  scrollToSection: (section: string) => void;
}

const ProfileSection = ({
  language,
  content,
  scrollToSection,
}: ProfileSectionProps) => {
  return (
    <Element name="profile">
      <header
        className={cn(
          'relative pt-24 pb-16 overflow-hidden',
          'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
          'text-white'
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-700/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-lg"></div>
              <img
                src="/profile.jpg"
                alt="Md Ridoan Mahmud Zisan"
                className="w-56 h-56 rounded-full border-4 border-cyan-400/40 shadow-2xl relative z-10"
              />
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {content[language].name}
                </h1>
                <p className="text-xl md:text-2xl mb-6 text-cyan-100">
                  {content[language].role}
                </p>
                <p className="text-lg max-w-2xl mx-auto lg:mx-0 mb-8 text-blue-100 leading-relaxed">
                  {content[language].statement}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2',
                    'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg hover:shadow-xl',
                    'transition-all duration-200 border border-cyan-400'
                  )}
                >
                  <Download size={20} />
                  {content[language].downloadCV}
                </a>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className={cn(
                    'px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2',
                    'bg-transparent border-2 border-cyan-400 text-cyan-300',
                    'hover:bg-cyan-400/10 hover:text-cyan-200 shadow-lg',
                    'transition-all duration-200'
                  )}
                >
                  <ScrollText size={20} />
                  {content[language].certifications}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Element>
  );
};

export default ProfileSection;
