import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { config } from '../data/config';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: config.social.github,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: config.social.linkedin,
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: config.social.email,
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm text-center">
            <p>&copy; {currentYear} {t('footer.developed')}</p>
          </div>
        </div>
      </div>

      {/* Botão de Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-all transform hover:scale-110 shadow-lg"
        title={t('footer.backToTop')}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;