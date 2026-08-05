import { site } from '../data/site.js'

// COPY: user — headline + subhead are from the agreed draft; refine as needed.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow">Dami Builds — {site.role}</p>
        <h1>
          {site.tagline}
        </h1>
        <p className="lead">
          {site.about.bio.split('.')[0]}. I build clean, mobile-first sites for salons, restaurants, and small businesses in {site.location.split(',')[0]} — so customers can see your menu, prices, and book without sending a DM.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#lead">
            Get a free mockup
          </a>
          <a className="btn btn-outline" href={site.whatsapp}>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
