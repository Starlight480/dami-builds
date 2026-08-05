// One business, three tiers — Piano Bistro rebuilt at 3 quality levels.
// Live links to the actual hosted versions.
const cases = [
  {
    name: 'Piano Bistro',
    type: 'Restaurant, Lekki',
    url: 'https://starlight480.github.io/dami-builds/sites/piano-bistro/basic/index.html',
    tier: 'Starter',
    desc: 'Clean, simple HTML/CSS. Fast, lightweight, and easy to host anywhere.',
  },
  {
    name: 'Piano Bistro',
    type: 'Restaurant, Lekki',
    url: 'https://starlight480.github.io/dami-builds/sites/piano-bistro/standard/build/index.html',
    tier: 'Business',
    desc: 'Same site rebuilt in React. Better interactivity, smoother experience.',
  },
  {
    name: 'Piano Bistro',
    type: 'Restaurant, Lekki',
    url: 'https://starlight480.github.io/dami-builds/sites/piano-bistro/premium/build/index.html',
    tier: 'Premium',
    desc: 'Full polish: refined spacing, premium palette, hover states, and stronger hierarchy.',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="casestudies">
      <div className="container section-head">
        <h2>One business, built three ways</h2>
        <p>Piano Bistro — Lekki. Same content, three tiers of execution. Click to view the live site.</p>
      </div>
      <div className="container grid-3">
        {cases.map((c) => (
          <a className="case-card" href={c.url} target="_blank" rel="noopener noreferrer" key={c.tier}>
            <div className="case-type">{c.tier}</div>
            <h3>{c.name}</h3>
            <p>{c.desc}</p>
            <span className="case-link">View live →</span>
          </a>
        ))}
      </div>
    </section>
  )
}
