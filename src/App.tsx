import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Analytics } from './components/Analytics';
import { Customers } from './components/Customers';
import { Products } from './components/Products';
import { Growth } from './components/Growth';
import { PersonalityAnalysis } from './components/PersonalityAnalysis';
import { CustomerPersonalityMatch } from './components/CustomerPersonalityMatch';
import { ProductOptimizer } from './components/ProductOptimizer';
import { SmartMarketing } from './components/SmartMarketing';
import { PredictiveAnalytics } from './components/PredictiveAnalytics';
import { AIProductStudio } from './components/AIProductStudio';
import { LiveCustomerTracker } from './components/LiveCustomerTracker';
import { AppStoreFeatures } from './components/AppStoreFeatures';
import { AIInsightsDashboard } from './components/AIInsightsDashboard';
import { AdvancedCustomerAnalytics } from './components/AdvancedCustomerAnalytics';
import { SmartInventoryManager } from './components/SmartInventoryManager';
import { BulkProductOptimizer } from './components/BulkProductOptimizer';
import { ProductOptimizerTest } from './components/ProductOptimizerTest';
import { ComplianceStatus } from './components/ComplianceStatus';
import { MultilingualCompliance } from './components/MultilingualCompliance';
import { AppStoreListingEN } from './components/AppStoreListingEN';
import { i18n } from './services/i18n';

type TabType = 'multilingual' | 'app-store-en' | 'compliance' | 'app-store' | 'dashboard' | 'analytics' | 'customers' | 'products' | 'growth' | 'personality' | 'customer-match' | 'product-optimizer' | 'smart-marketing' | 'predictive' | 'ai-studio' | 'live-tracker' | 'ai-insights' | 'advanced-customer' | 'smart-inventory' | 'bulk-optimizer' | 'chatgpt-test';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('multilingual');

  useEffect(() => {
    // Initialize i18n service
    i18n;
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'multilingual':
        return <MultilingualCompliance />;
      case 'app-store-en':
        return <AppStoreListingEN />;
      case 'compliance':
        return <ComplianceStatus />;
      case 'chatgpt-test':
        return <ProductOptimizerTest />;
      case 'ai-insights':
        return <AIInsightsDashboard />;
      case 'advanced-customer':
        return <AdvancedCustomerAnalytics />;
      case 'smart-inventory':
        return <SmartInventoryManager />;
      case 'bulk-optimizer':
        return <BulkProductOptimizer />;
      case 'app-store':
        return <AppStoreFeatures />;
      case 'ai-studio':
        return <AIProductStudio />;
      case 'live-tracker':
        return <LiveCustomerTracker />;
      case 'personality':
        return <PersonalityAnalysis />;
      case 'customer-match':
        return <CustomerPersonalityMatch />;
      case 'product-optimizer':
        return <ProductOptimizer />;
      case 'smart-marketing':
        return <SmartMarketing />;
      case 'predictive':
        return <PredictiveAnalytics />;
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'customers':
        return <Customers />;
      case 'products':
        return <Products />;
      case 'growth':
        return <Growth />;
      default:
        return <MultilingualCompliance />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex relative overflow-hidden">
      {/* AI Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M0,100 Q250,50 500,100 T1000,100" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M0,200 Q250,150 500,200 T1000,200" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
          <path d="M0,300 Q250,250 500,300 T1000,300" stroke="url(#neuralGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000"/>
        </svg>
      </div>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col relative z-10">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;