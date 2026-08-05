import { site } from '../data/site.js'

// About section — founder story, mission, process, stack.
export default function About() {
  const sections = [
    { title: 'About', text: site.about.bio },
    { title: 'Mission', text: site.about.mission },
    { title: 'Process', text: site.about.process },
    { title: 'Stack', text: site.about.stack },
    { title: 'Beyond client work', text: site.about.outside },
  ]
  return (
    <section id="about" className="about">
      <div className="container section-head">
        <h2>About</h2>
        <p>Founder, builder, and Lagos-based web designer.</p>
      </div>
      <div className="container about-grid">
        {sections.map((s) => (
          <div className="about-block" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
      <div className="container about-meta">
        <p><strong>{site.name}</strong> · {site.role} · {site.location}</p>
      </div>
    </section>
  )
}
