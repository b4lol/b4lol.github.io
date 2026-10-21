import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

interface DownloadSectionProps {
  lang: Language
  downloaderCode: string
}

export function DownloadSection({ lang, downloaderCode }: DownloadSectionProps) {
  const content = TELYRA_CONTENT[lang].downloads
  const [copiedCode, setCopiedCode] = useState(false)
  const [copiedSha, setCopiedSha] = useState<string | null>(null)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(downloaderCode)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2200)
    } catch {
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2200)
    }
  }

  const handleCopySha = async (sha: string) => {
    try {
      await navigator.clipboard.writeText(sha)
      setCopiedSha(sha)
      setTimeout(() => setCopiedSha(null), 2200)
    } catch {
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
            <h3 style={{ fontFamily: 'var(--telyra-font-display)', fontSize: '1.4rem', marginBottom: '8px' }}>
              {content.downloaderCodeTitle}
            </h3>
            <p style={{ color: 'var(--telyra-text-secondary)', fontSize: '0.95rem' }}>
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
                >
                  <span>{copiedCode ? '✓' : '📋'}</span>
                  <span>{copiedCode ? TELYRA_CONTENT[lang].hero.copiedFeedback : TELYRA_CONTENT[lang].hero.copyButton}</span>
                </button>
              </div>
            </div>

            <h4 style={{ fontFamily: 'var(--telyra-font-display)', fontSize: '1.1rem', marginTop: '16px' }}>
              {content.howToInstallTitle}
            </h4>

            <ul className="telyra-guide-steps">
              {content.steps.map((s) => (
                <li key={s.num} className="telyra-guide-step">
                  <span className="telyra-guide-num">{s.num}</span>
                  <span className="telyra-guide-text">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standalone APK Downloads */}
          <div className="telyra-apk-cards">
            {content.items.map((item) => (
              <div key={item.id} className="telyra-apk-card">
                <div className="telyra-apk-info">
                  <h4>{item.title}</h4>
                  <p style={{ color: 'var(--telyra-text-secondary)', fontSize: '0.88rem', margin: '4px 0 10px' }}>
                    {item.targetDevice}
                  </p>
                  <div className="telyra-apk-meta">
                    <span>{content.labels.version} {item.version}</span>
                    <span>{content.labels.fileSize} {item.fileSize}</span>
                    <span>{content.labels.minSdk} {item.minSdk}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={item.downloadUrl}
                    className="telyra-btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                    download
                  >
                    <span>⬇</span>
                    <span>{item.fileName} {content.labels.downloadBtnText}</span>
                  </a>

                  <span style={{ fontFamily: 'var(--telyra-font-mono)', fontSize: '0.75rem', color: 'var(--telyra-emerald)' }}>
                    ✓ {content.verifiedBadge}
                  </span>
                </div>

                <div className="telyra-apk-sha">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>{content.labels.checksum}</span>
                    <button
                      type="button"
                      onClick={() => handleCopySha(item.sha256)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: copiedSha === item.sha256 ? 'var(--telyra-emerald)' : 'var(--telyra-cyan)',
                        cursor: 'pointer',
                        fontSize: '0.72rem',
                        fontFamily: 'inherit',
                      }}
                    >
                      {copiedSha === item.sha256 ? content.labels.copiedChecksum : content.labels.copyChecksum}
                    </button>
                  </div>
                  <div>{item.sha256}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
