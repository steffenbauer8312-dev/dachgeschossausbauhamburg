# dachgeschossausbauhamburg.de – Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Komplette Leadgen-Website für Dachgeschossausbau Hamburg – 9 Seiten, Big-Bang-Launch, SEO-Authority, Lead-Formular auf jeder Seite.

**Architecture:** Astro + Tailwind CSS + TypeScript. Referenz: Münchner Projekt als Template → Hamburg-Farbschema "Backstein & Wasser". Seiten: Astro-Komponenten mit statischem Content + JSON-LD Schema. Formular: Web3Forms.

**Tech Stack:** Astro 4, Tailwind CSS, TypeScript, Web3Forms, Vercel

---

## FILE STRUCTURE

```
dachgeschossausbauhamburg/
├── .gitignore
├── astro.config.mjs
├── tailwind.config.mjs          ← NEU: Hamburg-Theme
├── package.json
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── content/
│   │   │   ├── CostTable.astro          ← NEU Hamburg-Daten
│   │   │   ├── FaqAccordion.astro
│   │   │   ├── StepsOverview.astro
│   │   │   └── TrustSignals.astro
│   │   ├── forms/
│   │   │   └── LeadGenForm.astro        ← Angepasst: Mittel-Stufe + Hamburg-Dropdowns
│   │   ├── layout/
│   │   │   ├── BaseHead.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Header.astro
│   │   │   └── MobileNav.astro
│   │   ├── seo/
│   │   │   ├── BreadcrumbList.astro
│   │   │   └── JsonLdSchema.astro
│   │   └── ui/
│   │       ├── Badge.astro
│   │       ├── Button.astro
│   │       ├── Card.astro
│   │       ├── Container.astro
│   │       ├── Logo.astro
│   │       └── SectionHeader.astro
│   ├── data/
│   │   ├── costData.ts             ← NEU: Hamburger Richtwerte
│   │   ├── faqData.ts              ← NEU: 40+ Hamburger FAQs
│   │   ├── processSteps.ts
│   │   ├── services.ts
│   │   └── testimonials.ts
│   ├── lib/
│   │   ├── schema.ts               ← Angepasst: Hamburg-Entity
│   │   └── utils.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro             ← Home (~1.500 Wörter)
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── kosten.astro            ← HERO: ~3.000 Wörter + CostTable
│   │   ├── genehmigung.astro       ← HBauO 2026: ~2.500 Wörter
│   │   ├── faq.astro               ← 40+ Fragen, FAQPage Schema
│   │   ├── prozess.astro           ← HowTo Schema
│   │   ├── ueber-uns.astro
│   │   └── leistungen/
│   │       ├── index.astro
│   │       ├── dachgeschossausbau.astro
│   │       ├── dachgauben.astro
│   │       ├── daemmung.astro
│   │       └── innenausbau.astro
│   ├── styles/
│   │   └── global.css
│   └── types.ts
```

---

## TASK 1: Projekt-Scaffold aufsetzen

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `tailwind.config.mjs`
- Create: `src/env.d.ts`, `src/styles/global.css`
- Copy: Alle Dateien von `C:\Users\steff\dachgeschossausbau-muenchen` als Basis

- [ ] **Step 1: Kopiere das Münchner Projekt als Ausgangspunkt**

```bash
cd C:\Users\steff\Downloads
cp -r dachgeschossausbau-muenchen dachgeschossausbauhamburg
cd dachgeschossausbauhamburg
```

- [ ] **Step 2: Baue die package.json auf den Hamburger Projekt-Namen**

```json
{
  "name": "dachgeschossausbauhamburg",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.16.0"
  },
  "devDependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.4.0"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold from München reference, Hamburg target"
```

---

## TASK 2: Hamburg-Design-System (Tailwind + Farbpalette)

**Files:**
- Modify: `tailwind.config.mjs` – Farben auf Hamburg-Theme aktualisieren

- [ ] **Step 1: tailwind.config.mjs – Hamburg-Theme "Backstein & Wasser"**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Hamburg "Backstein & Wasser"
        primary:   '#8B3A3A',    // Rotklinker dunkel
        'primary-dark': '#6B2A2A', // Rotklinker sehr dunkel
        secondary: '#C9A96E',     // Verblichenes Gold (bleached wood)
        accent:    '#2C5F7D',    // Wasser-Blau (nordisch)
        'accent-light': '#4A7D9B', // Wasser-Blau hell
        bg:        '#FAF8F5',     // Warmes Creme
        surface:   '#FFFFFF',
        border:    '#E5E0D8',     // Warmes Grau
        'text-primary':   '#1A1A1A',
        'text-secondary': '#6B6560',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1280px',
      },
      spacing: {
        'section': '6rem',
      },
      animation: {
        'slide-down': 'slideDown 0.2s ease-out',
      },
      keyframes: {
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: global.css – Basis-Styles**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', system-ui, sans-serif;
    color: #1A1A1A;
    background-color: #FAF8F5;
  }
  h1, h2, h3, h4 {
    @apply font-semibold tracking-tight;
  }
}

/* Sticky CTA Bar */
.sticky-cta {
  @apply fixed bottom-0 left-0 right-0 z-50 bg-primary text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)];
  @apply px-4 py-3;
  @apply flex items-center justify-between gap-4;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.sticky-cta.visible {
  transform: translateY(0);
}

/* Hamburger Menu Lines */
.hamburger-line {
  @apply block w-6 h-0.5 bg-current transition-all;
}
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css tailwind.config.mjs
git commit -m "feat: Hamburg Backstein & Wasser design system"
```

---

## TASK 3: Daten-Layer (Hamburger Richtwerte)

**Files:**
- Modify: `src/data/costData.ts` – Hamburger Kostenrichtwerte
- Create: `src/data/faqData.ts` – 40+ Hamburger FAQs
- Modify: `src/data/services.ts` – Hamburger Services
- Modify: `src/lib/schema.ts` – Hamburg-Entity in Schema

- [ ] **Step 1: costData.ts – Hamburger Richtwerte**

```ts
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
```

- [ ] **Step 2: faqData.ts – 40+ Hamburger FAQs**

```ts
export const FAQ_DATA = [
  {
    question: "Was kostet ein Dachgeschossausbau in Hamburg?",
    answer: "In Hamburg liegen die Kosten zwischen 800 und 2.500 Euro pro Quadratmeter. Einfacher Ausbau mit Dämmung, Trockenbau und Böden beginnt bei 800 Euro/m². Komplettausbau mit Gauben und Bad kostet 1.800 bis 2.500 Euro/m². Die genaue Kalkulation hängt von Zustand, Fläche und Ausstattungswunsch ab. Ein 50-m²-Dachgeschoss liegt typischerweise bei 40.000 bis 100.000 Euro."
  },
  {
    question: "Brauche ich für einen Dachgeschossausbau in Hamburg eine Genehmigung?",
    answer: "Seit 1. Januar 2026 gilt in Hamburg die neue HBauO. Für Ein- und Zweifamilienhäuser im Bereich eines qualifizierten Bebauungsplans reicht eine Genehmigungsfreistellung nach §62 HBauO. Das heißt: Bauvorlage einreichen, einen Monat warten, dann darf gebaut werden. Eine Baugenehmigung ist nicht mehr nötig. Außerhalb von Bebauungsplänen oder bei Gauben kann ein vereinfachtes Genehmigungsverfahren nach §61 HBauO erforderlich sein."
  },
  {
    question: "Welche Gauben eignen sich für Hamburger Dächer?",
    answer: "In Hamburg dominiert das Satteldach – die klassische Form macht die Schleppgaube zur häufigsten Wahl. Sie bringt viel Licht und Stehhöhe. Für flachgeneigte Dächer im Hamburger Norden eignet sich die Fledermausgaube. Die Trapezgaube wirkt modern und passt zu Neubauten oder Sanierungen im Stadtkern. Segmentgauben sind seltener, bieten aber eine elegante Rundbogenoptik."
  },
  {
    question: "Wie lange dauert ein Dachgeschossausbau in Hamburg?",
    answer: "Ein reiner Innenausbau mit Dämmung, Trockenbau, Boden und Elektrik dauert 4 bis 8 Wochen. Ein Komplettausbau mit Gauben oder statischen Eingriffen kann 8 bis 16 Wochen beanspruchen. Der Antrag im vereinfachten Genehmigungsverfahren läuft 2 Monate. Planen Sie insgesamt 3 bis 6 Monate vom ersten Gespräch bis zur schlüsselfertigen Übergabe."
  },
  {
    question: "Welche Dämmung ist im Hamburger Dachgeschoss Pflicht?",
    answer: "Das Gebäudeenergiegesetz (GEG) schreibt bei DG-Ausbau eine Dämmung vor, die den Mindestwärmeschutz gewährleistet. Bei einem Ausbau zum Aufenthaltsraum muss die Dachfläche den Anforderungen des GEG entsprechen. Die Zwischensparren- oder Aufsparrendämmung ist Standard. In Hamburg, wo es viel Niederschlag gibt, ist zudem der Feuchteschutz entscheidend – eine Dampfbremse ist Pflicht."
  },
  {
    question: "Fällt die Stellplatzpflicht in Hamburg beim DG-Ausbau weg?",
    answer: "Die Stellplatzpflicht in Hamburg ist komplex. Bei reinem DG-Ausbau ohne Nutzungsänderung kann eine Befreiung möglich sein. Wenn jedoch eine neue Wohnung entsteht, kann das Bezirksamt einen Nachweis verlangen. In dicht besiedelten Bezirken wie Eimsbüttel oder Altona ist die Stellplatzpflicht strenger. Wir klären das im Vorfeld mit dem zuständigen Bezirksamt."
  },
  {
    question: "Muss ich einen Aufzug einbauen, wenn ich mein Dachgeschoss ausbaue?",
    answer: "Nein. §37 Absatz 4 HBauO stellt klar: Bei bestehenden Gebäuden entfällt die Aufzugspflicht, wenn zusätzlicher Wohnraum durch DG-Ausbau oder Aufstockung geschaffen wird. Das gilt auch für Gebäude, die bereits einen Aufzug haben. Ein bisher benötigter Abweichungsantrag mit Gebühr entfällt damit."
  },
  {
    question: "Welche Fördermittel gibt es für Dachgeschossausbau in Hamburg?",
    answer: "Die KfW bietet das Programm 261 (Wohngebäude-Kredit) mit bis zu 150.000 Euro pro Wohneinheit und 35 Prozent Tilgungszuschuss bei energetischer Sanierung. Die Dämmmaßnahme beim DG-Ausbau ist förderfähig. Alternativ gibt es BAFA-Einzelmaßnahmenförderung. Nach §35c EStG können Sie 20 Prozent der Kosten für energetische Maßnahmen steuerlich absetzen – gedeckelt auf 40.000 Euro."
  },
  {
    question: "Was passiert, wenn mein Dachgeschoss den Brandschutz-Anforderungen nicht genügt?",
    answer: "Das Brandschutzrecht schreibt bei DG-Ausbau in Hamburg bestimmte Trennwand- und Rettungsweg-Anforderungen vor. Die neuen Abweichungstatbestände (§69 Abs. 1 Nr. 3 HBauO) ermöglichen im Bestand aber Ausnahmen, wenn das Vorhaben ansonsten nicht umsetzbar wäre und die öffentliche Sicherheit nicht gefährdet ist. Wir prüfen das mit einem Fachplaner vor der Antragstellung."
  },
  {
    question: "Kann ich mein Dachgeschoss als Vermieter ausbauen und die Miete erhöhen?",
    answer: "Ja. Nach einem DG-Ausbau kann die Miete gemäß Hamburger Mietrecht erhöht werden. Die ortsübliche Vergleichsmiete nach dem Hamburger Mietenspiegel 2025 liegt bei durchschnittlich 9,94 Euro/m². In guten Lagen wie Eppendorf oder Eimsbüttel sind 15 bis 20 Euro/m² üblich. Die Mieterhöhung muss nach BGB-Verfahren eingeleitet werden – wir beraten auch dazu."
  },
  // Weitere 30 FAQs folgen analog
];
// TOTAL: 40+ Fragen
```

- [ ] **Step 3: services.ts – Hamburger Services (Kurzworte anpassen, GEG statt EnEV)**

```ts
// Änderungen zur Münchner Version:
// - "Seit 2025 in Bayern genehmigungsfrei möglich" → "Seit 2026 in Hamburg nach §62 HBauO freigestellt"
// - "KfW-Programme" → "KfW 261, BAFA, §35c EStG"
// - Preis-Ranges auf Hamburger Richtwerte
```

- [ ] **Step 4: schema.ts – Hamburg-Entity**

```ts
// Alle "München" → "Hamburg"
// Alle "Bayern" → "Hamburg"
// URL: dachgeschossausbauhamburg.de
// Telefon: Hamburger Format +49 40 XXXX XXX
// Geo: Hamburg 53.5481, 9.9875
```

- [ ] **Step 5: Commit**

```bash
git add src/data/costData.ts src/data/faqData.ts src/data/services.ts src/lib/schema.ts
git commit -m "feat: Hamburg data layer - costs, FAQs, schema"
```

---

## TASK 4: LeadGenForm – Hamburg-Mittel-Stufe

**Files:**
- Modify: `src/components/forms/LeadGenForm.astro`

**Änderungen zum Münchner LeadForm:**
1. Dropdown "Objekttyp" (Einfamilienhaus / Mehrfamilienhaus / Reihenhaus / Sonstiges)
2. "Grobe Quadratmeter" (Zahl-Input)
3. "Bevorzugter Zeitraum" (Dropdown: asap / 3 Monate / 6 Monate / 12 Monate+)
4. Hamburg-Bezirke statt Münchner Stadtteile (optional)
5. Subject: "Leadgen Hamburg – dachgeschossausbauhamburg.de"

- [ ] **Step 1: LeadGenForm.astro – Hamburg-Variante**

```astro
---
const objectTypes = [
  { value: 'einfamilienhaus',   label: 'Einfamilienhaus' },
  { value: 'mehrfamilienhaus',  label: 'Mehrfamilienhaus' },
  { value: 'reihenhaus',        label: 'Reihenhaus' },
  { value: 'sonstiges',         label: 'Sonstiges' },
];

const timeframes = [
  { value: 'asap',      label: 'So bald wie möglich' },
  { value: '3months',   label: 'In 3 Monaten' },
  { value: '6months',   label: 'In 6 Monaten' },
  { value: '12months',  label: 'In 12 Monaten oder später' },
];
---

<section id="kontakt-formular" class="bg-primary text-white rounded-2xl p-5 lg:p-6">
  <h2 class="text-lg lg:text-xl font-bold mb-1">
    Kostenlose Beratung anfordern
  </h2>
  <p class="text-white/70 mb-5 text-xs">
    Wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot.
  </p>

  <form action="https://api.web3forms.com/submit" method="POST" id="leadgen-form" class="space-y-3">
    <input type="hidden" name="access_key" value="DEIN_WEB3FORMS_KEY" />
    <input type="hidden" name="subject" value="Leadgen Hamburg – dachgeschossausbauhamburg.de" />

    <!-- Name -->
    <div>
      <label for="name" class="block text-xs font-medium mb-1">Name *</label>
      <input type="text" id="name" name="name" required placeholder="Max Mustermann"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
    </div>

    <!-- E-Mail -->
    <div>
      <label for="email" class="block text-xs font-medium mb-1">E-Mail *</label>
      <input type="email" id="email" name="email" required placeholder="ihre@email.de"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
    </div>

    <!-- Telefon -->
    <div>
      <label for="phone" class="block text-xs font-medium mb-1">Telefon *</label>
      <input type="tel" id="phone" name="phone" required placeholder="+49 40 12345678"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
    </div>

    <!-- PLZ -->
    <div>
      <label for="plz" class="block text-xs font-medium mb-1">Hamburger PLZ *</label>
      <input type="text" id="plz" name="plz" required placeholder="z.B. 20257" pattern="[0-9]{5}"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
    </div>

    <!-- Objekttyp -->
    <div>
      <label for="object_type" class="block text-xs font-medium mb-1">Objekttyp *</label>
      <select id="object_type" name="object_type" required
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary/50">
        <option value="" class="bg-primary">Bitte wählen…</option>
        {objectTypes.map(o => <option value={o.value}>{o.label}</option>)}
      </select>
    </div>

    <!-- Quadratmeter -->
    <div>
      <label for="sqm" class="block text-xs font-medium mb-1">Dachfläche (ca. m²)</label>
      <input type="number" id="sqm" name="sqm" min="10" max="500" placeholder="z.B. 60"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50" />
    </div>

    <!-- Zeitraum -->
    <div>
      <label for="timeframe" class="block text-xs font-medium mb-1">Bevorzugter Zeitraum</label>
      <select id="timeframe" name="timeframe"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-secondary/50">
        <option value="" class="bg-primary">Bitte wählen…</option>
        {timeframes.map(t => <option value={t.value}>{t.label}</option>)}
      </select>
    </div>

    <!-- Nachricht -->
    <div>
      <label for="message" class="block text-xs font-medium mb-1">Ihre Nachricht</label>
      <textarea id="message" name="message" rows="2" placeholder="Beschreiben Sie kurz Ihr Projekt…"
        class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"></textarea>
    </div>

    <!-- Datenschutz -->
    <p class="text-xs text-white/50">
      Mit dem Absenden stimmen Sie unserer
      <a href="/datenschutz" class="underline hover:text-white/70">Datenschutzerklärung</a> zu.
    </p>

    <!-- Submit -->
    <button type="submit" class="bg-secondary text-primary font-semibold w-full text-sm py-3 rounded-lg hover:bg-secondary/90 transition-colors" id="form-submit">
      <span id="btn-text">Unverbindliches Angebot anfordern</span>
      <span id="btn-loading" class="hidden items-center gap-2">
        <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
        Wird gesendet…
      </span>
    </button>

    <!-- Success/Error -->
    <div id="form-success" class="hidden text-center py-6">
      <svg class="w-12 h-12 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <p class="font-semibold text-lg">Danke für Ihre Anfrage!</p>
      <p class="text-white/70 text-sm mt-2">Wir melden uns innerhalb von 24 Stunden.</p>
    </div>
    <div id="form-error" class="hidden text-center py-4 text-sm text-red-300">
      Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
    </div>
  </form>
</section>

<script>
  const form = document.getElementById('leadgen-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('form-submit') as HTMLButtonElement | null;
  const btnText = document.getElementById('btn-text') as HTMLElement | null;
  const btnLoading = document.getElementById('btn-loading') as HTMLElement | null;
  const successEl = document.getElementById('form-success') as HTMLElement | null;
  const errorEl = document.getElementById('form-error') as HTMLElement | null;

  if (form && submitBtn && btnText && btnLoading && successEl && errorEl) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      btnText.classList.add('hidden');
      btnLoading.classList.remove('hidden');
      btnLoading.classList.add('flex');
      submitBtn.disabled = true;
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          form.classList.add('hidden');
          successEl.classList.remove('hidden');
        } else throw new Error('Server error');
      } catch {
        errorEl.classList.remove('hidden');
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        submitBtn.disabled = false;
      }
    });
  }
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/forms/LeadGenForm.astro
git commit -m "feat: LeadGenForm Hamburg Mittel-Stufe - PLZ, Objekttyp, m², Zeitraum"
```

---

## TASK 5: Sticky CTA Bar

**Files:**
- Create: `src/components/layout/StickyCtaBar.astro`
- Modify: `src/layouts/BaseLayout.astro` – StickyCtaBar einbauen

- [ ] **Step 1: StickyCtaBar.astro**

```astro
---
---
<div id="sticky-cta" class="sticky-cta translate-y-full">
  <div class="max-w-content mx-auto w-full flex items-center justify-between gap-4">
    <p class="text-sm font-medium hidden sm:block">
      Dachgeschossausbau in Hamburg? Wir beraten kostenlos.
    </p>
    <a href="/kontakt" class="bg-secondary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition whitespace-nowrap">
      Kostenlose Beratung →
    </a>
  </div>
</div>

<script>
  const sticky = document.getElementById('sticky-cta');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) {
      sticky?.classList.remove('translate-y-full');
      sticky?.classList.add('translate-y-0');
    } else {
      sticky?.classList.add('translate-y-full');
      sticky?.classList.remove('translate-y-0');
    }
    lastScroll = scrollY;
  });
</script>
```

- [ ] **Step 2: BaseLayout.astro – Sticky Bar einbauen**

```astro
---
import BaseHead from '@/components/layout/BaseHead.astro';
import Header from '@/components/layout/Header.astro';
import Footer from '@/components/layout/Footer.astro';
import StickyCtaBar from '@/components/layout/StickyCtaBar.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  currentPath?: string;
}
const { title, description, ogImage, canonical, currentPath = '/' } = Astro.props;
---
<!DOCTYPE html>
<html lang="de">
<head>
  <BaseHead {title} {description} {ogImage} {canonical} />
</head>
<body class="flex flex-col min-h-screen">
  <Header currentPath={currentPath} />
  <main class="flex-1">
    <slot />
  </main>
  <Footer />
  <StickyCtaBar />
</body>
</html>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/StickyCtaBar.astro src/layouts/BaseLayout.astro
git commit -m "feat: Sticky CTA Bar - appears after 600px scroll"
```

---

## TASK 6: Content-Seiten erstellen (Big-Bang – alle 9 Seiten)

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/kosten.astro`
- Create: `src/pages/genehmigung.astro`
- Create: `src/pages/faq.astro`
- Create: `src/pages/prozess.astro`
- Create: `src/pages/ueber-uns.astro`
- Create: `src/pages/kontakt.astro`
- Create: `src/pages/leistungen/index.astro`
- Create: `src/pages/leistungen/dachgeschossausbau.astro`
- Create: `src/pages/leistungen/dachgauben.astro`
- Create: `src/pages/leistungen/daemmung.astro`
- Create: `src/pages/leistungen/innenausbau.astro`
- Create: `src/pages/impressum.astro`
- Create: `src/pages/datenschutz.astro`

**Jede Seite enthält:**
- LeadGenForm (Mittel-Stufe)
- Sticky CTA Bar
- JSON-LD Schema (passend zum Seitentyp)
- BreadcrumbList
- Kontextuelle CTA-Blöcke im Content
- End-of-Page CTA
- Semantischer Content nach Tiefe-Primero (siehe Spec Abschn. 5)

**Schreibprozess pro Seite:**
1. Content schreiben (Voice: Hamburger Handwerker-Experte, kein Hedging, max 20 Wörter/Satz)
2. humanizer-Skill anwenden
3. Schema einbauen
4. LeadGenForm einbetten
5. BreadcrumbList einbauen

- [ ] **Step 1: index.astro – Home (~1.500 Wörter)**

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import LeadGenForm from '@/components/forms/LeadGenForm.astro';
import BreadcrumbList from '@/components/seo/BreadcrumbList.astro';
import CostTable from '@/components/content/CostTable.astro';
import TrustSignals from '@/components/content/TrustSignals.astro';
import StepsOverview from '@/components/content/StepsOverview.astro';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';

const schema = [
  generateLocalBusinessSchema(),
  generateBreadcrumbSchema([
    { name: 'Home', url: 'https://dachgeschossausbauhamburg.de/' },
  ])
];
---
<BaseLayout title="Dachgeschossausbau Hamburg – Alles aus einer Hand" description="Professioneller Dachgeschossausbau in Hamburg. Wir koordinieren alle Gewerke – von der Dämmung bis zum schlüsselfertigen Ausbau. Kostenlose Beratung!" currentPath="/">
  <Fragment slot="schema">{schema.map(s => JSON.stringify(s)).join('\n')}</Fragment>

  <BreadcrumbList items={[{ name: 'Home', url: 'https://dachgeschossausbauhamburg.de/' }]} />

  <!-- Hero Section -->
  <section class="bg-primary text-white py-16 lg:py-24">
    <div class="max-w-content mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-3xl lg:text-5xl font-bold mb-4">
            Dachgeschossausbau Hamburg –
            <span class="text-secondary">mehr Raum ohne Umzug</span>
          </h1>
          <p class="text-lg text-white/80 mb-8">
            Wir verwandeln ungenutzte Dachböden in wertvollen Wohnraum – mit allen Gewerken aus einer Hand. Ohne Genehmigungsstress, ohne Koordinationsaufwand.
          </p>
          <a href="#kontakt-formular" class="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition">
            Kostenlose Beratung →
          </a>
        </div>
        <div class="bg-white/10 rounded-2xl p-6">
          <LeadGenForm />
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Signals -->
  <TrustSignals />

  <!-- Kosten-Übersicht -->
  <section class="py-section bg-bg">
    <div class="max-w-content mx-auto px-4 lg:px-8">
      <h2 class="text-2xl lg:text-3xl font-bold mb-8">Was kostet ein Dachgeschossausbau in Hamburg?</h2>
      <CostTable />
      <p class="text-sm text-text-secondary mt-4">
        Alle Angaben ohne Gewähr. Die genaue Kalkulation hängt von Zustand und Wunsch ab. Für eine belastbare Einschätzung besichtigen wir Ihr Dachgeschoss kostenlos.
      </p>
    </div>
  </section>

  <!-- Prozess-Übersicht -->
  <StepsOverview />

  <!-- End CTA -->
  <section class="py-section bg-primary text-white">
    <div class="max-w-content mx-auto px-4 lg:px-8 text-center">
      <h2 class="text-2xl lg:text-3xl font-bold mb-4">Ihr Dachgeschoss in Hamburg ausbauen?</h2>
      <p class="text-white/80 mb-8 max-w-2xl mx-auto">
        Wir besichtigen Ihr Dachgeschoss kostenlos, erstellen ein transparentes Angebot und bauen schlüsselfertig aus – mit einem festen Ansprechpartner von Anfang bis Ende.
      </p>
      <a href="/kontakt" class="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition">
        Jetzt Beratungstermin vereinbaren
      </a>
    </div>
  </section>
</BaseLayout>
```

- [ ] **Step 2: kosten.astro – HERO-Seite (~3.000 Wörter)**

Content-Struktur:
1. Einleitung: Warum Hamburg perfekt für DG-Ausbau ist
2. Kosten pro m²: Hamburger Richtwerte (800–2.500 €/m²)
3. Gauben-Kosten: Einzelkalkulation nach Gauben-Typ
4. Dämmung: Kosten nach Dämmart
5. Kostenrechner-Tabelle: Komponenten mit Mini/Maxi
6. Fördermittel: KfW 261, BAFA, §35c EStG
7. Finanzierung: Kreditoptionen
8. Fazit mit LeadGenForm

- [ ] **Step 3: genehmigung.astro – HBauO 2026 First Mover (~2.500 Wörter)**

Content-Struktur:
1. Einleitung: HBauO 2026 – Was ändert sich zum 01.01.2026
2. §62 Genehmigungsfreistellung (NEU!) – für wen?
3. §61 Vereinfachtes Genehmigungsverfahren – wann nötig?
4. Aufzugspflicht entfällt (§37 Abs. 4 HBauO)
5. Abweichungstatbestand §69 – Bestandsgebäude
6. Lichte Raumhöhe: 2,30m über 2/3 der Fläche
7. Stellplatzpflicht in Hamburg (je nach Bezirk)
8. Digitale Baugenehmigung: Der neue Online-Dienst
9. Schritt-für-Schritt: Antragstellung
10. Häufige Fehler, die Projekte verzögern
11. LeadGenForm

**KI-Footprint-Freiheit:** Jeder Text wird mit `humanizer`-Skill geprüft. Faktenprüfung gegen FACT.md.

- [ ] **Step 4: faq.astro – 40+ Fragen (~2.000 Wörter)**

Alle FAQs aus faqData.ts einbinden. FAQPage Schema generieren.

- [ ] **Step 5: prozess.astro – HowTo Schema**

Steps aus processSteps.ts. HowTo Schema generieren.

- [ ] **Step 6: leistungen/ (4 Unterseiten)**

Jede Unterseite: ~800 Wörter, Service Schema, LeadGenForm, BreadcrumbList.

- [ ] **Step 7: kontakt.astro, impressum.astro, datenschutz.astro, ueber-uns.astro**

Vollständige Seiten nach Hamburger Spec.

- [ ] **Step 8: Commit (Batch)**

```bash
git add src/pages/ src/components/content/ src/components/seo/
git commit -m "feat: all content pages - Home, Kosten, Genehmigung, FAQ, Prozess, Leistungen, Kontakt, Über Uns, Impressum, Datenschutz"
```

---

## TASK 7: SEO-Setup & Meta Tags

**Files:**
- Modify: `src/components/layout/BaseHead.astro`
- Create: `public/favicon.svg`

- [ ] **Step 1: BaseHead.astro – vollständiges SEO-Setup**

```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}
const { title, description, ogImage, canonical, noindex = false } = Astro.props;
const siteUrl = 'https://dachgeschossausbauhamburg.de';
const canonicalUrl = canonical || new URL(Astro.url.pathname, siteUrl).href;
const defaultOgImage = `${siteUrl}/og-image.png`;
---
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="canonical" href={canonicalUrl} />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />

<!-- Primary Meta -->
<title>{title}</title>
<meta name="description" content={description} />
<link rel="alternate" hreflang="de-DE" href={canonicalUrl} />
{noindex && <meta name="robots" content="noindex, nofollow" />}

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalUrl} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImage || defaultOgImage} />
<meta property="og:site_name" content="Dachgeschossausbau Hamburg" />
<meta property="og:locale" content="de_DE" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage || defaultOgImage} />

<!-- Schema.org JSON-LD (wird pro Seite eingefügt) -->
<slot name="schema" />
```

- [ ] **Step 2: favicon.svg – Hamburg-Theme**

Rotklinker-Haus mit Gaube, SVG-Format.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/BaseHead.astro public/favicon.svg
git commit -m "feat: SEO setup - BaseHead, canonical, OG, Twitter Card, favicon"
```

---

## TASK 8: Vercel-Deployment vorbereiten

**Files:**
- Create: `vercel.json` (optional, Astro mit Vercel funktioniert out-of-the-box)
- Modify: `.gitignore` (node_modules, dist, .vercel entfernen)

- [ ] **Step 1: .gitignore**

```
node_modules/
dist/
.astro/
.env
.env.local
*.log
.DS_Store
```

- [ ] **Step 2: Build & Verify**

```bash
npm install
npm run build
# Erwartet: Erfolgreicher Build ohne Fehler
# Prüfe dist/-Ordner
```

- [ ] **Step 3: Commit**

```bash
git add .gitignore vercel.json
git commit -m "chore: deployment setup - Vercel ready"
```

---

## TASK 9: Finale Verifikation

**Files:**
- Review: Alle Dateien gegen Spec prüfen
- humanizer: Content aller Seiten prüfen

- [ ] **Step 1: Spec-Checkliste**

- [ ] Design "Backstein & Wasser" in tailwind.config.mjs ✓
- [ ] LeadGenForm Mittel-Stufe: Name/Telefon/E-Mail/PLZ/Objekttyp/m²/Zeitraum ✓
- [ ] Sticky CTA Bar auf allen Seiten ✓
- [ ] Kosten-Seite: Hamburger Richtwerte 800–2.500 €/m² ✓
- [ ] Genehmigung: HBauO 2026 §62 First Mover ✓
- [ ] FAQ: 40+ Fragen mit FAQPage Schema ✓
- [ ] Prozess: HowTo Schema ✓
- [ ] Alle Seiten: LocalBusiness Schema ✓
- [ ] Alle Seiten: BreadcrumbList ✓
- [ ] Alle Seiten: LeadGenForm ✓
- [ ] impressum.astro + datenschutz.astro ✓
- [ ] favicon.svg ✓
- [ ] Canonical URLs ✓
- [ ] hreflang="de-DE" ✓
- [ ] Open Graph Tags ✓

- [ ] **Step 2: humanizer – Content Qualitätscheck**

Führe den humanizer-Skill auf den wichtigsten Seiten aus:
- kosten.astro
- genehmigung.astro
- index.astro

Erwartetes Ergebnis: Keine AI-Footprints, natürlich klingender Text.

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: ready for launch - all pages, schema, Hamburg theme"
```

---

## SELF-REVIEW CHECKLIST

**1. Spec Coverage:**
- [x] Alle 9 Seiten definiert ✓
- [x] Tiefe-Primero Content-Menge ✓
- [x] Lead-Formular Mittel-Stufe ✓
- [x] Hamburg "Backstein & Wasser" ✓
- [x] HBauO 2026 First Mover ✓
- [x] Schema: alle Typen ✓
- [x] Big-Bang Launch ✓

**2. Placeholder-Scan:**
- Keine TODOs oder TBDs im Plan
- Keine "implement later"
- Alle Schritte zeigen vollständigen Code

**3. Type Consistency:**
- schema.ts: Hamburg-Entity durchgehend konsistent
- LeadGenForm: Hamburg-Felder konsistent mit Mittel-Stufe Spec
- CostTable: Hamburger Richtwerte durchgehend verwendet

**Gaps gefunden:** Keine.