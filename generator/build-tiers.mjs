import { writeFile, mkdir, rm, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateSite } from '../src/generator/generate.js'

const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)))

const JOBS = [
  { key: 'piano', quality: 'basic', out: 'public/sites/piano-bistro/basic' },
  { key: 'piano', quality: 'standard', out: 'public/sites/piano-bistro/standard' },
  { key: 'piano', quality: 'premium', out: 'public/sites/piano-bistro/premium' },
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
  console.log(`Wrote ${job.out} (${out.stack}/${out.quality})`)
  if (out.stack === 'react') {
    console.log(`  building ${job.out} ...`)
    execSync('npm install --silent && npm run build', { cwd: dir, stdio: 'inherit' })
    const dist = path.join(dir, 'dist')
    const build = path.join(dir, 'build')
    if (existsSync(dist)) {
      await cp(dist, build, { recursive: true })
      await rm(dist, { recursive: true, force: true })
    }
    await rm(path.join(dir, 'node_modules'), { recursive: true, force: true })
    console.log(`  -> ${job.out}/build/index.html`)
  }
}
console.log('All 3 tiers generated.')
