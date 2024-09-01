export const Error = {} as const

export type Error = (typeof Error)[keyof typeof Error]
