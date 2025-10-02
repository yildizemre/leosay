import React from 'react';
import { Factory, Eye, BarChart3, Activity, CheckCircle, AlertTriangle, Cpu, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductionControl = () => {
  const { t } = useLanguage();

  const productionFeatures = [
    {
      icon: Factory,
      title: 'Üretim Hattı İzleme',
      description: 'Tüm üretim hatlarını gerçek zamanlı olarak izler ve performans metriklerini takip eder.',
      accuracy: '99.8%',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Kalite Kontrol',
      description: 'Görüntü işleme ile otomatik kalite kontrolü ve hatalı ürün tespiti yapar.',
      accuracy: '99.5%',
      color: 'green'
    },
    {
      icon: BarChart3,
      title: 'Üretim Analizi',
      description: 'Üretim verilerini analiz eder ve verimliliği artıracak öneriler sunar.',
      accuracy: '98.9%',
      color: 'purple'
    },
    {
      icon: Activity,
      title: 'Süreç Optimizasyonu',
      description: 'Üretim süreçlerini optimize eder ve darboğazları tespit eder.',
      accuracy: '99.2%',
      color: 'orange'
    }
  ];

  const mesModules = [
    {
      title: 'Üretim Planlama',
      description: 'Üretim emirlerini yönetir ve kaynak planlaması yapar',
      image: '/images/uretimplanlama.jpg',
      features: ['İş Emri Yönetimi', 'Kaynak Planlama', 'Kapasite Analizi', 'Zamanlama'],
      stats: { efficiency: '94%', ontime: '98%', utilization: '92%' }
    },
    {
      title: 'Kalite Yönetimi',
      description: 'Görüntü işleme ile kalite kontrol ve test sonuçları yönetimi',
      image: '/images/kalitekontrol.jpg',
      features: ['Otomatik Kontrol', 'Test Sonuçları', 'Kalite Raporları', 'Sertifikasyon'],
      stats: { quality: '99.2%', defects: '0.8%', compliance: '100%' }
    },
    {
      title: 'Stok Yönetimi',
      description: 'Hammadde ve yarı mamul stok takibi ile envanter optimizasyonu',
      image: '/images/stok.webp',
      features: ['Stok Takibi', 'Otomatik Sipariş', 'Envanter Analizi', 'Maliyet Kontrolü'],
      stats: { accuracy: '99.5%', reduction: '25%', turnover: '8.5x' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Factory className="h-4 w-4" />
                <span>MES Üretim Kontrol</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Üretim Süreçlerini
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Kontrol Edin</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Görüntü işleme teknolojisi ile desteklenen MES modülü. Üretim hatlarını gerçek zamanlı izleyin, 
                kalite kontrolü yapın ve ERP sistemlerinizle sorunsuz entegrasyon sağlayın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span className="font-semibold">MES Demo</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">ERP Entegrasyon</span>
                </button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Üretim Hattı</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600">Sistem Doğruluğu</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">%45</div>
                  <div className="text-sm text-gray-600">Verimlilik Artışı</div>
                </div>
              </div>
            </div>

            {/* Live MES Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı MES Kontrol Paneli</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">CANLI</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Aktif Hat</p>
                        <p className="text-2xl font-bold text-green-900">8</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">Bakım</p>
                        <p className="text-2xl font-bold text-orange-900">2</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Üretim Durumu</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 1 - Normal Üretim</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Kalite Kontrol - Aktif</p>
                        <p className="text-xs text-gray-600">Skor: %98.7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Günlük Hedef</span>
                    <span className="text-lg font-bold text-blue-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
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
              MES <span className="text-blue-600">Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Görüntü işleme teknolojisi ile desteklenen üretim yönetim sistemi özellikleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-4 ${
                  feature.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  feature.color === 'green' ? 'bg-green-100 text-green-600' :
                  feature.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Doğruluk Oranı</span>
                  <span className={`text-sm font-bold ${
                    feature.color === 'blue' ? 'text-blue-600' :
                    feature.color === 'green' ? 'text-green-600' :
                    feature.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>{feature.accuracy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MES Modules */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              MES <span className="text-blue-600">Modülleri</span>
            </h2>
            <p className="text-xl text-gray-600">
              Kapsamlı üretim yönetimi için entegre modüller
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mesModules.map((module, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Özellikler:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(module.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Integration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">ERP/CRM Entegrasyonu</h2>
            <p className="text-gray-300 text-lg">Mevcut sistemlerinizle sorunsuz entegrasyon</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="text-2xl mb-3">🔷</div>
              <h3 className="font-semibold text-white mb-2">SAP ERP</h3>
              <p className="text-gray-300 text-sm">Üretim emirleri ve stok entegrasyonu</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="text-2xl mb-3">🔴</div>
              <h3 className="font-semibold text-white mb-2">Oracle</h3>
              <p className="text-gray-300 text-sm">Veritabanı ve iş süreçleri</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="text-2xl mb-3">🔶</div>
              <h3 className="font-semibold text-white mb-2">Microsoft</h3>
              <p className="text-gray-300 text-sm">Dynamics 365 entegrasyonu</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <div className="text-2xl mb-3">☁️</div>
              <h3 className="font-semibold text-white mb-2">Salesforce</h3>
              <p className="text-gray-300 text-sm">CRM ve müşteri yönetimi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Üretim Süreçlerinizi Dijitalleştirin
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            MESVision ile üretim verimliliğinizi %45 artırın ve kalite skorunuzu %99.8'e çıkarın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              MES Demo Talep Et
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              ERP Entegrasyon Rehberi
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionControl;