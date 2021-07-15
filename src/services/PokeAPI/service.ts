import { HttpGetClient } from '@providers/http/protocols'
import { HttpStatusCodes } from '@providers/http/protocols/http-status-codes'
// import { HttpGetClient } from '@providers/http/protocols/http-get-client'
// import { HttpStatusCodes } from '@providers/http/protocols/http-status-codes'
import { HTTPQueryParams } from '@shared/definitions/http'
import { DefaultError } from '@errors/DefaultError'
import { ErrorTypes } from '@errors/ErrorTypes'

import { GetPokemonList, GetPokemon, GetPokemonSpecies } from './protocols'

import { IGetPokemonList, IGetPokemon, IGetPokemonSpecies } from '@shared/definitions/PokeAPI'

export class PokeAPIService implements GetPokemonList, GetPokemon, GetPokemonSpecies {
  constructor(
    private readonly request: HttpGetClient
  ) {}

  public async getPokemonList(QueryParams: HTTPQueryParams): Promise<IGetPokemonList> {
    const response = await this.request.get<IGetPokemonList>({
      url: 'https://pokeapi.co/api/v2/pokemon',
      query: QueryParams
    })

    if (response.statusCode === HttpStatusCodes.ok) return response.body

    throw new DefaultError({
      message: 'Não foi possível obter os dados da API',
      type: ErrorTypes.PokeAPI
    })
  }

  public async getPokemon(id: number): Promise<IGetPokemon> {
    const response = await this.request.get<IGetPokemon>({
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`
    })

    if (response.statusCode === HttpStatusCodes.ok) return response.body

    throw new DefaultError({
      message: 'Não foi possível obter os dados da API',
      type: ErrorTypes.PokeAPI
    })
  }

  public async getPokemonSpecies(id: number): Promise<IGetPokemonSpecies> {
    const response = await this.request.get<IGetPokemonSpecies>({
      url: `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    })

    if (response.statusCode === HttpStatusCodes.ok) return response.body

    throw new DefaultError({
      message: 'Não foi possível obter os dados da API',
      type: ErrorTypes.PokeAPI
    })
  }
}
