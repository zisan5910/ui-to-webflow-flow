
import { Element } from 'react-scroll';
import { FileText } from './icons';
import CertificateSlider from './CertificateSlider';

interface CertificateSectionProps {
  language: 'en' | 'bn';
  content: any;
  certificates: any[];
}

const CertificateSection = ({ language, content, certificates }: CertificateSectionProps) => {
  return (
    <Element name="certificates">
      <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-800">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FileText className="text-purple-600" size={24} />
          </div>
          {content[language].certifications}
        </h2>
        <CertificateSlider
          certificates={certificates}
          language={language}
        />
      </section>
    </Element>
  );
};

export default CertificateSection;
