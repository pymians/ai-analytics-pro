// Shopify API Configuration
const SHOPIFY_CONFIG = {
  shop: import.meta.env.VITE_SHOPIFY_SHOP || 'digimoli-ai-analytics-test-store.myshopify.com',
  accessToken: import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN || '',
  apiVersion: '2023-10'
};

const DEV_MODE = import.meta.env.VITE_DEV_MODE === 'true';

// Mock data for development
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Premium Wireless Headphones',
    handle: 'premium-wireless-headphones',
    body_html: '<p>High-quality wireless headphones with noise cancellation technology.</p>',
    vendor: 'TechAudio',
    product_type: 'Electronics',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-20T15:30:00Z',
    published_at: '2024-01-15T10:00:00Z',
    template_suffix: null,
    status: 'active',
    published_scope: 'web',
    tags: 'wireless, headphones, premium, noise-cancellation',
    admin_graphql_api_id: 'gid://shopify/Product/1',
    images: [
      {
        id: 101,
        product_id: 1,
        position: 1,
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-15T10:00:00Z',
        alt: 'Premium Wireless Headphones',
        width: 800,
        height: 600,
        src: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
        variant_ids: [],
        admin_graphql_api_id: 'gid://shopify/ProductImage/101'
      }
    ],
    variants: [
      {
        id: 201,
        product_id: 1,
        title: 'Default Title',
        price: '99.99',
        sku: 'PWH-001',
        position: 1,
        inventory_policy: 'deny',
        compare_at_price: '129.99',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        option1: 'Default Title',
        option2: null,
        option3: null,
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-20T15:30:00Z',
        taxable: true,
        barcode: '1234567890123',
        grams: 250,
        image_id: 101,
        weight: 0.25,
        weight_unit: 'kg',
        inventory_item_id: 301,
        inventory_quantity: 25,
        old_inventory_quantity: 25,
        requires_shipping: true,
        admin_graphql_api_id: 'gid://shopify/ProductVariant/201'
      }
    ],
    options: [
      {
        id: 401,
        product_id: 1,
        name: 'Title',
        position: 1,
        values: ['Default Title']
      }
    ]
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    handle: 'smart-fitness-watch',
    body_html: '<p>Advanced fitness tracking with heart rate monitoring and GPS.</p>',
    vendor: 'FitTech',
    product_type: 'Wearables',
    created_at: '2024-01-10T09:00:00Z',
    updated_at: '2024-01-18T14:20:00Z',
    published_at: '2024-01-10T09:00:00Z',
    template_suffix: null,
    status: 'active',
    published_scope: 'web',
    tags: 'fitness, watch, smart, health, tracking',
    admin_graphql_api_id: 'gid://shopify/Product/2',
    images: [
      {
        id: 102,
        product_id: 2,
        position: 1,
        created_at: '2024-01-10T09:00:00Z',
        updated_at: '2024-01-10T09:00:00Z',
        alt: 'Smart Fitness Watch',
        width: 800,
        height: 600,
        src: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
        variant_ids: [],
        admin_graphql_api_id: 'gid://shopify/ProductImage/102'
      }
    ],
    variants: [
      {
        id: 202,
        product_id: 2,
        title: 'Black / 42mm',
        price: '199.99',
        sku: 'SFW-001-BLK-42',
        position: 1,
        inventory_policy: 'deny',
        compare_at_price: '249.99',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        option1: 'Black',
        option2: '42mm',
        option3: null,
        created_at: '2024-01-10T09:00:00Z',
        updated_at: '2024-01-18T14:20:00Z',
        taxable: true,
        barcode: '1234567890124',
        grams: 45,
        image_id: 102,
        weight: 0.045,
        weight_unit: 'kg',
        inventory_item_id: 302,
        inventory_quantity: 15,
        old_inventory_quantity: 15,
        requires_shipping: true,
        admin_graphql_api_id: 'gid://shopify/ProductVariant/202'
      }
    ],
    options: [
      {
        id: 402,
        product_id: 2,
        name: 'Color',
        position: 1,
        values: ['Black', 'White', 'Silver']
      },
      {
        id: 403,
        product_id: 2,
        name: 'Size',
        position: 2,
        values: ['38mm', '42mm', '44mm']
      }
    ]
  },
  {
    id: 3,
    title: 'Bluetooth Speaker Pro',
    handle: 'bluetooth-speaker-pro',
    body_html: '<p>Portable Bluetooth speaker with 360-degree sound and waterproof design.</p>',
    vendor: 'SoundWave',
    product_type: 'Audio',
    created_at: '2024-01-05T11:00:00Z',
    updated_at: '2024-01-22T16:45:00Z',
    published_at: '2024-01-05T11:00:00Z',
    template_suffix: null,
    status: 'active',
    published_scope: 'web',
    tags: 'bluetooth, speaker, portable, waterproof, wireless',
    admin_graphql_api_id: 'gid://shopify/Product/3',
    images: [
      {
        id: 103,
        product_id: 3,
        position: 1,
        created_at: '2024-01-05T11:00:00Z',
        updated_at: '2024-01-05T11:00:00Z',
        alt: 'Bluetooth Speaker Pro',
        width: 800,
        height: 600,
        src: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
        variant_ids: [],
        admin_graphql_api_id: 'gid://shopify/ProductImage/103'
      }
    ],
    variants: [
      {
        id: 203,
        product_id: 3,
        title: 'Default Title',
        price: '79.99',
        sku: 'BSP-001',
        position: 1,
        inventory_policy: 'deny',
        compare_at_price: '99.99',
        fulfillment_service: 'manual',
        inventory_management: 'shopify',
        option1: 'Default Title',
        option2: null,
        option3: null,
        created_at: '2024-01-05T11:00:00Z',
        updated_at: '2024-01-22T16:45:00Z',
        taxable: true,
        barcode: '1234567890125',
        grams: 680,
        image_id: 103,
        weight: 0.68,
        weight_unit: 'kg',
        inventory_item_id: 303,
        inventory_quantity: 30,
        old_inventory_quantity: 30,
        requires_shipping: true,
        admin_graphql_api_id: 'gid://shopify/ProductVariant/203'
      }
    ],
    options: [
      {
        id: 404,
        product_id: 3,
        name: 'Title',
        position: 1,
        values: ['Default Title']
      }
    ]
  }
];

const MOCK_ORDERS = [
  {
    id: 1001,
    admin_graphql_api_id: 'gid://shopify/Order/1001',
    app_id: null,
    browser_ip: '192.168.1.1',
    buyer_accepts_marketing: true,
    cancel_reason: null,
    cancelled_at: null,
    cart_token: 'abc123',
    checkout_id: 2001,
    checkout_token: 'def456',
    closed_at: null,
    confirmed: true,
    contact_email: 'sarah@example.com',
    created_at: '2024-01-20T14:30:00Z',
    currency: 'USD',
    current_subtotal_price: '156.99',
    current_subtotal_price_set: {
      shop_money: { amount: '156.99', currency_code: 'USD' },
      presentment_money: { amount: '156.99', currency_code: 'USD' }
    },
    current_total_discounts: '0.00',
    current_total_discounts_set: {
      shop_money: { amount: '0.00', currency_code: 'USD' },
      presentment_money: { amount: '0.00', currency_code: 'USD' }
    },
    current_total_duties_set: null,
    current_total_price: '156.99',
    current_total_price_set: {
      shop_money: { amount: '156.99', currency_code: 'USD' },
      presentment_money: { amount: '156.99', currency_code: 'USD' }
    },
    current_total_tax: '0.00',
    current_total_tax_set: {
      shop_money: { amount: '0.00', currency_code: 'USD' },
      presentment_money: { amount: '0.00', currency_code: 'USD' }
    },
    customer_locale: 'en',
    device_id: null,
    discount_codes: [],
    email: 'sarah@example.com',
    estimated_taxes: false,
    financial_status: 'paid',
    fulfillment_status: 'fulfilled',
    gateway: 'shopify_payments',
    landing_site: '/',
    landing_site_ref: null,
    location_id: null,
    name: '#1001',
    note: null,
    note_attributes: [],
    number: 1,
    order_number: 1001,
    order_status_url: 'https://digimoli-ai-analytics-test-store.myshopify.com/orders/abc123',
    original_total_duties_set: null,
    payment_gateway_names: ['shopify_payments'],
    phone: null,
    presentment_currency: 'USD',
    processed_at: '2024-01-20T14:30:00Z',
    processing_method: 'direct',
    reference: null,
    referring_site: '',
    source_identifier: null,
    source_name: 'web',
    source_url: null,
    subtotal_price: '156.99',
    subtotal_price_set: {
      shop_money: { amount: '156.99', currency_code: 'USD' },
      presentment_money: { amount: '156.99', currency_code: 'USD' }
    },
    tags: '',
    tax_lines: [],
    taxes_included: false,
    test: false,
    token: 'abc123def456',
    total_discounts: '0.00',
    total_discounts_set: {
      shop_money: { amount: '0.00', currency_code: 'USD' },
      presentment_money: { amount: '0.00', currency_code: 'USD' }
    },
    total_line_items_price: '156.99',
    total_line_items_price_set: {
      shop_money: { amount: '156.99', currency_code: 'USD' },
      presentment_money: { amount: '156.99', currency_code: 'USD' }
    },
    total_outstanding: '0.00',
    total_price: '156.99',
    total_price_set: {
      shop_money: { amount: '156.99', currency_code: 'USD' },
      presentment_money: { amount: '156.99', currency_code: 'USD' }
    },
    total_price_usd: '156.99',
    total_shipping_price_set: {
      shop_money: { amount: '0.00', currency_code: 'USD' },
      presentment_money: { amount: '0.00', currency_code: 'USD' }
    },
    total_tax: '0.00',
    total_tax_set: {
      shop_money: { amount: '0.00', currency_code: 'USD' },
      presentment_money: { amount: '0.00', currency_code: 'USD' }
    },
    total_tip_received: '0.00',
    total_weight: 250,
    updated_at: '2024-01-20T15:00:00Z',
    user_id: null,
    customer: {
      id: 501,
      email: 'sarah@example.com',
      accepts_marketing: true,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-20T14:30:00Z',
      first_name: 'Sarah',
      last_name: 'Johnson',
      orders_count: 3,
      state: 'enabled',
      total_spent: '456.97',
      last_order_id: 1001,
      note: null,
      verified_email: true,
      multipass_identifier: null,
      tax_exempt: false,
      phone: '+1234567890',
      tags: 'VIP',
      last_order_name: '#1001',
      currency: 'USD',
      accepts_marketing_updated_at: '2024-01-15T10:00:00Z',
      marketing_opt_in_level: 'single_opt_in',
      tax_exemptions: [],
      admin_graphql_api_id: 'gid://shopify/Customer/501'
    }
  },
  {
    id: 1002,
    admin_graphql_api_id: 'gid://shopify/Order/1002',
    order_number: 1002,
    name: '#1002',
    total_price: '89.50',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    financial_status: 'paid',
    fulfillment_status: 'pending',
    customer: {
      id: 502,
      first_name: 'Mike',
      last_name: 'Chen',
      email: 'mike@example.com'
    }
  },
  {
    id: 1003,
    admin_graphql_api_id: 'gid://shopify/Order/1003',
    order_number: 1003,
    name: '#1003',
    total_price: '234.75',
    created_at: new Date(Date.now() - 172800000).toISOString(),
    financial_status: 'paid',
    fulfillment_status: 'fulfilled',
    customer: {
      id: 503,
      first_name: 'Emma',
      last_name: 'Wilson',
      email: 'emma@example.com'
    }
  }
];

const MOCK_CUSTOMERS = [
  {
    id: 501,
    email: 'sarah@example.com',
    accepts_marketing: true,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-20T14:30:00Z',
    first_name: 'Sarah',
    last_name: 'Johnson',
    orders_count: 3,
    state: 'enabled',
    total_spent: '456.97',
    last_order_id: 1001,
    note: 'VIP Customer',
    verified_email: true,
    phone: '+1234567890',
    tags: 'VIP, Premium',
    currency: 'USD',
    admin_graphql_api_id: 'gid://shopify/Customer/501'
  },
  {
    id: 502,
    email: 'mike@example.com',
    accepts_marketing: false,
    created_at: '2024-01-10T09:00:00Z',
    updated_at: '2024-01-19T11:20:00Z',
    first_name: 'Mike',
    last_name: 'Chen',
    orders_count: 2,
    state: 'enabled',
    total_spent: '189.50',
    last_order_id: 1002,
    note: null,
    verified_email: true,
    phone: '+1234567891',
    tags: 'Regular',
    currency: 'USD',
    admin_graphql_api_id: 'gid://shopify/Customer/502'
  },
  {
    id: 503,
    email: 'emma@example.com',
    accepts_marketing: true,
    created_at: '2024-01-05T11:00:00Z',
    updated_at: '2024-01-18T16:45:00Z',
    first_name: 'Emma',
    last_name: 'Wilson',
    orders_count: 4,
    state: 'enabled',
    total_spent: '678.25',
    last_order_id: 1003,
    note: 'Frequent buyer',
    verified_email: true,
    phone: '+1234567892',
    tags: 'VIP, Loyal',
    currency: 'USD',
    admin_graphql_api_id: 'gid://shopify/Customer/503'
  }
];

// Helper function to create Shopify URL
const createShopifyUrl = (endpoint: string) => {
  const baseUrl = `https://${SHOPIFY_CONFIG.shop}/admin/api/${SHOPIFY_CONFIG.apiVersion}`;
  return `${baseUrl}${endpoint}`;
};

// Simple fetch wrapper for API calls
const apiRequest = async (url: string, options: RequestInit = {}) => {
  const headers = {
    'X-Shopify-Access-Token': SHOPIFY_CONFIG.accessToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers
  };

  const response = await fetch(url, {
    ...options,
    headers
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

// Product API Functions
export const shopifyProductApi = {
  getProducts: async (limit = 10) => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock product data (DEV_MODE or no access token)');
      return MOCK_PRODUCTS.slice(0, limit);
    }

    try {
      console.log('🔄 Fetching real products from:', SHOPIFY_CONFIG.shop);
      const url = createShopifyUrl(`/products.json?limit=${limit}`);
      const data = await apiRequest(url);
      console.log('✅ Real products fetched:', data.products.length);
      return data.products;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real products, using mock data:', error);
      return MOCK_PRODUCTS.slice(0, limit);
    }
  },

  getProduct: async (productId: string) => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock product data');
      return MOCK_PRODUCTS.find(p => p.id.toString() === productId) || MOCK_PRODUCTS[0];
    }

    try {
      const url = createShopifyUrl(`/products/${productId}.json`);
      const data = await apiRequest(url);
      return data.product;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real product, using mock data:', error);
      return MOCK_PRODUCTS.find(p => p.id.toString() === productId) || MOCK_PRODUCTS[0];
    }
  },

  updateProduct: async (productId: string, productData: any) => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Mock product update:', { productId, productData });
      return { ...MOCK_PRODUCTS[0], ...productData };
    }

    try {
      const url = createShopifyUrl(`/products/${productId}.json`);
      const data = await apiRequest(url, {
        method: 'PUT',
        body: JSON.stringify({ product: productData })
      });
      return data.product;
    } catch (error) {
      console.warn('⚠️ Failed to update real product, using mock response:', error);
      return { ...MOCK_PRODUCTS[0], ...productData };
    }
  }
};

// Order API Functions
export const shopifyOrderApi = {
  getOrders: async (limit = 10, status = 'any') => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock order data');
      return MOCK_ORDERS.slice(0, limit);
    }

    try {
      console.log('🔄 Fetching real orders from:', SHOPIFY_CONFIG.shop);
      const url = createShopifyUrl(`/orders.json?limit=${limit}&status=${status}`);
      const data = await apiRequest(url);
      console.log('✅ Real orders fetched:', data.orders.length);
      return data.orders;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real orders, using mock data:', error);
      return MOCK_ORDERS.slice(0, limit);
    }
  },

  getOrderAnalytics: async (dateRange = '30d') => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock order analytics');
      return MOCK_ORDERS;
    }

    try {
      const url = createShopifyUrl('/orders.json?limit=250');
      const data = await apiRequest(url);
      return data.orders;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real order analytics, using mock data:', error);
      return MOCK_ORDERS;
    }
  }
};

// Customer API Functions
export const shopifyCustomerApi = {
  getCustomers: async (limit = 10) => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock customer data');
      return MOCK_CUSTOMERS.slice(0, limit);
    }

    try {
      console.log('🔄 Fetching real customers from:', SHOPIFY_CONFIG.shop);
      const url = createShopifyUrl(`/customers.json?limit=${limit}`);
      const data = await apiRequest(url);
      console.log('✅ Real customers fetched:', data.customers.length);
      return data.customers;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real customers, using mock data:', error);
      return MOCK_CUSTOMERS.slice(0, limit);
    }
  },

  getCustomer: async (customerId: string) => {
    if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
      console.log('🔄 Using mock customer data');
      return MOCK_CUSTOMERS.find(c => c.id.toString() === customerId) || MOCK_CUSTOMERS[0];
    }

    try {
      const url = createShopifyUrl(`/customers/${customerId}.json`);
      const data = await apiRequest(url);
      return data.customer;
    } catch (error) {
      console.warn('⚠️ Failed to fetch real customer, using mock data:', error);
      return MOCK_CUSTOMERS.find(c => c.id.toString() === customerId) || MOCK_CUSTOMERS[0];
    }
  }
};

// Analytics API Functions
export const shopifyAnalyticsApi = {
  getShopAnalytics: async () => {
    try {
      console.log('📊 Calculating shop analytics...');
      console.log('🏪 Shop:', SHOPIFY_CONFIG.shop);
      console.log('🔑 Access Token configured:', !!SHOPIFY_CONFIG.accessToken);
      console.log('🧪 DEV_MODE:', DEV_MODE);

      let products, orders, customers;

      if (DEV_MODE || !SHOPIFY_CONFIG.accessToken) {
        console.log('🔄 Using mock data for analytics');
        products = MOCK_PRODUCTS;
        orders = MOCK_ORDERS;
        customers = MOCK_CUSTOMERS;
      } else {
        console.log('🔄 Fetching real data for analytics');
        try {
          [products, orders, customers] = await Promise.all([
            shopifyProductApi.getProducts(250),
            shopifyOrderApi.getOrders(250),
            shopifyCustomerApi.getCustomers(250)
          ]);
          console.log('✅ Real data fetched for analytics');
        } catch (error) {
          console.warn('⚠️ Failed to fetch real data, falling back to mock data:', error);
          products = MOCK_PRODUCTS;
          orders = MOCK_ORDERS;
          customers = MOCK_CUSTOMERS;
        }
      }

      // Calculate analytics from data
      const totalRevenue = orders.reduce((sum: number, order: any) => 
        sum + parseFloat(order.total_price || '0'), 0
      );

      const avgOrderValue = orders.length > 0 ? totalRevenue / orders.length : 0;
      
      const topProducts = products
        .sort((a: any, b: any) => {
          const aQty = a.variants?.[0]?.inventory_quantity || 0;
          const bQty = b.variants?.[0]?.inventory_quantity || 0;
          return bQty - aQty;
        })
        .slice(0, 5);

      const analytics = {
        totalProducts: products.length,
        totalOrders: orders.length,
        totalCustomers: customers.length,
        totalRevenue,
        avgOrderValue,
        topProducts,
        recentOrders: orders.slice(0, 10)
      };

      console.log('✅ Analytics calculated:', analytics);
      return analytics;

    } catch (error) {
      console.error('❌ Error in analytics calculation:', error);
      
      // Fallback analytics
      return {
        totalProducts: 3,
        totalOrders: 3,
        totalCustomers: 3,
        totalRevenue: 481.24,
        avgOrderValue: 160.41,
        topProducts: MOCK_PRODUCTS.slice(0, 3),
        recentOrders: MOCK_ORDERS.slice(0, 3)
      };
    }
  }
};

export default {
  products: shopifyProductApi,
  orders: shopifyOrderApi,
  customers: shopifyCustomerApi,
  analytics: shopifyAnalyticsApi
};