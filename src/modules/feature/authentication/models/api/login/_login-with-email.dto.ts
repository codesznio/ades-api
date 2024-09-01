import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class LoginWithEmailParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 24)
    password: string
}
