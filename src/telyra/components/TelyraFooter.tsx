import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

export interface FooterProps {
  lang: Language
  onOpenPrivacyModal?: () => void
}

export function TelyraFooter({ lang, onOpenPrivacyModal }: FooterProps) {
  const content = TELYRA_CONTENT[lang].footer

  return (
    <footer className="telyra-footer" aria-label="TELYRA Footer">
      <div className="telyra-container telyra-footer__content">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--telyra-font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '-0.02em',
                color: '#ffffff',
              }}
            >
              TELYRA
            </span>
            <span className="telyra-brand__tag">v1.1.0</span>
          </div>

          <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.86rem', maxWidth: '520px', lineHeight: 1.6, margin: 0 }}>
            {content.aboutTelyra}
          </p>

          <p style={{ color: 'var(--telyra-text-subtle)', fontSize: '0.8rem', marginTop: '10px', marginBottom: 0 }}>
            © 2026 TELYRA. {content.builtBy} {content.allRights}
          </p>

          {content.disclaimerNotice && (
            <p
              style={{
                color: 'var(--telyra-text-subtle)',
                fontSize: '0.74rem',
                marginTop: '12px',
                marginBottom: 0,
                lineHeight: '1.55',
                maxWidth: '680px',
              }}
            >
              {content.disclaimerNotice}
            </p>
          )}
        </div>

        <div className="telyra-footer__links">
          <a href="/" className="telyra-footer__link">
            {TELYRA_CONTENT[lang].nav.backToPortfolio}
          </a>
          <a
            href="https://github.com/b4lol/telyra-releases/releases"
            target="_blank"
            rel="noreferrer"
            className="telyra-footer__link"
          >
            GitHub Releases
          </a>
          <a
            href="https://github.com/b4lol/TELYRA"
            target="_blank"
            rel="noreferrer"
            className="telyra-footer__link"
          >
            GitHub
          </a>
          {onOpenPrivacyModal ? (
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="telyra-footer__link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
            >
              {TELYRA_CONTENT[lang].nav.privacy}
            </button>
          ) : (
            <a href="/telyra/privacy/" className="telyra-footer__link">
              {TELYRA_CONTENT[lang].nav.privacy}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}

export default TelyraFooter
