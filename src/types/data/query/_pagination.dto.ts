import { IsInt, IsOptional, IsString, Min } from 'class-validator'
import { Type } from 'class-transformer'

export class PaginationDto {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit?: number = 50

    @IsOptional()
    @IsString()
    sortBy?: string

    @IsOptional()
    @IsString()
    sortOrder?: 'asc' | 'desc' = 'asc'

    @IsOptional()
    @IsString()
    filterBy?: string

    @IsOptional()
    @IsString()
    filterValue?: string
}
