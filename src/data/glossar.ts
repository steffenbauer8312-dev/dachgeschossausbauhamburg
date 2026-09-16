export interface GlossarEntry {
  term: string;
  slug: string;
  shortDefinition: string;
  longDefinition: string;
  category: 'recht' | 'technik' | 'foerderung' | 'bauteil' | 'verfahren';
  relatedSlugs?: string[];
  relatedLinks?: { label: string; href: string }[];
}

export const GLOSSAR: GlossarEntry[] = [
  {
    term: 'Aufsparrendämmung',
    slug: 'aufsparrendaemmung',
    shortDefinition: 'Dämmung oberhalb der Sparren – die hochwertigste Dämmart im Dach.',
    longDefinition: 'Bei der Aufsparrendämmung wird die Dämmschicht vollflächig oberhalb der Sparren verlegt. Sie bietet die beste Dämmleistung ohne Wärmebrücken an den Sparren, erfordert jedoch das Abnehmen der Dacheindeckung. Sie ist förderfähig nach KfW 261 und BAFA.',
    category: 'technik',
    relatedSlugs: ['zwischensparrendaemmung', 'kfw-261', 'bafa'],
    relatedLinks: [
      { label: 'Dämmung im Detail', href: '/leistungen/daemmung/' },
      { label: 'Förderung', href: '/ratgeber/foerdermittel/' },
    ],
  },
  {
    term: 'BAFA Einzelmaßnahmen',
    slug: 'bafa',
    shortDefinition: 'Bundesförderung für effiziente Gebäude – Direktzuschuss ohne Kredit.',
    longDefinition: 'Die BAFA-Einzelmaßnahmenförderung (Bundesamt für Wirtschaft und Ausfuhrkontrolle) ergänzt oder ersetzt die KfW 261. Sie fördert einzelne energetische Maßnahmen wie Dachdämmung, Fenstertausch oder Heizungserneuerung mit Direktzuschüssen. Pro Wohneinheit sind bis zu 12.000 € Förderung möglich (15% bei Einzelmaßnahmen, 20% mit iSFP-Bonus).',
    category: 'foerderung',
    relatedSlugs: ['kfw-261', 'estg-35c', 'isfp', 'wpb'],
    relatedLinks: [
      { label: 'Förderung im Detail', href: '/ratgeber/foerdermittel/' },
    ],
  },
  {
    term: 'Bebauungsplan',
    slug: 'bebauungsplan',
    shortDefinition: 'Städtebauliche Satzung mit verbindlichen Vorgaben für Grundstücke.',
    longDefinition: 'Der Bebauungsplan (B-Plan) regelt in Hamburg die Nutzung, Bauweise, Höhe und Gestaltung von Grundstücken. Für Hamburg sind die Bebauungspläne der Bezirke verbindlich – das bedeutet, jeder DG-Ausbau muss die Festsetzungen einhalten. Bei §62 Freistellung entfällt die Baugenehmigung nur, wenn das Vorhaben im Geltungsbereich eines B-Plans liegt.',
    category: 'recht',
    relatedSlugs: ['hbauo', 'erhaltungssatzung', 'denkmalschutz'],
    relatedLinks: [
      { label: 'Genehmigung', href: '/genehmigung/' },
    ],
  },
  {
    term: 'Bestandsschutz',
    slug: 'bestandsschutz',
    shortDefinition: 'Schutz bestehender Bauten vor nachträglichen Rechtsänderungen.',
    longDefinition: 'Der Bestandsschutz bewahrt bestehende bauliche Anlagen, die rechtmäßig errichtet wurden, vor den Auswirkungen späterer Rechtsänderungen. Für DG-Ausbau bedeutet das: Was früher zulässig war, kann unter Umständen weiterhin Bestand haben. Bestandsschutz gilt nicht für Nutzungsänderungen (z. B. wenn aus einem Büro eine Wohnung wird).',
    category: 'recht',
    relatedSlugs: ['hbauo', 'denkmalschutz'],
  },
  {
    term: 'Dachflächenfenster',
    slug: 'dachflaechenfenster',
    shortDefinition: 'Fenster in der Dachschräge – Standard bei DG-Ausbau.',
    longDefinition: 'Dachflächenfenster werden in die Dachschräge eingebaut und sind in Hamburg der Standard für DG-Ausbau. Marktführer sind VELUX und ROTO. Standardgrößen 55×78 cm (kosten 400–1.500 € inkl. Einbau). Größere oder elektrische Fenster kosten 700–2.500 € pro Stück.',
    category: 'bauteil',
    relatedSlugs: ['schleppgaube', 'fledermausgaube'],
    relatedLinks: [
      { label: 'Gauben-Übersicht', href: '/leistungen/dachgauben/' },
    ],
  },
  {
    term: 'Dampfbremse',
    slug: 'dampfbremse',
    shortDefinition: 'Folie gegen Wasserdampf-Diffusion aus dem Raum in die Dämmung.',
    longDefinition: 'Die Dampfbremse verhindert, dass Wasserdampf aus dem Wohnraum in die Dämmung diffundiert und dort als Kondenswasser Schäden verursacht. In Hamburgs feuchtem Klima ist die fachgerechte Dampfbremse Pflicht – falsch verlegte Folien führen zu Schimmel und Holzfäule.',
    category: 'technik',
    relatedSlugs: ['aufsparrendaemmung', 'zwischensparrendaemmung'],
    relatedLinks: [
      { label: 'Dämmung', href: '/leistungen/daemmung/' },
    ],
  },
  {
    term: 'Denkmalpflege Hamburg',
    slug: 'denkmalpflege',
    shortDefinition: 'Landesamt für Denkmalpflege Hamburg – Genehmigungsbehörde für Denkmäler.',
    longDefinition: 'Die Denkmalpflege Hamburg (auch Denkmalschutzamt Hamburg) ist zuständig für die Genehmigung baulicher Veränderungen an Denkmälern nach §6 HDSchG. Sitz: Große Bleichen 30, 20354 Hamburg. Bearbeitungszeit für DG-Projekte: 2 Monate (Regelfall) bis 8 Wochen (komplexe Fälle). Gebühren: 80–500 €.',
    category: 'recht',
    relatedSlugs: ['denkmalschutz', 'hdschg', 'erhaltungssatzung'],
    relatedLinks: [
      { label: 'Denkmalschutz-Ratgeber', href: '/ratgeber/denkmalschutz/' },
    ],
  },
  {
    term: 'Denkmalschutz',
    slug: 'denkmalschutz',
    shortDefinition: 'Schutz von Bauten mit historischer/kultureller Bedeutung.',
    longDefinition: 'Denkmalschutz in Hamburg unterliegt dem HDSchG (Hamburgisches Denkmalschutzgesetz). Baudenkmäler sind im Denkmalverzeichnis eingetragen. Bauliche Veränderungen am DG benötigen eine denkmalrechtliche Genehmigung. Für DG-Ausbau in Denkmälern gelten oft zusätzliche Auflagen (Gaubenform, Fensterteilung, Dacheindeckung).',
    category: 'recht',
    relatedSlugs: ['hdschg', 'denkmalpflege', 'erhaltungssatzung'],
    relatedLinks: [
      { label: 'Denkmalschutz-Ratgeber', href: '/ratgeber/denkmalschutz/' },
    ],
  },
  {
    term: 'Digitaler Bauantrag',
    slug: 'digitaler-bauantrag',
    shortDefinition: 'Online-Antragstellung für Baugenehmigungen – ab 2026 Pflicht in Hamburg.',
    longDefinition: 'Der digitale Bauantrag ersetzt die Papier-Antragstellung. Ab 2026 können Bauanträge in Hamburg über den länderübergreifenden Online-Dienst Digitale Baugenehmigung eingereicht werden. Vorteile: schnellere Bearbeitung, keine Medienbrüche, jederzeit nachvollziehbar.',
    category: 'verfahren',
    relatedSlugs: ['hbauo', '62-hbauo'],
    relatedLinks: [
      { label: 'Genehmigung', href: '/genehmigung/' },
    ],
  },
  {
    term: 'Einfamilienhaus',
    slug: 'einfamilienhaus',
    shortDefinition: 'Wohngebäude mit einer Wohneinheit – profitiert von §62 HBauO.',
    longDefinition: 'Ein- und Zweifamilienhäuser genießen in Hamburg seit 1. Januar 2026 die Genehmigungsfreistellung nach §62 HBauO, sofern das Vorhaben im Bereich eines qualifizierten Bebauungsplans liegt. Für DG-Ausbau bedeutet das: Bauvorlage einreichen, einen Monat warten, dann darf gebaut werden.',
    category: 'recht',
    relatedSlugs: ['hbauo', '62-hbauo', 'bebauungsplan'],
  },
  {
    term: 'Erhaltungssatzung',
    slug: 'erhaltungssatzung',
    shortDefinition: 'Städtebauliche Satzung zum Schutz des Ortsbildes ganzer Quartiere.',
    longDefinition: 'In Hamburg gibt es mehrere Erhaltungssatzungsgebiete (z. B. Eppendorf, Eimsbüttel-Nord, Altona-Altstadt, Rotherbaum). Jede bauliche Veränderung am äußeren Erscheinungsbild – auch Gauben – muss mit dem Bezirksamt abgestimmt werden. Die Bezirksämter prüfen, ob die Gestaltung dem Quartiersbild entspricht.',
    category: 'recht',
    relatedSlugs: ['denkmalschutz', 'bebauungsplan'],
    relatedLinks: [
      { label: 'Denkmalschutz-Ratgeber', href: '/ratgeber/denkmalschutz/' },
    ],
  },
  {
    term: 'Fledermausgaube',
    slug: 'fledermausgaube',
    shortDefinition: 'Trapezförmige Gaube mit flachem Dach – optisch markant.',
    longDefinition: 'Die Fledermausgaube hat ein trapezförmiges Profil mit breitem, flachem Dach. Sie bietet bei flachgeneigten Dächern viel Stehhöhe und mehr Licht als die Schleppgaube. In Hamburg beliebt in Stadtteilen wie Eppendorf und Altona, jedoch oft genehmigungskritisch in Erhaltungssatzungsgebieten. Kosten: 15.000–25.000 €.',
    category: 'bauteil',
    relatedSlugs: ['schleppgaube', 'trapezgaube'],
    relatedLinks: [
      { label: 'Gauben-Übersicht', href: '/leistungen/dachgauben/' },
    ],
  },
  {
    term: 'GENEHMIGUNGSFREISTELLUNG (§62 HBauO)',
    slug: '62-hbauo',
    shortDefinition: 'Verzicht auf Baugenehmigung – Anzeige reicht für Ein-/Zweifamilienhäuser.',
    longDefinition: 'Seit 1. Januar 2026 ermöglicht §62 HBauO in Hamburg die Genehmigungsfreistellung. Für Ein- und Zweifamilienhäuser im Bereich eines qualifizierten Bebauungsplans reicht die Anzeige – nach einem Monat gilt das Vorhaben als genehmigt. Gebühr: 0–100 €. Voraussetzung: Vorhaben hält alle B-Plan-Festsetzungen ein.',
    category: 'recht',
    relatedSlugs: ['hbauo', '61-hbauo', 'digitaler-bauantrag'],
    relatedLinks: [
      { label: 'Genehmigung', href: '/genehmigung/' },
    ],
  },
  {
    term: 'GEG (Gebäudeenergiegesetz)',
    slug: 'geg',
    shortDefinition: 'Bundesgesetz für energetische Anforderungen an Gebäude.',
    longDefinition: 'Das GEG (vormals EnEV) regelt die energetischen Anforderungen an Neubauten und Sanierungen. Für DG-Ausbau in Hamburg bedeutet das: Eine Dämmung nach GEG-Standard ist Pflicht. Die wichtigsten U-Werte für Dachflächen: 0,14–0,24 W/m²K (je nach Bauteil).',
    category: 'recht',
    relatedSlugs: ['aufsparrendaemmung', 'zwischensparrendaemmung', 'kfw-261'],
  },
  {
    term: 'Hamburgische Bauordnung (HBauO)',
    slug: 'hbauo',
    shortDefinition: 'Landesbauordnung der Freien und Hansestadt Hamburg – 2026 novelliert.',
    longDefinition: 'Die Hamburgische Bauordnung (HBauO) regelt alle Bauaufgaben in Hamburg. 2026 wurde sie novelliert – die wichtigste Änderung für DG-Ausbau: §62 Freistellung ersetzt für Ein-/Zweifamilienhäuser die Baugenehmigung. Weitere wichtige Paragraphen: §37 (Aufzug), §61 (vereinfachtes Verfahren), §69 (Abweichungstatbestände).',
    category: 'recht',
    relatedSlugs: ['62-hbauo', '61-hbauo', '69-hbauo', '37-hbauo'],
    relatedLinks: [
      { label: 'Genehmigung', href: '/genehmigung/' },
    ],
  },
  {
    term: 'HDSchG (Denkmalschutzgesetz)',
    slug: 'hdschg',
    shortDefinition: 'Hamburgisches Denkmalschutzgesetz – Grundlage für Denkmal-Genehmigungen.',
    longDefinition: 'Das HDSchG regelt den Umgang mit Denkmälern in Hamburg. §6 HDSchG verlangt für bauliche Veränderungen an Baudenkmälern eine denkmalrechtliche Genehmigung. Bearbeitungsfrist: bis zu 2 Monate. Gebühren: 80–500 €. Zuständig: Denkmalschutzamt Hamburg (Große Bleichen 30).',
    category: 'recht',
    relatedSlugs: ['denkmalschutz', 'denkmalpflege', 'erhaltungssatzung'],
  },
  {
    term: 'iSFP-Bonus',
    slug: 'isfp',
    shortDefinition: 'iSFP-Bonus: +5% Förderung auf BAFA-Maßnahmen mit Sanierungsfahrplan.',
    longDefinition: 'Wird ein individueller Sanierungsfahrplan (iSFP) durch einen Energieberater erstellt, gibt es auf die BAFA-Einzelmaßnahmenförderung 5% Bonus on top. Beispiel: Statt 15% Förderung für Dachdämmung erhalten Sie 20%. Den iSFP erstellt ein zugelassener Energieberater (Kosten: ca. 800–1.500 €).',
    category: 'foerderung',
    relatedSlugs: ['bafa', 'kfw-261', 'energieberater'],
  },
  {
    term: 'KfW 261',
    slug: 'kfw-261',
    shortDefinition: 'KfW-Programm „Wohngebäude – Kredit 261" – bis 150.000 € pro WE.',
    longDefinition: 'KfW 261 ist das zentrale Förderprogramm für energieeffiziente Sanierung von Wohngebäuden. Förderung: zinsgünstiger Kredit bis 150.000 € pro Wohneinheit + Tilgungszuschuss bis zu 25 % (40 % bei Worst-Performing-Buildings-Bonus). Wichtig: KfW 261 und BAFA schließen sich gegenseitig aus. §35c EStG kann mit KfW 261 kombiniert werden.',
    category: 'foerderung',
    relatedSlugs: ['bafa', 'estg-35c', 'wpb', 'geg'],
    relatedLinks: [
      { label: 'Förderung im Detail', href: '/ratgeber/foerdermittel/' },
    ],
  },
  {
    term: 'Kniestock',
    slug: 'kniestock',
    shortDefinition: 'Wandhöhe unter der Dachschräge – bestimmt die nutzbare Fläche.',
    longDefinition: 'Der Kniestock ist die Höhe der Außenwand, die unter der Dachschräge verläuft. Je höher, desto mehr Stehhöhe und nutzbare Fläche. Hamburger Altbauten haben oft 50–80 cm Kniestock – zu wenig für volle Raumhöhe. Abhilfe: Kniestock-Erhöhung (sofern genehmigungsfähig) oder Gaube.',
    category: 'bauteil',
    relatedSlugs: ['lichte-raumhoehe'],
  },
  {
    term: 'Lichte Raumhöhe',
    slug: 'lichte-raumhoehe',
    shortDefinition: 'Innere Höhe eines Raums – in DG mind. 2,30 m nach HBauO.',
    longDefinition: 'Nach HBauO muss die lichte Raumhöhe in Aufenthaltsräumen mindestens 2,30 m betragen. Im Dachgeschoss muss diese Höhe über mindestens zwei Drittel der Grundfläche des darunter liegenden Geschosses vorhanden sein. Unter Schrägen und an Gaubenwänden darf die Höhe geringer sein.',
    category: 'recht',
    relatedSlugs: ['hbauo', 'kniestock'],
  },
  {
    term: 'Mehrfamilienhaus',
    slug: 'mehrfamilienhaus',
    shortDefinition: 'Wohngebäude mit mehreren Wohneinheiten – DG-Ausbau erfordert WEG-Beschluss.',
    longDefinition: 'Beim DG-Ausbau in einem Mehrfamilienhaus (WEG) ist ein Beschluss der Eigentümerversammlung erforderlich. Die Kostenverteilung richtet sich nach der WEG und dem Miteigentumsanteil. Die Genehmigung folgt §61 HBauO (vereinfachtes Verfahren), nicht §62.',
    category: 'recht',
    relatedSlugs: ['hbauo', '61-hbauo'],
  },
  {
    term: '§61 HBauO (vereinfachtes Verfahren)',
    slug: '61-hbauo',
    shortDefinition: 'Vereinfachtes Baugenehmigungsverfahren – Standard bei DG-Ausbau.',
    longDefinition: 'Das vereinfachte Verfahren nach §61 HBauO ersetzt das vollständige Baugenehmigungsverfahren. Es wird für Vorhaben außerhalb von §62-Freistellungen angewendet (z. B. Mehrfamilienhäuser, Erhaltungssatzungsgebiete, Gauben). Bearbeitungszeit: 6–12 Wochen.',
    category: 'recht',
    relatedSlugs: ['hbauo', '62-hbauo'],
  },
  {
    term: '§69 HBauO (Abweichung)',
    slug: '69-hbauo',
    shortDefinition: 'Abweichung von Bauvorschriften im Einzelfall möglich.',
    longDefinition: '§69 HBauO erlaubt der Bauaufsichtsbehörde, im Einzelfall von Bauvorschriften abzuweichen. Voraussetzung: das Vorhaben ist ansonsten nicht umsetzbar (z. B. bei Raumhöhe, Stellplätzen, Brandschutz) und die öffentliche Sicherheit wird nicht gefährdet.',
    category: 'recht',
    relatedSlugs: ['hbauo', '62-hbauo'],
  },
  {
    term: '§35c EStG (Steuerabzug)',
    slug: 'estg-35c',
    shortDefinition: 'Steuerliche Abzugsfähigkeit energetischer Sanierungen – 20% bis 40.000 €.',
    longDefinition: '§35c EStG erlaubt den Abzug energetischer Sanierungskosten von der Steuerlast. Förderung: 20% der Kosten, gedeckelt auf 40.000 € pro Objekt (über 3 Jahre). Wichtig: §35c EStG und KfW/BAFA schließen sich für dieselbe Maßnahme aus.',
    category: 'foerderung',
    relatedSlugs: ['kfw-261', 'bafa'],
  },
  {
    term: 'Schleppgaube',
    slug: 'schleppgaube',
    shortDefinition: 'Gaube mit schrägem Dach – Standardform in Hamburg.',
    longDefinition: 'Die Schleppgaube ist die häufigste Gaubenform in Hamburg. Sie hat ein flach geneigtes Dach, bietet viel Stehhöhe und passt zum klassischen Hamburger Satteldach. In Erhaltungssatzungsgebieten ist sie die bevorzugte Variante. Kosten: 8.000–18.000 € je nach Größe.',
    category: 'bauteil',
    relatedSlugs: ['fledermausgaube', 'trapezgaube'],
    relatedLinks: [
      { label: 'Gauben-Übersicht', href: '/leistungen/dachgauben/' },
    ],
  },
  {
    term: 'Sparrenverstärkung',
    slug: 'sparrenverstaerkung',
    shortDefinition: 'Verstärkung der Dach-Sparren für mehr Lastaufnahme.',
    longDefinition: 'Wenn das vorhandene Dach die zusätzliche Last von Dämmung und Ausbau nicht trägt, werden die Sparren durch Aufdoppelung (Holzbohlen seitlich aufgeschraubt) oder durch Austausch verstärkt. Häufig in Hamburger Altbauten mit dünnen Sparren nötig. Kosten: 150–400 € pro laufendem Meter Sparren.',
    category: 'technik',
    relatedSlugs: ['aufsparrendaemmung', 'statik-gutachten'],
  },
  {
    term: 'Stellplatzpflicht',
    slug: 'stellplatzpflicht',
    shortDefinition: 'Pflicht zur Schaffung von Stellplätzen bei Neubau/Nutzungsänderung.',
    longDefinition: 'In Hamburg kann das Bezirksamt bei Schaffung neuer Wohnflächen Stellplätze verlangen. Bei reinem DG-Ausbau ohne Nutzungsänderung ist eine Befreiung oft möglich. In dicht besiedelten Bezirken (Eimsbüttel, Altona) wird die Pflicht strenger geprüft.',
    category: 'recht',
    relatedSlugs: ['hbauo', '69-hbauo'],
  },
  {
    term: 'Trapezgaube',
    slug: 'trapezgaube',
    shortDefinition: 'Moderne Gaube mit geraden Seiten und flachem Dach.',
    longDefinition: 'Die Trapezgaube hat gerade Seiten und ein flaches Dach – eine moderne Form. Sie passt zu Neubauten oder bewusst modernen Sanierungen. Kosten: 10.000–20.000 €. In Erhaltungssatzungsgebieten Hamburgs nur selten genehmigungsfähig.',
    category: 'bauteil',
    relatedSlugs: ['schleppgaube', 'fledermausgaube'],
    relatedLinks: [
      { label: 'Gauben-Übersicht', href: '/leistungen/dachgauben/' },
    ],
  },
  {
    term: 'U-Wert',
    slug: 'u-wert',
    shortDefinition: 'Wärmedurchgangskoeffizient – je kleiner, desto besser die Dämmung.',
    longDefinition: 'Der U-Wert (W/m²K) misst den Wärmeverlust eines Bauteils. Für Dachflächen im DG-Ausbau: Mindestanforderung nach GEG 0,24 W/m²K, KfW-261-Standard 0,14 W/m²K. Je niedriger, desto besser die Dämmwirkung und desto höher die Förderung.',
    category: 'technik',
    relatedSlugs: ['geg', 'aufsparrendaemmung', 'kfw-261'],
  },
  {
    term: 'WEG (Wohnungseigentümergemeinschaft)',
    slug: 'weg',
    shortDefinition: 'Gemeinschaft der Eigentümer in einem Mehrfamilienhaus.',
    longDefinition: 'Bei DG-Ausbau in einem WEG-Mehrfamilienhaus brauchen Sie einen Eigentümerbeschluss (>50% Zustimmung). Die Kostenverteilung richtet sich nach dem Miteigentumsanteil. Wichtig: Bereits vor Planung die WEG-Versammlung einberufen, um Konflikte zu vermeiden.',
    category: 'recht',
    relatedSlugs: ['mehrfamilienhaus', 'hbauo'],
  },
  {
    term: 'WPB (Worst-Performing-Building-Bonus)',
    slug: 'wpb',
    shortDefinition: 'KfW-Bonus für besonders schlechte energetische Ausgangslage.',
    longDefinition: 'Der Worst-Performing-Building-Bonus ist ein zusätzlicher Förderbonus der KfW 261 für Gebäude mit besonders schlechter Energiebilanz (z. B. ältere Hamburger Altbauten ohne Dämmung). Bonus: +5% Tilgungszuschuss on top, also bis zu 40% statt 35%.',
    category: 'foerderung',
    relatedSlugs: ['kfw-261', 'geg'],
  },
  {
    term: 'Zwischensparrendämmung',
    slug: 'zwischensparrendaemmung',
    shortDefinition: 'Dämmung zwischen den Sparren – Standard bei Bestandssanierung.',
    longDefinition: 'Bei der Zwischensparrendämmung wird das Dämmmaterial zwischen die Sparren geklemmt. Sie ist günstiger und bei Bestandssanierungen bevorzugt, hat aber Wärmebrücken an den Sparren. In Kombination mit Untersparrendämmung wird der U-Wert deutlich besser.',
    category: 'technik',
    relatedSlugs: ['aufsparrendaemmung', 'dampfbremse'],
    relatedLinks: [
      { label: 'Dämmung', href: '/leistungen/daemmung/' },
    ],
  },
];

export const GLOSSAR_CATEGORIES = [
  { id: 'recht', label: 'Recht & Genehmigung', description: 'Gesetze, Verordnungen und Satzungen' },
  { id: 'technik', label: 'Technik & Bauteile', description: 'Dämmung, Gauben, Fenster' },
  { id: 'foerderung', label: 'Förderung & Steuer', description: 'KfW, BAFA, §35c EStG' },
  { id: 'bauteil', label: 'Bauteile', description: 'Sparren, Gauben, Dachfenster' },
  { id: 'verfahren', label: 'Verfahren', description: 'Abläufe und Behördengänge' },
] as const;

export function getGlossarBySlug(slug: string): GlossarEntry | undefined {
  return GLOSSAR.find((e) => e.slug === slug);
}