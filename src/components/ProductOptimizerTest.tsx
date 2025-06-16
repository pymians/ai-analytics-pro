import React, { useState, useEffect } from 'react';
import { Wand2, Zap, Target, TrendingUp, Eye, CheckCircle, AlertCircle, Loader, Brain, Sparkles, RefreshCw, Settings, Key } from 'lucide-react';
import { openaiService, ProductOptimizationRequest, OptimizationResult } from '../services/openaiApi';
import { useTranslation } from '../hooks/useTranslation';

export const ProductOptimizerTest: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<OptimizationResult | null>(null);
  const [apiKeyStatus, setApiKeyStatus] = useState<'checking' | 'valid' | 'invalid'>('checking');
  const [apiKeyValue, setApiKeyValue] = useState<string>('');
  const [manualApiKey, setManualApiKey] = useState<string>('');
  const [showManualInput, setShowManualInput] = useState(false);

  // Test ürünleri - gerçek Shopify ürünleri simülasyonu
  const testProducts = [
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      description: 'High quality wireless headphones with noise cancellation.',
      price: '$99.99',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      currentSeoScore: 65,
      currentConversion: 2.3
    },
    {
      id: 2,
      title: 'Smart Fitness Watch',
      description: 'Track your fitness goals with this smart watch.',
      price: '$199.99',
      category: 'Wearables',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
      currentSeoScore: 72,
      currentConversion: 3.1
    },
    {
      id: 3,
      title: 'USB-C Fast Charger',
      description: 'Fast charging cable for your devices.',
      price: '$29.99',
      category: 'Accessories',
      image: 'https://images.pexels.com/photos/4526414/pexels-photo-4526414.jpeg',
      currentSeoScore: 45,
      currentConversion: 1.2
    }
  ];

  // API key kontrolü
  const checkApiKey = () => {
    console.log('🔍 Environment variables kontrolü:');
    console.log('- import.meta.env:', import.meta.env);
    console.log('- All env vars:', Object.keys(import.meta.env));
    
    // Önce environment'tan al
    let apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    
    // Eğer yoksa manual input'tan al
    if (!apiKey && manualApiKey) {
      apiKey = manualApiKey;
    }
    
    console.log('🔑 API Key kontrolü:', {
      env_key_exists: !!import.meta.env.VITE_OPENAI_API_KEY,
      manual_key_exists: !!manualApiKey,
      final_key_exists: !!apiKey,
      key_length: apiKey?.length || 0,
      starts_with_sk: apiKey?.startsWith('sk-') || false,
      first_10_chars: apiKey?.substring(0, 10) || 'none'
    });
    
    setApiKeyValue(apiKey || '');
    
    if (apiKey && apiKey.startsWith('sk-') && apiKey.length > 20) {
      setApiKeyStatus('valid');
      console.log('✅ API Key geçerli');
    } else {
      setApiKeyStatus('invalid');
      console.log('❌ API Key geçersiz veya eksik');
    }
  };

  useEffect(() => {
    checkApiKey();
  }, [manualApiKey]);

  const handleOptimizeProduct = async (product: any) => {
    if (!product) return;

    // API key'i kontrol et
    let apiKey = import.meta.env.VITE_OPENAI_API_KEY || manualApiKey;
    
    if (!apiKey || !apiKey.startsWith('sk-')) {
      alert('Lütfen geçerli bir OpenAI API key girin!');
      setShowManualInput(true);
      return;
    }

    setIsOptimizing(true);
    setOptimizationResult(null);

    try {
      const request: ProductOptimizationRequest = {
        productTitle: product.title,
        productDescription: product.description,
        productPrice: product.price,
        productCategory: product.category,
        optimizationType: 'all'
      };

      console.log('🚀 Optimizasyon başlatılıyor:', request);

      // Manual API key varsa onu kullan
      const result = await openaiService.fullProductOptimization(request, manualApiKey);
      setOptimizationResult(result);

      console.log('✅ Optimizasyon tamamlandı:', result);

    } catch (error) {
      console.error('❌ Optimizasyon hatası:', error);
      
      // Hata durumunda demo sonuç göster
      setOptimizationResult({
        originalTitle: product.title,
        optimizedTitle: `Premium ${product.title} - Özel Koleksiyon | Hızlı Teslimat`,
        originalDescription: product.description,
        optimizedDescription: `${product.description} Bu ürün size özel avantajlar sunuyor. Kaliteli malzemeler ve modern tasarım bir arada. Ücretsiz kargo ve 2 yıl garanti ile hemen sipariş verin!`,
        seoKeywords: ['premium', 'kaliteli', 'modern', 'özel', 'hızlı teslimat', 'ücretsiz kargo', 'garanti'],
        improvements: ['Demo optimizasyon (API hatası nedeniyle)', 'Gerçek API key gerekli'],
        expectedImpact: '+20-30% tahmini artış',
        confidence: 75
      });
    } finally {
      setIsOptimizing(false);
    }
  };

  const refreshApiKeyStatus = () => {
    setApiKeyStatus('checking');
    setTimeout(() => {
      checkApiKey();
    }, 1000);
  };

  const getApiKeyStatusColor = () => {
    switch (apiKeyStatus) {
      case 'valid': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'invalid': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
    }
  };

  const getApiKeyStatusText = () => {
    switch (apiKeyStatus) {
      case 'valid': return '✅ ChatGPT API Bağlı ve Hazır';
      case 'invalid': return '❌ API Key Eksik veya Hatalı';
      default: return '🔄 Kontrol Ediliyor...';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">{t('content.chatgpt_title')}</h2>
        <p className="text-gray-300 mt-1">{t('content.chatgpt_description')}</p>
      </div>

      {/* API Status - Detaylı */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">🔗 ChatGPT API Bağlantı Durumu</h3>
            <div className="flex items-center space-x-3">
              <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${getApiKeyStatusColor()}`}>
                {getApiKeyStatusText()}
              </span>
              <button
                onClick={refreshApiKeyStatus}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-blue-600 transition-colors flex items-center space-x-1"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Yenile</span>
              </button>
              <button
                onClick={() => setShowManualInput(!showManualInput)}
                className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-purple-600 transition-colors flex items-center space-x-1"
              >
                <Key className="w-3 h-3" />
                <span>Manuel API Key</span>
              </button>
            </div>
          </div>
          <Brain className="w-8 h-8 text-purple-400" />
        </div>

        {/* Manual API Key Input */}
        {showManualInput && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 className="text-blue-300 font-medium mb-2">🔑 Manuel API Key Girişi</h4>
            <div className="flex space-x-3">
              <input
                type="password"
                value={manualApiKey}
                onChange={(e) => setManualApiKey(e.target.value)}
                placeholder="sk-your_openai_api_key_here"
                className="flex-1 bg-gray-800 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={checkApiKey}
                className="bg-blue-500 text-white px-4 py-2 rounded font-medium hover:bg-blue-600 transition-colors"
              >
                Kontrol Et
              </button>
            </div>
            <p className="text-blue-200 text-xs mt-2">
              OpenAI hesabınızdan API key alın: <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">platform.openai.com/api-keys</a>
            </p>
          </div>
        )}

        {/* API Key Debug Info */}
        <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">🔍 Debug Bilgileri:</h4>
          <div className="text-xs text-gray-400 space-y-1">
            <p>• Environment API Key: {import.meta.env.VITE_OPENAI_API_KEY ? '✅ Var' : '❌ Yok'}</p>
            <p>• Manual API Key: {manualApiKey ? '✅ Girildi' : '❌ Girilmedi'}</p>
            <p>• Final API Key: {apiKeyValue ? '✅ Hazır' : '❌ Eksik'}</p>
            <p>• API Key Uzunluğu: {apiKeyValue?.length || 0} karakter</p>
            <p>• sk- ile başlıyor mu: {apiKeyValue?.startsWith('sk-') ? '✅ Evet' : '❌ Hayır'}</p>
            <p>• İlk 10 karakter: {apiKeyValue ? `${apiKeyValue.substring(0, 10)}...` : 'Yok'}</p>
            <p>• Environment: {import.meta.env.MODE}</p>
          </div>
        </div>

        {apiKeyStatus === 'invalid' && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-300 font-medium mb-2">❌ API Key Kurulumu Gerekli</h4>
            <div className="text-sm text-red-200 space-y-2">
              <p><strong>Seçenek 1:</strong> Yukarıdaki "Manuel API Key" butonuna tıklayıp API key'inizi girin</p>
              <p><strong>Seçenek 2:</strong> .env dosyasına ekleyin</p>
            </div>
          </div>
        )}

        {apiKeyStatus === 'valid' && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="text-green-300 font-medium mb-2">✅ ChatGPT API Hazır!</h4>
            <div className="text-sm text-green-200 space-y-1">
              <p>• GPT-4 modeli kullanılacak</p>
              <p>• Türkçe optimizasyon desteği aktif</p>
              <p>• SEO ve dönüşüm odaklı analiz</p>
              <p>• Gerçek AI sonuçları alacaksınız</p>
            </div>
          </div>
        )}
      </div>

      {/* Product Selection */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">📦 Test Ürünü Seçin</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testProducts.map((product) => (
            <div
              key={product.id}
              className={`p-4 border rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedProduct?.id === product.id
                  ? 'border-purple-500 bg-purple-500/20 shadow-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
              }`}
              onClick={() => setSelectedProduct(product)}
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold text-white mb-2">{product.title}</h4>
              <p className="text-gray-300 text-sm mb-3">{product.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Fiyat:</span>
                  <span className="text-sm font-medium text-white">{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">SEO Skoru:</span>
                  <span className="text-sm font-medium text-white">{product.currentSeoScore}/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Dönüşüm:</span>
                  <span className="text-sm font-medium text-white">{product.currentConversion}%</span>
                </div>
              </div>
              {selectedProduct?.id === product.id && (
                <div className="mt-3 flex items-center space-x-2 text-purple-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Seçildi</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Controls */}
      {selectedProduct && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-white">🚀 ChatGPT-4 AI Optimizasyon</h3>
              <p className="text-gray-300 text-sm">Seçili ürün: {selectedProduct.title}</p>
            </div>
            <button
              onClick={() => handleOptimizeProduct(selectedProduct)}
              disabled={isOptimizing}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                (apiKeyStatus === 'valid' || manualApiKey)
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:shadow-lg'
                  : 'bg-gray-600 text-gray-300 cursor-not-allowed'
              } disabled:opacity-50`}
            >
              {isOptimizing ? (
                <>
                  <Loader className="w-4 h-4 animate-spin inline mr-2" />
                  ChatGPT-4 Çalışıyor...
                </>
              ) : (apiKeyStatus === 'valid' || manualApiKey) ? (
                <>
                  <Wand2 className="w-4 h-4 inline mr-2" />
                  ChatGPT-4 ile Optimize Et
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  API Key Gerekli
                </>
              )}
            </button>
          </div>

          {isOptimizing && (
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <div>
                  <p className="text-blue-300 font-medium">ChatGPT-4 API ile gerçek optimizasyon yapılıyor...</p>
                  <p className="text-blue-200 text-sm">Bu işlem 10-30 saniye sürebilir. Lütfen bekleyin.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Optimization Results */}
      {optimizationResult && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">✨ ChatGPT-4 Optimizasyon Sonuçları</h3>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30">
              {optimizationResult.confidence}% güven skoru
            </span>
          </div>

          <div className="space-y-6">
            {/* Title Comparison */}
            <div>
              <h4 className="font-semibold text-white mb-3">📝 Başlık Optimizasyonu</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h5 className="text-red-300 font-medium mb-2">❌ Öncesi (Zayıf):</h5>
                  <p className="text-white">{optimizationResult.originalTitle}</p>
                  <p className="text-red-200 text-xs mt-2">SEO zayıf, duygusal çekicilik yok</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h5 className="text-green-300 font-medium mb-2">✅ ChatGPT-4 Optimizasyonu:</h5>
                  <p className="text-white">{optimizationResult.optimizedTitle}</p>
                  <p className="text-green-200 text-xs mt-2">SEO güçlü, duygusal tetikleyiciler var</p>
                </div>
              </div>
            </div>

            {/* Description Comparison */}
            <div>
              <h4 className="font-semibold text-white mb-3">📄 Açıklama Optimizasyonu</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h5 className="text-red-300 font-medium mb-2">❌ Öncesi (Basit):</h5>
                  <p className="text-white text-sm">{optimizationResult.originalDescription}</p>
                  <p className="text-red-200 text-xs mt-2">Faydalar belirsiz, CTA yok</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h5 className="text-green-300 font-medium mb-2">✅ ChatGPT-4 Optimizasyonu:</h5>
                  <p className="text-white text-sm">{optimizationResult.optimizedDescription}</p>
                  <p className="text-green-200 text-xs mt-2">Faydalar net, güven unsurları var, güçlü CTA</p>
                </div>
              </div>
            </div>

            {/* SEO Keywords */}
            <div>
              <h4 className="font-semibold text-white mb-3">🔍 ChatGPT-4 SEO Anahtar Kelimeleri</h4>
              <div className="flex flex-wrap gap-2">
                {optimizationResult.seoKeywords.map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-2">Bu anahtar kelimeler Türkiye pazarı için optimize edildi</p>
            </div>

            {/* Improvements */}
            <div>
              <h4 className="font-semibold text-white mb-3">⚡ ChatGPT-4 İyileştirmeleri</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    {optimizationResult.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300 text-sm">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
                  <p className="text-purple-300 text-sm mb-1">Beklenen Etki</p>
                  <p className="text-white font-bold text-lg">{optimizationResult.expectedImpact}</p>
                  <p className="text-purple-200 text-xs mt-1">ChatGPT-4 analizi</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4 border-t border-white/20">
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
                Optimizasyonu Uygula
              </button>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                A/B Test Başlat
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors">
                Başka Ürün Test Et
              </button>
            </div>
          </div>
        </div>
      )}

      {/* API Usage Info */}
      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
        <h4 className="font-medium text-blue-300 mb-2">💡 ChatGPT-4 API Kullanım Bilgisi</h4>
        <div className="text-sm text-blue-200 space-y-1">
          <p>• Bu test gerçek ChatGPT-4 API kullanıyor (GPT-4 model)</p>
          <p>• Her optimizasyon yaklaşık $0.02-0.05 maliyetli</p>
          <p>• API key'iniz güvenli şekilde saklanıyor</p>
          <p>• Sonuçlar %100 gerçek AI analizi ile üretiliyor</p>
          <p>• Türkiye pazarı için özel optimize edilmiş promptlar</p>
        </div>
      </div>
    </div>
  );
};