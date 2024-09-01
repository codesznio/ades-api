export const WebsocketName = {} as const

export type WebsocketName = (typeof WebsocketName)[keyof typeof WebsocketName]
