import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { GlobeIcon, DownloadIcon } from './TelyraIcons'

export interface NavbarProps {
  lang: Language
  onToggleLang: () => void
  onOpenPrivacyModal?: () => void
}

export function TelyraNavbar({ lang, onToggleLang }: NavbarProps) {
  const content = TELYRA_CONTENT[lang].nav
  const isTr = lang === 'tr'

  const navLinks = [
    { href: '#showcase', label: isTr ? 'Deneyim' : 'Experience' },
    { href: '#pillars', label: isTr ? 'Mimari' : 'Architecture' },
    { href: '#specs', label: isTr ? 'Donanım' : 'Hardware' },
    { href: '#downloads', label: isTr ? 'İndir' : 'Downloads' },
    { href: '#license', label: isTr ? 'Lisans' : 'License' },
  ]

  return (
    <nav className="telyra-nav" aria-label="TELYRA Navigation">
      <div className="telyra-container telyra-nav__inner">
        <a href="/telyra/" className="telyra-brand" aria-label="TELYRA Home">
          <img
            src="/telyra/play_store_icon_512x512.png"
            alt="TELYRA Logo"
            className="telyra-brand__icon"
            width={36}
            height={36}
          />
          <span className="telyra-brand__text">TELYRA</span>
          <span className="telyra-brand__tag">v1.1.0</span>
        </a>

        <div className="telyra-nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="telyra-nav__link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="telyra-nav__actions">
          <button
            type="button"
            onClick={onToggleLang}
            className="telyra-lang-btn"
            title={isTr ? 'Switch to English' : 'Türkçeye geç'}
            aria-label={isTr ? 'Switch to English' : 'Türkçeye geç'}
          >
            <GlobeIcon width="14" height="14" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <a href="#downloads" className="telyra-btn-primary">
            <DownloadIcon width="14" height="14" />
            <span>{content.directApk || (isTr ? 'APK İndir' : 'Direct APK')}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default TelyraNavbar
