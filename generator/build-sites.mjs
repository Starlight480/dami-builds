// Regenerates the 5 portfolio sites at their assigned tiers and (for React) builds them:
//   piano   -> basic    (HTML/CSS, ₦150K)
//   xo      -> basic    (HTML/CSS, ₦150K)
//   tasala  -> standard (mid React)
//   iamfit  -> standard (mid React)
//   akara   -> premium  (best React, ₦350K)
import { writeFile, mkdir, rm, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateSite } from '../src/generator/generate.js'

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const JOBS = [
  { key: 'piano', quality: 'basic', out: 'public/sites/piano-bistro' },
  { key: 'xo', quality: 'basic', out: 'public/sites/xo-bakery' },
  { key: 'tasala', quality: 'standard', out: 'public/sites/tasala-salon' },
  { key: 'iamfit', quality: 'standard', out: 'public/sites/iamfit' },
  { key: 'akara', quality: 'premium', out: 'public/sites/akara-republic' },
]

for (const job of JOBS) {
  const out = generateSite(job.key, job.quality)
  const dir = path.join(root, job.out)
  await rm(dir, { recursive: true, force: true })
  await mkdir(dir, { recursive: true })
  for (const [f, c] of Object.entries(out.files)) {
    const fp = path.join(dir, f)
    await mkdir(path.dirname(fp), { recursive: true })
    await writeFile(fp, c)
  }
  console.log(`Wrote ${job.out} (${out.stack}/${out.quality}, ${Object.keys(out.files).length} files)`)
  if (out.stack === 'react') {
    console.log(`  building ${job.out} ...`)
    execSync('npm install --silent && npm run build', { cwd: dir, stdio: 'inherit' })
    // move dist -> build
    const dist = path.join(dir, 'dist')
    const build = path.join(dir, 'build')
    if (existsSync(dist)) {
      await cp(dist, build, { recursive: true })
      await rm(dist, { recursive: true, force: true })
    }
    // strip heavy dev files, keep build + sources for reference
    await rm(path.join(dir, 'node_modules'), { recursive: true, force: true })
    console.log(`  -> ${job.out}/build/index.html`)
  }
}
console.log('All sites generated.')
