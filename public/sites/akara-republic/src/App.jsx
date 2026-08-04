import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="nav"><strong>Akara Republic</strong><a href="#contact">Contact</a></nav>
      <header className="hero hero-premium" style={{ '--accent': '#e2641b', '--accent2': '#f6a96b' }}>
        <div className="hero-inner"><span className="eyebrow">Restaurant</span><h1>Akara Republic</h1><p className="tag">Where Akara meets elegance.</p></div>
      </header>
      <section className="band"><div className="wrap intro"><p>Proudly Nigerian. Street food you grew up with, served with pride and a touch of elegance.</p></div></section>
      <section id="about" className="band band-alt"><div className="wrap"><h2>Our Story</h2><p>Born from the streets, raised with love. We take the street food you grew up with and serve it with pride, quality, and a touch of elegance — made the way your grandmother made it.</p></div></section>
      <section id="menu" className="band"><div className="wrap"><h2>The Menu</h2><div className="grid">
        <div className="card"><h3>Akara</h3><p>Golden, crispy outside, fluffy inside. Made from freshly ground beans. ₦200 / 3 balls</p></div>
        <div className="card"><h3>Buns</h3><p>Dense, crunchy, addictive. Perfect with tea or garri. ₦150 / 3 pieces</p></div>
        <div className="card"><h3>Kuli Kuli</h3><p>Crunchy, nutty, unmistakably Nigerian. ₦300 / pack</p></div>
        <div className="card"><h3>Roasted Corn</h3><p>Charred over open coals, smoky and irresistible. ₦400 / cob</p></div>
      </div></div></section>
      <section id="gallery" className="band"><div className="wrap"><h2>Gallery</h2><div className="gallery">
          <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" alt="" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80" alt="" loading="lazy" />
      </div></div></section>
      <section id="hours" className="band band-alt"><div className="wrap"><h2>Hours</h2><p>Fresh batches ready daily</p></div></section>
      <section id="contact" className="band band-alt"><div className="wrap"><h2>How to Order</h2><p>Location: Lagos</p>
<p>Hours: Daily</p>
<p>Instagram: @akararepublic</p></div></section>
      <footer className="foot">© Akara Republic</footer>
    </>
  )
}
