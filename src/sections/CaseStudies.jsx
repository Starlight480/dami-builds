// Example builds.
const cases = [
  { name: 'Piano Bistro', type: 'Restaurant', url: 'https://starlight480.github.io/piano-bistro-mockup' },
  { name: 'Savor & Spice', type: "Lagos Kitchen", url: 'https://starlight480.github.io/restaurant' },
  { name: 'IAMFit', type: 'Fitness studio', url: 'https://starlight480.github.io/iamfit-mockup' },
]

export default function CaseStudies() {
  return (
    <section id="work" className="casestudies">
      <div className="container section-head">
        <h2>Example builds</h2>
        <p>Real businesses I've built websites for. Click to view.</p>
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
