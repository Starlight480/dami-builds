import { site } from '../data/site.js'

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-container">
        {site.trust.map((t) => (
          <div className="stat-card" key={t.label}>
            <div className="v">{t.n}</div>
            <div className="l">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
