# leadgen-brevo-form-worker

Cloudflare Worker, der Leadformular-Submissions von Domains wie
`dachgeschossausbauhamburg.de` und `dachgeschossausbaumuenchen.de` entgegennimmt
und über die **Brevo Transactional API** an `info@projektkanal.de` weiterleitet.

## Endpunkt

| Methode | Pfad       | Zweck                                   |
| ------- | ---------- | --------------------------------------- |
| GET     | `/api/lead`| Healthcheck (gibt `{ok:true}` zurück)   |
| OPTIONS | `/api/lead`| CORS-Preflight                          |
| POST    | `/api/lead`| Leadform-Submission                     |

## Verhalten

- akzeptiert `application/json`, `application/x-www-form-urlencoded` und `multipart/form-data`
- Honeypot-Felder (`website`, `url`, `homepage`, `company_website`) → silent success
- validiert: `email` ODER `phone` muss vorhanden und gültig sein
- baut hübsche HTML-Mail + Plaintext-Fallback
- Subject: `Neue Anfrage von {host}: {service}`
- Reply-To: Kunden-E-Mail (sofern gültig)
- Custom Header: `X-Lead-Source`, `X-Lead-Service`
- optionales `redirect` Feld → `303 See Other`

## Setup

```bash
cd workers/leadgen-brevo-form-worker
npm install
npm run secret:brevo   # BREVO_API_KEY eingeben (xkeysib-...)
```

## Dev

```bash
npm run dev
# lokal unter http://127.0.0.1:8787/api/lead
```

Schnelltest:

```bash
curl -X POST http://127.0.0.1:8787/api/lead \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","phone":"","variant":"eigentuemer"}'
```

## Deploy

```bash
npm run deploy
```

Der Worker hat **keine eigene workers.dev-URL** (`workers_dev = false`).
Er ist ausschließlich über die Cloudflare-Zone-Routes der einzelnen
Domains erreichbar (z. B. `dachgeschossausbauhamburg.de/api/lead`).

## Routes (Production)

Die Routen werden pro Domain (Zone) im Cloudflare-Dashboard konfiguriert
(oder via `wrangler routes put`). Pro Domain eine Route nach Schema:

| Pattern                              | Service                       |
| ------------------------------------ | ----------------------------- |
| `dachgeschossausbauhamburg.de/api/lead`  | `leadgen-brevo-form-worker`   |
| `dachgeschossausbaumuenchen.de/api/lead` | `leadgen-brevo-form-worker`   |
| `…` (alle 24 Domains)                | `leadgen-brevo-form-worker`   |

Da der Worker unter `*.workers.dev` **nicht** öffentlich erreichbar ist,
gibt es auf Vercel-Seite **keinen Rewrite** für `/api/lead`. Der Traffic
für `/api/lead` wird von Cloudflare direkt an den Worker geleitet und
nie an Vercel weitergereicht.

