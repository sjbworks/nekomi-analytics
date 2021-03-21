import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom' //eslint-disable-line

export const Footer = () => (
  <footer>
    <Link to="/meter">meter</Link>
    <Link to="/corefan">corefan</Link>
  </footer>
)
