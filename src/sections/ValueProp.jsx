// COPY: user — statement + supporting points are from the agreed draft.
const points = [
  {
    t: 'Customers Google you before they visit',
    d: 'If your business isn’t online, they pick the competitor who is. A website puts you in that search.',
  },
  {
    t: 'Instagram DMs get buried',
    d: 'A site answers the same five questions — prices, location, booking — at 2am, without you lifting a finger.',
  },
  {
    t: 'Trust beats a WhatsApp status',
    d: 'A real website signals you’re established. It’s the difference between “maybe” and “let’s book.”',
  },
]

export default function ValueProp() {
  return (
    <section className="valueprop">
      <div className="container section-head">
        <h2>Most businesses don’t need “a website.” They need to be found.</h2>
      </div>
      <div className="container grid-3">
        {points.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
