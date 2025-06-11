
import { Element } from 'react-scroll';
import { Heart, ExternalLink } from 'lucide-react';

interface InformationProps {
  language: 'en' | 'bn';
  age: number;
}

const Information = ({ language, age }: InformationProps) => {
  const familyData = {
    familyInfo: {
      title: {
        en: 'Family Information',
        bn: 'পারিবারিক তথ্য',
      },
      members: [
        {
          relation: { en: 'Father', bn: 'পিতা' },
          name: { en: 'Md Rokibul Hasan Shekh', bn: 'মো রকিবুল হাসান সেখ' },
          link: 'https://drive.google.com/file/d/1QoS1c0Wo39AtjBK4s-SS9sR7lxaMCEpr/view?usp=drivesdk',
        },
        {
          relation: { en: 'Mother', bn: 'মাতা' },
          name: { en: 'Mst. Zosna Khatun', bn: 'মোছা. জোসনা খাতুন' },
          link: 'https://drive.google.com/file/d/1Qj3JdVJu1mNzSkZ9l0ofPYKS-B3rOFG3/view?usp=drivesdk',
        },
        {
          relation: { en: 'Siblings', bn: 'ভাইবোন' },
          name: { en: '1 Younger Sister', bn: '১ বোন' },
          link: 'https://drive.google.com/file/d/1QkgYSEZqGRfOSTg3qSRuIL5mP6t5Gfqs/view?usp=drivesdk',
        },
      ],
    },
    personalInfo: {
      title: {
        en: 'Personal Information',
        bn: 'ব্যক্তিগত তথ্য',
      },
      details: [
        {
          label: { en: 'Date of Birth', bn: 'জন্ম তারিখ' },
          value: { en: '31 December, 2007', bn: '৩১ ডিসেম্বর ২০০৭' },
          link: 'https://drive.google.com/file/d/1Q_nVUU1-cJ8bXF-RwoI8kh8ojz3I7ITq/view?usp=drivesdk',
        },
        {
          label: { en: 'Age', bn: 'বয়স' },
          value: { en: `${age} years`, bn: `${age} বছর` },
          link: null,
        },
        {
          label: { en: 'Blood Group', bn: 'রক্তের গ্রুপ' },
          value: { en: 'B+', bn: 'বি+' },
          link: 'https://drive.google.com/file/d/1QXyH-GK_4FJoWeOZDGnZer4UDBfoK_0B/view?usp=drivesdk',
        },
        {
          label: { en: 'Nationality', bn: 'জাতীয়তা' },
          value: { en: 'Bangladeshi', bn: 'বাংলাদেশী' },
          link: null,
        },
        {
          label: { en: 'Religion', bn: 'ধর্ম' },
          value: { en: 'Humanity', bn: 'মানবধর্ম' },
          link: null,
        },
      ],
    },
  };

  return (
    <Element name="family">
      <section
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        aria-labelledby="family-heading"
      >
        <h2
          id="family-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800"
        >
          <div className="p-2 bg-pink-100 rounded-lg">
            <Heart className="text-pink-600" size={24} />
          </div>
          {language === 'en' ? 'Family' : 'পরিবার'}
        </h2>

        <div className="space-y-8">
          {/* Family Information */}
          <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-xl">
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              {familyData.familyInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.familyInfo.members.map((member, index) => (
                <li key={index} className="text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-semibold text-gray-800">
                    {member.relation[language]}:
                  </span>{' '}
                  {member.name[language]}
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-2 transition-colors"
                      aria-label={`View ${member.relation[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Information */}
          <div className="border-l-4 border-indigo-500 pl-6 py-4 bg-indigo-50 rounded-r-xl">
            <h3 className="font-bold text-lg mb-4 text-gray-800">
              {familyData.personalInfo.title[language]}
            </h3>
            <ul className="space-y-3">
              {familyData.personalInfo.details.map((detail, index) => (
                <li key={index} className="text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <span className="font-semibold text-gray-800">
                    {detail.label[language]}:
                  </span>{' '}
                  {detail.value[language]}
                  {detail.link && (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 ml-2 transition-colors"
                      aria-label={`View ${detail.label[language]} document`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Information;
