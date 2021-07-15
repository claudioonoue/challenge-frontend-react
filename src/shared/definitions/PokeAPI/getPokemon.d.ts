export interface IType {
  name: string
  url: string
}

export interface ITypeSlot {
  slot: number
  type: IType
}

export interface IDreamWorld {
  front_default: string
  front_female?: string
}

export interface IOther {
  dream_world: IDreamWorld
}

export interface ISprites {
  other: IOther
}

export interface ISpecies {
  name: string
  url: string
}

export interface IForm {
  name: string
  url: string
}

export interface IGetPokemon {
  id: number
  name: string
  order: number
  forms: IForm[]
  species: ISpecies
  sprites: ISprites
  types: ITypeSlot[]
}
