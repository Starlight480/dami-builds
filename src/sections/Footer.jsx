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
        </div>
        <div>
          <h4>Contact</h4>
          <p>
            <a href={site.whatsapp}>WhatsApp</a>
          </p>
          <p>
            <a href={'mailto:' + site.email}>{site.email}</a>
          </p>
          <p>
            <a href={site.instagram}>Instagram</a>
          </p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className="container bottom">
        © {new Date().getFullYear()} {site.brand}. All rights reserved.
      </div>
    </footer>
  )
}
