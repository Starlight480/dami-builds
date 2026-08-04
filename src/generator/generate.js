import { SITES } from './content.js'
import { renderHtml } from './renderHtml.js'
import { renderReact } from './renderReact.js'

// Orchestrator v2: regenerate a real portfolio site at a given quality tier.
// quality: 'basic' (HTML/CSS, ₦150K) | 'standard' (mid React) | 'premium' (best React, ₦350K)
// key: one of SITES keys (piano, tasala, xo, iamfit, akara)
export function generateSite(key, quality = 'standard') {
  const content = SITES[key]
  if (!content) throw new Error('Unknown site key: ' + key)
  if (quality === 'basic') return renderHtml(content)
  return renderReact(content, { quality })
}
