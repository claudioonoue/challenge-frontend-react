import React, { ReactElement } from 'react'

import { PokemonTypes, SVGPokemonTypes } from '@shared/constants/pokemonTypes'

import css from './PokemonLogoType.module.sass'

interface IPokemonLogoTypeProps {
  type: string
}

interface IPokemonType {
  name: PokemonTypes
  css: string
}

const PokemonTypesClasses: IPokemonType[] = [
  { name: PokemonTypes.Normal, css: css.normal },
  { name: PokemonTypes.Fire, css: css.fire },
  { name: PokemonTypes.Water, css: css.water },
  { name: PokemonTypes.Electric, css: css.electric },
  { name: PokemonTypes.Grass, css: css.grass },
  { name: PokemonTypes.Ice, css: css.ice },
  { name: PokemonTypes.Fighting, css: css.fighting },
  { name: PokemonTypes.Poison, css: css.poison },
  { name: PokemonTypes.Ground, css: css.ground },
  { name: PokemonTypes.Flying, css: css.flying },
  { name: PokemonTypes.Psychic, css: css.psychic },
  { name: PokemonTypes.Bug, css: css.bug },
  { name: PokemonTypes.Rock, css: css.rock },
  { name: PokemonTypes.Ghost, css: css.ghost },
  { name: PokemonTypes.Dragon, css: css.dragon },
  { name: PokemonTypes.Dark, css: css.dark },
  { name: PokemonTypes.Steel, css: css.steel },
  { name: PokemonTypes.Fairy, css: css.fairy }
]

export const PokemonLogoType: React.FC<IPokemonLogoTypeProps> = ({
  type
}: IPokemonLogoTypeProps): ReactElement => {
  const pokemonType = PokemonTypesClasses.find(item => item.name === type)
  const svgPokemonType = SVGPokemonTypes.find(item => item.name === type)

  return (
    <div className={`${css.icon} ${pokemonType ? pokemonType.css : ''}`}>
      <img src={`${svgPokemonType ? svgPokemonType.svg : ''}`} />
    </div>
  )
}
