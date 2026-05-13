# Design Spec: dachgeschossausbauhamburg.de
**Erstellt:** 2026-05-13
**Status:** Genehmigt – Übergang zu Implementation

---

## 1. PROJEKTÜBERSICHT

**Typ:** Lead-Generation-Website für Dachgeschossausbau Hamburg
**Domain:** dachgeschossausbauhamburg.de (neu, noch nicht registriert)
**Ziel:** Ranking #1 für "dachgeschossausbau hamburg" + hohe Lead-Conversion
**Zielgruppe:** Hausbesitzer (EFH/MFH), Investoren, Architekten
**Lead-Typ:** Kontaktformular (bevorzugt), Telefon, Angebot anfordern
**Launch:** Big-Bang (alle Seiten gleichzeitig)

---

## 2. POSITIONIERUNG

**Modell:** Lokaler Generalunternehmer
- Kein Vermittler / Aggregator
- Kein einzelner Handwerker
- Sondern: Full-Service-Partner, der alle Gewerke koordiniert
- Differenzierung: Alles aus einer Hand, fester Ansprechpartner

**E-E-A-T-Signale:**
- Reale Adresse in Hamburg
- Ansprechpartner mit Foto und Bio
- Handwerkskammer-Mitgliedschaft (soweit vorhanden)
- Echte Referenzprojekte
- Klare Firmierung

---

## 3. DESIGN: "Backstein & Wasser"

**Primär-Akzent:** Rotklinker (#8B3A3A oder #A0522D)
**Sekundär:** Maritime Blaunuancen (#1B4F72 / #2C5F7D)
**Hintergrund:** Helles, warmes Untergrund (Creme/Beige-Töne)
**Typografie:** Klare deutsche Lesbarkeit, Serif-Akzente für Vertrauen
**Referenz:** C:\Users\steff\dachgeschossausbau-muenchen → Hamburg-Neuinterpretation
**Feeling:** Hanseatisch bodenständig, handwerklich ernsthaft, nicht startup-haft

---

## 4. SEITENARCHITEKTUR (Tiefe-Primero)

```
dachgeschossausbauhamburg.de/
├── Home (/)
├── Leistungen (/leistungen)
│   ├── Dachgeschossausbau (/leistungen/dachgeschossausbau)
│   ├── Dachgauben (/leistungen/dachgauben)
│   ├── Dachdämmung (/leistungen/daemmung)
│   └── Trockenbau & Innenausbau (/leistungen/innenausbau)
├── Kosten (/kosten)            ← HERO-SEITE, ~3.000 Wörter
├── Genehmigung (/genehmigung)   ← HBauO 2026 FIRST MOVER, ~2.500 Wörter
├── FAQ (/faq)                   ← 40+ Fragen, FAQPage Schema
├── Prozess (/prozess)           ← HowTo Schema
├── Über Uns (/ueber-uns)        ← E-E-A-T Signale
└── Kontakt (/kontakt)
```

**Lead-Formular (Mittel-Stufe, auf jeder Seite):**
- Name (Vollständiger Name)
- Telefon
- E-Mail
- PLZ
- Objekttyp (Dropdown: Einfamilienhaus / Mehrfamilienhaus / Reihenhaus / Sonstiges)
- Grobe Quadratmeter
- Bevorzugter Zeitraum (Dropdown)

**Lead-Capture-Punkte:**
1. Sticky CTA-Bar (visible on scroll, every page)
2. Mid-Content CTA-Blöcke (kontextbezogen)
3. End-of-Page CTA-Sektion
4. Kontaktseite (volles Formular + Karte)

---

## 5. CONTENT-ANFORDERUNGEN

**Stilguide:**
- Voice: Experte Hamburger Handwerker. Direkt, faktenbasiert, kein Hedging.
- Satzlänge: Max 20 Wörter pro Satz.
- Absätze: 2-3 Sätze max.
- KEINE Füllphrasen: "In der heutigen Zeit", "Wie Sie sicherlich wissen", "lassen Sie uns zunächst..."
- NIEMALS: "Unser Unternehmen bietet...", "Wir sind stolz darauf..."
- IMMER: Reale Daten, konkrete Ranges, genannte Vorschriften, echte Beispiele

**KI-Footprint-Freiheit:**
- Jeder Text wird mit `humanizer`-Skill geprüft
- Keine halluzinierten Daten
- Echte Hamburger Richtwerte (aus FACT.md)

**Content-Tiefe:**
| Seite | Wortzahl | Schema |
|---|---|---|
| Home | ~1.500 | LocalBusiness, Organization |
| Kosten | ~3.000 | LocalBusiness, Service, FAQPage |
| Genehmigung | ~2.500 | LocalBusiness, FAQPage, HowTo |
| FAQ | ~2.000 | FAQPage, BreadcrumbList |
| Prozess | ~1.500 | HowTo, BreadcrumbList |
| Leistungen (4x) | ~800/pro Unterseite | Service, BreadcrumbList |
| Über Uns | ~800 | Organization, BreadcrumbList |

---

## 6. SEO & TECHNISCH

**Schema Markup (Required):**
- [x] LocalBusiness (alle Seiten)
- [x] Service (Leistungen-Unterseiten)
- [x] FAQPage (FAQ-Seite)
- [x] HowTo (Prozess-Seite)
- [x] BreadcrumbList (alle Seiten)
- [x] Organization (Home)
- [x] ImageObject (Projektfotos)

**Meta Tags:**
- [x] OpenGraph (og:title, og:description, og:image)
- [x] Twitter Card
- [x] Canonical URLs
- [x] hreflang="de-DE"

**Core Web Vitals:**
- LCP < 2,5s
- CLS < 0,1
- FID < 100ms

**Images:**
- WebP-Format
- Lazy Loading
- Deskriptive Alt-Texte
- Before/After mit Structured Data

**Internal Linking:**
- Kontextuelle Links im Content
- Breadcrumb-Trail auf allen Seiten
- Verwandte-Inhalte-Links am Ende jeder Seite

---

## 7. ENTITY-CLUSTER

**Cluster 1 – Legal/Regulatorisch:**
- Hamburgische Bauordnung (HBauO)
- §62 Genehmigungsfreistellung (HBauO 2026)
- Digitale Baugenehmigung
- Aufzugspflicht entfallend (§37 Abs. 4 HBauO)
- Abweichungstatbestand (§69 HBauO)
- Stellplatzpflicht Hamburg

**Cluster 2 – Services:**
- Dachgeschossausbau
- Dachgauben (Schleppgaube, Fledermausgaube, Trapezgaube, Segmentgaube)
- Dachdämmung (Aufsparrendämmung, Zwischensparrendämmung, Untersparrendämmung)
- Trockenbau & Innenausbau
- Statik & Struktur

**Cluster 3 – Locations:**
- Hamburg (Entity)
- Hamburger Stadtviertel (Eppendorf, Eimsbüttel, Altona, Winterhude, Harburg, etc.)
- Umland (Ahrensburg, Norderstedt, Reinbek, Glinde, etc.)

---

## 8. KEYWORD-STRATEGIE

**Primary Keywords:**
- dachgeschossausbau hamburg
- dachausbau hamburg
- dachboden ausbauen hamburg

**Secondary Keywords:**
- dachgeschoss genehmigung hamburg
- kosten dachausbau hamburg
- dachgaube hamburg preise
- hbauo 2026 dachgeschossausbau
- dachgeschoss mietrecht hamburg

**Long-tail:**
- "dachgeschossausbau hamburg ohne genehmigung"
- "was kostet dachgaube hamburg"
- "dauer dachgeschossausbau hamburg"
- "fördermittel dachausbau hamburg kfw"
- "hamburgische bauordnung 2026 dachgeschoss"

---

## 9. RECHTLICHE COMPLIANCE

- **Keine gefälschten Bewertungen.** Echte Testimonials nur mit verifizierbaren Quellen.
- **Keine irreführenden Preise.** Alle Kosteninformationen als Schätzungen/Ranges klar gekennzeichnet.
- **Vollständiges Impressum** (gemäß § 5 TMG, § 55 RStV).
- **Datenschutzerklärung** DSGVO-konform.
- **Keine Dark Patterns** bei Lead-Formularen oder CTAs.

---

## 10. IMPLEMENTATIONS-PRIORITÄT

**Launch: Big-Bang** – alle Seiten gleichzeitig.

| Phase | Inhalt |
|---|---|
| **Alle Seiten** | Home + Leistungen (4) + Kosten + Genehmigung + FAQ + Prozess + Über Uns + Kontakt |

Jede Seite geht mit vollständigem semantischem Content, vollständigem Schema und funktionierendem Lead-Formular online.

---

## 11. ERFOLGSMESSUNG

- Ranking in Top 10 für "dachgeschossausbau hamburg" innerhalb 6 Monate
- Lead-Formular-Submissions pro Seite tracken
- Core Web Vitals: alle grün
- Monatliches organisches Traffic-Wachstum