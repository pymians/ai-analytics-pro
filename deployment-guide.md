# Vercel Manuel Deployment Rehberi

## Yöntem 1: Drag & Drop (EN KOLAY)

1. Vercel ana sayfasında "Add New..." butonuna tıklayın
2. "Project" seçin
3. "Browse All Templates" yerine "Import Git Repository" altında
4. "Continue with GitHub" yerine "Deploy with Vercel CLI" seçin

## Yöntem 2: Vercel CLI (Terminal)

```bash
# Vercel CLI yükle
npm i -g vercel

# Proje klasöründe
vercel

# Build klasörünü deploy et
vercel --prod dist
```

## Yöntem 3: Zip Upload

1. `dist` klasörünü zip'le
2. Vercel'de "Import" > "From Archive"
3. Zip dosyasını yükle

## Yöntem 4: GitHub Repo Oluştur

1. GitHub'da yeni repo oluştur
2. Dosyaları yükle
3. Vercel'de o repo'yu import et