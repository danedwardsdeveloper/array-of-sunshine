import { ArticleLayout } from '@/components/ArticleLayout'

import { article } from './data'
import RegexTester from './RegexTester'

export default function RegexPracticePage() {
  return (
    <ArticleLayout article={article}>
      <RegexTester />
    </ArticleLayout>
  )
}
