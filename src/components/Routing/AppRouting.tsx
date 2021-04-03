import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import AddHouse from '../pages/addHouse/AddHouse'
import Home from '../pages/home/Home'
import HousesList from '../pages/list/List'

const AppRouting = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOUSES} exact>
        <HousesList />
      </Route>
      <Route path={ROUTES.HOUSE_ADD}>
        <AddHouse />
      </Route>
      <Route path={ROUTES.HOUSE_DETAILS}>
        <div>DETAILS</div>
      </Route>
      <Route path={ROUTES.HOME} exact>
        <Home />
      </Route>
    </Switch>
  )
}

export default AppRouting