import { readFileSync, writeFileSync, readdirSync, rmSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist', import.meta.url).pathname
const ssrEntry = new URL('../dist-ssr/entry-server.js', import.meta.url).pathname

// 1. Prerender the React app into static HTML
const { render } = await import(ssrEntry)
const appHtml = render()

const htmlFiles = readdirSync(dist, { recursive: true })
  .filter((f) => f.endsWith('.html'))
  .map((f) => join(dist, f))

// 2. Inline the single CSS bundle into every HTML page
const cssFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.css'))
const css = readFileSync(join(dist, 'assets', cssFile), 'utf8')

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8')

  if (file.endsWith(join('dist', 'index.html'))) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  }

  html = html.replace(/<link rel="stylesheet"[^>]*>/g, '')
  html = html.replace('</head>', `<style>${css}</style></head>`)

  writeFileSync(file, html)
  console.log('prerendered + inlined:', file)
}

// Inlined copy stays in the html; drop the standalone css file reference integrity
rmSync(new URL('../dist-ssr', import.meta.url).pathname, { recursive: true, force: true })
