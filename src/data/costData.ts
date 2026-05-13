export const COST_DATA = {
  perSquareMeter: {
    simple: { min: 1800, max: 2500, description: 'Basis-Ausbau ohne Bad/Küche, einfache Böden' },
    standard: { min: 2500, max: 3200, description: 'Normaler Ausbau mit Bad, Böden, Standard-Elektrik' },
    premium: { min: 3200, max: 3800, description: 'Gehobener Ausbau mit Einbauküche, hochwertigen Böden' },
  },
  gauben: {
    schleppgaube: { min: 10000, max: 18000, description: 'Beliebt in München, viel Licht, geeignet für Satteldächer' },
    fledermausgaube: { min: 12000, max: 22000, description: 'Ideal für flachgeneigte Dächer, großzügiger Raum' },
    trapezgaube: { min: 10000, max: 16000, description: 'Moderne Optik, gute Lichtverhältnisse' },
    frontgaube: { min: 18000, max: 25000, description: 'Großes Fenster, aufwendige Konstruktion' },
  },
  permits: {
    genehmigung: { min: 250, max: 500, description: 'Stadt München Gebühren (falls erforderlich)' },
    statik: { min: 800, max: 2500, description: 'Tragwerksplaner (je nach Komplexität)' },
    anzeige: { min: 0, max: 0, description: 'Kostenlos, aber 2 Wochen Vorlaufzeit' },
  },
  insulation: {
    aufzsparrendammung: { min: 120, max: 150, description: 'Höchste Dämmleistung, komplette Neueindeckung' },
    zwischensparrendammung: { min: 60, max: 100, description: 'Gute Dämmung, bei Sanierung bevorzugt' },
  },
}
