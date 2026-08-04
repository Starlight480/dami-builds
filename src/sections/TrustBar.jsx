import { site } from '../data/site.js'

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container" style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
        {site.trust.map((t) => (
          <div className="stat" key={t.label}>
            <div className="v">{t.value}</div>
            <div className="l">{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
