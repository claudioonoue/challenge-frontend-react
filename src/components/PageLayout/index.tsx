import { FC, ReactElement } from 'react'

import logo from 'assets/logo.png'

import css from './PageLayout.module.sass'

export const PageLayout: FC = ({ children }): ReactElement => {
  return (
    <>
      <header className={css.Header} >
        <a className={css.H__Link} href='/' title='Logo'>
          <img className={css.H__Logo} src={logo} alt='Logo`' />
        </a>

        <div className={css.H__Buttons}>
          <button className={css.H__Button}>Team</button>
          <button className={css.H__Button}>Pokedex</button>
        </div>
      </header>

      {children}
    </>
  )
}
