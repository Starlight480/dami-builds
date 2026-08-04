// COPY: user — service titles + descriptions are from the agreed draft.
const services = [
  { n: '01', title: 'Web Design', desc: 'Clean, mobile-first sites built around how your customers actually browse.' },
  { n: '02', title: 'Menu & Booking Pages', desc: 'Let customers see your prices, menu, or book a slot without waiting on a reply.' },
  { n: '03', title: 'Local SEO', desc: 'Show up when someone in Lagos searches for what you offer.' },
  { n: '04', title: 'Redesigns & Fixes', desc: 'Already have a site that isn’t working? I’ll rebuild it properly.' },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container section-head">
        <h2>What I build</h2>
      </div>
      <div className="container grid-2">
        {services.map((s) => (
          <div className="service" key={s.n}>
            <span className="service-n">{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
