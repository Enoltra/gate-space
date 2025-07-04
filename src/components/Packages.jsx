import { packages } from '../data/packagesData';
import PackageCard from './PackageCard';

const Packages = ({ scrollToSection }) => {
  return (
    <section id="packages" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Unsere Pakete</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wählen Sie das perfekte Paket für Ihre Bedürfnisse und Ihr Budget
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} scrollToSection={scrollToSection} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;