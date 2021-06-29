import { ReactElement } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '@components/Button'

import css from './NotFound.module.sass'

export const NotFound: React.FC = (): ReactElement => {
  const history = useHistory()

  return (
    <div className={css.Page}>
      <div className={css.EmojiWraper}>
        <i className={css.Emoji}>:(</i>
      </div>
      <div className={css.TextWraper}>
        <h1 className={css.P__Title}>Oops</h1>
        <h2 className={css.P__Status}>404 - Página não encontrada</h2>
        <div className={css.ButtonWrapper}>
          <Button
            onClick={() => history.push('/')}
            style={{ padding: '20px 15px', width: '100%', background: '#202020' }}
          >
              Voltar para Home
          </Button>
        </div>
      </div>
    </div>
  )
}
