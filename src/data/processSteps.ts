import type { ProcessStep } from '../types'

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Erstberatung & Vor-Ort-Termin',
    description: 'Wir kommen zu Ihnen nach Hause und begutachten den Dachboden. Dabei besprechen wir Ihre Wünsche, prüfen die baulichen Voraussetzungen und beantworten alle Ihre Fragen. Die Beratung ist kostenlos und unverbindlich.',
    duration: '1-2 Stunden',
  },
  {
    step: 2,
    title: 'Individuelle Planung & Angebot',
    description: 'Auf Basis unserer Vor-Ort-Beratung erstellen wir eine detaillierte Planung mit Kostenaufstellung. Sie erhalten ein transparentes Angebot, das alle Leistungen klar aufschlüsselt. Es gibt keine versteckten Kosten.',
    duration: '1-2 Wochen',
  },
  {
    step: 3,
    title: 'Genehmigungsprüfung',
    description: 'Wir prüfen, ob Ihr Vorhaben verfahrensfrei ist oder ob eine Genehmigung benötigt wird. Bei verfahrensfreien Projekten kümmern wir uns um die Anzeige an die Stadt Hamburg. Bei genehmigungspflichtigen Vorhaben bereiten wir alle Unterlagen vor.',
    duration: '2-8 Wochen (je nach Fall)',
  },
  {
    step: 4,
    title: 'Statik & Detailplanung',
    description: 'Ein Tragwerksplaner berechnet die notwendigen statischen Maßnahmen. Wir erstellen die Detailplanung für alle Gewerke und koordinieren die beteiligten Handwerker. Hierdurch stellen wir sicher, dass alles aus einem Guss funktioniert.',
    duration: '1-2 Wochen',
  },
  {
    step: 5,
    title: 'Bauphase',
    description: 'Wir beginnen mit den Arbeiten – typischerweise mit dem Gerüstbau und der Dachhaut. Anschließend folgen die Dämmung, der Innenausbau, die Haustechnik und der Feinausbau. Wir arbeiten sauber und halten Sie über den Fortschritt auf dem Laufenden.',
    duration: '6-12 Wochen',
  },
  {
    step: 6,
    title: 'Abnahme & Übergabe',
    description: 'Nach Abschluss aller Arbeiten erfolgt die gemeinsame Abnahme mit Ihnen. Wir zeigen Ihnen alle Funktionen und Details und übergeben die Schlüssel. Eventuelle Mängel werden schnellstmöglich behoben. Sie haben danach ein einziehbar fertiges Dachgeschoss.',
    duration: '1 Tag',
  },
]
