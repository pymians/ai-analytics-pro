import React from 'react';
import { Brain, Zap, Target, TrendingUp, Users, ShoppingBag, Eye, Palette } from 'lucide-react';

export const AppStoreListingEN: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Store Personality Analysis',
      description: 'Discover your store\'s unique DNA and connect better with your customers',
      benefits: ['Brand identity strengthening', 'Target audience analysis', 'Competitive advantage'],
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'Smart Product Optimization',
      description: 'AI-powered optimization of product titles, descriptions, and pricing',
      benefits: ['Up to 30% sales increase', 'SEO optimization', 'Conversion rate improvement'],
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Customer Behavior Prediction',
      description: 'Know which customers will buy and when',
      benefits: ['Proactive marketing', 'Reduced cart abandonment', 'Personalized experience'],
      color: 'green'
    },
    {
      icon: Eye,
      title: 'Live Customer Tracking',
      description: 'Monitor your customers in real-time and optimize instantly',
      benefits: ['Instant intervention', 'Conversion boosting', 'UX improvement'],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Smart Marketing Assistant',
      description: 'AI-powered personalized email, social media, and influencer campaigns',
      benefits: ['Up to 200% engagement increase', 'Automated content generation', 'ROI optimization'],
      color: 'pink'
    },
    {
      icon: Palette,
      title: 'AI Product Studio',
      description: 'Product photography, color psychology, and visual optimization',
      benefits: ['Professional appearance', 'Higher click rates', 'Brand consistency'],
      color: 'indigo'
    }
  ];

  const stats = [
    { label: 'Average Sales Increase', value: '47%', color: 'green' },
    { label: 'Conversion Rate Improvement', value: '68%', color: 'blue' },
    { label: 'Customer Satisfaction', value: '92%', color: 'purple' },
    { label: 'ROI Increase', value: '156%', color: 'orange' }
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
            Take your Shopify store to the next level with AI
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
            <h2 className="text-3xl font-bold text-gray-900">💎 Pricing Plans</h2>
          </div>
          <p className="text-gray-600">Suitable plans for stores of all sizes</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Starter',
              price: '$29',
              period: '/month',
              features: [
                'Basic AI analytics',
                '100 product optimizations',
                'Email support',
                'Basic reports'
              ],
              color: 'blue',
              popular: false
            },
            {
              name: 'Professional',
              price: '$79',
              period: '/month',
              features: [
                'Advanced AI features',
                'Unlimited optimizations',
                'Live customer tracking',
                'Priority support',
                'Custom reports'
              ],
              color: 'purple',
              popular: true
            },
            {
              name: 'Enterprise',
              price: '$199',
              period: '/month',
              features: [
                'All AI features',
                'Custom integrations',
                'Dedicated account manager',
                'API access',
                'Custom training'
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
                  Most Popular
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
                Get Started
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
          <h2 className="text-2xl font-bold text-gray-900">🚀 Installation Steps</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '1',
              title: 'Install the App',
              description: 'One-click install from Shopify App Store'
            },
            {
              step: '2',
              title: 'Grant Permissions',
              description: 'Connect your store securely with OAuth'
            },
            {
              step: '3',
              title: 'Start AI Analysis',
              description: 'Automatic analysis completes in 5 minutes'
            },
            {
              step: '4',
              title: 'See Results',
              description: 'Apply optimization recommendations immediately'
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
            <p className="text-gray-400 text-sm">Coming soon to Shopify App Store</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Empower your store with AI. Increase sales. Make customers happy.
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