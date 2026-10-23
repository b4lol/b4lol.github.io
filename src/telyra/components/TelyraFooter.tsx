import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

interface FooterProps {
  lang: Language
  onOpenPrivacyModal?: () => void
}

export function TelyraFooter({ lang, onOpenPrivacyModal }: FooterProps) {
  const content = TELYRA_CONTENT[lang].footer

  return (
    <footer className="telyra-footer">
      <div className="telyra-container telyra-footer__content">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'var(--telyra-font-display)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
              &lt;TELYRA /&gt;
            </span>
            <span style={{ color: 'var(--telyra-text-muted)', fontSize: '0.85rem' }}>— v1.1.0</span>
          </div>
          <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.85rem', maxWidth: '500px' }}>
            {content.aboutTelyra}
          </p>
          <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.8rem', marginTop: '6px' }}>
            © 2026 TELYRA. {content.builtBy} {content.allRights}
          </p>
          {content.disclaimerNotice && (
            <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.74rem', marginTop: '10px', lineHeight: '1.5', maxWidth: '640px' }}>
              {content.disclaimerNotice}
            </p>
          )}
        </div>

        <div className="telyra-footer__links">
          <a href="/" className="telyra-footer__link">
            {TELYRA_CONTENT[lang].nav.backToPortfolio}
          </a>
          <a
            href="https://github.com/b4lol/TELYRA"
            target="_blank"
            rel="noreferrer"
            className="telyra-footer__link"
          >
            GitHub
          </a>
          <a
            href="https://github.com/b4lol/TELYRA/releases"
            target="_blank"
            rel="noreferrer"
            className="telyra-footer__link"
          >
            Releases
          </a>
          {onOpenPrivacyModal ? (
            <button
              type="button"
              onClick={onOpenPrivacyModal}
              className="telyra-footer__link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
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
