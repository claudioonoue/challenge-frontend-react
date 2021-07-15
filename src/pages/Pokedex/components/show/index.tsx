import { ReactElement, useState, useEffect } from 'react'

import { firstLetterUpperCase } from '@shared/helpers/strings'

import { IGetPokemon, IGetPokemonSpecies } from '@shared/definitions/PokeAPI'
import { makePokeAPIService } from '@services/PokeAPI'

import { PokemonLogoType } from './components'

import DefaultImg from '@assets/interrogation.png'

import css from './Show.module.sass'

const PokeAPIService = makePokeAPIService()

export const Show: React.FC = (): ReactElement => {
  const [pokemon, setPokemon] = useState<IGetPokemon | undefined>()
  const [species, setSpecies] = useState<IGetPokemonSpecies | undefined>()

  useEffect(() => {
    if (pokemon) {
      PokeAPIService.getPokemonSpecies(pokemon.id)
        .then((r) => {
          setSpecies(r)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [pokemon])

  useEffect(() => {
    PokeAPIService.getPokemon(1)
      .then((r) => {
        setPokemon(r)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={css.Show}>
      <div className={css.S__Pokemon_resume}>
        <div className={css.PR__PokemonImg}>
          <img
            src={
              pokemon
                ? (
                  pokemon.sprites.other.dream_world.front_default
                    ? pokemon.sprites.other.dream_world.front_default
                    : DefaultImg
                )
                : DefaultImg}
            alt="Pokemon Picture"
            className={css.PI__Img}
          />
        </div>
        <div className={css.PR__PokemonName}>
          #{ pokemon ? pokemon.id : '???' } {pokemon ? firstLetterUpperCase(pokemon.name) : '???'}
        </div>
        <div className={css.PR__PokemonTypes}>
          {
            pokemon?.types.map((type) => {
              return (
                <PokemonLogoType type={type.type.name} />
              )
            })
          }
        </div>
      </div>
      <div className={css.S__Pokemon_details}>
        <div className={css.PD__Pokemon_Description}>
          {species ? species.flavor_text_entries[0].flavor_text : ''}
        </div>
        <div className={css.PD__Pokemon_Favorite}>
          <div className={css.PF__Button}>
          </div>
        </div>
      </div>
    </div>
  )
}
