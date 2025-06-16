import React from 'react';
import { BarChart3, Users, Package, TrendingUp, Home, Store, Brain, Target, Wand2, MessageSquare, Eye, Camera, Activity, ShoppingBag, Sparkles, Bot, Shield, Languages, FileText, Package2, UserCheck, Layers } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'multilingual', label: t('navigation.multilingual_strategy', { fallback: '🌍 Multilingual Strategy' }), icon: Languages },
    { id: 'app-store-en', label: t('navigation.app_store_listing', { fallback: '🇺🇸 App Store Listing (EN)' }), icon: FileText },
    { id: 'compliance', label: t('navigation.compliance', { fallback: '🛡️ App Store Compliance' }), icon: Shield },
    { id: 'chatgpt-test', label: t('navigation.chatgpt_test', { fallback: '🤖 ChatGPT API Test' }), icon: Bot },
    { id: 'ai-insights', label: t('navigation.ai_insights', { fallback: 'AI Insights Dashboard' }), icon: Brain },
    { id: 'advanced-customer', label: t('navigation.advanced_customer', { fallback: 'Advanced Customer Analytics' }), icon: UserCheck },
    { id: 'smart-inventory', label: t('navigation.smart_inventory', { fallback: 'Smart Inventory Management' }), icon: Package2 },
    { id: 'bulk-optimizer', label: t('navigation.bulk_optimizer', { fallback: 'Bulk Product Optimization' }), icon: Layers },
    { id: 'app-store', label: t('navigation.app_store', { fallback: 'App Store Showcase' }), icon: Sparkles },
    { id: 'ai-studio', label: t('navigation.ai_studio', { fallback: 'AI Product Studio' }), icon: Camera },
    { id: 'live-tracker', label: t('navigation.live_tracker', { fallback: 'Live Customer Tracking' }), icon: Activity },
    { id: 'personality', label: t('navigation.personality', { fallback: 'Personality Analysis' }), icon: Brain },
    { id: 'customer-match', label: t('navigation.customer_match', { fallback: 'Customer Match' }), icon: Target },
    { id: 'product-optimizer', label: t('navigation.product_optimizer', { fallback: 'Product Optimization' }), icon: Wand2 },
    { id: 'smart-marketing', label: t('navigation.smart_marketing', { fallback: 'Smart Marketing' }), icon: MessageSquare },
    { id: 'predictive', label: t('navigation.predictive', { fallback: 'Predictive AI' }), icon: Eye },
    { id: 'dashboard', label: t('navigation.dashboard', { fallback: 'Dashboard' }), icon: Home },
    { id: 'analytics', label: t('navigation.analytics', { fallback: 'Analytics' }), icon: BarChart3 },
    { id: 'customers', label: t('navigation.customers', { fallback: 'Customers' }), icon: Users },
    { id: 'products', label: t('navigation.products', { fallback: 'Products' }), icon: Package },
    { id: 'growth', label: t('navigation.growth', { fallback: 'Growth Hub' }), icon: TrendingUp },
  ];

  return (
    <aside className="w-80 bg-black/20 backdrop-blur-xl border-r border-white/10 p-6 overflow-y-auto">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center relative">
          <img 
            src="/digimoli-sidebar-logos.png" 
            alt="Digimoli AI Analytics Pro" 
            className="w-12 h-12 object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-xl blur opacity-50 animate-pulse"></div>
        </div>
        <div>
          <h2 className="font-bold text-white text-lg">AI Analytics Pro</h2>
          <p className="text-xs text-purple-300">by Digimoli</p>
        </div>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 text-white shadow-lg border border-purple-500/30 backdrop-blur-sm'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white hover:backdrop-blur-sm'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                isActive ? 'text-purple-300' : 'text-gray-400 group-hover:text-purple-300'
              }`} />
              <span className="font-medium text-sm leading-tight">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-purple-400 rounded-full animate-pulse flex-shrink-0"></div>
              )}
            </button>
          );
        })}
      </nav>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-xl border border-purple-500/20 backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-2">
          <img 
            src="/digimoli-sidebar-logos.png" 
            alt="Digimoli" 
            className="w-6 h-6 object-contain"
          />
          <h3 className="font-semibold text-purple-300">{t('common.shopify_app_store', { fallback: 'Shopify App Store' })}</h3>
        </div>
        <p className="text-sm text-gray-300 mb-3">{t('common.app_store_description', { fallback: 'This app is prepared for sale on Shopify App Store' })}</p>
        <div className="space-y-2 text-xs text-purple-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>{t('common.production_ready', { fallback: 'Production Ready' })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>{t('common.multilingual_support', { fallback: '12 Languages Support' })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>{t('common.oauth_integration', { fallback: 'OAuth Integration' })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>{t('common.gdpr_compliance', { fallback: 'GDPR Compliance' })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
            <span>{t('common.ai_features', { fallback: 'AI Features' })}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};