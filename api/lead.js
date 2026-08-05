import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[LEAD API] Missing RESEND_API_KEY. Payload received:', req.body)
    return res.status(200).json({ ok: true, mode: 'demo', message: 'Lead logged in demo mode.' })
  }

  try {
    const { name, business, email, phone, message } = req.body || {}
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: process.env.LEAD_TO_EMAIL || 'dami.builds@gmail.com',
      subject: `New Lead: ${business || name}`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f1f5f9; padding: 12px; border-left: 4px solid #10b981;">
          ${message}
        </blockquote>
      `,
    })

    return res.status(200).json({ ok: true, message: 'Lead sent successfully.' })
  } catch (err) {
    console.error('[LEAD API ERROR]', err)
    return res.status(500).json({ error: 'Failed to process lead: ' + err.message })
  }
}
