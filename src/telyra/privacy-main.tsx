import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { TelyraPrivacyApp } from './TelyraPrivacyApp'
import '../index.css'
import './styles/telyra.css'

const root = document.getElementById('root')

if (root) {
  const app = (
    <StrictMode>
      <TelyraPrivacyApp />
    </StrictMode>
  )

  if (root.hasChildNodes()) {
    hydrateRoot(root, app)
  } else {
    createRoot(root).render(app)
  }
}
