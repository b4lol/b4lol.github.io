import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { CheckIcon, CopyIcon, DownloadIcon, ShieldIcon } from './TelyraIcons'

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
                  {copiedCode ? <CheckIcon width="16" height="16" /> : <CopyIcon width="16" height="16" />}
                  <span>{copiedCode ? TELYRA_CONTENT[lang].hero.copiedFeedback : TELYRA_CONTENT[lang].hero.copyButton}</span>
                </button>
              </div>
            </div>

            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: '14px' }}>
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
            <h3 style={{ fontFamily: 'var(--telyra-font-display)', fontSize: '1.4rem', marginBottom: '18px' }}>
              {content.directTitle}
            </h3>

            {content.items.map((item) => (
              <div key={item.id} className="telyra-apk-box">
                <div style={{ marginBottom: '14px' }}>
                  <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--telyra-text-secondary)', fontSize: '0.85rem' }}>
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
                    <DownloadIcon width="16" height="16" />
                    <span>{item.fileName} {content.labels.downloadBtnText}</span>
                  </a>

                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--telyra-font-mono)', fontSize: '0.75rem', color: 'var(--telyra-emerald)' }}>
                    <ShieldIcon width="14" height="14" />
                    <span>{content.verifiedBadge}</span>
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
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {copiedSha === item.sha256 ? <CheckIcon width="12" height="12" /> : <CopyIcon width="12" height="12" />}
                      <span>{copiedSha === item.sha256 ? content.labels.copiedChecksum : content.labels.copyChecksum}</span>
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
