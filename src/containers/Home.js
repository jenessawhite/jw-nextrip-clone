import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getRoutes } from '../API'

export default function Home() {
  const [busRoutes, setBusRoutes] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')

  let history = useHistory()

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

  const handleChange = (e) => {
    history.push('/routes/' + e.target.value)
  }

  if (!loaded && !error) {
    return <p data-testid='loading'>Loading bus routes...</p>
  } else if (loaded && error) {
    return (
      <div data-testid='error'>
        <h1>Home</h1>
        <p>
          There's something wrong!
          {console.log(error)}
        </p>
      </div>
    )
  } else if (loaded && !error) {
    return (
      <div data-testid='resolved'>
        <h1>Home</h1>
        <p>Please select your route</p>
        <div>
          <label htmlFor='routes'>
            <select
              name='routes'
              id='routes'
              defaultValue='default'
              onChange={handleChange}>
              <option value='default' disabled>
                Select Route
              </option>

              {busRoutes.map((route) => (
                <option
                  key={`transit-route-${route.Route}`}
                  value={route.Route}>
                  {route.Description}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    )
  }
}
