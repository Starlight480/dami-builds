// REAL content scraped from the 5 live portfolio sites. The generator rebuilds
// skeleton + styling around this; copy is preserved (per user: "based entirely on
// the current website"). Images are Unsplash (free to hotlink) from the originals.
export const SITES = {
  piano: {
    name: 'Piano Bistro',
    category: 'restaurant',
    tagline: 'Where every meal is a performance.',
    intro: "A bistro, cafe, and restaurant in the heart of Lekki. Great food, great vibes, great milkshakes.",
    hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    sections: [
      { kind: 'about', title: 'About', body: 'A bistro, cafe, and restaurant in the heart of Lekki. Great food, great vibes, great milkshakes. Quality is non-negotiable, and every detail matters.' },
      { kind: 'menu', title: 'Menu', items: [
        { t: 'Dine-In', d: 'Enjoy a meal in our stylish, cosy space.' },
        { t: 'Cafe & Brunch', d: 'Coffee, milkshakes, and brunch specials daily.' },
        { t: 'Private Events', d: 'Book us for birthdays, celebrations, and corporate dinners.' },
        { t: 'Delivery', d: 'Order directly — no middleman fees.' },
      ] },
      { kind: 'gallery', title: 'Gallery', imgs: [
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' ] },
      { kind: 'hours', title: 'Hours', body: 'Mon – Sun: 10am – 10pm' },
      { kind: 'contact', title: 'Contact', location: 'Lekki, Lagos', hours: 'Mon – Sun: 10am – 10pm', instagram: 'thepianolagos' },
    ],
  },
  tasala: {
    name: 'Tasala Salon',
    category: 'salon',
    tagline: 'Healthy hair experts.',
    intro: "Lagos's go-to salon for healthy hair services. Two locations — Lekki and Ikoyi. All hair textures welcome.",
    hero: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80',
    sections: [
      { kind: 'about', title: 'About', body: "Lagos's go-to salon for healthy hair services. Two locations — Lekki and Ikoyi. All hair textures welcome. Quality is non-negotiable, and every detail matters." },
      { kind: 'services', title: 'Services', items: [
        { t: 'Hair Treatments', d: 'Deep conditioning, protein treatments, and hair health assessments.' },
        { t: 'Braids & Styling', d: 'All braid styles, twists, and protective styles.' },
        { t: 'Hair Colouring', d: 'Professional colour services for all textures.' },
        { t: 'Scalp Care', d: 'Scalp analysis and treatments for healthy growth.' },
      ] },
      { kind: 'gallery', title: 'Gallery', imgs: [
        'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80',
        'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80',
        'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80' ] },
      { kind: 'hours', title: 'Hours', body: 'Mon – Sat: 9am – 7pm' },
      { kind: 'contact', title: 'Contact', location: 'Lekki & Ikoyi, Lagos', hours: 'Mon – Sat: 9am – 7pm', instagram: 'tasalahq' },
    ],
  },
  xo: {
    name: 'XO Bakery',
    category: 'bakery',
    tagline: 'Boutique cakes for every occasion.',
    intro: 'Premium custom cakes and pastries in Victoria Island. Birthdays, weddings, celebrations — we make them special.',
    hero: 'https://images.unsplash.com/photo-1486427944544-d2c246c4df38?w=1200&q=80',
    sections: [
      { kind: 'about', title: 'About', body: 'Premium custom cakes and pastries in Victoria Island. Birthdays, weddings, celebrations — we make them special. Quality is non-negotiable, and every detail matters.' },
      { kind: 'products', title: 'Our Bakes', items: [
        { t: 'Custom Cakes', d: 'Birthday, wedding, and celebration cakes.' },
        { t: 'Pastries & Cupcakes', d: 'Freshly baked daily, premium ingredients.' },
        { t: 'Event Catering', d: 'Dessert tables and cake displays for events.' },
        { t: 'Island Delivery', d: 'Same-day delivery across Victoria Island.' },
      ] },
      { kind: 'gallery', title: 'Gallery', imgs: [
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&q=80',
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80',
        'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80' ] },
      { kind: 'hours', title: 'Hours', body: 'Mon – Sat: 9am – 7pm' },
      { kind: 'contact', title: 'Contact', location: 'Victoria Island, Lagos', hours: 'Mon – Sat: 9am – 7pm', instagram: 'xobakery' },
    ],
  },
  iamfit: {
    name: 'IAMFit',
    category: 'fitness',
    tagline: 'Have Fun. Stay Fit.',
    intro: "West Africa's fastest growing fitness chain. Two locations, one subscription. Over 200 certified personal trainers.",
    hero: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    sections: [
      { kind: 'about', title: 'About', body: "I Am Fit isn't just a gym — it's a community. We believe fitness should be fun, accessible, and part of your everyday life. Two locations, one membership, unlimited access." },
      { kind: 'classes', title: 'Classes', items: [
        { t: 'Strength Training', d: 'Build muscle and confidence with guided strength sessions.' },
        { t: 'HIIT & Cardio', d: 'High-intensity interval training to torch calories.' },
        { t: 'Yoga & Recovery', d: 'Stretch, recover, and find your balance.' },
        { t: 'Boxing & Kickboxing', d: 'Learn technique, build cardio, relieve stress.' },
        { t: 'Spin Classes', d: 'High-energy cycling sessions with music.' },
        { t: 'Personal Training', d: 'One-on-one sessions with certified trainers.' },
      ] },
      { kind: 'locations', title: 'Locations', items: [
        { t: 'Lekki Phase 1', d: 'Mon – Sat: 6am – 9pm' },
        { t: 'Ajah', d: 'Mon – Sat: 6am – 9pm' },
      ] },
      { kind: 'plans', title: 'Plans', items: [
        { t: 'Starter', d: 'Flexible membership for every goal.' },
        { t: 'Pro', d: 'Unlimited classes + guest passes.' },
        { t: 'Elite', d: 'Personal training + priority booking.' },
      ] },
      { kind: 'contact', title: 'Contact', location: 'Lekki & Ajah, Lagos', hours: 'Mon – Sat: 6am – 9pm', instagram: 'iamfit' },
    ],
  },
  akara: {
    name: 'Akara Republic',
    category: 'restaurant',
    tagline: 'Where Akara meets elegance.',
    intro: 'Proudly Nigerian. Street food you grew up with, served with pride and a touch of elegance.',
    hero: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1200&q=80',
    sections: [
      { kind: 'about', title: 'Our Story', body: 'Born from the streets, raised with love. We take the street food you grew up with and serve it with pride, quality, and a touch of elegance — made the way your grandmother made it.' },
      { kind: 'menu', title: 'The Menu', items: [
        { t: 'Akara', d: 'Golden, crispy outside, fluffy inside. Made from freshly ground beans. ₦200 / 3 balls' },
        { t: 'Buns', d: 'Dense, crunchy, addictive. Perfect with tea or garri. ₦150 / 3 pieces' },
        { t: 'Kuli Kuli', d: 'Crunchy, nutty, unmistakably Nigerian. ₦300 / pack' },
        { t: 'Roasted Corn', d: 'Charred over open coals, smoky and irresistible. ₦400 / cob' },
      ] },
      { kind: 'gallery', title: 'Gallery', imgs: [
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
        'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
        'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80' ] },
      { kind: 'hours', title: 'Hours', body: 'Fresh batches ready daily' },
      { kind: 'contact', title: 'How to Order', location: 'Lagos', hours: 'Daily', instagram: 'akararepublic', whatsapp: true },
    ],
  },
}
