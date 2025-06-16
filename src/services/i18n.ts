// Internationalization Service for Shopify App
export interface Translation {
  [key: string]: string | Translation;
}

export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
  supported: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', rtl: false, supported: true },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', rtl: false, supported: true },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', rtl: false, supported: true },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', rtl: false, supported: true },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', rtl: false, supported: true },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', rtl: false, supported: true },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', rtl: false, supported: true },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', rtl: false, supported: true },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', rtl: false, supported: true },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', rtl: false, supported: true },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', rtl: false, supported: true },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true, supported: true }
];

class InternationalizationService {
  private currentLanguage: string = 'en';
  private translations: { [lang: string]: Translation } = {};
  private fallbackLanguage: string = 'en';
  private languageChangeListeners: ((lang: string) => void)[] = [];

  constructor() {
    this.loadTranslations();
    this.detectUserLanguage();
  }

  // Load all translations
  private async loadTranslations(): Promise<void> {
    // English (default/fallback)
    this.translations.en = {
      common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        search: 'Search',
        filter: 'Filter',
        export: 'Export',
        import: 'Import',
        refresh: 'Refresh',
        settings: 'Settings',
        help: 'Help',
        support: 'Support',
        apply: 'Apply',
        product: 'Product',
        search_placeholder: 'AI insights, products, customers...',
        select_language: 'Select Language',
        more_languages_coming: 'More languages coming soon!',
        shopify_app_store: 'Shopify App Store',
        app_store_description: 'This app is prepared for sale on Shopify App Store',
        production_ready: 'Production Ready',
        multilingual_support: '12 Languages Support',
        oauth_integration: 'OAuth Integration',
        gdpr_compliance: 'GDPR Compliance',
        ai_features: 'AI Features'
      },
      navigation: {
        multilingual_strategy: 'Multilingual Strategy',
        app_store_listing: 'App Store Listing (EN)',
        compliance: 'App Store Compliance',
        chatgpt_test: 'ChatGPT API Test',
        ai_insights: 'AI Insights Dashboard',
        advanced_customer: 'Advanced Customer Analytics',
        smart_inventory: 'Smart Inventory Management',
        bulk_optimizer: 'Bulk Product Optimization',
        app_store: 'App Store Showcase',
        ai_studio: 'AI Product Studio',
        live_tracker: 'Live Customer Tracking',
        personality: 'Personality Analysis',
        customer_match: 'Customer Match',
        product_optimizer: 'Product Optimization',
        smart_marketing: 'Smart Marketing',
        predictive: 'Predictive AI',
        dashboard: 'Dashboard',
        analytics: 'Analytics',
        customers: 'Customers',
        products: 'Products',
        growth: 'Growth Hub'
      },
      dashboard: {
        title: 'AI Analytics Dashboard',
        welcome: 'Welcome back',
        total_revenue: 'Total Revenue',
        total_orders: 'Total Orders',
        total_customers: 'Total Customers',
        conversion_rate: 'Conversion Rate',
        ai_active: 'AI Active',
        ai_insights_ready: 'AI Insights Ready',
        performance_summary: 'Performance Summary'
      },
      bulk_optimizer: {
        title: 'Bulk Product Optimization',
        description: 'Optimize your collections or selected products at once with AI',
        collection_selection: 'Collection Selection',
        optimization_mode: 'Optimization Mode',
        smart_optimization: 'Smart Optimization',
        smart_description: 'AI selects the best optimization for each product',
        custom_optimization: 'Custom Optimization',
        custom_description: 'Choose your own optimization template',
        product_selection: 'Product Selection',
        select_all: 'Select All',
        clear: 'Clear',
        current_seo_score: 'SEO Score',
        conversion_rate: 'Conversion',
        price: 'Price',
        very_high: 'Very High',
        high: 'High',
        medium: 'Medium',
        low: 'Low',
        start_optimization: 'Start Bulk Optimization',
        optimization_results: 'Optimization Results',
        before: 'Before',
        after: 'After',
        seo_improvement: 'SEO Improvement',
        conversion_improvement: 'Conversion Increase',
        expected_revenue: 'Expected Revenue',
        optimization_impact: 'Bulk Optimization Impact',
        average_seo_increase: 'Average SEO Increase',
        conversion_improvement_rate: 'Conversion Improvement',
        monthly_revenue_increase: 'Monthly Revenue Increase',
        total_time: 'Total Time'
      },
      inventory: {
        title: 'Smart Inventory Management',
        description: 'AI-powered predictive inventory optimization',
        total_products: 'Total Products',
        critical_stock: 'Critical Stock',
        stock_value: 'Stock Value',
        turnover_rate: 'Turnover Rate',
        ai_recommendations: 'AI Stock Recommendations',
        stock_status: 'Stock Status',
        current_stock: 'Current Stock',
        status: 'Status',
        velocity: 'Velocity',
        depletion: 'Depletion',
        recommendation: 'Recommendation',
        action: 'Action',
        impact: 'Impact',
        critical: 'Critical',
        low: 'Low',
        excess: 'Excess',
        optimal: 'Optimal',
        fast: 'Fast',
        medium: 'Medium',
        slow: 'Slow',
        high: 'High',
        place_order: 'Place Order',
        monitor: 'Monitor',
        demand_forecast: 'Demand Forecast',
        seasonal_trends: 'Seasonal Trends',
        supplier_performance: 'Supplier Performance',
        reliability: 'Reliability',
        delivery_time: 'Delivery Time',
        quality: 'Quality',
        cost: 'Cost',
        product_count: 'Product Count',
        days: 'days',
        per_day: 'day',
        pieces: 'pieces',
        actual: 'Actual',
        predicted: 'Predicted',
        performance_summary: 'Inventory Performance Summary',
        efficiency_improvement: 'Efficiency Improvement',
        cost_reduction: 'Cost Reduction',
        availability_rate: 'Stock Availability',
        turnover_improvement: 'Turnover Rate'
      },
      ai: {
        personality_analysis: 'Store Personality Analysis',
        product_optimization: 'Product Optimization',
        customer_prediction: 'Customer Behavior Prediction',
        marketing_automation: 'Marketing Automation',
        inventory_optimization: 'Inventory Optimization',
        confidence_score: 'confidence',
        expected_improvement: 'Expected Improvement',
        optimization_suggestions: 'Optimization Suggestions'
      },
      content: {
        multilingual_title: 'Multilingual Compliance & Market Strategy',
        multilingual_description: 'Shopify App Store language requirements and global market penetration',
        compliance_title: 'Shopify App Store Compliance Status',
        compliance_description: 'Comprehensive compliance check for App Store approval',
        chatgpt_title: 'ChatGPT API Test - Real Product Optimization',
        chatgpt_description: 'Optimize product titles and descriptions with real ChatGPT-4 API',
        ai_insights_title: 'AI Insights Dashboard',
        ai_insights_description: 'Real-time AI analysis and smart recommendations',
        advanced_customer_title: 'Advanced Customer Analytics',
        advanced_customer_description: 'Deep customer behavior analysis with AI',
        smart_inventory_title: 'Smart Inventory Management',
        smart_inventory_description: 'AI-powered predictive inventory optimization',
        bulk_optimizer_title: 'Bulk Product Optimization',
        bulk_optimizer_description: 'Optimize your collections or selected products at once with AI',
        app_store_title: 'App Store Features',
        app_store_description: 'Production-ready Shopify app features showcase',
        ai_studio_title: 'AI Product Studio',
        ai_studio_description: 'Take your products to professional level with AI',
        live_tracker_title: 'Live Customer Tracking',
        live_tracker_description: 'Monitor your customers in real-time and optimize',
        personality_title: 'Store Personality Analysis',
        personality_description: 'Discover your store\'s unique DNA with AI',
        customer_match_title: 'Customer Personality Match',
        customer_match_description: 'How compatible is your customers\' personality with your store?',
        product_optimizer_title: 'AI Product Optimization Studio',
        product_optimizer_description: 'Optimize your products with AI, increase your sales',
        smart_marketing_title: 'Smart Marketing Assistant',
        smart_marketing_description: 'Create personalized marketing campaigns with AI',
        predictive_title: 'Predictive Analytics',
        predictive_description: 'Predict customer behaviors in advance with AI',
        dashboard_title: 'Welcome back, Alex!',
        dashboard_description: 'Here\'s what\'s happening with your store today.',
        analytics_title: 'Analytics Overview',
        analytics_description: 'Deep dive into your store\'s performance metrics',
        customers_title: 'Customer Insights',
        customers_description: 'Understand and engage with your customer base',
        products_title: 'Product Performance',
        products_description: 'Track and optimize your product catalog',
        growth_title: 'Growth Hub',
        growth_description: 'AI-powered recommendations to accelerate your business growth'
      }
    };

    // Turkish
    this.translations.tr = {
      common: {
        loading: 'Yükleniyor...',
        save: 'Kaydet',
        cancel: 'İptal',
        delete: 'Sil',
        edit: 'Düzenle',
        close: 'Kapat',
        back: 'Geri',
        next: 'İleri',
        previous: 'Önceki',
        search: 'Ara',
        filter: 'Filtrele',
        export: 'Dışa Aktar',
        import: 'İçe Aktar',
        refresh: 'Yenile',
        settings: 'Ayarlar',
        help: 'Yardım',
        support: 'Destek',
        apply: 'Uygula',
        product: 'Ürün',
        search_placeholder: 'AI öngörüleri, ürünler, müşteriler...',
        select_language: 'Dil Seçin',
        more_languages_coming: 'Daha fazla dil yakında!',
        shopify_app_store: 'Shopify App Store',
        app_store_description: 'Bu uygulama Shopify App Store\'da satışa sunulmak için hazırlanmıştır',
        production_ready: 'Production Hazır',
        multilingual_support: '12 Dil Desteği',
        oauth_integration: 'OAuth Entegrasyonu',
        gdpr_compliance: 'GDPR Uyumluluğu',
        ai_features: 'AI Özellikleri'
      },
      navigation: {
        multilingual_strategy: 'Çok Dilli Strateji',
        app_store_listing: 'App Store Listesi (EN)',
        compliance: 'App Store Uyumluluğu',
        chatgpt_test: 'ChatGPT API Test',
        ai_insights: 'AI Öngörüler Paneli',
        advanced_customer: 'Gelişmiş Müşteri Analitiği',
        smart_inventory: 'Akıllı Stok Yönetimi',
        bulk_optimizer: 'Toplu Ürün Optimizasyonu',
        app_store: 'App Store Vitrin',
        ai_studio: 'AI Ürün Stüdyosu',
        live_tracker: 'Canlı Müşteri Takibi',
        personality: 'Kişilik Analizi',
        customer_match: 'Müşteri Uyumu',
        product_optimizer: 'Ürün Optimizasyonu',
        smart_marketing: 'Akıllı Pazarlama',
        predictive: 'Tahmine Dayalı AI',
        dashboard: 'Ana Panel',
        analytics: 'Analitik',
        customers: 'Müşteriler',
        products: 'Ürünler',
        growth: 'Büyüme Merkezi'
      },
      dashboard: {
        title: 'AI Analitik Paneli',
        welcome: 'Tekrar hoş geldiniz',
        total_revenue: 'Toplam Gelir',
        total_orders: 'Toplam Sipariş',
        total_customers: 'Toplam Müşteri',
        conversion_rate: 'Dönüşüm Oranı',
        ai_active: 'AI Aktif',
        ai_insights_ready: 'AI Öngörüleri Hazır',
        performance_summary: 'Performans Özeti'
      },
      bulk_optimizer: {
        title: 'Toplu Ürün Optimizasyonu',
        description: 'Koleksiyonlarınızı veya seçili ürünleri tek seferde AI ile optimize edin',
        collection_selection: 'Koleksiyon Seçimi',
        optimization_mode: 'Optimizasyon Modu',
        smart_optimization: 'Akıllı Optimizasyon',
        smart_description: 'AI her ürün için en uygun optimizasyonu seçer',
        custom_optimization: 'Özel Optimizasyon',
        custom_description: 'Kendi optimizasyon şablonunuzu seçin',
        product_selection: 'Ürün Seçimi',
        select_all: 'Tümünü Seç',
        clear: 'Temizle',
        current_seo_score: 'SEO Skoru',
        conversion_rate: 'Dönüşüm',
        price: 'Fiyat',
        very_high: 'Çok Yüksek',
        high: 'Yüksek',
        medium: 'Orta',
        low: 'Düşük',
        start_optimization: 'Toplu Optimizasyon Başlat',
        optimization_results: 'Optimizasyon Sonuçları',
        before: 'Öncesi',
        after: 'Sonrası',
        seo_improvement: 'SEO İyileştirme',
        conversion_improvement: 'Dönüşüm Artışı',
        expected_revenue: 'Beklenen Gelir',
        optimization_impact: 'Toplu Optimizasyon Etkisi',
        average_seo_increase: 'Ortalama SEO Artışı',
        conversion_improvement_rate: 'Dönüşüm İyileştirmesi',
        monthly_revenue_increase: 'Aylık Gelir Artışı',
        total_time: 'Toplam Süre'
      },
      inventory: {
        title: 'Akıllı Stok Yönetimi',
        description: 'AI ile tahmine dayalı stok optimizasyonu',
        total_products: 'Toplam Ürün',
        critical_stock: 'Kritik Stok',
        stock_value: 'Stok Değeri',
        turnover_rate: 'Devir Hızı',
        ai_recommendations: 'AI Stok Önerileri',
        stock_status: 'Stok Durumu',
        current_stock: 'Mevcut Stok',
        status: 'Durum',
        velocity: 'Hız',
        depletion: 'Tükenme',
        recommendation: 'Öneri',
        action: 'Aksiyon',
        impact: 'Etki',
        critical: 'Kritik',
        low: 'Düşük',
        excess: 'Fazla',
        optimal: 'Optimal',
        fast: 'Hızlı',
        medium: 'Orta',
        slow: 'Yavaş',
        high: 'Yüksek',
        place_order: 'Sipariş Ver',
        monitor: 'İzle',
        demand_forecast: 'Talep Tahmini',
        seasonal_trends: 'Sezonsal Trendler',
        supplier_performance: 'Tedarikçi Performansı',
        reliability: 'Güvenilirlik',
        delivery_time: 'Teslimat Süresi',
        quality: 'Kalite',
        cost: 'Maliyet',
        product_count: 'Ürün Sayısı',
        days: 'gün',
        per_day: 'gün',
        pieces: 'adet',
        actual: 'Gerçek',
        predicted: 'Tahmin',
        performance_summary: 'Stok Performans Özeti',
        efficiency_improvement: 'Verimlilik Artışı',
        cost_reduction: 'Maliyet Azalması',
        availability_rate: 'Stok Bulunabilirlik',
        turnover_improvement: 'Devir Hızı'
      },
      ai: {
        personality_analysis: 'Mağaza Kişilik Analizi',
        product_optimization: 'Ürün Optimizasyonu',
        customer_prediction: 'Müşteri Davranış Tahmini',
        marketing_automation: 'Pazarlama Otomasyonu',
        inventory_optimization: 'Stok Optimizasyonu',
        confidence_score: 'güven',
        expected_improvement: 'Beklenen İyileştirme',
        optimization_suggestions: 'Optimizasyon Önerileri'
      },
      content: {
        multilingual_title: 'Çok Dilli Uyumluluk ve Pazar Stratejisi',
        multilingual_description: 'Shopify App Store dil gereksinimleri ve küresel pazar penetrasyonu',
        compliance_title: 'Shopify App Store Uyumluluk Durumu',
        compliance_description: 'App Store onayı için kapsamlı uyumluluk kontrolü',
        chatgpt_title: 'ChatGPT API Test - Gerçek Ürün Optimizasyonu',
        chatgpt_description: 'Gerçek ChatGPT-4 API ile ürün başlıkları ve açıklamaları optimize edin',
        ai_insights_title: 'AI Öngörüler Paneli',
        ai_insights_description: 'Gerçek zamanlı AI analizi ve akıllı öneriler',
        advanced_customer_title: 'Gelişmiş Müşteri Analitiği',
        advanced_customer_description: 'AI ile derinlemesine müşteri davranış analizi',
        smart_inventory_title: 'Akıllı Stok Yönetimi',
        smart_inventory_description: 'AI ile tahmine dayalı stok optimizasyonu',
        bulk_optimizer_title: 'Toplu Ürün Optimizasyonu',
        bulk_optimizer_description: 'Koleksiyonlarınızı veya seçili ürünleri tek seferde AI ile optimize edin',
        app_store_title: 'App Store Özellikleri',
        app_store_description: 'Production-ready Shopify uygulama özellikleri vitrini',
        ai_studio_title: 'AI Ürün Stüdyosu',
        ai_studio_description: 'Ürünlerinizi AI ile profesyonel seviyeye taşıyın',
        live_tracker_title: 'Canlı Müşteri Takibi',
        live_tracker_description: 'Müşterilerinizi gerçek zamanlı olarak izleyin ve optimize edin',
        personality_title: 'Mağaza Kişilik Analizi',
        personality_description: 'AI ile mağazanızın benzersiz DNA\'sını keşfedin',
        customer_match_title: 'Müşteri Kişilik Uyumu',
        customer_match_description: 'Müşterilerinizin kişiliği mağazanızla ne kadar uyumlu?',
        product_optimizer_title: 'AI Ürün Optimizasyon Stüdyosu',
        product_optimizer_description: 'Ürünlerinizi AI ile optimize edin, satışlarınızı artırın',
        smart_marketing_title: 'Akıllı Pazarlama Asistanı',
        smart_marketing_description: 'AI ile kişiselleştirilmiş pazarlama kampanyaları oluşturun',
        predictive_title: 'Tahmine Dayalı Analitik',
        predictive_description: 'AI ile müşteri davranışlarını önceden tahmin edin',
        dashboard_title: 'Tekrar hoş geldiniz, Alex!',
        dashboard_description: 'Bugün mağazanızda neler oluyor.',
        analytics_title: 'Analitik Genel Bakış',
        analytics_description: 'Mağazanızın performans metriklerine derinlemesine dalın',
        customers_title: 'Müşteri Öngörüleri',
        customers_description: 'Müşteri tabanınızı anlayın ve etkileşim kurun',
        products_title: 'Ürün Performansı',
        products_description: 'Ürün kataloğunuzu takip edin ve optimize edin',
        growth_title: 'Büyüme Merkezi',
        growth_description: 'İş büyümenizi hızlandırmak için AI destekli öneriler'
      }
    };

    // French
    this.translations.fr = {
      common: {
        loading: 'Chargement...',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        close: 'Fermer',
        back: 'Retour',
        next: 'Suivant',
        previous: 'Précédent',
        search: 'Rechercher',
        filter: 'Filtrer',
        export: 'Exporter',
        import: 'Importer',
        refresh: 'Actualiser',
        settings: 'Paramètres',
        help: 'Aide',
        support: 'Support',
        apply: 'Appliquer',
        product: 'Produit',
        search_placeholder: 'Insights IA, produits, clients...',
        select_language: 'Sélectionner la Langue',
        more_languages_coming: 'Plus de langues bientôt !',
        shopify_app_store: 'Shopify App Store',
        app_store_description: 'Cette application est préparée pour la vente sur Shopify App Store',
        production_ready: 'Prêt pour la Production',
        multilingual_support: 'Support de 12 Langues',
        oauth_integration: 'Intégration OAuth',
        gdpr_compliance: 'Conformité GDPR',
        ai_features: 'Fonctionnalités IA'
      },
      navigation: {
        multilingual_strategy: 'Stratégie Multilingue',
        app_store_listing: 'Liste App Store (EN)',
        compliance: 'Conformité App Store',
        chatgpt_test: 'Test API ChatGPT',
        ai_insights: 'Tableau de Bord Insights IA',
        advanced_customer: 'Analyse Avancée des Clients',
        smart_inventory: 'Gestion Intelligente des Stocks',
        bulk_optimizer: 'Optimisation en Masse des Produits',
        app_store: 'Vitrine App Store',
        ai_studio: 'Studio de Produits IA',
        live_tracker: 'Suivi en Direct des Clients',
        personality: 'Analyse de Personnalité',
        customer_match: 'Correspondance Client',
        product_optimizer: 'Optimisation de Produits',
        smart_marketing: 'Marketing Intelligent',
        predictive: 'IA Prédictive',
        dashboard: 'Tableau de Bord',
        analytics: 'Analytiques',
        customers: 'Clients',
        products: 'Produits',
        growth: 'Centre de Croissance'
      },
      dashboard: {
        title: 'Tableau de Bord Analytique IA',
        welcome: 'Bon retour',
        total_revenue: 'Revenus Totaux',
        total_orders: 'Commandes Totales',
        total_customers: 'Clients Totaux',
        conversion_rate: 'Taux de Conversion',
        ai_active: 'IA Active',
        ai_insights_ready: 'Insights IA Prêts',
        performance_summary: 'Résumé des Performances'
      },
      bulk_optimizer: {
        title: 'Optimisation en Masse des Produits',
        description: 'Optimisez vos collections ou produits sélectionnés en une fois avec IA',
        collection_selection: 'Sélection de Collection',
        optimization_mode: 'Mode d\'Optimisation',
        smart_optimization: 'Optimisation Intelligente',
        smart_description: 'L\'IA sélectionne la meilleure optimisation pour chaque produit',
        custom_optimization: 'Optimisation Personnalisée',
        custom_description: 'Choisissez votre propre modèle d\'optimisation',
        product_selection: 'Sélection de Produits',
        select_all: 'Tout Sélectionner',
        clear: 'Effacer',
        current_seo_score: 'Score SEO',
        conversion_rate: 'Conversion',
        price: 'Prix',
        very_high: 'Très Élevé',
        high: 'Élevé',
        medium: 'Moyen',
        low: 'Faible',
        start_optimization: 'Commencer l\'Optimisation en Masse',
        optimization_results: 'Résultats d\'Optimisation',
        before: 'Avant',
        after: 'Après',
        seo_improvement: 'Amélioration SEO',
        conversion_improvement: 'Augmentation de Conversion',
        expected_revenue: 'Revenus Attendus',
        optimization_impact: 'Impact de l\'Optimisation en Masse',
        average_seo_increase: 'Augmentation SEO Moyenne',
        conversion_improvement_rate: 'Amélioration de Conversion',
        monthly_revenue_increase: 'Augmentation des Revenus Mensuels',
        total_time: 'Temps Total'
      },
      inventory: {
        title: 'Gestion Intelligente des Stocks',
        description: 'Optimisation prédictive des stocks alimentée par IA',
        total_products: 'Produits Totaux',
        critical_stock: 'Stock Critique',
        stock_value: 'Valeur du Stock',
        turnover_rate: 'Taux de Rotation',
        ai_recommendations: 'Recommandations IA pour les Stocks',
        stock_status: 'Statut du Stock',
        current_stock: 'Stock Actuel',
        status: 'Statut',
        velocity: 'Vélocité',
        depletion: 'Épuisement',
        recommendation: 'Recommandation',
        action: 'Action',
        impact: 'Impact',
        critical: 'Critique',
        low: 'Faible',
        excess: 'Excès',
        optimal: 'Optimal',
        fast: 'Rapide',
        medium: 'Moyen',
        slow: 'Lent',
        high: 'Élevé',
        place_order: 'Passer Commande',
        monitor: 'Surveiller',
        demand_forecast: 'Prévision de Demande',
        seasonal_trends: 'Tendances Saisonnières',
        supplier_performance: 'Performance des Fournisseurs',
        reliability: 'Fiabilité',
        delivery_time: 'Temps de Livraison',
        quality: 'Qualité',
        cost: 'Coût',
        product_count: 'Nombre de Produits',
        days: 'jours',
        per_day: 'jour',
        pieces: 'pièces',
        actual: 'Réel',
        predicted: 'Prédit',
        performance_summary: 'Résumé des Performances d\'Inventaire',
        efficiency_improvement: 'Amélioration de l\'Efficacité',
        cost_reduction: 'Réduction des Coûts',
        availability_rate: 'Taux de Disponibilité du Stock',
        turnover_improvement: 'Taux de Rotation'
      },
      ai: {
        personality_analysis: 'Analyse de Personnalité du Magasin',
        product_optimization: 'Optimisation de Produits',
        customer_prediction: 'Prédiction du Comportement Client',
        marketing_automation: 'Automatisation Marketing',
        inventory_optimization: 'Optimisation des Stocks',
        confidence_score: 'confiance',
        expected_improvement: 'Amélioration Attendue',
        optimization_suggestions: 'Suggestions d\'Optimisation'
      },
      content: {
        multilingual_title: 'Conformité Multilingue et Stratégie de Marché',
        multilingual_description: 'Exigences linguistiques de Shopify App Store et pénétration du marché mondial',
        compliance_title: 'Statut de Conformité Shopify App Store',
        compliance_description: 'Vérification complète de conformité pour l\'approbation App Store',
        chatgpt_title: 'Test API ChatGPT - Optimisation Réelle de Produits',
        chatgpt_description: 'Optimisez les titres et descriptions de produits avec l\'API ChatGPT-4 réelle',
        ai_insights_title: 'Tableau de Bord Insights IA',
        ai_insights_description: 'Analyse IA en temps réel et recommandations intelligentes',
        advanced_customer_title: 'Analyse Avancée des Clients',
        advanced_customer_description: 'Analyse approfondie du comportement client avec IA',
        smart_inventory_title: 'Gestion Intelligente des Stocks',
        smart_inventory_description: 'Optimisation prédictive des stocks alimentée par IA',
        bulk_optimizer_title: 'Optimisation en Masse des Produits',
        bulk_optimizer_description: 'Optimisez vos collections ou produits sélectionnés en une fois avec IA',
        app_store_title: 'Fonctionnalités App Store',
        app_store_description: 'Vitrine des fonctionnalités d\'application Shopify prête pour la production',
        ai_studio_title: 'Studio de Produits IA',
        ai_studio_description: 'Amenez vos produits au niveau professionnel avec IA',
        live_tracker_title: 'Suivi en Direct des Clients',
        live_tracker_description: 'Surveillez vos clients en temps réel et optimisez',
        personality_title: 'Analyse de Personnalité du Magasin',
        personality_description: 'Découvrez l\'ADN unique de votre magasin avec IA',
        customer_match_title: 'Correspondance de Personnalité Client',
        customer_match_description: 'À quel point la personnalité de vos clients est-elle compatible avec votre magasin ?',
        product_optimizer_title: 'Studio d\'Optimisation de Produits IA',
        product_optimizer_description: 'Optimisez vos produits avec IA, augmentez vos ventes',
        smart_marketing_title: 'Assistant Marketing Intelligent',
        smart_marketing_description: 'Créez des campagnes marketing personnalisées avec IA',
        predictive_title: 'Analytique Prédictive',
        predictive_description: 'Prédisez les comportements clients à l\'avance avec IA',
        dashboard_title: 'Bon retour, Alex !',
        dashboard_description: 'Voici ce qui se passe dans votre magasin aujourd\'hui.',
        analytics_title: 'Aperçu Analytique',
        analytics_description: 'Plongez profondément dans les métriques de performance de votre magasin',
        customers_title: 'Insights Clients',
        customers_description: 'Comprenez et engagez avec votre base de clients',
        products_title: 'Performance des Produits',
        products_description: 'Suivez et optimisez votre catalogue de produits',
        growth_title: 'Centre de Croissance',
        growth_description: 'Recommandations alimentées par IA pour accélérer la croissance de votre entreprise'
      }
    };

    // Spanish
    this.translations.es = {
      common: {
        loading: 'Cargando...',
        save: 'Guardar',
        cancel: 'Cancelar',
        delete: 'Eliminar',
        edit: 'Editar',
        close: 'Cerrar',
        back: 'Atrás',
        next: 'Siguiente',
        previous: 'Anterior',
        search: 'Buscar',
        filter: 'Filtrar',
        export: 'Exportar',
        import: 'Importar',
        refresh: 'Actualizar',
        settings: 'Configuración',
        help: 'Ayuda',
        support: 'Soporte',
        apply: 'Aplicar',
        product: 'Producto',
        search_placeholder: 'Insights de IA, productos, clientes...',
        select_language: 'Seleccionar Idioma',
        more_languages_coming: '¡Más idiomas próximamente!',
        shopify_app_store: 'Shopify App Store',
        app_store_description: 'Esta aplicación está preparada para la venta en Shopify App Store',
        production_ready: 'Listo para Producción',
        multilingual_support: 'Soporte para 12 Idiomas',
        oauth_integration: 'Integración OAuth',
        gdpr_compliance: 'Cumplimiento GDPR',
        ai_features: 'Características de IA'
      },
      navigation: {
        multilingual_strategy: 'Estrategia Multilingüe',
        app_store_listing: 'Listado App Store (EN)',
        compliance: 'Cumplimiento App Store',
        chatgpt_test: 'Prueba API ChatGPT',
        ai_insights: 'Panel de Insights de IA',
        advanced_customer: 'Análisis Avanzado de Clientes',
        smart_inventory: 'Gestión Inteligente de Inventario',
        bulk_optimizer: 'Optimización Masiva de Productos',
        app_store: 'Escaparate App Store',
        ai_studio: 'Estudio de Productos IA',
        live_tracker: 'Seguimiento en Vivo de Clientes',
        personality: 'Análisis de Personalidad',
        customer_match: 'Coincidencia de Clientes',
        product_optimizer: 'Optimización de Productos',
        smart_marketing: 'Marketing Inteligente',
        predictive: 'IA Predictiva',
        dashboard: 'Panel de Control',
        analytics: 'Analíticas',
        customers: 'Clientes',
        products: 'Productos',
        growth: 'Centro de Crecimiento'
      },
      dashboard: {
        title: 'Panel de Análisis IA',
        welcome: 'Bienvenido de nuevo',
        total_revenue: 'Ingresos Totales',
        total_orders: 'Pedidos Totales',
        total_customers: 'Clientes Totales',
        conversion_rate: 'Tasa de Conversión',
        ai_active: 'IA Activa',
        ai_insights_ready: 'Insights de IA Listos',
        performance_summary: 'Resumen de Rendimiento'
      },
      bulk_optimizer: {
        title: 'Optimización Masiva de Productos',
        description: 'Optimiza tus colecciones o productos seleccionados de una vez con IA',
        collection_selection: 'Selección de Colección',
        optimization_mode: 'Modo de Optimización',
        smart_optimization: 'Optimización Inteligente',
        smart_description: 'La IA selecciona la mejor optimización para cada producto',
        custom_optimization: 'Optimización Personalizada',
        custom_description: 'Elige tu propia plantilla de optimización',
        product_selection: 'Selección de Productos',
        select_all: 'Seleccionar Todo',
        clear: 'Limpiar',
        current_seo_score: 'Puntuación SEO',
        conversion_rate: 'Conversión',
        price: 'Precio',
        very_high: 'Muy Alto',
        high: 'Alto',
        medium: 'Medio',
        low: 'Bajo',
        start_optimization: 'Iniciar Optimización Masiva',
        optimization_results: 'Resultados de Optimización',
        before: 'Antes',
        after: 'Después',
        seo_improvement: 'Mejora SEO',
        conversion_improvement: 'Aumento de Conversión',
        expected_revenue: 'Ingresos Esperados',
        optimization_impact: 'Impacto de Optimización Masiva',
        average_seo_increase: 'Aumento SEO Promedio',
        conversion_improvement_rate: 'Mejora de Conversión',
        monthly_revenue_increase: 'Aumento de Ingresos Mensuales',
        total_time: 'Tiempo Total'
      },
      inventory: {
        title: 'Gestión Inteligente de Inventario',
        description: 'Optimización predictiva de inventario impulsada por IA',
        total_products: 'Productos Totales',
        critical_stock: 'Stock Crítico',
        stock_value: 'Valor del Stock',
        turnover_rate: 'Tasa de Rotación',
        ai_recommendations: 'Recomendaciones IA de Stock',
        stock_status: 'Estado del Stock',
        current_stock: 'Stock Actual',
        status: 'Estado',
        velocity: 'Velocidad',
        depletion: 'Agotamiento',
        recommendation: 'Recomendación',
        action: 'Acción',
        impact: 'Impacto',
        critical: 'Crítico',
        low: 'Bajo',
        excess: 'Exceso',
        optimal: 'Óptimo',
        fast: 'Rápido',
        medium: 'Medio',
        slow: 'Lento',
        high: 'Alto',
        place_order: 'Realizar Pedido',
        monitor: 'Monitorear',
        demand_forecast: 'Pronóstico de Demanda',
        seasonal_trends: 'Tendencias Estacionales',
        supplier_performance: 'Rendimiento de Proveedores',
        reliability: 'Confiabilidad',
        delivery_time: 'Tiempo de Entrega',
        quality: 'Calidad',
        cost: 'Costo',
        product_count: 'Cantidad de Productos',
        days: 'días',
        per_day: 'día',
        pieces: 'piezas',
        actual: 'Real',
        predicted: 'Predicho',
        performance_summary: 'Resumen de Rendimiento de Inventario',
        efficiency_improvement: 'Mejora de Eficiencia',
        cost_reduction: 'Reducción de Costos',
        availability_rate: 'Tasa de Disponibilidad de Stock',
        turnover_improvement: 'Tasa de Rotación'
      },
      ai: {
        personality_analysis: 'Análisis de Personalidad de Tienda',
        product_optimization: 'Optimización de Productos',
        customer_prediction: 'Predicción de Comportamiento del Cliente',
        marketing_automation: 'Automatización de Marketing',
        inventory_optimization: 'Optimización de Inventario',
        confidence_score: 'confianza',
        expected_improvement: 'Mejora Esperada',
        optimization_suggestions: 'Sugerencias de Optimización'
      },
      content: {
        multilingual_title: 'Cumplimiento Multilingüe y Estrategia de Mercado',
        multilingual_description: 'Requisitos de idioma de Shopify App Store y penetración del mercado global',
        compliance_title: 'Estado de Cumplimiento de Shopify App Store',
        compliance_description: 'Verificación integral de cumplimiento para aprobación de App Store',
        chatgpt_title: 'Prueba API ChatGPT - Optimización Real de Productos',
        chatgpt_description: 'Optimiza títulos y descripciones de productos con API ChatGPT-4 real',
        ai_insights_title: 'Panel de Insights de IA',
        ai_insights_description: 'Análisis de IA en tiempo real y recomendaciones inteligentes',
        advanced_customer_title: 'Análisis Avanzado de Clientes',
        advanced_customer_description: 'Análisis profundo del comportamiento del cliente con IA',
        smart_inventory_title: 'Gestión Inteligente de Inventario',
        smart_inventory_description: 'Optimización predictiva de inventario impulsada por IA',
        bulk_optimizer_title: 'Optimización Masiva de Productos',
        bulk_optimizer_description: 'Optimiza tus colecciones o productos seleccionados de una vez con IA',
        app_store_title: 'Características de App Store',
        app_store_description: 'Escaparate de características de aplicación Shopify listas para producción',
        ai_studio_title: 'Estudio de Productos IA',
        ai_studio_description: 'Lleva tus productos al nivel profesional con IA',
        live_tracker_title: 'Seguimiento en Vivo de Clientes',
        live_tracker_description: 'Monitorea tus clientes en tiempo real y optimiza',
        personality_title: 'Análisis de Personalidad de Tienda',
        personality_description: 'Descubre el ADN único de tu tienda con IA',
        customer_match_title: 'Coincidencia de Personalidad del Cliente',
        customer_match_description: '¿Qué tan compatible es la personalidad de tus clientes con tu tienda?',
        product_optimizer_title: 'Estudio de Optimización de Productos IA',
        product_optimizer_description: 'Optimiza tus productos con IA, aumenta tus ventas',
        smart_marketing_title: 'Asistente de Marketing Inteligente',
        smart_marketing_description: 'Crea campañas de marketing personalizadas con IA',
        predictive_title: 'Analítica Predictiva',
        predictive_description: 'Predice comportamientos de clientes por adelantado con IA',
        dashboard_title: '¡Bienvenido de nuevo, Alex!',
        dashboard_description: 'Esto es lo que está pasando en tu tienda hoy.',
        analytics_title: 'Resumen de Analíticas',
        analytics_description: 'Sumérgete profundamente en las métricas de rendimiento de tu tienda',
        customers_title: 'Insights de Clientes',
        customers_description: 'Entiende e interactúa con tu base de clientes',
        products_title: 'Rendimiento de Productos',
        products_description: 'Rastrea y optimiza tu catálogo de productos',
        growth_title: 'Centro de Crecimiento',
        growth_description: 'Recomendaciones impulsadas por IA para acelerar el crecimiento de tu negocio'
      }
    };

    // German
    this.translations.de = {
      navigation: {
        multilingual_strategy: 'Mehrsprachige Strategie',
        app_store_listing: 'App Store Listing (EN)',
        compliance: 'App Store Konformität',
        chatgpt_test: 'ChatGPT API Test',
        ai_insights: 'KI-Einblicke Dashboard',
        advanced_customer: 'Erweiterte Kundenanalyse',
        smart_inventory: 'Intelligente Bestandsverwaltung',
        bulk_optimizer: 'Massen-Produktoptimierung',
        app_store: 'App Store Schaufenster',
        ai_studio: 'KI-Produktstudio',
        live_tracker: 'Live-Kundenverfolgung',
        personality: 'Persönlichkeitsanalyse',
        customer_match: 'Kundenabgleich',
        product_optimizer: 'Produktoptimierung',
        smart_marketing: 'Intelligentes Marketing',
        predictive: 'Vorhersage-KI',
        dashboard: 'Dashboard',
        analytics: 'Analytik',
        customers: 'Kunden',
        products: 'Produkte',
        growth: 'Wachstumszentrum'
      },
      content: {
        multilingual_title: 'Mehrsprachige Konformität und Marktstrategie',
        multilingual_description: 'Shopify App Store Sprachanforderungen und globale Marktdurchdringung',
        compliance_title: 'Shopify App Store Konformitätsstatus',
        compliance_description: 'Umfassende Konformitätsprüfung für App Store Genehmigung',
        chatgpt_title: 'ChatGPT API Test - Echte Produktoptimierung',
        chatgpt_description: 'Optimieren Sie Produkttitel und -beschreibungen mit echter ChatGPT-4 API',
        ai_insights_title: 'KI-Einblicke Dashboard',
        ai_insights_description: 'Echtzeit-KI-Analyse und intelligente Empfehlungen',
        advanced_customer_title: 'Erweiterte Kundenanalyse',
        advanced_customer_description: 'Tiefgreifende Kundenverhaltensanalyse mit KI',
        smart_inventory_title: 'Intelligente Bestandsverwaltung',
        smart_inventory_description: 'KI-gestützte prädiktive Bestandsoptimierung'
      }
    };

    // Italian
    this.translations.it = {
      navigation: {
        multilingual_strategy: 'Strategia Multilingue',
        app_store_listing: 'Elenco App Store (EN)',
        compliance: 'Conformità App Store',
        chatgpt_test: 'Test API ChatGPT',
        ai_insights: 'Dashboard Insights IA',
        advanced_customer: 'Analisi Avanzata Clienti',
        smart_inventory: 'Gestione Intelligente Inventario',
        bulk_optimizer: 'Ottimizzazione Prodotti in Massa',
        app_store: 'Vetrina App Store',
        ai_studio: 'Studio Prodotti IA',
        live_tracker: 'Tracciamento Clienti Live',
        personality: 'Analisi Personalità',
        customer_match: 'Corrispondenza Cliente',
        product_optimizer: 'Ottimizzazione Prodotti',
        smart_marketing: 'Marketing Intelligente',
        predictive: 'IA Predittiva',
        dashboard: 'Dashboard',
        analytics: 'Analytics',
        customers: 'Clienti',
        products: 'Prodotti',
        growth: 'Centro Crescita'
      },
      content: {
        multilingual_title: 'Conformità Multilingue e Strategia di Mercato',
        multilingual_description: 'Requisiti linguistici Shopify App Store e penetrazione del mercato globale',
        compliance_title: 'Stato di Conformità Shopify App Store',
        compliance_description: 'Verifica completa di conformità per approvazione App Store',
        chatgpt_title: 'Test API ChatGPT - Ottimizzazione Reale Prodotti',
        chatgpt_description: 'Ottimizza titoli e descrizioni prodotti con API ChatGPT-4 reale',
        ai_insights_title: 'Dashboard Insights IA',
        ai_insights_description: 'Analisi IA in tempo reale e raccomandazioni intelligenti'
      }
    };

    // Portuguese
    this.translations.pt = {
      navigation: {
        multilingual_strategy: 'Estratégia Multilíngue',
        app_store_listing: 'Listagem App Store (EN)',
        compliance: 'Conformidade App Store',
        chatgpt_test: 'Teste API ChatGPT',
        ai_insights: 'Dashboard Insights IA',
        advanced_customer: 'Análise Avançada de Clientes',
        smart_inventory: 'Gestão Inteligente de Inventário',
        bulk_optimizer: 'Otimização em Massa de Produtos',
        app_store: 'Vitrine App Store',
        ai_studio: 'Estúdio de Produtos IA',
        live_tracker: 'Rastreamento ao Vivo de Clientes',
        personality: 'Análise de Personalidade',
        customer_match: 'Correspondência de Cliente',
        product_optimizer: 'Otimização de Produtos',
        smart_marketing: 'Marketing Inteligente',
        predictive: 'IA Preditiva',
        dashboard: 'Dashboard',
        analytics: 'Analytics',
        customers: 'Clientes',
        products: 'Produtos',
        growth: 'Centro de Crescimento'
      },
      content: {
        multilingual_title: 'Conformidade Multilíngue e Estratégia de Mercado',
        multilingual_description: 'Requisitos de idioma Shopify App Store e penetração do mercado global',
        compliance_title: 'Status de Conformidade Shopify App Store',
        compliance_description: 'Verificação abrangente de conformidade para aprovação App Store',
        chatgpt_title: 'Teste API ChatGPT - Otimização Real de Produtos',
        chatgpt_description: 'Otimize títulos e descrições de produtos com API ChatGPT-4 real'
      }
    };

    // Dutch
    this.translations.nl = {
      navigation: {
        multilingual_strategy: 'Meertalige Strategie',
        app_store_listing: 'App Store Vermelding (EN)',
        compliance: 'App Store Naleving',
        chatgpt_test: 'ChatGPT API Test',
        ai_insights: 'AI Inzichten Dashboard',
        advanced_customer: 'Geavanceerde Klantanalyse',
        smart_inventory: 'Intelligente Voorraadbeheer',
        bulk_optimizer: 'Bulk Productoptimalisatie',
        app_store: 'App Store Etalage',
        ai_studio: 'AI Productstudio',
        live_tracker: 'Live Klantvolging',
        personality: 'Persoonlijkheidsanalyse',
        customer_match: 'Klantovereenkomst',
        product_optimizer: 'Productoptimalisatie',
        smart_marketing: 'Slimme Marketing',
        predictive: 'Voorspellende AI',
        dashboard: 'Dashboard',
        analytics: 'Analytics',
        customers: 'Klanten',
        products: 'Producten',
        growth: 'Groeicentrum'
      },
      content: {
        multilingual_title: 'Meertalige Naleving en Marktstrategie',
        multilingual_description: 'Shopify App Store taalvereisten en wereldwijde marktpenetratie'
      }
    };

    // Japanese
    this.translations.ja = {
      navigation: {
        multilingual_strategy: '多言語戦略',
        app_store_listing: 'App Store リスト (EN)',
        compliance: 'App Store コンプライアンス',
        chatgpt_test: 'ChatGPT API テスト',
        ai_insights: 'AI インサイト ダッシュボード',
        advanced_customer: '高度な顧客分析',
        smart_inventory: 'スマート在庫管理',
        bulk_optimizer: '一括商品最適化',
        app_store: 'App Store ショーケース',
        ai_studio: 'AI 商品スタジオ',
        live_tracker: 'ライブ顧客追跡',
        personality: '性格分析',
        customer_match: '顧客マッチング',
        product_optimizer: '商品最適化',
        smart_marketing: 'スマートマーケティング',
        predictive: '予測AI',
        dashboard: 'ダッシュボード',
        analytics: 'アナリティクス',
        customers: '顧客',
        products: '商品',
        growth: '成長ハブ'
      },
      content: {
        multilingual_title: '多言語コンプライアンスと市場戦略',
        multilingual_description: 'Shopify App Store言語要件とグローバル市場浸透'
      }
    };

    // Korean
    this.translations.ko = {
      navigation: {
        multilingual_strategy: '다국어 전략',
        app_store_listing: 'App Store 목록 (EN)',
        compliance: 'App Store 규정 준수',
        chatgpt_test: 'ChatGPT API 테스트',
        ai_insights: 'AI 인사이트 대시보드',
        advanced_customer: '고급 고객 분석',
        smart_inventory: '스마트 재고 관리',
        bulk_optimizer: '대량 제품 최적화',
        app_store: 'App Store 쇼케이스',
        ai_studio: 'AI 제품 스튜디오',
        live_tracker: '실시간 고객 추적',
        personality: '성격 분석',
        customer_match: '고객 매칭',
        product_optimizer: '제품 최적화',
        smart_marketing: '스마트 마케팅',
        predictive: '예측 AI',
        dashboard: '대시보드',
        analytics: '분석',
        customers: '고객',
        products: '제품',
        growth: '성장 허브'
      },
      content: {
        multilingual_title: '다국어 규정 준수 및 시장 전략',
        multilingual_description: 'Shopify App Store 언어 요구사항 및 글로벌 시장 침투'
      }
    };

    // Chinese
    this.translations.zh = {
      navigation: {
        multilingual_strategy: '多语言策略',
        app_store_listing: 'App Store 列表 (EN)',
        compliance: 'App Store 合规性',
        chatgpt_test: 'ChatGPT API 测试',
        ai_insights: 'AI 洞察仪表板',
        advanced_customer: '高级客户分析',
        smart_inventory: '智能库存管理',
        bulk_optimizer: '批量产品优化',
        app_store: 'App Store 展示',
        ai_studio: 'AI 产品工作室',
        live_tracker: '实时客户跟踪',
        personality: '个性分析',
        customer_match: '客户匹配',
        product_optimizer: '产品优化',
        smart_marketing: '智能营销',
        predictive: '预测AI',
        dashboard: '仪表板',
        analytics: '分析',
        customers: '客户',
        products: '产品',
        growth: '增长中心'
      },
      content: {
        multilingual_title: '多语言合规性和市场策略',
        multilingual_description: 'Shopify App Store语言要求和全球市场渗透'
      }
    };

    // Arabic
    this.translations.ar = {
      navigation: {
        multilingual_strategy: 'الاستراتيجية متعددة اللغات',
        app_store_listing: 'قائمة App Store (EN)',
        compliance: 'امتثال App Store',
        chatgpt_test: 'اختبار ChatGPT API',
        ai_insights: 'لوحة معلومات رؤى الذكاء الاصطناعي',
        advanced_customer: 'تحليل العملاء المتقدم',
        smart_inventory: 'إدارة المخزون الذكية',
        bulk_optimizer: 'تحسين المنتجات بالجملة',
        app_store: 'واجهة App Store',
        ai_studio: 'استوديو منتجات الذكاء الاصطناعي',
        live_tracker: 'تتبع العملاء المباشر',
        personality: 'تحليل الشخصية',
        customer_match: 'مطابقة العملاء',
        product_optimizer: 'تحسين المنتجات',
        smart_marketing: 'التسويق الذكي',
        predictive: 'الذكاء الاصطناعي التنبؤي',
        dashboard: 'لوحة التحكم',
        analytics: 'التحليلات',
        customers: 'العملاء',
        products: 'المنتجات',
        growth: 'مركز النمو'
      },
      content: {
        multilingual_title: 'الامتثال متعدد اللغات واستراتيجية السوق',
        multilingual_description: 'متطلبات لغة Shopify App Store واختراق السوق العالمي'
      }
    };
  }

  // Detect user language from browser/Shopify
  private detectUserLanguage(): void {
    // Try to get language from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('locale') || urlParams.get('lang');
    
    if (urlLang && this.isLanguageSupported(urlLang)) {
      this.setLanguage(urlLang);
      return;
    }

    // Try to get from localStorage
    const savedLang = localStorage.getItem('ai_analytics_language');
    if (savedLang && this.isLanguageSupported(savedLang)) {
      this.setLanguage(savedLang);
      return;
    }

    // Try to get from browser
    const browserLang = navigator.language.split('-')[0];
    if (this.isLanguageSupported(browserLang)) {
      this.setLanguage(browserLang);
      return;
    }

    // Default to English
    this.setLanguage('en');
  }

  // Check if language is supported
  private isLanguageSupported(langCode: string): boolean {
    return SUPPORTED_LANGUAGES.some(lang => lang.code === langCode && lang.supported);
  }

  // Add language change listener
  addLanguageChangeListener(callback: (lang: string) => void): void {
    this.languageChangeListeners.push(callback);
  }

  // Remove language change listener
  removeLanguageChangeListener(callback: (lang: string) => void): void {
    this.languageChangeListeners = this.languageChangeListeners.filter(cb => cb !== callback);
  }

  // Notify language change listeners
  private notifyLanguageChange(langCode: string): void {
    this.languageChangeListeners.forEach(callback => callback(langCode));
  }

  // Set current language
  setLanguage(langCode: string): void {
    if (this.isLanguageSupported(langCode)) {
      this.currentLanguage = langCode;
      localStorage.setItem('ai_analytics_language', langCode);
      
      // Update document direction for RTL languages
      const language = SUPPORTED_LANGUAGES.find(lang => lang.code === langCode);
      if (language?.rtl) {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }

      // Notify listeners
      this.notifyLanguageChange(langCode);
    }
  }

  // Get current language
  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  // Get supported languages
  getSupportedLanguages(): LanguageConfig[] {
    return SUPPORTED_LANGUAGES.filter(lang => lang.supported);
  }

  // Translate text - FIX: Remove fallback from params before processing
  t(key: string, params?: { [key: string]: string | number, fallback?: string }): string {
    const fallback = params?.fallback;
    
    // Remove fallback from params to avoid using it as a replacement parameter
    const cleanParams = params ? { ...params } : {};
    if (cleanParams.fallback) {
      delete cleanParams.fallback;
    }

    const translation = this.getTranslation(key, this.currentLanguage) || 
                       this.getTranslation(key, this.fallbackLanguage) || 
                       fallback || 
                       key;

    // Replace parameters
    if (cleanParams && Object.keys(cleanParams).length > 0) {
      return Object.keys(cleanParams).reduce((text, param) => {
        return text.replace(new RegExp(`{{${param}}}`, 'g'), String(cleanParams[param]));
      }, translation);
    }

    return translation;
  }

  // Get translation by key
  private getTranslation(key: string, langCode: string): string | null {
    const keys = key.split('.');
    let current: any = this.translations[langCode];

    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return null;
      }
    }

    return typeof current === 'string' ? current : null;
  }

  // Format number based on locale
  formatNumber(number: number, options?: Intl.NumberFormatOptions): string {
    const locale = this.getLocaleFromLanguage(this.currentLanguage);
    return new Intl.NumberFormat(locale, options).format(number);
  }

  // Format currency based on locale
  formatCurrency(amount: number, currency: string = 'USD'): string {
    const locale = this.getLocaleFromLanguage(this.currentLanguage);
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  // Format date based on locale
  formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
    const locale = this.getLocaleFromLanguage(this.currentLanguage);
    return new Intl.DateTimeFormat(locale, options).format(date);
  }

  // Get locale from language code
  private getLocaleFromLanguage(langCode: string): string {
    const localeMap: { [key: string]: string } = {
      'en': 'en-US',
      'tr': 'tr-TR',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'de': 'de-DE',
      'it': 'it-IT',
      'pt': 'pt-PT',
      'nl': 'nl-NL',
      'ja': 'ja-JP',
      'ko': 'ko-KR',
      'zh': 'zh-CN',
      'ar': 'ar-SA'
    };

    return localeMap[langCode] || 'en-US';
  }

  // Get language direction
  getLanguageDirection(): 'ltr' | 'rtl' {
    const language = SUPPORTED_LANGUAGES.find(lang => lang.code === this.currentLanguage);
    return language?.rtl ? 'rtl' : 'ltr';
  }

  // Get language info
  getLanguageInfo(langCode?: string): LanguageConfig | null {
    const code = langCode || this.currentLanguage;
    return SUPPORTED_LANGUAGES.find(lang => lang.code === code) || null;
  }
}

export const i18n = new InternationalizationService();
export default i18n;