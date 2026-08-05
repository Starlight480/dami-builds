const cases = [
  {
    name: 'Piano Bistro',
    type: 'Fine Dining & Bistro',
    desc: 'Interactive food menu, table reservation request form, and location map for a Lekki bistro.',
    url: 'https://starlight480.github.io/piano-bistro-mockup',
    tag: 'Restaurant',
    img: './images/piano-bistro.jpg'
  },
  {
    name: 'Savor & Spice',
    type: 'Lagos Kitchen & Catering',
    desc: 'High-converting menu display with direct WhatsApp order integration for instant catering inquiries.',
    url: 'https://starlight480.github.io/restaurant',
    tag: 'Food & Beverage',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'IAMFit Studio',
    type: 'Fitness & Wellness',
    desc: 'Modern class schedule showcase, membership tier display, and trainer profiles.',
    url: 'https://starlight480.github.io/iamfit-mockup',
    tag: 'Fitness',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Tasala Hair Salon',
    type: 'Luxury Beauty & Styling',
    desc: 'Sleek hair service gallery, treatment menu, and direct appointment booking interface.',
    url: 'https://starlight480.github.io/tasala-salon/',
    tag: 'Beauty & Salon',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
  }
]

export default function CaseStudies() {
  return (
    <section id="work" className="casestudies">
      <div className="container">
        <div className="section-head">
          <h2>Example Builds & Case Studies</h2>
          <p>Real demonstration sites custom crafted for Nigerian business niches. Click any card to launch the live site.</p>
        </div>
        <div className="grid grid-2">
          {cases.map((c) => (
            <a 
              className="case-card" 
              href={c.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              key={c.name}
            >
              <div className="case-img-wrap">
                <img src={c.img} alt={c.name} loading="lazy" />
              </div>
              <div className="case-body">
                <div className="case-header">
                  <span className="case-badge">{c.tag}</span>
                  <span className="case-arrow">Live Demo ↗</span>
                </div>
                <h3>{c.name}</h3>
                <p className="case-type">{c.type}</p>
                <p className="case-desc">{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
