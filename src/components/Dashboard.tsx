import React from 'react';
import { MetricCard } from './MetricCard';
import { ChartCard } from './ChartCard';
import { RecentActivity } from './RecentActivity';
import { TrendingUp, DollarSign, Users, ShoppingBag, Target, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const metrics = [
    {
      title: t('dashboard.total_revenue'),
      value: '$24,580',
      change: '+12.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: t('dashboard.total_orders'),
      value: '1,247',
      change: '+8.1%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'blue'
    },
    {
      title: t('dashboard.total_customers'),
      value: '892',
      change: '+15.7%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    },
    {
      title: t('dashboard.conversion_rate'),
      value: '3.4%',
      change: '+0.3%',
      trend: 'up',
      icon: Target,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">{t('content.dashboard_title')}</h2>
          <p className="text-gray-300 mt-1">{t('content.dashboard_description')}</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg">
          <Zap className="w-4 h-4" />
          <span className="font-medium">{t('dashboard.ai_insights_ready')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard />
        <RecentActivity />
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">🚀 Growth Opportunity Detected!</h3>
            <p className="text-indigo-100 mb-4">Your top-selling products have 23% higher profit margins. Consider featuring them more prominently.</p>
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              View Recommendations
            </button>
          </div>
          <TrendingUp className="w-16 h-16 text-white/30" />
        </div>
      </div>
    </div>
  );
};