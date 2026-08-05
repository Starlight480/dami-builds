import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="nav"><strong>Piano Bistro</strong><a href="#contact">Contact</a></nav>
      <header className="hero hero-premium" style={{ '--accent': '#7c3a73', '--accent2': '#c08bb9' }}>
        <div className="hero-inner"><span className="eyebrow">Restaurant</span><h1>Piano Bistro</h1><p className="tag">Where every meal is a performance.</p></div>
      </header>
      <section className="band"><div className="wrap intro"><p>A bistro, cafe, and restaurant in the heart of Lekki. Great food, great vibes, great milkshakes.</p></div></section>
      <section id="about" className="band band-alt"><div className="wrap"><h2>About</h2><p>A bistro, cafe, and restaurant in the heart of Lekki. Great food, great vibes, great milkshakes. Quality is non-negotiable, and every detail matters.</p></div></section>
      <section id="menu" className="band"><div className="wrap"><h2>Menu</h2><div className="grid">
        <div className="card"><h3>Dine-In</h3><p>Enjoy a meal in our stylish, cosy space.</p></div>
        <div className="card"><h3>Cafe &amp; Brunch</h3><p>Coffee, milkshakes, and brunch specials daily.</p></div>
        <div className="card"><h3>Private Events</h3><p>Book us for birthdays, celebrations, and corporate dinners.</p></div>
        <div className="card"><h3>Delivery</h3><p>Order directly — no middleman fees.</p></div>
      </div></div></section>
      <section id="gallery" className="band"><div className="wrap"><h2>Gallery</h2><div className="gallery">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="" loading="lazy" />
      </div></div></section>
      <section id="hours" className="band band-alt"><div className="wrap"><h2>Hours</h2><p>Mon – Sun: 10am – 10pm</p></div></section>
      <section id="contact" className="band band-alt"><div className="wrap"><h2>Contact</h2><p>Location: Lekki, Lagos</p>
<p>Hours: Mon – Sun: 10am – 10pm</p>
<p>Instagram: @thepianolagos</p></div></section>
      <footer className="foot">© Piano Bistro</footer>
    </>
  )
}
