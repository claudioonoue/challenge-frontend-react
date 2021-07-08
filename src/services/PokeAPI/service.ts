import { HttpStatusCodes, HttpGetClient } from '@providers/http/protocols'
import { HTTPQueryParams } from '@shared/definitions/http'
import { DefaultError } from '@errors/DefaultError'
import { ErrorTypes } from '@errors/ErrorTypes'

import { GetPokemonList } from './protocols'

import { IGetPokemonList } from '@shared/definitions/PokeAPI'

export class PokeAPIService implements GetPokemonList {
  constructor(
    private readonly request: HttpGetClient
  ) {}

  public async getPokemonList(QueryParams: HTTPQueryParams): Promise<IGetPokemonList> {
    const response = await this.request.get<IGetPokemonList>({
      url: 'https://pokeapi.co/api/v2/pokemo',
      query: QueryParams
    })

    if (response.statusCode === HttpStatusCodes.ok) return response.body

    throw new DefaultError({
      message: 'Não foi possível obter os dados da API',
      type: ErrorTypes.PokeAPI
    })
  }
}
