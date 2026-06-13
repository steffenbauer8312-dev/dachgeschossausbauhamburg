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

Cloudflare vergibt eine URL nach dem Schema
`https://leadgen-brevo-form-worker.<DEIN-ACCOUNT-SUBDOMAIN>.workers.dev`.

## Routes (Production)

Die produktive Route wird in Cloudflare direkt auf der Zone konfiguriert
(nicht hier einchecken, da Account-spezifisch). Üblicherweise:

- `https://dachgeschossausbauhamburg.de/api/lead`
- `https://dachgeschossausbaumuenchen.de/api/lead`

### Vercel-Rewrite einrichten

Damit `/api/lead` auf Vercel an den Worker durchgereicht wird, in
`vercel.json` einen Rewrite anlegen:

```json
{
  "rewrites": [
    {
      "source": "/api/lead",
      "destination": "https://leadgen-brevo-form-worker.<DEIN-ACCOUNT-SUBDOMAIN>.workers.dev/api/lead"
    }
  ]
}
```

`<DEIN-ACCOUNT-SUBDOMAIN>` durch den echten Subdomain ersetzen, der nach
`npm run deploy` ausgegeben wird (Dashboard › Workers › Worker öffnen).

