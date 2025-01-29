import { generateArticleMetadata } from '@/library/articleMetadata'

import { ArticleLayout } from '../_components/ArticleLayout'
import { AdditionalImage } from '@/app/articles/_components/Images'

import { article } from './data'

import additionalImage from './images/temporary-photo.png'

export const metadata = generateArticleMetadata(article)

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
      <AdditionalImage image={additionalImage} alt="" />
    </ArticleLayout>
  )
}
