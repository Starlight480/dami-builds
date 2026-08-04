import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="nav"><strong>Tasala Salon</strong><a href="#contact">Contact</a></nav>
      <header className="hero hero-std" style={{ '--accent': '#d45c8a', '--accent2': '#f0a8c4' }}>
        <div className="hero-inner"><span className="eyebrow">Salon &amp; Beauty</span><h1>Tasala Salon</h1><p className="tag">Healthy hair experts.</p></div>
      </header>
      <section className="band"><div className="wrap intro"><p>Lagos's go-to salon for healthy hair services. Two locations — Lekki and Ikoyi. All hair textures welcome.</p></div></section>
      <section id="about" className="band band-alt"><div className="wrap"><h2>About</h2><p>Lagos's go-to salon for healthy hair services. Two locations — Lekki and Ikoyi. All hair textures welcome. Quality is non-negotiable, and every detail matters.</p></div></section>
      <section id="services" className="band"><div className="wrap"><h2>Services</h2><div className="grid">
        <div className="card"><h3>Hair Treatments</h3><p>Deep conditioning, protein treatments, and hair health assessments.</p></div>
        <div className="card"><h3>Braids &amp; Styling</h3><p>All braid styles, twists, and protective styles.</p></div>
        <div className="card"><h3>Hair Colouring</h3><p>Professional colour services for all textures.</p></div>
        <div className="card"><h3>Scalp Care</h3><p>Scalp analysis and treatments for healthy growth.</p></div>
      </div></div></section>
      <section id="gallery" className="band"><div className="wrap"><h2>Gallery</h2><div className="gallery">
          <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80" alt="" loading="lazy" />
      </div></div></section>
      <section id="hours" className="band band-alt"><div className="wrap"><h2>Hours</h2><p>Mon – Sat: 9am – 7pm</p></div></section>
      <section id="contact" className="band band-alt"><div className="wrap"><h2>Contact</h2><p>Location: Lekki &amp; Ikoyi, Lagos</p>
<p>Hours: Mon – Sat: 9am – 7pm</p>
<p>Instagram: @tasalahq</p></div></section>
      <footer className="foot">© Tasala Salon</footer>
    </>
  )
}
