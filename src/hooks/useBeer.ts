import { useEffect, useState } from 'react'
import {
  getSavedBeer,
  getSavedBeerList,
  saveBeerList,
  toggleSavedListItem,
} from '../api/localStorageApi/beerLocalStorage'
import { fetchBeerData } from '../views/Beer/utils'
import { Beer } from '../types/beer'

interface UseBeerHook {
  beer: Beer | undefined
  savedList: Beer[]
  handleToggleFavorite: (id: string) => void
}

export const useBeer = (id: string): UseBeerHook => {
  const [beer, setBeer] = useState<Beer>()
  const [savedList, setSavedList] = useState<Beer[]>([])

  useEffect(() => {
    setSavedList(getSavedBeerList())
  }, [])

  useEffect(() => {
    if (navigator.onLine) {
      fetchBeerData(setBeer, id)
    } else {
      setBeer(getSavedBeer(id))
    }
  }, [id])

  const handleToggleFavorite = (id: string) => {
    const updatedSavedList = toggleSavedListItem(id, savedList, [beer as Beer])
    saveBeerList(updatedSavedList)
    setSavedList(updatedSavedList)
  }

  return { beer, savedList, handleToggleFavorite }
}
