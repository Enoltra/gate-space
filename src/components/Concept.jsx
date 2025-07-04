import { CheckCircle } from 'lucide-react';

const Concept = () => {
    return (
        <section id="concept" className="py-20 section-gradient">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Creative Konzept</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Kinematographische Qualität mit professioneller Kameraführung und dramatischer Beleuchtung
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="animate-slide-in-left">
                        <h3 className="text-2xl font-bold mb-6">Visuelle Strategie</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-gate-green mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Kinematographische Qualität</h4>
                                    <p className="text-muted-foreground">Professionelle Kameraführung auf Hollywood-Niveau</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-gate-green mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Dramatische Beleuchtung</h4>
                                    <p className="text-muted-foreground">Technische Komponenten in perfektem Licht</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-gate-green mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Dynamische Kamerabewegungen</h4>
                                    <p className="text-muted-foreground">Drohnenaufnahmen, Slider, Gimbal für maximale Wirkung</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <CheckCircle className="h-6 w-6 text-gate-green mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold">Emotionale Höhepunkte</h4>
                                    <p className="text-muted-foreground">Spektakuläre Thruster-Testsequenz als Climax</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="animate-slide-in-right">
                        <div className="tech-border p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-4">Farbschema & Ästhetik</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Primärfarben</h4>
                                    <div className="flex space-x-2">
                                        <div className="w-8 h-8 bg-black rounded border"></div>
                                        <div className="w-8 h-8 bg-gray-600 rounded border"></div>
                                        <div className="w-8 h-8 bg-gray-400 rounded border"></div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Schwarz, Grau/Silber</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Akzentfarbe</h4>
                                    <div className="w-8 h-8 gate-green-bg rounded border"></div>
                                    <p className="text-sm text-muted-foreground mt-1">GATE Space Grün</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Mood</h4>
                                    <p className="text-muted-foreground">Professionell, innovativ, kraftvoll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concept;