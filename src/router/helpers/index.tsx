import { FC, ReactElement } from 'react'
import { Route } from 'react-router-dom'

import { PageLayout } from '@components/PageLayout'

export const CustomRoute: FC = ({ ...rest }): ReactElement => {
  return (
    <PageLayout>
      <Route {...rest} />
    </PageLayout>
  )
}
