import { existsSync } from 'node:fs'
import type { Article } from '@/types'
import logger from '../logger'
import { addingSimpleAnalytics } from './articles/addingSimpleAnalytics'
import { cleanCodeRobertCMartin } from './articles/cleanCodeRobertCMartin'
import { codingIn1816AnneLister } from './articles/codingIn1816AnneLister'
import { gettingStartedWithTypeScript } from './articles/gettingStartedWithTypeScript'
import { howToFixNextJsRouteExportTypeErrors } from './articles/howToFixNextJsRouteExportTypeErrors'
import { howToLetLighthouseDownloadYourNextJsRobotsTxtFile } from './articles/howToLetLighthouseDownloadYourNextJsRobotsTxtFile'
import { htmlAndCssByJonDuckettIsItStillRelevant } from './articles/htmlAndCssByJonDuckettIsItStillRelevant'
import { nextJsHowToIgnoreExcludeAFolderWhenRunningNextBuild } from './articles/nextJsHowToIgnoreExcludeAFolderWhenRunningNextBuild'
import { resolvingMdxVsCodeSidebarKeyboardShortcutConflict } from './articles/resolvingMdxVsCodeSidebarKeyboardShortcutConflict'
import { resolvingViteReactMimeTypeErrors } from './articles/resolvingViteReactMimeTypeErrors'
import { stylingCheckboxesInReactAndNextWithTailwind } from './articles/stylingCheckboxesInReactAndNextWithTailwind'
import { theCompleteSoftwareDeveloper } from './articles/theCompleteSoftwareDeveloper'
import { theProblemWithCodecademy } from './articles/theProblemWithCodecademy'
import { whatsTheTypeDrizzleTransaction } from './articles/whatsTheTypeDrizzleTransaction'

const unsortedArticles = [
	codingIn1816AnneLister,
	theCompleteSoftwareDeveloper,
	gettingStartedWithTypeScript,
	howToLetLighthouseDownloadYourNextJsRobotsTxtFile,
	stylingCheckboxesInReactAndNextWithTailwind,
	theProblemWithCodecademy,
	addingSimpleAnalytics,
	cleanCodeRobertCMartin,
	howToFixNextJsRouteExportTypeErrors,
	htmlAndCssByJonDuckettIsItStillRelevant,
	nextJsHowToIgnoreExcludeAFolderWhenRunningNextBuild,
	resolvingMdxVsCodeSidebarKeyboardShortcutConflict,
	resolvingViteReactMimeTypeErrors,
	whatsTheTypeDrizzleTransaction,
]

// Log hidden articles
const filteredArticles = unsortedArticles.filter(
	(article) =>
		!article.hidden && //
		isValidArticle(article),
)

const allArticles = filteredArticles.sort((a, b) => {
	const aTime = a.updatedAt?.getTime() || a.publishedAt.getTime()
	const bTime = b.updatedAt?.getTime() || b.publishedAt.getTime()
	return bTime - aTime
})

const expectedNumberOfArticles = 14
const actualNumberOfArticles = allArticles.length

if (actualNumberOfArticles !== expectedNumberOfArticles) {
	logger.error(`Found ${actualNumberOfArticles} articles but expected ${expectedNumberOfArticles}`)
}

export default allArticles

export function getArticleBySlug(articleSlug: string): Article {
	const foundArticle = allArticles.find((article) => article.slug === articleSlug)
	if (!foundArticle) throw new Error(`Article ${articleSlug} not found`)
	return foundArticle
}

function isValidArticle(article: Article): boolean {
	const imageFileName = `${article.slug}.png`
	const imageFolder = 'public/images/'
	const imagePath = `${imageFolder}${imageFileName}`

	if (!existsSync(imagePath)) {
		logger.error(`${imageFileName} is missing from ${imageFolder}`)
		return false
	}

	const { metaTitle, metaDescription, displayTitle } = article

	if (metaTitle.length > 65) {
		logger.warn(`${displayTitle} metaTitle too long (${metaTitle.length})`)
	}
	if (metaTitle.length < 40) {
		logger.warn(`${displayTitle} metaTitle too short (${metaTitle.length})`)
	}
	if (metaDescription.length > 155) {
		logger.warn(`${displayTitle} metaDescription too long (${metaDescription.length})`)
	}
	if (metaDescription.length < 70) {
		logger.warn(`${displayTitle} metaDescription too short (${metaDescription.length})`)
	}

	/* ToDo: 
    - Check image dimensions
    - Check metadata
    */

	// if (article.featuredImage.src.width === 1200) isValid = false
	// if (article.featuredImage.src.height === 675) isValid = false

	// Log the reason

	return true
}
