export const COST_DATA = {
  perSquareMeter: {
    simple: { min: 800, max: 1200, description: 'Dämmung, Trockenbau, Böden, Elektrik' },
    standard: { min: 1200, max: 1800, description: 'Komplettausbau mit Dachfenstern' },
    premium: { min: 1800, max: 2500, description: 'Premium-Ausbau mit Gauben, Bad' },
  },
  gauben: {
    schleppgaube: { min: 8000, max: 18000, description: 'Beliebt in Hamburg, viel Licht' },
    fledermausgaube: { min: 15000, max: 25000, description: 'Für flachgeneigte Dächer, großzügiger Raum' },
    trapezgaube: { min: 10000, max: 18000, description: 'Moderne Optik, gute Lichtverhältnisse' },
    segmentgaube: { min: 12000, max: 20000, description: 'Rundbogig, elegante Lösung' },
  },
  permits: {
    genehmigung: { min: 200, max: 800, description: 'Hamburger Bauamt (§62 HBauO)' },
    statik: { min: 500, max: 2000, description: 'Tragwerksplaner, je nach Komplexität' },
    anzeige: { min: 0, max: 100, description: 'Genehmigungsfreistellung: nur Anzeige + 4 Wochen' },
  },
  insulation: {
    aufzsparrendammung: { min: 100, max: 250, description: 'Höchste Dämmleistung, komplette Neueindeckung' },
    zwischensparrendammung: { min: 60, max: 120, description: 'Gute Dämmung, bei Bestandssanierung bevorzugt' },
    untersparrendammung: { min: 40, max: 80, description: 'Innen, wenn Dach unberührt bleiben soll' },
  },
  fenster: {
    velux: { min: 400, max: 1500, description: 'Schwingfenster, Größe 55x78cm' },
    roto: { min: 350, max: 1200, description: 'Robuste Technik, gutes Preis-Leistungs-Verhältnis' },
    dachaustritt: { min: 2500, max: 4000, description: 'Ausstieg mit Balkongefühl, Roto/Tyria' },
  },
  bad: {
    standard: { min: 10000, max: 15000, description: 'Komplettes DG-Bad mit Dusche, WC, Waschbecken' },
    premium: { min: 15000, max: 25000, description: 'Gehobenes Bad, bodengleiche Dusche, Fliesen' },
  },
}