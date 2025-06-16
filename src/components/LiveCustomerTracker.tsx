import React, { useState, useEffect } from 'react';
import { Users, Eye, ShoppingCart, Clock, MapPin, Smartphone, Monitor } from 'lucide-react';

export const LiveCustomerTracker: React.FC = () => {
  const [liveVisitors, setLiveVisitors] = useState(47);
  const [activeCustomers, setActiveCustomers] = useState([
    {
      id: 1,
      name: 'Anonim Ziyaretçi #1247',
      location: 'İstanbul, TR',
      device: 'iPhone 14',
      currentPage: 'Wireless Kulaklık',
      timeOnSite: '3m 24s',
      cartValue: '$0',
      purchaseProbability: 67,
      behavior: 'Ürün detaylarını inceliyor',
      lastAction: '15 saniye önce'
    },
    {
      id: 2,
      name: 'Sarah K.',
      location: 'Ankara, TR',
      device: 'MacBook Pro',
      currentPage: 'Sepet',
      timeOnSite: '8m 12s',
      cartValue: '$156',
      purchaseProbability: 89,
      behavior: 'Ödeme sayfasında',
      lastAction: '2 saniye önce'
    },
    {
      id: 3,
      name: 'Anonim Ziyaretçi #1248',
      location: 'İzmir, TR',
      device: 'Samsung Galaxy',
      currentPage: 'Ana Sayfa',
      timeOnSite: '45s',
      cartValue: '$0',
      purchaseProbability: 23,
      behavior: 'Kategorilere göz atıyor',
      lastAction: '8 saniye önce'
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => prev + Math.floor(Math.random() * 3) - 1);
      
      setActiveCustomers(prev => prev.map(customer => ({
        ...customer,
        timeOnSite: updateTimeOnSite(customer.timeOnSite),
        purchaseProbability: Math.min(100, customer.purchaseProbability + Math.floor(Math.random() * 5) - 2),
        lastAction: Math.floor(Math.random() * 30) + ' saniye önce'
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updateTimeOnSite = (currentTime: string) => {
    const [minutes, seconds] = currentTime.split('m ').map(part => 
      parseInt(part.replace('s', '').replace('m', ''))
    );
    const totalSeconds = minutes * 60 + seconds + 3;
    const newMinutes = Math.floor(totalSeconds / 60);
    const newSeconds = totalSeconds % 60;
    return `${newMinutes}m ${newSeconds}s`;
  };

  const getProbabilityColor = (probability: number) => {
    if (probability > 80) return 'text-green-400 bg-green-500/20 border border-green-500/30';
    if (probability > 60) return 'text-blue-400 bg-blue-500/20 border border-blue-500/30';
    if (probability > 40) return 'text-yellow-400 bg-yellow-500/20 border border-yellow-500/30';
    return 'text-red-400 bg-red-500/20 border border-red-500/30';
  };

  const getDeviceIcon = (device: string) => {
    if (device.includes('iPhone') || device.includes('Samsung')) return Smartphone;
    return Monitor;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-white">👁️ Canlı Müşteri Takibi</h2>
        <p className="text-gray-300 mt-1">Müşterilerinizi gerçek zamanlı olarak izleyin ve optimize edin</p>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-300 text-sm">Şu Anda Online</p>
              <p className="text-3xl font-bold text-white">{liveVisitors}</p>
            </div>
            <div className="relative">
              <Users className="w-8 h-8 text-green-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-300 text-sm">Aktif Sepetler</p>
              <p className="text-3xl font-bold text-white">12</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-300 text-sm">Ortalama Süre</p>
              <p className="text-3xl font-bold text-white">4m 32s</p>
            </div>
            <Clock className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-300 text-sm">Yüksek Niyet</p>
              <p className="text-3xl font-bold text-white">8</p>
            </div>
            <Eye className="w-8 h-8 text-orange-400" />
          </div>
        </div>
      </div>

      {/* Live Customer Feed */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">🔴 Canlı Müşteri Akışı</h3>
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Canlı</span>
          </div>
        </div>

        <div className="space-y-4">
          {activeCustomers.map((customer) => {
            const DeviceIcon = getDeviceIcon(customer.device);
            return (
              <div key={customer.id} className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {customer.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-white">{customer.name}</h4>
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold ${getProbabilityColor(customer.purchaseProbability)}`}>
                          %{customer.purchaseProbability} satın alma ihtimali
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{customer.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DeviceIcon className="w-4 h-4" />
                          <span>{customer.device}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{customer.timeOnSite}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Şu anda:</span>
                          <span className="font-medium text-white ml-1">{customer.currentPage}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Sepet:</span>
                          <span className="font-medium text-white ml-1">{customer.cartValue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300 mb-1">{customer.lastAction}</p>
                    <p className="text-sm font-medium text-white">{customer.behavior}</p>
                  </div>
                </div>

                {/* Action Suggestions */}
                {customer.purchaseProbability > 70 && (
                  <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-green-300">🎯 AI Önerisi</p>
                        <p className="text-sm text-green-200">
                          {customer.purchaseProbability > 85 
                            ? "Hemen %10 indirim popup'ı göster!" 
                            : "Ücretsiz kargo hatırlatması yap"}
                        </p>
                      </div>
                      <button className="bg-green-500 text-white px-3 py-1 rounded text-sm font-medium hover:bg-green-600 transition-colors">
                        Uygula
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Heatmap Preview */}
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">🔥 Sayfa Isı Haritası</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/30">
            <div className="w-16 h-16 bg-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">🔥</span>
            </div>
            <h4 className="font-semibold text-white">En Çok Tıklanan</h4>
            <p className="text-sm text-gray-300">Ürün fotoğrafları</p>
            <p className="text-lg font-bold text-red-400">89% tıklama</p>
          </div>
          
          <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
            <div className="w-16 h-16 bg-yellow-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h4 className="font-semibold text-white">Orta Aktivite</h4>
            <p className="text-sm text-gray-300">Ürün açıklamaları</p>
            <p className="text-lg font-bold text-yellow-400">45% tıklama</p>
          </div>
          
          <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
            <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-bold">❄️</span>
            </div>
            <h4 className="font-semibold text-white">Az Aktivite</h4>
            <p className="text-sm text-gray-300">Footer alanı</p>
            <p className="text-lg font-bold text-blue-400">12% tıklama</p>
          </div>
        </div>
      </div>
    </div>
  );
};