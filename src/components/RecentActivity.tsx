import React from 'react';
import { ShoppingBag, User, Package, Star } from 'lucide-react';

export const RecentActivity: React.FC = () => {
  const activities = [
    { 
      type: 'order', 
      message: 'New order #1247 from Sarah Johnson', 
      time: '2 min ago',
      amount: '$156.99',
      icon: ShoppingBag,
      color: 'green'
    },
    { 
      type: 'customer', 
      message: 'New customer registration', 
      time: '15 min ago',
      amount: null,
      icon: User,
      color: 'blue'
    },
    { 
      type: 'review', 
      message: '5-star review on Wireless Headphones', 
      time: '1 hour ago',
      amount: null,
      icon: Star,
      color: 'yellow'
    },
    { 
      type: 'inventory', 
      message: 'Low stock alert: Running Shoes', 
      time: '2 hours ago',
      amount: '5 left',
      icon: Package,
      color: 'red'
    }
  ];

  const colorClasses = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700'
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 rounded-lg ${colorClasses[activity.color as keyof typeof colorClasses]}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              {activity.amount && (
                <span className="text-sm font-semibold text-gray-900">{activity.amount}</span>
              )}
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 text-center text-sm text-gray-600 hover:text-gray-900 font-medium py-2 hover:bg-gray-50 rounded-lg transition-colors">
        View All Activity
      </button>
    </div>
  );
};