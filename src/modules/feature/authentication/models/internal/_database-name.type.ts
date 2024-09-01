export const DatabaseName = {
    AUTHENTICATION: 'AUTHENTICATION',
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
