import { IGetPokemon } from '@shared/definitions/PokeAPI'

export interface GetPokemon {
  getPokemon: (id: number) => Promise<IGetPokemon>
}
