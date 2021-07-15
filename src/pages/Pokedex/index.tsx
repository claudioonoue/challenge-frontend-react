import { ReactElement, useState, useEffect } from 'react'

import { List, Show } from './components'

import { setLocalStorage, getLocalStorage } from '@shared/helpers/localStorage'

import { IGetPokemonList } from '@shared/definitions/PokeAPI'
import { makePokeAPIService } from '@services/PokeAPI'

import css from './Pokedex.module.sass'

const PokeAPIService = makePokeAPIService()

const POKEMON_LOCAL_STORAGE_KEY = 'pokemon_data'

export const Pokedex: React.FC = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(true)

  const setPokemonLocalStorage = (data: IGetPokemonList): void => {
    setLocalStorage(POKEMON_LOCAL_STORAGE_KEY, JSON.stringify(data))
  }

  const getPokemonLocalStorage = (): IGetPokemonList | undefined => {
    var JSONString = getLocalStorage(POKEMON_LOCAL_STORAGE_KEY)
    if (!JSONString) {
      return undefined
    }
    var data: IGetPokemonList = JSON.parse(JSONString)
    return data
  }

  useEffect(() => {
    const data = getPokemonLocalStorage()
    if (!data) {
      PokeAPIService.getPokemonList({
        limit: 150,
        offset: 0
      })
        .then((r) => {
          setPokemonLocalStorage(r)
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [loading])

  return (
    <div className={css.Pokedex}>
      <div className={css.P__Search}>
        <div className={css.S__Text}>
          Find all the most different pocket monsters <br />in the Pokemon world!
        </div>
      </div>

      <div className={css.P__Body}>
        <div className={css.B__Pokelist}>
          <List data={getPokemonLocalStorage()} />
        </div>
        <div className={css.B__Pokedetails}>
          <Show />
        </div>
      </div>
    </div>
  )
}
