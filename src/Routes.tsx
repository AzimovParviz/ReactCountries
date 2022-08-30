import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/Country'
import Cart from './pages/Cart'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/country/:id" component={Country} />
    <Route exact path="/cart" component={Cart} />
  </Switch>
)

export default Routes
