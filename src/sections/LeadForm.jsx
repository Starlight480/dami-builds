import { useState } from 'react'

// Lead form: posts to a serverless endpoint (Vite config VITE_LEAD_ENDPOINT).
// The Resend API key lives ONLY in that endpoint (server-side) — never imported here.
// Until the endpoint is supplied, it logs the payload and shows a success UI (no key in bundle).
const ENDPOINT = (import.meta.env && import.meta.env.VITE_LEAD_ENDPOINT) || ''

export default function LeadForm() {
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setBusy(true)
    setStatus({ type: '', msg: '' })
    const data = Object.fromEntries(new FormData(e.target).entries())

    if (!ENDPOINT) {
      // No endpoint configured yet — log so dev can verify wiring, do not send.
      console.log('[LEAD] no VITE_LEAD_ENDPOINT set — payload:', data)
      setStatus({ type: 'ok', msg: 'Thanks! Your details were captured (demo mode — endpoint not set yet).' })
      setBusy(false)
      return
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed: ' + res.status)
      setStatus({ type: 'ok', msg: 'Thanks! We will contact you shortly.' })
      e.target.reset()
    } catch (err) {
      setStatus({ type: 'err', msg: 'Something went wrong. Please message us on WhatsApp instead.' })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="lead">
      <div className="container">
        <div className="section-head">
          <h2>Get a free mockup</h2>
          <p>Tell me about your business. I’ll send a quick design idea — no commitment.</p>
        </div>
        <form className="lead-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />

          <label htmlFor="business">Business</label>
          <input id="business" name="business" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" />

          <label htmlFor="message">What do you need?</label>
          <textarea id="message" name="message" rows={4} required />

          <button className="btn btn-primary" type="submit" disabled={busy} style={{ marginTop: 18, width: '100%' }}>
            {busy ? 'Sending…' : 'Send Enquiry'}
          </button>

          {status.msg && (
            <p className={`status ${status.type}`} role="status">{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
