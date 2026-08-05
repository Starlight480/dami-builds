import { site } from '../data/site.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-badge">
          <span className="dot"></span>
          <span>{site.brand} — {site.role}</span>
        </div>
        <h1>Websites for Nigerian small businesses</h1>
        <p className="lead">
          I build clean, mobile-first websites for salons, restaurants, bakeries, and small businesses in Lagos. 
          Get found on Google and convert visitors without relying strictly on Instagram DMs.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#lead">
            Get a Free Mockup
          </a>
          <a className="btn btn-outline" href="#work">
            View Example Work
          </a>
        </div>
      </div>
    </section>
  )
}
