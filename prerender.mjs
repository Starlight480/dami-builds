import { createServer } from 'vite'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(process.cwd())
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'info',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const appHtml = render()

  const htmlPath = resolve(root, 'docs/index.html')
  if (!existsSync(htmlPath)) {
    throw new Error(`Target file ${htmlPath} does not exist. Run vite build first.`)
  }

  let template = readFileSync(htmlPath, 'utf-8')
  template = template.replace(
    '<div id="root"><!--app-html--></div>',
    `<div id="root">${appHtml}</div>`
  )
  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  )
  
  writeFileSync(htmlPath, template)
  console.log('[prerender] Successfully injected static SSR HTML into docs/index.html')
} catch (err) {
  console.error('[prerender error]', err)
  process.exit(1)
} finally {
  await vite.close()
}
