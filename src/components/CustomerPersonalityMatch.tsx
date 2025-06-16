import React from 'react';
import { Users, Heart, ShoppingBag, Clock, Target } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const CustomerPersonalityMatch: React.FC = () => {
  const { t } = useTranslation();

  const customerSegments = [
    {
      name: "Lüks Arayıcılar",
      percentage: 45,
      match: 92,
      avgSpend: "$245",
      behavior: "Kalite odaklı, fiyat hassasiyeti düşük",
      bestTime: "Akşam 19:00-21:00",
      color: "purple"
    },
    {
      name: "Minimalist Severler", 
      percentage: 30,
      match: 87,
      avgSpend: "$156",
      behavior: "Az ama özenle seçer, sadakat yüksek",
      bestTime: "Hafta sonu 14:00-16:00", 
      color: "blue"
    },
    {
      name: "Trend Takipçileri",
      percentage: 15,
      match: 34,
      avgSpend: "$89",
      behavior: "Hızlı karar verir, sosyal medya etkisi",
      bestTime: "Öğle arası 12:00-14:00",
      color: "green"
    },
    {
      name: "Fırsat Avcıları",
      percentage: 10,
      match: 23,
      avgSpend: "$67",
      behavior: "İndirim odaklı, karşılaştırma yapar",
      bestTime: "Gece 22:00-24:00",
      color: "orange"
    }
  ];

  const insights = [
    {
      title: "En Uyumlu Segment",
      value: "Lüks Arayıcılar",
      detail: "%92 kişilik uyumu",
      icon: Target,
      color: "purple"
    },
    {
      title: "Ortalama Sepet",
      value: "$187",
      detail: "Uyumlu müşterilerde +34%",
      icon: ShoppingBag,
      color: "green"
    },
    {
      title: "Müşteri Sadakati",
      value: "78%",
      detail: "Kişilik uyumlu segmentlerde",
      icon: Heart,
      color: "red"
    },
    {
      title: "En İyi Zaman",
      value: "19:00-21:00",
      detail: "Lüks segment aktif saati",
      icon: Clock,
      color: "blue"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.customer_match_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.customer_match_description')}</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`w-8 h-8 text-${insight.color}-600`} />
              </div>
              <h3 className="text-sm text-gray-300 mb-1">{insight.title}</h3>
              <p className="text-2xl font-bold text-white">{insight.value}</p>
              <p className="text-sm text-gray-400 mt-1">{insight.detail}</p>
            </div>
          );
        })}
      </div>

      {/* Customer Segments */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Müşteri Kişilik Segmentleri</h3>
        <div className="space-y-6">
          {customerSegments.map((segment, index) => (
            <div key={index} className="p-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r from-${segment.color}-500 to-${segment.color}-600 rounded-full flex items-center justify-center`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{segment.name}</h4>
                    <p className="text-sm text-gray-600">Müşteri tabanınızın %{segment.percentage}'i</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-gray-600">Kişilik Uyumu:</span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                      segment.match > 80 ? 'bg-green-100 text-green-800' :
                      segment.match > 60 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      %{segment.match}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{segment.avgSpend}</p>
                  <p className="text-sm text-gray-500">Ortalama harcama</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Davranış Profili:</p>
                  <p className="text-sm font-medium text-gray-900">{segment.behavior}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">En Aktif Zaman:</p>
                  <p className="text-sm font-medium text-gray-900">{segment.bestTime}</p>
                </div>
              </div>

              {/* Match Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mağaza Uyumu</span>
                  <span className="text-sm font-medium text-gray-900">%{segment.match}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r from-${segment.color}-500 to-${segment.color}-600 h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${segment.match}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl text-white">
        <h3 className="text-xl font-bold mb-4">🤖 AI Kişilik Önerileri</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Lüks Arayıcılar için:</h4>
            <p className="text-sm text-indigo-100">Akşam saatlerinde premium ürünleri öne çıkar. Kalite vurgulu açıklamalar kullan.</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">Minimalist Severler için:</h4>
            <p className="text-sm text-indigo-100">Hafta sonları temiz, sade tasarımlarla ürün koleksiyonları oluştur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};