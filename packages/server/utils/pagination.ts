import { InternalException } from "../exceptions/internalExceptions"
import { ErrorCode } from "../exceptions/root"
import { TPaginationOutput, TPaginable } from "../types/pagination"

export const paginateData = (data: TPaginable[], currPage: number, perPage: number): TPaginationOutput => {
    if(currPage <= 0) throw new InternalException("Current page cannot be 0 or less!", ErrorCode.INTERNAL_EXCEPTION, null)

    const recordsCount = data.length
    const lastPage = recordsCount > 0 ? Math.ceil(recordsCount / perPage) : 1
    const pageData: TPaginable[] = []

    if(currPage > lastPage) throw new InternalException("Current page is greater then last page!", ErrorCode.INTERNAL_EXCEPTION, null)

    if(recordsCount > 0) {
        let index = perPage * (currPage - 1)
        let itemsTaken = 0
        for(index; index < recordsCount; index++) {
            if(itemsTaken >= perPage) break
            pageData.push(data[index])
            itemsTaken++
        }
    }

    return {
        firstPage: 1,
        lastPage: lastPage,
        nextPage: currPage < lastPage ? currPage + 1 : lastPage,
        prevPage: currPage > 1 ? currPage - 1 : 1,
        currentPage: currPage,
        perPage: perPage,
        data: pageData
    }
}