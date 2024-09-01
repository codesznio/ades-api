export const SchemaName = {} as const

export type SchemaName = (typeof SchemaName)[keyof typeof SchemaName]
