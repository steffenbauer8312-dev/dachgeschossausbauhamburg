// leadgen-brevo-form-worker
// Empfängt Formular-Leads und sendet sie per Brevo SMTP an info@projektkanal.de

const BREVO_API = 'https://api.brevo.com/v3/smtp/email';
const SENDER_NAME = 'Projektkanal Leadformular';
const SENDER_EMAIL = 'info@projektkanal.de';
const TO_EMAIL = 'info@projektkanal.de';
const HONEYPOT_FIELDS = ['website', 'url', 'homepage', 'company_website'];

// -------------------- Helpers --------------------

function htmlEscape(str) {
  if (str === undefined || str === null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPhone(phone) {
  if (typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-\(\)\/\+]/g, '');
  return cleaned.length >= 5 && cleaned.length <= 20 && /^[0-9]+$/.test(cleaned);
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function buildHtmlEmail({ fields, host, service }) {
  const rows = Object.entries(fields)
    .filter(([key, value]) => value !== undefined && value !== null && value !== '' && !key.startsWith('_'))
    .map(([key, value]) => {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;background:#f7f5f1;font-weight:600;color:#1A1A1A;width:35%;vertical-align:top;">${htmlEscape(label)}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eee;color:#1A1A1A;vertical-align:top;word-break:break-word;">${htmlEscape(value)}</td>
        </tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8" /><title>Neue Anfrage</title></head>
<body style="margin:0;padding:0;background:#f5f4f1;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1A1A1A;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f4f1;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e0d8;">
          <tr>
            <td style="background:#3D3D3D;padding:20px 24px;color:#ffffff;">
              <h1 style="margin:0;font-size:18px;font-weight:600;">Neue Leadform-Anfrage</h1>
              <p style="margin:4px 0 0;font-size:13px;color:#c9a96e;">${htmlEscape(host || 'unbekannt')}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 24px 0;">
              <p style="margin:0 0 16px;font-size:14px;color:#6b6560;">
                <strong>Service:</strong> ${htmlEscape(service || 'k.A.')} &nbsp;·&nbsp;
                <strong>Quelle:</strong> <a href="https://${htmlEscape(host || '')}" style="color:#2C5F7D;">${htmlEscape(host || '')}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 8px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e0d8;border-radius:8px;overflow:hidden;">
                ${rows || '<tr><td style="padding:14px;color:#9a9590;">Keine Felder übermittelt.</td></tr>'}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px 24px;font-size:12px;color:#9a9590;">
              Diese Anfrage wurde automatisch vom Leadformular auf
              <strong>${htmlEscape(host || '')}</strong> übermittelt.
              <br />Versendet via leadgen-brevo-form-worker.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildTextEmail({ fields, host, service }) {
  const lines = Object.entries(fields)
    .filter(([key, value]) => value !== undefined && value !== null && value !== '' && !key.startsWith('_'))
    .map(([key, value]) => {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      return `${label}: ${value}`;
    });

  return [
    `Neue Leadform-Anfrage`,
    ``,
    `Service:  ${service || 'k.A.'}`,
    `Quelle:   ${host || 'unbekannt'}`,
    ``,
    `---`,
    ...lines,
    `---`,
    ``,
    `Diese Anfrage wurde automatisch vom Leadformular auf ${host || ''} übermittelt.`,
    `Versendet via leadgen-brevo-form-worker.`,
  ].join('\n');
}

async function sendBrevoEmail(apiKey, payload) {
  const res = await fetch(BREVO_API, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Brevo API error ${res.status}: ${text}`);
  }
  return text;
}

// -------------------- Request Handling --------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '');

    // GET – Healthcheck
    if (request.method === 'GET' && path === '/api/lead') {
      return jsonResponse({ ok: true, service: 'leadgen-brevo-form-worker' });
    }

    // OPTIONS – CORS Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // POST – Lead verarbeiten
    if (request.method === 'POST' && path === '/api/lead') {
      const contentType = (request.headers.get('content-type') || '').toLowerCase();
      let fields = {};
      let rawBody = '';

      try {
        if (contentType.includes('application/json')) {
          rawBody = await request.text();
          fields = JSON.parse(rawBody || '{}');
        } else if (
          contentType.includes('application/x-www-form-urlencoded') ||
          contentType.includes('multipart/form-data')
        ) {
          const form = await request.formData();
          for (const [k, v] of form.entries()) {
            fields[k] = v;
          }
        } else {
          // Fallback: versuche JSON, sonst form-urlencoded
          rawBody = await request.text();
          try { fields = JSON.parse(rawBody || '{}'); }
          catch { /* ignore */ }
        }
      } catch (e) {
        return jsonResponse({ ok: false, error: 'invalid_request_body' }, 400);
      }

      // Honeypot – wenn eines dieser Felder befüllt ist, harmloser Erfolg
      const honeypotHit = HONEYPOT_FIELDS.some(name => {
        const val = fields[name];
        return typeof val === 'string' && val.trim().length > 0;
      });
      if (honeypotHit) {
        return jsonResponse({ ok: true });
      }

      // Validierung: email ODER phone muss vorhanden und gültig sein
      const email = (fields.email || '').toString().trim();
      const phone = (fields.phone || '').toString().trim();
      const emailOk = isValidEmail(email);
      const phoneOk = isValidPhone(phone);

      if (!emailOk && !phoneOk) {
        return jsonResponse({ ok: false, error: 'invalid_email_or_phone' }, 400);
      }

      // Subject-Material
      const host = url.host;
      const service = (fields.variant || fields.project_type || fields.service || 'Allgemein').toString();

      const html = buildHtmlEmail({ fields, host, service });
      const text = buildTextEmail({ fields, host, service });

      const brevoPayload = {
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: TO_EMAIL, name: 'Projektkanal' }],
        replyTo: emailOk ? { email } : undefined,
        subject: `Neue Anfrage von ${host}: ${service}`,
        htmlContent: html,
        textContent: text,
        headers: {
          'X-Lead-Source': host,
          'X-Lead-Service': service,
        },
      };

      // API-Key aus Worker-Secret
      const apiKey = env.BREVO_API_KEY;
      if (!apiKey) {
        return jsonResponse({ ok: false, error: 'brevo_api_key_missing' }, 500);
      }

      try {
        await sendBrevoEmail(apiKey, brevoPayload);
      } catch (e) {
        return jsonResponse({ ok: false, error: 'brevo_send_failed', detail: String(e && e.message || e) }, 500);
      }

      // Optional: Redirect, wenn explizit gewünscht
      const redirect = fields.redirect;
      if (typeof redirect === 'string' && /^https?:\/\//.test(redirect)) {
        return Response.redirect(redirect, 303);
      }

      return jsonResponse({ ok: true });
    }

    // 404
    return jsonResponse({ ok: false, error: 'not_found' }, 404);
  },
};
