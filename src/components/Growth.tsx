import React from 'react';
import { Lightbulb, Target, Zap, Award, ArrowRight, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Growth: React.FC = () => {
  const { t } = useTranslation();

  const recommendations = [
    {
      title: 'Optimize Product Descriptions',
      impact: 'High',
      effort: 'Medium',
      description: 'AI analysis shows your top products could benefit from enhanced SEO-optimized descriptions',
      icon: Lightbulb,
      color: 'yellow'
    },
    {
      title: 'Launch Retargeting Campaign',
      impact: 'High',
      effort: 'Low',
      description: '23% of visitors abandoned cart. Retargeting could recover 15-20% of these sales',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Bundle Complementary Products',
      impact: 'Medium',
      effort: 'Low',
      description: 'Customers buying headphones often purchase phone cases. Create bundles to increase AOV',
      icon: Zap,
      color: 'purple'
    },
    {
      title: 'Implement Loyalty Program',
      impact: 'High',
      effort: 'High',
      description: 'Reward repeat customers. Your 68% repeat rate could increase to 80% with proper incentives',
      icon: Award,
      color: 'green'
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEffortColor = (effort: string) => {
    switch (effort) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const iconColorClasses = {
    yellow: 'from-yellow-500 to-orange-500',
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-violet-500',
    green: 'from-green-500 to-emerald-500'
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.growth_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.growth_description')}</p>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🎯 Your Growth Score</h3>
            <p className="text-indigo-100 mb-4">Based on our AI analysis, your store has strong potential for 35% growth this quarter</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-2xl font-bold">87/100</span>
              </div>
              <div>
                <p className="text-sm text-indigo-100">Growth Readiness Score</p>
                <p className="font-semibold">Excellent - Ready to scale!</p>
              </div>
            </div>
          </div>
          <TrendingUp className="w-20 h-20 text-white/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-gradient-to-r ${iconColorClasses[rec.color as keyof typeof iconColorClasses]} rounded-xl`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">{rec.title}</h3>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getImpactColor(rec.impact)}`}>
                        {rec.impact} Impact
                      </span>
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getEffortColor(rec.effort)}`}>
                        {rec.effort} Effort
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{rec.description}</p>
                  <button className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    <span>Implement Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Revenue Potential', value: '+$12,450', subtitle: 'Next 30 days', color: 'green' },
          { title: 'Customer Growth', value: '+347', subtitle: 'Projected new customers', color: 'blue' },
          { title: 'Conversion Boost', value: '+2.1%', subtitle: 'Expected rate increase', color: 'purple' }
        ].map((metric, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
            <h3 className="text-sm text-gray-300 mb-2">{metric.title}</h3>
            <p className={`text-3xl font-bold text-${metric.color}-600 mb-1`}>{metric.value}</p>
            <p className="text-sm text-gray-400">{metric.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};