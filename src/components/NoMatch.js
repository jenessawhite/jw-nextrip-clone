import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
  return (
    <div>
      <h1>404</h1>
      <p>
        Looks like we're a tad bit lost. Let's go{' '}
        <span>
          <Link to='/'>home</Link>
        </span>
      </p>
    </div>
  )
}

export default NoMatch
