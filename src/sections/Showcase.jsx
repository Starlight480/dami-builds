import { useState } from 'react'

// STATIC showcase — pre-built demo sites only. No live generation.
// Free = plain HTML/CSS/JS; Higher/Top = pre-built React (produced by the generator).
// Generator logic lives in src/generator/ for later use.
const DEMOS = [
  { id: 'free', label: 'Free — HTML/CSS/JS', src: import.meta.env.BASE_URL + 'demos/free-saffron-table/index.html' },
  { id: 'higher', label: 'Higher — React', src: import.meta.env.BASE_URL + 'demos/higher-saffron-table/build/index.html' },
  { id: 'top', label: 'Top — React (premium)', src: import.meta.env.BASE_URL + 'demos/top-saffron-table/build/index.html' },
]

export default function Showcase() {
  const [active, setActive] = useState(DEMOS[0].id)
  const current = DEMOS.find((d) => d.id === active)
  return (
    <section id="examples" className="generator">
      <div className="container section-head">
        <h2>One business, built three ways</h2>
        <p>Free is plain HTML/CSS/JS. Higher and Top are React — Top adds premium polish.</p>
      </div>
      <div className="container gen-tabs">
        {DEMOS.map((d) => (
          <button
            key={d.id}
            className={active === d.id ? 'active' : ''}
            onClick={() => setActive(d.id)}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div className="container">
        <iframe
          className="gen-frame"
          title="Example site preview"
          src={current.src}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </section>
  )
}
