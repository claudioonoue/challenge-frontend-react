import { ReactElement, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { makePokeAPIService } from '@services/PokeAPI'

import css from './Pokedex.module.sass'

const PokeAPIService = makePokeAPIService()

export const Pokedex: React.FC = (): ReactElement => {
  useEffect(() => {
    PokeAPIService.getPokemonList({
      limit: 10,
      offset: 0
    })
      .then((r) => {
        console.log(r)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className={css.Pokedex}>
      <div className={css.P__Search}>
        <div className={css.S__Text}>
          Find all the most different pocket monsters <br />in the Pokemon world!
        </div>
        {/* <div className={css.S__Search}>
          <input type="text" placeholder="Find a Pokemon BY ID..." className={css.S__Input} />
          <button className={css.S__Btn_Search}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div> */}
      </div>

      <div className={css.P__Body}>
        <div className={css.B__Pokelist}>

        </div>
        <div className={css.B__Pokedetails}>

        </div>
      </div>
    </div>
  )
}
