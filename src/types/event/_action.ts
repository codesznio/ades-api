export const Action = {} as const

export type Action = (typeof Action)[keyof typeof Action]
