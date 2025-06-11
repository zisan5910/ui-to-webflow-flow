
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
          'relative pt-20 sm:pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden',
          'bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900',
          'text-white'
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-700/20 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-accent-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-xl"></div>
          </div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Profile Image */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/20 rounded-full blur-lg scale-110"></div>
              <img
                src="/profile.jpg"
                alt="Md Ridoan Mahmud Zisan"
                className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-white/40 shadow-elevated relative z-10"
              />
            </div>

            {/* Profile Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-white leading-tight">
                  {content[language].name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-primary-100">
                  {content[language].role}
                </p>
                <p className="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 lg:mb-10 text-secondary-100 leading-relaxed">
                  {content[language].statement}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="/Resume.pdf"
                  download="Md Ridoan Mahmud Zisan.pdf"
                  className={cn(
                    'premium-button bg-white text-primary-700 hover:bg-secondary-50',
                    'border-2 border-white/20 shadow-elevated hover:shadow-elevated'
                  )}
                >
                  <Download size={20} />
                  {content[language].downloadCV}
                </a>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className="premium-button-secondary bg-transparent border-white text-white hover:bg-white/10"
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
