
import { Element } from 'react-scroll';
import { Briefcase, Target, HeartHandshake, ExternalLink, Facebook } from 'lucide-react';

interface ExperienceProps {
  language: 'en' | 'bn';
}

const Experience = ({ language }: ExperienceProps) => {
  const experiences = [
    {
      id: 'bobdo',
      type: 'volunteer',
      title: {
        en: 'Bogura Online Blood Donation Organisation',
        bn: 'বগুড়া অনলাইন রক্তদান সংগঠন',
      },
      role: {
        en: 'Volunteer & Developer | 2023-Present',
        bn: 'স্বেচ্ছাসেবী ও ডেভেলপার | ২০২৩-বর্তমান',
      },
      links: [
        {
          label: {
            en: 'Facebook Group',
            bn: 'ফেসবুক গ্রুপ',
          },
          url: 'https://www.facebook.com/groups/BOBO.BD',
          icon: <Facebook size={16} />,
        },
        {
          label: {
            en: 'Web Application',
            bn: 'ওয়েব অ্যাপ্লিকেশন',
          },
          url: 'https://bobdo.vercel.app',
          icon: <ExternalLink size={16} />,
        },
      ],
      achievements: [
        {
          description: {
            en: 'Built blood donor platform serving 68k+ community members',
            bn: '৬৮ হাজার+ সদস্যের জন্য রক্তদাতা প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          icon: <Target size={18} className="text-red-600" />,
        },
        {
          description: {
            en: 'Implemented digital system reducing response time by 40%',
            bn: 'ডিজিটাল সিস্টেম চালু করে সাড়া দেওয়ার সময় ৪০% কমানো হয়েছে',
          },
          icon: <HeartHandshake size={18} className="text-red-600" />,
        },
      ],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      id: 'youth-hope',
      type: 'volunteer',
      title: {
        en: 'Youth Hope BD',
        bn: 'ইয়ুথ হোপ বিডি',
      },
      role: {
        en: 'Volunteer & Developer | 2025-Present',
        bn: 'স্বেচ্ছাসেবী ও ডেভেলপার | ২০২৫-বর্তমান',
      },
      links: [
        {
          label: {
            en: 'Web Application',
            bn: 'ওয়েব অ্যাপ্লিকেশন',
          },
          url: 'https://youthhope-bd.netlify.app',
          icon: <ExternalLink size={16} />,
        },
      ],
      achievements: [
        {
          description: {
            en: 'Developed platform for youth development and social services',
            bn: 'যুব উন্নয়ন ও সামাজিক সেবার জন্য প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          icon: <Target size={18} className="text-emerald-600" />,
        },
        {
          description: {
            en: 'Created tools for volunteer management and event organization',
            bn: 'স্বেচ্ছাসেবী ব্যবস্থাপনা ও ইভেন্ট আয়োজনের জন্য টুলস তৈরি করা হয়েছে',
          },
          icon: <HeartHandshake size={18} className="text-emerald-600" />,
        },
      ],
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'projects',
      type: 'development',
      title: {
        en: 'Web Development Projects',
        bn: 'ওয়েব ডেভেলপমেন্ট প্রকল্পসমূহ',
      },
      role: {
        en: 'Independent Developer | 2023-Present',
        bn: 'স্বাধীন ডেভেলপার | ২০২৩-বর্তমান',
      },
      projects: [
        {
          name: {
            en: 'BOBDO',
            bn: 'বিওবিডিও',
          },
          description: {
            en: 'online blood donation website and web app',
            bn: ' অনলাইন রক্তদান ওয়েবসাইট এবং ওয়েব অ্যাপ',
          },
          url: 'https://bobdo.vercel.app',
        },
        {
          name: {
            en: 'YouthHopeBD',
            bn: 'ইয়ুথ হোপ বিডি',
          },
          description: {
            en: 'platform for youth development and social services',
            bn: ' যুব উন্নয়ন ও সামাজিক সেবার জন্য প্ল্যাটফর্ম তৈরি করা হয়েছে',
          },
          url: 'https://youthhope-bd.netlify.app',
        },
        {
          name: {
            en: 'UniConverter',
            bn: 'ইউনিকনভার্টার',
          },
          description: {
            en: 'Unit converter supporting 50+ measurement categories',
            bn: '৫০+ পরিমাপ বিভাগ সমর্থনকারী একক রূপান্তরকারী',
          },
          url: 'https://uniconverter.netlify.app',
        },
        {
          name: {
            en: 'DevHub',
            bn: 'ডেভহাব',
          },
          description: {
            en: 'My all projects',
            bn: 'আমার সকল প্রজেক্ট গুলো',
          },
          url: 'https://devhub-i.netlify.app',
        },
      ],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
  ];

  const renderProjectItem = (project: any, iconColor: string) => (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <Target size={18} className={`flex-shrink-0 ${iconColor}`} />
      <h4 className="font-medium text-gray-800">{project.name[language]}</h4>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm transition-colors"
      >
        <ExternalLink size={16} />
        {language === 'en' ? 'View' : 'দেখুন'}
      </a>
    </div>
  );

  return (
    <Element name="experience">
      <section
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800"
        >
          <div className="p-2 bg-orange-100 rounded-lg">
            <Briefcase className="text-orange-600" size={24} />
          </div>
          {language === 'en' ? 'Experience' : 'অভিজ্ঞতা'}
        </h2>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`border-l-4 ${experience.borderColor} pl-6 py-4 ${experience.bgColor} rounded-r-xl transition-colors duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 ${experience.iconBg} rounded-xl shadow-sm border border-gray-200`}>
                  <Briefcase size={20} className={experience.iconColor} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg text-gray-800">
                      {experience.title[language]}
                    </h3>
                    {experience.links && (
                      <div className="flex flex-wrap gap-3">
                        {experience.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm transition-colors bg-white px-2 py-1 rounded-md shadow-sm"
                          >
                            {link.icon}
                            {link.label[language]}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-600 mb-3 font-medium">{experience.role[language]}</p>

                  {experience.achievements && (
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="mt-1 flex-shrink-0">{achievement.icon}</span>
                          <span>{achievement.description[language]}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {experience.projects && (
                    <div className="space-y-3">
                      {experience.projects.map((project, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                          {renderProjectItem(project, experience.iconColor)}
                          <p className="text-gray-700 ml-7 text-sm">
                            {project.description[language]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Experience;
