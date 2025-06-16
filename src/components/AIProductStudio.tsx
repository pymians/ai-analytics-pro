import React, { useState } from 'react';
import { Camera, Wand2, Palette, Target, Upload, Sparkles, Eye, BarChart3 } from 'lucide-react';

export const AIProductStudio: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<'photo' | 'title' | 'description' | 'color'>('photo');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const photoAnalysis = {
    score: 73,
    issues: [
      { type: 'Işık', severity: 'Yüksek', suggestion: 'Doğal ışık kullanın, gölgeler çok sert' },
      { type: 'Açı', severity: 'Orta', suggestion: '45° açıdan çekin, ürün daha çekici görünür' },
      { type: 'Arka Plan', severity: 'Düşük', suggestion: 'Beyaz arka plan lüks algısını artırır' }
    ],
    improvements: [
      { before: 'Mevcut CTR: 2.3%', after: 'Tahmini CTR: 4.8%', improvement: '+108%' },
      { before: 'Dönüşüm: 1.2%', after: 'Tahmini: 2.7%', improvement: '+125%' }
    ]
  };

  const titleSuggestions = [
    {
      title: 'Premium Kablosuz Kulaklık - Studio Kalitesi Ses Deneyimi',
      score: 94,
      seoKeywords: ['kablosuz kulaklık', 'premium', 'studio kalitesi'],
      emotionalTriggers: ['Premium', 'Deneyimi'],
      expectedLift: '+34%'
    },
    {
      title: 'Profesyonel Bluetooth Kulaklık | Gürültü Engelleme Teknolojisi',
      score: 89,
      seoKeywords: ['bluetooth kulaklık', 'profesyonel', 'gürültü engelleme'],
      emotionalTriggers: ['Profesyonel', 'Teknolojisi'],
      expectedLift: '+28%'
    },
    {
      title: 'Lüks Tasarım Wireless Kulaklık - 30 Saat Müzik Keyfi',
      score: 87,
      seoKeywords: ['wireless kulaklık', 'lüks tasarım', '30 saat'],
      emotionalTriggers: ['Lüks', 'Keyfi'],
      expectedLift: '+25%'
    }
  ];

  const colorPsychology = [
    { color: '#000000', name: 'Siyah', psychology: 'Lüks, Güçlü, Prestijli', conversionBoost: '+15%', bestFor: 'Premium ürünler' },
    { color: '#FFFFFF', name: 'Beyaz', psychology: 'Temiz, Minimal, Güvenilir', conversionBoost: '+12%', bestFor: 'Teknoloji ürünleri' },
    { color: '#3B82F6', name: 'Mavi', psychology: 'Güvenilir, Teknolojik, Sakin', conversionBoost: '+18%', bestFor: 'Elektronik' },
    { color: '#10B981', name: 'Yeşil', psychology: 'Doğal, Güvenli, Pozitif', conversionBoost: '+8%', bestFor: 'Sağlık ürünleri' }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">🎨 AI Ürün Stüdyosu</h2>
        <p className="text-gray-300 mt-1">Ürünlerinizi AI ile profesyonel seviyeye taşıyın</p>
      </div>

      {/* Tool Selector */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Optimizasyon Aracı Seçin</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { id: 'photo', label: 'Fotoğraf Analizi', icon: Camera, color: 'purple' },
            { id: 'title', label: 'Başlık Optimizasyonu', icon: Wand2, color: 'blue' },
            { id: 'description', label: 'Açıklama Yazımı', icon: Target, color: 'green' },
            { id: 'color', label: 'Renk Psikolojisi', icon: Palette, color: 'orange' }
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id as any)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedTool === tool.id
                    ? `border-${tool.color}-500 bg-${tool.color}-50 shadow-lg transform scale-105`
                    : 'border-gray-200 hover:border-gray-300 hover:transform hover:scale-102'
                }`}
              >
                <Icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedTool === tool.id ? `text-${tool.color}-600` : 'text-gray-600'
                }`} />
                <p className="text-sm font-medium text-gray-900">{tool.label}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Photo Analysis Tool */}
      {selectedTool === 'photo' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Ürün Fotoğrafı Yükle</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
              {uploadedImage ? (
                <div className="space-y-4">
                  <img src={uploadedImage} alt="Uploaded product" className="max-h-48 mx-auto rounded-lg" />
                  <button
                    onClick={() => setUploadedImage(null)}
                    className="text-sm text-purple-600 hover:text-purple-800"
                  >
                    Farklı fotoğraf yükle
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto" />
                  <div>
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <span className="text-purple-600 font-medium hover:text-purple-800">Fotoğraf yükle</span>
                      <span className="text-gray-600"> veya sürükle bırak</span>
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, WEBP (max. 10MB)</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">AI Fotoğraf Analizi</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${photoAnalysis.score > 80 ? 'bg-green-500' : photoAnalysis.score > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                <span className="text-2xl font-bold text-white">{photoAnalysis.score}/100</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-3">🔍 Tespit Edilen Sorunlar</h4>
                <div className="space-y-3">
                  {photoAnalysis.issues.map((issue, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{issue.type}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          issue.severity === 'Yüksek' ? 'bg-red-100 text-red-800' :
                          issue.severity === 'Orta' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {issue.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{issue.suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-3">📈 Beklenen İyileştirmeler</h4>
                <div className="space-y-2">
                  {photoAnalysis.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-600">{improvement.before}</p>
                        <p className="text-sm font-medium text-gray-900">{improvement.after}</p>
                      </div>
                      <span className="text-lg font-bold text-green-600">{improvement.improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Title Optimization Tool */}
      {selectedTool === 'title' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">🎯 AI Başlık Optimizasyonu</h3>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Yeni Başlık Üret
            </button>
          </div>

          <div className="space-y-6">
            {titleSuggestions.map((suggestion, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-medium text-white flex-1 mr-4">{suggestion.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-bold">
                      {suggestion.score}/100
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-bold">
                      {suggestion.expectedLift}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">🔍 SEO Anahtar Kelimeler</h5>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.seoKeywords.map((keyword, keyIndex) => (
                        <span key={keyIndex} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-300 mb-2">💝 Duygusal Tetikleyiciler</h5>
                    <div className="flex flex-wrap gap-2">
                      {suggestion.emotionalTriggers.map((trigger, triggerIndex) => (
                        <span key={triggerIndex} className="px-2 py-1 bg-pink-50 text-pink-700 rounded text-xs">
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    Bu Başlığı Kullan
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    A/B Test Yap
                  </button>
                  <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                    Düzenle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Color Psychology Tool */}
      {selectedTool === 'color' && (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">🎨 Renk Psikolojisi Analizi</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorPsychology.map((color, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-full border-4 border-gray-200 shadow-lg"
                    style={{ backgroundColor: color.color }}
                  ></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{color.name}</h4>
                    <p className="text-sm text-gray-300">{color.psychology}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">Dönüşüm Artışı:</span>
                    <span className="text-lg font-bold text-green-600">{color.conversionBoost}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">En İyi Kullanım:</span>
                    <span className="text-sm font-medium text-white">{color.bestFor}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Bu Rengi Uygula
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Real-time Performance */}
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">⚡ Gerçek Zamanlı Performans</h3>
            <p className="text-purple-100 mb-4">AI optimizasyonlarınızın canlı etkisini görün</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+47%</p>
                <p className="text-sm text-purple-100">Tıklama Artışı</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+32%</p>
                <p className="text-sm text-purple-100">Dönüşüm Artışı</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <p className="text-2xl font-bold">+68%</p>
                <p className="text-sm text-purple-100">Gelir Artışı</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Eye className="w-8 h-8 text-white/60" />
            <BarChart3 className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
};