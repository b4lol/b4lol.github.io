import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT, TELEMETRY_PRESETS } from '../data/telyraData'

interface MockupProps {
  lang: Language
}

type DeviceMode = 'tv' | 'mobile'
type ScreenTab = 'live' | 'guide' | 'dev' | 'sources'

export function TvMockupShowcase({ lang }: MockupProps) {
  const content = TELYRA_CONTENT[lang].mockup
  const [device, setDevice] = useState<DeviceMode>('tv')
  const [activeTab, setActiveTab] = useState<ScreenTab>('live')
  const [presetIndex, setPresetIndex] = useState(0)

  const currentPreset = TELEMETRY_PRESETS[presetIndex]

  // Image mapping for TV
  const tvScreens: Record<ScreenTab, string> = {
    live: '/telyra/screenshots/tv-live.png',
    guide: '/telyra/screenshots/tv-guide.png',
    dev: '/telyra/screenshots/tv-hud-developer.png',
    sources: '/telyra/screenshots/tv-sources.png',
  }

  // Image mapping for Mobile
  const mobileScreens: Record<ScreenTab, string> = {
    live: '/telyra/screenshots/phone-player.png',
    guide: '/telyra/screenshots/phone-hud-detailed.png',
    dev: '/telyra/screenshots/phone-live.png',
    sources: '/telyra/screenshots/phone-home-onboarding.png',
  }

  const nextPreset = () => {
    setPresetIndex((prev) => (prev + 1) % TELEMETRY_PRESETS.length)
  }

  return (
    <section id="telemetry" className="telyra-section" aria-labelledby="mockup-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">// 10-FOOT LIVING ROOM UI</p>
          <h2 id="mockup-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-mockup-wrapper">
          <div className="telyra-mockup-header">
            {/* Device Switcher */}
            <div className="telyra-device-switcher" role="tablist">
              <button
                type="button"
                className={`telyra-device-tab ${device === 'tv' ? 'active' : ''}`}
                onClick={() => setDevice('tv')}
              >
                <span>📺</span>
                <span>{content.toggleTv}</span>
              </button>
              <button
                type="button"
                className={`telyra-device-tab ${device === 'mobile' ? 'active' : ''}`}
                onClick={() => setDevice('mobile')}
              >
                <span>📱</span>
                <span>{content.toggleMobile}</span>
              </button>
            </div>

            {/* Screen Tabs */}
            <div className="telyra-screen-tabs">
              <button
                type="button"
                className={`telyra-screen-btn ${activeTab === 'live' ? 'active' : ''}`}
                onClick={() => setActiveTab('live')}
              >
                {content.tabs.live}
              </button>
              <button
                type="button"
                className={`telyra-screen-btn ${activeTab === 'guide' ? 'active' : ''}`}
                onClick={() => setActiveTab('guide')}
              >
                {content.tabs.guide}
              </button>
              <button
                type="button"
                className={`telyra-screen-btn ${activeTab === 'dev' ? 'active' : ''}`}
                onClick={() => setActiveTab('dev')}
              >
                {content.tabs.dev}
              </button>
              <button
                type="button"
                className={`telyra-screen-btn ${activeTab === 'sources' ? 'active' : ''}`}
                onClick={() => setActiveTab('sources')}
              >
                {content.tabs.sources}
              </button>
            </div>
          </div>

          {/* TV Display View */}
          {device === 'tv' ? (
            <div className="telyra-tv-chassis">
              <div className="telyra-tv-screen">
                <img
                  src={tvScreens[activeTab]}
                  alt="TELYRA Android TV Interface"
                  loading="lazy"
                />

                {/* Simulated Live HUD Overlay (Active on Live tab) */}
                {activeTab === 'live' && (
                  <div className="telyra-hud-overlay">
                    <div className="telyra-hud-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="telyra-hud-live-tag">
                          <span className="telyra-hero__badge-pulse" /> REC/LIVE
                        </span>
                        <span className="telyra-hud-channel">{currentPreset.channelName}</span>
                      </div>
                      <button
                        type="button"
                        onClick={nextPreset}
                        className="telyra-hud-engine-badge"
                        style={{ border: 'none', cursor: 'pointer' }}
                        title="Sonraki Akış Profilini Simüle Et"
                      >
                        [Profil Değiştir ⟳]
                      </button>
                    </div>

                    <div className="telyra-hud-grid">
                      <div className="telyra-hud-item">
                        <span>Program:</span>
                        <span>{currentPreset.programTitle}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Çözünürlük:</span>
                        <span>{currentPreset.resolution}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Video Dekoder:</span>
                        <span>{currentPreset.decoder}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Kare Hızı & Düşen:</span>
                        <span>{currentPreset.framerate}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Görüntü İşleme:</span>
                        <span>{currentPreset.shaderEngine}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Bitrate & Soket:</span>
                        <span>{currentPreset.bitrate}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>Ses Passthrough:</span>
                        <span>{currentPreset.audioFormat}</span>
                      </div>
                      <div className="telyra-hud-item">
                        <span>HDMI AFR Modu:</span>
                        <span>{currentPreset.afrState}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="telyra-tv-stand" />
              <div className="telyra-tv-reflection" />
            </div>
          ) : (
            /* Mobile Phone View */
            <div className="telyra-phone-chassis">
              <div className="telyra-phone-notch" />
              <div className="telyra-phone-screen">
                <img
                  src={mobileScreens[activeTab]}
                  alt="TELYRA Mobile Handheld Interface"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
