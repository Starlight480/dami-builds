// Regenerated portfolio sites (built by generator/build-sites.mjs).
// basic (HTML/CSS) -> sites/<name>/ ; React (standard/premium) -> sites/<name>/build/
const cases = [
  { name: 'Piano Bistro', type: 'Restaurant', url: '/dami-builds/sites/piano-bistro/index.html' },
  { name: 'Tasala Salon', type: 'Beauty salon', url: '/dami-builds/sites/tasala-salon/build/index.html' },
  { name: 'XO Bakery', type: 'Bakery', url: '/dami-builds/sites/xo-bakery/index.html' },
  { name: 'IAMFit', type: 'Fitness studio', url: '/dami-builds/sites/iamfit/build/index.html' },
  { name: 'Akara Republic', type: 'Nigerian restaurant', url: '/dami-builds/sites/akara-republic/build/index.html' },
]

export default function CaseStudies() {
  return (
    <section id="work" className="casestudies">
      <div className="container section-head">
        <h2>Example builds</h2>
        <p>Five real businesses, each rebuilt by the generator at a different tier. Click to view the live site.</p>
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
