import { pricing, retainers } from '../data/pricing.js'

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Clear, Transparent Pricing</h2>
          <p>Choose the tier that fits your business stage. No hidden setup fees.</p>
        </div>

        <div className="pricing-grid">
          {pricing.map((p) => (
            <div className={`price-card ${p.highlight ? 'highlight' : ''}`} key={p.name}>
              {p.badge && <span className="badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <div className="tagline">{p.tagline}</div>
              <div className="price">{p.price}</div>
              <p className="summary">{p.summary}</p>
              
              <ul className="features">
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <a 
                className={`btn ${p.highlight ? 'btn-primary' : 'btn-outline'}`} 
                href="#lead"
                style={{ width: '100%', textAlign: 'center' }}
              >
                {p.cta}
              </a>

              <div className="note">{p.note}</div>
            </div>
          ))}
        </div>

        {/* Maintenance Retainers Section */}
        <div className="retainers-wrapper">
          <div className="retainers-head">
            <h3>Optional Monthly Maintenance & Retainers</h3>
            <p>For ongoing continuous design updates, seasonal promotions, and dedicated support beyond base hosting (₦25,000/mo).</p>
          </div>
          <div className="grid grid-2">
            {retainers.map((r, idx) => (
              <div className="card retainer-card" key={idx}>
                <div className="retainer-header">
                  <h4>{r.title}</h4>
                  <span className="retainer-price">{r.price}</span>
                </div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
