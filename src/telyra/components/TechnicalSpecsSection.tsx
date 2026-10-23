import { useState } from 'react'
import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { ShieldIcon } from './TelyraIcons'

export interface TechnicalSpecsSectionProps {
  lang: Language
}

type SpecCategory = 'all' | 'chipsets' | 'video' | 'audio'

export function TechnicalSpecsSection({ lang }: TechnicalSpecsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<SpecCategory>('all')
  const specs = TELYRA_CONTENT[lang].specs
  const isTr = lang === 'tr'

  return (
    <section id="comparison" className="telyra-section" aria-labelledby="specs-heading">
      <span id="specs" className="sr-only" aria-hidden="true" />
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{specs.label}</p>
          <h2 id="specs-heading" className="telyra-section-title">
            {specs.title}
          </h2>
          <p className="telyra-section-subtitle">{specs.subtitle}</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="telyra-spec-filter-bar" role="tablist" aria-label="Format Matrix Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`telyra-spec-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          >
            {isTr ? 'Tüm Matris' : 'All Matrices'}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'chipsets'}
            onClick={() => setActiveCategory('chipsets')}
            className={`telyra-spec-tab-btn ${activeCategory === 'chipsets' ? 'active' : ''}`}
          >
            {isTr ? 'Çipset Mimarisi' : 'Chipset Architecture'}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'video'}
            onClick={() => setActiveCategory('video')}
            className={`telyra-spec-tab-btn ${activeCategory === 'video' ? 'active' : ''}`}
          >
            {isTr ? 'Video Kodekleri' : 'Video Codecs'}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'audio'}
            onClick={() => setActiveCategory('audio')}
            className={`telyra-spec-tab-btn ${activeCategory === 'audio' ? 'active' : ''}`}
          >
            {isTr ? 'Ses & Passthrough' : 'Audio & Passthrough'}
          </button>
        </div>

        {/* 1. Chipsets Matrix */}
        {(activeCategory === 'all' || activeCategory === 'chipsets') && (
          <div className="telyra-spec-category-block">
            <div className="telyra-spec-category-header">
              <div>
                <h3 className="telyra-spec-category-title">{specs.chipsets.title}</h3>
                <p className="telyra-spec-category-desc">{specs.chipsets.description}</p>
              </div>
              <span className="telyra-spec-category-badge">
                {isTr ? '5 Donanım Mimarisi Doğrulandı' : '5 Silicon Architectures Verified'}
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="telyra-spec-desktop-view">
              <div className="telyra-table-wrap">
                <table className="telyra-spec-table" aria-label={specs.chipsets.title}>
                  <thead>
                    <tr>
                      <th scope="col">{isTr ? 'Çipset / İşlemci' : 'Chipset Architecture'}</th>
                      <th scope="col">{isTr ? 'Hedef Platform' : 'Target Hardware'}</th>
                      <th scope="col">{isTr ? 'Donanım Çözücü Motoru' : 'Decoder Pipeline'}</th>
                      <th scope="col">{isTr ? 'Doğrulanan Standartlar' : 'Verified Capabilities'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.chipsets.rows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="telyra-spec-col-primary">{row.name}</td>
                        <td>{row.target}</td>
                        <td className="telyra-spec-col-mono">{row.decoder}</td>
                        <td>{row.capabilities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards View (Zero horizontal scroll) */}
            <div className="telyra-spec-mobile-view">
              <div className="telyra-spec-mobile-cards" aria-label={specs.chipsets.title}>
                {specs.chipsets.rows.map((row, idx) => (
                  <article key={idx} className="telyra-spec-mobile-card">
                    <div className="telyra-spec-mobile-card__header">
                      <h4 className="telyra-spec-mobile-card__title">{row.name}</h4>
                      <span className="telyra-spec-mobile-card__badge">
                        {isTr ? 'Doğrulandı' : 'Verified'}
                      </span>
                    </div>
                    <div className="telyra-spec-mobile-card__fields">
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Hedef Platform' : 'Target Hardware'}
                        </span>
                        <span className="telyra-spec-mobile-field__val">{row.target}</span>
                      </div>
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Donanım Çözücü' : 'Decoder Pipeline'}
                        </span>
                        <span className="telyra-spec-mobile-field__val telyra-spec-mobile-field__val--mono">
                          {row.decoder}
                        </span>
                      </div>
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Yetenekler & Standartlar' : 'Capabilities & Standards'}
                        </span>
                        <span className="telyra-spec-mobile-field__val">{row.capabilities}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. Video Codecs Matrix */}
        {(activeCategory === 'all' || activeCategory === 'video') && (
          <div className="telyra-spec-category-block">
            <div className="telyra-spec-category-header">
              <div>
                <h3 className="telyra-spec-category-title">{specs.videoCodecs.title}</h3>
                <p className="telyra-spec-category-desc">{specs.videoCodecs.description}</p>
              </div>
              <span className="telyra-spec-category-badge">
                {isTr ? 'Donanım VPU Hızlandırmalı' : 'Hardware VPU Accelerated'}
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="telyra-spec-desktop-view">
              <div className="telyra-table-wrap">
                <table className="telyra-spec-table" aria-label={specs.videoCodecs.title}>
                  <thead>
                    <tr>
                      <th scope="col">{isTr ? 'Video Formatı' : 'Video Format'}</th>
                      <th scope="col">{isTr ? 'Profil / Seviye' : 'Certified Profile'}</th>
                      <th scope="col">{isTr ? 'Çözümleme Pipeline' : 'Decoding Pipeline'}</th>
                      <th scope="col">{isTr ? 'Standartlar & Akışlar' : 'Capabilities & Streams'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.videoCodecs.rows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="telyra-spec-col-primary">{row.format}</td>
                        <td className="telyra-spec-col-mono">{row.profile}</td>
                        <td>{row.decoding}</td>
                        <td>{row.capabilities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards View (Zero horizontal scroll) */}
            <div className="telyra-spec-mobile-view">
              <div className="telyra-spec-mobile-cards" aria-label={specs.videoCodecs.title}>
                {specs.videoCodecs.rows.map((row, idx) => (
                  <article key={idx} className="telyra-spec-mobile-card">
                    <div className="telyra-spec-mobile-card__header">
                      <h4 className="telyra-spec-mobile-card__title">{row.format}</h4>
                      <span className="telyra-spec-mobile-card__badge">
                        {row.decoding}
                      </span>
                    </div>
                    <div className="telyra-spec-mobile-card__fields">
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Profil / Seviye' : 'Certified Profile'}
                        </span>
                        <span className="telyra-spec-mobile-field__val telyra-spec-mobile-field__val--mono">
                          {row.profile}
                        </span>
                      </div>
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Yetenekler & Akışlar' : 'Capabilities & Streams'}
                        </span>
                        <span className="telyra-spec-mobile-field__val">{row.capabilities}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. Audio Codecs & Passthrough Matrix */}
        {(activeCategory === 'all' || activeCategory === 'audio') && (
          <div className="telyra-spec-category-block">
            <div className="telyra-spec-category-header">
              <div>
                <h3 className="telyra-spec-category-title">{specs.audioCodecs.title}</h3>
                <p className="telyra-spec-category-desc">{specs.audioCodecs.description}</p>
              </div>
              <span className="telyra-spec-category-badge">
                {isTr ? 'Kayıpsız Bitstream Geçişi' : 'Lossless Bitstream Passthrough'}
              </span>
            </div>

            {/* Desktop Table View */}
            <div className="telyra-spec-desktop-view">
              <div className="telyra-table-wrap">
                <table className="telyra-spec-table" aria-label={specs.audioCodecs.title}>
                  <thead>
                    <tr>
                      <th scope="col">{isTr ? 'Ses Formatı' : 'Audio Format'}</th>
                      <th scope="col">{isTr ? 'Aktarım Modu' : 'Passthrough Mode'}</th>
                      <th scope="col">{isTr ? 'Kanal Mimarisi' : 'Channel Layout'}</th>
                      <th scope="col">{isTr ? 'Standartlar & Metaveri' : 'Standards & Metadata'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specs.audioCodecs.rows.map((row, idx) => (
                      <tr key={idx}>
                        <td className="telyra-spec-col-primary">{row.format}</td>
                        <td className="telyra-spec-col-mono">{row.passthrough}</td>
                        <td>{row.channels}</td>
                        <td>{row.standards}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards View (Zero horizontal scroll) */}
            <div className="telyra-spec-mobile-view">
              <div className="telyra-spec-mobile-cards" aria-label={specs.audioCodecs.title}>
                {specs.audioCodecs.rows.map((row, idx) => (
                  <article key={idx} className="telyra-spec-mobile-card">
                    <div className="telyra-spec-mobile-card__header">
                      <h4 className="telyra-spec-mobile-card__title">{row.format}</h4>
                      <span className="telyra-spec-mobile-card__badge">
                        {row.channels}
                      </span>
                    </div>
                    <div className="telyra-spec-mobile-card__fields">
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Aktarım Modu' : 'Passthrough Mode'}
                        </span>
                        <span className="telyra-spec-mobile-field__val telyra-spec-mobile-field__val--mono">
                          {row.passthrough}
                        </span>
                      </div>
                      <div className="telyra-spec-mobile-field">
                        <span className="telyra-spec-mobile-field__label">
                          {isTr ? 'Standartlar & Metaveri' : 'Standards & Metadata'}
                        </span>
                        <span className="telyra-spec-mobile-field__val">{row.standards}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Laboratory Verification Footnote */}
        <div className="telyra-spec-footnote">
          <span className="telyra-spec-footnote__icon" aria-hidden="true">
            <ShieldIcon width={20} height={20} />
          </span>
          <p className="telyra-spec-footnote__text">
            {isTr
              ? 'Tüm çipset ve format uyumluluk testleri, TELYRA v1.1.0 sürümü ile fiziksel Android TV ve Google TV cihazlarında doğrudan Media3 ExoPlayer ve LibVLC donanım arayüzleri üzerinden doğrulanmıştır.'
              : 'All chipset and format compatibility benchmarks are verified on physical Android TV and Google TV hardware running TELYRA v1.1.0 directly via Media3 ExoPlayer and LibVLC hardware pipelines.'}
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalSpecsSection
