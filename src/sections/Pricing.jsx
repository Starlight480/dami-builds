import { pricing } from '../data/pricing.js'

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Simple, transparent pricing</h2>
          <p>Pick the level of hands-off you want. Every site is built custom.</p>
        </div>
        <div className="pricing-grid">
          {pricing.map((t) => (
            <div className={'price-card' + (t.highlight ? ' highlight' : '')} key={t.name}>
              {t.badge && <span className="badge">{t.badge}</span>}
              <h3>{t.name}</h3>
              <p className="tagline">{t.tagline}</p>
              <div className="price">{t.price}</div>
              <p className="summary">{t.summary}</p>
              <a className="btn btn-primary" href="#lead">
                {t.cta}
              </a>
              <ul className="features">
                {t.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <p className="note">{t.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
