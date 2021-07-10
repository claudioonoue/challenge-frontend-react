import { useEffect, useState, ReactElement } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import css from './Pagination.module.sass'

interface IPaginationProps {
  totalItems: number
  itemsPerPage?: number
  maxButtonsAround?: number
  onPageChange?: (page: number) => void
}

export const Pagination: React.FC<IPaginationProps> = ({
  totalItems,
  itemsPerPage = 10,
  maxButtonsAround = 3,
  onPageChange
}: IPaginationProps): ReactElement => {
  const [activePage, setActivePage] = useState<number>(1)
  const [paginationButtons, setPaginationButtons] = useState<ReactElement[]>([])

  const prevPage = (): void => {
    if (activePage > 1) {
      setActivePage(activePage - 1)
      if (onPageChange) {
        onPageChange(activePage - 1)
      }
    }
  }

  const nextPage = (): void => {
    if (activePage < Math.ceil(totalItems / itemsPerPage)) {
      setActivePage(activePage + 1)
      if (onPageChange) {
        onPageChange(activePage + 1)
      }
    }
  }

  const onClickPageButton = (page: number): void => {
    setActivePage(page)
    if (onPageChange) {
      onPageChange(page)
    }
  }

  const generatePageButtons = (pages: number): ReactElement[] => {
    var buttons: ReactElement[] = []
    var startPage = activePage > maxButtonsAround ? activePage - maxButtonsAround : 1
    var totalButtons = startPage === 1 ? startPage + (maxButtonsAround * 2) : activePage + maxButtonsAround
    for (let index = startPage; index <= totalButtons; index++) {
      buttons.push(
        <button
          className={`${css.P__Page_Buttons} ${index === activePage ? css.P__Page_Buttons_Active : ''}`}
          onClick={() => onClickPageButton(index)}
        >
          {index}
        </button>
      )
    }
    return buttons
  }

  useEffect(() => {
    if (totalItems > 0) {
      setPaginationButtons(generatePageButtons(Math.ceil(totalItems / itemsPerPage)))
    }
  }, [totalItems, activePage])

  return (
    <div className={css.Pagination}>
      <button
        className={css.P__Prev_Button}
        onClick={prevPage}
      >
        <FontAwesomeIcon icon={faArrowLeft} size='lg' />
      </button>

      {
        paginationButtons.map((button) => button)
      }

      <button
        className={css.P__Next_Button}
        onClick={nextPage}
      >
        <FontAwesomeIcon icon={faArrowRight} size='lg' />
      </button>
    </div>
  )
}
