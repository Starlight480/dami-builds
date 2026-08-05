// Vercel serverless function: receives lead form POST, sends email via Resend.
// POST body: { name, business, email, phone, message }
// Env required: RESEND_API_KEY, RESEND_FROM (verified domain in Resend)
import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, business, email, phone, message } = req.body || {}

  if (!name || !business || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, business, email, message' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM

  if (!apiKey || !from) {
    console.error('[LEAD] RESEND_API_KEY or RESEND_FROM not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  try {
    const resend = new Resend(apiKey)
    const data = await resend.emails.send({
      from,
      to: 'dami.builds@gmail.com',
      subject: `New enquiry from ${name} — ${business}`,
      replyTo: email,
      html: `
        <h2>New lead from Dami Builds</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log('[LEAD] sent', data.id)
    return res.status(200).json({ ok: true, id: data.id })
  } catch (err) {
    console.error('[LEAD] failed', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
