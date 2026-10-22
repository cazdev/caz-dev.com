/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Sends an email to chaz6cl@live.com via the Cloudflare Email Sending REST API.
 * Requires a Pages secret named CF_EMAIL_TOKEN with email_sending:write permission.
 */

const ACCOUNT_ID = '579577d5cfc6e77eb512fd8939742711'
const RECIPIENT = 'chaz6cl@live.com'
const FROM_ADDRESS = 'contact@caz-dev.com'
const FROM_NAME = 'caz-dev.com Contact Form'

export async function onRequestPost({ request, env }) {
  // Parse body
  let body
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400)
  }

  const { name, email, message } = body ?? {}

  // Basic validation
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return jsonResponse({ error: 'All fields are required.' }, 400)
  }

  if (!isValidEmail(email)) {
    return jsonResponse({ error: 'Please provide a valid email address.' }, 400)
  }

  if (message.length > 5000) {
    return jsonResponse({ error: 'Message is too long (max 5000 characters).' }, 400)
  }

  if (!env.CF_EMAIL_TOKEN) {
    console.error('CF_EMAIL_TOKEN secret is not configured')
    return jsonResponse({ error: 'Email service is not configured.' }, 500)
  }

  // Send via Cloudflare Email REST API
  try {
    const apiRes = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/email/sending/send`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.CF_EMAIL_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: RECIPIENT,
          from: { address: FROM_ADDRESS, name: FROM_NAME },
          reply_to: email.trim(),
          subject: `Contact from ${name.trim()} — caz-dev.com`,
          text: formatTextBody(name.trim(), email.trim(), message.trim()),
          html: formatHtmlBody(name.trim(), email.trim(), message.trim()),
        }),
      }
    )

    const data = await apiRes.json()

    if (!data.success) {
      const errMsg = data.errors?.[0]?.message ?? 'Unknown error'
      console.error('Email API error:', errMsg, JSON.stringify(data.errors))
      return jsonResponse({ error: 'Failed to send message. Please try again later.' }, 500)
    }
  } catch (err) {
    console.error('Email fetch failed:', err?.message)
    return jsonResponse({ error: 'Failed to send message. Please try again later.' }, 500)
  }

  return jsonResponse({ ok: true }, 200)
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function formatTextBody(name, email, message) {
  return [
    `New contact form submission from caz-dev.com`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    ``,
    `Message:`,
    message,
  ].join('\n')
}

function formatHtmlBody(name, email, message) {
  const escaped = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b; }
    .card { background: #fff; border-radius: 12px; padding: 32px; max-width: 560px; margin: auto; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .label { font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1e293b; margin-bottom: 20px; }
    .message { white-space: pre-wrap; background: #f1f5f9; border-radius: 8px; padding: 16px; font-size: 15px; color: #334155; line-height: 1.6; }
    h2 { margin: 0 0 24px; font-size: 20px; color: #6366f1; }
  </style>
</head>
<body>
  <div class="card">
    <h2>New contact from caz-dev.com</h2>
    <div class="label">Name</div>
    <div class="value">${escaped(name)}</div>
    <div class="label">Email</div>
    <div class="value"><a href="mailto:${escaped(email)}">${escaped(email)}</a></div>
    <div class="label">Message</div>
    <div class="message">${escaped(message)}</div>
  </div>
</body>
</html>`
}
