// COPY: user — FAQ answers are from the agreed draft and reflect the new pricing tiers.
const faqs = [
  {
    q: 'Do I have to host the site myself?',
    a: 'Only on Starter — it’s build-only, and we hand you the files plus a simple guide. On Business and Premium, we host it for you.',
  },
  {
    q: 'Is there a monthly fee?',
    a: 'Starter: no (you pay your own host). Business & Premium: a small monthly fee covers hosting, updates, and monitoring (₦X/mo — you set the number).',
  },
  {
    q: 'How many edits are included?',
    a: 'Starter: 1 free edit. Business: 3. Premium: unlimited edits in your first month, then billed per request.',
  },
  {
    q: 'What’s the free month on Premium?',
    a: 'Premium includes 1 month of retainer, upkeep, and unlimited edits free. After that, only the base hosting cost (₦X/mo) keeps it running — further edits are billed per request or via a retainer.',
  },
  {
    q: 'How long does it take?',
    a: 'Typically 5–7 days from deposit to delivery.',
  },
  {
    q: 'Do I pay upfront?',
    a: 'A deposit to start, balance on completion. You only pay in full when you’re happy.',
  },
  {
    q: 'Will my site show on Google?',
    a: 'Yes — local SEO is included on every tier, so you start showing up in Lagos searches within a few weeks.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container section-head">
        <h2>Frequently asked questions</h2>
      </div>
      <div className="container faq-list">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
