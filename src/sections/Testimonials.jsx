// COPY: user — replace with REAL testimonials (quote + name + company).
const quotes = [
  { q: 'Placeholder testimonial — paste a real client quote.', name: 'Client Name', company: 'Business' },
  { q: 'Placeholder testimonial — paste a real client quote.', name: 'Client Name', company: 'Business' },
  { q: 'Placeholder testimonial — paste a real client quote.', name: 'Client Name', company: 'Business' },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>What Clients Say</h2>
        </div>
        <div className="grid grid-3">
          {quotes.map((t, i) => (
            <div className="card flat" key={i}>
              <p style={{ color: 'var(--ink)' }}>“{t.q}”</p>
              <p style={{ margin: 0 }}><strong>{t.name}</strong><br />{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
