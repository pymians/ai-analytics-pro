import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Target, Zap, TrendingUp, Clock, Heart } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const SmartMarketing: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCampaign, setSelectedCampaign] = useState<'email' | 'social' | 'influencer'>('email');

  const customerSegments = [
    { name: 'Lüks Arayıcılar', count: 1247, engagement: 89, tone: 'Sofistike ve Profesyonel' },
    { name: 'Genç Trendsetterlar', count: 892, engagement: 94, tone: 'Enerjik ve Samimi' },
    { name: 'Pratik Odaklılar', count: 634, engagement: 76, tone: 'Direkt ve Açık' },
    { name: 'Kalite Meraklıları', count: 445, engagement: 82, tone: 'Detaylı ve Güvenilir' }
  ];

  const emailTemplates = [
    {
      segment: 'Lüks Arayıcılar',
      subject: 'Özel Koleksiyonumuz Sadece Sizin İçin',
      preview: 'Değerli müşterimiz, seçkin zevkiniz için özenle hazırladığımız premium koleksiyonumuzu keşfetmeye davet ediyoruz...',
      tone: 'Sofistike',
      expectedOpen: '34%',
      expectedClick: '8.2%'
    },
    {
      segment: 'Genç Trendsetterlar',
      subject: '🔥 Yeni Trend Alert! Kaçırma!',
      preview: 'Hey trendsetterlar! Bu sezon en hot ürünler geldi ve ilk sen göreceksin! Hemen check et 👀',
      tone: 'Enerjik',
      expectedOpen: '42%',
      expectedClick: '12.1%'
    }
  ];

  const socialContent = [
    {
      platform: 'Instagram',
      content: 'Minimalist tasarımın gücü ✨ #LessIsMore #MinimalistStyle',
      engagement: '+156%',
      bestTime: '19:00-21:00',
      hashtags: ['#minimalist', '#design', '#lifestyle']
    },
    {
      platform: 'TikTok',
      content: 'POV: Mükemmel ürünü bulduğunda 😍 #ProductLove #Shopping',
      engagement: '+234%',
      bestTime: '20:00-22:00',
      hashtags: ['#shopping', '#productlove', '#trend']
    }
  ];

  const influencerMatches = [
    {
      name: '@minimalist_jane',
      followers: '125K',
      engagement: '4.2%',
      match: 94,
      niche: 'Minimalist Lifestyle',
      estimatedReach: '45K',
      cost: '$800-1200'
    },
    {
      name: '@tech_guru_ali',
      followers: '89K',
      engagement: '6.1%',
      match: 87,
      niche: 'Tech Reviews',
      estimatedReach: '38K',
      cost: '$600-900'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.smart_marketing_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.smart_marketing_description')}</p>
      </div>

      {/* Campaign Type Selector */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Kampanya Türü</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: 'email', label: 'Email Pazarlama', icon: Mail, color: 'blue' },
            { id: 'social', label: 'Sosyal Medya', icon: MessageSquare, color: 'purple' },
            { id: 'influencer', label: 'Influencer Eşleştirme', icon: Users, color: 'pink' }
          ].map((campaign) => {
            const Icon = campaign.icon;
            return (
              <button
                key={campaign.id}
                onClick={() => setSelectedCampaign(campaign.id as any)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedCampaign === campaign.id
                    ? `border-${campaign.color}-500 bg-${campaign.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${
                  selectedCampaign === campaign.id ? `text-${campaign.color}-600` : 'text-gray-600'
                }`} />
                <p className="font-medium text-gray-900">{campaign.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Customer Segments */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Müşteri Segmentleri & İletişim Tonları</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customerSegments.map((segment, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{segment.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{segment.count} kişi</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                    {segment.engagement}% engagement
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-700">Ton: {segment.tone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Marketing */}
      {selectedCampaign === 'email' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">AI Email Şablonları</h3>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              <Zap className="w-4 h-4 inline mr-2" />
              Yeni Şablon Üret
            </button>
          </div>
          <div className="space-y-6">
            {emailTemplates.map((template, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                        {template.segment}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium">
                        {template.tone}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{template.subject}</h4>
                    <p className="text-gray-300 text-sm">{template.preview}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">Açılma:</span>
                        <span className="text-sm font-bold text-green-600">{template.expectedOpen}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-400">Tıklama:</span>
                        <span className="text-sm font-bold text-blue-600">{template.expectedClick}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    Kampanya Başlat
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Düzenle
                  </button>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                    A/B Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Social Media Content */}
      {selectedCampaign === 'social' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Sosyal Medya İçerik Önerileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialContent.map((content, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-white">{content.platform}</h4>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-300">{content.bestTime}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-800">{content.content}</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-300">Beklenen Engagement:</span>
                  <span className="text-sm font-bold text-green-600">{content.engagement}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.hashtags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Paylaş
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Influencer Matching */}
      {selectedCampaign === 'influencer' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">AI Influencer Eşleştirme</h3>
          <div className="space-y-4">
            {influencerMatches.map((influencer, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {influencer.name.charAt(1)}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{influencer.name}</h4>
                      <p className="text-sm text-gray-300">{influencer.niche}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-sm text-gray-300">{influencer.followers} takipçi</span>
                        <span className="text-sm text-gray-300">{influencer.engagement} engagement</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-300">Uyum:</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-bold">
                        %{influencer.match}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">Tahmini Erişim: {influencer.estimatedReach}</p>
                    <p className="text-sm font-semibold text-white">{influencer.cost}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                      İletişime Geç
                    </button>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Profili İncele
                    </button>
                    <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                      Kampanya Öner
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Performance Dashboard */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">📊 Pazarlama Performansı</h3>
            <p className="text-green-100 mb-4">AI destekli kampanyalarınızın gerçek zamanlı sonuçları</p>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+67%</p>
                <p className="text-sm text-green-100">Email Açılma</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+89%</p>
                <p className="text-sm text-blue-100">Sosyal Engagement</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+156%</p>
                <p className="text-sm text-purple-100">Influencer ROI</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+234%</p>
                <p className="text-sm text-pink-100">Toplam Dönüşüm</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <TrendingUp className="w-8 h-8 text-white/60" />
            <Heart className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};