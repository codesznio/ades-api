export const WebsocketName = {
    GAME: 'GAME',
} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
