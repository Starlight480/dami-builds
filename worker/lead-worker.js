// Cloudflare Worker stub for the lead form (free tier).
// Holds the Resend API key SERVER-SIDE. Deploy: wrangler deploy.
// The browser posts JSON { name, business, email, phone, message } to this worker's URL,
// which you then set as VITE_LEAD_ENDPOINT in .env / GitHub Pages env.

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }
    let data
    try {
      data = await request.json()
    } catch {
      return new Response('Invalid JSON', { status: 400 })
    }

    const RESEND_KEY = env.RESEND_API_KEY // set via `wrangler secret put RESEND_API_KEY`
    const TO_EMAIL = 'ainaisrael66@gmail.com' // COPY: user — your destination

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Dami Builds <onboarding@resend.dev>', // COPY: user — verified sender
        to: [TO_EMAIL],
        subject: `New enquiry from ${data.name || 'website'}`,
        text: `Name: ${data.name}\nBusiness: ${data.business}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`,
      }),
    })

    if (!res.ok) {
      return new Response('Email send failed', { status: 502 })
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json' },
    })
  },
}
