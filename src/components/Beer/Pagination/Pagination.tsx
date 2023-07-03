import { Grid, Pagination as MuiPagination } from '@mui/material'

interface Props {
  handleChangePage: (event: unknown, value: number) => void
  page: number
  totalPages: number
}

export const Pagination = ({ totalPages, page, handleChangePage }: Props) => {
  if (!totalPages || !page) return null
  return (
    <Grid item xs={12} alignItems="center" justifyContent="space-around">
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={handleChangePage}
      />
    </Grid>
  )
}
