import { FC, ReactElement } from 'react'

import logo from 'assets/logo.png'
import teamIcon from 'assets/team-icon.png'
import pokedexIcon from 'assets/pokedex-icon.png'

import css from './PageLayout.module.sass'

export const PageLayout: FC = ({ children }): ReactElement => {
  return (
    <>
      <header className={css.Header} >
        <a className={css.H__Link} href='/' title='Logo'>
          <img className={css.H__Logo} src={logo} alt='Logo`' />
        </a>

        <div className={css.H__Buttons}>
          <button className={css.H__Button}>Team <img src={teamIcon} className={css.B__Icon} /></button>
          <button className={css.H__Button}>Pokedex <img src={pokedexIcon} className={css.B__Icon} /></button>
        </div>
      </header>

      <div className={css.Children}>
        {children}
      </div>
    </>
  )
}
