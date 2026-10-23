import { useEffect } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { ShieldIcon, ScaleIcon, CloseIcon } from './TelyraIcons'

export interface PrivacySectionProps {
  lang: Language
  isOpen?: boolean
  onClose?: () => void
  onOpen?: () => void
}

export function PrivacySection({ lang, isOpen = false, onClose, onOpen }: PrivacySectionProps) {
  const content = TELYRA_CONTENT[lang].privacy
  const modalData = content.modal

  // Handle ESC key to dismiss modal
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: 'var(--telyra-accent-blue)', display: 'inline-flex' }} aria-hidden="true">
                  <ShieldIcon width="20" height="20" />
                </span>
                <h4 style={{ margin: 0 }}>{content.zeroDataTitle}</h4>
              </div>
              <p>{content.zeroDataDesc}</p>
            </div>

            <div className="telyra-privacy-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: 'var(--telyra-amber)', display: 'inline-flex' }} aria-hidden="true">
                  <ScaleIcon width="20" height="20" />
                </span>
                <h4 style={{ margin: 0 }}>{content.disclaimerTitle}</h4>
              </div>
              <p>{content.disclaimerText}</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              type="button"
              onClick={onOpen}
              className="telyra-btn-secondary"
            >
              {content.fullPolicyBtn}
            </button>
          </div>
        </div>

        {/* Legal & Privacy Policy Modal */}
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
                <CloseIcon width="18" height="18" />
              </button>

              <h2
                id="privacy-modal-title"
                style={{
                  fontFamily: 'var(--telyra-font-display)',
                  fontSize: '1.35rem',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                  color: '#ffffff',
                }}
              >
                {modalData.title}
              </h2>

              <p style={{ color: 'var(--telyra-text-muted)', fontSize: '0.82rem', marginBottom: '24px' }}>
                {modalData.effectiveDateLabel} {modalData.effectiveDate}
              </p>

              <div className="telyra-modal-content">
                {modalData.sections.map((sec, idx) => (
                  <div
                    key={idx}
                    style={{
                      marginBottom: '20px',
                      padding: sec.isWarning ? '18px' : '0',
                      borderRadius: sec.isWarning ? '10px' : '0',
                      background: sec.isWarning ? 'rgba(255, 69, 58, 0.06)' : 'transparent',
                      border: sec.isWarning ? '1px solid rgba(255, 69, 58, 0.22)' : 'none',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: sec.isWarning ? 'var(--telyra-rose, #ff453a)' : '#ffffff',
                        marginBottom: '8px',
                      }}
                    >
                      {sec.title}
                    </h3>
                    <p
                      style={{
                        color: sec.isWarning ? '#fcd0d0' : 'var(--telyra-text-secondary)',
                        fontSize: '0.9rem',
                        lineHeight: '1.65',
                        margin: 0,
                      }}
                    >
                      {sec.content}
                    </p>

                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul
                        style={{
                          paddingLeft: '20px',
                          marginTop: '10px',
                          marginBottom: 0,
                          color: sec.isWarning ? '#fcd0d0' : 'var(--telyra-text-secondary)',
                          fontSize: '0.88rem',
                          lineHeight: '1.65',
                        }}
                      >
                        {sec.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} style={{ marginBottom: '6px' }}>
                            {bullet}
                          </li>
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

export default PrivacySection
