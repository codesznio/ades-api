import { IsOptional, IsString } from 'class-validator'

export class FilterDto {
    @IsOptional()
    @IsString()
    filterBy?: string

    @IsOptional()
    @IsString()
    filterValue?: string
}
