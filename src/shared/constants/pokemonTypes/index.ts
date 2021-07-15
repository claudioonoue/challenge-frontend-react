import Normal from '@assets/pokemonTypes/normal.svg'
import Fire from '@assets/pokemonTypes/fire.svg'
import Water from '@assets/pokemonTypes/water.svg'
import Electric from '@assets/pokemonTypes/electric.svg'
import Grass from '@assets/pokemonTypes/grass.svg'
import Ice from '@assets/pokemonTypes/ice.svg'
import Poison from '@assets/pokemonTypes/poison.svg'
import Ground from '@assets/pokemonTypes/ground.svg'
import Flying from '@assets/pokemonTypes/flying.svg'
import Psychic from '@assets/pokemonTypes/psychic.svg'
import Bug from '@assets/pokemonTypes/bug.svg'
import Rock from '@assets/pokemonTypes/rock.svg'
import Ghost from '@assets/pokemonTypes/ghost.svg'
import Dragon from '@assets/pokemonTypes/dragon.svg'
import Dark from '@assets/pokemonTypes/dark.svg'
import Steel from '@assets/pokemonTypes/steel.svg'
import Fairy from '@assets/pokemonTypes/fairy.svg'
import Fighting from '@assets/pokemonTypes/fighting.svg'

export enum PokemonTypes {
  Normal = 'normal',
  Fire = 'fire',
  Water = 'water',
  Electric = 'electric',
  Grass = 'grass',
  Ice = 'ice',
  Poison = 'poison',
  Ground = 'ground',
  Flying = 'flying',
  Psychic = 'psychic',
  Bug = 'bug',
  Rock = 'rock',
  Ghost = 'ghost',
  Dragon = 'dragon',
  Dark = 'dark',
  Steel = 'steel',
  Fairy = 'fairy',
  Fighting = 'fighting',
}

interface ISVGPokemonTypes {
  name: PokemonTypes
  svg: string
}

export const SVGPokemonTypes: ISVGPokemonTypes[] = [
  { name: PokemonTypes.Normal, svg: Normal },
  { name: PokemonTypes.Fire, svg: Fire },
  { name: PokemonTypes.Water, svg: Water },
  { name: PokemonTypes.Electric, svg: Electric },
  { name: PokemonTypes.Grass, svg: Grass },
  { name: PokemonTypes.Ice, svg: Ice },
  { name: PokemonTypes.Poison, svg: Poison },
  { name: PokemonTypes.Ground, svg: Ground },
  { name: PokemonTypes.Flying, svg: Flying },
  { name: PokemonTypes.Psychic, svg: Psychic },
  { name: PokemonTypes.Bug, svg: Bug },
  { name: PokemonTypes.Rock, svg: Rock },
  { name: PokemonTypes.Ghost, svg: Ghost },
  { name: PokemonTypes.Dragon, svg: Dragon },
  { name: PokemonTypes.Dark, svg: Dark },
  { name: PokemonTypes.Steel, svg: Steel },
  { name: PokemonTypes.Fairy, svg: Fairy },
  { name: PokemonTypes.Fighting, svg: Fighting }
]
