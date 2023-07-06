type TYPE =
  | 'micro'
  | 'nano'
  | 'regional'
  | 'brewpub'
  | 'large'
  | 'planning'
  | 'bar'
  | 'contract'
  | 'proprietor'
  | 'closed'

type SORT = 'asc' | 'desc'

interface Status {
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
}

export type { TYPE, SORT, Status }
