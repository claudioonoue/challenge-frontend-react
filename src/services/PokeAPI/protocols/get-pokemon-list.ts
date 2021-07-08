import { HTTPQueryParams } from '@shared/definitions/http'
import { IGetPokemonList } from '@shared/definitions/PokeAPI'

export interface GetPokemonList {
  getPokemonList: (QueryParams: HTTPQueryParams) => Promise<IGetPokemonList>
}
