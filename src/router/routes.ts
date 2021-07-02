import { RouteProps } from 'react-router-dom'

import { NotFoundRoute } from '@router/routes/NotFound'
import { PokedexRoute } from '@router/routes/Pokedex'

interface IRoutes extends RouteProps {
  isPrivate?: boolean
}

export const Routes: IRoutes[] = [
  PokedexRoute
]

Routes.push(NotFoundRoute)
