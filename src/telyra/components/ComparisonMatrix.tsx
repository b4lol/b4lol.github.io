import type { Language } from '../data/telyraData'
import { TechnicalSpecsSection } from './TechnicalSpecsSection'

export interface ComparisonMatrixProps {
  lang: Language
}

export function ComparisonMatrix(props: ComparisonMatrixProps) {
  return <TechnicalSpecsSection {...props} />
}

export { TechnicalSpecsSection }
export default ComparisonMatrix
