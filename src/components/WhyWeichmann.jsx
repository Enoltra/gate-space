import { Rocket, MapPin, Award, Settings, CheckCircle, Sparkles } from 'lucide-react';

const WhyWeichmann = () => {
    const reasons = [
        { icon: Rocket, title: "Aerospace-Expertise", text: "Langjährige Erfahrung mit High-Tech-Unternehmen und komplexen technischen Produktionen" },
        { icon: MapPin, title: "Lokale Präsenz", text: "Wien-basiert mit perfekter Kenntnis der Drehorte am Flughafen und Hafen Wien" },
        { icon: Award, title: "Cinematische Qualität", text: "Bewährte Referenzen im Industrial/Tech-Bereich mit Hollywood-Standard" },
        { icon: Settings, title: "Komplettlösung", text: "Von Konzept bis Auslieferung alles aus einer Hand - keine Schnittstellen" },
        { icon: CheckCircle, title: "Flexibilität", text: "Anpassung an spezielle Sicherheits- und Betriebsanforderungen" },
        { icon: Sparkles, title: "Maßgeschneiderte Pakete", text: "Drei verschiedene Pakete für unterschiedliche Budgets und Anforderungen" },
    ];

    return (
        <section id="why-weichmann" className="py-20 section-gradient">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Warum Weichmann für Ihr GATE Space Video?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="glass-effect hover-lift p-6 rounded-lg">
                            <reason.icon className="h-12 w-12 text-gate-green mb-4" />
                            <h3 className="text-xl font-bold">{reason.title}</h3>
                            <p className="text-muted-foreground mt-2">{reason.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyWeichmann;