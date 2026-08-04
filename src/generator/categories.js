// Category data: each category defines multiple HERO variants, SECTION orders,
// and PALETTES so two businesses of the same type get structurally different sites.
// This is what defeats the "identical clone" problem — variety is structural, not just color.

export const CATEGORIES = {
  restaurant: {
    label: 'Restaurant',
    heroVariants: ['fullscreen', 'split', 'centered'],
    sectionOrders: [
      ['menu', 'about', 'gallery', 'hours', 'contact'],
      ['about', 'menu', 'hours', 'gallery', 'contact'],
      ['gallery', 'menu', 'about', 'contact', 'hours'],
    ],
    palettes: [
      { name: 'Ember', bg: '#fff7f2', ink: '#2b1d16', accent: '#e2641b', accent2: '#f6a96b' },
      { name: 'Olive', bg: '#f7f8f3', ink: '#22261a', accent: '#6b8f3a', accent2: '#a7c46b' },
      { name: 'Plum', bg: '#faf6fb', ink: '#241a26', accent: '#7c3a73', accent2: '#c08bb9' },
    ],
    services: ['Dine-In', 'Cafe & Brunch', 'Private Events', 'Delivery'],
    tagline: 'Where every meal is an experience.',
  },
  salon: {
    label: 'Salon & Beauty',
    heroVariants: ['split', 'centered', 'fullscreen'],
    sectionOrders: [
      ['services', 'gallery', 'about', 'hours', 'contact'],
      ['about', 'services', 'gallery', 'contact', 'hours'],
      ['gallery', 'services', 'about', 'hours', 'contact'],
    ],
    palettes: [
      { name: 'Rose', bg: '#fdf6f7', ink: '#2a1f21', accent: '#d45c8a', accent2: '#f0a8c4' },
      { name: 'Sand', bg: '#fbf8f4', ink: '#26201b', accent: '#b8895a', accent2: '#e0c4a3' },
      { name: 'Slate', bg: '#f6f8fa', ink: '#1b2228', accent: '#3f6f8f', accent2: '#8fb4c9' },
    ],
    services: ['Hair Treatments', 'Braids & Styling', 'Hair Colouring', 'Scalp Care'],
    tagline: 'Healthy hair, cared for daily.',
  },
  bakery: {
    label: 'Bakery',
    heroVariants: ['centered', 'split', 'fullscreen'],
    sectionOrders: [
      ['products', 'about', 'gallery', 'hours', 'contact'],
      ['about', 'products', 'gallery', 'contact', 'hours'],
      ['gallery', 'products', 'about', 'hours', 'contact'],
    ],
    palettes: [
      { name: 'Butter', bg: '#fffdf6', ink: '#2a2519', accent: '#d9a441', accent2: '#f0cf8f' },
      { name: 'Berry', bg: '#fbf6fb', ink: '#241a26', accent: '#9b3fa3', accent2: '#cf8fd6' },
      { name: 'Cocoa', bg: '#f8f5f2', ink: '#241c17', accent: '#8a5a3b', accent2: '#c79b7e' },
    ],
    services: ['Cakes', 'Pastries', 'Bread', 'Custom Orders'],
    tagline: 'Fresh bakes, made with love.',
  },
  fitness: {
    label: 'Fitness Studio',
    heroVariants: ['fullscreen', 'split', 'centered'],
    sectionOrders: [
      ['classes', 'about', 'locations', 'plans', 'contact'],
      ['about', 'classes', 'plans', 'locations', 'contact'],
      ['locations', 'classes', 'about', 'plans', 'contact'],
    ],
    palettes: [
      { name: 'Voltage', bg: '#f6fbf8', ink: '#16241d', accent: '#1f9e6b', accent2: '#73d3a6' },
      { name: 'Pulse', bg: '#f7f8fb', ink: '#1a1f26', accent: '#2f6fd4', accent2: '#8fb0e6' },
      { name: 'Flame', bg: '#fbf6f6', ink: '#261a1a', accent: '#d4421f', accent2: '#e69a8b' },
    ],
    services: ['Strength', 'HIIT & Cardio', 'Yoga & Recovery', 'Personal Training'],
    tagline: 'Have fun. Stay fit.',
  },
}

export const CATEGORY_KEYS = Object.keys(CATEGORIES)
