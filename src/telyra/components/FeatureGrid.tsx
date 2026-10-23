import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT } from '../data/telyraData'
import { RenderSemanticIcon } from './TelyraIcons'

export interface FeatureGridProps {
  lang: Language
}

export function FeatureGrid({ lang }: FeatureGridProps) {
  const content = TELYRA_CONTENT[lang].pillars

  return (
    <section id="features" className="telyra-section" aria-labelledby="pillars-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="pillars-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-pillars-grid">
          {content.items.map((item) => (
            <article key={item.id} className="telyra-pillar-card">
              <div className="telyra-pillar-top">
                <span className="telyra-pillar-icon" aria-hidden="true">
                  {RenderSemanticIcon(item.icon, "w-6 h-6 text-cyan-400")}
                </span>
                <div className="telyra-pillar-meta">
                  {item.metric && (
                    <span className="telyra-pillar-metric">
                      {item.metric}
                    </span>
                  )}
                  {item.badge && (
                    <span className="telyra-pillar-badge">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>

              <span className="telyra-pillar-tag">{item.tag}</span>
              <h3 className="telyra-pillar-title">{item.title}</h3>
              <p className="telyra-pillar-desc">{item.description}</p>

              <ul className="telyra-pillar-list">
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
