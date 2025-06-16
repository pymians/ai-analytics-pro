import React, { useState } from 'react';
import { Layers, Zap, CheckCircle, Clock, Target, TrendingUp, Wand2, Eye, BarChart3, Package, AlertCircle, FolderOpen, Filter } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const BulkProductOptimizer: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [optimizationMode, setOptimizationMode] = useState<'smart' | 'custom'>('smart');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationProgress, setOptimizationProgress] = useState(0);

  const collections = [
    { id: 'all', name: t('bulk_optimizer.select_all', { fallback: 'Tüm Ürünler' }), count: 15 },
    { id: 'electronics', name: 'Elektronik', count: 8 },
    { id: 'accessories', name: 'Aksesuarlar', count: 4 },
    { id: 'premium', name: 'Premium Koleksiyon', count: 3 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      collection: 'electronics',
      currentTitle: 'Wireless Bluetooth Headphones',
      currentDescription: 'High quality wireless headphones with noise cancellation.',
      currentPrice: '$99.99',
      seoScore: 65,
      conversionRate: 2.3,
      optimizationPotential: 'High',
      estimatedImprovement: '+34%',
      issues: [t('bulk_optimizer.weak_title', { fallback: 'Zayıf başlık' }), t('bulk_optimizer.missing_keywords', { fallback: 'Eksik anahtar kelimeler' }), t('bulk_optimizer.poor_description', { fallback: 'Zayıf açıklama' })]
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      collection: 'electronics',
      currentTitle: 'Fitness Tracker Watch',
      currentDescription: 'Track your fitness goals with this smart watch.',
      currentPrice: '$199.99',
      seoScore: 72,
      conversionRate: 3.1,
      optimizationPotential: 'Medium',
      estimatedImprovement: '+23%',
      issues: [t('bulk_optimizer.generic_title', { fallback: 'Genel başlık' }), t('bulk_optimizer.short_description', { fallback: 'Kısa açıklama' })]
    },
    {
      id: 3,
      name: 'Bluetooth Speaker Pro',
      collection: 'electronics',
      currentTitle: 'Portable Bluetooth Speaker',
      currentDescription: 'Portable speaker with great sound quality.',
      currentPrice: '$79.99',
      seoScore: 58,
      conversionRate: 1.8,
      optimizationPotential: 'High',
      estimatedImprovement: '+45%',
      issues: [t('bulk_optimizer.no_emotional_appeal', { fallback: 'Duygusal çekicilik yok' }), t('bulk_optimizer.missing_features', { fallback: 'Eksik özellikler' }), t('bulk_optimizer.weak_cta', { fallback: 'Zayıf CTA' })]
    },
    {
      id: 4,
      name: 'USB-C Fast Charger',
      collection: 'accessories',
      currentTitle: 'USB-C Charger',
      currentDescription: 'Fast charging cable for your devices.',
      currentPrice: '$29.99',
      seoScore: 45,
      conversionRate: 1.2,
      optimizationPotential: 'Very High',
      estimatedImprovement: '+67%',
      issues: [t('bulk_optimizer.too_simple', { fallback: 'Çok basit' }), t('bulk_optimizer.no_benefits', { fallback: 'Fayda yok' }), t('bulk_optimizer.missing_specs', { fallback: 'Eksik özellikler' })]
    },
    {
      id: 5,
      name: 'Wireless Phone Charger',
      collection: 'accessories',
      currentTitle: 'Qi Wireless Charger',
      currentDescription: 'Wireless charging pad for smartphones.',
      currentPrice: '$39.99',
      seoScore: 61,
      conversionRate: 2.7,
      optimizationPotential: 'Medium',
      estimatedImprovement: '+28%',
      issues: [t('bulk_optimizer.technical_jargon', { fallback: 'Teknik jargon' }), t('bulk_optimizer.no_lifestyle_appeal', { fallback: 'Yaşam tarzı çekiciliği yok' })]
    },
    {
      id: 6,
      name: 'Premium Leather Case',
      collection: 'premium',
      currentTitle: 'Phone Case',
      currentDescription: 'Leather case for phone protection.',
      currentPrice: '$89.99',
      seoScore: 55,
      conversionRate: 2.1,
      optimizationPotential: 'High',
      estimatedImprovement: '+42%',
      issues: [t('bulk_optimizer.luxury_appeal_missing', { fallback: 'Lüks çekicilik eksik' }), t('bulk_optimizer.no_material_benefits', { fallback: 'Malzeme faydaları yok' })]
    }
  ];

  const optimizationTemplates = [
    {
      name: 'SEO Powerhouse',
      description: 'Maksimum arama motoru görünürlüğü için optimize et',
      features: ['Anahtar kelime optimizasyonu', 'Meta açıklamalar', 'Yapılandırılmış veri'],
      expectedBoost: '+40% organik trafik',
      color: 'blue'
    },
    {
      name: 'Conversion Master',
      description: 'Dönüşüm oranını maksimize etmek için optimize et',
      features: ['Duygusal tetikleyiciler', 'Sosyal kanıt', 'Aciliyet yaratma'],
      expectedBoost: '+35% dönüşüm',
      color: 'green'
    },
    {
      name: 'Premium Positioning',
      description: 'Lüks ve premium algısı için optimize et',
      features: ['Prestij dili', 'Kalite vurgusu', 'Eksklüziflik'],
      expectedBoost: '+25% ortalama sipariş değeri',
      color: 'purple'
    },
    {
      name: 'Speed Optimizer',
      description: 'Hızlı satış için optimize et',
      features: ['Basit dil', 'Net faydalar', 'Hızlı karar verme'],
      expectedBoost: '+50% hızlı satış',
      color: 'orange'
    }
  ];

  const bulkOptimizationResults = [
    {
      productName: 'Premium Wireless Headphones',
      before: {
        title: 'Wireless Bluetooth Headphones',
        seoScore: 65,
        conversionRate: 2.3
      },
      after: {
        title: 'Premium Kablosuz Kulaklık - Studio Kalitesi Ses Deneyimi | Gürültü Engelleme',
        seoScore: 94,
        conversionRate: 3.1
      },
      improvements: {
        seoImprovement: '+29 puan',
        conversionImprovement: '+34%',
        expectedRevenue: '+$2,340/ay'
      }
    },
    {
      productName: 'Smart Fitness Watch',
      before: {
        title: 'Fitness Tracker Watch',
        seoScore: 72,
        conversionRate: 3.1
      },
      after: {
        title: 'Akıllı Fitness Saati - 24/7 Sağlık Takibi | Su Geçirmez Tasarım',
        seoScore: 89,
        conversionRate: 3.8
      },
      improvements: {
        seoImprovement: '+17 puan',
        conversionImprovement: '+23%',
        expectedRevenue: '+$1,890/ay'
      }
    }
  ];

  const filteredProducts = selectedCollection === 'all' 
    ? products 
    : products.filter(p => p.collection === selectedCollection);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const selectAllProducts = () => {
    setSelectedProducts(filteredProducts.map(p => p.id));
  };

  const selectByCollection = (collectionId: string) => {
    const collectionProducts = products.filter(p => p.collection === collectionId);
    setSelectedProducts(collectionProducts.map(p => p.id));
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  const startBulkOptimization = () => {
    setIsOptimizing(true);
    setOptimizationProgress(0);
    
    const interval = setInterval(() => {
      setOptimizationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsOptimizing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'Very High': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getPotentialText = (potential: string) => {
    switch (potential) {
      case 'Very High': return t('bulk_optimizer.very_high', { fallback: 'Çok Yüksek' });
      case 'High': return t('bulk_optimizer.high', { fallback: 'Yüksek' });
      case 'Medium': return t('bulk_optimizer.medium', { fallback: 'Orta' });
      case 'Low': return t('bulk_optimizer.low', { fallback: 'Düşük' });
      default: return potential;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">📦 {t('bulk_optimizer.title', { fallback: 'Toplu Ürün Optimizasyonu' })}</h2>
        <p className="text-gray-300 mt-1">{t('bulk_optimizer.description', { fallback: 'Koleksiyonlarınızı veya seçili ürünleri tek seferde AI ile optimize edin' })}</p>
      </div>

      {/* Collection Filter */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
            <FolderOpen className="w-5 h-5 text-purple-400" />
            <span>{t('bulk_optimizer.collection_selection', { fallback: 'Koleksiyon Seçimi' })}</span>
          </h3>
          <div className="flex items-center space-x-2 text-gray-300">
            <Filter className="w-4 h-4" />
            <span className="text-sm">{filteredProducts.length} ürün</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedCollection === collection.id
                  ? 'border-purple-500 bg-purple-500/20 text-white'
                  : 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5'
              }`}
            >
              <div className="text-center">
                <h4 className="font-semibold mb-1">{collection.name}</h4>
                <p className="text-sm opacity-80">{collection.count} ürün</p>
                {selectedCollection === collection.id && collection.id !== 'all' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      selectByCollection(collection.id);
                    }}
                    className="mt-2 bg-purple-500 text-white px-3 py-1 rounded text-xs font-medium hover:bg-purple-600 transition-colors"
                  >
                    Koleksiyonu Seç
                  </button>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Optimization Mode Selector */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🎯 {t('bulk_optimizer.optimization_mode', { fallback: 'Optimizasyon Modu' })}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setOptimizationMode('smart')}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              optimizationMode === 'smart'
                ? 'border-purple-500 bg-purple-500/20 text-white shadow-lg'
                : 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5'
            }`}
          >
            <Zap className="w-8 h-8 mx-auto mb-3 text-purple-400" />
            <h4 className="font-semibold mb-2">{t('bulk_optimizer.smart_optimization', { fallback: 'Akıllı Optimizasyon' })}</h4>
            <p className="text-sm opacity-80">{t('bulk_optimizer.smart_description', { fallback: 'AI her ürün için en uygun optimizasyonu seçer' })}</p>
          </button>
          <button
            onClick={() => setOptimizationMode('custom')}
            className={`p-6 rounded-xl border-2 transition-all duration-300 ${
              optimizationMode === 'custom'
                ? 'border-blue-500 bg-blue-500/20 text-white shadow-lg'
                : 'border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5'
            }`}
          >
            <Target className="w-8 h-8 mx-auto mb-3 text-blue-400" />
            <h4 className="font-semibold mb-2">{t('bulk_optimizer.custom_optimization', { fallback: 'Özel Optimizasyon' })}</h4>
            <p className="text-sm opacity-80">{t('bulk_optimizer.custom_description', { fallback: 'Kendi optimizasyon şablonunuzu seçin' })}</p>
          </button>
        </div>
      </div>

      {/* Custom Templates (if custom mode selected) */}
      {optimizationMode === 'custom' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">🎨 Optimizasyon Şablonları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizationTemplates.map((template, index) => (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-white">{template.name}</h4>
                  <div className={`w-3 h-3 rounded-full bg-${template.color}-400`}></div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{template.description}</p>
                <div className="space-y-1 mb-3">
                  {template.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 bg-${template.color}-400 rounded-full`}></div>
                      <span className="text-xs text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-400">{template.expectedBoost}</span>
                  <button className={`bg-${template.color}-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-${template.color}-600 transition-colors group-hover:scale-105`}>
                    Seç
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Selection */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">📋 {t('bulk_optimizer.product_selection', { fallback: 'Ürün Seçimi' })}</h3>
          <div className="flex space-x-3">
            <button
              onClick={selectAllProducts}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              {t('bulk_optimizer.select_all', { fallback: 'Tümünü Seç' })} ({filteredProducts.length})
            </button>
            <button
              onClick={clearSelection}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              {t('bulk_optimizer.clear', { fallback: 'Temizle' })}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`p-4 border rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedProducts.includes(product.id)
                  ? 'border-purple-500 bg-purple-500/20 shadow-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
              }`}
              onClick={() => toggleProductSelection(product.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                    selectedProducts.includes(product.id)
                      ? 'border-purple-500 bg-purple-500 scale-110'
                      : 'border-white/40 hover:border-purple-400'
                  }`}>
                    {selectedProducts.includes(product.id) && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-white">{product.name}</h4>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30">
                        {collections.find(c => c.id === product.collection)?.name}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{product.currentTitle}</p>
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div>
                        <span className="text-xs text-gray-400">{t('bulk_optimizer.current_seo_score', { fallback: 'SEO Skoru' })}:</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-white">{product.seoScore}/100</span>
                          <div className="w-16 bg-gray-700 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-red-500 to-green-500 h-1.5 rounded-full"
                              style={{ width: `${product.seoScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">{t('bulk_optimizer.conversion_rate', { fallback: 'Dönüşüm' })}:</span>
                        <span className="text-sm font-medium text-white ml-2">{product.conversionRate}%</span>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400">{t('bulk_optimizer.price', { fallback: 'Fiyat' })}:</span>
                        <span className="text-sm font-medium text-white ml-2">{product.currentPrice}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.issues.map((issue, issueIndex) => (
                        <span key={issueIndex} className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs border border-red-500/30">
                          {issue}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getPotentialColor(product.optimizationPotential)}`}>
                    {getPotentialText(product.optimizationPotential)}
                  </span>
                  <p className="text-green-400 font-bold mt-2">{product.estimatedImprovement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Controls */}
      {selectedProducts.length > 0 && (
        <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">🚀 Optimizasyon Başlat</h3>
              <p className="text-gray-300 text-sm">{selectedProducts.length} ürün seçildi</p>
            </div>
            <button
              onClick={startBulkOptimization}
              disabled={isOptimizing}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 transform hover:scale-105"
            >
              {isOptimizing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                  Optimize Ediliyor...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 inline mr-2" />
                  {t('bulk_optimizer.start_optimization', { fallback: 'Toplu Optimizasyon Başlat' })}
                </>
              )}
            </button>
          </div>

          {isOptimizing && (
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">İlerleme:</span>
                <span className="text-white font-medium">{optimizationProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${optimizationProgress}%` }}
                ></div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-300">
                  {optimizationProgress < 30 ? 'Ürünler analiz ediliyor...' :
                   optimizationProgress < 60 ? 'AI optimizasyonları uygulanıyor...' :
                   optimizationProgress < 90 ? 'Sonuçlar hesaplanıyor...' :
                   'Tamamlanıyor...'}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Optimization Results */}
      {optimizationProgress === 100 && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">✅ {t('bulk_optimizer.optimization_results', { fallback: 'Optimizasyon Sonuçları' })}</h3>
          <div className="space-y-6">
            {bulkOptimizationResults.map((result, index) => (
              <div key={index} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h4 className="font-semibold text-white mb-4">{result.productName}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">{t('bulk_optimizer.before', { fallback: 'Öncesi' })}:</h5>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <p className="text-white text-sm mb-2">{result.before.title}</p>
                      <div className="flex space-x-4 text-xs">
                        <span className="text-gray-300">SEO: {result.before.seoScore}</span>
                        <span className="text-gray-300">Dönüşüm: {result.before.conversionRate}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">{t('bulk_optimizer.after', { fallback: 'Sonrası' })}:</h5>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                      <p className="text-white text-sm mb-2">{result.after.title}</p>
                      <div className="flex space-x-4 text-xs">
                        <span className="text-gray-300">SEO: {result.after.seoScore}</span>
                        <span className="text-gray-300">Dönüşüm: {result.after.conversionRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <p className="text-blue-300 text-sm">{t('bulk_optimizer.seo_improvement', { fallback: 'SEO İyileştirme' })}</p>
                    <p className="text-white font-bold">{result.improvements.seoImprovement}</p>
                  </div>
                  <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <p className="text-green-300 text-sm">{t('bulk_optimizer.conversion_improvement', { fallback: 'Dönüşüm Artışı' })}</p>
                    <p className="text-white font-bold">{result.improvements.conversionImprovement}</p>
                  </div>
                  <div className="text-center p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                    <p className="text-purple-300 text-sm">{t('bulk_optimizer.expected_revenue', { fallback: 'Beklenen Gelir' })}</p>
                    <p className="text-white font-bold">{result.improvements.expectedRevenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Stats */}
      <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 border border-green-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">📊 {t('bulk_optimizer.optimization_impact', { fallback: 'Toplu Optimizasyon Etkisi' })}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-green-400">+47%</p>
            <p className="text-sm text-gray-300">{t('bulk_optimizer.average_seo_increase', { fallback: 'Ortalama SEO Artışı' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-blue-400">+34%</p>
            <p className="text-sm text-gray-300">{t('bulk_optimizer.conversion_improvement_rate', { fallback: 'Dönüşüm İyileştirmesi' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-purple-400">+$8,900</p>
            <p className="text-sm text-gray-300">{t('bulk_optimizer.monthly_revenue_increase', { fallback: 'Aylık Gelir Artışı' })}</p>
          </div>
          <div className="text-center p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-3xl font-bold text-pink-400">15 dk</p>
            <p className="text-sm text-gray-300">{t('bulk_optimizer.total_time', { fallback: 'Toplam Süre' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};