import { IPokeFavorites } from '@shared/definitions/localStorage/pokeFavorites'
import { POKE_FAVORITES } from '@shared/constants/localStorage'
import { setLocalStorage, getLocalStorage } from '@shared/helpers/localStorage'

export const setPokeFavorites = (pokeFavorites: IPokeFavorites[]): void => {
  setLocalStorage(POKE_FAVORITES, JSON.stringify(pokeFavorites))
}

export const getPokeFavorites = (): IPokeFavorites[] => {
  const pokeFavorites = getLocalStorage(POKE_FAVORITES)
  return pokeFavorites ? JSON.parse(pokeFavorites) : []
}

export const checkPokeFavorites = (): boolean => {
  return !!getLocalStorage(POKE_FAVORITES)
}
