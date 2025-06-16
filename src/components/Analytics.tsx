import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Globe, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Analytics: React.FC = () => {
  const { t } = useTranslation();

  const salesData = [
    { day: 'Mon', sales: 2400 },
    { day: 'Tue', sales: 1398 },
    { day: 'Wed', sales: 9800 },
    { day: 'Thu', sales: 3908 },
    { day: 'Fri', sales: 4800 },
    { day: 'Sat', sales: 3800 },
    { day: 'Sun', sales: 4300 }
  ];

  const trafficData = [
    { name: 'Organic Search', value: 45, color: '#10B981' },
    { name: 'Direct', value: 25, color: '#3B82F6' },
    { name: 'Social Media', value: 15, color: '#8B5CF6' },
    { name: 'Email', value: 10, color: '#F59E0B' },
    { name: 'Paid Ads', value: 5, color: '#EF4444' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.analytics_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.analytics_description')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Weekly Sales Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Bar dataKey="sales" fill="url(#gradient)" radius={4} />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Traffic Sources</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {trafficData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-gray-300">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: TrendingUp, title: 'Avg. Order Value', value: '$87.50', change: '+5.2%' },
          { icon: Users, title: 'Unique Visitors', value: '12,847', change: '+12.1%' },
          { icon: Globe, title: 'Page Views', value: '45,921', change: '+8.7%' },
          { icon: Clock, title: 'Avg. Session', value: '4m 32s', change: '+1.2%' }
        ].map((metric, index) => (
          <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-medium text-green-600">{metric.change}</span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};