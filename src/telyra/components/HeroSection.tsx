import { useState, useRef, useEffect } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { DownloadIcon, CpuIcon, CheckIcon, CopyIcon } from './TelyraIcons'

interface HeroProps {
  lang: Language
  downloaderCode: string
}

export function HeroSection({ lang, downloaderCode }: HeroProps) {
  const content = TELYRA_CONTENT[lang].hero
  const [copied, setCopied] = useState(false)
  const copyTimeoutRef = useRef<number | null>(null)

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (typeof window === 'undefined') return false

    // Modern Clipboard API
    if (navigator?.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch {
        // Fallback to legacy execCommand below
      }
    }

    // Legacy fallback using textarea
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
        // Ignored
      }
    }

    return false
  }

  const handleCopyCode = async () => {
    try {
      await copyToClipboard(downloaderCode)
    } catch {
      // Graceful fallback: never throw in restricted webviews
    }

    setCopied(true)
    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current)
    }
    copyTimeoutRef.current = window.setTimeout(() => {
      setCopied(false)
    }, 2200)
  }

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  const releaseStatus =
    lang === 'tr'
      ? 'Android TV, Google TV ve Fire OS İçin v1.1.0 Yayında'
      : 'v1.1.0 Released for Android TV, Google TV & Fire OS'

  const ctaDownloadText = lang === 'tr' ? 'APK İndir' : 'Download APK'
  const ctaFeaturesText = lang === 'tr' ? 'Donanım & Özellikler' : 'Hardware & Features'

  return (
    <header className="telyra-hero">
      <div className="telyra-container">
        {/* Release Status Pill */}
        <div className="telyra-hero__badge-wrap" role="status">
          <span className="telyra-hero__badge-pulse" aria-hidden="true" />
          <span className="telyra-hero__badge-text">{releaseStatus}</span>
        </div>

        {/* Dignified Typography Headline */}
        <h1 className="telyra-hero__headline">
          {content.headlinePrefix}{' '}
          <span className="telyra-hero__gradient">{content.headlineGradient}</span>
          {content.headlineSuffix ? ` ${content.headlineSuffix}` : ''}
        </h1>

        <p className="telyra-hero__subtitle">{content.subtitle}</p>

        {/* Primary Action Buttons */}
        <div className="telyra-hero__actions">
          <a href="#downloads" className="telyra-btn-primary telyra-hero-cta">
            <DownloadIcon width="20" height="20" aria-hidden="true" />
            <span>{ctaDownloadText}</span>
          </a>

          <a href="#features" className="telyra-btn-secondary telyra-hero-cta">
            <CpuIcon width="20" height="20" aria-hidden="true" />
            <span>{ctaFeaturesText}</span>
          </a>
        </div>

        {/* Downloader Quick Card with Robust Copy Handling */}
        <div className="telyra-downloader-bar" role="region" aria-label="AFTV Downloader Code">
          <span className="telyra-downloader-bar__label">{content.ctaDownloaderCode}</span>
          <span className="telyra-downloader-bar__code">{downloaderCode}</span>
          <button
            type="button"
            onClick={handleCopyCode}
            className={`telyra-copy-btn ${copied ? 'telyra-copy-btn--copied' : ''}`}
            aria-live="polite"
            title={copied ? content.copiedFeedback : content.copyButton}
          >
            {copied ? (
              <CheckIcon width="16" height="16" aria-hidden="true" />
            ) : (
              <CopyIcon width="16" height="16" aria-hidden="true" />
            )}
            <span>{copied ? content.copiedFeedback : content.copyButton}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
