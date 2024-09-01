import { Pagination } from './_pagination.interface'

export interface Response<T> {
    pagination?: Pagination
    data: T
    success: boolean
}
