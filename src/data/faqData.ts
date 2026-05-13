export interface FaqLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  links?: FaqLink[];
}

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Was kostet ein Dachgeschossausbau in Hamburg?",
    answer: "In Hamburg liegen die Kosten zwischen 800 und 2.500 Euro pro Quadratmeter. Einfacher Ausbau mit Dämmung, Trockenbau und Böden beginnt bei 800 Euro/m². Komplettausbau mit Gauben und Bad kostet 1.800 bis 2.500 Euro/m². Die genaue Kalkulation hängt von Zustand, Fläche und Ausstattungswunsch ab. Ein 50-m²-Dachgeschoss liegt typischerweise bei 40.000 bis 100.000 Euro.",
    links: [
      { label: "Alle Kostenrichtwerte im Detail", href: "/kosten/" },
      { label: "Gauben-Kosten vergleichen", href: "/ratgeber/gauben/" },
    ],
  },
  {
    question: "Brauche ich für einen Dachgeschossausbau in Hamburg eine Genehmigung?",
    answer: "Seit 1. Januar 2026 gilt in Hamburg die neue HBauO. Für Ein- und Zweifamilienhäuser im Bereich eines qualifizierten Bebauungsplans reicht eine Genehmigungsfreistellung nach §62 HBauO. Das heißt: Bauvorlage einreichen, einen Monat warten, dann darf gebaut werden. Eine Baugenehmigung ist nicht mehr nötig. Außerhalb von Bebauungsplänen oder bei Gauben kann ein vereinfachtes Genehmigungsverfahren nach §61 HBauO erforderlich sein.",
    links: [
      { label: "§62 und §61 im Detail erklärt", href: "/genehmigung/" },
      { label: "Gauben-Genehmigung: Was gilt?", href: "/ratgeber/gauben/" },
    ],
  },
  {
    question: "Welche Gauben eignen sich für Hamburger Dächer?",
    answer: "In Hamburg dominiert das Satteldach – die klassische Form macht die Schleppgaube zur häufigsten Wahl. Sie bringt viel Licht und Stehhöhe. Für flachgeneigte Dächer im Hamburger Norden eignet sich die Fledermausgaube. Die Trapezgaube wirkt modern und passt zu Neubauten oder Sanierungen im Stadtkern. Segmentgauben sind seltener, bieten aber eine elegante Rundbogenoptik.",
    links: [
      { label: "Gauben-Guide: Alle Typen, Kosten, Genehmigung", href: "/ratgeber/gauben/" },
      { label: "Kosten im Detail", href: "/kosten/" },
    ],
  },
  {
    question: "Wie lange dauert ein Dachgeschossausbau in Hamburg?",
    answer: "Ein reiner Innenausbau mit Dämmung, Trockenbau, Boden und Elektrik dauert 4 bis 8 Wochen. Ein Komplettausbau mit Gauben oder statischen Eingriffen kann 8 bis 16 Wochen beanspruchen. Der Antrag im vereinfachten Genehmigungsverfahren läuft 2 Monate. Planen Sie insgesamt 3 bis 6 Monate vom ersten Gespräch bis zur schlüsselfertigen Übergabe.",
    links: [
      { label: "Schritt für Schritt: Der Ausbau-Prozess", href: "/ratgeber/prozess/" },
      { label: "Genehmigungsdauer einplanen", href: "/genehmigung/" },
    ],
  },
  {
    question: "Welche Dämmung ist im Hamburger Dachgeschoss Pflicht?",
    answer: "Das Gebäudeenergiegesetz (GEG) schreibt bei DG-Ausbau eine Dämmung vor, die den Mindestwärmeschutz gewährleistet. Die Zwischensparren- oder Aufsparrendämmung ist Standard. In Hamburg, wo es viel Niederschlag gibt, ist zudem der Feuchteschutz entscheidend – eine Dampfbremse ist Pflicht.",
    links: [
      { label: "Dämmung: Alle Arten und Preise", href: "/leistungen/daemmung/" },
      { label: "Förderung für Dämm-Maßnahmen", href: "/ratgeber/foerdermittel/" },
    ],
  },
  {
    question: "Fällt die Stellplatzpflicht in Hamburg beim DG-Ausbau weg?",
    answer: "Die Stellplatzpflicht in Hamburg ist komplex. Bei reinem DG-Ausbau ohne Nutzungsänderung kann eine Befreiung möglich sein. Wenn jedoch eine neue Wohnung entsteht, kann das Bezirksamt einen Nachweis verlangen. In dicht besiedelten Bezirken wie Eimsbüttel oder Altona ist die Stellplatzpflicht strenger. Wir klären das im Vorfeld mit dem zuständigen Bezirksamt.",
    links: [
      { label: "Stellplatzpflicht und Ausnahmen", href: "/genehmigung/" },
      { label: "DG-Ausbau in Altona", href: "/standorte/altona/" },
    ],
  },
  {
    question: "Muss ich einen Aufzug einbauen, wenn ich mein Dachgeschoss ausbaue?",
    answer: "Nein. §37 Absatz 4 HBauO stellt klar: Bei bestehenden Gebäuden entfällt die Aufzugspflicht, wenn zusätzlicher Wohnraum durch DG-Ausbau oder Aufstockung geschaffen wird. Das gilt auch für Gebäude, die bereits einen Aufzug haben.",
    links: [
      { label: "§37 Aufzugspflicht und alle Ausnahmen", href: "/genehmigung/" },
      { label: "Was HBauO 2026 ändert", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Welche Fördermittel gibt es für Dachgeschossausbau in Hamburg?",
    answer: "Die KfW bietet das Programm 261 mit bis zu 150.000 Euro pro Wohneinheit und 35 Prozent Tilgungszuschuss bei energetischer Sanierung. Alternativ gibt es BAFA-Einzelmaßnahmenförderung. Nach §35c EStG können Sie 20 Prozent der Kosten für energetische Maßnahmen steuerlich absetzen – gedeckelt auf 40.000 Euro.",
    links: [
      { label: "Alle Fördermittel im Detail: KfW, BAFA, §35c", href: "/ratgeber/foerdermittel/" },
      { label: "Kostenübersicht mit Förderung", href: "/kosten/" },
    ],
  },
  {
    question: "Was passiert, wenn mein Dachgeschoss den Brandschutz-Anforderungen nicht genügt?",
    answer: "Das Brandschutzrecht schreibt bei DG-Ausbau bestimmte Trennwand- und Rettungsweg-Anforderungen vor. Die neuen Abweichungstatbestände (§69 Abs. 1 Nr. 3 HBauO) ermöglichen im Bestand Ausnahmen, wenn das Vorhaben ansonsten nicht umsetzbar wäre und die öffentliche Sicherheit nicht gefährdet ist.",
    links: [
      { label: "§69 Abweichungstatbestand im Detail", href: "/genehmigung/" },
    ],
  },
  {
    question: "Kann ich mein Dachgeschoss als Vermieter ausbauen und die Miete erhöhen?",
    answer: "Ja. Nach einem DG-Ausbau kann die Miete gemäß Hamburger Mietrecht erhöht werden. Die ortsübliche Vergleichsmiete nach dem Hamburger Mietenspiegel 2025 liegt bei durchschnittlich 9,94 Euro/m². In guten Lagen wie Eppendorf oder Eimsbüttel sind 15 bis 20 Euro/m² üblich.",
    links: [
      { label: "Vermieter-Guide: Rendite, Mieterhöhung, Steuervorteil", href: "/ratgeber/vermieter/" },
      { label: "DG-Ausbau in Eppendorf", href: "/standorte/eppendorf/" },
    ],
  },
  {
    question: "Wann ist eine Dachgaube in Hamburg genehmigungspflichtig?",
    answer: "Gauben mit mehr als 30 m³ umbauten Raum sind in Hamburg genehmigungspflichtig. Im vereinfachten Genehmigungsverfahren nach §61 HBauO geht es in der Regel schneller als im normalen Baugenehmigungsverfahren. Wir übernehmen die Antragstellung für Sie.",
    links: [
      { label: "Gauben-Guide: Alle Typen und Genehmigungswege", href: "/ratgeber/gauben/" },
      { label: "Genehmigung im Detail", href: "/genehmigung/" },
    ],
  },
  {
    question: "Was ist die Digitale Baugenehmigung Hamburg?",
    answer: "Ab 2026 können Bauanträge in Hamburg über den länderübergreifenden Online-Dienst Digitale Baugenehmigung eingereicht werden. Das Verfahren ist komplett digital – von der Antragstellung bis zur Bescheidzustellung. Das spart Zeit und Papierkram.",
    links: [
      { label: "Digitales Genehmigungsverfahren", href: "/genehmigung/" },
    ],
  },
  {
    question: "Wie hoch muss die Raumhöhe im Dachgeschoss sein?",
    answer: "Die HBauO schreibt eine lichte Raumhöhe von mindestens 2,30 m vor. Im Dachgeschoss muss diese Höhe über mindestens zwei Drittel der Geschossfläche des darunter liegenden Geschosses vorhanden sein. Unter Schrägen und an Gaubenwänden kann die Höhe also geringer sein.",
    links: [
      { label: "Wie Gauben die nutzbare Fläche erhöhen", href: "/ratgeber/gauben/" },
      { label: "Alle HBauO-Anforderungen", href: "/genehmigung/" },
    ],
  },
  {
    question: "Was kostet eine Fledermausgaube in Hamburg?",
    answer: "Eine Fledermausgaube kostet in Hamburg zwischen 15.000 und 25.000 Euro. Der höhere Preis gegenüber einer Schleppgaube resultiert aus der aufwendigeren Konstruktion und Statik. Dafür bietet sie bei flachgeneigten Dächern deutlich mehr Stehhöhe.",
    links: [
      { label: "Gauben-Typen und Kosten im Vergleich", href: "/ratgeber/gauben/" },
      { label: "Kostenübersicht", href: "/kosten/" },
    ],
  },
  {
    question: "Kann ich ein Dachgeschoss ohne Statiker ausbauen?",
    answer: "Für einfache Innenausbauten mit Trockenbau und Dämmung ist oft kein Statiker nötig. Sobald jedoch tragende Wände verändert, Gauben eingebaut oder die Dachkonstruktion angepasst wird, ist ein Statiker Pflicht. Wir holen die notwendigen Gutachten ein.",
    links: [
      { label: "Genehmigungsprozess im Detail", href: "/genehmigung/" },
    ],
  },
  {
    question: "Was ist besser: Aufsparren- oder Zwischensparrendämmung?",
    answer: "Die Aufsparrendämmung bietet die höchste Dämmleistung und keine Wärmebrücken an den Sparren. Sie erfordert jedoch eine komplette Dacheindeckung. Die Zwischensparrendämmung ist günstiger und bei Bestandssanierungen bevorzugt. Welche Lösung die richtige ist, hängt von Ihrem Dach und Budget ab.",
    links: [
      { label: "Dämmung im Detail: Arten, Preise, Förderung", href: "/leistungen/daemmung/" },
      { label: "Förderung für Dämm-Maßnahmen", href: "/ratgeber/foerdermittel/" },
    ],
  },
  {
    question: "Wie finde ich einen guten Dachgeschoss-Ausbauer in Hamburg?",
    answer: "Achten Sie auf Handwerkskammer-Mitgliedschaft, regionale Referenzen und klare Preisstrukturen. Wir sind als Hamburger Generalunternehmer auf DG-Ausbau spezialisiert – von der Beratung bis zur schlüsselfertigen Übergabe mit einem Ansprechpartner.",
    links: [
      { label: "Leistungen im Überblick", href: "/leistungen/" },
    ],
  },
  {
    question: "Welche Hamburger Stadtteile sind besonders beliebt für DG-Ausbau?",
    answer: "In Eppendorf, Eimsbüttel, Winterhude und Altona sind die Immobilienwerte hoch und der DG-Ausbau lohnt sich besonders. Auch in Altbauten in Rahlstedt, Barmbek und Harburg gibt es viel Potenzial für wertsteigernde Ausbauten.",
    links: [
      { label: "DG-Ausbau in Eppendorf", href: "/standorte/eppendorf/" },
      { label: "DG-Ausbau in Winterhude", href: "/standorte/winterhude/" },
      { label: "DG-Ausbau in Harburg", href: "/standorte/harburg/" },
    ],
  },
  {
    question: "Bringt ein DG-Ausbau wirklich etwas für den Immobilienwert?",
    answer: "Ja. Ein ausgebautes Dachgeschoss zählt zur Wohnfläche nach DIN 277 und steigert den Immobilienwert nachweislich. In Hamburg liegen die Kaufpreisaufschläge für DG-Wohnungen bei 7 bis 15 Prozent des Gesamtwerts – je nach Lage und Ausstattung.",
    links: [
      { label: "Rendite und Wertsteigerung als Vermieter", href: "/ratgeber/vermieter/" },
    ],
  },
  {
    question: "Was ist der Unterschied zwischen DG-Ausbau und Aufstockung?",
    answer: "Beim DG-Ausbau wird der bestehende Dachboden zu Wohnraum umgewandelt. Bei einer Aufstockung wird ein komplett neues Geschoss auf das bestehende Gebäude gesetzt. Aufstockungen sind aufwendiger und teurer, bieten aber mehr Wohnfläche pro Grundstück.",
    links: [
      { label: "Prozess und Entscheidungsguide", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Kann ich ein DG im Mehrfamilienhaus ausbauen lassen?",
    answer: "Ja. Der DG-Ausbau in Mehrfamilienhäusern ist in Hamburg häufig und oft wirtschaftlich sinnvoll. Die Genehmigungsfrage ist komplexer als beim Einfamilienhaus, weil Eigentumsverhältnisse und Versammlungsbeschlüsse eine Rolle spielen. Wir klären das für Sie.",
    links: [
      { label: "Vermieter & Investoren – alles zur Rendite", href: "/ratgeber/vermieter/" },
    ],
  },
  {
    question: "Wie wird die Feuchtigkeit im Dachgeschoss vermieden?",
    answer: "Durch eine fachgerechte Dampfbremse auf der Innenseite der Dämmung und eine diffusionsoffene Unterspannbahn auf der Außenseite. So wird Kondensation vermieden, die zu Schimmel oder Holzfäule führen kann. In Hamburg mit seinem feuchten Klima ist das besonders wichtig.",
    links: [
      { label: "Dämmung: Material und Ausführung", href: "/leistungen/daemmung/" },
    ],
  },
  {
    question: "Darf ich als Mieter ein Dachgeschoss ausbauen lassen?",
    answer: "Als Mieter benötigen Sie die schriftliche Zustimmung des Vermieters für bauliche Maßnahmen im Dachgeschoss. Der Vermieter kann eine angemessene Mieterhöhung nach dem DG-Ausbau verlangen. Wir beraten both Seiten.",
    links: [
      { label: "Was Vermieter wissen müssen", href: "/ratgeber/vermieter/" },
    ],
  },
  {
    question: "Was versteht man unter dem Abweichungstatbestand §69 HBauO?",
    answer: "§69 HBauO erlaubt der Bauaufsichtsbehörde, im Einzelfall von bestimmten Vorschriften abzuweichen – wenn zusätzlicher Wohnraum geschaffen wird, das Vorhaben ansonsten nicht umsetzbar wäre und die öffentliche Sicherheit nicht gefährdet ist. Das betrifft etwa Raumhöhen oder Stellplätze.",
    links: [
      { label: "§69 und alle weiteren Abweichungstatbestände", href: "/genehmigung/" },
    ],
  },
  {
    question: "Wie unterscheidet sich die HBauO 2026 von der alten Fassung?",
    answer: "Die neue HBauO 2026 bringt vor allem die Genehmigungsfreistellung nach §62 für Ein-/Zweifamilienhäuser im Bebauungsplangebiet. Das normale Baugenehmigungsverfahren wird für diese Fälle durch eine Anzeige ersetzt. Außerdem wurde das Verfahrensrecht digitalisiert.",
    links: [
      { label: "Genehmigung nach HBauO 2026", href: "/genehmigung/" },
      { label: "Prozess-Guide", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Sind Dachgeschossfenster von VELUX oder ROTO besser?",
    answer: "VELUX ist Marktführer mit dem breitesten Zubehörsortiment und Smart-Home-Integration. ROTO punktet mit robustem Beschlag und gutem Preis-Leistungs-Verhältnis. FAKRO bietet außergewöhnliche Größen und Formate. Wir beraten herstellerunabhängig.",
    links: [
      { label: "Gauben und Dachfenster im Vergleich", href: "/ratgeber/gauben/" },
    ],
  },
  {
    question: "Was kostet ein Dachfenster-Einbau in Hamburg?",
    answer: "Ein einzelnes Dachfenster (VELUX-Schwingfenster, 55x78 cm) kostet in Hamburg zwischen 400 und 1.500 Euro inklusive Einbau. Größere Formate oder elektrisch betriebene Fenster liegen bei 700 bis 2.500 Euro pro Stück.",
    links: [
      { label: "Gauben und Dachfenster: Kosten im Detail", href: "/ratgeber/gauben/" },
      { label: "Kostenübersicht", href: "/kosten/" },
    ],
  },
  {
    question: "Kann ich ein Dachgeschoss selbst ausbauen?",
    answer: "Einfache Arbeiten wie Trockenbau oder Bodenverlegung können Sie selbst übernehmen. Für Dämmung, Statik, Elektrik und Sanitär brauchen Sie Fachleute. Bei Schimmel- oder Feuchtigkeitsschäden ist professionelle Trocknung Pflicht.",
    links: [
      { label: "Prozess und Leistungsumfang", href: "/ratgeber/prozess/" },
      { label: "Unser Leistungsangebot", href: "/leistungen/" },
    ],
  },
  {
    question: "Wie wirkt sich ein DG-Ausbau auf meine Nebenkosten aus?",
    answer: "Nach einem DG-Ausbau steigt die beheizte Fläche – und damit die Heizkosten. Eine gute Dämmung hält diesen Anstieg in Grenzen. Wir empfehlen grundsätzlich eine Dämmung nach GEG-Standard, um die Betriebskosten niedrig zu halten.",
    links: [
      { label: "Dämmung und Energieeffizienz", href: "/leistungen/daemmung/" },
      { label: "Förderung nutzen", href: "/ratgeber/foerdermittel/" },
    ],
  },
  {
    question: "Was ist ein Kniestock und spielt er beim DG-Ausbau eine Rolle?",
    answer: "Der Kniestock ist die Wandhöhe unter der Dachschräge. Je höher, desto mehr nutzbare Fläche. Viele Hamburger Altbauten haben niedrige Kniestöcke von 50 bis 80 cm. Eine Gaube oder eine Kniestock-Erhöhung schafft hier Abhilfe.",
    links: [
      { label: "Wie Gauben nutzbare Fläche schaffen", href: "/ratgeber/gauben/" },
    ],
  },
  {
    question: "Gibt es in Hamburg besondere Regelungen für den Denkmalschutz?",
    answer: "Ja. Gebäude unter Denkmalschutz oder in Erhaltungssatzungsgebieten unterliegen besonderen Vorschriften. Gaubenform, Dacheindeckung und Fensterteilung können vorgeschrieben sein. Fledermausgauben statt Schleppgauben sind in vielen Altbaugebieten Pflicht.",
    links: [
      { label: "Denkmalschutz-Ratgeber für Hamburg", href: "/ratgeber/denkmalschutz/" },
      { label: "Eppendorf – Denkmalschutz beachten", href: "/standorte/eppendorf/" },
    ],
  },
  {
    question: "Wie funktioniert die Digitale Baugenehmigung in der Praxis?",
    answer: "Sie reichen Ihre Bauvorlagen über den Online-Dienst ein. Die Bauaufsichtsbehörde prüft und gibt Rückmeldung digital. Bei der Genehmigungsfreistellung nach §62 HBauO reicht die Anzeige – nach einem Monat darf begonnen werden. Wir übernehmen die komplette Antragstellung.",
    links: [
      { label: "Genehmigungsschritte im Detail", href: "/genehmigung/" },
    ],
  },
  {
    question: "Warum ist Hamburg besonders geeignet für DG-Ausbau?",
    answer: "Hamburg hat einen der angespanntesten Wohnungsmärkte Deutschlands. Die Miet- und Kaufpreise machen den DG-Ausbau wirtschaftlich besonders attraktiv. Gleichzeitig hat die Stadt 2018 und 2026 die Vorschriften spürbar vereinfacht.",
    links: [
      { label: "Alle Hamburger Stadtteile im Vergleich", href: "/ratgeber/vermieter/" },
      { label: "Prozess-Guide", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Was passiert, wenn die Statik meines Daches nicht ausreicht?",
    answer: "Wir lassen vor jedem DG-Ausbau ein Statik-Gutachten erstellen. Wenn die Tragfähigkeit nicht ausreicht, gibt es verschiedene Optionen: Verstärkung der Sparren, neuer Dachstuhl, oder bei Leichtbauweise spezielle Trockenbaulösungen. Die Kosten für ein Statik-Gutachten liegen bei 500 bis 2.000 Euro.",
    links: [
      { label: "Genehmigung und Planung", href: "/genehmigung/" },
      { label: "Prozess im Detail", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Kann ich Fördermittel und Steuerabzug gleichzeitig nutzen?",
    answer: "Nein. KfW-Förderung und BAFA-Einzelmaßnahmenförderung schließen sich gegeneinander aus. §35c EStG-Steuerabzug können Sie alternativ nutzen. Eine Kombination von KfW-Kredit mit Tilgungszuschuss und Steuerabzug für andere Maßnahmen ist möglich.",
    links: [
      { label: "Fördermittel-Ratgeber: Alle Programme", href: "/ratgeber/foerdermittel/" },
      { label: "Was lohnt sich für Vermieter?", href: "/ratgeber/vermieter/" },
    ],
  },
  {
    question: "Was kostet ein Bad im Dachgeschoss?",
    answer: "Ein Standard-DG-Bad mit Dusche, WC und Waschbecken kostet zwischen 10.000 und 15.000 Euro. Ein gehobenes Bad mit bodengleicher Dusche, hochwertigen Fliesen und Markenarmaturen liegt bei 15.000 bis 25.000 Euro.",
    links: [
      { label: "Kosten im Detail: Bad, Gaube, Dämmung", href: "/kosten/" },
    ],
  },
  {
    question: "Wann lohnt sich ein DG-Ausbau finanziell?",
    answer: "Bei einer Fläche ab 30 m² und einer Miet- oder Kaufpreissteigerung ab 15 Prozent. In Hamburg liegt die DG-Miete bei 12 bis 29 Euro/m² je nach Lage. Bei einem 50-m²-DG in Eppendorf sind das 600 bis 1.450 Euro Monatsmiete.",
    links: [
      { label: "Rendite-Rechner für Vermieter", href: "/ratgeber/vermieter/" },
      { label: "Kostenübersicht", href: "/kosten/" },
      { label: "DG-Ausbau in Eppendorf", href: "/standorte/eppendorf/" },
    ],
  },
  {
    question: "Wie schützt eine DG-Dämmung vor sommerlicher Hitze?",
    answer: "Neben der Wärmedämmung ist der sommerliche Hitzeschutz ein Thema. In Hamburg mit seinen zunehmend heißen Sommern empfehlen wir eine Kombination aus Aufsparrendämmung mit integriertem Hitzeschutz und ausreichend Dachfenstern für Querlüftung.",
    links: [
      { label: "Dämmung: Material und Wärmeschutz", href: "/leistungen/daemmung/" },
      { label: "Gauben für besseren Luftaustausch", href: "/ratgeber/gauben/" },
    ],
  },
  {
    question: "Brauche ich eine neue Heizung für mein Dachgeschoss?",
    answer: "Das hängt von der bestehenden Heizungsanlage ab. Wenn genügend Kapazität vorhanden ist, reicht ein Anschluss an die bestehende Heizung. Bei Neubad im DG oder einer separaten Wohnung ist oft ein eigener Heizkreis oder eine elektrische Fußbodenheizung nötig.",
    links: [
      { label: "Komplettausbau im Überblick", href: "/ratgeber/prozess/" },
    ],
  },
  {
    question: "Was ist der Vorteil eines Generalunternehmers beim DG-Ausbau?",
    answer: "Ein GU koordiniert alle Gewerke – vom Dachdecker über den Trockenbauer bis zum Elektriker. Sie haben einen Ansprechpartner, ein Angebot und einen Zeitplan. Kein Koordinationsaufwand für Sie. Das spart Zeit und vermeidet Fehler zwischen den Gewerken.",
    links: [
      { label: "Unsere Leistungen im Überblick", href: "/leistungen/" },
      { label: "Alle Schritte von Beratung bis Übergabe", href: "/ratgeber/prozess/" },
    ],
  },
];