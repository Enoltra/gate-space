import { Rocket, Video, Calendar, MapPin, Camera, Target, Zap } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 animate-slide-in-left">Projektübersicht</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GATE Space revolutioniert die Raumfahrtindustrie mit innovativen GATE Jetpack-Antriebssystemen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect hover-lift p-6 rounded-lg text-center">
            <Video className="h-12 w-12 text-gate-green mx-auto mb-4" />
            <h3 className="text-xl font-bold">Projekttyp</h3>
            <p>Corporate Website Video / Imagefilm</p>
          </div>
          <div className="glass-effect hover-lift p-6 rounded-lg text-center">
            <Calendar className="h-12 w-12 text-gate-green mx-auto mb-4" />
            <h3 className="text-xl font-bold">Drehtermine</h3>
            <p>15. & 16. Juli 2025</p>
          </div>
          <div className="glass-effect hover-lift p-6 rounded-lg text-center">
            <MapPin className="h-12 w-12 text-gate-green mx-auto mb-4" />
            <h3 className="text-xl font-bold">Drehorte</h3>
            <p>Werkstatt Flughafen & Testanlage Hafen Wien</p>
          </div>
          <div className="glass-effect hover-lift p-6 rounded-lg text-center">
            <Camera className="h-12 w-12 text-gate-green mx-auto mb-4" />
            <h3 className="text-xl font-bold">Produktion</h3>
            <p>Weichmann Video Productions</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-effect p-6 rounded-lg">
            <Target className="h-8 w-8 text-gate-green mb-2" />
            <h3 className="text-xl font-bold">Precision</h3>
            <p>Höchste technische Qualität und Fertigungspräzision in jedem Frame</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Zap className="h-8 w-8 text-fire-orange mb-2" />
            <h3 className="text-xl font-bold">Power</h3>
            <p>Demonstrierte Leistungsfähigkeit der revolutionären Thruster-Technologie</p>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <Rocket className="h-8 w-8 text-electric-blue mb-2" />
            <h3 className="text-xl font-bold">Progress</h3>
            <p>Visionäre Innovation für die Zukunft der Raumfahrtindustrie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;