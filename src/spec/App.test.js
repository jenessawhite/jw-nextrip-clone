import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from '../App'

test('renders learn react link', async () => {
  const { findAllByText } = render(
    <Router>
      <App />
    </Router>
  )
  // the app by default loads the home page and has a link to the home page
  // so there should be 2 items in the array
  const items = await findAllByText(/home/i)
  expect(items).toHaveLength(2)
})
