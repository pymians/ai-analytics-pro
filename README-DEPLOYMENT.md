# 🚀 AI Analytics Pro - Deployment Rehberi

## 📋 Deployment Checklist

### ✅ Hazırlık
- [x] Proje build edildi (`npm run build`)
- [x] `dist` klasörü oluşturuldu
- [x] Tüm dosyalar hazır
- [x] GitHub repository oluşturulacak

### 🔗 GitHub Repository
1. **Repository Adı:** `ai-analytics-pro`
2. **Açıklama:** `AI-powered Shopify analytics dashboard`
3. **Görünürlük:** Public (ücretsiz deployment için)

### 🌐 Vercel Deployment
1. **Framework:** Vite
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Node Version:** 18.x

### 🔑 Environment Variables (Opsiyonel)
```
VITE_OPENAI_API_KEY=your_openai_key_here
VITE_SHOPIFY_API_KEY=your_shopify_key_here
VITE_SHOPIFY_SHOP=your-shop.myshopify.com
```

## 🎯 Beklenen Sonuç

Deployment tamamlandığında:
- ✅ Canlı URL: `https://ai-analytics-pro-xxx.vercel.app`
- ✅ SSL sertifikası aktif
- ✅ CDN ile hızlı yükleme
- ✅ Otomatik deployment (her push'da)

## 📱 Test Edilecek Özellikler

Deployment sonrası test edin:
- [ ] Ana sayfa yükleniyor
- [ ] Sidebar navigasyon çalışıyor
- [ ] Dil değiştirme çalışıyor
- [ ] Responsive tasarım çalışıyor
- [ ] Tüm sayfalar erişilebilir

## 🔧 Sorun Giderme

### Build Hatası
```bash
# Lokal olarak test edin
npm run build
npm run preview
```

### 404 Hatası
- `dist/index.html` dosyasının varlığını kontrol edin
- Vercel'de output directory ayarını kontrol edin

### Environment Variables
- Vercel dashboard'da environment variables'ı kontrol edin
- Variable isimlerinin `VITE_` ile başladığından emin olun

## 📞 Destek

Herhangi bir sorunla karşılaştığınızda:
1. Hata mesajının ekran görüntüsünü alın
2. Vercel deployment log'larını kontrol edin
3. GitHub repository'nin doğru yüklendiğini kontrol edin