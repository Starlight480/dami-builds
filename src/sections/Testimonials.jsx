const quotes = [
  {
    q: 'Damilola built our bistro website in just 6 days. Our customers in Lekki now view our food menu and book tables online instead of calling us during rush hours.',
    name: 'Chief Chef Tunde',
    company: 'Piano Bistro, Lekki'
  },
  {
    q: 'Before the website, 80% of our day was spent answering Instagram DMs asking for hair service prices. Now customers check the site and come straight to book.',
    name: 'Bisi Adegoke',
    company: 'Tasala Hair & Beauty, Victoria Island'
  },
  {
    name: 'Coach Emeka',
    company: 'IAMFit Studio, Ajah'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>What Clients Say</h2>
          <p>Feedback from business owners in Lagos who upgraded their online presence.</p>
        </div>
        <div className="grid grid-3">
          {quotes.map((t, i) => (
            <div className="card testimonial-card" key={i}>
              <div className="quote-mark">“</div>
              <p className="quote-text">{t.q}</p>
              <div className="author-info">
                <strong>{t.name}</strong>
                <span>{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
