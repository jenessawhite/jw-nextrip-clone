import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getRouteDirections } from '../API'

export default function Routes({ match }) {
  const [routeDirections, setRouteDirections] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  let history = useHistory()

  useEffect(() => {
    getRouteDirections(match.params.routeId)
      .then((res) => {
        setRouteDirections(res.data)
        setLoaded(true)
      })
      .catch((err) => {
        setLoaded(true)
        setError(err)
        console.log(err)
      })
  }, [match.params.routeId])

  const handleChange = (e) => {
    history.push('/routes/' + match.params.routeId + '/' + e.target.value)
  }

  if (!loaded && !error) {
    return <span data-testid='loading'>Loading directions...</span>
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
        <span data-testid='resolved'>
          Your selected route:{` `}
          {match.params.routeId}
        </span>

        <div>
          <label htmlFor='routes'>
            <select
              name='direction'
              id='direction'
              defaultValue='default'
              onChange={handleChange}>
              <option value='default' disabled>
                Select Direction
              </option>

              {routeDirections.map((direction) => (
                <option
                  key={`transit-direction-${direction.Value}`}
                  value={direction.Value}>
                  {direction.Text}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    )
  }
}
