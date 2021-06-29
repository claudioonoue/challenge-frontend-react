import { RouteProps } from 'react-router-dom'

import { NotFoundRoute } from '@router/routes/NotFound'

interface IRoutes extends RouteProps {
  isPrivate?: boolean
}

export const Routes: IRoutes[] = []

Routes.push(NotFoundRoute)
