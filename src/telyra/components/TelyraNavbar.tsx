import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

interface NavbarProps {
  lang: Language
  onToggleLang: () => void
  onOpenPrivacyModal?: () => void
}

export function TelyraNavbar({ lang, onToggleLang, onOpenPrivacyModal }: NavbarProps) {
  const content = TELYRA_CONTENT[lang].nav

  return (
    <nav className="telyra-nav" aria-label="TELYRA Navigation">
      <div className="telyra-container telyra-nav__inner">
        <a href="/telyra/" className="telyra-brand">
          <img
            src="/telyra/play_store_icon_512x512.png"
            alt="TELYRA Logo"
            className="telyra-brand__icon"
            width={38}
            height={38}
          />
          <span className="telyra-brand__text">TELYRA</span>
          <span className="telyra-brand__tag">v1.0</span>
        </a>

        <div className="telyra-nav__links">
          <a href="#features" className="telyra-nav__link">
            {content.features}
          </a>
          <a href="#telemetry" className="telyra-nav__link">
            {content.hud}
          </a>
          <a href="#comparison" className="telyra-nav__link">
            {content.comparison}
          </a>
          <a href="#downloads" className="telyra-nav__link">
            {content.downloads}
          </a>
          {onOpenPrivacyModal ? (
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="telyra-nav__link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {content.privacy}
            </button>
          ) : (
            <a href="/telyra/privacy/" className="telyra-nav__link">
              {content.privacy}
            </a>
          )}
        </div>

        <div className="telyra-nav__actions">
          <button
            type="button"
            onClick={onToggleLang}
            className="telyra-lang-btn"
            title={lang === 'tr' ? 'Switch to English' : 'Türkçeye geç'}
          >
            <span>🌐</span>
            <span>{lang.toUpperCase()}</span>
          </button>

          <a href="#downloads" className="telyra-btn-primary">
            <span>⬇</span>
            <span>{content.directApk}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
