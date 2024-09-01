export const DatabaseName = {
    GAMEPLAY: 'GAMEPLAY',
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
