import React from 'react';
import { Camera, Code, Zap, Shield, Globe, Database, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ImageAPI = () => {
  const { t } = useLanguage();

  const apiFeatures = [
    {
      icon: Camera,
      title: 'Görüntü İşleme API',
      description: 'RESTful API ile kolay entegrasyon. Baret, güvenlik ekipmanı ve kalite kontrol tespiti.',
      color: 'blue'
    },
    {
      icon: Code,
      title: 'Geliştirici Dostu',
      description: 'Kapsamlı dokümantasyon, SDK\'lar ve kod örnekleri ile hızlı başlangıç.',
      color: 'green'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: 'Milisaniye cevap süreleri ve yüksek throughput ile ölçeklenebilir çözüm.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Güvenli & Güvenilir',
      description: 'Enterprise seviye güvenlik, SSL şifreleme ve %99.9 uptime garantisi.',
      color: 'red'
    }
  ];

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/safety/helmet-detection',
      description: 'Baret tespiti için görüntü analizi',
      response: '{ "helmet_detected": true, "confidence": 0.98, "bbox": [...] }'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/quality/defect-detection',
      description: 'Kalite kontrol ve hata tespiti',
      response: '{ "defects": [...], "quality_score": 0.95, "status": "pass" }'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/textile/fabric-analysis',
      description: 'Tekstil kumaş analizi ve ölçüm',
      response: '{ "length": 125.5, "defects": [], "quality": "excellent" }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'Analitik dashboard verileri',
      response: '{ "total_processed": 1247, "accuracy": 0.998, "alerts": [...] }'
    }
  ];

  const sdks = [
    {
      language: 'Python',
      icon: '🐍',
      installation: 'pip install leosay-sdk',
      example: `import leosay

client = leosay.Client(api_key="your_key")
result = client.detect_helmet("image.jpg")
print(f"Helmet detected: {result.helmet_detected}")`
    },
    {
      language: 'JavaScript',
      icon: '⚡',
      installation: 'npm install leosay-js',
      example: `const Leosay = require('leosay-js');

const client = new Leosay('your_api_key');
const result = await client.detectHelmet('image.jpg');
console.log('Helmet detected:', result.helmet_detected);`
    },
    {
      language: 'Java',
      icon: '☕',
      installation: 'Maven: com.leosay:leosay-java',
      example: `LeosayClient client = new LeosayClient("your_key");
HelmetDetectionResult result = client.detectHelmet("image.jpg");
System.out.println("Helmet: " + result.isHelmetDetected());`
    },
    {
      language: 'C#',
      icon: '🔷',
      installation: 'NuGet: Leosay.SDK',
      example: `var client = new LeosayClient("your_api_key");
var result = await client.DetectHelmetAsync("image.jpg");
Console.WriteLine($"Helmet: {result.HelmetDetected}");`
    }
  ];

  const pricingPlans = [
    {
      name: 'Başlangıç',
      price: 'Ücretsiz',
      requests: '1,000 istek/ay',
      features: ['Temel API erişimi', 'Baret tespiti', 'Email destek', 'Temel dokümantasyon'],
      color: 'gray'
    },
    {
      name: 'Profesyonel',
      price: '$99/ay',
      requests: '50,000 istek/ay',
      features: ['Tüm API endpoints', 'Öncelikli destek', 'Webhook desteği', 'Analitik dashboard'],
      color: 'blue',
      popular: true
    },
    {
      name: 'Kurumsal',
      price: 'Özel Fiyat',
      requests: 'Sınırsız',
      features: ['Özel deployment', 'SLA garantisi', '7/24 destek', 'Özel entegrasyonlar'],
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Camera className="h-4 w-4" />
                <span>LEOSAY Image Processing API</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Görüntü İşleme
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> API</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Geliştirici dostu RESTful API ile güçlü görüntü işleme yeteneklerini uygulamanıza entegre edin. 
                Baret tespiti, kalite kontrol ve tekstil analizi için hazır çözümler.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">API Deneyin</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">Dokümantasyon</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600">Doğruluk</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50ms</div>
                  <div className="text-sm text-gray-600">Ortalama Yanıt</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            {/* API Demo */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">API Demo</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.leosay.com/v1/safety/helmet-detection \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@worker.jpg"

{
  "helmet_detected": true,
  "confidence": 0.98,
  "bbox": [120, 45, 200, 125],
  "processing_time": "45ms",
  "status": "success"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              API <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geliştiriciler için tasarlanmış güçlü ve esnek görüntü işleme API'si
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              API <span className="text-blue-600">Endpoints</span>
            </h2>
            <p className="text-xl text-gray-600">
              Güçlü görüntü işleme yetenekleri için hazır endpoint'ler
            </p>
          </div>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-gray-700">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-600 text-sm">{endpoint.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-xs overflow-x-auto">
                        {endpoint.response}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SDK <span className="text-blue-600">Desteği</span>
            </h2>
            <p className="text-xl text-gray-600">
              Favori programlama dilinizde hızlı başlangıç yapın
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sdks.map((sdk, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{sdk.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{sdk.language}</h3>
                      <p className="text-sm text-gray-600">{sdk.installation}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {sdk.example}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Basit <span className="text-blue-600">Fiyatlandırma</span>
            </h2>
            <p className="text-xl text-gray-600">
              İhtiyacınıza uygun planı seçin, istediğiniz zaman değiştirin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-blue-500 relative' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popüler
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.requests}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}>
                    {plan.name === 'Kurumsal' ? 'İletişime Geç' : 'Başlayın'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Uygulamanızı Güçlendirin
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Leosay Image Processing API ile görüntü işleme yeteneklerini uygulamanıza dakikalar içinde entegre edin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz API Key Alın
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              Dokümantasyonu İnceleyin
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageAPI;