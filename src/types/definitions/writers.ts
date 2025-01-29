export const writers = {
  danEdwards: 'Dan Edwards',
} as const

export type Writer = (typeof writers)[keyof typeof writers]
