import { Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Rocket className="h-6 w-6 text-gate-green" />
          <span className="text-lg font-semibold">GATE Space Video Proposal</span>
        </div>
        <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
          "GATE Space revolutioniert die Raumfahrt – wir visualisieren diese Revolution."
        </p>
        <p className="text-sm text-muted-foreground">
          © 2025 Weichmann Video Productions. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;