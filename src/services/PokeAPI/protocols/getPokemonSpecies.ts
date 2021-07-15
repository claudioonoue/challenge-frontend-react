import { IGetPokemonSpecies } from '@shared/definitions/PokeAPI'

export interface GetPokemonSpecies {
  getPokemonSpecies: (id: number) => Promise<IGetPokemonSpecies>
}
