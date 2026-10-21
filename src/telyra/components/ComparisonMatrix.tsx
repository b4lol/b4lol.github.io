import type { Language } from '../data/telyraData'
import { TELYRA_CONTENT, COMPARISON_ROWS } from '../data/telyraData'

interface ComparisonMatrixProps {
  lang: Language
}

export function ComparisonMatrix({ lang }: ComparisonMatrixProps) {
  const content = TELYRA_CONTENT[lang].comparison

  return (
    <section id="comparison" className="telyra-section" aria-labelledby="comparison-heading">
      <div className="telyra-container">
        <div className="telyra-section-header">
          <p className="telyra-section-label">{content.label}</p>
          <h2 id="comparison-heading" className="telyra-section-title">
            {content.title}
          </h2>
          <p className="telyra-section-subtitle">{content.subtitle}</p>
        </div>

        <div className="telyra-table-wrap">
          <table className="telyra-table" aria-label="TELYRA vs Alternatives Comparison">
            <thead>
              <tr>
                <th scope="col">{content.headers.metric}</th>
                <th scope="col">{content.headers.telyra}</th>
                <th scope="col">{content.headers.tivimate}</th>
                <th scope="col">{content.headers.standard}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, index) => (
                <tr key={index}>
                  <td className="telyra-metric-cell">{row.metric}</td>
                  <td>{row.telyra}</td>
                  <td>{row.tivimate}</td>
                  <td>{row.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
