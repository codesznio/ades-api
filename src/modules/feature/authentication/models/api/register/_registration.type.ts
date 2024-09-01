export const RegistrationType = {
    EMAIL: 'EMAIL',
} as const

export type RegistrationType = (typeof RegistrationType)[keyof typeof RegistrationType]
