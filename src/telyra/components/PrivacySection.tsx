import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

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
              <h4>🛡️ {content.zeroDataTitle}</h4>
              <p>{content.zeroDataDesc}</p>
            </div>

            <div className="telyra-privacy-card">
              <h4>⚖️ {content.disclaimerTitle}</h4>
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
                ✕
              </button>

              <h2 id="privacy-modal-title" style={{ fontFamily: 'var(--telyra-font-display)', marginBottom: '12px' }}>
                {modalData.title}
              </h2>

              <p style={{ fontFamily: 'var(--telyra-font-mono)', fontSize: '0.82rem', color: 'var(--telyra-text-muted)', marginBottom: '20px' }}>
                {modalData.effectiveDateLabel} {modalData.effectiveDate}
              </p>

              <div style={{ fontSize: '0.92rem', color: '#c3cbd9', lineHeight: '1.7' }}>
                {modalData.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom: '20px',
                      ...(sec.isWarning
                        ? {
                            background: 'rgba(255, 51, 102, 0.08)',
                            border: '1px solid rgba(255, 51, 102, 0.25)',
                            borderRadius: '10px',
                            padding: '16px',
                            color: '#ffc2d1',
                          }
                        : {}),
                    }}
                  >
                    <h3 style={{ color: sec.isWarning ? '#ff6688' : '#fff', fontSize: '1.1rem', marginBottom: '8px' }}>
                      {sec.title}
                    </h3>
                    <p>{sec.content}</p>
                  </div>
                ))}

                <div style={{ marginTop: '28px', textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={onClose}
                    className="telyra-btn-primary"
                  >
                    {content.closeModal}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
