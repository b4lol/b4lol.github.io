import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

interface PrivacySectionProps {
  lang: Language
  showModalInitially?: boolean
}

export function PrivacySection({ lang, showModalInitially = false }: PrivacySectionProps) {
  const content = TELYRA_CONTENT[lang].privacy
  const [modalOpen, setModalOpen] = useState(showModalInitially)

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
              onClick={() => setModalOpen(true)}
              className="telyra-btn-secondary"
            >
              {content.fullPolicyBtn}
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="telyra-modal-backdrop" onClick={() => setModalOpen(false)}>
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
                onClick={() => setModalOpen(false)}
                aria-label={content.closeModal}
              >
                ✕
              </button>

              <h2 id="privacy-modal-title" style={{ fontFamily: 'var(--telyra-font-display)', marginBottom: '16px' }}>
                TELYRA — {lang === 'tr' ? 'Gizlilik Politikası ve Şartlar' : 'Privacy Policy & Terms'}
              </h2>

              <div style={{ fontSize: '0.92rem', color: '#c3cbd9', lineHeight: '1.7' }}>
                <p>
                  <strong>{lang === 'tr' ? 'Yürürlük Tarihi:' : 'Effective Date:'}</strong> 2026-10-21
                </p>

                <h3 style={{ color: '#fff', marginTop: '20px', marginBottom: '8px' }}>
                  {lang === 'tr' ? '1. Sıfır Veri Toplama Politikası' : '1. Zero Data Collection Policy'}
                </h3>
                <p>
                  {lang === 'tr'
                    ? 'TELYRA hiçbir kullanıcı verisi toplamaz, kaydetmez veya üçüncü taraflarla paylaşmaz. Uygulamada reklam SDK\'ları, Firebase Analytics veya harici telemetri bulunmaz. Girilen M3U veya Xtream Codes kimlik bilgileri yalnızca AndroidKeyStore AES-256 GCM ile yerel cihazınızda saklanır.'
                    : 'TELYRA does NOT collect, store, or transmit any user data or telemetry to remote servers. There are no advertising SDKs or third-party trackers. All entered playlist credentials remain encrypted on your local device using AndroidKeyStore AES-256 GCM.'}
                </p>

                <h3 style={{ color: '#fff', marginTop: '20px', marginBottom: '8px' }}>
                  {lang === 'tr' ? '2. Yasal Sorumluluk Reddi (Disclaimer)' : '2. Legal Notice & Disclaimer'}
                </h3>
                <p>
                  {lang === 'tr'
                    ? 'TELYRA bağımsız bir açık kaynaklı medya oynatıcıdır. Hiçbir yayın, video, IPTV akışı veya çalma listesi barındırmaz ve satmaz. Kullanıcılar yalnızca yasal erişim iznine sahip oldukları yayınları oynatmakla yükümlüdür.'
                    : 'TELYRA is strictly a standalone open-source media player application. It does NOT host, supply, or sell any streaming media, television channels, or playlists. Users are solely responsible for ensuring they have lawful access to the content they stream.'}
                </p>

                <h3 style={{ color: '#fff', marginTop: '20px', marginBottom: '8px' }}>
                  {lang === 'tr' ? '3. Uygulama İzinleri' : '3. Application Permissions'}
                </h3>
                <p>
                  {lang === 'tr'
                    ? 'Uygulama yalnızca canlı yayınları oynatmak için INTERNET iznini, zamanlanmış kayıt bildirimleri için POST_NOTIFICATIONS iznini ve kayıtların güvenle tamamlanabilmesi için FOREGROUND_SERVICE_DATA_SYNC iznini kullanır.'
                    : 'The app requests only essential permissions: INTERNET for streaming, POST_NOTIFICATIONS for recording alerts, and FOREGROUND_SERVICE_DATA_SYNC for running user-initiated scheduled DVR tasks.'}
                </p>

                <div style={{ marginTop: '28px', textAlign: 'right' }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
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
