import { useState, useEffect } from 'react'
import type { Language } from '../data/telyraData'
import { ShieldIcon, CheckIcon, CloseIcon } from './TelyraIcons'

interface LicensePortalProps {
  lang: Language
}

interface LicenseCheckResponse {
  status: 'active' | 'expired' | 'revoked' | 'error'
  plan?: string
  expiresAt?: number
  serverTime?: number
  signature?: string
  message?: string
  code?: string
}

export function LicensePortalSection({ lang }: LicensePortalProps) {
  const [keyInput, setKeyInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [serverOnline, setServerOnline] = useState<boolean | null>(null)
  const [result, setResult] = useState<LicenseCheckResponse | null>(null)
  const [errorText, setErrorText] = useState<string | null>(null)

  const isTr = lang === 'tr'

  useEffect(() => {
    // Check server health
    let isMounted = true
    fetch('https://license.b4.lol/api/v1/health')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.status === 'ok') setServerOnline(true)
      })
      .catch(() => {
        if (isMounted) setServerOnline(false)
      })
    return () => {
      isMounted = false
    }
  }, [])

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault()
    const cleaned = keyInput.trim().toUpperCase()
    if (!cleaned) return

    setLoading(true)
    setErrorText(null)
    setResult(null)

    try {
      const res = await fetch('https://license.b4.lol/api/v1/license/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: cleaned,
          deviceId: 'web-portal-inquiry-session',
        }),
      })

      const data = await res.json()
      if (!res.ok) {
        if (res.status === 404) {
          setErrorText(isTr ? 'Lisans anahtarı bulunamadı veya geçersiz format.' : 'License key not found or invalid format.')
        } else if (res.status === 403) {
          setResult({ status: 'revoked', message: data.message })
        } else if (res.status === 429) {
          setErrorText(isTr ? 'Çok fazla sorgulama yapıldı. Lütfen biraz bekleyin.' : 'Too many inquiries. Please wait a moment.')
        } else {
          setErrorText(data.message || (isTr ? 'Sorgulama başarısız oldu.' : 'Verification failed.'))
        }
      } else {
        setResult(data)
      }
    } catch {
      setErrorText(isTr ? 'Lisans sunucusuna ulaşılamadı. Lütfen internet bağlantınızı kontrol edin.' : 'Could not reach license server. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const formatExpires = (ms?: number) => {
    if (!ms || ms === 0) return isTr ? 'Süresiz / Başlatılmamış' : 'Unlimited / Not Started'
    const date = new Date(ms)
    return date.toLocaleDateString(isTr ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section id="license-portal" className="telyra-section" aria-labelledby="license-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">
            {isTr ? '// CLOUDFLARE EDGE DOĞRULAMA' : '// CLOUDFLARE EDGE VERIFICATION'}
          </p>
          <h2 id="license-heading" className="telyra-section-title">
            {isTr ? 'TELYRA Pro Lisans Portalı' : 'TELYRA Pro License Portal'}
          </h2>
          <p className="telyra-section-subtitle">
            {isTr
              ? 'Lisans durumunuzu, kalan sürenizi ve cihaz kotalarınızı doğrudan Cloudflare Anycast küresel ağımız üzerinden sorgulayın.'
              : 'Verify your license status, remaining duration, and device allowances directly across our Cloudflare Anycast edge network.'}
          </p>
        </div>

        <div className="telyra-license-card">
          <div className="telyra-license-header">
            <div className="telyra-server-indicator">
              <span className={`telyra-server-dot ${serverOnline ? 'telyra-server-dot--online' : ''}`} />
              <span className="telyra-server-text">
                {serverOnline === null
                  ? (isTr ? 'Sunucu kontrol ediliyor...' : 'Checking server...')
                  : serverOnline
                  ? 'license.b4.lol (Cloudflare D1 / IST)'
                  : (isTr ? 'license.b4.lol Çevrimdışı' : 'license.b4.lol Offline')}
              </span>
            </div>
            <div className="telyra-secure-badge">
              <ShieldIcon />
              <span>HMAC-SHA256 Encrypted</span>
            </div>
          </div>

          <form onSubmit={handleCheck} className="telyra-license-form">
            <div className="telyra-input-wrap">
              <input
                type="text"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value.toUpperCase())}
                placeholder="TELY-M12-XXXXX-XXXXX-XXXXX"
                className="telyra-license-input"
                maxLength={32}
                spellCheck={false}
              />
            </div>
            <button
              type="submit"
              disabled={loading || !keyInput.trim()}
              className="telyra-btn-primary telyra-license-btn"
            >
              {loading
                ? (isTr ? 'Sorgulanıyor...' : 'Verifying...')
                : (isTr ? 'Lisansı Sorgula' : 'Verify License')}
            </button>
          </form>

          {errorText && (
            <div className="telyra-license-error" role="alert">
              <CloseIcon />
              <span>{errorText}</span>
            </div>
          )}

          {result && (
            <div className="telyra-license-result">
              <div className="telyra-result-grid">
                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Lisans Durumu' : 'License State'}</span>
                  <span className={`telyra-result-status telyra-result-status--${result.status}`}>
                    {result.status === 'active' && <CheckIcon />}
                    {result.status === 'active'
                      ? (isTr ? 'Aktif & Geçerli' : 'Active & Verified')
                      : result.status === 'expired'
                      ? (isTr ? 'Süresi Dolmuş' : 'Expired')
                      : (isTr ? 'İptal Edilmiş (Revoked)' : 'Revoked')}
                  </span>
                </div>

                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Plan Türü' : 'Plan Code'}</span>
                  <span className="telyra-result-value">{result.plan || 'Pro M12'}</span>
                </div>

                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Son Kullanım Tarihi' : 'Expiration Date'}</span>
                  <span className="telyra-result-value">{formatExpires(result.expiresAt)}</span>
                </div>

                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Cihaz İzni' : 'Device Allowance'}</span>
                  <span className="telyra-result-value">{isTr ? 'En Fazla 5 Cihaz' : 'Up to 5 Devices'}</span>
                </div>
              </div>

              {result.signature && (
                <div className="telyra-sig-box">
                  <span className="telyra-sig-label">{isTr ? 'Kriptografik İmzalı Kira Belgesi (HMAC-SHA256):' : 'Cryptographic Signed Lease (HMAC-SHA256):'}</span>
                  <code className="telyra-sig-code">{result.signature}</code>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
