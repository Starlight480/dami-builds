import { makeRng, hashString, pick } from './rng.js'
import { CATEGORIES } from './categories.js'
import { SITES } from './content.js'

// Quality levels:
//   'basic'    -> plain HTML/CSS, minimal styling (₦150K tier)
//   'standard' -> mid React, decent but not our best (middle tier)
//   'premium'  -> best React, full polish (₦350K tier)
// ALL tiers preserve the site's REAL content (from content.js).

function pickPalette(cat, seed) {
  const rng = makeRng(hashString(seed))
  return pick(rng, cat.palettes)
}

function sectionList(content) {
  return content.sections
}

// ---------- HTML (basic) ----------
export function renderHtml(content) {
  const cat = CATEGORIES[content.category]
  const p = pickPalette(cat, content.name)
  const secs = sectionList(content)
  const nav = `<nav><strong>${content.name}</strong><a href="#contact">Contact</a></nav>`
  let body = ''
  for (const s of secs) {
    if (s.items) {
      body += `<section id="${s.kind}"><h2>${s.title}</h2><div class="grid">` +
        s.items.map((i) => `<div class="card"><h3>${i.t}</h3><p>${i.d}</p></div>`).join('') + `</div></section>`
    } else if (s.imgs) {
      body += `<section id="${s.kind}"><h2>${s.title}</h2><div class="grid gallery">` +
        s.imgs.map((u) => `<img src="${u}" alt="" loading="lazy">`).join('') + `</div></section>`
    } else {
      const txt = [s.body, s.location && `Location: ${s.location}`, s.hours && `Hours: ${s.hours}`, s.instagram && `Instagram: @${s.instagram}`].filter(Boolean).join('<br>')
      body += `<section id="${s.kind}"><h2>${s.title}</h2><p>${txt}</p></section>`
    }
  }
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${content.name}</title><link rel="stylesheet" href="styles.css"></head>
<body>${nav}
<header class="hero" style="background:${p.accent}"><h1>${content.name}</h1><p>${content.tagline}</p></header>
<section class="intro"><p>${content.intro}</p></section>
${body}
<footer>© ${content.name}</footer></body></html>`
  const css = `*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,sans-serif;color:#222;line-height:1.6}
nav{padding:14px 20px;display:flex;justify-content:space-between;border-bottom:1px solid #eee}
.hero{background:${p.accent};color:#fff;padding:70px 20px;text-align:center}
.hero h1{font-size:2.4rem}.hero p{opacity:.9}
section{padding:48px 20px;max-width:980px;margin:0 auto}
.intro{text-align:center;color:#555}
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.card{border:1px solid #eee;border-radius:8px;padding:18px}
.gallery img{width:100%;height:180px;object-fit:cover;border-radius:8px}
footer{padding:30px;text-align:center;color:#999;border-top:1px solid #eee}`
  return { stack: 'html', quality: 'basic', files: { 'index.html': html, 'styles.css': css }, meta: { palette: p.name } }
}
