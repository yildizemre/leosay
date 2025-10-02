import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Factory, Eye, Activity, BarChart3, CheckCircle, AlertTriangle, Database, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400 to-blue-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Factory className="h-4 w-4" />
                <span>MES - Manufacturing Execution System</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Görüntü İşleme ile
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> MES Çözümü</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Üretim süreçlerini görüntü işleme teknolojisi ile yönetin. Kalite kontrolü, süreç izleme ve üretim optimizasyonu. SAP, Oracle, Microsoft Dynamics gibi ERP/CRM sistemleriyle tam entegrasyon.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Factory className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Üretim İzleme</div>
                  <div className="text-sm text-gray-600">Gerçek zamanlı süreç takibi</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Eye className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-gray-900">Kalite Kontrol</div>
                  <div className="text-sm text-gray-600">Görüntü işleme ile otomatik</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Üretim Hattı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.8%</div>
                <div className="text-sm text-gray-600">Kalite Doğruluğu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Sürekli İzleme</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <span className="font-semibold">MES Demo</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link to="/contact" className="group bg-white text-gray-700 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">MES Tanıtım Videosu</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Entegre olduğumuz ERP/CRM/MRP sistemleri</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="text-lg font-bold text-gray-400">SAP</div>
                <div className="text-lg font-bold text-gray-400">ORACLE</div>
                <div className="text-lg font-bold text-gray-400">DYNAMICS</div>
                <div className="text-lg font-bold text-gray-400">SALESFORCE</div>
              </div>
            </div>
          </div>

          {/* Right Column - Live MES Dashboard */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Canlı MES Kontrol Paneli</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Production Status */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-green-600 font-medium">Aktif Hat</p>
                        <p className="text-2xl font-bold text-green-900">8</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-xs text-green-600 mt-2">Verimlilik: %94</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-orange-600 font-medium">Planlı Bakım</p>
                        <p className="text-2xl font-bold text-orange-900">2</p>
                      </div>
                      <AlertTriangle className="h-8 w-8 text-orange-600" />
                    </div>
                    <p className="text-xs text-orange-600 mt-2">Öngörülü bakım</p>
                  </div>
                </div>

                {/* Live Production Feed */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">Üretim Durumu</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-gray-600">CANLI</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-sm text-gray-700">Hat 1 - Elektronik</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-200">
                      <span className="text-sm text-gray-700">Hat 2 - Montaj</span>
                      <span className="text-xs text-green-600 font-medium">Aktif</span>
                    </div>
                  </div>
                </div>

                {/* Production Metrics */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Üretim Metrikleri</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Günlük Üretim</span>
                      <span className="text-sm font-medium text-green-600">1,247 adet</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Kalite Skoru</span>
                      <span className="text-sm font-medium text-blue-600">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">MES Aktif</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
              <div className="text-xs text-gray-600">
                <span className="font-medium text-green-600">ERP</span> entegre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;