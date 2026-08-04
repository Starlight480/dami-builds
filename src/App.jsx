import { site } from './data/site.js'
import D from './logo/D.jsx'
import Hero from './sections/Hero.jsx'
import TrustBar from './sections/TrustBar.jsx'
import ValueProp from './sections/ValueProp.jsx'
import Services from './sections/Services.jsx'
import CaseStudies from './sections/CaseStudies.jsx'
import Showcase from './sections/Showcase.jsx'
import Pricing from './sections/Pricing.jsx'
import FAQ from './sections/FAQ.jsx'
import LeadForm from './sections/LeadForm.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#top">
            <D size={32} />
            <span>{site.brand}</span>
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#examples">Examples</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn-primary btn-sm" href="#lead">
              Get a mockup
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
        <Showcase />
        <Pricing />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}
