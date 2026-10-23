import { useState } from 'react'
import type { Language } from './data/telyraData'
import { TelyraNavbar } from './components/TelyraNavbar'
import { HeroSection } from './components/HeroSection'
import { TvMockupShowcase } from './components/TvMockupShowcase'
import { FeatureGrid } from './components/FeatureGrid'
import { TechnicalSpecsSection } from './components/TechnicalSpecsSection'
import { LicensePortalSection } from './components/LicensePortalSection'
import { DownloadSection } from './components/DownloadSection'
import { PrivacySection } from './components/PrivacySection'
import { TelyraFooter } from './components/TelyraFooter'
import './styles/telyra.css'

export interface TelyraAppProps {
  initialLang?: Language
  initialPrivacyModal?: boolean
}

export function TelyraApp({ initialLang = 'tr', initialPrivacyModal = false }: TelyraAppProps) {
  const [lang, setLang] = useState<Language>(initialLang)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(initialPrivacyModal)
  const downloaderCode = 'b4.lol/telyra/tv'

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'))
  }

  return (
    <div className="telyra-page">
      {/* Sticky Titanium Navigation */}
      <TelyraNavbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />

      <main>
        {/* 1. Hero Section */}
        <HeroSection lang={lang} downloaderCode={downloaderCode} />

        {/* 2. 16:9 OLED TV & Live Simulated HUD */}
        <div id="showcase">
          <TvMockupShowcase lang={lang} />
        </div>

        {/* 3. The Four Engineering Pillars */}
        <div id="pillars">
          <FeatureGrid lang={lang} />
        </div>

        {/* 4. Chipset & Codec Compatibility Matrix */}
        <div id="specs">
          <TechnicalSpecsSection lang={lang} />
        </div>

        {/* 5. Cloudflare Edge Pro License Verification Portal */}
        <div id="license">
          <LicensePortalSection lang={lang} />
        </div>

        {/* 6. Direct Downloads Hub */}
        <DownloadSection lang={lang} downloaderCode={downloaderCode} />

        {/* 7. Legal Framework & Privacy */}
        <PrivacySection
          lang={lang}
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
          onOpen={() => setPrivacyModalOpen(true)}
        />
      </main>

      {/* 8. Cinema Footer */}
      <TelyraFooter
        lang={lang}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />
    </div>
  )
}

export default TelyraApp
