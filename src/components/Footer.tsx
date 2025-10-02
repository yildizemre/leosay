import React from 'react';
import { BarChart3, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('footer.product'),
      links: [t('footer.analytics-platform'), t('footer.reporting-tools'), t('footer.api-documentation'), t('footer.integrations')]
    },
    {
      title: t('footer.solutions'),
      links: [t('footer.enterprise'), t('footer.small-business')]
    },
    {
      title: t('footer.resources'),
      links: [t('footer.documentation'), t('footer.tutorials'), t('footer.blog')]
    },
    {
      title: t('footer.company'),
      links: [t('footer.about-us'), t('footer.careers'), t('footer.press'), t('footer.partners'), t('footer.contact')]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/images/footerlogo.png" alt="LEOSAY" className="h-8 w-auto" />
                <span className="text-xl font-bold">LEOSAY</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                {t('footer.empowering-businesses')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-white mb-2">{t('footer.stay-updated')}</h3>
              <p className="text-gray-400">{t('footer.latest-insights')}</p>
            </div>
            
            <div className="flex space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder={t('footer.enter-email')}
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold whitespace-nowrap">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 LEOSAY. {t('footer.all-rights')}
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.privacy-policy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.terms-service')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.cookie-policy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;