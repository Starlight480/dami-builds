import { makeRng, hashString, pick } from './rng.js'
import { CATEGORIES } from './categories.js'
import { SITES } from './content.js'

// React renderer with quality levels:
//   'standard' -> mid-tier React (decent, not our best)
//   'premium'  -> best React (full polish, animations-ready classes, refined spacing)
function paletteFor(cat, seed) {
  const rng = makeRng(hashString(seed))
  return pick(rng, cat.palettes)
}

// Escape text that gets written as JSX source (so '&', '<', '>' don't break parsing).
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderReact(content, { quality = 'standard' } = {}) {
  const cat = CATEGORIES[content.category]
  const p = paletteFor(cat, content.name + quality)
  const premium = quality === 'premium'
  const secs = content.sections

  const blocks = secs.map((s) => {
    const id = s.kind
    if (s.items) {
      const cards = s.items.map((i) => `        <div className="card"><h3>${esc(i.t)}</h3><p>${esc(i.d)}</p></div>`).join('\n')
      return `      <section id="${id}" className="band"><div className="wrap"><h2>${esc(s.title)}</h2><div className="grid">\n${cards}\n      </div></div></section>`
    }
    if (s.imgs) {
      const imgs = s.imgs.map((u) => `          <img src="${u}" alt="" loading="lazy" />`).join('\n')
      return `      <section id="${id}" className="band"><div className="wrap"><h2>${esc(s.title)}</h2><div className="gallery">\n${imgs}\n      </div></div></section>`
    }
    const lines = [s.body, s.location && `Location: ${s.location}`, s.hours && `Hours: ${s.hours}`, s.instagram && `Instagram: @${s.instagram}`].filter(Boolean)
    return `      <section id="${id}" className="band band-alt"><div className="wrap"><h2>${esc(s.title)}</h2>${lines.map((l) => `<p>${esc(l)}</p>`).join('\n')}</div></section>`
  }).join('\n')

  const App = `import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <>
      <nav className="nav"><strong>${esc(content.name)}</strong><a href="#contact">Contact</a></nav>
      <header className="hero hero-${premium ? 'premium' : 'std'}" style={{ '--accent': '${p.accent}', '--accent2': '${p.accent2}' }}>
        <div className="hero-inner"><span className="eyebrow">${esc(cat.label)}</span><h1>${esc(content.name)}</h1><p className="tag">${esc(content.tagline)}</p></div>
      </header>
      <section className="band"><div className="wrap intro"><p>${esc(content.intro)}</p></div></section>
${blocks}
      <footer className="foot">© ${esc(content.name)}</footer>
    </>
  )
}
`

  const css = `:root{--accent:${p.accent};--accent2:${p.accent2};--bg:${p.bg};--ink:${p.ink}}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:${premium ? "'Inter',system-ui,sans-serif" : 'system-ui,sans-serif'};color:var(--ink);background:var(--bg);line-height:1.65}
.wrap{max-width:1000px;margin:0 auto;padding:0 20px}
.band{padding:${premium ? '92px' : '64px'} 0;border-bottom:1px solid rgba(0,0,0,.06)}
.band-alt{background:rgba(0,0,0,.03)}
h1{font-size:clamp(2.2rem,5vw,3.4rem);line-height:1.1}
h2{font-size:clamp(1.5rem,3vw,2.2rem);margin-bottom:20px}
.eyebrow{text-transform:uppercase;letter-spacing:.12em;font-size:.72rem;font-weight:700;color:var(--accent)}
.tag{font-size:1.2rem;opacity:.78;margin-top:10px}
.intro{text-align:center;font-size:1.1rem;color:#555}
.grid{display:grid;gap:18px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.card{border:1px solid rgba(0,0,0,.08);border-radius:${premium ? '14px' : '10px'};padding:22px;background:#fff${premium ? ';transition:.2s' : ''}}
${premium ? '.card:hover{transform:translateY(-4px);box-shadow:0 14px 30px rgba(0,0,0,.08)}' : ''}
.gallery{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.gallery img{width:100%;height:${premium ? '200px' : '160px'};object-fit:cover;border-radius:12px}
.nav{position:sticky;top:0;background:rgba(255,255,255,.9);${premium ? 'backdrop-filter:blur(8px);' : ''}border-bottom:1px solid rgba(0,0,0,.08);padding:14px 20px;display:flex;justify-content:space-between}
.nav a{color:var(--ink);text-decoration:none}
.hero${premium ? '.hero-premium' : '.hero-std'}{min-height:${premium ? '82vh' : '64vh'};display:flex;align-items:center;justify-content:center;text-align:center;background:linear-gradient(160deg,var(--accent),var(--accent2));color:#fff}
.hero-inner{max-width:720px;padding:0 20px}
.foot{padding:46px 20px;text-align:center;color:#888}
`

  const pkg = { name: slug(content.name), private: true, version: '0.0.0', type: 'module', scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' }, dependencies: { react: '^18.3.1', 'react-dom': '^18.3.1' }, devDependencies: { '@vitejs/plugin-react': '^4.3.4', vite: '^6.0.7' } }
  const vite = `import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nexport default defineConfig({ plugins: [react()], base: './' })\n`
  return {
    stack: 'react',
    quality,
    files: {
      'package.json': JSON.stringify(pkg, null, 2) + '\n',
      'vite.config.js': vite,
      'index.html': `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${content.name}</title></head><body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body></html>\n`,
      'src/main.jsx': `import { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport App from './App.jsx'\ncreateRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)\n`,
      'src/App.jsx': App,
      'src/styles.css': css,
    },
    meta: { palette: p.name, premium },
  }
}

function slug(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
