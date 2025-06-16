import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', revenue: 12000, orders: 240 },
  { name: 'Feb', revenue: 15000, orders: 300 },
  { name: 'Mar', revenue: 18000, orders: 360 },
  { name: 'Apr', revenue: 22000, orders: 440 },
  { name: 'May', revenue: 19000, orders: 380 },
  { name: 'Jun', revenue: 25000, orders: 500 },
  { name: 'Jul', revenue: 28000, orders: 560 }
];

export const ChartCard: React.FC = () => {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
          <p className="text-gray-600 text-sm">Last 7 months performance</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">Revenue</button>
          <button className="px-3 py-1 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100">Orders</button>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis 
              dataKey="name" 
              stroke="#6B7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};