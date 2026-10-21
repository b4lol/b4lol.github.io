import { renderToString } from 'react-dom/server'
import App from './App'
import { TelyraApp } from './telyra/TelyraApp'
import { TelyraPrivacyApp } from './telyra/TelyraPrivacyApp'

export function render(route = '/'): string {
  if (route.includes('privacy')) {
    return renderToString(<TelyraPrivacyApp />)
  }
  if (route.includes('telyra')) {
    return renderToString(<TelyraApp />)
  }
  return renderToString(<App />)
}
