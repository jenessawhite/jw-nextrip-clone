import React, { useEffect, useState } from 'react'
import { getStops } from '../API'
import ErrorMessage from './ErrorMessage'

export default function Stops({ match }) {
  const [stops, setStops] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getStops(match.params.routeId, match.params.direction)
      .then((res) => {
        setStops(res.data)
        setLoaded(true)
      })
      .catch((err) => {
        setLoaded(true)
        setError(err)
        console.log(err)
      })
  }, [match.params])

  if (!loaded && !error) {
    return <span data-testid='loading'>Loading stops...</span>
  } else if (loaded && error) {
    return <ErrorMessage error={error} />
  } else if (loaded && !error) {
    return (
      <div data-testid='resolved'>
        <h2>
          Stops for route:{` `}
          {match.params.routeId}
        </h2>
        <ul>
          {stops.map((stop) => (
            <li key={`transit-stop-${stop.Value}`} value={stop.Value}>
              {stop.Text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
