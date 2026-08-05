const faqs = [
  {
    q: 'Do I have to host the site myself?',
    a: 'Only on the Starter package — it is a build-only service where we hand you all production files along with a step-by-step setup guide. On Business and Premium, we host and manage the site for you.'
  },
  {
    q: 'Is there a monthly fee?',
    a: 'On Starter: no (you pay your own host directly). On Business & Premium: a modest fee of ₦25,000/mo covers high-speed managed hosting, security monitoring, daily/weekly backups, and system updates.'
  },
  {
    q: 'How many edits are included during the build?',
    a: 'Starter includes 1 edit round. Business includes 3 edit rounds. Premium includes 1 full month of unlimited content edits and updates after launch.'
  },
  {
    q: 'What is included in the free month on Premium?',
    a: 'Premium gives you your first month of managed hosting, server upkeep, and unlimited design edits completely free. After the first month, only the base hosting fee (₦25,000/mo) applies unless you opt into an ongoing retainer package (₦50,000/mo or ₦100,000/mo).'
  },
  {
    q: 'How long does a full build take?',
    a: 'Typically 5 to 7 business days from initial deposit and content brief handover to complete project delivery.'
  },
  {
    q: 'What is the payment structure?',
    a: 'We operate on a transparent deposit & balance completion structure. You inspect and approve your website preview before paying the remaining balance.'
  },
  {
    q: 'Will my site show up on Google search in Lagos?',
    a: 'Yes — local SEO optimization (meta titles, structured headings, Google Maps integration, and fast loading speed) is included on every tier.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about working with Dami Builds.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
