import { HttpClientProvider } from 'providers/http/http-client'
import { PokeAPIService } from './service'

export const makePokeAPIService = (): PokeAPIService => {
  const request = new HttpClientProvider()
  const pokeAPI = new PokeAPIService(request)

  return pokeAPI
}
