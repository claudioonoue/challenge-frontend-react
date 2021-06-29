import { FC, ReactElement } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CustomRoute as Route } from '@router/helpers'
import { Routes } from '@router/routes'

export const Router: FC = (): ReactElement => {
  const RouteComponents = Routes.map(({ ...rest }, key) => <Route exact key={key} {...rest} />)

  return (
    <BrowserRouter>
      <ToastContainer />
        <Switch>
          {RouteComponents}
        </Switch>
    </BrowserRouter>
  )
}
