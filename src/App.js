import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, MapPin, Clock, Star, Facebook, Instagram, Mail, 
  ChevronDown, Heart, Award, Users, MessageCircle
} from 'lucide-react';

const LArcolaioWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'menu', 'about', 'reservation', 'blog'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
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
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'Chi Siamo' },
    { id: 'reservation', label: 'Prenotazioni' },
    { id: 'blog', label: 'Blog' }
  ];

  const stats = [
    { number: '400+', label: 'Piatti' },
    { number: '78+', label: 'Ristoranti' },
    { number: '40k+', label: 'Clienti Felici' }
  ];

  const dishes = [
    {
      name: 'Strangozzi al Tartufo',
      description: 'Pasta fresca con tartufo nero di Norcia',
      price: '€16',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
      category: 'Primi'
    },
    {
      name: 'Agnello alla Scottadito',
      description: 'Carne locale alla brace con erbe',
      price: '€22',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
      category: 'Secondi'
    },
    {
      name: 'Bruschette Tradizionali',
      description: 'Selezione di bruschette umbre',
      price: '€8',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80',
      category: 'Antipasti'
    },
    {
      name: 'Risotto ai Funghi Porcini',
      description: 'Riso carnaroli con porcini freschi',
      price: '€14',
      image: 'https://images.unsplash.com/photo-1476124369491-7a0d99cd3c47?w=600&q=80',
      category: 'Primi'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5E6D3] font-serif">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#F5E6D3] shadow-xl py-3' : 'bg-[#F5E6D3] py-4 sm:py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">L</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">L'Arcolaio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-orange-600 ${
                    activeSection === item.id ? 'text-orange-600 font-bold' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#F5E6D3] border-t border-orange-200">
            <div className="px-4 py-6 space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl ${
                    activeSection === item.id 
                      ? 'bg-orange-500 text-white font-bold' 
                      : 'text-gray-700 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 overflow-hidden px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-600 font-sans">
                  BENVENUTI NEL NOSTRO RISTORANTE
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Goditi un cibo 
                  <span className="block mt-2">sano e delizioso.</span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+393342150685"
                  className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Ordina Ora
                </a>
                <button
                  onClick={() => scrollToSection('reservation')}
                  className="bg-transparent border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-semibold hover:bg-black hover:text-white transition-all duration-300 text-center"
                >
                  Prenota
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
              {/* Main large image */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" 
                  alt="Piatto principale" 
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating images - hidden on mobile */}
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80" 
                alt="Piatto 1" 
                className="absolute -top-8 -right-8 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 object-cover rounded-2xl shadow-2xl hidden md:block"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
              
              <img 
                src="https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=200&q=80" 
                alt="Piatto 2" 
                className="absolute top-1/4 -left-8 lg:-left-12 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 object-cover rounded-2xl shadow-2xl hidden md:block"
                style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}
              />
              
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&q=80" 
                alt="Piatto 3" 
                className="absolute bottom-8 -left-6 lg:-left-8 w-28 sm:w-32 lg:w-36 h-28 sm:h-32 lg:h-36 object-cover rounded-2xl shadow-2xl hidden md:block"
                style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#F5E6D3] to-[#E8D4BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80" 
                alt="Croissant" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 font-sans text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Explore Dishes Button */}
              <div className="text-center mb-6 sm:mb-8">
                <button
                  onClick={() => scrollToSection('menu')}
                  className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 group"
                >
                  <span>Esplora i Piatti</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Description */}
              <div className="mt-6 sm:mt-8 max-w-2xl mx-auto text-center px-4">
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                  I nostri croissant sono burrosi e sfogliati. Design by Fluttertop Perfect breakfast! 
                  Hanno quell'autentico sapore francese e sono sempre freschi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-20 bg-[#F5E6D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">I Nostri Piatti Speciali</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Dalle classiche ricette tradizionali alle creazioni moderne. Ogni piatto preparato con passione.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {dishes.map((dish, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-sans font-semibold text-orange-600">
                    {dish.category}
                  </div>
                  <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 font-sans line-clamp-2">{dish.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-bold text-orange-600">{dish.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
              Vedi Menu Completo
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Chi Siamo <span className="text-orange-500">L'Arcolaio</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Nel cuore di Colfiorito, L'Arcolaio rappresenta la vera essenza della cucina tradizionale italiana. 
                La nostra passione per i sapori autentici e gli ingredienti locali si riflette in ogni piatto che serviamo.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Con oltre 105 recensioni positive, ci impegniamo ogni giorno a offrire un'esperienza culinaria 
                che celebra le ricette della tradizione umbra, preparate con amore e dedizione.
              </p>
              
              <div className="flex items-center space-x-2 bg-orange-50 px-4 sm:px-6 py-3 rounded-full inline-flex">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-600 text-sm sm:text-base">Attività a Conduzione Femminile</span>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Anni</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.1★</div>
                  <div className="text-xs sm:text-sm text-gray-600">Valutazione</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">105+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Recensioni</div>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" 
                alt="Interno del ristorante" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">Migliore Qualità</div>
                    <div className="text-xs sm:text-sm text-gray-600">Ingredienti</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 sm:py-20 bg-[#F5E6D3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Prenota un Tavolo</h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Prenota il tuo tavolo per un'esperienza culinaria indimenticabile. 
            Chiamaci o scrivici per prenotare.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Call */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Chiamaci</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Prenota telefonicamente</p>
              <a
                href="tel:+393342150685"
                className="text-orange-600 font-bold text-base sm:text-lg hover:text-orange-700"
              >
                +39 334 215 0685
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Messaggio diretto</p>
              <a
                href="https://wa.me/393342150685"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold text-base sm:text-lg hover:text-green-700"
              >
                Chatta Ora
              </a>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-sans">
                  <span className="font-bold">Aperto:</span> 12:00 - 21:30
                </span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span className="text-green-600 font-bold">● Aperto Ora</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="blog" className="py-12 sm:py-16 bg-[#2C2416] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Using Tailwind's column system for better mobile layout */}
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8 sm:space-y-0 mb-8 sm:mb-12">
            {/* Navigate */}
            <div className="break-inside-avoid">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Naviga</h3>
              <ul className="space-y-2 font-sans text-sm">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Menu */}
            <div className="break-inside-avoid">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Menu</h3>
              <ul className="space-y-2 text-gray-400 font-sans text-sm">
                <li>Antipasti</li>
                <li>Primi Piatti</li>
                <li>Secondi</li>
                <li>Dolci</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="break-inside-avoid">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Seguici</h3>
              <ul className="space-y-2 font-sans text-sm">
                <li>
                  <a href="https://m.facebook.com/larcolaio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="break-inside-avoid">
              <h3 className="font-bold mb-4 text-base sm:text-lg">Contatti</h3>
              <ul className="space-y-3 text-gray-400 font-sans text-sm">
                <li className="flex items-start space-x-2">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="tel:+393342150685" className="hover:text-orange-500">+39 334 215 0685</a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Via Adriatica, 222, Colfiorito PG</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <a href="mailto:info@larcolaio.it" className="hover:text-orange-500">info@larcolaio.it</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm font-sans px-4 mb-3">
              ©2025 L'ARCOLAIO Tutti i diritti riservati • 
              <span className="text-orange-500 ml-2">Progettato da Fluttertop</span>
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-6 px-4">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">Licenze</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">Registro Modifiche</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm">Guida di Stile</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/393342150685"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default LArcolaioWebsite;