// Pricing tiers for Dami Builds.
// Hosting fee: ₦25,000/mo
// Retainer options: ₦50,000/mo (Standard) and ₦100,000/mo (Premium)
export const pricing = [
  {
    name: 'Starter',
    price: '₦150,000',
    tagline: 'We build it. You host it.',
    highlight: false,
    summary: 'A complete website, packaged and handed over. Best if you already have hosting or want to keep upfront costs low.',
    features: [
      'Custom mobile-first website',
      'Up to 5 pages (home, about, services, gallery, contact)',
      'WhatsApp & call integration',
      'Working contact lead form',
      'Local SEO setup (meta tags, titles, headings)',
      'Google Maps & location embed',
      'Brand colour matching',
      '7-day fast delivery',
      '1 free edit session included',
      'Full file handover & self-hosting guide'
    ],
    cta: 'Start with Starter',
    note: 'Build-only package. You manage your own hosting and domain.'
  },
  {
    name: 'Business',
    price: '₦250,000',
    tagline: 'We build it and host it for you.',
    highlight: false,
    summary: 'Everything in Starter, plus complete managed hosting so your website stays online without technical hassle.',
    features: [
      'Everything in Starter',
      'Managed hosting included (zero technical setup)',
      'Custom domain connection assistance',
      '24/7 Uptime monitoring & SSL security',
      'Automated weekly backups',
      'Local SEO & Google Business Profile support',
      '3 free edit requests',
      'Option for Standard Maintenance Retainer (₦50,000/mo)'
    ],
    cta: 'Choose Business',
    note: '+ ₦25,000/mo hosting & upkeep fee (covers server, security, and monitoring).'
  },
  {
    name: 'Premium',
    price: '₦350,000',
    tagline: 'The complete hands-free growth package.',
    highlight: true,
    badge: 'Most Popular Choice',
    summary: 'Everything in Business, plus 1 month of unlimited edits, priority support, booking/ordering system, and 1st month retainer FREE.',
    features: [
      'Everything in Business',
      '1 Month of unlimited content edits & updates',
      'Priority support (top-tier response SLA)',
      'Interactive booking or online ordering system',
      '1st Month of upkeep & retainer included FREE',
      'Monthly performance & visitor check-in report',
      'Eligible for Premium Retainer (₦100,000/mo for full monthly strategy & continuous updates)'
    ],
    cta: 'Get Premium Package',
    note: 'After the first month free, only base hosting (₦25,000/mo) applies. Optional maintenance retainers available at ₦50,000/mo or ₦100,000/mo.'
  }
]

export const retainers = [
  {
    title: 'Standard Retainer',
    price: '₦50,000/mo',
    desc: 'Regular content updates, minor design tweaks, promotional banner additions, and priority maintenance.'
  },
  {
    title: 'Premium Retainer',
    price: '₦100,000/mo',
    desc: 'Continuous monthly feature upgrades, conversion optimization, new page additions, and dedicated priority support.'
  }
]
