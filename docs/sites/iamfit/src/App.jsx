import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="nav"><strong>IAMFit</strong><a href="#contact">Contact</a></nav>
      <header className="hero hero-std" style={{ '--accent': '#1f9e6b', '--accent2': '#73d3a6' }}>
        <div className="hero-inner"><span className="eyebrow">Fitness Studio</span><h1>IAMFit</h1><p className="tag">Have Fun. Stay Fit.</p></div>
      </header>
      <section className="band"><div className="wrap intro"><p>West Africa's fastest growing fitness chain. Two locations, one subscription. Over 200 certified personal trainers.</p></div></section>
      <section id="about" className="band band-alt"><div className="wrap"><h2>About</h2><p>I Am Fit isn't just a gym — it's a community. We believe fitness should be fun, accessible, and part of your everyday life. Two locations, one membership, unlimited access.</p></div></section>
      <section id="classes" className="band"><div className="wrap"><h2>Classes</h2><div className="grid">
        <div className="card"><h3>Strength Training</h3><p>Build muscle and confidence with guided strength sessions.</p></div>
        <div className="card"><h3>HIIT &amp; Cardio</h3><p>High-intensity interval training to torch calories.</p></div>
        <div className="card"><h3>Yoga &amp; Recovery</h3><p>Stretch, recover, and find your balance.</p></div>
        <div className="card"><h3>Boxing &amp; Kickboxing</h3><p>Learn technique, build cardio, relieve stress.</p></div>
        <div className="card"><h3>Spin Classes</h3><p>High-energy cycling sessions with music.</p></div>
        <div className="card"><h3>Personal Training</h3><p>One-on-one sessions with certified trainers.</p></div>
      </div></div></section>
      <section id="locations" className="band"><div className="wrap"><h2>Locations</h2><div className="grid">
        <div className="card"><h3>Lekki Phase 1</h3><p>Mon – Sat: 6am – 9pm</p></div>
        <div className="card"><h3>Ajah</h3><p>Mon – Sat: 6am – 9pm</p></div>
      </div></div></section>
      <section id="plans" className="band"><div className="wrap"><h2>Plans</h2><div className="grid">
        <div className="card"><h3>Starter</h3><p>Flexible membership for every goal.</p></div>
        <div className="card"><h3>Pro</h3><p>Unlimited classes + guest passes.</p></div>
        <div className="card"><h3>Elite</h3><p>Personal training + priority booking.</p></div>
      </div></div></section>
      <section id="contact" className="band band-alt"><div className="wrap"><h2>Contact</h2><p>Location: Lekki &amp; Ajah, Lagos</p>
<p>Hours: Mon – Sat: 6am – 9pm</p>
<p>Instagram: @iamfit</p></div></section>
      <footer className="foot">© IAMFit</footer>
    </>
  )
}
