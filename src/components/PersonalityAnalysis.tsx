import React from 'react';
import { Brain, Target, Palette, MessageCircle, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const PersonalityAnalysis: React.FC = () => {
  const { t } = useTranslation();

  const personalityData = {
    type: "Lüks Minimalist",
    score: 87,
    traits: [
      { name: "Sofistike", value: 92, color: "purple" },
      { name: "Kalite Odaklı", value: 89, color: "blue" },
      { name: "Minimalist", value: 85, color: "green" },
      { name: "Premium", value: 88, color: "orange" }
    ]
  };

  const recommendations = [
    {
      category: "Ürün Yerleştirme",
      suggestion: "Ana sayfada maksimum 3 ürün göster, beyaz alan kullan",
      impact: "Yüksek",
      icon: Target
    },
    {
      category: "Renk Psikolojisi", 
      suggestion: "Monokrom palet: Siyah, beyaz, gri tonları",
      impact: "Orta",
      icon: Palette
    },
    {
      category: "İletişim Tonu",
      suggestion: "Profesyonel ama sıcak, teknik detaylardan kaçın",
      impact: "Yüksek", 
      icon: MessageCircle
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.personality_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.personality_description')}</p>
      </div>

      {/* Personality Score */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">🧬 Mağaza Kişiliğiniz</h3>
            <p className="text-purple-100 mb-4">AI analizi sonucu belirlenen benzersiz profiliniz</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-3xl font-bold">{personalityData.type}</span>
              </div>
              <div>
                <p className="text-sm text-purple-100">Uyum Skoru</p>
                <p className="text-2xl font-bold">{personalityData.score}/100</p>
              </div>
            </div>
          </div>
          <Brain className="w-20 h-20 text-white/30" />
        </div>
      </div>

      {/* Personality Traits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Kişilik Özellikleri</h3>
          <div className="space-y-4">
            {personalityData.traits.map((trait, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">{trait.name}</span>
                  <span className="text-sm text-gray-300">{trait.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-gradient-to-r from-${trait.color}-500 to-${trait.color}-600 h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${trait.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">DNA Evrimi</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-green-800">Son 30 Gün</span>
              <span className="text-green-600 font-bold">+5 puan</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-800">Trend Yönü</span>
              <span className="text-blue-600 font-bold">Lüks → Premium</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <span className="text-sm font-medium text-purple-800">Gelecek Tahmin</span>
              <span className="text-purple-600 font-bold">92 puan</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Kişiliğe Özel AI Önerileri</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{rec.category}</h4>
                    <span className={`text-xs px-2 py-1 rounded-lg ${
                      rec.impact === 'Yüksek' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {rec.impact} Etki
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{rec.suggestion}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Rakip Kişilik Haritası</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Rakip A", type: "Genç & Dinamik", similarity: 23 },
            { name: "Rakip B", type: "Aile Odaklı", similarity: 45 },
            { name: "Rakip C", type: "Lüks Minimalist", similarity: 78 },
            { name: "Rakip D", type: "Teknoloji Tutkunu", similarity: 12 }
          ].map((competitor, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg text-center">
              <h4 className="font-semibold text-gray-900 mb-1">{competitor.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{competitor.type}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${competitor.similarity}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-500">{competitor.similarity}% benzer</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};