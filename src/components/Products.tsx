import React from 'react';
import { Package, TrendingUp, AlertTriangle, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Products: React.FC = () => {
  const { t } = useTranslation();

  const topProducts = [
    { 
      name: 'Wireless Bluetooth Headphones', 
      sales: 245, 
      revenue: '$12,250', 
      stock: 45, 
      rating: 4.8,
      trend: '+12%'
    },
    { 
      name: 'Smart Fitness Watch', 
      sales: 189, 
      revenue: '$18,900', 
      stock: 23, 
      rating: 4.6,
      trend: '+8%'
    },
    { 
      name: 'Premium Running Shoes', 
      sales: 167, 
      revenue: '$16,700', 
      stock: 12, 
      rating: 4.9,
      trend: '+15%'
    },
    { 
      name: 'Organic Cotton T-Shirt', 
      sales: 203, 
      revenue: '$8,120', 
      stock: 89, 
      rating: 4.7,
      trend: '+5%'
    },
    { 
      name: 'Portable Phone Charger', 
      sales: 156, 
      revenue: '$4,680', 
      stock: 3, 
      rating: 4.5,
      trend: '+22%'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.products_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.products_description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Package, title: 'Total Products', value: '1,247', change: '+23', color: 'blue' },
          { icon: TrendingUp, title: 'Best Seller', value: 'Headphones', change: '245 sold', color: 'green' },
          { icon: AlertTriangle, title: 'Low Stock', value: '12', change: 'Need reorder', color: 'red' },
          { icon: Star, title: 'Avg. Rating', value: '4.6/5', change: '+0.3', color: 'yellow' }
        ].map((metric, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <metric.icon className={`w-8 h-8 text-${metric.color}-600`} />
            </div>
            <h3 className="text-sm text-gray-300 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-white">{metric.value}</p>
            <p className="text-sm text-gray-400 mt-1">{metric.change}</p>
          </div>
        ))}
      </div>

      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Top Performing Products</h3>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            View All Products
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Sales</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Stock</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Rating</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Trend</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{product.name}</h4>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-semibold text-white">{product.sales}</td>
                  <td className="py-4 px-4 font-semibold text-white">{product.revenue}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-lg text-sm font-medium ${
                      product.stock < 15 
                        ? 'bg-red-100 text-red-800' 
                        : product.stock < 50 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium text-white">{product.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-medium">{product.trend}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};