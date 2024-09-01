export const Error = {
    SERVER_ERROR: 'SERVER_ERROR',
} as const

export type Error = (typeof Error)[keyof typeof Error]
