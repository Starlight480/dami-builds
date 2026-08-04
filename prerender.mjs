import { createServer } from 'vite'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Prerender: uses Vite to transform JSX, renders App to static HTML,
// and injects it into dist/index.html so GitHub Pages serves crawlable content.
const root = resolve(process.cwd())
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'info',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const appHtml = render()

  const distHtmlPath = resolve(root, 'dist/index.html')
  let template = readFileSync(distHtmlPath, 'utf-8')
  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  writeFileSync(distHtmlPath, template)
  console.log('[prerender] injected static HTML into dist/index.html')
} finally {
  await vite.close()
}
