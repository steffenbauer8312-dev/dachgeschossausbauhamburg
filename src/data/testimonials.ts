import type { Testimonial } from '../types'

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Miriam L.',
    quote:
      'Kompetente Begleitung von der ersten Bestandsaufnahme bis zur Abnahme. Besonders beeindruckt hat mich die schnelle Klärung der Erhaltungssatzungs-Frage mit dem Bezirksamt Eimsbüttel – wir hatten nach 5 Wochen die Genehmigung.',
    project: 'DG-Ausbau mit zwei Schleppgauben, 78 m²',
    location: 'Eppendorf',
  },
  {
    name: 'Familie K.',
    quote:
      'Wir haben unser Dachgeschoss in Eppendorf ausgebaut. Das Team hat den Zeitplan eingehalten, die Handwerker waren jeden Abend aufgeräumt, und die Qualität der Arbeiten ist hervorragend. Klare Empfehlung.',
    project: 'Komplettausbau, 68 m² inkl. Bad',
    location: 'Eppendorf',
  },
  {
    name: 'Stefan H.',
    quote:
      'Als Vermieter war mir die Rendite wichtig. Die Hamburger DG-Experten haben den Ausbau in 14 Wochen durchgezogen, die Förderung über KfW 261 perfekt eingespielt und die Mieterhöhung sauber dokumentiert.',
    project: 'DG-Ausbau als Kapitalanlage, 92 m²',
    location: 'Winterhude',
  },
  {
    name: 'Dr. Klaus B.',
    quote:
      'Unser denkmalgeschütztes Haus in Altona-Altstadt war eine besondere Herausforderung. Das Team hatte bereits Erfahrung mit dem Denkmalschutzamt und hat die Genehmigung in 6 Wochen bekommen. Sehr routiniert.',
    project: 'DG-Ausbau im Denkmal, 54 m²',
    location: 'Altona-Altstadt',
  },
  {
    name: 'Susanne W.',
    quote:
      'Von der Beratung bis zur Abnahme hat alles reibungslos funktioniert. Besonders gefreut hat mich, dass wir während der Bauzeit im Haus wohnen bleiben konnten. Saubere Arbeit, freundliches Team.',
    project: 'DG-Ausbau mit einer Schleppgaube',
    location: 'Eimsbüttel',
  },
  {
    name: 'Markus & Claudia R.',
    quote:
      'Der Bauleiter war täglich auf der Baustelle, jeder Schritt wurde uns erklärt. Wir hatten keine bösen Überraschungen, das Angebot wurde eingehalten. Unser neues Dachgeschoss ist ein Traum.',
    project: 'Komplettausbau mit Aufsparrendämmung, 84 m²',
    location: 'Bergedorf',
  },
  {
    name: 'Andrea S.',
    quote:
      'Wir wollten vermieten, brauchten aber eine ehrliche Einschätzung zur Wirtschaftlichkeit. Das Team hat uns vor einer überdimensionierten Lösung bewahrt und eine deutlich bessere Variante vorgeschlagen. Top-Beratung.',
    project: 'Effizienter DG-Ausbau zur Vermietung, 46 m²',
    location: 'Harburg',
  },
  {
    name: 'Tobias M.',
    quote:
      'Architekturbüro mit eigenem GU gesucht – hier wurden wir fündig. Die Architektin und der Statiker arbeiten Hand in Hand, das spart uns enorm viel Abstimmungszeit. Werden weitere Projekte mit dem Team umsetzen.',
    project: 'Mehrfamilienhaus, 3 DG-Wohnungen',
    location: 'Hamburg-Nord',
  },
]

export const REVIEW_SCHEMA_DATA = [
  {
    author: 'Dr. Miriam L.',
    body: 'Kompetente Begleitung von der ersten Bestandsaufnahme bis zur Abnahme. Besonders beeindruckt hat mich die schnelle Klärung der Erhaltungssatzungs-Frage mit dem Bezirksamt Eimsbüttel.',
    rating: 5,
    datePublished: '2026-03-14',
    project: 'DG-Ausbau mit zwei Schleppgauben',
    location: 'Eppendorf',
  },
  {
    author: 'Familie K.',
    body: 'Wir haben unser Dachgeschoss in Eppendorf ausgebaut. Das Team hat den Zeitplan eingehalten, die Handwerker waren jeden Abend aufgeräumt, und die Qualität der Arbeiten ist hervorragend.',
    rating: 5,
    datePublished: '2026-02-08',
    project: 'Komplettausbau mit Bad',
    location: 'Eppendorf',
  },
  {
    author: 'Stefan H.',
    body: 'Als Vermieter war mir die Rendite wichtig. Das Team hat den Ausbau in 14 Wochen durchgezogen und die Förderung über KfW 261 perfekt eingespielt.',
    rating: 5,
    datePublished: '2025-11-22',
    project: 'DG-Ausbau als Kapitalanlage',
    location: 'Winterhude',
  },
  {
    author: 'Dr. Klaus B.',
    body: 'Unser denkmalgeschütztes Haus in Altona-Altstadt war eine besondere Herausforderung. Das Team hatte bereits Erfahrung mit dem Denkmalschutzamt und hat die Genehmigung in 6 Wochen bekommen.',
    rating: 5,
    datePublished: '2025-09-18',
    project: 'DG-Ausbau im Denkmal',
    location: 'Altona-Altstadt',
  },
  {
    author: 'Susanne W.',
    body: 'Von der Beratung bis zur Abnahme hat alles reibungslos funktioniert. Wir konnten während der Bauzeit im Haus wohnen bleiben. Saubere Arbeit.',
    rating: 5,
    datePublished: '2025-08-04',
    project: 'DG-Ausbau mit Schleppgaube',
    location: 'Eimsbüttel',
  },
  {
    author: 'Markus & Claudia R.',
    body: 'Der Bauleiter war täglich auf der Baustelle, jeder Schritt wurde uns erklärt. Wir hatten keine bösen Überraschungen, das Angebot wurde eingehalten.',
    rating: 5,
    datePublished: '2025-06-11',
    project: 'Komplettausbau mit Aufsparrendämmung',
    location: 'Bergedorf',
  },
  {
    author: 'Andrea S.',
    body: 'Wir wollten vermieten, brauchten aber eine ehrliche Einschätzung. Das Team hat uns vor einer überdimensionierten Lösung bewahrt und eine deutlich bessere Variante vorgeschlagen.',
    rating: 5,
    datePublished: '2025-04-29',
    project: 'Effizienter DG-Ausbau zur Vermietung',
    location: 'Harburg',
  },
  {
    author: 'Tobias M.',
    body: 'Architekturbüro mit eigenem GU gesucht – hier wurden wir fündig. Die Architektin und der Statiker arbeiten Hand in Hand, das spart enorm viel Abstimmungszeit.',
    rating: 5,
    datePublished: '2025-02-15',
    project: 'Mehrfamilienhaus, 3 DG-Wohnungen',
    location: 'Hamburg-Nord',
  },
]