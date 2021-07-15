import { ReactElement, useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

import { firstLetterUpperCase } from '@shared/helpers/strings'

import { IGetPokemonList, IResult } from '@shared/definitions/PokeAPI'

import { Pagination } from '../Pagination'

import css from './List.module.sass'

interface IListProps {
  data?: IGetPokemonList
}

export const List: React.FC<IListProps> = ({
  data
}: IListProps): ReactElement => {
  const [localData, setLocalData] = useState<IGetPokemonList | undefined>()
  const [count, setCount] = useState<number>(0)
  const [results, setResults] = useState<IResult[]>([])
  const [page, setPage] = useState<number>(1)
  const [search, setSearch] = useState<string>('')

  const onPageChange = (page: number): void => {
    setPage(page)
  }

  const filterPokemon = (search: string): IResult[] => {
    if (search.length > 0 && localData) {
      const filteredList = localData.results.filter((item, index) => {
        return item.name.toLowerCase().includes(search.toLowerCase())
      })
      return filteredList
    }
    return []
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const debounceSearch = debounce(() => {
      setSearch(e.target.value)
      setPage(1)
    }, 1000)
    debounceSearch()
  }

  useEffect(() => {
    var offset = (page - 1) * 10

    if (localData) {
      const filtered = filterPokemon(search)

      setResults(
        filtered.length === 0
          ? localData.results.slice(offset, page * 10)
          : filtered.slice(offset, page * 10))
      setCount(filtered.length === 0 ? localData.results.length : filtered.length)
    }
  }, [page, search, localData])

  useEffect(() => {
    if (data) {
      setLocalData(data)
    }
  }, [data])

  const extractPokemonNumberFromURL = (url: string): string => {
    const regex = /(\/[0-9]+\/)/
    const matches = url.match(regex)
    return matches ? matches[0].replaceAll('/', '') : ''
  }

  return (
    <div className={css.List}>
      <ul className={css.L__Table}>
        {results.map((result, index) => (
          <li
            key={index} className={css.T__Row}
            onClick={() => {
              const pokemonNumber = extractPokemonNumberFromURL(result.url)
              console.log(pokemonNumber)
            }}
          >
            <span className={css.R__Id}>#{extractPokemonNumberFromURL(result.url)}</span>
            <span className={css.R__Name}>{firstLetterUpperCase(result.name)}</span>
          </li>
        ))}
      </ul>
      <div className={css.P__Search_Pokemon}>
        <input
          type="text"
          placeholder="Find a Pokemon..."
          className={css.SP__Input}
          onChange={handleSearch}
        />
      </div>
      <Pagination totalItems={count} onPageChange={onPageChange} />
    </div>
  )
}
