import { useState, useEffect } from 'react';
import { Euro, MapPin, Play, Mail } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      <div className={`container mx-auto px-4 text-center relative z-10 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 gate-green-bg text-black font-semibold px-4 py-2 rounded-md">
            Aerospace Excellence
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
            GATE Space
            <span className="block text-gate-green">Video Proposal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Hochwertige Imagefilm-Produktion | Flexible Pakete für jeden Bedarf
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2">
              <Euro className="h-5 w-5 text-gate-green" />
              <span className="text-lg font-semibold">Ab €4.000</span>
            </div>
            <div className="h-6 w-px bg-border hidden md:block" />
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gate-green" />
              <span className="text-lg font-semibold">2 Standorte verfügbar</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('packages')}
              className="px-6 py-3 gate-green-bg hover:bg-primary/90 text-black font-semibold rounded-lg pulse-green flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Pakete ansehen
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-black font-semibold rounded-lg flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;