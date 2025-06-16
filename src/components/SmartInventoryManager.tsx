import React, { useState } from 'react';
import { Package, TrendingUp, AlertTriangle, Clock, Zap, Target, BarChart3, RefreshCw } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useTranslation } from '../hooks/useTranslation';

export const SmartInventoryManager: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState('all');

  const inventoryData = [
    {
      id: 1,
      name: t('inventory.product_headphones', { fallback: 'Premium Wireless Headphones' }),
      sku: 'PWH-001',
      currentStock: 23,
      optimalStock: 45,
      reorderPoint: 15,
      leadTime: 7,
      dailySales: 3.2,
      trend: 'increasing',
      stockoutRisk: 'high',
      daysUntilStockout: 7,
      suggestedOrder: 50,
      supplier: 'TechAudio Co.',
      cost: '$45.00',
      margin: '55%',
      velocity: 'fast'
    },
    {
      id: 2,
      name: t('inventory.product_watch', { fallback: 'Smart Fitness Watch' }),
      sku: 'SFW-001',
      currentStock: 67,
      optimalStock: 80,
      reorderPoint: 25,
      leadTime: 14,
      dailySales: 2.8,
      trend: 'stable',
      stockoutRisk: 'medium',
      daysUntilStockout: 24,
      suggestedOrder: 30,
      supplier: 'FitTech Ltd.',
      cost: '$89.00',
      margin: '45%',
      velocity: 'medium'
    },
    {
      id: 3,
      name: t('inventory.product_speaker', { fallback: 'Bluetooth Speaker Pro' }),
      sku: 'BSP-001',
      currentStock: 156,
      optimalStock: 120,
      reorderPoint: 40,
      leadTime: 10,
      dailySales: 4.1,
      trend: 'decreasing',
      stockoutRisk: 'low',
      daysUntilStockout: 38,
      suggestedOrder: 0,
      supplier: 'SoundWave Inc.',
      cost: '$32.00',
      margin: '60%',
      velocity: 'slow'
    }
  ];

  const demandForecast = [
    { week: t('inventory.this_week', { fallback: 'Bu Hafta' }), actual: 45, predicted: 47, confidence: 94 },
    { week: t('inventory.next_week', { fallback: 'Gelecek Hafta' }), actual: null, predicted: 52, confidence: 89 },
    { week: t('inventory.week_2', { fallback: '2 Hafta' }), actual: null, predicted: 48, confidence: 85 },
    { week: t('inventory.week_3', { fallback: '3 Hafta' }), actual: null, predicted: 55, confidence: 82 },
    { week: t('inventory.week_4', { fallback: '4 Hafta' }), actual: null, predicted: 61, confidence: 78 }
  ];

  const seasonalTrends = [
    { month: t('inventory.month_jan', { fallback: 'Oca' }), sales: 120, trend: 'low' },
    { month: t('inventory.month_feb', { fallback: 'Şub' }), sales: 135, trend: 'low' },
    { month: t('inventory.month_mar', { fallback: 'Mar' }), sales: 180, trend: 'medium' },
    { month: t('inventory.month_apr', { fallback: 'Nis' }), sales: 220, trend: 'high' },
    { month: t('inventory.month_may', { fallback: 'May' }), sales: 195, trend: 'medium' },
    { month: t('inventory.month_jun', { fallback: 'Haz' }), sales: 240, trend: 'high' },
    { month: t('inventory.month_jul', { fallback: 'Tem' }), sales: 280, trend: 'peak' },
    { month: t('inventory.month_aug', { fallback: 'Ağu' }), sales: 265, trend: 'high' },
    { month: t('inventory.month_sep', { fallback: 'Eyl' }), sales: 210, trend: 'medium' },
    { month: t('inventory.month_oct', { fallback: 'Eki' }), sales: 190, trend: 'medium' },
    { month: t('inventory.month_nov', { fallback: 'Kas' }), sales: 320, trend: 'peak' },
    { month: t('inventory.month_dec', { fallback: 'Ara' }), sales: 380, trend: 'peak' }
  ];

  const aiRecommendations = [
    {
      type: 'urgent',
      title: t('inventory.urgent_stock_alert', { fallback: '🚨 Acil Stok Uyarısı' }),
      product: t('inventory.product_headphones', { fallback: 'Premium Wireless Headphones' }),
      message: t('inventory.urgent_message', { fallback: '7 gün içinde stok tükenmesi bekleniyor' }),
      action: t('inventory.urgent_action', { fallback: '50 adet sipariş ver' }),
      impact: t('inventory.urgent_impact', { fallback: 'Satış kaybını önler' }),
      confidence: 96
    },
    {
      type: 'opportunity',
      title: t('inventory.demand_increase_opportunity', { fallback: '📈 Talep Artışı Fırsatı' }),
      product: t('inventory.product_watch', { fallback: 'Smart Fitness Watch' }),
      message: t('inventory.opportunity_message', { fallback: 'Yeni yıl motivasyonu ile %40 talep artışı bekleniyor' }),
      action: t('inventory.opportunity_action', { fallback: '100 adet ek stok al' }),
      impact: t('inventory.opportunity_impact', { fallback: '+$8,900 gelir fırsatı' }),
      confidence: 87
    },
    {
      type: 'optimization',
      title: t('inventory.stock_optimization', { fallback: '⚡ Stok Optimizasyonu' }),
      product: t('inventory.product_speaker', { fallback: 'Bluetooth Speaker Pro' }),
      message: t('inventory.optimization_message', { fallback: 'Mevcut stok optimal seviyenin %30 üzerinde' }),
      action: t('inventory.optimization_action', { fallback: 'Promosyon kampanyası başlat' }),
      impact: t('inventory.optimization_impact', { fallback: 'Nakit akışını iyileştir' }),
      confidence: 91
    }
  ];

  const supplierPerformance = [
    {
      name: 'TechAudio Co.',
      reliability: 94,
      leadTime: 7,
      quality: 96,
      cost: t('inventory.medium', { fallback: 'Orta' }),
      rating: 'A+',
      products: 3
    },
    {
      name: 'FitTech Ltd.',
      reliability: 89,
      leadTime: 14,
      quality: 92,
      cost: t('inventory.high', { fallback: 'Yüksek' }),
      rating: 'A',
      products: 2
    },
    {
      name: 'SoundWave Inc.',
      reliability: 91,
      leadTime: 10,
      quality: 88,
      cost: t('inventory.low_cost', { fallback: 'Düşük' }),
      rating: 'A-',
      products: 4
    }
  ];

  const getStockStatus = (item: any) => {
    if (item.currentStock <= item.reorderPoint) return 'critical';
    if (item.currentStock <= item.optimalStock * 0.7) return 'low';
    if (item.currentStock >= item.optimalStock * 1.3) return 'excess';
    return 'optimal';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'low': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'excess': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'optimal': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getVelocityColor = (velocity: string) => {
    switch (velocity) {
      case 'fast': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'slow': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'critical': return t('inventory.critical', { fallback: 'Kritik' });
      case 'low': return t('inventory.low', { fallback: 'Düşük' });
      case 'excess': return t('inventory.excess', { fallback: 'Fazla' });
      case 'optimal': return t('inventory.optimal', { fallback: 'Optimal' });
      default: return status;
    }
  };

  const getVelocityText = (velocity: string) => {
    switch (velocity) {
      case 'fast': return t('inventory.fast', { fallback: 'Hızlı' });
      case 'medium': return t('inventory.medium', { fallback: 'Orta' });
      case 'slow': return t('inventory.slow', { fallback: 'Yavaş' });
      default: return velocity;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">📦 {t('inventory.title', { fallback: 'Akıllı Stok Yönetimi' })}</h2>
        <p className="text-gray-300 mt-1">{t('inventory.description', { fallback: 'AI ile tahmine dayalı stok optimizasyonu' })}</p>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">{t('inventory.total_products', { fallback: 'Toplam Ürün' })}</p>
              <p className="text-3xl font-bold text-white">246</p>
            </div>
            <Package className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-300 text-sm">{t('inventory.critical_stock', { fallback: 'Kritik Stok' })}</p>
              <p className="text-3xl font-bold text-white">12</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">{t('inventory.stock_value', { fallback: 'Stok Değeri' })}</p>
              <p className="text-3xl font-bold text-white">$89K</p>
            </div>
            <BarChart3 className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">{t('inventory.turnover_rate', { fallback: 'Devir Hızı' })}</p>
              <p className="text-3xl font-bold text-white">4.2x</p>
            </div>
            <RefreshCw className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">🤖 {t('inventory.ai_recommendations', { fallback: 'AI Stok Önerileri' })}</h3>
        <div className="space-y-4">
          {aiRecommendations.map((rec, index) => (
            <div key={index} className={`p-4 rounded-lg border-l-4 ${
              rec.type === 'urgent' ? 'border-red-500 bg-red-500/10' :
              rec.type === 'opportunity' ? 'border-green-500 bg-green-500/10' :
              'border-blue-500 bg-blue-500/10'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-300 mb-2">{rec.product}</p>
                  <p className="text-gray-200 mb-3">{rec.message}</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-200">{t('inventory.recommendation', { fallback: 'Önerilen Aksiyon' })}: {rec.action}</span>
                    <span className="text-sm text-green-400">{t('inventory.impact', { fallback: 'Etki' })}: {rec.impact}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/10 px-3 py-1 rounded-lg border border-white/20">
                    <span className="text-sm font-bold text-white">{rec.confidence}% {t('ai.confidence_score', { fallback: 'güven' })}</span>
                  </div>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    {t('common.apply', { fallback: 'Uygula' })}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">📊 {t('inventory.stock_status', { fallback: 'Stok Durumu' })}</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('common.product', { fallback: 'Ürün' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.current_stock', { fallback: 'Mevcut Stok' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.status', { fallback: 'Durum' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.velocity', { fallback: 'Hız' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.depletion', { fallback: 'Tükenme' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.recommendation', { fallback: 'Öneri' })}</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-300">{t('inventory.action', { fallback: 'Aksiyon' })}</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item) => {
                const status = getStockStatus(item);
                return (
                  <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <p className="text-sm text-gray-300">{item.sku}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-white">{item.currentStock}</span>
                        <span className="text-sm text-gray-400">/ {item.optimalStock}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className={`h-2 rounded-full ${
                            status === 'critical' ? 'bg-red-500' :
                            status === 'low' ? 'bg-yellow-500' :
                            status === 'excess' ? 'bg-purple-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min((item.currentStock / item.optimalStock) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${getStatusColor(status)}`}>
                        {getStatusText(status)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${getVelocityColor(item.velocity)}`}>
                        {getVelocityText(item.velocity)}
                      </span>
                      <p className="text-xs text-gray-400">{item.dailySales}/{t('inventory.per_day', { fallback: 'gün' })}</p>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-white">{item.daysUntilStockout} {t('inventory.days', { fallback: 'gün' })}</span>
                    </td>
                    <td className="py-4 px-4">
                      {item.suggestedOrder > 0 ? (
                        <span className="text-blue-400 font-medium">{item.suggestedOrder} {t('inventory.pieces', { fallback: 'adet' })}</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {item.suggestedOrder > 0 ? (
                        <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                          {t('inventory.place_order', { fallback: 'Sipariş Ver' })}
                        </button>
                      ) : (
                        <button className="bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm font-medium">
                          {t('inventory.monitor', { fallback: 'İzle' })}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Demand Forecast & Seasonal Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">📈 {t('inventory.demand_forecast', { fallback: 'Talep Tahmini' })}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={demandForecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                  name={t('inventory.actual', { fallback: 'Gerçek' })}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
                  name={t('inventory.predicted', { fallback: 'Tahmin' })}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">🌊 {t('inventory.seasonal_trends', { fallback: 'Sezonsal Trendler' })}</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={seasonalTrends}>
                <defs>
                  <linearGradient id="seasonalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Area
                  type="monotone"
                  dataKey="sales"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#seasonalGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Supplier Performance */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">🤝 {t('inventory.supplier_performance', { fallback: 'Tedarikçi Performansı' })}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {supplierPerformance.map((supplier, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-white">{supplier.name}</h4>
                <span className={`px-2 py-1 rounded text-sm font-bold ${
                  supplier.rating.startsWith('A+') ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                  supplier.rating.startsWith('A') ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {supplier.rating}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">{t('inventory.reliability', { fallback: 'Güvenilirlik' })}:</span>
                  <span className="text-sm font-medium text-white">{supplier.reliability}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">{t('inventory.delivery_time', { fallback: 'Teslimat Süresi' })}:</span>
                  <span className="text-sm font-medium text-white">{supplier.leadTime} {t('inventory.days', { fallback: 'gün' })}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">{t('inventory.quality', { fallback: 'Kalite' })}:</span>
                  <span className="text-sm font-medium text-white">{supplier.quality}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">{t('inventory.cost', { fallback: 'Maliyet' })}:</span>
                  <span className="text-sm font-medium text-white">{supplier.cost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-300">{t('inventory.product_count', { fallback: 'Ürün Sayısı' })}:</span>
                  <span className="text-sm font-medium text-white">{supplier.products}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 border border-green-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">📊 {t('inventory.performance_summary', { fallback: 'Stok Performans Özeti' })}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-green-400">+23%</p>
            <p className="text-sm text-gray-300">{t('inventory.efficiency_improvement', { fallback: 'Verimlilik Artışı' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-blue-400">-15%</p>
            <p className="text-sm text-gray-300">{t('inventory.cost_reduction', { fallback: 'Maliyet Azalması' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-purple-400">98%</p>
            <p className="text-sm text-gray-300">{t('inventory.availability_rate', { fallback: 'Stok Bulunabilirlik' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-pink-400">4.2x</p>
            <p className="text-sm text-gray-300">{t('inventory.turnover_improvement', { fallback: 'Devir Hızı' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};