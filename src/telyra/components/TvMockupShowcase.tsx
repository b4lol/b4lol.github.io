import { useState, useEffect, useCallback, useRef } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'

interface MockupProps {
  lang: Language
}

type DeviceMode = 'tv' | 'mobile'
type TvTab = 'home' | 'live' | 'guide' | 'movies' | 'detail' | 'hud' | 'sources'
type MobileTab = 'player' | 'stats' | 'live' | 'onboarding'
type HudMode = 'off' | 'compact' | 'detailed'

const PRELOAD_IMAGES: string[] = [
  '/telyra/screenshots/tv-home.webp',
  '/telyra/screenshots/tv-live.webp',
  '/telyra/screenshots/tv-guide.webp',
  '/telyra/screenshots/tv-movies.webp',
  '/telyra/screenshots/tv-detail.webp',
  '/telyra/screenshots/tv-hud-developer.webp',
  '/telyra/screenshots/tv-sources.webp',
  '/telyra/screenshots/phone-player.webp',
  '/telyra/screenshots/phone-hud-detailed.webp',
  '/telyra/screenshots/phone-live.webp',
  '/telyra/screenshots/phone-home-onboarding.webp',
]

const TV_TABS_ORDER: TvTab[] = ['home', 'live', 'guide', 'movies', 'detail', 'hud', 'sources']

export function TvMockupShowcase({ lang }: MockupProps) {
  const content = TELYRA_CONTENT[lang].mockup
  const [device, setDevice] = useState<DeviceMode>('tv')
  const [activeTvTab, setActiveTvTab] = useState<TvTab>('home')
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>('player')
  const [channelIndex, setChannelIndex] = useState(0)
  const [hudMode, setHudMode] = useState<HudMode>('compact')
  const [showZappingBanner, setShowZappingBanner] = useState(false)
  const [isCrossFading, setIsCrossFading] = useState(false)
  const zappingTimerRef = useRef<number | null>(null)

  const presets = content.presets
  const currentPreset = presets[channelIndex % presets.length]

  const tvScreens: Record<
    TvTab,
    { label: string; src: string; fallbackSrc: string; badge: string; icon: string }
  > = {
    home: {
      label: content.tvTabs.home,
      src: '/telyra/screenshots/tv-home.webp',
      fallbackSrc: '/telyra/screenshots/tv-home.png',
      badge: 'NowSeen 10-Foot',
      icon: '🏠',
    },
    live: {
      label: content.tvTabs.live,
      src: '/telyra/screenshots/tv-live.webp',
      fallbackSrc: '/telyra/screenshots/tv-live.png',
      badge: '1080i50 0ms',
      icon: '📺',
    },
    guide: {
      label: content.tvTabs.guide,
      src: '/telyra/screenshots/tv-guide.webp',
      fallbackSrc: '/telyra/screenshots/tv-guide.png',
      badge: 'XMLTV EPG',
      icon: '📅',
    },
    movies: {
      label: content.tvTabs.movies,
      src: '/telyra/screenshots/tv-movies.webp',
      fallbackSrc: '/telyra/screenshots/tv-movies.png',
      badge: '4K Ultra HD',
      icon: '🎬',
    },
    detail: {
      label: content.tvTabs.detail,
      src: '/telyra/screenshots/tv-detail.webp',
      fallbackSrc: '/telyra/screenshots/tv-detail.png',
      badge: 'HDR10 & Künye',
      icon: '✨',
    },
    hud: {
      label: content.tvTabs.hud,
      src: '/telyra/screenshots/tv-hud-developer.webp',
      fallbackSrc: '/telyra/screenshots/tv-hud-developer.png',
      badge: '25.04 Mbps OSD',
      icon: '⚡',
    },
    sources: {
      label: content.tvTabs.sources,
      src: '/telyra/screenshots/tv-sources.webp',
      fallbackSrc: '/telyra/screenshots/tv-sources.png',
      badge: 'Xtream & M3U',
      icon: '🔗',
    },
  }

  const mobileScreens: Record<MobileTab, { label: string; src: string; fallbackSrc: string }> = {
    player: {
      label: content.mobileTabs.player,
      src: '/telyra/screenshots/phone-player.webp',
      fallbackSrc: '/telyra/screenshots/phone-player.png',
    },
    stats: {
      label: content.mobileTabs.stats,
      src: '/telyra/screenshots/phone-hud-detailed.webp',
      fallbackSrc: '/telyra/screenshots/phone-hud-detailed.png',
    },
    live: {
      label: content.mobileTabs.live,
      src: '/telyra/screenshots/phone-live.webp',
      fallbackSrc: '/telyra/screenshots/phone-live.png',
    },
    onboarding: {
      label: content.mobileTabs.onboarding,
      src: '/telyra/screenshots/phone-home-onboarding.webp',
      fallbackSrc: '/telyra/screenshots/phone-home-onboarding.png',
    },
  }

  // Preload all 10 optimized screenshots on mount for instantaneous 0ms switching
  useEffect(() => {
    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image()
      img.src = src
      if ('decode' in img) {
        img.decode().catch(() => {})
      }
    })
  }, [])

  const triggerCrossFade = useCallback(() => {
    setIsCrossFading(true)
    const t = window.setTimeout(() => setIsCrossFading(false), 240)
    return () => clearTimeout(t)
  }, [])

  const handleSelectChannel = useCallback(
    (index: number) => {
      triggerCrossFade()
      setChannelIndex(index)
      setShowZappingBanner(true)
      if (zappingTimerRef.current) window.clearTimeout(zappingTimerRef.current)
      zappingTimerRef.current = window.setTimeout(() => {
        setShowZappingBanner(false)
      }, 2400)
    },
    [triggerCrossFade]
  )

  const handleNextChannel = useCallback(() => {
    handleSelectChannel((channelIndex + 1) % presets.length)
  }, [channelIndex, presets.length, handleSelectChannel])

  const handlePrevChannel = useCallback(() => {
    handleSelectChannel((channelIndex - 1 + presets.length) % presets.length)
  }, [channelIndex, presets.length, handleSelectChannel])

  const handleCycleHudMode = useCallback(() => {
    setHudMode((prev) => {
      if (prev === 'off') return 'compact'
      if (prev === 'compact') return 'detailed'
      return 'off'
    })
  }, [])

  const handleTvTabChange = (tab: TvTab) => {
    triggerCrossFade()
    setActiveTvTab(tab)
  }

  const handleMobileTabChange = (tab: MobileTab) => {
    triggerCrossFade()
    setActiveMobileTab(tab)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (device !== 'tv') return
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      handleNextChannel()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      handlePrevChannel()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      handleCycleHudMode()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const curIdx = TV_TABS_ORDER.indexOf(activeTvTab)
      handleTvTabChange(TV_TABS_ORDER[(curIdx + 1) % TV_TABS_ORDER.length])
    }
  }

  const getAmbilightClass = () => {
    if (activeTvTab === 'movies' || activeTvTab === 'detail') return 'ambilight-amber'
    if (activeTvTab === 'hud') return 'ambilight-cyan'
    if (activeTvTab === 'sources') return 'ambilight-purple'
    return channelIndex === 0
      ? 'ambilight-cyan'
      : channelIndex === 1
      ? 'ambilight-amber'
      : 'ambilight-purple'
  }

  return (
    <section
      id="telemetry"
      className="telyra-section"
      aria-labelledby="mockup-heading"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="telyra-container">
        {/* Section Header */}
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="mockup-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-mockup-wrapper">
          {/* Top Control Bar: Device Switcher + Screen Tabs */}
          <div className="telyra-mockup-header">
            {/* Device Switcher */}
            <div className="telyra-device-switcher" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={device === 'tv'}
                className={`telyra-device-btn ${device === 'tv' ? 'active' : ''}`}
                onClick={() => setDevice('tv')}
              >
                <span className="telyra-device-icon">📺</span>
                <span>{content.toggleTv}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={device === 'mobile'}
                className={`telyra-device-btn ${device === 'mobile' ? 'active' : ''}`}
                onClick={() => setDevice('mobile')}
              >
                <span className="telyra-device-icon">📱</span>
                <span>{content.toggleMobile}</span>
              </button>
            </div>

            {/* Screen Tabs (Context-Aware: 6 Real TV Tabs vs Mobile) */}
            <div className="telyra-screen-tabs" role="tablist">
              {device === 'tv'
                ? TV_TABS_ORDER.map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      role="tab"
                      aria-selected={activeTvTab === tabKey}
                      className={`telyra-screen-btn ${activeTvTab === tabKey ? 'active' : ''}`}
                      onClick={() => handleTvTabChange(tabKey)}
                    >
                      <span className="telyra-tab-icon">{tvScreens[tabKey].icon}</span>
                      <span className="telyra-tab-label">{tvScreens[tabKey].label}</span>
                      <span className="telyra-tab-badge">{tvScreens[tabKey].badge}</span>
                    </button>
                  ))
                : (Object.keys(mobileScreens) as MobileTab[]).map((tabKey) => (
                    <button
                      key={tabKey}
                      type="button"
                      role="tab"
                      aria-selected={activeMobileTab === tabKey}
                      className={`telyra-screen-btn ${activeMobileTab === tabKey ? 'active' : ''}`}
                      onClick={() => handleMobileTabChange(tabKey)}
                    >
                      {activeMobileTab === tabKey && <span className="telyra-tab-dot" />}
                      {mobileScreens[tabKey].label}
                    </button>
                  ))}
            </div>
          </div>

          {/* MAIN HARDWARE CHASSIS */}
          {device === 'tv' ? (
            /* =================== 16:9 OLED TV STAGE =================== */
            <div className="telyra-tv-stage">
              {/* Dynamic Ambilight Backlight */}
              <div className={`telyra-tv-ambilight ${getAmbilightClass()}`} />

              {/* TV Hardware Chassis */}
              <div className="telyra-tv-chassis">
                <div className="telyra-tv-screen">
                  {/* Layered Preloaded Images with 0ms GPU Cross-Fade */}
                  {TV_TABS_ORDER.map((tabKey) => (
                    <picture key={tabKey}>
                      <source srcSet={tvScreens[tabKey].src} type="image/webp" />
                      <img
                        src={tvScreens[tabKey].fallbackSrc}
                        alt={`TELYRA TV - ${tvScreens[tabKey].label}`}
                        width={1920}
                        height={1080}
                        className={`telyra-screen-img ${activeTvTab === tabKey ? 'active' : ''} ${
                          isCrossFading ? 'cross-fading' : ''
                        }`}
                        draggable={false}
                      />
                    </picture>
                  ))}

                  {/* 1. CHANNEL ZAPPING OSD TOAST BANNER */}
                  <div className={`telyra-zapping-banner ${showZappingBanner ? 'visible' : ''}`}>
                    <div className="telyra-zapping-header">
                      <span className="telyra-zapping-ch-badge">CH {channelIndex + 1}</span>
                      <span className="telyra-zapping-ch-name">{currentPreset.channelName}</span>
                      <span className="telyra-zapping-live-dot">{content.hudLabels.recLive}</span>
                    </div>
                    <div className="telyra-zapping-program">{currentPreset.programTitle}</div>
                    <div className="telyra-zapping-pills">
                      <span>{currentPreset.resolution.split('@')[0]}</span>
                      <span>{currentPreset.framerate.split(' ')[0]}</span>
                      <span>{currentPreset.codec.split(' ')[0]}</span>
                      <span>{currentPreset.bitrate.split(' ')[0]}</span>
                    </div>
                  </div>

                  {/* 2. COMPACT HUD PILL (Top-Right) - Shown on Live TV */}
                  {hudMode === 'compact' && activeTvTab === 'live' && (
                    <div className="telyra-hud-compact">
                      <div className="telyra-hud-compact__dot" />
                      <span className="telyra-hud-compact__badge">4K UHD</span>
                      <span className="telyra-hud-compact__fps">50.0 FPS</span>
                      <span className="telyra-hud-compact__bitrate">{currentPreset.bitrate.split(' ')[0]}</span>
                      <span className="telyra-hud-compact__audio">PASSTHROUGH</span>
                      <button
                        type="button"
                        onClick={() => setHudMode('detailed')}
                        className="telyra-hud-compact__expand"
                        title={content.hudLabels.showHud}
                      >
                        ⤢
                      </button>
                    </div>
                  )}

                  {/* 3. DETAILED RAYCAST HUD PANEL */}
                  {hudMode === 'detailed' && (activeTvTab === 'live' || activeTvTab === 'hud') && (
                    <div className="telyra-hud-detailed-panel">
                      <div className="telyra-hud-header">
                        <div className="telyra-hud-header__left">
                          <span className="telyra-hud-live-tag">
                            <span className="telyra-hero__badge-pulse" />
                            {content.hudLabels.recLive}
                          </span>
                          <span className="telyra-hud-channel">{currentPreset.channelName}</span>
                        </div>
                        <div className="telyra-hud-header__actions">
                          <button
                            type="button"
                            onClick={handleNextChannel}
                            className="telyra-hud-action-btn telyra-hud-preset-btn"
                            title={content.hudLabels.switchProfile}
                          >
                            {content.hudLabels.switchProfile}
                          </button>
                          <button
                            type="button"
                            onClick={() => setHudMode('compact')}
                            className="telyra-hud-action-btn telyra-hud-min-btn"
                            title={content.hudLabels.compactBtn}
                          >
                            {content.hudLabels.compactBtn}
                          </button>
                          <button
                            type="button"
                            onClick={() => setHudMode('off')}
                            className="telyra-hud-action-btn telyra-hud-close-btn"
                            title={content.hudLabels.closeBtn}
                          >
                            {content.hudLabels.closeBtn}
                          </button>
                        </div>
                      </div>

                      <div className="telyra-hud-grid">
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.program}</span>
                          <span className="text-white font-medium">{currentPreset.programTitle}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.resolution}</span>
                          <span>{currentPreset.resolution}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.decoder}</span>
                          <span className="text-cyan">{currentPreset.decoder}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.framerate}</span>
                          <span className="text-green font-mono">{currentPreset.framerate}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.shader}</span>
                          <span>{currentPreset.shaderEngine}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.bitrate}</span>
                          <span className="font-mono">{currentPreset.bitrate}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.audio}</span>
                          <span>{currentPreset.audioFormat}</span>
                        </div>
                        <div className="telyra-hud-item">
                          <span>{content.hudLabels.afr}</span>
                          <span className="text-cyan font-mono">{currentPreset.afrState}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. BUTTON TO OPEN HUD WHEN OFF */}
                  {hudMode === 'off' && activeTvTab === 'live' && (
                    <button
                      type="button"
                      className="telyra-hud-open-btn"
                      onClick={() => setHudMode('compact')}
                    >
                      {content.hudLabels.showHud}
                    </button>
                  )}
                </div>

                {/* TV Metal Stand */}
                <div className="telyra-tv-stand" />
              </div>

              {/* Reflection */}
              <div className="telyra-tv-reflection" />

              {/* Remote Control Bar */}
              <div className="telyra-remote-control-bar">
                {/* 1. Fast Zapper */}
                <div className="telyra-remote-group">
                  <span className="telyra-remote-label">{content.fastZappingLabel}</span>
                  <div className="telyra-zapper-buttons">
                    {presets.map((preset, idx) => (
                      <button
                        key={preset.channelName}
                        type="button"
                        onClick={() => handleSelectChannel(idx)}
                        className={`telyra-zapper-btn ${channelIndex === idx ? 'active' : ''}`}
                      >
                        <span className="telyra-zapper-num">{idx + 1}</span>
                        <span className="telyra-zapper-title">{preset.channelName.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Apple TV D-Pad Simulator */}
                <div className="telyra-remote-dpad-wrap">
                  <div className="telyra-dpad" role="group" aria-label="Apple TV Remote D-Pad">
                    <button
                      type="button"
                      onClick={handleCycleHudMode}
                      className="telyra-dpad-btn dpad-up"
                      title="HUD Mode"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      onClick={handlePrevChannel}
                      className="telyra-dpad-btn dpad-left"
                      title="Prev Channel"
                    >
                      ◀
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectChannel(channelIndex)}
                      className="telyra-dpad-btn dpad-ok"
                      title="Select"
                    >
                      OK
                    </button>
                    <button
                      type="button"
                      onClick={handleNextChannel}
                      className="telyra-dpad-btn dpad-right"
                      title="Next Channel"
                    >
                      ▶
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const curIdx = TV_TABS_ORDER.indexOf(activeTvTab)
                        handleTvTabChange(TV_TABS_ORDER[(curIdx + 1) % TV_TABS_ORDER.length])
                      }}
                      className="telyra-dpad-btn dpad-down"
                      title="Next Tab"
                    >
                      ▼
                    </button>
                  </div>
                </div>

                {/* 3. HUD Controls */}
                <div className="telyra-remote-group">
                  <span className="telyra-remote-label">{content.hudViewLabel}</span>
                  <div className="telyra-pill-group">
                    <button
                      type="button"
                      className={`telyra-pill-btn ${hudMode === 'off' ? 'active' : ''}`}
                      onClick={() => setHudMode('off')}
                    >
                      {content.hudModes.off}
                    </button>
                    <button
                      type="button"
                      className={`telyra-pill-btn ${hudMode === 'compact' ? 'active' : ''}`}
                      onClick={() => setHudMode('compact')}
                    >
                      {content.hudModes.compact}
                    </button>
                    <button
                      type="button"
                      className={`telyra-pill-btn ${hudMode === 'detailed' ? 'active' : ''}`}
                      onClick={() => setHudMode('detailed')}
                    >
                      {content.hudModes.detailed}
                    </button>
                  </div>
                </div>
              </div>

              {/* Sub-bar Remote Hint */}
              <p className="telyra-remote-hint">{content.remoteHint}</p>
            </div>
          ) : (
            /* =================== 3D TITANIUM MOBILE PHONE STAGE =================== */
            <div className="telyra-phone-stage">
              <div className="telyra-phone-chassis">
                <div className="telyra-phone-titanium-rim" />
                <div className="telyra-phone-island">
                  <div className="telyra-island-camera" />
                  <div className="telyra-island-sensor" />
                </div>
                <div className="telyra-phone-btn-power" />
                <div className="telyra-phone-btn-volume-up" />
                <div className="telyra-phone-btn-volume-down" />

                <div className="telyra-phone-screen">
                  {(Object.keys(mobileScreens) as MobileTab[]).map((tabKey) => (
                    <picture key={tabKey}>
                      <source srcSet={mobileScreens[tabKey].src} type="image/webp" />
                      <img
                        src={mobileScreens[tabKey].fallbackSrc}
                        alt={`TELYRA Mobile - ${mobileScreens[tabKey].label}`}
                        width={1080}
                        height={2400}
                        className={`telyra-screen-img ${
                          activeMobileTab === tabKey ? 'active' : ''
                        } ${isCrossFading ? 'cross-fading' : ''}`}
                        draggable={false}
                      />
                    </picture>
                  ))}
                  <div className="telyra-phone-home-indicator" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
