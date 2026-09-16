export interface Bezirk {
  slug: string;
  name: string;
  officialName: string;
  shortName: string;
  description: string;
  einwohner: string;
  flaeche: string;
  kaufpreisAvg: string;
  mieteAvg: string;
  bauaufsicht: {
    name: string;
    adresse: string;
    telefon: string;
    email?: string;
    url: string;
    sachgebiet: string;
  };
  erhaltungssatzung: boolean;
  denkmalschutzHaefig: boolean;
  typischeBauten: string[];
  hinweise: string[];
}

export const BEZIRKE: Bezirk[] = [
  {
    slug: 'hamburg-mitte',
    name: 'Hamburg-Mitte',
    officialName: 'Bezirk Hamburg-Mitte',
    shortName: 'Mitte',
    description: 'Der zentrale Bezirk mit HafenCity, St. Pauli, Neustadt und denkmalreichen Vierteln. Hohe Nachfrage nach Wohnraum, viele DG-Potenziale in Gründerzeitbauten.',
    einwohner: '~310.000',
    flaeche: '~130 km²',
    kaufpreisAvg: '5.500–8.500 €/m²',
    mieteAvg: '14–19 €/m²',
    bauaufsicht: {
      name: 'Fachamt Bauaufsicht Hamburg-Mitte',
      adresse: 'Caffamacherreihe 1–3, 20355 Hamburg',
      telefon: '040 / 428 54-2399',
      email: 'bauaufsicht@hamburg-mitte.hamburg.de',
      url: 'https://www.hamburg.de/bbauo/',
      sachgebiet: 'Bauaufsicht, Genehmigungsverfahren, Erhaltungssatzung',
    },
    erhaltungssatzung: true,
    denkmalschutzHaefig: true,
    typischeBauten: ['Gründerzeit 1870–1910', 'Nachkriegsbauten 1950–70', 'Hafenkante', 'Speicherstadt'],
    hinweise: [
      'Stellplatzpflicht in vielen Quartieren sehr streng',
      'Erhaltungssatzung in Neustadt, St. Pauli-Nord',
      'Denkmalschutz besonders in Speicherstadt/Hafenkante',
    ],
  },
  {
    slug: 'altona',
    name: 'Altona',
    officialName: 'Bezirk Altona',
    shortName: 'Altona',
    description: 'Vielseitiger Bezirk mit Altstadt, Nord und den Elbvororten. Mischung aus dichter Stadt und Villenvierteln – DG-Ausbau braucht je nach Teilbereich andere Strategien.',
    einwohner: '~275.000',
    flaeche: '~78 km²',
    kaufpreisAvg: '4.500–7.500 €/m²',
    mieteAvg: '12–18 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Altona – Fachamt Bauaufsicht',
      adresse: 'Platz der Republik 1, 22765 Hamburg',
      telefon: '040 / 428 11-0',
      email: 'bauaufsicht@altona.hamburg.de',
      url: 'https://www.hamburg.de/altona/',
      sachgebiet: 'Bauaufsicht, Gauben-Genehmigungen',
    },
    erhaltungssatzung: true,
    denkmalschutzHaefig: true,
    typischeBauten: ['Gründerzeit 1880–1910', 'Villen Elbvororte', 'Nachkriegsbauten Bahrenfeld', 'Backstein-Architektur'],
    hinweise: [
      'Altona-Altstadt & Nord: Erhaltungssatzung, strenge Prüfung',
      'Elbvororte (Blankenese, Othmarschen): viel Denkmalschutz',
      'Bezirksamt ist erfahren mit Altbau-DG-Projekten',
    ],
  },
  {
    slug: 'eimsbuettel',
    name: 'Eimsbüttel',
    officialName: 'Bezirk Eimsbüttel',
    shortName: 'Eimsbüttel',
    description: 'Beliebter innerstädtischer Bezirk mit Eppendorf, Eimsbüttel, Harvestehude und Rotherbaum. Hohe Mieten, viele Erhaltungssatzungsgebiete, erfahrener Bauaufsichtsbezirk.',
    einwohner: '~270.000',
    flaeche: '~50 km²',
    kaufpreisAvg: '5.500–9.000 €/m²',
    mieteAvg: '14–22 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Eimsbüttel – Fachamt Bauaufsicht',
      adresse: 'Grindelberg 62–66, 20144 Hamburg',
      telefon: '040 / 428 01-0',
      email: 'bauaufsicht@eimsbuettel.hamburg.de',
      url: 'https://www.hamburg.de/eimsbuettel/',
      sachgebiet: 'Bauaufsicht, Erhaltungssatzung',
    },
    erhaltungssatzung: true,
    denkmalschutzHaefig: true,
    typischeBauten: ['Jugendstil 1900–1920', 'Gründerzeitvillen', 'Nachkriegs-Bürobauten', 'Klinker'],
    hinweise: [
      'Erhaltungssatzung Eppendorf-Nord, Rotherbaum',
      'Bezirksamt ist Spezialist für Altbau-DG',
      'Stellplatzpflicht in Eimsbüttel streng gehandhabt',
    ],
  },
  {
    slug: 'hamburg-nord',
    name: 'Hamburg-Nord',
    officialName: 'Bezirk Hamburg-Nord',
    shortName: 'Nord',
    description: 'Großflächiger Bezirk mit Eppendorfer Baum, Winterhude, Alsterdorf und Uhlenhorst. Mix aus Villen und Mehrfamilienhäusern, viel DG-Potenzial.',
    einwohner: '~315.000',
    flaeche: '~58 km²',
    kaufpreisAvg: '4.500–7.500 €/m²',
    mieteAvg: '13–18 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Hamburg-Nord – Fachamt Bauaufsicht',
      adresse: 'Kümmellstraße 5, 20249 Hamburg',
      telefon: '040 / 428 04-0',
      email: 'bauaufsicht@hamburg-nord.hamburg.de',
      url: 'https://hamburg-nord.hamburg.de/',
      sachgebiet: 'Bauaufsicht, Nord-Bezirk',
    },
    erhaltungssatzung: true,
    denkmalschutzHaefig: true,
    typischeBauten: ['Jugendstilvillen', 'Backstein-Gründerzeit', 'Nachkriegs-Wohnblocks', 'Bürokonversionen'],
    hinweise: [
      'Erhaltungssatzung in Winterhude, Uhlenhorst',
      'Viele Bürokonversionen für DG-Ausbau möglich',
      'Bezirksamt Nord sehr erfahren',
    ],
  },
  {
    slug: 'wandsbek',
    name: 'Wandsbek',
    officialName: 'Bezirk Wandsbek',
    shortName: 'Wandsbek',
    description: 'Einwohnerstärkster Bezirk mit Vororten wie Marienthal, Bramfeld, Farmsen und Rahlstedt. Mehrfamilienhäuser mit DG-Potenzial, moderatere Preise als Innenstadt.',
    einwohner: '~440.000',
    flaeche: '~148 km²',
    kaufpreisAvg: '3.500–5.500 €/m²',
    mieteAvg: '10–14 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Wandsbek – Fachamt Bauaufsicht',
      adresse: 'Schloßgarten 9, 22041 Hamburg',
      telefon: '040 / 428 81-0',
      email: 'bauaufsicht@wandsbek.hamburg.de',
      url: 'https://www.hamburg.de/wandsbek/',
      sachgebiet: 'Bauaufsicht, Wandsbek-Bezirk',
    },
    erhaltungssatzung: false,
    denkmalschutzHaefig: false,
    typischeBauten: ['Nachkriegsbauten 1950–70', 'Einfamilienhaus-Siedlungen', 'Mehrfamilienhäuser 1960–80'],
    hinweise: [
      'Weniger Erhaltungssatzung als Innenstadt-Bezirke',
      '§62 Freistellung meist problemlos anwendbar',
      'Gute Förderbedingungen durch IFBHH-Modernisierungsprogramme',
    ],
  },
  {
    slug: 'bergedorf',
    name: 'Bergedorf',
    officialName: 'Bezirk Bergedorf',
    shortName: 'Bergedorf',
    description: 'Bezirk mit ländlichem Charakter in den Vier- und Marschlanden, Bergedorf-Zentrum und Wentorf. Wassernahe Lagen erfordern Feuchteschutz.',
    einwohner: '~130.000',
    flaeche: '~155 km²',
    kaufpreisAvg: '3.500–5.000 €/m²',
    mieteAvg: '10–14 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Bergedorf – Fachamt Bauaufsicht',
      adresse: 'Wentorfer Straße 38 a, 21029 Hamburg',
      telefon: '040 / 428 91-0',
      email: 'bauaufsicht@bergedorf.hamburg.de',
      url: 'https://www.hamburg.de/bergedorf/',
      sachgebiet: 'Bauaufsicht, Bergedorf-Bezirk',
    },
    erhaltungssatzung: false,
    denkmalschutzHaefig: false,
    typischeBauten: ['Backstein-Villen', 'Einfamilienhäuser 1930–70', 'Bauernhöfe (teils denkmalgeschützt)'],
    hinweise: [
      'Wassernahe Lagen: Feuchteschutz bei Dämmung wichtig',
      'Weniger Erhaltungssatzung, freiere Gestaltung',
      'Marschland-Bauten oft mit Denkmalschutz',
    ],
  },
  {
    slug: 'harburg',
    name: 'Harburg',
    officialName: 'Bezirk Harburg',
    shortName: 'Harburg',
    description: 'Bezirk im Süden Hamburgs – Harburg, Wilhelmsburg und das Alte Land. Preisgünstigster Standort für Kapitalanleger, viele Fördermöglichkeiten.',
    einwohner: '~170.000',
    flaeche: '~125 km²',
    kaufpreisAvg: '2.800–4.500 €/m²',
    mieteAvg: '9–13 €/m²',
    bauaufsicht: {
      name: 'Bezirksamt Harburg – Fachamt Bauaufsicht',
      adresse: 'Harburger Rathausplatz 4, 21073 Hamburg',
      telefon: '040 / 428 71-0',
      email: 'bauaufsicht@harburg.hamburg.de',
      url: 'https://www.hamburg.de/harburg/',
      sachgebiet: 'Bauaufsicht, Harburg-Bezirk',
    },
    erhaltungssatzung: false,
    denkmalschutzHaefig: false,
    typischeBauten: ['Nachkriegsbauten', 'Einfamilienhaus-Siedlungen', 'Backstein aus der Industrialisierung'],
    hinweise: [
      'Preisgünstigster Standort für Vermieter',
      'Hohe Förderquoten durch IFBHH-Modernisierung',
      'Weniger Erhaltungssatzung',
    ],
  },
];

export function getBezirkBySlug(slug: string): Bezirk | undefined {
  return BEZIRKE.find((b) => b.slug === slug);
}