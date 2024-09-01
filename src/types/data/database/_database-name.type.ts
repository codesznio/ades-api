export const DatabaseName = {} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
