// Example builds — 5 original portfolio mockups.
const cases = [
  { name: 'Piano Bistro', type: 'Restaurant', url: 'https://starlight480.github.io/piano-bistro-mockup' },
  { name: 'Tasala Salon', type: 'Beauty salon', url: 'https://starlight480.github.io/tasala-salon-mockup' },
  { name: 'XO Bakery', type: 'Bakery', url: 'https://starlight480.github.io/xo-bakery-mockup' },
  { name: 'IAMFit', type: 'Fitness studio', url: 'https://starlight480.github.io/iamfit-mockup' },
  { name: 'Akara Republic', type: 'Nigerian restaurant', url: 'https://starlight480.github.io/akara-republic' },
]

export default function CaseStudies() {
  return (
    <section id="work" className="casestudies">
      <div className="container section-head">
        <h2>Example builds</h2>
        <p>Five real businesses built as website mockups. Click to view.</p>
      </div>
      <div className="container grid-3">
        {cases.map((c) => (
          <a className="case-card" href={c.url} target="_blank" rel="noopener noreferrer" key={c.name}>
            <div className="case-type">{c.type}</div>
            <h3>{c.name}</h3>
            <span className="case-link">View live →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
