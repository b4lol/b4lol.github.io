import { useState } from 'react'
import type { Language } from './data/telyraData'
import { TelyraNavbar } from './components/TelyraNavbar'
import { HeroSection } from './components/HeroSection'
import { TvMockupShowcase } from './components/TvMockupShowcase'
import { FeatureGrid } from './components/FeatureGrid'
import { ComparisonMatrix } from './components/ComparisonMatrix'
import { DownloadSection } from './components/DownloadSection'
import { PrivacySection } from './components/PrivacySection'
import { TelyraFooter } from './components/TelyraFooter'
import './styles/telyra.css'

interface TelyraAppProps {
  initialLang?: Language
  initialPrivacyModal?: boolean
}

export function TelyraApp({ initialLang = 'tr', initialPrivacyModal = false }: TelyraAppProps) {
  const [lang, setLang] = useState<Language>(initialLang)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(initialPrivacyModal)
  const downloaderCode = '258963'

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'))
  }

  return (
    <div className="telyra-page">
      {/* Ambient Glows */}
      <div className="telyra-aura telyra-aura-1" />
      <div className="telyra-aura telyra-aura-2" />
      <div className="telyra-aura telyra-aura-3" />

      {/* Navigation */}
      <TelyraNavbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection lang={lang} downloaderCode={downloaderCode} />

        {/* 16:9 OLED TV & Live Simulated HUD */}
        <TvMockupShowcase lang={lang} />

        {/* 6 Engineering Pillars */}
        <FeatureGrid lang={lang} />

        {/* 12-Metric Comparison Table */}
        <ComparisonMatrix lang={lang} />

        {/* Downloader Guide & Direct APK Downloads */}
        <DownloadSection lang={lang} downloaderCode={downloaderCode} />

        {/* Privacy & Legal Summary */}
        <PrivacySection
          lang={lang}
          showModalInitially={privacyModalOpen}
        />
      </main>

      {/* Footer */}
      <TelyraFooter
        lang={lang}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />
    </div>
  )
}

export default TelyraApp
