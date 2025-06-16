import React, { useState } from 'react';
import { Users, Heart, ShoppingBag, Clock, Target, TrendingUp, Eye, Brain, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useTranslation } from '../hooks/useTranslation';

export const AdvancedCustomerAnalytics: React.FC = () => {
  const { t } = useTranslation();
  const [selectedSegment, setSelectedSegment] = useState('all');

  const customerJourneyData = [
    { stage: 'Farkındalık', visitors: 1000, conversion: 100 },
    { stage: 'İlgi', visitors: 800, conversion: 80 },
    { stage: 'Değerlendirme', visitors: 400, conversion: 60 },
    { stage: 'Satın Alma', visitors: 120, conversion: 40 },
    { stage: 'Sadakat', visitors: 80, conversion: 30 }
  ];

  const customerPersonalities = [
    {
      type: 'Lüks Arayıcılar',
      percentage: 35,
      avgSpend: '$245',
      frequency: '2.3x/ay',
      satisfaction: 94,
      characteristics: {
        kalite: 95,
        fiyat: 30,
        hiz: 60,
        marka: 90,
        deneyim: 85,
        sosyal: 40
      },
      preferredChannels: ['Email', 'Instagram', 'Website'],
      bestTime: 'Akşam 19:00-21:00',
      color: 'purple'
    },
    {
      type: 'Pratik Odaklılar',
      percentage: 28,
      avgSpend: '$89',
      frequency: '1.8x/ay',
      satisfaction: 87,
      characteristics: {
        kalite: 70,
        fiyat: 85,
        hiz: 95,
        marka: 45,
        deneyim: 60,
        sosyal: 30
      },
      preferredChannels: ['SMS', 'Push', 'Email'],
      bestTime: 'Öğle 12:00-14:00',
      color: 'blue'
    },
    {
      type: 'Sosyal Trendsetterlar',
      percentage: 22,
      avgSpend: '$156',
      frequency: '3.1x/ay',
      satisfaction: 91,
      characteristics: {
        kalite: 75,
        fiyat: 60,
        hiz: 80,
        marka: 85,
        deneyim: 90,
        sosyal: 95
      },
      preferredChannels: ['Instagram', 'TikTok', 'WhatsApp'],
      bestTime: 'Gece 20:00-23:00',
      color: 'pink'
    },
    {
      type: 'Değer Avcıları',
      percentage: 15,
      avgSpend: '$67',
      frequency: '1.2x/ay',
      satisfaction: 82,
      characteristics: {
        kalite: 60,
        fiyat: 95,
        hiz: 70,
        marka: 35,
        deneyim: 55,
        sosyal: 25
      },
      preferredChannels: ['Email', 'SMS'],
      bestTime: 'Hafta sonu 14:00-17:00',
      color: 'green'
    }
  ];

  const predictiveInsights = [
    {
      customer: 'Sarah Johnson',
      email: 'sarah@example.com',
      segment: 'Lüks Arayıcılar',
      nextPurchase: '3 gün içinde',
      probability: 89,
      recommendedProduct: 'Premium Wireless Headphones',
      expectedValue: '$199',
      triggers: ['Son ürün görüntüleme', 'Email açma', 'Sosyal medya etkileşimi']
    },
    {
      customer: 'Mike Chen',
      email: 'mike@example.com',
      segment: 'Pratik Odaklılar',
      nextPurchase: '1 hafta içinde',
      probability: 67,
      recommendedProduct: 'Fast Charging Cable',
      expectedValue: '$29',
      triggers: ['Sepet terk etme', 'Fiyat karşılaştırması', 'Hızlı teslimat arama']
    },
    {
      customer: 'Emma Wilson',
      email: 'emma@example.com',
      segment: 'Sosyal Trendsetterlar',
      nextPurchase: '2 gün içinde',
      probability: 94,
      recommendedProduct: 'Trendy Phone Case',
      expectedValue: '$45',
      triggers: ['Instagram story görüntüleme', 'Influencer etkileşimi', 'Trend araştırması']
    }
  ];

  const lifetimeValueData = [
    { month: 'Ay 1', value: 89 },
    { month: 'Ay 3', value: 156 },
    { month: 'Ay 6', value: 234 },
    { month: 'Ay 12', value: 445 },
    { month: 'Ay 18', value: 567 },
    { month: 'Ay 24', value: 689 }
  ];

  const getSegmentColor = (color: string) => {
    const colors = {
      purple: 'from-purple-500 to-violet-600',
      blue: 'from-blue-500 to-cyan-600',
      pink: 'from-pink-500 to-rose-600',
      green: 'from-green-500 to-emerald-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.advanced_customer_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.advanced_customer_description')}</p>
      </div>

      {/* Customer Journey Funnel */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">🎯 Müşteri Yolculuğu Analizi</h3>
        <div className="space-y-4">
          {customerJourneyData.map((stage, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-white">{stage.stage}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-300">{stage.visitors} ziyaretçi</span>
                  <span className="text-sm font-bold text-blue-400">{stage.conversion}% dönüşüm</span>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000"
                  style={{ width: `${(stage.visitors / 1000) * 100}%` }}
                ></div>
                <div 
                  className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full"
                  style={{ width: `${(stage.conversion / 100) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Personality Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">🧬 Müşteri Kişilik Segmentleri</h3>
          <div className="space-y-4">
            {customerPersonalities.map((segment, index) => (
              <div key={index} className={`p-4 bg-gradient-to-r ${getSegmentColor(segment.color)} rounded-xl text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg">{segment.type}</h4>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold">
                    {segment.percentage}%
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <p className="text-xs opacity-80">Ortalama Harcama</p>
                    <p className="font-bold">{segment.avgSpend}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <p className="text-xs opacity-80">Sıklık</p>
                    <p className="font-bold">{segment.frequency}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center">
                    <p className="text-xs opacity-80">Memnuniyet</p>
                    <p className="font-bold">{segment.satisfaction}%</p>
                  </div>
                </div>
                <div className="text-xs opacity-80">
                  <p><strong>En İyi Zaman:</strong> {segment.bestTime}</p>
                  <p><strong>Tercih Edilen Kanallar:</strong> {segment.preferredChannels.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">📊 Kişilik Radar Analizi</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={[
                { subject: 'Kalite', A: 95, B: 70, C: 75, D: 60 },
                { subject: 'Fiyat', A: 30, B: 85, C: 60, D: 95 },
                { subject: 'Hız', A: 60, B: 95, C: 80, D: 70 },
                { subject: 'Marka', A: 90, B: 45, C: 85, D: 35 },
                { subject: 'Deneyim', A: 85, B: 60, C: 90, D: 55 },
                { subject: 'Sosyal', A: 40, B: 30, C: 95, D: 25 }
              ]}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Lüks Arayıcılar" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.1} />
                <Radar name="Pratik Odaklılar" dataKey="B" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.1} />
                <Radar name="Sosyal Trendsetterlar" dataKey="C" stroke="#EC4899" fill="#EC4899" fillOpacity={0.1} />
                <Radar name="Değer Avcıları" dataKey="D" stroke="#10B981" fill="#10B981" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Predictive Customer Insights */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">🔮 Tahmine Dayalı Müşteri Analitiği</h3>
          <div className="flex items-center space-x-2 text-purple-400">
            <Brain className="w-5 h-5" />
            <span className="text-sm font-medium">AI Tahmin Motoru</span>
          </div>
        </div>
        <div className="space-y-4">
          {predictiveInsights.map((insight, index) => (
            <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {insight.customer.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{insight.customer}</h4>
                    <p className="text-sm text-gray-300">{insight.email}</p>
                    <span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium mt-1 border border-blue-500/30">
                      {insight.segment}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm text-gray-300">Satın Alma Olasılığı:</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-sm font-bold border border-green-500/30">
                      {insight.probability}%
                    </span>
                  </div>
                  <p className="text-lg font-bold text-green-400">{insight.expectedValue}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-sm text-gray-300">Tahmini Satın Alma:</p>
                  <p className="font-medium text-white">{insight.nextPurchase}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Önerilen Ürün:</p>
                  <p className="font-medium text-white">{insight.recommendedProduct}</p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3">
                <h5 className="text-sm font-medium text-gray-300 mb-2">🎯 Tetikleyici Faktörler:</h5>
                <div className="flex flex-wrap gap-2">
                  {insight.triggers.map((trigger, triggerIndex) => (
                    <span key={triggerIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Lifetime Value */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">💰 Müşteri Yaşam Boyu Değeri (CLV)</h3>
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lifetimeValueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
            <p className="text-2xl font-bold text-green-400">$689</p>
            <p className="text-sm text-green-300">Ortalama CLV (24 ay)</p>
          </div>
          <div className="text-center p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <p className="text-2xl font-bold text-blue-400">18.5 ay</p>
            <p className="text-sm text-blue-300">Ortalama Müşteri Ömrü</p>
          </div>
          <div className="text-center p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
            <p className="text-2xl font-bold text-purple-400">+34%</p>
            <p className="text-sm text-purple-300">CLV Artış Oranı</p>
          </div>
        </div>
      </div>
    </div>
  );
};