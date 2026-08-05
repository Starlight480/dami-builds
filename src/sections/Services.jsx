import { site } from '../data/site.js'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <h2>What I build for you</h2>
          <p>End-to-end digital solutions designed to grow your Lagos business.</p>
        </div>
        <div className="grid grid-2">
          {site.services.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
