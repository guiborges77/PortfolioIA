import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex bg-gray-800/50 rounded-full p-1 border border-gray-700/50">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === 'pt'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;