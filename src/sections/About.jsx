import { site } from '../data/site.js'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <h2>About Dami Builds</h2>
          <p>Local expertise, modern design standards, and transparent delivery.</p>
        </div>
        
        <div className="about-grid">
          <div className="card about-main">
            <h3>Hi, I'm Damilola</h3>
            <p>{site.about.bio}</p>
            
            <h4>The Mission</h4>
            <p>{site.about.mission}</p>
          </div>

          <div className="about-side">
            <div className="card side-card">
              <h4>The Process</h4>
              <p>{site.about.process}</p>
            </div>
            
            <div className="card side-card">
              <h4>Tech & Infrastructure</h4>
              <p>{site.about.stack}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
