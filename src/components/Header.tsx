import React from 'react';
import { Bell, Search, Settings, User, Zap, Brain } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 px-6 py-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img 
                src="/digimoli-header-logos.png" 
                alt="Digimoli AI Analytics Pro" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white">{t('dashboard.title', { fallback: 'AI Analytics Dashboard' })}</h1>
          </div>
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <Search className="w-4 h-4 text-gray-300 mr-3" />
            <input 
              type="text" 
              placeholder={t('common.search_placeholder', { fallback: 'AI insights, products, customers...' })}
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-300 w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-3 py-2 rounded-lg border border-green-500/30">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">{t('dashboard.ai_active', { fallback: 'AI Active' })}</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </div>
          
          <Settings className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer transition-colors" />
          
          <LanguageSelector />
          
          <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-lg px-3 py-2 border border-purple-500/30">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Alex Chen</span>
          </div>
        </div>
      </div>
    </header>
  );
};