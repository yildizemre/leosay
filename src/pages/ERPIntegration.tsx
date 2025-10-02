import React from 'react';
import { Database, Cpu, Zap, CheckCircle, ArrowRight, Play, Settings, BarChart3, Factory, Activity, X, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ERPIntegration = () => {
  const { t } = useLanguage();

  const erpSystems = [
    {
      name: 'SAP ERP',
      logo: '🔷',
      description: 'SAP sistemleri ile MES entegrasyonu',
      features: ['Üretim Emirleri', 'Stok Yönetimi', 'Maliyet Muhasebesi', 'Kalite Verileri'],
      integrationTime: '2-4 hafta',
      complexity: 'Orta',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Oracle ERP',
      logo: '🔴',
      description: 'Oracle Cloud ve On-Premise entegrasyonu',
      features: ['İş Süreçleri', 'Finansal Veriler', 'Tedarik Zinciri', 'Raporlama'],
      integrationTime: '3-5 hafta',
      complexity: 'Yüksek',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Microsoft Dynamics',
      logo: '🔶',
      description: 'Dynamics 365 ile kapsamlı entegrasyon',
      features: ['CRM Verileri', 'Satış Süreçleri', 'Müşteri Yönetimi', 'İş Zekası'],
      integrationTime: '2-3 hafta',
      complexity: 'Düşük',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      name: 'Salesforce CRM',
      logo: '☁️',
      description: 'Salesforce CRM ile müşteri odaklı entegrasyon',
      features: ['Müşteri Verileri', 'Sipariş Takibi', 'Satış Analizi', 'Servis Yönetimi'],
      integrationTime: '1-2 hafta',
      complexity: 'Düşük',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  const integrationBenefits = [
    {
      icon: Database,
      title: 'Veri Senkronizasyonu',
      description: 'ERP/CRM sistemleri ile gerçek zamanlı veri senkronizasyonu',
      metric: '99.9% Uptime'
    },
    {
      icon: Factory,
      title: 'Üretim Optimizasyonu',
      description: 'ERP verilerini kullanarak üretim süreçlerini optimize eder',
      metric: '%35 Verimlilik'
    },
    {
      icon: BarChart3,
      title: 'Entegre Raporlama',
      description: 'Tüm sistemlerden gelen verileri birleştirir ve raporlar',
      metric: '360° Görünüm'
    },
    {
      icon: Zap,
      title: 'Otomatik İş Akışları',
      description: 'MES ve ERP arasında otomatik iş akışları oluşturur',
      metric: '%60 Otomasyon'
    }
  ];

  const integrationSteps = [
    {
      step: '1',
      title: 'Sistem Analizi',
      description: 'Mevcut ERP/CRM sistemlerinizi analiz ederiz',
      duration: '1 hafta'
    },
    {
      step: '2',
      title: 'API Geliştirme',
      description: 'Özel entegrasyon API\'leri geliştiririz',
      duration: '2-3 hafta'
    },
    {
      step: '3',
      title: 'Test ve Doğrulama',
      description: 'Entegrasyonu test eder ve doğrularız',
      duration: '1 hafta'
    },
    {
      step: '4',
      title: 'Canlı Geçiş',
      description: 'Sistemi canlı ortama alır ve eğitim veririz',
      duration: '1 hafta'
    }
  ];

  const [selectedSystem, setSelectedSystem] = React.useState<string | null>(null);

  const pricingPlans = [
    {
      name: 'Temel Entegrasyon',
      price: '15,000₺',
      duration: 'Tek seferlik',
      features: [
        'Tek ERP sistemi entegrasyonu',
        'Temel veri senkronizasyonu',
        'Standart API bağlantıları',
        '3 ay teknik destek',
        'Temel eğitim paketi'
      ],
      popular: false,
      setupTime: '2-3 hafta'
    },
    {
      name: 'Profesyonel Entegrasyon',
      price: '35,000₺',
      duration: 'Tek seferlik',
      features: [
        'Çoklu ERP/CRM entegrasyonu',
        'Gelişmiş veri senkronizasyonu',
        'Özel API geliştirme',
        '12 ay teknik destek',
        'Kapsamlı eğitim programı',
        'Özel dashboard geliştirme'
      ],
      popular: true,
      setupTime: '4-6 hafta'
    },
    {
      name: 'Kurumsal Entegrasyon',
      price: 'Özel Fiyat',
      duration: 'Proje bazlı',
      features: [
        'Tam özelleştirilmiş entegrasyon',
        'Legacy sistem desteği',
        'Özel güvenlik protokolleri',
        'Sınırsız teknik destek',
        'Özel eğitim ve danışmanlık',
        'SLA garantisi'
      ],
      popular: false,
      setupTime: '6-12 hafta'
    }
  ];

  const systemDetails = {
    'SAP ERP': {
      overview: 'SAP ERP sistemleri ile MES entegrasyonu, üretim emirleri, stok yönetimi ve maliyet muhasebesi verilerinin gerçek zamanlı senkronizasyonu sağlar.',
      challenges: [
        'SAP\'nin karmaşık modül yapısı ve veri modellemesi',
        'Real-time veri senkronizasyonu gereksinimleri',
        'SAP authorization ve güvenlik protokolleri',
        'Çoklu SAP modülü (PP, MM, QM, CO) entegrasyonu',
        'SAP versiyonları arası uyumluluk sağlanması'
      ],
      solutions: [
        'SAP RFC ve BAPI kullanarak native entegrasyon',
        'Real-time IDoc ve ABAP proxy entegrasyonu',
        'SAP PI/PO middleware ile güvenli veri transferi',
        'Custom ABAP development ile özel fonksiyonlar',
        'SAP Fiori UI5 ile modern kullanıcı arayüzü'
      ],
      results: [
        { metric: 'Veri Senkronizasyonu', value: '99.9% doğruluk', improvement: 'Real-time entegrasyon' },
        { metric: 'Süreç Hızı', value: '< 2 saniye', improvement: 'Anında veri transferi' },
        { metric: 'Sistem Uptime', value: '%99.8 çalışma', improvement: 'Güvenilir bağlantı' },
        { metric: 'Veri Tutarlılığı', value: '%100 uyum', improvement: 'Hatasız senkronizasyon' },
        { metric: 'Operasyonel Verimlilik', value: '%45 artış', improvement: 'Otomatik iş akışları' },
        { metric: 'Manuel İş Yükü', value: '%80 azalma', improvement: 'Otomasyon ile' }
      ],
      technologies: ['SAP RFC/BAPI', 'IDoc Integration', 'ABAP Development', 'SAP PI/PO', 'Fiori UI5', 'Real-time Sync'],
      clientTestimonial: {
        quote: 'Leosay MES ile SAP entegrasyonumuz mükemmel çalışıyor. Üretim emirleri otomatik senkronize oluyor ve veri tutarlılığımız %100. Manuel iş yükümüz %80 azaldı.',
        author: 'Ahmet Kaya',
        position: 'IT Direktörü',
        company: 'Üretim Sanayi A.Ş.'
      }
    },
    'Oracle ERP': {
      overview: 'Oracle ERP Cloud ve On-Premise sistemleri ile MES entegrasyonu, finansal veriler, tedarik zinciri ve iş süreçlerinin sorunsuz entegrasyonu.',
      challenges: [
        'Oracle\'ın çoklu deployment modellerinin yönetimi',
        'Oracle Fusion ve E-Business Suite farklılıkları',
        'Complex business logic ve workflow entegrasyonu',
        'Oracle Database performans optimizasyonu',
        'Security ve compliance gereksinimlerinin karşılanması'
      ],
      solutions: [
        'Oracle Integration Cloud (OIC) ile modern entegrasyon',
        'REST ve SOAP web services kullanımı',
        'Oracle Database direct connection optimizasyonu',
        'Custom PL/SQL procedures ile veri işleme',
        'Oracle APEX ile özel dashboard geliştirme'
      ],
      results: [
        { metric: 'Entegrasyon Hızı', value: '< 1 saniye', improvement: 'Optimize edilmiş bağlantı' },
        { metric: 'Veri Doğruluğu', value: '%99.7 hassasiyet', improvement: 'Hatasız transfer' },
        { metric: 'Sistem Performansı', value: '%60 iyileşme', improvement: 'Database optimizasyonu' },
        { metric: 'İş Süreçleri', value: '%70 otomasyon', improvement: 'Workflow entegrasyonu' },
        { metric: 'Raporlama', value: '%90 hızlanma', improvement: 'Real-time dashboard' },
        { metric: 'Maliyet Tasarrufu', value: '%35 azalma', improvement: 'Süreç optimizasyonu' }
      ],
      technologies: ['Oracle Integration Cloud', 'REST/SOAP Services', 'PL/SQL Development', 'Oracle APEX', 'Database Optimization', 'Workflow Automation'],
      clientTestimonial: {
        quote: 'Leosay MES ile Oracle entegrasyonumuz çok başarılı. Finansal verilerimiz gerçek zamanlı senkronize oluyor ve raporlama hızımız %90 arttı.',
        author: 'Mehmet Özkan',
        position: 'Sistem Yöneticisi',
        company: 'Holding A.Ş.'
      }
    },
    'Microsoft Dynamics': {
      overview: 'Microsoft Dynamics 365 ile MES entegrasyonu, CRM verileri, satış süreçleri ve müşteri yönetiminin merkezi platformda birleştirilmesi.',
      challenges: [
        'Dynamics 365 modüllerinin çeşitliliği ve karmaşıklığı',
        'Power Platform entegrasyonu gereksinimleri',
        'Azure cloud services ile hybrid deployment',
        'Microsoft Graph API limitlerinin yönetimi',
        'Multi-tenant architecture uyumluluğu'
      ],
      solutions: [
        'Power Platform (Power Apps, Power Automate) entegrasyonu',
        'Microsoft Graph API ile güvenli veri erişimi',
        'Azure Logic Apps ile workflow otomasyonu',
        'Common Data Service (CDS) ile veri modelleme',
        'Power BI ile advanced analytics dashboard'
      ],
      results: [
        { metric: 'CRM Entegrasyonu', value: '%98 senkronizasyon', improvement: 'Müşteri veri uyumu' },
        { metric: 'Satış Süreçleri', value: '%55 hızlanma', improvement: 'Otomatik workflow' },
        { metric: 'Veri Görünürlüğü', value: '%85 iyileşme', improvement: 'Unified dashboard' },
        { metric: 'Müşteri Memnuniyeti', value: '%40 artış', improvement: 'Hızlı yanıt' },
        { metric: 'Operasyonel Maliyet', value: '%30 azalma', improvement: 'Süreç otomasyonu' },
        { metric: 'Raporlama Süresi', value: '%75 kısalma', improvement: 'Power BI entegrasyonu' }
      ],
      technologies: ['Power Platform', 'Microsoft Graph API', 'Azure Logic Apps', 'Common Data Service', 'Power BI', 'Workflow Automation'],
      clientTestimonial: {
        quote: 'Leosay MES ile Dynamics 365 entegrasyonumuz mükemmel. CRM verilerimiz %98 senkronizasyon ile çalışıyor ve satış süreçlerimiz %55 hızlandı.',
        author: 'Ayşe Demir',
        position: 'CRM Müdürü',
        company: 'Teknoloji Şirketi Ltd.'
      }
    },
    'Salesforce CRM': {
      overview: 'Salesforce CRM ile MES entegrasyonu, müşteri verileri, sipariş takibi ve satış analizlerinin üretim süreçleri ile entegre edilmesi.',
      challenges: [
        'Salesforce API rate limiting ve quota yönetimi',
        'Custom object ve field mapping karmaşıklığı',
        'Salesforce Lightning platform uyumluluğu',
        'Multi-org ve sandbox environment yönetimi',
        'Real-time data streaming gereksinimleri'
      ],
      solutions: [
        'Salesforce REST/SOAP API ile güvenli entegrasyon',
        'Custom Apex classes ile özel business logic',
        'Lightning Web Components ile modern UI',
        'Salesforce Connect ile external data integration',
        'Platform Events ile real-time messaging'
      ],
      results: [
        { metric: 'Müşteri Veri Uyumu', value: '%99.5 doğruluk', improvement: 'Real-time sync' },
        { metric: 'Sipariş İşleme', value: '%65 hızlanma', improvement: 'Otomatik workflow' },
        { metric: 'Satış Analizi', value: '%80 iyileşme', improvement: 'Entegre dashboard' },
        { metric: 'Müşteri Yanıt Süresi', value: '%50 kısalma', improvement: 'Hızlı erişim' },
        { metric: 'Veri Kalitesi', value: '%90 iyileşme', improvement: 'Otomatik validasyon' },
        { metric: 'Satış Verimliliği', value: '%45 artış', improvement: 'Süreç otomasyonu' }
      ],
      technologies: ['Salesforce REST/SOAP API', 'Apex Development', 'Lightning Web Components', 'Salesforce Connect', 'Platform Events', 'Real-time Messaging'],
      clientTestimonial: {
        quote: 'Leosay MES ile Salesforce entegrasyonumuz harika çalışıyor. Müşteri verilerimiz %99.5 doğrulukla senkronize oluyor ve satış verimliliğimiz %45 arttı.',
        author: 'Can Özkan',
        position: 'Satış Direktörü',
        company: 'Ticaret A.Ş.'
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Database className="h-4 w-4" />
              <span>MES ERP/CRM Entegrasyonu</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              MES ile ERP/CRM
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Entegrasyonu</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              MES sisteminizi mevcut ERP ve CRM çözümlerinizle sorunsuz entegre edin. 
              SAP, Oracle, Microsoft Dynamics, Salesforce gibi sistemlerle tam uyumluluk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Entegrasyon Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Entegrasyon Rehberi</span>
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">ERP Entegrasyonu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Veri Doğruluğu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Senkronizasyon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Desteklenen <span className="text-blue-600">ERP/CRM Sistemleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sektörün önde gelen ERP ve CRM sistemleri ile sorunsuz entegrasyon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {erpSystems.map((system, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-3xl">{system.logo}</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{system.name}</h3>
                      <p className="text-sm text-gray-600">{system.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Entegrasyon Özellikleri:</p>
                    <div className="space-y-1">
                      {system.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs text-gray-500">Süre: </span>
                      <span className="text-sm font-medium text-gray-900">{system.integrationTime}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      system.complexity === 'Düşük' ? 'bg-green-100 text-green-600' :
                      system.complexity === 'Orta' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {system.complexity}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    <button 
                      onClick={() => setSelectedSystem(system.name)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Entegrasyon Detayları</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entegrasyon <span className="text-blue-600">Faydaları</span>
            </h2>
            <p className="text-xl text-gray-600">
              MES ve ERP/CRM entegrasyonu ile elde edeceğiniz avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{benefit.description}</p>
                
                <div className="text-2xl font-bold text-blue-600">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entegrasyon <span className="text-blue-600">Süreci</span>
            </h2>
            <p className="text-xl text-gray-600">
              MES ve ERP/CRM entegrasyonu nasıl gerçekleştirilir?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">{step.description}</p>
                  
                  <div className="text-center">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
                
                {index < integrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* API Integration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">MES API Entegrasyonu</h2>
            <p className="text-gray-300 text-lg">RESTful API ile kolay entegrasyon</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Python</span>
            </div>
            
            <pre className="text-green-400 text-sm overflow-x-auto">
{`import mes_api

# MES API istemcisini başlat
client = mes_api.Client(
    api_key="your_api_key",
    erp_system="SAP",
    erp_endpoint="https://your-sap-system.com/api"
)

# Üretim emrini ERP'den al ve MES'e aktar
production_order = client.get_erp_production_order("PO-2024-001")
mes_result = client.start_production(production_order)

# Kalite kontrol sonuçlarını ERP'ye gönder
quality_data = client.get_quality_results("line_1")
client.update_erp_quality_data(quality_data)

print(f"Üretim durumu: {mes_result.status}")
print(f"ERP senkronizasyonu: {client.sync_status}")`}
            </pre>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              API Dokümantasyonu
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            MES ve ERP/CRM Entegrasyonunuzu Başlatın
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Mevcut sistemlerinizle MES entegrasyonu ile operasyonel verimliliğinizi %35 artırın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold">
              Entegrasyon Danışmanlığı
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              Teknik Dokümantasyon
            </button>
          </div>
        </div>
      </section>

      {/* Modal for System Details */}
      {selectedSystem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const system = systemDetails[selectedSystem as keyof typeof systemDetails];
              if (!system) return null;
              
              return (
                <>
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedSystem} Entegrasyonu</h3>
                      <p className="text-gray-600 mt-1">MES Detaylı Entegrasyon Bilgileri</p>
                    </div>
                    <button
                      onClick={() => setSelectedSystem(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <X className="h-6 w-6 text-gray-500" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Database className="h-6 w-6 text-blue-600 mr-3" />
                        MES Entegrasyon Genel Bakış
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">{system.overview}</p>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                          Entegrasyon Zorlukları
                        </h4>
                        <div className="space-y-4">
                          {system.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                              <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                              <p className="text-gray-700">{challenge}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Leosay MES Çözümleri
                        </h4>
                        <div className="space-y-4">
                          {system.solutions.map((solution, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                              <p className="text-gray-700">{solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
                        Elde Edilen Entegrasyon Sonuçları
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {system.results.map((result, index) => (
                          <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                            <h5 className="font-semibold text-gray-900 mb-3">{result.metric}</h5>
                            <div className="text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                            <div className="text-sm text-green-600 font-medium">{result.improvement}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-5 w-5 text-purple-500 mr-2" />
                        Kullanılan Entegrasyon Teknolojileri
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {system.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                        <Shield className="h-5 w-5 text-blue-500 mr-2" />
                        Müşteri Entegrasyon Deneyimi
                      </h4>
                      <blockquote className="text-gray-700 italic mb-6 text-xl leading-relaxed">
                        "{system.clientTestimonial.quote}"
                      </blockquote>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <Database className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{system.clientTestimonial.author}</div>
                          <div className="text-gray-600">{system.clientTestimonial.position}</div>
                          <div className="text-blue-600 font-medium">{system.clientTestimonial.company}</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Integration Metrics Summary */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                      <h4 className="text-xl font-bold mb-6 text-center">Anahtar Entegrasyon Performans Göstergeleri</h4>
                      <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                          <div className="text-2xl font-bold mb-2">99.9%</div>
                          <div className="text-blue-100 text-sm">Veri Doğruluğu</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                          <div className="text-2xl font-bold mb-2">{"< 2s"}</div>
                          <div className="text-blue-100 text-sm">Yanıt Süresi</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                          <div className="text-2xl font-bold mb-2">24/7</div>
                          <div className="text-blue-100 text-sm">Senkronizasyon</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-4">
                          <div className="text-2xl font-bold mb-2">%45</div>
                          <div className="text-blue-100 text-sm">Verimlilik Artışı</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg">
                        Bu Entegrasyonu Talep Et
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold text-lg">
                        Teknik Dokümantasyon
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default ERPIntegration;