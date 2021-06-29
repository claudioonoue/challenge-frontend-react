import { ReactElement, memo } from 'react'

import css from './Button.module.sass'

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

export const Button: React.FC<ButtonProps> = memo(({ children, ...rest }): ReactElement => {
  return (
    <button
      className={css.Button}
      {...rest}
    >
      {children}
    </button>
  )
})
