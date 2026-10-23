import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { TvIcon, PhoneIcon, CheckIcon, CopyIcon } from './TelyraIcons'

interface HeroProps {
  lang: Language
  downloaderCode: string
}

export function HeroSection({ lang, downloaderCode }: HeroProps) {
  const content = TELYRA_CONTENT[lang].hero
  const [copied, setCopied] = useState(false)

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(downloaderCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  return (
    <header className="telyra-hero">
      <div className="telyra-container">
        <div className="telyra-hero__badge-wrap">
          <span className="telyra-hero__badge-pulse" />
          <span className="telyra-hero__badge-text">{content.badge}</span>
        </div>

        <h1 className="telyra-hero__headline">
          {content.headlinePrefix} <span className="telyra-hero__gradient">{content.headlineGradient}</span>{' '}
          {content.headlineSuffix}
        </h1>

        <p className="telyra-hero__subtitle">{content.subtitle}</p>

        <div className="telyra-hero__actions">
          <a href="#downloads" className="telyra-btn-primary telyra-hero-cta">
            <TvIcon width="20" height="20" />
            <span>{content.ctaDownloadTv}</span>
          </a>

          <a href="#downloads" className="telyra-btn-secondary telyra-hero-cta">
            <PhoneIcon width="20" height="20" />
            <span>{content.ctaDownloadMobile}</span>
          </a>
        </div>

        {/* Downloader Quick Card */}
        <div className="telyra-downloader-bar" role="region" aria-label="AFTV Downloader Code">
          <span className="telyra-downloader-bar__label">{content.ctaDownloaderCode}</span>
          <span className="telyra-downloader-bar__code">{downloaderCode}</span>
          <button
            type="button"
            onClick={handleCopyCode}
            className={`telyra-copy-btn ${copied ? 'telyra-copy-btn--copied' : ''}`}
            aria-live="polite"
          >
            {copied ? <CheckIcon width="16" height="16" /> : <CopyIcon width="16" height="16" />}
            <span>{copied ? content.copiedFeedback : content.copyButton}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
