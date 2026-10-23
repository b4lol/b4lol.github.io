import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { CheckIcon, CopyIcon, DownloadIcon, ShieldIcon, TvIcon, PhoneIcon } from './TelyraIcons'

interface DownloadSectionProps {
  lang: Language
  downloaderCode: string
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined') return false

  // Modern Clipboard API
  if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // Fallback to textarea below
    }
  }

  // Fallback using temporary textarea
  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.top = '0'
      textarea.style.left = '-9999px'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      const successful = document.execCommand('copy')
      document.body.removeChild(textarea)
      if (successful) return true
    } catch {
      // Non-throwing error handling
    }
  }

  return false
}

export function DownloadSection({ lang, downloaderCode }: DownloadSectionProps) {
  const content = TELYRA_CONTENT[lang].downloads
  const [copiedCode, setCopiedCode] = useState(false)
  const [copiedSha, setCopiedSha] = useState<string | null>(null)

  const handleCopyCode = async () => {
    const success = await copyToClipboard(downloaderCode)
    if (success) {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2200)
    }
  }

  const handleCopySha = async (sha: string) => {
    const success = await copyToClipboard(sha)
    if (success) {
      setCopiedSha(sha)
      setTimeout(() => setCopiedSha(null), 2200)
    }
  }

  return (
    <section id="downloads" className="telyra-section" aria-labelledby="downloads-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="downloads-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-download-grid">
          {/* AFTVnews Downloader Guide */}
          <div className="telyra-guide-card">
            <h3 style={{ fontFamily: 'var(--telyra-font-display)', fontSize: '1.4rem', marginBottom: '8px', color: '#ffffff' }}>
              {content.downloaderCodeTitle}
            </h3>
            <p style={{ color: 'var(--telyra-text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {content.downloaderCodeDesc}
            </p>

            <div style={{ marginTop: '20px', marginBottom: '28px' }}>
              <div className="telyra-downloader-bar">
                <span className="telyra-downloader-bar__code" style={{ fontSize: '1.4rem' }}>
                  {downloaderCode}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className={`telyra-copy-btn ${copiedCode ? 'telyra-copy-btn--copied' : ''}`}
                  aria-label={copiedCode ? TELYRA_CONTENT[lang].hero.copiedFeedback : TELYRA_CONTENT[lang].hero.copyButton}
                >
                  {copiedCode ? <CheckIcon width="16" height="16" /> : <CopyIcon width="16" height="16" />}
                  <span>{copiedCode ? TELYRA_CONTENT[lang].hero.copiedFeedback : TELYRA_CONTENT[lang].hero.copyButton}</span>
                </button>
              </div>
            </div>

            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '14px', fontFamily: 'var(--telyra-font-display)' }}>
              {content.howToInstallTitle}
            </h4>

            <ol className="telyra-steps-list">
              {content.steps.map((s) => (
                <li key={s.num} className="telyra-step-item">
                  <span className="telyra-step-num">{s.num}</span>
                  <p className="telyra-step-text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Direct APK Downloads */}
          <div className="telyra-direct-card">
            <h3 style={{ fontFamily: 'var(--telyra-font-display)', fontSize: '1.4rem', marginBottom: '18px', color: '#ffffff' }}>
              {content.directTitle}
            </h3>

            {content.items.map((item) => {
              const isTv = item.id === 'app-tv'
              return (
                <div key={item.id} className="telyra-apk-box">
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: isTv ? 'rgba(41, 151, 255, 0.12)' : 'rgba(94, 92, 230, 0.12)',
                          border: `1px solid ${isTv ? 'rgba(41, 151, 255, 0.3)' : 'rgba(94, 92, 230, 0.3)'}`,
                          color: isTv ? 'var(--telyra-accent-blue)' : 'var(--telyra-indigo)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {isTv ? <TvIcon width="18" height="18" /> : <PhoneIcon width="18" height="18" />}
                      </div>
                      <h4 style={{ color: '#ffffff', fontSize: '1.15rem', margin: 0, fontFamily: 'var(--telyra-font-display)' }}>
                        {item.title}
                      </h4>
                    </div>

                    <p style={{ color: 'var(--telyra-text-secondary)', fontSize: '0.85rem', margin: '4px 0 10px' }}>
                      {item.targetDevice}
                    </p>

                    <div className="telyra-apk-meta">
                      <span>{content.labels.version} {item.version}</span>
                      <span>{content.labels.fileSize} {item.fileSize}</span>
                      <span>{content.labels.minSdk} {item.minSdk}</span>
                      {item.releaseDate && <span>{item.releaseDate}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <a
                      href={item.downloadUrl}
                      className="telyra-btn-primary"
                      style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                      download
                    >
                      <DownloadIcon width="16" height="16" />
                      <span>{item.fileName} ({item.fileSize})</span>
                    </a>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--telyra-font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--telyra-emerald)',
                        background: 'var(--telyra-emerald-soft)',
                        border: '1px solid rgba(48, 209, 88, 0.25)',
                        padding: '4px 8px',
                        borderRadius: '6px',
                      }}
                    >
                      <ShieldIcon width="14" height="14" />
                      <span>{content.verifiedBadge}</span>
                    </span>
                  </div>

                  <div className="telyra-apk-sha">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', gap: '8px' }}>
                      <span style={{ color: 'var(--telyra-text-muted)' }}>{content.labels.checksum}</span>
                      <button
                        type="button"
                        onClick={() => handleCopySha(item.sha256)}
                        className={`telyra-copy-btn ${copiedSha === item.sha256 ? 'telyra-copy-btn--copied' : ''}`}
                        style={{ padding: '3px 8px', fontSize: '0.72rem' }}
                        aria-label={copiedSha === item.sha256 ? content.labels.copiedChecksum : content.labels.copyChecksum}
                      >
                        {copiedSha === item.sha256 ? <CheckIcon width="12" height="12" /> : <CopyIcon width="12" height="12" />}
                        <span>{copiedSha === item.sha256 ? content.labels.copiedChecksum : content.labels.copyChecksum}</span>
                      </button>
                    </div>
                    <div
                      style={{
                        wordBreak: 'break-all',
                        fontFamily: 'var(--telyra-font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--telyra-text-secondary)',
                        lineHeight: '1.4',
                      }}
                    >
                      {item.sha256}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
