export const SchemaName = {
    USER: 'USER',
} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
