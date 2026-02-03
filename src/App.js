import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, Star, Facebook, ChevronDown, Utensils, Heart, Award, Users, Instagram, Mail, ArrowRight } from 'lucide-react';

const LArcolaioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Chi Siamo' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Galleria' },
    { id: 'contact', label: 'Contatti' }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualità Garantita",
      description: "Ingredienti freschi e locali selezionati con cura ogni giorno"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestione Femminile",
      description: "Un ristorante orgogliosamente gestito da donne con passione"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Tradizione Umbra",
      description: "Ricette autentiche tramandate di generazione in generazione"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Cucina Casalinga",
      description: "Ogni piatto preparato con amore come a casa propria"
    }
  ];

  const menuCategories = [
    {
      name: "Antipasti",
      items: [
        { name: "Bruschette Miste", description: "Pomodoro, funghi, e verdure di stagione", price: "€8" },
        { name: "Salumi e Formaggi Locali", description: "Selezione di prodotti umbri", price: "€12" },
        { name: "Crostini Neri", description: "Specialità umbra con fegatini", price: "€7" }
      ]
    },
    {
      name: "Primi Piatti",
      items: [
        { name: "Strangozzi al Tartufo", description: "Pasta fresca con tartufo nero locale", price: "€16" },
        { name: "Risotto ai Funghi Porcini", description: "Riso carnaroli con porcini freschi", price: "€14" },
        { name: "Umbrichelli Cacio e Pepe", description: "Pasta tradizionale umbra", price: "€12" }
      ]
    },
    {
      name: "Secondi",
      items: [
        { name: "Agnello alla Scottadito", description: "Carne locale alla brace", price: "€18" },
        { name: "Piccione alla Ghiotta", description: "Ricetta tradizionale umbra", price: "€20" },
        { name: "Salsicce e Lenticchie", description: "Piatto tipico di Colfiorito", price: "€15" }
      ]
    }
  ];

  const galleryImages = [
    { 
      url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
      label: "Pasta Fresca Fatta in Casa",
      alt: "Fresh homemade Italian pasta"
    },
    { 
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      label: "Antipasti Tradizionali",
      alt: "Traditional Italian appetizers platter"
    },
    { 
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      label: "Bruschette e Crostini",
      alt: "Italian bruschetta and crostini"
    },
    { 
      url: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80",
      label: "Tartufo Nero Umbro",
      alt: "Black truffle from Umbria"
    },
    { 
      url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      label: "Vini Selezionati",
      alt: "Selected Italian wines"
    },
    { 
      url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      label: "Dolci della Casa",
      alt: "Traditional Italian desserts"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-3 border-b border-orange-100' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-br from-orange-600 to-red-600' : 'bg-white/20 backdrop-blur-md'
              }`}>
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-orange-700' : 'text-white'
              }`}>
                <span className="font-serif italic">L'Arcolaio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-orange-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } ${activeSection === item.id ? 'text-orange-600 font-bold' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></span>
                  )}
                </button>
              ))}
              <button
                onClick={() => setShowBookingModal(true)}
                className="group relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Prenota</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-orange-50' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-orange-100">
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-bold shadow-md' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowBookingModal(true);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                Prenota Ora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
            alt="Italian restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-orange-900/60"></div>
          {/* Animated pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            {/* Modern rating badge with glassmorphism */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <span className="text-white font-semibold">4.1</span>
              <span className="text-orange-100 text-sm">• 105 recensioni</span>
            </div>
            
            {/* Main heading with modern typography */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 font-serif italic tracking-tight">
              L'Arcolaio
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-2xl sm:text-3xl md:text-4xl text-orange-100 tracking-wider font-light">
                Cucina Tradizionale Italiana
              </p>
              
              <p className="text-lg sm:text-xl text-orange-200/90 max-w-2xl mx-auto leading-relaxed">
                Nel cuore di Colfiorito, dove la tradizione umbra incontra la passione culinaria
              </p>
            </div>

            {/* CTA Buttons with modern design */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a
                href="tel:+393342150685"
                className="group relative bg-white text-orange-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Phone className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Chiama Ora</span>
              </a>
              <button
                onClick={() => scrollToSection('menu')}
                className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-white hover:text-orange-700 hover:border-white flex items-center space-x-2 shadow-lg hover:shadow-2xl"
              >
                <Utensils className="w-5 h-5" />
                <span>Vedi Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Women-owned badge with modern design */}
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-md px-6 py-3 rounded-full border border-orange-400/50 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">Gestione Femminile</span>
              <span className="text-orange-100 text-sm">• Women-Owned</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Perché L'Arcolaio
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La nostra passione per l'eccellenza culinaria si riflette in ogni dettaglio. 
              Scopri cosa rende speciale la nostra cucina tradizionale umbra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-2xl inline-block mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 relative overflow-hidden">
        {/* Background with texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-orange-50"></div>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1920&q=80"
            alt="Restaurant background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Il Nostro Menu
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <div className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-2xl font-bold mb-4">
              €20–30 a persona
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Piatti della tradizione preparati con ingredienti freschi e locali
            </p>
          </div>

          <div className="space-y-8">
            {menuCategories.map((category, catIndex) => (
              <div key={catIndex} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 px-8 py-6 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-white font-serif relative z-10">
                    {category.name}
                  </h3>
                </div>
                <div className="p-8 space-y-5">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start pb-5 border-b border-gray-100 last:border-0 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent p-5 -m-5 rounded-2xl transition-all duration-300 group/item"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/item:text-orange-700 transition-colors duration-300 flex items-center space-x-2">
                          <span>{item.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all duration-300" />
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-6 text-2xl font-bold bg-gradient-to-br from-orange-600 to-red-600 bg-clip-text text-transparent group-hover/item:scale-110 transition-transform duration-300">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 text-lg">
              * Menu completo disponibile al ristorante • Piatti di stagione e specialità giornaliere
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Le Nostre Specialità
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un assaggio della nostra cucina tradizionale
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Modern gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {image.label}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/85 via-amber-900/80 to-orange-900/85"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-serif">
              Vieni a Trovarci
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Siamo pronti ad accoglierti per un'esperienza culinaria indimenticabile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-xl inline-block mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dove Siamo</h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Via Adriatica, 222<br />
                06034 Colfiorito PG<br />
                Italia
              </p>
              <a
                href="https://maps.app.goo.gl/WW3Ck7bTibrHJ1nE6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition-colors duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                <MapPin className="w-4 h-4" />
                <span>Apri in Maps</span>
              </a>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-xl inline-block mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contattaci</h3>
              <p className="text-gray-600 mb-4 text-lg">
                Per prenotazioni e informazioni
              </p>
              <a
                href="tel:+393342150685"
                className="inline-block text-orange-600 hover:text-orange-700 font-bold text-xl mb-6 transition-colors duration-300"
              >
                +39 334 215 0685
              </a>
              <br />
              <a
                href="https://m.facebook.com/larcolaio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium"
              >
                <Facebook className="w-5 h-5" />
                <span>Seguici su Facebook</span>
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white p-4 rounded-xl inline-block mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Orari</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-bold text-lg">Aperto Ora</span>
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  Chiusura: 21:30
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border-2 border-orange-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-orange-700 block mb-2">I Nostri Servizi:</strong>
                  • Servizio al Tavolo<br />
                  • Consegna Contactless<br />
                  • Prenotazione Consigliata
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-serif italic">L'Arcolaio</h3>
            </div>
            
            <p className="text-gray-400 text-lg mb-2">
              Cucina Tradizionale Italiana
            </p>
            <p className="text-orange-400 font-medium mb-6">
              Gestione Femminile • Women-Owned
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 mb-6">
              <a href="tel:+393342150685" className="hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+39 334 215 0685</span>
              </a>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Via Adriatica, 222 • Colfiorito PG</span>
              </span>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://m.facebook.com/larcolaio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/WW3Ck7bTibrHJ1nE6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@larcolaio.it"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 L'Arcolaio. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full transform animate-scale-in">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white font-serif">
                  Prenota il Tuo Tavolo
                </h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Per prenotare un tavolo da L'Arcolaio, ti preghiamo di contattarci telefonicamente o via Facebook.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+393342150685"
                  className="flex items-center justify-center space-x-3 w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
                >
                  <Phone className="w-6 h-6" />
                  <span>Chiama Ora: +39 334 215 0685</span>
                </a>
                
                <a
                  href="https://m.facebook.com/larcolaio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-lg"
                >
                  <Facebook className="w-6 h-6" />
                  <span>Scrivici su Facebook</span>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-orange-700">Orari di apertura:</strong><br />
                  Chiusura ore 21:30<br />
                  <span className="text-green-600 font-medium">• Aperto Ora</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LArcolaioWebsite;