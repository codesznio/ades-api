import { IsNotEmpty, IsString } from 'class-validator'

export class CreatePlayerParams {
    @IsString()
    @IsNotEmpty()
    user: string
}
