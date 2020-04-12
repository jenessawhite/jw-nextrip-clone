import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './containers/Home'
import Routes from './containers/Routes'

function App() {
  return (
    <div className='App'>
      <header>
        <Link to='/'>Home</Link>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/routes' component={Routes} />
      </Switch>
    </div>
  )
}

export default App
