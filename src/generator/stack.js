// Stack decision (HYBRID rule, per user choice):
//  - generator picks by category + complexity
//  - but a tier / explicit override can force a stack
//
// Default heuristic:
//   - brochure-style (no dynamic data) businesses => HTML/CSS/JS
//   - businesses needing dynamic bits (booking, auth, live data) => React
// Complexity is derived from category here; could be expanded by inputs later.

const COMPLEXITY = {
  restaurant: 'brochure',
  salon: 'brochure',
  bakery: 'brochure',
  fitness: 'dynamic', // classes/plans/locations benefit from React interactivity
}

export function decideStack({ category, override } = {}) {
  if (override === 'html' || override === 'react') return override
  const complexity = COMPLEXITY[category] || 'brochure'
  // Default: brochure => HTML (cheap, fast, handoff-friendly). dynamic => React.
  return complexity === 'dynamic' ? 'react' : 'html'
}

// Tier override rules for the SHOWCASE on the landing page:
//   Free   => html
//   Higher => react
//   Top    => react (premium)
export function stackForTier(tier) {
  if (tier === 'higher' || tier === 'top') return 'react'
  return 'html'
}
