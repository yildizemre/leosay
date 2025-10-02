import React from 'react';
import { Camera, Code, Zap, Shield, Globe, Database, ArrowRight, Play, CheckCircle, Factory, Eye, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MESAPI = () => {
  const { t } = useLanguage();

  const apiFeatures = [
    {
      icon: Factory,
      title: 'Üretim Kontrol API',
      description: 'RESTful API ile üretim hatlarını kontrol edin ve izleyin',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Kalite Kontrol API',
      description: 'Görüntü işleme ile kalite kontrolü ve hata tespiti API\'si',
      color: 'green'
    },
    {
      icon: Activity,
      title: 'Süreç İzleme API',
      description: 'Üretim süreçlerini gerçek zamanlı izleme ve analiz API\'si',
      color: 'purple'
    },
    {
      icon: Database,
      title: 'ERP Entegrasyon API',
      description: 'ERP/CRM sistemleri ile veri senkronizasyonu API\'si',
      color: 'indigo'
    }
  ];

  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/production/start',
      description: 'Üretim hattını başlatır ve iş emrini aktif eder',
      response: '{ "line_id": "line_1", "status": "active", "start_time": "2024-01-15T10:00:00Z" }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/quality/check/{line_id}',
      description: 'Belirtilen hattın kalite kontrol sonuçlarını getirir',
      response: '{ "quality_score": 98.7, "defects": [], "status": "passed" }'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/erp/sync',
      description: 'ERP sistemi ile veri senkronizasyonu yapar',
      response: '{ "sync_status": "success", "records_updated": 247, "last_sync": "2024-01-15T10:30:00Z" }'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'MES dashboard verilerini getirir',
      response: '{ "active_lines": 8, "total_production": 1247, "quality_score": 98.7 }'
    }
  ];

  const sdks = [
    {
      language: 'Python',
      icon: '🐍',
      installation: 'pip install mes-sdk',
      example: `import mes_sdk

client = mes_sdk.Client(api_key="your_key")
result = client.start_production("line_1", "PO-2024-001")
print(f"Üretim başlatıldı: {result.status}")`
    },
    {
      language: 'JavaScript',
      icon: '⚡',
      installation: 'npm install mes-js-sdk',
      example: `const MES = require('mes-js-sdk');

const client = new MES('your_api_key');
const result = await client.checkQuality('line_1');
console.log('Kalite Skoru:', result.quality_score);`
    },
    {
      language: 'Java',
      icon: '☕',
      installation: 'Maven: com.mes:mes-java-sdk',
      example: `MESClient client = new MESClient("your_key");
ProductionResult result = client.startProduction("line_1");
System.out.println("Status: " + result.getStatus());`
    },
    {
      language: 'C#',
      icon: '🔷',
      installation: 'NuGet: MES.SDK',
      example: `var client = new MESClient("your_api_key");
var result = await client.StartProductionAsync("line_1");
Console.WriteLine($"Status: {result.Status}");`
    }
  ];

  const pricingPlans = [
    {
      name: 'Başlangıç',
      price: 'Ücretsiz',
      requests: '1,000 API çağrısı/ay',
      features: ['Temel MES API', 'Üretim izleme', 'Email destek', 'Temel dokümantasyon'],
      color: 'gray'
    },
    {
      name: 'Profesyonel',
      price: '$299/ay',
      requests: '100,000 API çağrısı/ay',
      features: ['Tüm MES API\'leri', 'ERP entegrasyonu', 'Öncelikli destek', 'Analitik dashboard'],
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
                <span>MES API Platform</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                MES Entegrasyon
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> API</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Geliştirici dostu RESTful API ile MES sistemini uygulamanıza entegre edin. 
                Üretim kontrolü, kalite yönetimi ve ERP entegrasyonu için hazır çözümler.
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
                  <div className="text-2xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">API Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50ms</div>
                  <div className="text-sm text-gray-600">Ortalama Yanıt</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Entegrasyon</div>
                </div>
              </div>
            </div>

            {/* API Demo */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">MES API Demo</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.mes-system.com/v1/production/start \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "line_id": "line_1",
    "production_order": "PO-2024-001",
    "target_quantity": 1000
  }'

{
  "line_id": "line_1",
  "status": "active",
  "start_time": "2024-01-15T10:00:00Z",
  "target_quantity": 1000,
  "estimated_completion": "2024-01-15T18:00:00Z"
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
              MES API <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geliştiriciler için tasarlanmış güçlü ve esnek MES entegrasyon API'si
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-indigo-100 text-indigo-600'
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
              MES API <span className="text-blue-600">Endpoints</span>
            </h2>
            <p className="text-xl text-gray-600">
              Üretim yönetimi için hazır API endpoint'leri
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
              MES SDK <span className="text-blue-600">Desteği</span>
            </h2>
            <p className="text-xl text-gray-600">
              Favori programlama dilinizde MES entegrasyonu
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            MES Sisteminizi Güçlendirin
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            MES API ile üretim süreçlerinizi uygulamanıza dakikalar içinde entegre edin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Ücretsiz API Key Alın
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              MES Dokümantasyonu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MESAPI;