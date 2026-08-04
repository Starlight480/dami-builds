// Pricing tiers (₦). Strategy: Premium (₦350K) is the natural choice.
// Standard = self-host + 1 edit (feels limited). Business = hosted but recurring fee.
// Premium = full package, unlimited edits, priority, hosted, 1mo free retainer.
// ₦X/mo = placeholder monthly hosting fee — user sets the real number.
export const pricing = [
  {
    name: 'Starter',
    price: '₦150,000',
    tagline: 'We build it. You host it.',
    highlight: false,
    summary:
      'A complete website, packaged and handed over. Best if you already have hosting or want to keep upfront cost low.',
    features: [
      'Custom-designed website (mobile-first)',
      'Up to 5 pages (home, about, services, contact, gallery)',
      'WhatsApp / call button',
      'Working contact form',
      'Basic on-page SEO (titles, meta, headings)',
      'Google Maps embed',
      'Brand-colour matching',
      'Social media links',
      'Fast-loading, clean code',
      '7-day delivery',
      '1 free edit included',
      'Handover: all files + simple hosting guide',
    ],
    cta: 'Start with Starter',
    note: 'You host it yourself — we include a setup guide. Hosting is not included.',
  },
  {
    name: 'Business',
    price: '₦250,000',
    tagline: 'We build it and host it for you.',
    highlight: false,
    summary:
      'Everything in Starter, plus we keep it online so you never touch hosting or servers.',
    features: [
      'Everything in Starter',
      'We host the site for you (zero setup)',
      'Domain setup assistance',
      'Uptime monitoring',
      'Backups & basic security',
      'Local SEO (Google Business Profile help)',
      '3 free edits',
    ],
    cta: 'Choose Business',
    note: '+ ₦X/mo hosting & maintenance (covers server, updates, monitoring).',
  },
  {
    name: 'Premium',
    price: '₦350,000',
    tagline: 'The full package, for your first month.',
    highlight: true,
    badge: 'Most businesses choose this',
    summary:
      'Everything in Business, plus 1 month of unlimited edits, priority support, and your first month of upkeep free.',
    features: [
      'Everything in Business',
      '1 month of unlimited edits',
      'Priority support (you go to the top of the list)',
      'Booking / ordering page if you need it',
      '1 month of retainer & upkeep free',
      'Dedicated check-ins',
    ],
    cta: 'Get Premium',
    note: 'After the first month, only the base hosting cost (₦X/mo) keeps it running. Extra edits are billed per request or via your retainer.',
  },
]
