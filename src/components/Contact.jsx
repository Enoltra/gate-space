import { Mail, Phone, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nächste Schritte</h2>
          <p className="text-xl text-muted-foreground">Bereit, Ihre Vision in bewegte Bilder zu verwandeln?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="tech-border p-6 rounded-lg">
              <h3 className="text-2xl font-bold">Kontakt & Information</h3>
              <p className="text-muted-foreground mb-6">Weichmann Video Productions</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-gate-green" /><span>patrick@weichmann.at</span></div>
                <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-gate-green" /><span>+43 676 931 5322</span></div>
                <div className="flex items-center space-x-3"><Calendar className="h-5 w-5 text-gate-green" /><span>Drehtermine: 15. & 16. Juli 2025</span></div>
              </div>
              <hr className="my-6 border-border" />
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Referenz-Nr:</strong> GATE-2025-001</p>
                <p><strong>Angebot gültig bis:</strong> 30 Tage ab Erstellung</p>
              </div>
            </div>
          </div>
          <div>
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Empfohlene nächste Schritte</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gate-green-bg flex items-center justify-center text-black text-sm font-bold mt-1 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">Paket auswählen</h4>
                    <p className="text-sm text-muted-foreground">Wählen Sie das passende Paket für Ihre Bedürfnisse</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gate-green-bg flex items-center justify-center text-black text-sm font-bold mt-1 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">Briefing-Meeting</h4>
                    <p className="text-sm text-muted-foreground">Strategische Abstimmung der kreativen Vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gate-green-bg flex items-center justify-center text-black text-sm font-bold mt-1 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">Vertragsunterzeichnung</h4>
                    <p className="text-sm text-muted-foreground">Anzahlung (50%) und finale Terminbestätigung</p>
                  </div>
                </div>
                 <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full gate-green-bg flex items-center justify-center text-black text-sm font-bold mt-1 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">Produktionsstart</h4>
                    <p className="text-sm text-muted-foreground">Beginn am 15. Juli 2025</p>
                  </div>
                </div>
              </div>
            </div>

<div className="mt-8 text-center">
  <a
    href="mailto:patrick@weichmann.at?subject=Anfrage%20für%20Briefing-Meeting%3A%20GATE%20Space%20Video&body=Hallo%20Weichmann%20Team%2C%0A%0Aich%20möchte%20gerne%20ein%20Briefing-Meeting%20für%20das%20GATE%20Space%20Videoprojekt%20vereinbaren.%0A%0AVielen%20Dank%20und%20freundliche%20Grüße%2C%0A"
    className="px-8 py-4 gate-green-bg hover:bg-primary/90 text-black font-semibold rounded-lg pulse-green flex items-center justify-center mx-auto"
  >
    <Mail className="mr-2 h-5 w-5" />
    Briefing-Meeting vereinbaren
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacti;