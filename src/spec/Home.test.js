import React from 'react'
import { render } from '@testing-library/react'

import Home from '../containers/Home'

test('renders home page', () => {
  const { getByText } = render(<Home />)
  const homeTitle = getByText(/Home/i)
  expect(homeTitle).toBeInTheDocument()
})
