import { useEffect, useState } from 'react'
import {
  getSavedBeer,
  getSavedBeerList,
  saveBeerList,
  toggleSavedListItem,
} from '../api/localStorageApi/beerLocalStorage'
import { useQuery } from '@tanstack/react-query'
import { Beer } from '../types/beer'
import { getBeer } from '../api'
import { Status } from '../types'

interface UseBeerHook {
  beer: Beer | undefined
  savedList: Beer[]
  handleToggleFavorite: (id: string) => void
  status: Status
}

export const useBeer = (id: string): UseBeerHook => {
  const { isSuccess, isError, isLoading, data } = useQuery({
    queryKey: ['getBeer'],
    queryFn: () => getBeer(id),
    enabled: navigator.onLine,
  })

  const [beer, setBeer] = useState<Beer>()
  const [savedList, setSavedList] = useState<Beer[]>([])

  useEffect(() => {
    setSavedList(getSavedBeerList())
  }, [])

  useEffect(() => {
    if (!navigator.onLine) {
      setBeer(getSavedBeer(id))
    }
  }, [id])

  const handleToggleFavorite = (id: string) => {
    const updatedSavedList = toggleSavedListItem(id, savedList, [beer as Beer])
    saveBeerList(updatedSavedList)
    setSavedList(updatedSavedList)
  }

  return {
    status: { isError, isLoading, isSuccess },
    beer: data?.data,
    savedList,
    handleToggleFavorite,
  }
}
