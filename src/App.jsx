import { site } from './data/site.js'
import D from './logo/D.jsx'
import Hero from './sections/Hero.jsx'
import TrustBar from './sections/TrustBar.jsx'
import ValueProp from './sections/ValueProp.jsx'
import Services from './sections/Services.jsx'
import CaseStudies from './sections/CaseStudies.jsx'
import Testimonials from './sections/Testimonials.jsx'
import About from './sections/About.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import LeadForm from './sections/LeadForm.jsx'
import Footer from './sections/Footer.jsx'
import './styles/global.css'

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <a className="brand" href="#top">
            <D size={32} />
            <span>{site.brand}</span>
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn-primary btn-sm" href="#lead">
              Get a Free Mockup
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <ValueProp />
        <Services />
        <CaseStudies />
        <Testimonials />
        <About />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>

      <Footer />
    </>
  )
}
