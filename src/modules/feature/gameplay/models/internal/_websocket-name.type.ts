export const WebsocketName = {
    GAMES: 'GAMES',
} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
