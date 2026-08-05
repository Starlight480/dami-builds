export default function ValueProp() {
  const points = [
    {
      icon: '🔍',
      title: 'Customers Google before they visit',
      desc: 'When people look for a salon in Lekki or a restaurant in Ikeja, an optimized website puts you right in front of them.'
    },
    {
      icon: '💬',
      title: 'Instagram DMs get buried',
      desc: 'Instead of losing sales replying to "How much?" 50 times a day, let your site showcase your menu, prices, and booking links 24/7.'
    },
    {
      icon: '⭐',
      title: 'Trust beats a WhatsApp status',
      desc: 'A custom domain and professional web design instantly signals legitimacy and sets you apart from competitors.'
    }
  ]

  return (
    <section id="value" className="valueprop">
      <div className="container">
        <div className="section-head">
          <h2>Most businesses don’t need "a website." They need to be found.</h2>
          <p>Here is why top Lagos local brands build a dedicated website instead of relying only on social media.</p>
        </div>
        <div className="grid grid-3">
          {points.map((p, i) => (
            <div className="card value-card" key={i}>
              <div className="card-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
