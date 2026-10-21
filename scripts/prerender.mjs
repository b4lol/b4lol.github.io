import { readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist', import.meta.url).pathname
const ssrEntry = new URL('../dist-ssr/entry-server.js', import.meta.url).pathname

// 1. Load SSR Module
const { render } = await import(ssrEntry)

const htmlFiles = readdirSync(dist, { recursive: true })
  .filter((f) => f.endsWith('.html'))
  .map((f) => join(dist, f))

// 2. Inline the single CSS bundle into every HTML page
const cssFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.css'))
const css = cssFile ? readFileSync(join(dist, 'assets', cssFile), 'utf8') : ''

for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf8')

  let appHtml = null
  if (file.endsWith(join('dist', 'index.html'))) {
    appHtml = render('/')
  } else if (file.endsWith(join('dist', 'telyra', 'privacy', 'index.html'))) {
    appHtml = render('/telyra/privacy')
  } else if (file.endsWith(join('dist', 'telyra', 'index.html'))) {
    appHtml = render('/telyra')
  }

  if (appHtml !== null) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  }

  if (css) {
    html = html.replace(/<link rel="stylesheet"[^>]*>/g, '')
    html = html.replace('</head>', `<style>${css}</style></head>`)
  }

  writeFileSync(file, html)
  console.log('✓ Prerendered & inlined:', file)
}

// Clean up temporary SSR bundle
rmSync(new URL('../dist-ssr', import.meta.url).pathname, { recursive: true, force: true })
