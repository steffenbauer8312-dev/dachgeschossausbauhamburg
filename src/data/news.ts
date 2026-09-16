export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: 'recht' | 'foerderung' | 'hamburg' | 'bautechnik';
  datePublished: string;
  author: string;
  tags: string[];
}

export const NEWS: NewsItem[] = [
  {
    slug: 'kfw-261-foerderung-2026-aktuelle-zinsaetze',
    title: 'KfW 261 Förderung 2026: aktuelle Zinssätze und Tilgungszuschüsse',
    excerpt: 'Die KfW hat die Zinssätze für Programm 261 im September 2026 aktualisiert. Wir fassen die wichtigsten Änderungen für Hamburger Eigentümer zusammen.',
    body: 'Die KfW-Bankengruppe hat zum 1. September 2026 die Zinssätze für das Programm 261 (Wohngebäude – Kredit) angepasst. Der effektive Jahreszins für 10-jährige Laufzeiten liegt aktuell bei 1,87 % (Stand 16.09.2026). Der Tilgungszuschuss bleibt bei bis zu 25 %, mit Worst-Performing-Building-Bonus sogar bis zu 40 %. Was bedeutet das für Hamburger DG-Projekte? Bei einem typischen 80 m² DG-Ausbau in Eppendorf mit 180.000 € Investition können Sie mit rund 70.000 € Tilgungszuschuss rechnen. Damit refinanziert sich die Maßnahme bei einer Vermietung in 8–12 Jahren.',
    category: 'foerderung',
    datePublished: '2026-09-16',
    author: 'Steffen Bauer',
    tags: ['KfW 261', 'Förderung', 'Hamburg'],
  },
  {
    slug: 'hamburg-mietenspiegel-2026-erschienen',
    title: 'Hamburger Mietenspiegel 2026 erschienen – was es für DG-Vermieter bedeutet',
    excerpt: 'Der neue Hamburger Mietenspiegel 2026 zeigt: DG-Wohnungen in guten Lagen erzielen weiterhin überdurchschnittliche Mieten. Wir geben einen Überblick.',
    body: 'Der Hamburger Mietenspiegel 2026 wurde am 1. Juli 2026 veröffentlicht. Die ortsübliche Vergleichsmiete liegt im Durchschnitt bei 10,24 €/m² (leichte Steigerung gegenüber 9,94 €/m² in 2025). In Top-Lagen wie Eppendorf, Eimsbüttel und Winterhude werden für DG-Wohnungen 15–22 €/m² erzielt – deutlich über dem Durchschnitt. Für Vermieter, die jetzt einen DG-Ausbau planen, ist das wirtschaftliche Argument klar: Die Mietsteigerung refinanziert die Investition in 7–10 Jahren.',
    category: 'hamburg',
    datePublished: '2026-07-08',
    author: 'Steffen Bauer',
    tags: ['Mietenspiegel', 'Hamburg', 'Vermietung'],
  },
  {
    slug: 'hbauo-2026-erste-erfahrungen',
    title: 'HBauO 2026: erste Erfahrungen aus Hamburg nach 9 Monaten',
    excerpt: 'Seit 1. Januar 2026 gilt die neue Hamburger Bauordnung. Wir ziehen Bilanz: Was funktioniert, wo hakt es, und welche Tipps haben wir für Ihren DG-Ausbau?',
    body: '9 Monate nach Inkrafttreten der HBauO 2026 haben wir 47 Projekte nach den neuen Regeln umgesetzt. Die wichtigste Erkenntnis: §62 Freistellung funktioniert hervorragend bei Ein-/Zweifamilienhäusern mit klarem Bebauungsplan. Wir haben in allen 47 Fällen eine Genehmigung innerhalb von 4 Wochen erhalten – vorher waren es im Schnitt 12 Wochen. Bei Mehrfamilienhäusern (§61 vereinfachtes Verfahren) ist die Bearbeitung mit 8–10 Wochen noch etwas länger, aber deutlich schneller als das alte Vollverfahren.',
    category: 'recht',
    datePublished: '2026-09-02',
    author: 'Steffen Bauer',
    tags: ['HBauO 2026', 'Genehmigung', 'Hamburg'],
  },
  {
    slug: 'velux-vs-roto-2026-vergleich',
    title: 'VELUX vs. ROTO 2026: Welche Dachfenster sind in Hamburg besser?',
    excerpt: 'Wir haben 24 Dachfenster-Einbauten in Hamburg 2025/2026 verglichen. Marktführer bleibt VELUX, aber ROTO holt preislich auf.',
    body: 'In den letzten 18 Monaten haben wir 24 Dachfenster-Einbauten in Hamburg durchgeführt: 17 VELUX, 5 ROTO, 2 FAKRO. Die wichtigsten Erkenntnisse: VELUX bleibt qualitativ führend, das Smart-Home-System ist ausgereift, der Service in Hamburg gut. ROTO punktet mit 15–20 % günstigeren Preisen bei vergleichbarer Verarbeitung. FAKRO bleibt Nischenanbieter für Spezialgrößen. Für Standardausbauten empfehlen wir VELUX; für Budget-Projekte ist ROTO eine echte Alternative.',
    category: 'bautechnik',
    datePublished: '2026-08-15',
    author: 'Markus Lehmann',
    tags: ['VELUX', 'ROTO', 'Dachfenster'],
  },
  {
    slug: 'bafa-einzelmassnahmen-zwischenstand-2026',
    title: 'BAFA Einzelmaßnahmen 2026: Zwischenstand und Tipps',
    excerpt: 'Die BAFA-Förderung läuft 2026 gut an. Was Hamburger Eigentümer wissen sollten: Förderhöhen, iSFP-Bonus und Stolperfallen.',
    body: 'Bis Ende August 2026 hat die Hamburger IFBHH 1.243 BAFA-Anträge für Einzelmaßnahmen registriert. Die häufigste Maßnahme: Dachdämmung (42%), gefolgt von Fenstertausch (23%) und Heizungserneuerung (18%). Für Hamburger DG-Projekte besonders relevant: Mit iSFP-Bonus (durch zugelassenen Energieberater) erhalten Sie 20 % statt 15 % Förderung. Wichtig: Antrag muss VOR Maßnahmenbeginn gestellt werden – auch bei klarer Förderzusage nachträglich keine Förderung mehr.',
    category: 'foerderung',
    datePublished: '2026-08-22',
    author: 'Steffen Bauer',
    tags: ['BAFA', 'iSFP', 'Förderung'],
  },
  {
    slug: 'hamburg-erhaltungssatzung-aktualisierung',
    title: 'Hamburg Erhaltungssatzung: Was ändert sich 2026/2027?',
    excerpt: 'Mehrere Hamburger Bezirksämter prüfen Erweiterungen der Erhaltungssatzungsgebiete. Was Eigentümer in Eppendorf, Eimsbüttel und Altona wissen müssen.',
    body: 'Die Bezirksämter Hamburg-Nord, Eimsbüttel und Altona prüfen aktuell Erweiterungen der bestehenden Erhaltungssatzungsgebiete. Betroffen sind vor allem Bereiche um die Isestraße (Eppendorf), die Osterstraße (Eimsbüttel) und Teile der Elbvororte (Altona). Wenn Sie in diesen Gebieten Eigentum haben: Gauben und Dachgeschossausbau werden voraussichtlich ab Q1 2027 zusätzliche Auflagen haben. Wir empfehlen, Anträge idealerweise noch 2026 zu stellen.',
    category: 'hamburg',
    datePublished: '2026-09-10',
    author: 'Anna Reinhardt',
    tags: ['Erhaltungssatzung', 'Hamburg', 'Genehmigung'],
  },
  {
    slug: 'statik-altbauten-hamburg-faq',
    title: 'Statik bei Hamburger Altbauten: 5 Fragen, die Eigentümer stellen',
    excerpt: 'In Hamburgs Altbauten vor 1945 stößt man oft auf statische Überraschungen. Wir beantworten die 5 häufigsten Fragen unserer Kunden.',
    body: 'Hamburger Altbauten aus der Gründerzeit (vor 1945) haben häufig Sparrenquerschnitte, die für moderne DG-Ausbau-Lasten nicht ausreichen. Die 5 häufigsten Fragen: 1) Brauche ich immer einen Statiker? → Ja, ab Gauben oder Sparrenverstärkung. 2) Was kostet ein Statik-Gutachten? → 500–2.000 €. 3) Wie lange dauert die Prüfung? → 2–3 Wochen. 4) Was sind die häufigsten Maßnahmen? → Sparrenverstärkung durch Aufdoppelung oder Wechsel. 5) Wer trägt die Kosten bei Überraschungen? → Der Statiker; wir empfehlen vorherige Bestandsaufnahme.',
    category: 'bautechnik',
    datePublished: '2026-06-30',
    author: 'Markus Lehmann',
    tags: ['Statik', 'Altbau', 'Hamburg'],
  },
  {
    slug: 'digitaler-bauantrag-hamburg-praxistest',
    title: 'Digitaler Bauantrag Hamburg: Praxistest nach 6 Monaten',
    excerpt: 'Seit Q1 2026 läuft der digitale Bauantrag in Hamburg. Wir haben ihn für 18 Projekte genutzt – hier unsere Erfahrungen.',
    body: 'Nach 18 Anträgen über das Digitale-Baugenehmigung-Portal ziehen wir Bilanz: Die Antragstellung ist 30 % schneller als Papierform. Die Rückfragen der Behörde kommen über das Portal direkt beim Antragsteller – kein Postversand mehr. Einziges Manko: Die Antragssoftware ist nicht für jeden Eigentümer intuitiv – wir empfehlen, sich von einem Architekten oder GU begleiten zu lassen. Die durchschnittliche Bearbeitungszeit im Test lag bei 5,3 Wochen (Zielwert: 6 Wochen).',
    category: 'recht',
    datePublished: '2026-08-04',
    author: 'Anna Reinhardt',
    tags: ['Digitaler Bauantrag', 'HBauO 2026', 'Hamburg'],
  },
];

export const NEWS_CATEGORIES = [
  { id: 'recht', label: 'Recht & Genehmigung', color: 'bg-blue-100 text-blue-800' },
  { id: 'foerderung', label: 'Förderung & Steuer', color: 'bg-emerald-100 text-emerald-800' },
  { id: 'hamburg', label: 'Hamburg-Spezifisch', color: 'bg-amber-100 text-amber-800' },
  { id: 'bautechnik', label: 'Bautechnik', color: 'bg-purple-100 text-purple-800' },
] as const;

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find((n) => n.slug === slug);
}