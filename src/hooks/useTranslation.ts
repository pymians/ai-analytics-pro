import { useState, useEffect } from 'react';
import { i18n, SUPPORTED_LANGUAGES, LanguageConfig } from '../services/i18n';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.getCurrentLanguage());
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      setCurrentLanguage(lang);
      forceUpdate({}); // Force re-render
    };

    i18n.addLanguageChangeListener(handleLanguageChange);
    
    return () => {
      i18n.removeLanguageChangeListener(handleLanguageChange);
    };
  }, []);

  const t = (key: string, params?: { [key: string]: string | number, fallback?: string }) => {
    return i18n.t(key, params);
  };

  const formatCurrency = (amount: number, currency?: string) => {
    return i18n.formatCurrency(amount, currency);
  };

  const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
    return i18n.formatNumber(number, options);
  };

  const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
    return i18n.formatDate(date, options);
  };

  return {
    t,
    currentLanguage,
    formatCurrency,
    formatNumber,
    formatDate,
    isRTL: i18n.getLanguageDirection() === 'rtl',
    setLanguage: (lang: string) => {
      i18n.setLanguage(lang);
    },
    getSupportedLanguages: () => i18n.getSupportedLanguages()
  };
};