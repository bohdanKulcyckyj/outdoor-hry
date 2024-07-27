import { Pagination } from '@mui/material'
import { TPagination } from '@/types/pagination'
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

type Props = {
  paginationData: TPagination
}

const ItemsPagination = ({ paginationData }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    router.push(`${pathname}?${createQueryString('page', page.toString())}`)
  }

  return (
    <Pagination
      onChange={handlePageChange}
      count={paginationData.lastPage}
      color='primary'
      shape='rounded'
    />
  )
}

export default ItemsPagination
