import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart3, ChevronDown, Camera, Cpu, Zap, Database, Eye, Activity, Layers, Thermometer, HardHat, Shield, Factory, Shirt, Building, Users, Phone, Mail, FileText, BookOpen, Award, Headphones, Globe, Utensils, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const getProductHref = (productName: string) => {
    const productRoutes: { [key: string]: string } = {
      [t('product.safety-ai')]: '/safety-ai',
      [t('product.quality-ai')]: '/quality-ai',
      [t('product.textile-ai')]: '/textile-ai',
      [t('product.sensor-analytics')]: '/sensor-analytics',
      [t('product.image-api')]: '/image-api',
    };
    return productRoutes[productName] || '#';
  };

  const getSectorHref = (sectorName: string) => {
    const sectorRoutes: { [key: string]: string } = {
      [t('sector.construction')]: '/construction-safety',
      [t('sector.automotive')]: '/automotive',
      [t('sector.textile')]: '/textile-ai',
      [t('sector.food')]: '/food-beverage',
      [t('sector.manufacturing')]: '/manufacturing',
      [t('sector.energy')]: '/energy'
    };
    return sectorRoutes[sectorName] || '#';
  };

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: t('nav.products'),
      items: [
        { 
          name: 'MES Üretim Kontrol', 
          icon: Factory, 
          desc: 'Görüntü işleme ile üretim yönetimi',
          color: 'blue',
          badge: t('common.popular'),
          href: '/production-control'
        },
        { 
          name: 'MES Kalite Kontrol', 
          icon: Eye, 
          desc: 'Görüntü işleme ile kalite kontrolü',
          color: 'blue',
          badge: t('common.new'),
          href: '/quality-ai'
        },
        { 
          name: 'MES Süreç İzleme', 
          icon: Activity, 
          desc: 'Üretim süreçlerini görsel takip',
          color: 'purple',
          href: '/process-monitoring'
        },
        { 
          name: 'ERP/CRM Entegrasyonu', 
          icon: Database, 
          desc: 'SAP, Oracle, Dynamics entegrasyonu',
          color: 'green',
          href: '/erp-integration'
        },
        { 
          name: 'MES API', 
          icon: Camera, 
          desc: 'MES entegrasyon API\'si',
          color: 'indigo',
          href: '/mes-api'
        },
      ]
    },
    {
      name: t('nav.sectors'),
      items: [
        { 
          name: t('sector.electronics'), 
          icon: Cpu, 
          desc: t('sector.electronics.desc'),
          color: 'blue',
          href: '/electronics'
        },
        { 
          name: t('sector.automotive'), 
          icon: Cpu, 
          desc: t('sector.automotive.desc'),
          color: 'blue',
          href: '/automotive'
        },
        { 
          name: t('sector.machinery'), 
          icon: Factory, 
          desc: t('sector.machinery.desc'),
          color: 'purple',
          href: '/machinery'
        },
        { 
          name: t('sector.food'), 
          icon: Utensils, 
          desc: t('sector.food.desc'),
          color: 'green',
          href: '/food-beverage'
        },
        { 
          name: t('sector.manufacturing'), 
          icon: Factory, 
          desc: t('sector.manufacturing.desc'),
          color: 'indigo',
          href: '/manufacturing'
        },
        { 
          name: t('sector.pharmaceutical'), 
          icon: Heart, 
          desc: t('sector.pharmaceutical.desc'),
          color: 'red',
          href: '/pharmaceutical'
        }
      ]
    },
    {
      name: t('nav.solutions'),
      items: [
        { 
          name: t('nav.small-business') || 'Küçük İşletme',
          icon: Building, 
          desc: 'Başlangıç seviyesi çözümler',
          color: 'blue',
          href: '/small-business'
        },
        { 
          name: t('nav.medium-business') || 'Orta Ölçekli',
          icon: Factory, 
          desc: 'Büyüyen işletmeler için',
          color: 'purple',
          href: '/medium-business'
        },
        { 
          name: t('nav.enterprise') || 'Kurumsal',
          icon: Users, 
          desc: 'Büyük organizasyonlar',
          color: 'green',
          href: '/enterprise'
        },
        { 
          name: t('nav.custom-solutions') || 'Özel Çözümler',
          icon: Cpu, 
          desc: 'Özelleştirilmiş sistemler',
          color: 'red',
          href: '/custom-solutions'
        }
      ]
    },
    {
      name: t('nav.resources'), 
      items: [
        { 
          name: t('nav.documentation') || 'Dokümantasyon',
          icon: FileText, 
          desc: 'API rehberleri ve kılavuzlar',
          color: 'blue',
          href: '/documentation'
        },
        { 
          name: t('nav.blog') || 'Blog',
          icon: BookOpen, 
          desc: 'Sektör haberleri ve içgörüler',
          color: 'purple',
          href: '/blog'
        },
        { 
          name: t('nav.support') || 'Destek Merkezi',
          icon: Headphones, 
          desc: '7/24 teknik destek',
          color: 'red',
          href: '/support'
        },
      ]
    },
    { name: t('nav.about'), href: '/about' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'text-red-600 bg-red-50 border-red-200',
      blue: 'text-blue-600 bg-blue-50 border-blue-200',
      purple: 'text-purple-600 bg-purple-50 border-purple-200',
      green: 'text-green-600 bg-green-50 border-green-200',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      yellow: 'text-yellow-600 bg-yellow-50 border-yellow-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColor = (badge: string) => {
    if (badge === t('common.new')) return 'bg-green-500 text-white';
    if (badge === t('common.popular')) return 'bg-blue-500 text-white';
    return 'bg-gray-500 text-white';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              setActiveDropdown(null);
            }}
          >
            <div className="relative">
              <img src="/images/logo-leo.png" alt="LEOSAY" className="h-8 w-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-6 animate-in slide-in-from-top-2 duration-200"
                      >
                        <div className="px-6 pb-4 border-b border-gray-100">
                          <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.name === t('nav.products') ? (language === 'tr' ? 'Yapay zeka destekli endüstriyel çözümler' : 'AI-powered industrial solutions') :
                             item.name === t('nav.sectors') ? (language === 'tr' ? 'Sektörel özelleştirilmiş sistemler' : 'Industry-specific customized systems') :
                             item.name === t('nav.solutions') ? (language === 'tr' ? 'İşletme büyüklüğüne göre paketler' : 'Packages by business size') :
                             (language === 'tr' ? 'Öğrenme ve destek kaynakları' : 'Learning and support resources')}
                          </p>
                        </div>
                        <div className="px-6 pt-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href || '#'}
                              className="group flex items-center p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className={`p-2 rounded-lg mr-4 transition-all duration-200 ${getColorClasses(subItem.color || 'blue')}`}>
                                <subItem.icon className="h-5 w-5" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                    {subItem.name}
                                  </div>
                                  {subItem.badge && (
                                    <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(subItem.badge)}`}>
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <div className="text-sm text-gray-500 mt-0.5">{subItem.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {item.name === t('nav.products') && (
                          <div className="px-6 pt-4 mt-4 border-t border-gray-100">
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                              <div className="flex items-center space-x-3">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                                  <Zap className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900">{t('nav.free-demo')}</div>
                                  <div className="text-sm text-gray-600">
                                    {language === 'tr' ? 'Tüm özellikleri test edin' : 'Test all features'}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-bold">{language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium">
              <Phone className="h-4 w-4" />
              <Link to="/contact" className="flex items-center space-x-2">
                <span>{t('nav.contact')}</span>
              </Link>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold flex items-center space-x-2 group">
              <span>{t('nav.free-demo')}</span>
              <Zap className="h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
            <div className="text-xs text-gray-500 -mt-1">Endüstriyel AI</div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1 animate-in slide-in-from-top-1 duration-200">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href || '#'}
                              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <subItem.icon className="h-4 w-4" />
                              <div>
                                <div className="font-medium">{subItem.name}</div>
                                {subItem.badge && (
                                  <span className={`inline-block px-1.5 py-0.5 text-xs font-medium rounded-full mt-1 ${getBadgeColor(subItem.badge)}`}>
                                    {subItem.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    item.href && (
                      <Link
                        to={item.href}
                        className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
                <button className="flex items-center space-x-2 w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium">
                  <Phone className="h-4 w-4" />
                  <span>{t('nav.contact')}</span>
                </button>
                <button
                  onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
                  className="flex items-center space-x-2 w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'tr' ? 'English' : 'Türkçe'}</span>
                </button>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg font-semibold flex items-center justify-center space-x-2">
                  <span>{t('nav.free-demo')}</span>
                  <Zap className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;