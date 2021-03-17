import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom'
import { Header, Footer } from '.'
import { Analytics } from '../pages/Analytics'

export const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/analytics">
          <Analytics />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
