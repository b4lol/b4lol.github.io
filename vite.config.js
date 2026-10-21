import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// Preload the latin variable fonts used above the fold so the hero text
// renders without waiting for the CSS font-face discovery round trip.
function preloadFonts() {
  const wanted = [/space-grotesk-latin-wght-normal.*\.woff2$/, /inter-latin-wght-normal.*\.woff2$/]
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle || {}
        const tags = Object.keys(bundle)
          .filter((file) => wanted.some((re) => re.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: {
              rel: 'preload',
              href: `/${file}`,
              as: 'font',
              type: 'font/woff2',
              crossorigin: true,
            },
            injectTo: 'head',
          }))
        return { html, tags }
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), preloadFonts()],
  // Custom domain (b4.lol) serves from the root path
  base: '/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        umbra: resolve(import.meta.dirname, 'umbra/index.html'),
        brim: resolve(import.meta.dirname, 'brim/index.html'),
        b4assistant: resolve(import.meta.dirname, 'b4assistant/index.html'),
        telyra: resolve(import.meta.dirname, 'telyra/index.html'),
        telyraPrivacy: resolve(import.meta.dirname, 'telyra/privacy/index.html'),
      },
    },
  },
})
