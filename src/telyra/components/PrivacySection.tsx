import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { ShieldIcon, ScaleIcon, CloseIcon } from './TelyraIcons'

interface PrivacySectionProps {
  lang: Language
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export function PrivacySection({ lang, isOpen = false, onClose, onOpen }: PrivacySectionProps) {
  const content = TELYRA_CONTENT[lang].privacy
  const modalData = content.modal

  return (
    <section id="privacy" className="telyra-section" aria-labelledby="privacy-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="privacy-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-privacy-box">
          <div className="telyra-privacy-highlight">
            <div className="telyra-privacy-card">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldIcon width="20" height="20" className="text-cyan-400" />
                <span>{content.zeroDataTitle}</span>
              </h4>
              <p>{content.zeroDataDesc}</p>
            </div>

            <div className="telyra-privacy-card">
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ScaleIcon width="20" height="20" className="text-amber-400" />
                <span>{content.disclaimerTitle}</span>
              </h4>
              <p>{content.disclaimerText}</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button
              type="button"
              onClick={onOpen}
              className="telyra-btn-secondary"
            >
              {content.fullPolicyBtn}
            </button>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="telyra-modal-backdrop" onClick={onClose}>
            <div
              className="telyra-modal"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="privacy-modal-title"
            >
              <button
                type="button"
                className="telyra-modal-close"
                onClick={onClose}
                aria-label={content.closeModal}
              >
                <CloseIcon width="20" height="20" />
              </button>

              <h2 id="privacy-modal-title" style={{ fontFamily: 'var(--telyra-font-display)', marginBottom: '12px' }}>
                {modalData.title}
              </h2>

              <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.82rem', marginBottom: '20px' }}>
                {modalData.effectiveDateLabel}: {modalData.effectiveDate}
              </p>

              <div className="telyra-modal-content">
                {modalData.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom: '20px',
                      padding: sec.isWarning ? '16px' : '0',
                      borderRadius: sec.isWarning ? '8px' : '0',
                      background: sec.isWarning ? 'rgba(255, 51, 102, 0.08)' : 'transparent',
                      border: sec.isWarning ? '1px solid rgba(255, 51, 102, 0.25)' : 'none',
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.05rem',
                      color: sec.isWarning ? '#ff4d6d' : '#fff',
                      marginBottom: '6px'
                    }}>
                      {sec.title}
                    </h3>
                    <p style={{
                      color: sec.isWarning ? '#ffc2d1' : 'var(--telyra-text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: '1.6'
                    }}>
                      {sec.content}
                    </p>

                    {sec.bullets && (
                      <ul style={{
                        paddingLeft: '20px',
                        marginTop: '8px',
                        color: 'var(--telyra-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.6'
                      }}>
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
