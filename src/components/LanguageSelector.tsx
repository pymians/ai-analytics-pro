import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, currentLanguage, setLanguage, getSupportedLanguages } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const supportedLanguages = getSupportedLanguages();
  const currentLangInfo = supportedLanguages.find(lang => lang.code === currentLanguage);

  if (!currentLangInfo) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white hover:bg-white/20 transition-all duration-200"
      >
        <Globe className="w-4 h-4" />
        <span className="text-lg">{currentLangInfo.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLangInfo.nativeName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-xl z-20 max-h-80 overflow-y-auto">
            <div className="p-2">
              <div className="text-xs font-medium text-gray-600 px-3 py-2 border-b border-gray-200 mb-2">
                {t('common.select_language', { fallback: 'Dil Seçin' })}
              </div>
              
              {supportedLanguages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors ${
                    currentLanguage === language.code ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1">
                    <div className="font-medium">{language.nativeName}</div>
                    <div className="text-xs text-gray-500">{language.name}</div>
                  </div>
                  {currentLanguage === language.code && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="border-t border-gray-200 p-3">
              <div className="text-xs text-gray-500 text-center">
                {t('common.more_languages_coming', { fallback: 'Daha fazla dil yakında!' })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};