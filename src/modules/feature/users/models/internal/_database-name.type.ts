export const DatabaseName = {
    USERS: 'USERS',
} as const

export type DatabaseName = (typeof DatabaseName)[keyof typeof DatabaseName]
