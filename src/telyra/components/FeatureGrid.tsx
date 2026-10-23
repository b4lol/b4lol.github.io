import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { RenderSemanticIcon } from './TelyraIcons'

interface FeatureGridProps {
  lang: Language
}

export function FeatureGrid({ lang }: FeatureGridProps) {
  const content = TELYRA_CONTENT[lang].features

  return (
    <section id="features" className="telyra-section" aria-labelledby="features-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="features-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-features-grid">
          {content.items.map((item) => (
            <article key={item.id} className="telyra-feature-card">
              <div className="telyra-feature-top">
                <span className="telyra-feature-icon" aria-hidden="true">
                  {RenderSemanticIcon(item.icon, "w-6 h-6 text-cyan-400")}
                </span>
                {item.badge && <span className="telyra-feature-badge">{item.badge}</span>}
              </div>

              <span className="telyra-feature-tag">{item.tag}</span>
              <h3 className="telyra-feature-title">{item.title}</h3>
              <p className="telyra-feature-desc">{item.description}</p>

              <ul className="telyra-feature-list">
                {item.details.map((d, index) => (
                  <li key={index}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
