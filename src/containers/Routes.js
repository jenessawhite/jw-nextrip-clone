import React, { useEffect, useState } from 'react'
import { getRoutes } from '../API'

export default function Routes() {
  const [busRoutes, setBusRoutes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getRoutes()
      .then((res) => {
        setBusRoutes(res.data)
        setLoaded(true)
      })
      .catch((err) => {
        setLoaded(true)
        setError(err)
        console.log(err)
      })
  }, [])

  if (!loaded && !error) {
    return <span data-testid='loading'>Loading bus routes...</span>
  } else if (loaded && error) {
    return (
      <span data-testid='error'>
        There's something wrong!
        {console.log(error)}
      </span>
    )
  } else if (loaded && !error) {
    return (
      <div>
        <span data-testid='resolved'>There's bus routes!</span>
        <ul>
          {busRoutes.map((route) => (
            <li key={`transit-route-${route.Route}`}>{route.Route}</li>
          ))}
        </ul>
      </div>
    )
  }
}
