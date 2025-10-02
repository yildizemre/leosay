import React from 'react';
import { FileText, Code, Book, Download, Search, ArrowRight, Play, CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Documentation = () => {
  const { t } = useLanguage();

  const docCategories = [
    {
      icon: Code,
      title: 'API Dokümantasyonu',
      description: 'RESTful API endpoints, authentication ve kod örnekleri',
      color: 'blue',
      items: ['Authentication', 'Endpoints', 'Rate Limiting', 'Error Handling'],
      badge: 'v2.1'
    },
    {
      icon: Book,
      title: 'Geliştirici Rehberi',
      description: 'SDK kurulumu, entegrasyon adımları ve best practices',
      color: 'green',
      items: ['Quick Start', 'SDK Setup', 'Integration', 'Best Practices'],
      badge: 'Güncel'
    },
    {
      icon: Zap,
      title: 'AI Model Rehberi',
      description: 'Yapay zeka modellerinin kullanımı ve optimizasyon teknikleri',
      color: 'purple',
      items: ['Model Training', 'Fine-tuning', 'Performance', 'Deployment'],
      badge: 'Yeni'
    },
    {
      icon: FileText,
      title: 'Kullanım Kılavuzu',
      description: 'Adım adım kullanım talimatları ve troubleshooting',
      color: 'orange',
      items: ['Setup Guide', 'Configuration', 'Troubleshooting', 'FAQ'],
      badge: 'Popüler'
    }
  ];

  const quickStart = [
    {
      step: '1',
      title: 'API Key Alın',
      description: 'Dashboard\'dan API anahtarınızı oluşturun',
      code: 'curl -H "Authorization: Bearer YOUR_API_KEY"'
    },
    {
      step: '2',
      title: 'SDK Kurun',
      description: 'Tercih ettiğiniz dilde SDK\'yı yükleyin',
      code: 'npm install leosay-sdk'
    },
    {
      step: '3',
      title: 'İlk Çağrı',
      description: 'Basit bir API çağrısı yapın',
      code: 'const result = await client.detectHelmet(image);'
    }
  ];

  const codeExamples = [
    {
      language: 'Python',
      title: 'Baret Tespiti',
      code: `import leosay

client = leosay.SafetyDetector(api_key="your_key")
result = client.detect_helmet("worker.jpg")

if result.helmet_detected:
    print(f"Baret tespit edildi: {result.confidence}")
else:
    print("UYARI: Baret bulunamadı!")`
    },
    {
      language: 'JavaScript',
      title: 'Kalite Kontrolü',
      code: `const Leosay = require('leosay-js');

const client = new Leosay('your_api_key');
const result = await client.qualityCheck('product.jpg');

console.log('Kalite Skoru:', result.quality_score);
console.log('Hatalar:', result.defects);`
    },
    {
      language: 'cURL',
      title: 'REST API',
      code: `curl -X POST https://api.leosay.com/v1/safety/helmet \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "image=@worker.jpg"`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <FileText className="h-4 w-4" />
              <span>Geliştirici Dokümantasyonu</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kapsamlı
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Dokümantasyon</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              LEOSAY AI platformunu entegre etmek için ihtiyacınız olan tüm kaynaklar. 
              API referansları, kod örnekleri ve detaylı kılavuzlar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Hızlı Başlangıç</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Video Eğitimler</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">API Endpoint</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8</div>
                <div className="text-sm text-gray-600">Programlama Dili</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Kod Örneği</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dokümantasyon <span className="text-blue-600">Kategorileri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza uygun dokümantasyon kategorisini seçin ve hemen başlayın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    category.color === 'green' ? 'bg-green-100 text-green-600' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    category.badge === 'Yeni' ? 'bg-green-100 text-green-600' :
                    category.badge === 'Popüler' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {category.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hızlı <span className="text-blue-600">Başlangıç</span>
            </h2>
            <p className="text-xl text-gray-600">
              3 basit adımda LEOSAY AI'yi entegre edin
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStart.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{step.description}</p>
                  
                  <div className="bg-gray-900 rounded-lg p-4">
                    <code className="text-green-400 text-sm">{step.code}</code>
                  </div>
                </div>
                
                {index < quickStart.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kod <span className="text-blue-600">Örnekleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Farklı programlama dillerinde hazır kod örnekleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{example.title}</h3>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {example.language}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap">
                      {example.code}
                    </pre>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Kodu İndir</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Aradığınızı Bulamadınız mı?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Kapsamlı dokümantasyonumuzda arama yapın veya destek ekibimizle iletişime geçin
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Dokümantasyonda ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold">
              Ara
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Destek Ekibiyle İletişim
            </button>
            <span className="text-gray-400">•</span>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Community Forum
            </button>
            <span className="text-gray-400">•</span>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              GitHub Repository
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;