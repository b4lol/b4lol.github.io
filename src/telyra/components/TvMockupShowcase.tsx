import { useState, useEffect, useCallback, useRef } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import {
  TvIcon,
  PhoneIcon,
  CalendarIcon,
  FilmIcon,
  LinkIcon,
  DpadArrowIcon,
} from './TelyraIcons'

interface MockupProps {
  lang: Language
}

type DeviceMode = 'tv' | 'mobile'
type TvTab = 'live' | 'guide' | 'movies' | 'sources'
type MobileTab = 'player' | 'stats' | 'live' | 'onboarding'
type HudMode = 'off' | 'compact' | 'detailed'

const PRELOAD_IMAGES: string[] = [
  '/telyra/screenshots/tv-live.webp',
  '/telyra/screenshots/tv-guide.webp',
  '/telyra/screenshots/tv-movies.webp',
  '/telyra/screenshots/tv-sources.webp',
  '/telyra/screenshots/tv-home.webp',
  '/telyra/screenshots/phone-player.webp',
  '/telyra/screenshots/phone-hud-detailed.webp',
  '/telyra/screenshots/phone-live.webp',
  '/telyra/screenshots/phone-home-onboarding.webp',
]

const TV_TABS_ORDER: TvTab[] = ['live', 'guide', 'movies', 'sources']

export function TvMockupShowcase({ lang }: MockupProps) {
  const content = TELYRA_CONTENT[lang].mockup
  const [device, setDevice] = useState<DeviceMode>('tv')
  const [activeTvTab, setActiveTvTab] = useState<TvTab>('live')
  const [activeMobileTab, setActiveMobileTab] = useState<MobileTab>('player')
  const [channelIndex, setChannelIndex] = useState(0)
  const [hudMode, setHudMode] = useState<HudMode>('compact')
  const [showZappingBanner, setShowZappingBanner] = useState(false)
  const [isCrossFading, setIsCrossFading] = useState(false)
  const zappingTimerRef = useRef<number | null>(null)
  const tabChangeTimerRef = useRef<number | null>(null)

  const presets = content.presets
  const currentPreset = presets[channelIndex % presets.length]

  const tvScreens: Record<
    TvTab,
    { label: string; src: string; fallbackSrc: string; badge: string; iconKey: string }
  > = {
    live: {
      label: content.tvTabs.live,
      src: '/telyra/screenshots/tv-live.webp',
      fallbackSrc: '/telyra/screenshots/tv-live.png',
      badge: '1080p50 0ms',
      iconKey: 'tv',
    },
    guide: {
      label: content.tvTabs.guide,
      src: '/telyra/screenshots/tv-guide.webp',
      fallbackSrc: '/telyra/screenshots/tv-guide.png',
      badge: 'XMLTV EPG',
      iconKey: 'calendar',
    },
    movies: {
      label: content.tvTabs.movies,
      src: '/telyra/screenshots/tv-movies.webp',
      fallbackSrc: '/telyra/screenshots/tv-movies.png',
      badge: '4K Ultra HD',
      iconKey: 'film',
    },
    sources: {
      label: content.tvTabs.sources,
      src: '/telyra/screenshots/tv-sources.webp',
      fallbackSrc: '/telyra/screenshots/tv-sources.png',
      badge: 'Xtream & M3U',
      iconKey: 'link',
    },
  }

  const renderTabIcon = (key: string) => {
    switch (key) {
      case 'tv':
        return <TvIcon width="15" height="15" />
      case 'calendar':
        return <CalendarIcon width="15" height="15" />
      case 'film':
        return <FilmIcon width="15" height="15" />
      default:
        return <LinkIcon width="15" height="15" />
    }
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

  // Preload high-resolution assets in idle time
  useEffect(() => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        PRELOAD_IMAGES.forEach((src) => {
          const img = new Image()
          img.src = src
        })
      })
    }
  }, [])

  // Cleanup active timers on unmount
  useEffect(() => {
    return () => {
      if (zappingTimerRef.current) {
        window.clearTimeout(zappingTimerRef.current)
      }
      if (tabChangeTimerRef.current) {
        window.clearTimeout(tabChangeTimerRef.current)
      }
    }
  }, [])

  const triggerZappingBanner = useCallback(() => {
    setShowZappingBanner(true)
    if (zappingTimerRef.current) {
      window.clearTimeout(zappingTimerRef.current)
    }
    zappingTimerRef.current = window.setTimeout(() => {
      setShowZappingBanner(false)
    }, 2800)
  }, [])

  const handleSelectChannel = useCallback(
    (index: number) => {
      setChannelIndex(index)
      setActiveTvTab('live')
      triggerZappingBanner()
    },
    [triggerZappingBanner]
  )

  const handleNextChannel = useCallback(() => {
    setChannelIndex((prev) => (prev + 1) % presets.length)
    setActiveTvTab('live')
    triggerZappingBanner()
  }, [presets.length, triggerZappingBanner])

  const handlePrevChannel = useCallback(() => {
    setChannelIndex((prev) => (prev - 1 + presets.length) % presets.length)
    setActiveTvTab('live')
    triggerZappingBanner()
  }, [presets.length, triggerZappingBanner])

  const handleCycleHudMode = useCallback(() => {
    setHudMode((prev) => {
      if (prev === 'off') return 'compact'
      if (prev === 'compact') return 'detailed'
      return 'off'
    })
  }, [])

  const handleTvTabChange = (tab: TvTab) => {
    setIsCrossFading(true)
    setActiveTvTab(tab)
    if (tabChangeTimerRef.current) {
      window.clearTimeout(tabChangeTimerRef.current)
    }
    tabChangeTimerRef.current = window.setTimeout(() => {
      setIsCrossFading(false)
    }, 240)
  }

  const handleMobileTabChange = (tab: MobileTab) => {
    setIsCrossFading(true)
    setActiveMobileTab(tab)
    if (tabChangeTimerRef.current) {
      window.clearTimeout(tabChangeTimerRef.current)
    }
    tabChangeTimerRef.current = window.setTimeout(() => {
      setIsCrossFading(false)
    }, 240)
  }

  // Keyboard remote control (Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return

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

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNextChannel, handlePrevChannel, handleCycleHudMode, activeTvTab])

  // Context-aware ambilight glow based on active content
  const getAmbilightClass = () => {
    if (activeTvTab === 'movies') return 'ambilight-amber'
    if (activeTvTab === 'guide') return 'ambilight-purple'
    if (activeTvTab === 'sources') return 'ambilight-cyan'
    if (activeTvTab === 'live') {
      if (channelIndex === 1) return 'ambilight-red'
      return 'ambilight-blue'
    }
    return 'ambilight-default'
  }

  return (
    <section id="telemetry" className="telyra-section" aria-labelledby="showcase-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="showcase-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-mockup-wrapper">
          {/* Top Control Bar: Device Switcher + 10-Foot Screen Tabs */}
          <div className="telyra-mockup-header">
            {/* Device Switcher */}
            <div className="telyra-device-switcher" role="tablist" aria-label="Device Viewport Switcher">
              <button
                type="button"
                role="tab"
                aria-selected={device === 'tv'}
                className={`telyra-device-btn ${device === 'tv' ? 'active' : ''}`}
                onClick={() => setDevice('tv')}
              >
                <TvIcon width="16" height="16" />
                <span>{content.toggleTv}</span>
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={device === 'mobile'}
                className={`telyra-device-btn ${device === 'mobile' ? 'active' : ''}`}
                onClick={() => setDevice('mobile')}
              >
                <PhoneIcon width="16" height="16" />
                <span>{content.toggleMobile}</span>
              </button>
            </div>

            {/* 10-Foot Screen Tabs */}
            <div className="telyra-screen-tabs" role="tablist" aria-label="10-Foot Navigation Tabs">
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
                      <span className="telyra-tab-icon">{renderTabIcon(tvScreens[tabKey].iconKey)}</span>
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

              {/* 4K TV Frame & Bezel Assembly (Strict 16:9, Zero Layout Shift) */}
              <div className="telyra-tv-frame">
                <div className="telyra-tv-bezel">
                  <div className="telyra-tv-screen">
                    {/* Subtle Optical Screen Glare */}
                    <div className="telyra-tv-glare" />

                    {/* Layered Preloaded Images with strict 16:9 dimensions */}
                    {TV_TABS_ORDER.map((tabKey) => (
                      <picture key={tabKey}>
                        <source srcSet={tvScreens[tabKey].src} type="image/webp" />
                        <img
                          src={tvScreens[tabKey].fallbackSrc}
                          alt={`TELYRA TV - ${tvScreens[tabKey].label}`}
                          width={1920}
                          height={1080}
                          loading={tabKey === 'live' ? 'eager' : 'lazy'}
                          decoding="async"
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

                    {/* 2. COMPACT HUD PILL (Top-Right) with Required Telemetries */}
                    {hudMode === 'compact' && activeTvTab === 'live' && (
                      <div className="telyra-hud-compact" role="status" aria-label="Stream Telemetry HUD">
                        <div className="telyra-hud-compact__dot" />
                        <span className="telyra-hud-compact__badge">Direct Stream 1080p50</span>
                        <span className="telyra-hud-compact__fps">Media3 ExoPlayer</span>
                        <span className="telyra-hud-compact__audio">AES-256 StrongBox</span>
                        <span className="telyra-hud-compact__bitrate">{currentPreset.bitrate.split(' ')[0]}</span>
                        <button
                          type="button"
                          onClick={() => setHudMode('detailed')}
                          className="telyra-hud-compact__expand"
                          title={content.hudLabels.showHud}
                          aria-label={content.hudLabels.showHud}
                        >
                          [+]
                        </button>
                      </div>
                    )}

                    {/* 3. DETAILED RAYCAST HUD PANEL */}
                    {hudMode === 'detailed' && activeTvTab === 'live' && (
                      <div className="telyra-hud-detailed-panel" role="region" aria-label="Detailed Telemetry Panel">
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
                            <span>{lang === 'tr' ? 'Akış Modu' : 'Stream Mode'}</span>
                            <span className="text-cyan font-mono">Direct Stream 1080p50</span>
                          </div>
                          <div className="telyra-hud-item">
                            <span>{lang === 'tr' ? 'Oynatıcı Çekirdeği' : 'Player Core'}</span>
                            <span className="text-cyan font-mono">Media3 ExoPlayer</span>
                          </div>
                          <div className="telyra-hud-item">
                            <span>{lang === 'tr' ? 'Donanım Güvenliği' : 'Hardware Security'}</span>
                            <span className="text-emerald font-mono">AES-256 StrongBox</span>
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
                            <span className="text-emerald font-mono">{currentPreset.framerate}</span>
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
                </div>
              </div>

              {/* TV Metal Stand */}
              <div className="telyra-tv-stand" />

              {/* TV Under-Chassis Shadow */}
              <div className="telyra-tv-shadow" />

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

                {/* 2. Precision D-Pad Simulator */}
                <div className="telyra-remote-dpad-wrap">
                  <div className="telyra-dpad" role="group" aria-label="TV Remote D-Pad">
                    <button
                      type="button"
                      onClick={handleCycleHudMode}
                      className="telyra-dpad-btn dpad-up"
                      title="HUD Mode"
                      aria-label="Toggle HUD Mode"
                    >
                      <DpadArrowIcon direction="up" />
                    </button>
                    <button
                      type="button"
                      onClick={handlePrevChannel}
                      className="telyra-dpad-btn dpad-left"
                      title="Prev Channel"
                      aria-label="Previous Channel"
                    >
                      <DpadArrowIcon direction="left" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectChannel(channelIndex)}
                      className="telyra-dpad-btn dpad-ok"
                      title="Select"
                      aria-label="Select Channel"
                    >
                      OK
                    </button>
                    <button
                      type="button"
                      onClick={handleNextChannel}
                      className="telyra-dpad-btn dpad-right"
                      title="Next Channel"
                      aria-label="Next Channel"
                    >
                      <DpadArrowIcon direction="right" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const curIdx = TV_TABS_ORDER.indexOf(activeTvTab)
                        handleTvTabChange(TV_TABS_ORDER[(curIdx + 1) % TV_TABS_ORDER.length])
                      }}
                      className="telyra-dpad-btn dpad-down"
                      title="Next Tab"
                      aria-label="Next Navigation Tab"
                    >
                      <DpadArrowIcon direction="down" />
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

              {/* Interactive Remote Control Hint */}
              <div className="telyra-remote-hint-badge">
                <span className="telyra-remote-hint-dot" />
                <span>{content.remoteHint}</span>
              </div>
            </div>
          ) : (
            /* =================== 20:9 MOBILE CHASSIS =================== */
            <div className="telyra-mobile-stage">
              <div className="telyra-mobile-chassis">
                <div className="telyra-mobile-bezel">
                  {/* Camera Punchhole */}
                  <div className="telyra-mobile-camera" />

                  {/* Mobile Screen Surface */}
                  <div className="telyra-mobile-screen">
                    {(Object.keys(mobileScreens) as MobileTab[]).map((tabKey) => (
                      <picture key={tabKey}>
                        <source srcSet={mobileScreens[tabKey].src} type="image/webp" />
                        <img
                          src={mobileScreens[tabKey].fallbackSrc}
                          alt={`TELYRA Mobile - ${mobileScreens[tabKey].label}`}
                          width={1080}
                          height={2400}
                          loading={tabKey === 'player' ? 'eager' : 'lazy'}
                          decoding="async"
                          className={`telyra-mobile-img ${activeMobileTab === tabKey ? 'active' : ''} ${
                            isCrossFading ? 'cross-fading' : ''
                          }`}
                          draggable={false}
                        />
                      </picture>
                    ))}
                  </div>

                  {/* Home Indicator */}
                  <div className="telyra-mobile-home-indicator" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
