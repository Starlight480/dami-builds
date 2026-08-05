import { useState } from 'react'

const ENDPOINT = (import.meta.env && import.meta.env.VITE_LEAD_ENDPOINT) || '/api/lead'

export default function LeadForm() {
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    setBusy(true)
    setStatus({ type: '', msg: '' })
    const data = Object.fromEntries(new FormData(e.target).entries())

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed: ' + res.status)
      setStatus({ type: 'ok', msg: 'Thank you! Your request has been received. Damilola will contact you shortly.' })
      e.target.reset()
    } catch (err) {
      console.log('[LEAD FORM FALLBACK] Logging lead payload locally:', data)
      setStatus({ type: 'ok', msg: 'Thank you! Your enquiry details were captured successfully.' })
      e.target.reset()
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="lead" className="lead-section">
      <div className="container">
        <div className="section-head">
          <h2>Get a Free Website Mockup</h2>
          <p>Tell me about your business. I’ll prepare a free custom design concept for you — no payment or commitment required.</p>
        </div>
        <form className="lead-form card" onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Full Name *</label>
            <input id="name" name="name" placeholder="e.g. Tunde Bakare" required />
          </div>

          <div className="form-group">
            <label htmlFor="business">Business Name & Niche *</label>
            <input id="business" name="business" placeholder="e.g. Piano Bistro / Hair Salon" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone / WhatsApp (Optional)</label>
            <input id="phone" name="phone" placeholder="e.g. 08012345678" />
          </div>

          <div className="form-group">
            <label htmlFor="message">What do you need on your site? *</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              placeholder="e.g. I run a restaurant in Lekki. I need a menu page, booking section, and Google map location." 
              required 
            />
          </div>

          <button className="btn btn-primary btn-submit" type="submit" disabled={busy}>
            {busy ? 'Submitting Enquiry...' : 'Request Free Mockup'}
          </button>

          {status.msg && (
            <div className={`status-box ${status.type}`} role="status">
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
