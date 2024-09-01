import { JwtPayload } from './_jwt-payload.interface'

export interface RefreshPayload extends JwtPayload {
    refresh: string
}
