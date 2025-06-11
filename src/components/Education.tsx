
import { Element } from 'react-scroll';
import { GraduationCap, School, ExternalLink, BookOpen } from 'lucide-react';

interface EducationProps {
  language: 'en' | 'bn';
}

const Education = ({ language }: EducationProps) => {
  const educationHistory = [
    {
      id: 'hsc',
      title: {
        en: 'Higher Secondary Certificate (HSC)',
        bn: 'উচ্চ মাধ্যমিক সার্টিফিকেট (এইচএসসি)',
      },
      institution: {
        en: 'KARATOA MULTIMEDIA SCHOOL AND COLLEGE',
        bn: 'করতোয়া মাল্টিমিডিয়া স্কুল অ্যান্ড কলেজ',
      },
      duration: {
        en: '2023-2024',
        bn: '২০২৩-২০২৪',
      },
      gpa: {
        en: 'GPA: 5.00/5.00 (Predicted)',
        bn: 'জিপিএ: ৫.০০/৫.০০ (আনুমানিক)',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/WZW688y',
      icon: <GraduationCap size={20} className="text-blue-600" />,
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'ssc',
      title: {
        en: 'Secondary School Certificate (SSC)',
        bn: 'মাধ্যমিক স্কুল সার্টিফিকেট (এসএসসি)',
      },
      institution: {
        en: 'DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL',
        bn: 'ধুনট সরকারি এন. ইউ. পাইলট মডেল উচ্চ বিদ্যালয়',
      },
      duration: {
        en: '2021-2022',
        bn: '২০২১-২০২২',
      },
      gpa: {
        en: 'GPA: 5.00/5.00',
        bn: 'জিপিএ: ৫.০০/৫.০০',
      },
      details: {
        en: ['Group: Science', 'Major: Higher Math'],
        bn: ['গ্রুপ: বিজ্ঞান', 'মেজর: উচ্চতর গণিত'],
      },
      link: 'https://g.co/kgs/W57Ts2o',
      icon: <School size={20} className="text-emerald-600" />,
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <Element name="education">
      <section
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        aria-labelledby="education-heading"
      >
        <h2
          id="education-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800"
        >
          <div className="p-2 bg-emerald-100 rounded-lg">
            <BookOpen className="text-emerald-600" size={24} />
          </div>
          {language === 'en' ? 'Education' : 'শিক্ষা'}
        </h2>

        <div className="space-y-6">
          {educationHistory.map((education) => (
            <div
              key={education.id}
              className={`border-l-4 ${education.borderColor} pl-6 py-4 ${education.bgColor} rounded-r-xl transition-colors duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-white rounded-xl shadow-sm border border-gray-200`}>
                  {education.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">
                    {education.title[language]}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    {education.institution[language]}{' '}
                    <a
                      href={education.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </p>
                  <p className="text-gray-600 mt-1">
                    {education.duration[language]}
                  </p>
                  <p className="font-medium text-gray-800 mt-1">{education.gpa[language]}</p>
                  <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                    {education.details[language].map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Education;
