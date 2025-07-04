const Timeline = () => {
  const milestones = [
    { number: 1, title: 'Pre-Production', week: 'Woche 1', tasks: ['Detaillierte Locationbesichtigung', 'Shotlist-Verfeinerung je nach Paket', 'Equipment-Vorbereitung', 'Drohnenflug-Genehmigungen (bei Premium-Paketen)'] },
    { number: 2, title: 'Production', week: '15. & 16. Juli 2025', tasks: ['Tag 1: Werkstatt Flughafen Wien (alle Pakete)', 'Tag 2: Testanlage Hafen Wien (Cinematic Pakete)', 'Backup-Tag für wetterabhängige Außenaufnahmen'] },
    { number: 3, title: 'Post-Production', week: 'Woche 3-4', tasks: ['Rohschnitt und erste Feedback-Runde', 'Animationen & VFX (je nach Paket)', 'Musik und professionelles Sound Design', 'Farbkorrektur und finale Optimierung'] },
    { number: 4, title: 'Finalisierung & Lieferung', week: 'Woche 4-5', tasks: ['Finale Korrektur-Runden', 'Export in allen gewünschten Formaten', 'Lieferung und Übergabe', 'Support für Integration'] },
  ];

  return (
    <section id="timeline" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Timeline & Meilensteine</h2>
          <p className="text-xl text-muted-foreground">Professioneller Produktionsablauf für optimale Ergebnisse</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          {milestones.map(milestone => (
            <div key={milestone.number} className="tech-border rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-8 h-8 rounded-full gate-green-bg flex items-center justify-center text-black font-bold flex-shrink-0">{milestone.number}</div>
                <div>
                  <h3 className="text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.week}</p>
                </div>
              </div>
              <ul className="text-sm space-y-1 ml-12">
                {milestone.tasks.map((task, index) => (
                  <li key={index}>• {task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;