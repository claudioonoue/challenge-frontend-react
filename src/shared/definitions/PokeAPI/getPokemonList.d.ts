export interface IResult {
  name: string
  url: string
}

export interface IGetPokemonList {
  count: number
  next: string
  previous?: string
  results: IResult[]
}
