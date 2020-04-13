import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Routes from './components/Routes'
import Stops from './components/Stops'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <div className='App'>
      <header>
        <Link to='/'>Home</Link>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/routes/:routeId' component={Routes} />
        <Route exact path='/routes/:routeId/:direction' component={Stops} />

        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  )
}

export default App
