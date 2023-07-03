import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiParams, Beer, TYPE } from '../types'
import {
  getSavedBeerList,
  saveBeerList,
  toggleSavedListItem,
} from '../api/localStorageApi/beerLocalStorage'
import { fetchData } from '../views/BeerList/utils'
import { fetchData as FetchBeerList } from '../views/Home/utils'
import { usePagination } from './usePagination'

const breweryTypes = [
  'ALL',
  'micro',
  'nano',
  'regional',
  'brewpub',
  'large',
  'planning',
  'bar',
  'contract',
  'proprietor',
  'closed',
]

export const useBeerList = () => {
  const navigate = useNavigate()
  const {
    handleChangePage,
    page,
    perPage,
    perPageOptions,
    setPerPage,
    setTotalPages,
    totalPages,
  } = usePagination()
  const [beerList, setBeerList] = useState<Beer[]>([])
  const [savedList, setSavedList] = useState<Beer[]>([])
  const [savedOnly, setSavedOnly] = useState(false)
  const [name, setName] = useState('')
  const [type, setType] = useState(breweryTypes[0])
  const [sortAsc, setSortAsc] = useState(true)

  const handleToggleFavorite = (id: string) => {
    const updatedSavedList = toggleSavedListItem(id, savedList, beerList)
    saveBeerList(updatedSavedList)
    setSavedList(updatedSavedList)
  }
  const onBeerClick = (id: string) => navigate(`/beer/${id}`)

  useEffect(() => {
    const params = {
      per_page: perPage,
      page: page,
      sort: `type,name:${sortAsc ? 'asc' : 'desc'}`,
      by_name: name,
    } as ApiParams
    if (type !== 'ALL') {
      params.by_type = type as TYPE
    }

    fetchData(setBeerList, setTotalPages, params)
  }, [name, type, perPage, sortAsc, page, savedOnly, setTotalPages])

  useEffect(() => {
    setSavedList(getSavedBeerList())
    window.addEventListener('online', setSavedOnly.bind(this, false))
    if (navigator.onLine) {
      window.addEventListener('offline', () => {
        setSavedOnly(true)
        setBeerList(getSavedBeerList())
      })
    } else {
      setSavedOnly(true)
      setBeerList(getSavedBeerList())
    }
  }, [])

  const refreshList = () => FetchBeerList(setBeerList)
  const handleClearFavorites = () => {
    saveBeerList([])
    setSavedList([])
  }
  return {
    handleToggleFavorite,
    handleChangePage,
    handleClearFavorites,
    onBeerClick,
    beerList,
    savedList,
    savedOnly,
    perPage,
    perPageOptions,
    totalPages,
    page,
    setPerPage,
    setSavedList,
    setBeerList,
    refreshList,
    name,
    setName,
    type,
    setType,
    sortAsc,
    setSortAsc,
    breweryTypes,
  }
}
