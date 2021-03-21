import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from './components'
import { Meter } from '../pages/Meter'
import { Corefan } from '../pages/Corefan'

export const Layout = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/meter">
          <Meter />
        </Route>
        <Route path="/corefan">
          <Corefan />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
