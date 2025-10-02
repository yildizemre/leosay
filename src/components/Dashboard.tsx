import React from 'react';
import { TrendingUp, TrendingDown, Factory, Eye, Activity, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  const metrics = [
    {
      title: 'Aktif Üretim Hattı',
      value: '8',
      change: '+2',
      trend: 'up',
      icon: Factory,
      color: 'green'
    },
    {
      title: 'Kalite Uyarısı',
      value: '3',
      change: '-5',
      trend: 'down',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      title: 'Kalite Skoru',
      value: '98.7%',
      change: '+2.3%',
      trend: 'up',
      icon: Eye,
      color: 'blue'
    },
    {
      title: 'Üretim Verimliliği',
      value: '94.2%',
      change: '+8.7%',
      trend: 'up',
      icon: Activity,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-50 text-green-600 border-green-200',
      orange: 'bg-orange-50 text-orange-600 border-orange-200',
      blue: 'bg-blue-50 text-blue-600 border-blue-200',
      purple: 'bg-purple-50 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            MES Kontrol
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Paneli</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Üretim süreçlerinizi gerçek zamanlı izleyin ve yönetin
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">MES Üretim Kontrol Paneli</h3>
                <p className="text-gray-600 mt-1">Son güncelleme: 2 dakika önce</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Canlı</span>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${getColorClasses(metric.color)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8" />
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span>{metric.change}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Chart */}
              <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Üretim Trendleri</h4>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg font-medium">1S</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">24S</button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">7G</button>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-64 bg-white rounded-xl border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 font-medium">Üretim Performans Grafikleri</p>
                    <p className="text-sm text-gray-400 mt-1">Gerçek zamanlı veri güncellemeleri</p>
                  </div>
                </div>
              </div>

              {/* Side Panel */}
              <div className="space-y-6">
                {/* Active Production Lines */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Aktif Üretim Hatları</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <Factory className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 1 - Elektronik</p>
                        <p className="text-xs text-gray-600">Verimlilik: %94</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 2 - Montaj</p>
                        <p className="text-xs text-gray-600">Kalite: %98.7</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Hat 3 - Bakım</p>
                        <p className="text-xs text-gray-600">Planlı bakım: 2 saat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Son Aktiviteler</h4>
                  <div className="space-y-3">
                    {[
                      { action: 'Yeni iş emri oluşturuldu', time: '2 dk önce', type: 'production' },
                      { action: 'Kalite raporu tamamlandı', time: '5 dk önce', type: 'quality' },
                      { action: 'ERP senkronizasyonu', time: '12 dk önce', type: 'integration' },
                      { action: 'Üretim hedefi güncellendi', time: '18 dk önce', type: 'planning' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          item.type === 'production' ? 'bg-green-500' :
                          item.type === 'quality' ? 'bg-blue-500' :
                          item.type === 'integration' ? 'bg-purple-500' : 'bg-orange-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{item.action}</p>
                          <p className="text-xs text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;