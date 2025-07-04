import { Rocket } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-gate-green" />
            <span className="text-xl font-bold">GATE Space Video</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('overview')} className="hover:text-primary transition-colors">Übersicht</button>
            <button onClick={() => scrollToSection('packages')} className="hover:text-primary transition-colors">Pakete</button>
            <button onClick={() => scrollToSection('concept')} className="hover:text-primary transition-colors">Konzept</button>
            <button onClick={() => scrollToSection('timeline')} className="hover:text-primary transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Kontakt</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;