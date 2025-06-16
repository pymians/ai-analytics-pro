import React from 'react';
import { Brain, Zap, Target, TrendingUp, Users, ShoppingBag, Eye, Palette } from 'lucide-react';

export const AppStoreFeatures: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Mağaza Kişilik Analizi',
      description: 'Mağazanızın benzersiz DNA\'sını keşfedin ve müşterilerinizle daha iyi bağlantı kurun',
      benefits: ['Marka kimliği güçlendirme', 'Hedef kitle analizi', 'Rekabet avantajı'],
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Akıllı Ürün Optimizasyonu',
      description: 'AI ile ürün başlıkları, açıklamaları ve fiyatları optimize edin',
      benefits: ['%30\'a kadar satış artışı', 'SEO optimizasyonu', 'Dönüşüm oranı iyileştirme'],
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Müşteri Davranış Tahmini',
      description: 'Hangi müşterilerin ne zaman satın alacağını önceden bilin',
      benefits: ['Proaktif pazarlama', 'Sepet terk oranı azaltma', 'Kişiselleştirilmiş deneyim'],
      color: 'green'
    },
    {
      icon: Eye,
      title: 'Canlı Müşteri Takibi',
      description: 'Müşterilerinizi gerçek zamanlı olarak izleyin ve optimize edin',
      benefits: ['Anlık müdahale', 'Dönüşüm artırma', 'Kullanıcı deneyimi iyileştirme'],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Akıllı Pazarlama Asistanı',
      description: 'AI ile kişiselleştirilmiş email, sosyal medya ve influencer kampanyaları',
      benefits: ['%200\'e kadar engagement artışı', 'Otomatik içerik üretimi', 'ROI optimizasyonu'],
      color: 'pink'
    },
    {
      icon: Palette,
      title: 'AI Ürün Stüdyosu',
      description: 'Ürün fotoğrafları, renk psikolojisi ve görsel optimizasyon',
      benefits: ['Profesyonel görünüm', 'Tıklama oranı artışı', 'Marka tutarlılığı'],
      color: 'indigo'
    }
  ];

  const stats = [
    { label: 'Ortalama Satış Artışı', value: '%47', color: 'green' },
    { label: 'Dönüşüm Oranı İyileştirme', value: '%68', color: 'blue' },
    { label: 'Müşteri Memnuniyeti', value: '%92', color: 'purple' },
    { label: 'ROI Artışı', value: '%156', color: 'orange' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-2xl p-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="/digimoli-app-store-logos.png" 
              alt="Digimoli AI Analytics Pro" 
              className="w-16 h-16 object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold">AI Analytics Pro</h1>
              <p className="text-purple-200 text-sm">by Digimoli</p>
            </div>
          </div>
          <p className="text-xl text-purple-100 mb-6">
            Shopify mağazanızı AI ile bir sonraki seviyeye taşıyın
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-12 h-12 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${feature.color}-500 rounded-full`}></div>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/digimoli-app-store-logos.png" 
              alt="Digimoli" 
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-900">💎 Fiyatlandırma</h2>
          </div>
          <p className="text-gray-600">Her büyüklükteki mağaza için uygun planlar</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '$29',
              period: '/ay',
              features: [
                'Temel AI analizi',
                '100 ürün optimizasyonu',
                'Email desteği',
                'Temel raporlar'
              ],
              color: 'blue',
              popular: false
            },
            {
              name: 'Professional',
              price: '$79',
              period: '/ay',
              features: [
                'Gelişmiş AI özellikleri',
                'Sınırsız optimizasyon',
                'Canlı müşteri takibi',
                'Öncelikli destek',
                'Özel raporlar'
              ],
              color: 'purple',
              popular: true
            },
            {
              name: 'Enterprise',
              price: '$199',
              period: '/ay',
              features: [
                'Tüm AI özellikleri',
                'Özel entegrasyonlar',
                'Dedicated hesap yöneticisi',
                'API erişimi',
                'Özel eğitim'
              ],
              color: 'green',
              popular: false
            }
          ].map((plan, index) => (
            <div key={index} className={`relative border-2 rounded-2xl p-6 ${
              plan.popular 
                ? `border-${plan.color}-500 bg-${plan.color}-50` 
                : 'border-gray-200 bg-white'
            }`}>
              {plan.popular && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-${plan.color}-500 text-white px-4 py-1 rounded-full text-sm font-medium`}>
                  En Popüler
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${plan.color}-500 rounded-full`}></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                plan.popular
                  ? `bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-600 text-white hover:shadow-lg`
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                Başlayın
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-8">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <img 
            src="/digimoli-app-store-logos.png" 
            alt="Digimoli" 
            className="w-8 h-8 object-contain"
          />
          <h2 className="text-2xl font-bold text-gray-900">🚀 Kurulum Adımları</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Uygulamayı Yükleyin',
              description: 'Shopify App Store\'dan tek tıkla yükleyin'
            },
            {
              step: '2',
              title: 'İzinleri Onaylayın',
              description: 'Güvenli OAuth ile mağazanızı bağlayın'
            },
            {
              step: '3',
              title: 'AI Analizi Başlatın',
              description: 'Otomatik analiz 5 dakikada tamamlanır'
            },
            {
              step: '4',
              title: 'Sonuçları Görün',
              description: 'Hemen optimizasyon önerilerini uygulayın'
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with Digimoli Branding */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img 
            src="/digimoli-app-store-logos.png" 
            alt="Digimoli" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="text-xl font-bold">Digimoli AI Analytics Pro</h3>
            <p className="text-gray-400 text-sm">Shopify App Store'da yakında</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Mağazanızı AI ile güçlendirin. Satışlarınızı artırın. Müşterilerinizi mutlu edin.
        </p>
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
          <span>© 2024 Digimoli</span>
          <span>•</span>
          <span>AI Analytics Pro</span>
          <span>•</span>
          <span>Shopify App Store</span>
        </div>
      </div>
    </div>
  );
};