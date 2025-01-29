export const tags = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  bookReview: 'Book review',
  history: 'History',
  react: 'React',
  nextJs: 'Next.js',
  tailwind: 'Tailwind',
  codecademy: 'Codecademy',
  philosophy: 'Philosophy',
  vite: 'Vite',
  vsCode: 'VS Code',
  mdx: 'MDX',
  analytics: 'Analytics',
  seo: 'SEO',
  lighthouse: 'Google Lighthouse',
} as const

export type Tag = (typeof tags)[keyof typeof tags]
