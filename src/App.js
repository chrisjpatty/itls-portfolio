import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import 'normalize.css'
import './app.css'
import Routes from 'react-static-routes'

const App = () => (
  <Router>
    <div>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
