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
  const [edgeRegion, setEdgeRegion] = useState<string>('IST')
  const [result, setResult] = useState<LicenseCheckResponse | null>(null)
  const [errorText, setErrorText] = useState<string | null>(null)

  const isTr = lang === 'tr'

  useEffect(() => {
    let isMounted = true
    fetch('https://license.b4.lol/api/v1/health')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data.status === 'ok') {
          setServerOnline(true)
          if (data.edgeRegion) {
            setEdgeRegion(data.edgeRegion)
          }
        }
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

    // Check offline state
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setErrorText(
        isTr
          ? 'Ağ bağlantısı kurulamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.'
          : 'Unable to establish network connection. Please check your internet connectivity and try again.'
      )
      setLoading(false)
      return
    }

    try {
      const res = await fetch('https://license.b4.lol/api/v1/license/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: cleaned,
          deviceId: 'web-portal-inquiry-session',
        }),
      })

      let data: (LicenseCheckResponse & { error?: string }) | null = null
      try {
        data = await res.json()
      } catch {
        // Non-JSON response
      }

      if (!res.ok) {
        if (res.status === 404) {
          setErrorText(
            isTr
              ? 'Lisans anahtarı bulunamadı veya biçim geçersiz. Lütfen girdiğiniz anahtarı kontrol edin.'
              : 'License key not found or invalid format. Please check your license key.'
          )
        } else if (res.status === 403) {
          setResult({
            status: 'revoked',
            plan: data?.plan || 'Pro M12',
            expiresAt: data?.expiresAt,
            serverTime: data?.serverTime || Date.now(),
            message:
              data?.message ||
              (isTr
                ? 'Bu lisans anahtarı iptal edilmiştir (Revoked).'
                : 'This license key has been revoked.'),
          })
        } else if (res.status === 429) {
          setErrorText(
            isTr
              ? 'Çok fazla sorgulama yapıldı. Lütfen kısa bir süre bekleyip tekrar deneyin.'
              : 'Too many inquiries. Please wait a moment before trying again.'
          )
        } else if (res.status === 400) {
          setErrorText(
            isTr
              ? 'Geçersiz lisans anahtarı biçimi. Doğru biçim: TELY-M12-XXXXX-XXXXX-XXXXX'
              : 'Invalid license key format. Expected format: TELY-M12-XXXXX-XXXXX-XXXXX'
          )
        } else {
          setErrorText(
            data?.message ||
              (isTr
                ? 'Lisans doğrulama servisi şu anda yanıt vermiyor. Lütfen daha sonra tekrar deneyin.'
                : 'License verification service is currently unavailable. Please try again later.')
          )
        }
      } else {
        if (data && (data.status === 'active' || data.status === 'expired' || data.status === 'revoked')) {
          setResult(data)
        } else {
          setErrorText(
            data?.message ||
              (isTr ? 'Lisans yanıtı doğrulanamadı.' : 'License response could not be verified.')
          )
        }
      }
    } catch {
      setErrorText(
        isTr
          ? 'Lisans sunucusuna ulaşılamadı. Lütfen ağ bağlantınızı kontrol edin.'
          : 'Could not reach license server. Please verify your network connection.'
      )
    } finally {
      setLoading(false)
    }
  }

  const formatExpires = (ms?: number) => {
    if (!ms || ms === 0) return isTr ? 'Süresiz / Başlatılmamış' : 'Unlimited / Not Started'
    try {
      const date = new Date(ms)
      return date.toLocaleDateString(isTr ? 'tr-TR' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return isTr ? 'Bilinmiyor' : 'Unknown'
    }
  }

  const formatServerTime = (ms?: number) => {
    if (!ms || ms === 0) return '-'
    try {
      const date = new Date(ms)
      return date.toISOString().replace('T', ' ').substring(0, 19) + ' UTC'
    } catch {
      return '-'
    }
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
                  ? `license.b4.lol (Cloudflare D1 / ${edgeRegion})`
                  : (isTr ? 'license.b4.lol Çevrimdışı' : 'license.b4.lol Offline')}
              </span>
            </div>
            <div className="telyra-secure-badge">
              <ShieldIcon width="14" height="14" />
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
                aria-label={isTr ? 'Lisans Anahtarı' : 'License Key'}
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
              <CloseIcon width="16" height="16" />
              <span>{errorText}</span>
            </div>
          )}

          {result && (
            <div className="telyra-license-result">
              <div className="telyra-result-grid">
                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Lisans Durumu' : 'License State'}</span>
                  <span className={`telyra-result-status telyra-result-status--${result.status}`}>
                    {result.status === 'active' && <CheckIcon width="14" height="14" />}
                    {result.status === 'revoked' && <CloseIcon width="14" height="14" />}
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
                  <span className="telyra-result-label">{isTr ? 'Sunucu Zaman Damgası' : 'Server Timestamp'}</span>
                  <span className="telyra-result-value" style={{ fontSize: '0.85rem' }}>
                    {formatServerTime(result.serverTime)}
                  </span>
                </div>

                <div className="telyra-result-item">
                  <span className="telyra-result-label">{isTr ? 'Cihaz İzni' : 'Device Allowance'}</span>
                  <span className="telyra-result-value">{isTr ? 'En Fazla 5 Cihaz' : 'Up to 5 Devices'}</span>
                </div>
              </div>

              {result.signature && (
                <div className="telyra-sig-box">
                  <span className="telyra-sig-label">
                    {isTr ? 'Kriptografik İmzalı Kira Belgesi (HMAC-SHA256):' : 'Cryptographic Signed Lease (HMAC-SHA256):'}
                  </span>
                  <code className="telyra-sig-code">{result.signature}</code>
                </div>
              )}

              {result.message && (
                <div style={{ marginTop: '14px', fontSize: '0.85rem', color: 'var(--telyra-text-muted)' }}>
                  {result.message}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
