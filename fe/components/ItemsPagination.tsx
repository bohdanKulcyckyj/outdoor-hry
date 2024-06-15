import { Pagination } from '@mui/material'
import { TPagination } from '@/types/pagination'
import React from 'react'

type Props = {
  paginationData: TPagination
}

const ItemsPagination = ({ paginationData }: Props) => {
  return (
    <Pagination
      count={paginationData.lastPage}
      color='primary'
      shape='rounded'
    />
  )
}

export default Pagination
