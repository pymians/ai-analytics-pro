import React, { useState } from 'react';
import { Brain, Clock, ShoppingCart, TrendingUp, AlertTriangle, Target, Zap, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';

export const PredictiveAnalytics: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'purchase' | 'abandon' | 'price' | 'churn'>('purchase');

  const purchasePredictionData = [
    { hour: '09:00', probability: 23, customers: 45 },
    { hour: '12:00', probability: 67, customers: 89 },
    { hour: '15:00', probability: 45, customers: 67 },
    { hour: '18:00', probability: 89, customers: 134 },
    { hour: '21:00', probability: 78, customers: 112 },
    { hour: '00:00', probability: 34, customers: 56 }
  ];

  const customerBehaviorPredictions = [
    {
      customer: 'Sarah Johnson',
      email: 'sarah@email.com',
      purchaseProbability: 87,
      predictedTime: '2 saat içinde',
      recommendedAction: 'Kişisel indirim kodu gönder',
      value: '$156',
      confidence: 'Yüksek'
    },
    {
      customer: 'Mike Chen',
      email: 'mike@email.com',
      purchaseProbability: 34,
      predictedTime: 'Bu hafta',
      recommendedAction: 'Ürün hatırlatma emaili',
      value: '$89',
      confidence: 'Orta'
    },
    {
      customer: 'Emma Wilson',
      email: 'emma@email.com',
      purchaseProbability: 92,
      predictedTime: '30 dakika içinde',
      recommendedAction: 'Ücretsiz kargo teklifi',
      value: '$234',
      confidence: 'Çok Yüksek'
    }
  ];

  const abandonmentReasons = [
    { reason: 'Yüksek Kargo Ücreti', percentage: 34, solution: 'Ücretsiz kargo eşiği düşür' },
    { reason: 'Uzun Ödeme Süreci', percentage: 28, solution: 'Tek tıkla ödeme ekle' },
    { reason: 'Güvenlik Endişesi', percentage: 23, solution: 'Güvenlik rozetleri ekle' },
    { reason: 'Fiyat Karşılaştırması', percentage: 15, solution: 'Fiyat garantisi ver' }
  ];

  const priceOptimization = [
    {
      product: 'Wireless Headphones',
      currentPrice: '$99',
      optimalPrice: '$87',
      expectedIncrease: '+23%',
      reason: 'Fiyat hassasiyeti analizi'
    },
    {
      product: 'Smart Watch',
      currentPrice: '$199',
      optimalPrice: '$179',
      expectedIncrease: '+18%',
      reason: 'Rakip fiyat analizi'
    }
  ];

  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'Çok Yüksek': return 'bg-green-100 text-green-800';
      case 'Yüksek': return 'bg-blue-100 text-blue-800';
      case 'Orta': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">🔮 Tahmine Dayalı Analitik</h2>
        <p className="text-gray-300 mt-1">AI ile müşteri davranışlarını önceden tahmin edin</p>
      </div>

      {/* Prediction Type Selector */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Tahmin Türü</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'purchase', label: 'Satın Alma Tahmini', icon: ShoppingCart, color: 'green' },
            { id: 'abandon', label: 'Sepet Terk Analizi', icon: AlertTriangle, color: 'red' },
            { id: 'price', label: 'Fiyat Optimizasyonu', icon: Target, color: 'blue' },
            { id: 'churn', label: 'Müşteri Kaybı', icon: TrendingUp, color: 'purple' }
          ].map((metric) => {
            const Icon = metric.icon;
            return (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id as any)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedMetric === metric.id
                    ? `border-${metric.color}-500 bg-${metric.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedMetric === metric.id ? `text-${metric.color}-600` : 'text-gray-600'
                }`} />
                <p className="text-sm font-medium text-gray-900">{metric.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Real-time Purchase Predictions */}
      {selectedMetric === 'purchase' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Günlük Satın Alma Tahmini</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={purchasePredictionData}>
                  <defs>
                    <linearGradient id="purchaseGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="hour" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Area
                    type="monotone"
                    dataKey="probability"
                    stroke="#10B981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#purchaseGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Yüksek Potansiyelli Müşteriler</h3>
            <div className="space-y-4">
              {customerBehaviorPredictions.map((customer, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{customer.customer}</h4>
                      <p className="text-sm text-gray-600">{customer.email}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getConfidenceColor(customer.confidence)}`}>
                        {customer.confidence}
                      </span>
                      <p className="text-lg font-bold text-green-600 mt-1">{customer.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">Satın Alma Olasılığı:</span>
                    <span className="text-sm font-bold text-blue-600">%{customer.purchaseProbability}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${customer.purchaseProbability}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">Tahmini Zaman:</span>
                    <span className="text-sm font-medium text-gray-900">{customer.predictedTime}</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-900">Önerilen Aksiyon:</span>
                    </div>
                    <p className="text-sm text-blue-800">{customer.recommendedAction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cart Abandonment Analysis */}
      {selectedMetric === 'abandon' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Sepet Terk Etme Sebepleri & Çözümler</h3>
          <div className="space-y-4">
            {abandonmentReasons.map((reason, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{reason.reason}</h4>
                  <span className="text-lg font-bold text-red-600">%{reason.percentage}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full"
                    style={{ width: `${reason.percentage}%` }}
                  ></div>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900">Çözüm Önerisi:</span>
                  </div>
                  <p className="text-sm text-green-800 mt-1">{reason.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Price Optimization */}
      {selectedMetric === 'price' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">AI Fiyat Optimizasyon Önerileri</h3>
          <div className="space-y-4">
            {priceOptimization.map((product, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{product.product}</h4>
                    <p className="text-sm text-gray-300">{product.reason}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-bold">
                    {product.expectedIncrease} artış bekleniyor
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-600 mb-1">Mevcut Fiyat</p>
                    <p className="text-2xl font-bold text-red-700">{product.currentPrice}</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600 mb-1">Optimal Fiyat</p>
                    <p className="text-2xl font-bold text-green-700">{product.optimalPrice}</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Fiyatı Güncelle
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Insights Dashboard */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">🔮 AI Tahmin Performansı</h3>
            <p className="text-purple-100 mb-4">Son 30 günde AI tahminlerimizin doğruluk oranları</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">94%</p>
                <p className="text-sm text-purple-100">Satın Alma Tahmini</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">87%</p>
                <p className="text-sm text-pink-100">Sepet Terk Tahmini</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">91%</p>
                <p className="text-sm text-red-100">Fiyat Optimizasyonu</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-orange-100">Müşteri Davranışı</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Brain className="w-8 h-8 text-white/60" />
            <Eye className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};