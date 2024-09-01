export const Initiant = {
    USER: 'USER',
    SYSTEM: 'SYSTEM',
} as const

export type Initiant = (typeof Initiant)[keyof typeof Initiant]
