# 🚀 GitHub Repository + Vercel Deployment Rehberi

## ADIM 1: GitHub'da Yeni Repository Oluşturun

1. **https://github.com** adresine gidin
2. **"New repository"** butonuna tıklayın (yeşil buton)
3. Repository bilgilerini doldurun:
   - **Repository name:** `ai-analytics-pro`
   - **Description:** `AI-powered Shopify analytics dashboard`
   - **Public** seçin (ücretsiz deployment için)
   - **"Add a README file"** işaretlemeyin
   - **"Add .gitignore"** seçmeyin
   - **"Choose a license"** seçmeyin

4. **"Create repository"** butonuna tıklayın

## ADIM 2: Repository URL'ini Kopyalayın

Repository oluştuktan sonra, sayfada şöyle bir URL göreceksiniz:
```
https://github.com/KULLANICI_ADINIZ/ai-analytics-pro.git
```

Bu URL'i kopyalayın!

## ADIM 3: Dosyaları GitHub'a Yükleyin

### Yöntem A: GitHub Web Interface (KOLAY)

1. GitHub repo sayfasında **"uploading an existing file"** linkine tıklayın
2. Tüm proje dosyalarını sürükleyip bırakın:
   - `src/` klasörü
   - `public/` klasörü
   - `dist/` klasörü
   - `package.json`
   - `index.html`
   - `vite.config.ts`
   - `tailwind.config.js`
   - `tsconfig.json`
   - `.env.example`
   - `README.md`
   - Diğer tüm dosyalar

3. **"Commit changes"** butonuna tıklayın

### Yöntem B: Git Commands (Terminal)

Eğer terminal kullanmak istiyorsanız:

```bash
# Proje klasöründe
git init
git add .
git commit -m "Initial commit: AI Analytics Pro"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/ai-analytics-pro.git
git push -u origin main
```

## ADIM 4: Vercel'e Repository'yi Import Edin

1. **https://vercel.com/new** adresine geri dönün
2. **"Install"** butonuna tıklayın (GitHub uygulamasını yüklemek için)
3. GitHub hesabınızla giriş yapın
4. Vercel'e repository erişim izni verin
5. **"ai-analytics-pro"** repository'sini seçin
6. **"Import"** butonuna tıklayın

## ADIM 5: Vercel Build Ayarları

Vercel otomatik olarak ayarları algılayacak, ama kontrol edin:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## ADIM 6: Environment Variables (Opsiyonel)

Eğer API key'leriniz varsa:

1. **"Environment Variables"** sekmesine gidin
2. Şu değişkenleri ekleyin:
   - `VITE_OPENAI_API_KEY` = `your_openai_key`
   - `VITE_SHOPIFY_API_KEY` = `your_shopify_key`

## ADIM 7: Deploy!

1. **"Deploy"** butonuna tıklayın
2. 2-3 dakika bekleyin
3. ✅ **Deployment tamamlandı!**

## 🎉 SONUÇ

Deployment tamamlandığında:
- Vercel size bir URL verecek: `https://ai-analytics-pro-xxx.vercel.app`
- Her GitHub push'unda otomatik deploy olacak
- SSL sertifikası otomatik
- CDN ile hızlı yükleme

## 🔧 SORUN GİDERME

### Build Hatası Alırsanız:
1. `package.json` dosyasının doğru olduğundan emin olun
2. `dist` klasörünün repository'de olduğunu kontrol edin
3. Build command'i `npm run build` olarak ayarlayın

### 404 Hatası Alırsanız:
1. Output directory'nin `dist` olduğunu kontrol edin
2. `index.html` dosyasının `dist` klasöründe olduğunu kontrol edin

## 📞 YARDIM

Herhangi bir adımda takılırsanız, o adımın ekran görüntüsünü gönderin!