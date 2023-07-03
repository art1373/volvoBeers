import { useState } from 'react'

const perPageOptions = ['10', '20', '50', '100', '200']

export const usePagination = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(perPageOptions[0])
  const [totalPages, setTotalPages] = useState(10)
  const handleChangePage = (event: unknown, value: number) => {
    setPage(value)
  }
  return {
    page,
    setPage,
    perPage,
    setPerPage,
    totalPages,
    setTotalPages,
    perPageOptions,
    handleChangePage,
  }
}
