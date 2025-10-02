import React, { useState } from 'react';
import { Cpu, Activity, Thermometer, Zap, Wifi, Database, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, X, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SensorAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('temperature');
  const { t } = useLanguage();

  const sensorTypes = [
    {
      id: 'temperature',
      name: t('sensor.temperature'),
      icon: Thermometer,
      color: 'red',
      value: '23.5°C',
      status: t('sensor.normal'),
      trend: '+2.1%',
      description: 'Çevre sıcaklığı izleme'
    },
    {
      id: 'humidity',
      name: t('sensor.humidity'),
      icon: Activity,
      color: 'blue',
      value: '68%',
      status: t('sensor.normal'),
      trend: '-1.3%',
      description: 'Bağıl nem seviyeleri'
    },
    {
      id: 'pressure',
      name: t('sensor.pressure'),
      icon: Zap,
      color: 'purple',
      value: '1013 hPa',
      status: t('sensor.warning'),
      trend: '+0.8%',
      description: 'Atmosferik basınç okumaları'
    },
    {
      id: 'vibration',
      name: t('sensor.vibration'),
      icon: Activity,
      color: 'green',
      value: '0.3 mm/s',
      status: t('sensor.normal'),
      trend: '-5.2%',
      description: 'Mekanik titreşim analizi'
    }
  ];

  const industries = [
    {
      id: 'smart-factory',
      title: 'MES Akıllı Fabrika',
      description: 'Üretim hatları, makine verimliliği ve personel performansını gerçek zamanlı izleme',
      icon: Cpu,
      sensors: ['Üretim Hızı', 'Makine Durumu', 'Personel Takibi', 'Kalite Metrikleri'],
      image: '/images/mesakilli.webp',
      detailedInfo: {
        overview: 'MES tabanlı akıllı fabrika çözümü ile üretim süreçlerini optimize edin. Gerçek zamanlı veri toplama, analiz ve raporlama ile operasyonel verimliliği maksimuma çıkarın.',
        challenges: [
          'Üretim hatlarının gerçek zamanlı izlenmesi',
          'Makine arızalarının önceden tespiti',
          'Personel verimliliğinin ölçülmesi',
          'Kalite kontrol süreçlerinin otomatikleştirilmesi'
        ],
        solutions: [
          'IoT sensörler ile makine durumu izleme',
          'Computer vision ile personel aktivite analizi',
          'Predictive analytics ile öngörülü bakım',
          'Real-time dashboard ile anlık görünürlük'
        ],
        results: [
          { metric: 'Üretim Verimliliği', value: '%45 artış', improvement: 'OEE skorunda iyileşme' },
          { metric: 'Makine Arızası', value: '%60 azalma', improvement: 'Öngörülü bakım ile' },
          { metric: 'Personel Verimliliği', value: '%35 artış', improvement: 'Aktivite analizi ile' },
          { metric: 'Kalite Skoru', value: '%98.7', improvement: 'Otomatik kontrol ile' }
        ],
        technologies: ['IoT Sensors', 'Computer Vision', 'Predictive Analytics', 'Real-time Processing'],
        clientTestimonial: {
          quote: 'MES akıllı fabrika sistemi ile üretim verimliliğimizi %45 artırdık. Makine arızaları %60 azaldı.',
          author: 'Ahmet Kaya',
          position: 'Fabrika Müdürü',
          company: 'Endüstri Üretim A.Ş.'
        }
      }
    },
    {
      id: 'personnel-efficiency',
      title: 'MES Personel Verimlilik',
      description: 'Çalışan performansı, iş akışları ve operasyonel verimlilik analizi',
      icon: Thermometer,
      sensors: ['Aktivite Takibi', 'İş Süresi', 'Verimlilik', 'Güvenlik'],
      image: '/images/personelverimlilik.jpg',
      detailedInfo: {
        overview: 'MES personel verimlilik modülü ile çalışan performansını objektif verilerle ölçün. İş akışlarını optimize edin ve operasyonel verimliliği artırın.',
        challenges: [
          'Personel performansının objektif ölçülmesi',
          'İş akışlarındaki darboğazların tespiti',
          'Çalışan güvenliğinin sürekli izlenmesi',
          'Vardiya verimliliğinin karşılaştırılması'
        ],
        solutions: [
          'Computer vision ile aktivite analizi',
          'Time-motion study otomasyonu',
          'Güvenlik protokolü uyum takibi',
          'Performance dashboard ve raporlama'
        ],
        results: [
          { metric: 'Personel Verimliliği', value: '%35 artış', improvement: 'Objektif ölçüm ile' },
          { metric: 'İş Güvenliği', value: '%85 iyileşme', improvement: 'Sürekli izleme ile' },
          { metric: 'Operasyonel Maliyet', value: '%25 azalma', improvement: 'Süreç optimizasyonu' },
          { metric: 'Çalışan Memnuniyeti', value: '%40 artış', improvement: 'Adil performans ölçümü' }
        ],
        technologies: ['Computer Vision', 'Activity Recognition', 'Time Analytics', 'Safety Monitoring'],
        clientTestimonial: {
          quote: 'MES personel verimlilik sistemi ile çalışan performansımızı %35 artırdık. Artık objektif verilerle çalışıyoruz.',
          author: 'Fatma Özdemir',
          position: 'İnsan Kaynakları Müdürü',
          company: 'Üretim Fabrikası Ltd.'
        }
      }
    },
    {
      id: 'process-optimization',
      title: 'MES Süreç Optimizasyonu',
      description: 'Üretim süreçlerinin analizi, darboğaz tespiti ve verimlilik optimizasyonu',
      icon: Activity,
      sensors: ['Süreç Hızı', 'Darboğaz Analizi', 'Kaynak Kullanımı', 'Çevrim Süresi'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      detailedInfo: {
        overview: 'MES süreç optimizasyonu modülü ile üretim süreçlerinizdeki verimsizlikleri tespit edin ve optimize edin. Lean manufacturing prensiplerine uygun çözümler.',
        challenges: [
          'Üretim süreçlerindeki darboğazların tespiti',
          'Kaynak kullanımının optimize edilmesi',
          'Çevrim sürelerinin kısaltılması',
          'Waste elimination ve lean manufacturing'
        ],
        solutions: [
          'Process mining ile süreç analizi',
          'Bottleneck detection algoritmaları',
          'Resource optimization modelleri',
          'Continuous improvement döngüsü'
        ],
        results: [
          { metric: 'Süreç Verimliliği', value: '%50 artış', improvement: 'Darboğaz eliminasyonu' },
          { metric: 'Çevrim Süresi', value: '%30 azalma', improvement: 'Süreç optimizasyonu' },
          { metric: 'Kaynak Kullanımı', value: '%40 iyileşme', improvement: 'Akıllı planlama' },
          { metric: 'Operasyonel Maliyet', value: '%35 tasarruf', improvement: 'Waste elimination' }
        ],
        technologies: ['Process Mining', 'Bottleneck Detection', 'Resource Optimization', 'Lean Analytics'],
        clientTestimonial: {
          quote: 'MES süreç optimizasyonu ile üretim süreçlerimizdeki verimsizlikleri %50 azalttık. Çevrim süremiz %30 kısaldı.',
          author: 'Okan Demir',
          position: 'Süreç Geliştirme Uzmanı',
          company: 'Optimize Üretim A.Ş.'
        }
      }
    }
  ];

  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    const colors = {
      [t('sensor.normal')]: 'text-green-600 bg-green-100',
      [t('sensor.warning')]: 'text-yellow-600 bg-yellow-100',
      [t('sensor.critical')]: 'text-red-600 bg-red-100'
    };
    return colors[status] || 'text-green-600 bg-green-100';
  };

  const getStatusIcon = (status: string) => {
    const icons = {
      [t('sensor.normal')]: CheckCircle,
      [t('sensor.warning')]: AlertTriangle,
      [t('sensor.critical')]: AlertTriangle
    };
    const Icon = icons[status] || CheckCircle;
    return <Icon className="h-4 w-4" />;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('sensor.title')}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {t('sensor.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('sensor.subtitle')}
          </p>
        </div>

        {/* Real-time Dashboard */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t('sensor.live-dashboard')}</h3>
                <p className="text-gray-600 mt-1">{t('sensor.live-monitoring')}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">8,429 {t('sensor.connected')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">{t('sensor.live')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Sensor Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {sensorTypes.map((sensor) => (
                <div
                  key={sensor.id}
                  onClick={() => setActiveMetric(sensor.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                    activeMetric === sensor.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <sensor.icon className={`h-8 w-8 ${
                      sensor.color === 'red' ? 'text-red-600' :
                      sensor.color === 'blue' ? 'text-blue-600' :
                      sensor.color === 'purple' ? 'text-purple-600' :
                      'text-green-600'
                    }`} />
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(sensor.status)}`}>
                      {getStatusIcon(sensor.status)}
                      <span>{sensor.status}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-gray-900">{sensor.value}</p>
                      <span className={`text-sm font-medium ${
                        sensor.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {sensor.trend}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{sensor.name}</p>
                    <p className="text-xs text-gray-500">{sensor.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Chart */}
              <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">{t('sensor.trends')}</h4>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg font-medium">1H</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">24H</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">7D</button>
                  </div>
                </div>
                
                <div className="h-64 bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Gerçek Zamanlı Sensör Veri Görselleştirme</p>
                    <p className="text-sm text-gray-400 mt-1">Canlı akış analitik</p>
                  </div>
                </div>
              </div>

              {/* Alerts & Status */}
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('sensor.active-alerts')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{t('sensor.high-pressure')}</p>
                        <p className="text-xs text-gray-600">Sensor ID: TMP-001</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{t('sensor.all-normal')}</p>
                        <p className="text-xs text-gray-600">{t('sensor.last-check')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('sensor.network-status')}</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{t('sensor.connected-sensors')}</span>
                      <span className="text-sm font-medium text-gray-900">8,429</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{t('sensor.data-points')}</span>
                      <span className="text-sm font-medium text-gray-900">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{t('sensor.uptime')}</span>
                      <span className="text-sm font-medium text-green-600">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('sensor.industry-apps')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <industry.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h4>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Key Sensors:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.sensors.map((sensor, sensorIndex) => (
                        <span
                          key={sensorIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                        >
                          {sensor}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedIndustry(industry.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Detayları Görüntüle</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{t('sensor.seamless-integration')}</h3>
            <p className="text-blue-100 text-lg">{t('sensor.any-sensor')}</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Wifi className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('sensor.wireless-protocols')}</h4>
                <p className="text-blue-100 text-sm">WiFi, Bluetooth, LoRaWAN, Zigbee</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Database className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('sensor.data-storage')}</h4>
                <p className="text-blue-100 text-sm">Bulut, Edge, Hibrit çözümler</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Zap className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('sensor.realtime-processing')}</h4>
                <p className="text-blue-100 text-sm">Edge bilişim, Akış analitik</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <Activity className="h-8 w-8" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t('sensor.ai-analytics')}</h4>
                <p className="text-blue-100 text-sm">Makine öğrenmesi, Öngörülü içgörüler</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Industry Details */}
        {selectedIndustry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const industry = industries.find(ind => ind.id === selectedIndustry);
                if (!industry) return null;
                
                return (
                  <>
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{industry.title}</h3>
                        <p className="text-gray-600 mt-1">MES Detaylı Çözüm Bilgileri</p>
                      </div>
                      <button
                        onClick={() => setSelectedIndustry(null)}
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
                          <industry.icon className="h-6 w-6 text-blue-600 mr-3" />
                          Çözüm Genel Bakış
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-lg">{industry.detailedInfo.overview}</p>
                      </div>

                      {/* Image */}
                      <div className="relative">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-80 object-cover rounded-2xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h5 className="text-xl font-bold">{industry.title}</h5>
                          <p className="text-gray-200">{industry.description}</p>
                        </div>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                            İş Zorlukları
                          </h4>
                          <div className="space-y-4">
                            {industry.detailedInfo.challenges.map((challenge, index) => (
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
                            MES Çözümleri
                          </h4>
                          <div className="space-y-4">
                            {industry.detailedInfo.solutions.map((solution, index) => (
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
                          Elde Edilen Sonuçlar
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {industry.detailedInfo.results.map((result, index) => (
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
                          Kullanılan MES Teknolojileri
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {industry.detailedInfo.technologies.map((tech, index) => (
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
                          Müşteri Deneyimi
                        </h4>
                        <blockquote className="text-gray-700 italic mb-6 text-xl leading-relaxed">
                          "{industry.detailedInfo.clientTestimonial.quote}"
                        </blockquote>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <industry.icon className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 text-lg">{industry.detailedInfo.clientTestimonial.author}</div>
                            <div className="text-gray-600">{industry.detailedInfo.clientTestimonial.position}</div>
                            <div className="text-blue-600 font-medium">{industry.detailedInfo.clientTestimonial.company}</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics Summary */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                        <h4 className="text-xl font-bold mb-6 text-center">Anahtar Performans Göstergeleri</h4>
                        <div className="grid md:grid-cols-4 gap-6 text-center">
                          {industry.sensors.map((sensor, index) => (
                            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                              <div className="text-2xl font-bold mb-2">
                                {index === 0 ? '99.8%' : index === 1 ? '24/7' : index === 2 ? '%45' : '0.1s'}
                              </div>
                              <div className="text-blue-100 text-sm">{sensor}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg">
                          Bu Çözümü Talep Et
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
    </section>
  );
};

export default SensorAnalytics;