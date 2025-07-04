import { CheckCircle, Star } from 'lucide-react';

const PackageCard = ({ pkg, scrollToSection }) => {
  const IconComponent = pkg.icon;
  return (
    <div
      className={`relative glass-effect hover-lift transition-all duration-300 rounded-lg ${
        pkg.popular ? 'ring-2 ring-primary scale-105' : 'ring-1 ring-border'
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="gate-green-bg text-black font-semibold px-4 py-1 rounded-full flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Beliebt
          </div>
        </div>
      )}
      
      <div className="p-6 text-center">
        <div className={`w-16 h-16 ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold">{pkg.name}</h3>
        <div className="text-4xl font-bold text-gate-green mt-2">{pkg.price}</div>
        <p className="text-muted-foreground">exkl. MwSt.</p>
      </div>
      
      <div className="px-6 pb-6 space-y-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Dauer:</span>
            <p className="text-muted-foreground">{pkg.duration}</p>
          </div>
          <div>
            <span className="font-semibold">Produktion:</span>
            <p className="text-muted-foreground">{pkg.productionDays}</p>
          </div>
          <div className="col-span-2">
            <span className="font-semibold">Standorte:</span>
            <p className="text-muted-foreground">{pkg.locations}</p>
          </div>
        </div>
        
        <hr className="border-border" />
        
        <div>
          <h4 className="font-semibold mb-3">Inkludierte Leistungen:</h4>
          <ul className="space-y-2">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-gate-green mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button
          onClick={() => scrollToSection('contact')}
          className={`w-full py-2 rounded-lg font-semibold ${
            pkg.popular 
              ? 'gate-green-bg hover:bg-primary/90 text-black' 
              : 'border border-primary text-primary hover:bg-primary hover:text-black'
          }`}
        >
          Paket wählen
        </button>
      </div>
    </div>
  );
};

export default PackageCard;