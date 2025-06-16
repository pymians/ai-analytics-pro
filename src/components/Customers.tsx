import React from 'react';
import { Users, Star, ShoppingBag, TrendingUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Customers: React.FC = () => {
  const { t } = useTranslation();

  const topCustomers = [
    { name: 'Sarah Johnson', email: 'sarah@email.com', orders: 12, spent: '$1,245.50', status: 'VIP' },
    { name: 'Mike Chen', email: 'mike@email.com', orders: 8, spent: '$890.30', status: 'Loyal' },
    { name: 'Emma Wilson', email: 'emma@email.com', orders: 15, spent: '$2,156.75', status: 'VIP' },
    { name: 'David Brown', email: 'david@email.com', orders: 6, spent: '$567.20', status: 'Regular' },
    { name: 'Lisa Garcia', email: 'lisa@email.com', orders: 9, spent: '$1,023.45', status: 'Loyal' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'bg-purple-100 text-purple-800';
      case 'Loyal': return 'bg-green-100 text-green-800';
      case 'Regular': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.customers_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.customers_description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Users, title: 'Total Customers', value: '2,847', change: '+12.3%', color: 'blue' },
          { icon: Star, title: 'Avg. Rating', value: '4.8/5', change: '+0.2', color: 'yellow' },
          { icon: ShoppingBag, title: 'Repeat Rate', value: '68%', change: '+5.1%', color: 'green' },
          { icon: TrendingUp, title: 'CLV', value: '$456', change: '+8.7%', color: 'purple' }
        ].map((metric, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`w-8 h-8 text-${metric.color}-600`} />
              <span className="text-sm font-medium text-green-600">{metric.change}</span>
            </div>
            <h3 className="text-sm text-gray-300 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Customers</h3>
          <div className="space-y-4">
            {topCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{customer.spent}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(customer.status)}`}>
                      {customer.status}
                    </span>
                    <span className="text-sm text-gray-600">{customer.orders} orders</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Customer Segments</h3>
          <div className="space-y-4">
            {[
              { name: 'VIP Customers', count: 127, percentage: 15, color: 'purple' },
              { name: 'Loyal Customers', count: 456, percentage: 35, color: 'green' },
              { name: 'Regular Customers', count: 892, percentage: 40, color: 'blue' },
              { name: 'New Customers', count: 234, percentage: 10, color: 'orange' }
            ].map((segment, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{segment.name}</span>
                  <span className="text-sm text-gray-300">{segment.count} customers</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`bg-${segment.color}-500 h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${segment.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-300">{segment.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};