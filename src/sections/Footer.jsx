import { site } from '../data/site.js'
import D from '../logo/D.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container cols">
        <div>
          <D size={36} />
          <strong>{site.brand}</strong>
          <p>Websites for Nigerian small businesses.</p>
          <p className="small">{site.location}</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p><a href={site.whatsapp}>WhatsApp</a></p>
          <p><a href={'mailto:' + site.email}>{site.email}</a></p>
          <p><a href={site.instagram}>Instagram</a></p>
          <p><a href={site.github}>GitHub</a></p>
        </div>
        <div>
          <h4>Links</h4>
          <p><a href={site.portfolio}>Portfolio</a></p>
          <p><a href="#lead">Get a mockup</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#faq">FAQ</a></p>
        </div>
      </div>
      <div className="container bottom">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  )
}
