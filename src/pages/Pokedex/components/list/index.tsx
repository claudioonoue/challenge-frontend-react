import { ReactElement, useState, useEffect } from 'react'

import { Pagination } from '@components/Pagination'
import { firstLetterUpperCase } from '@shared/helpers/strings'

import { IGetPokemonList, IResult } from '@shared/definitions/PokeAPI'

import css from './List.module.sass'

interface IListProps {
  data?: IGetPokemonList
}

export const List: React.FC<IListProps> = ({
  data
}: IListProps): ReactElement => {
  const [count, setCount] = useState<number>(0)
  const [results, setResults] = useState<IResult[]>([])
  const [page, setPage] = useState<number>(1)

  const onPageChange = (page: number): void => {
    setPage(page)
  }

  useEffect(() => {
    var offset = (page - 1) * 10
    if (data) {
      setResults(data.results.slice(offset, page * 10))
      setCount(data.count)
    }
  }, [page, data])

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
      <Pagination totalItems={count} onPageChange={onPageChange} />
    </div>
  )
}
