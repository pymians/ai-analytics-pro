import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, TrendingUp, Eye, Sparkles, AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const AIInsightsDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeInsight, setActiveInsight] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const aiInsights = [
    {
      id: 1,
      type: 'critical',
      title: '🔥 Kritik Fırsat Tespit Edildi!',
      description: 'Wireless Headphones ürününüzde %67 dönüşüm artışı potansiyeli var',
      impact: 'Yüksek',
      timeToImplement: '15 dakika',
      expectedRevenue: '+$2,340/ay',
      action: 'Ürün başlığını optimize et',
      confidence: 94,
      category: 'Product Optimization'
    },
    {
      id: 2,
      type: 'opportunity',
      title: '💎 Premium Müşteri Segmenti Keşfedildi',
      description: 'Müşterilerinizin %23\'ü lüks ürünlere 3x daha fazla harcama yapıyor',
      impact: 'Orta',
      timeToImplement: '1 saat',
      expectedRevenue: '+$1,890/ay',
      action: 'Premium koleksiyon oluştur',
      confidence: 87,
      category: 'Customer Segmentation'
    },
    {
      id: 3,
      type: 'warning',
      title: '⚠️ Sepet Terk Oranı Artışı',
      description: 'Son 7 günde sepet terk oranınız %34 arttı. Checkout sürecinde sorun var',
      impact: 'Yüksek',
      timeToImplement: '30 dakika',
      expectedRevenue: '+$890/ay',
      action: 'Checkout akışını basitleştir',
      confidence: 91,
      category: 'Conversion Optimization'
    },
    {
      id: 4,
      type: 'success',
      title: '🎯 AI Optimizasyonu Başarılı',
      description: 'Smart Watch ürününde yapılan AI optimizasyonu %45 satış artışı sağladı',
      impact: 'Pozitif',
      timeToImplement: 'Tamamlandı',
      expectedRevenue: '+$1,234/ay',
      action: 'Diğer ürünlere uygula',
      confidence: 96,
      category: 'Success Story'
    }
  ];

  const realTimeMetrics = [
    { label: 'Aktif Ziyaretçi', value: '47', change: '+12%', trend: 'up' },
    { label: 'Dönüşüm Oranı', value: '3.4%', change: '+0.8%', trend: 'up' },
    { label: 'Ortalama Sepet', value: '$156', change: '+$23', trend: 'up' },
    { label: 'AI Güven Skoru', value: '94%', change: '+2%', trend: 'up' }
  ];

  const aiPredictions = [
    {
      metric: 'Satış Tahmini',
      current: '$12,450',
      predicted: '$16,890',
      timeframe: 'Sonraki 30 gün',
      confidence: 89,
      factors: ['Sezonsal trend', 'AI optimizasyonları', 'Pazarlama kampanyası']
    },
    {
      metric: 'Müşteri Kazanımı',
      current: '234',
      predicted: '387',
      timeframe: 'Bu ay',
      confidence: 82,
      factors: ['SEO iyileştirmeleri', 'Sosyal medya', 'Referral program']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % aiInsights.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'critical': return 'from-red-500 to-orange-500';
      case 'opportunity': return 'from-blue-500 to-purple-500';
      case 'warning': return 'from-yellow-500 to-orange-500';
      case 'success': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'critical': return Zap;
      case 'opportunity': return Target;
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      default: return Brain;
    }
  };

  const runAIAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <img 
          src="/digimoli-header-logos.png" 
          alt="Digimoli AI Analytics Pro" 
          className="w-12 h-12 object-contain"
        />
        <div>
          <h2 className="text-3xl font-bold text-white">{t('content.ai_insights_title')}</h2>
          <p className="text-gray-300 mt-1">{t('content.ai_insights_description')}</p>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {realTimeMetrics.map((metric, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">{metric.label}</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">{metric.change}</span>
              </div>
            </div>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
            <div className="mt-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">Canlı</span>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights Carousel */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">🔮 AI Insights</h3>
          <button
            onClick={runAIAnalysis}
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                Analiz Ediliyor...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 inline mr-2" />
                Yeniden Analiz Et
              </>
            )}
          </button>
        </div>

        <div className="relative">
          {aiInsights.map((insight, index) => {
            const Icon = getInsightIcon(insight.type);
            return (
              <div
                key={insight.id}
                className={`transition-all duration-500 ${
                  index === activeInsight ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4 absolute inset-0'
                }`}
              >
                <div className={`bg-gradient-to-r ${getInsightColor(insight.type)} p-6 rounded-xl text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-8 h-8" />
                      <div>
                        <h4 className="text-xl font-bold">{insight.title}</h4>
                        <p className="text-white/80 mt-1">{insight.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-bold">{insight.confidence}% güven</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm text-white/80">Etki</p>
                      <p className="font-bold">{insight.impact}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm text-white/80">Süre</p>
                      <p className="font-bold">{insight.timeToImplement}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm text-white/80">Gelir Artışı</p>
                      <p className="font-bold">{insight.expectedRevenue}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                      <p className="text-sm text-white/80">Kategori</p>
                      <p className="font-bold text-xs">{insight.category}</p>
                    </div>
                  </div>

                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    {insight.action}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Insight Navigation */}
        <div className="flex justify-center space-x-2 mt-6">
          {aiInsights.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveInsight(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeInsight ? 'bg-purple-400' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* AI Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiPredictions.map((prediction, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">{prediction.metric}</h4>
              <div className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">{prediction.confidence}% güven</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Mevcut:</span>
                <span className="text-xl font-bold text-white">{prediction.current}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Tahmin:</span>
                <span className="text-xl font-bold text-green-400">{prediction.predicted}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Zaman:</span>
                <span className="text-sm font-medium text-white">{prediction.timeframe}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <h5 className="text-sm font-medium text-gray-300 mb-2">Etkileyen Faktörler:</h5>
              <div className="space-y-1">
                {prediction.factors.map((factor, factorIndex) => (
                  <div key={factorIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Performance Summary */}
      <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/digimoli-header-logos.png" 
                alt="Digimoli" 
                className="w-8 h-8 object-contain"
              />
              <h3 className="text-xl font-bold text-white">🚀 AI Performans Özeti</h3>
            </div>
            <p className="text-indigo-200 mb-4">Son 30 günde AI önerilerinizin etkisi</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">+47%</p>
                <p className="text-sm text-indigo-200">Satış Artışı</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">+68%</p>
                <p className="text-sm text-indigo-200">Dönüşüm</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">+156%</p>
                <p className="text-sm text-indigo-200">ROI</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-white">94%</p>
                <p className="text-sm text-indigo-200">Doğruluk</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Eye className="w-8 h-8 text-white/60" />
            <Brain className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};