import { Element } from 'react-scroll';
import {
  Award,
  Languages,
  Target,
  MessageSquare,
  PlusCircle,
  Star,
} from 'lucide-react';

interface SkillsProps {
  language: 'en' | 'bn';
}

const Skills = ({ language }: SkillsProps) => {
  const skillsData = {
    languages: {
      title: {
        en: 'Languages',
        bn: 'ভাষা',
      },
      skills: [
        {
          name: {
            en: 'Bengali (Fluent)',
            bn: 'বাংলা (সাবলীল)',
          },
          level: 5,
        },
        {
          name: {
            en: 'English (Professional)',
            bn: 'ইংরেজি (পেশাদার)',
          },
          level: 4,
        },
      ],
    },
    professional: {
      title: {
        en: 'Core Professional Skills',
        bn: 'মূল পেশাদার দক্ষতা',
      },
      skills: [
        { en: 'MS Office Suite', bn: 'এমএস অফিস' },
        { en: 'Email Communication', bn: 'ইমেইল যোগাযোগ' },
        { en: 'Team Collaboration', bn: 'দলগত সমন্বয়' },
        { en: 'Time Management', bn: 'সময় ব্যবস্থাপনা' },
        { en: 'Problem Solving', bn: 'সমস্যা সমাধান' },
        { en: 'Professional Ethics', bn: 'পেশাদার নীতি' },
      ],
      color: 'bg-success-50 border border-success-200',
    },
    communication: {
      title: {
        en: 'Communication Skills',
        bn: 'যোগাযোগ দক্ষতা',
      },
      skills: [
        { en: 'Report Writing', bn: 'রিপোর্ট লেখা' },
        { en: 'Active Listening', bn: 'সক্রিয় শোনা' },
        { en: 'Presentation', bn: 'প্রেজেন্টেশন' },
        { en: 'Professional Email', bn: 'পেশাদার ইমেইল' },
      ],
      color: 'bg-primary-50 border border-primary-200',
    },
    additional: {
      title: {
        en: 'Additional Skills',
        bn: 'অতিরিক্ত দক্ষতা',
      },
      skills: [
        { en: 'Canva/Photoshop', bn: 'ক্যানভা/ফটোশপ' },
        { en: 'Social Media', bn: 'সোশ্যাল মিডিয়া' },
        { en: 'Web and App Development', bn: 'ওয়েব এবং এ্যাপ ডেভেলপমেন্ট' },
        { en: ' The concept of AI', bn: 'AI এর ধারণা' },
      ],
      color: 'bg-accent-50 border border-accent-200',
    },
  };

  return (
    <Element name="skills">
      <section className="premium-section" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="premium-title flex items-center gap-3">
          <div className="section-icon bg-success-100">
            <Award className="text-success-600" size={24} />
          </div>
          {language === 'en' ? 'Skills' : 'দক্ষতা'}
        </h2>

        <div className="space-y-8">
          {/* Language Skills */}
          <div>
            <h3 className="premium-subtitle flex items-center gap-3 mb-6">
              <Languages size={24} className="text-primary-600" />
              {skillsData.languages.title[language]}
            </h3>
            <div className="space-y-6">
              {skillsData.languages.skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-secondary-200 shadow-soft">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-secondary-900 font-medium text-lg">
                      {skill.name[language]}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          size={20}
                          className={
                            i <= skill.level
                              ? 'text-warning-500 fill-current'
                              : 'text-secondary-300'
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-warning-500 to-warning-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills Sections */}
          {[
            skillsData.professional,
            skillsData.communication,
            skillsData.additional,
          ].map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="premium-subtitle flex items-center gap-3 mb-6">
                {sectionIndex === 0 ? (
                  <Target size={24} className="text-success-600" />
                ) : sectionIndex === 1 ? (
                  <MessageSquare size={24} className="text-primary-600" />
                ) : (
                  <PlusCircle size={24} className="text-accent-600" />
                )}
                {section.title[language]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`${section.color} p-4 rounded-xl hover:shadow-soft transition-all duration-200 text-center font-medium`}
                  >
                    {skill[language]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Skills;
