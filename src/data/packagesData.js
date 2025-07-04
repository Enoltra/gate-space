import { Video, Film, Crown } from 'lucide-react';

export const packages = [{
        id: 'low-budget',
        name: 'Low Budget',
        price: '€4.000',
        duration: '~20 Sekunden',
        productionDays: '1 Tag',
        locations: '1 Standort',
        features: [
            'Grundlegende Videobearbeitung',
            'Professionelle Kameraführung',
            'Standardbeleuchtung',
            'Einfacher Schnitt',
            'HD-Qualität (1080p)',
            'Grundlegende Farbkorrektur'
        ],
        icon: Video,
        color: 'bg-blue-600',
        popular: false
    },
    {
        id: 'cinematic-banner',
        name: 'Cinematic Banner Video',
        price: '€6.500',
        duration: '20-30 Sekunden',
        productionDays: '2 Tage (15. & 16. Juli)',
        locations: '2 Standorte',
        features: [
            'Professionelle Videobearbeitung',
            'Kinematographische Kameraführung',
            'Dramatische Beleuchtung',
            'Basis-Animationen',
            '4K-Qualität',
            'Erweiterte Farbkorrektur',
            'Professionelles Sound Design'
        ],
        icon: Film,
        color: 'bg-green-600',
        popular: true
    },
    {
        id: 'cinematic-masterpiece',
        name: 'Cinematic Masterpiece',
        price: '€9.800',
        duration: '30-45 Sekunden',
        productionDays: '2+ Tage (15. & 16. Juli)',
        locations: '2+ Standorte',
        features: [
            'Premium Videobearbeitung',
            'Hollywood-Level Kinematographie',
            'Komplexe Animationen & VFX',
            'Drohnenaufnahmen',
            '4K Ultra HD Qualität',
            'Professionelle Farbkorrektur',
            'Orchestrales Sound Design',
            'Motion Graphics',
            '3 Korrektur-Runden'
        ],
        icon: Crown,
        color: 'bg-purple-600',
        popular: false
    }
];