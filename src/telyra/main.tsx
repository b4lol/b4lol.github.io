import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { TelyraApp } from './TelyraApp'
import '../index.css'
import './styles/telyra.css'

const root = document.getElementById('root')

if (root) {
  const app = (
    <StrictMode>
      <TelyraApp />
    </StrictMode>
  )

  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}
