import { site } from '../data/site.js'
import D from '../logo/D.jsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div className="footer-brand-col">
            <a className="brand" href="#top">
              <D size={28} />
              <span>{site.brand}</span>
            </a>
            <p className="brand-tagline">
              Premium, mobile-first websites for Lagos small businesses.
            </p>
            <p className="location-text">📍 {site.location}</p>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Portfolio Work</a></li>
              <li><a href="#about">About Founder</a></li>
              <li><a href="#pricing">Pricing & Retainers</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Get In Touch</h4>
            <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p>WhatsApp: <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a></p>
            <p>Instagram: <a href={site.instagram} target="_blank" rel="noopener noreferrer">@dami.builds</a></p>
            <p>GitHub: <a href={site.github} target="_blank" rel="noopener noreferrer">Starlight480</a></p>
          </div>
        </div>

        <div className="bottom">
          <p>© {currentYear} Dami Builds. All rights reserved. Built for Nigerian Small Businesses.</p>
        </div>
      </div>
    </footer>
  )
}
