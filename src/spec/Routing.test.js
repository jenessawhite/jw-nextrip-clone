import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import App from '../App'
import Routes from '../components/Routes'

function renderWithRouter(children, historyConf = {}) {
  const history = createMemoryHistory(historyConf)
  return render(<Router history={history}>{children}</Router>)
}

test('App renders', async () => {
  const history = createMemoryHistory()
  const { findAllByText, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  // verify page content for expected route
  expect(getByTestId('app-resolved'))
  const items = await findAllByText(/home/i)
  expect(items).toHaveLength(1)
})

test('Route that does not exist goes to 404', () => {
  const history = createMemoryHistory()
  history.push('/hi')
  const { getByRole } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(getByRole('heading')).toHaveTextContent('404')
})

test('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = '/routes/903'
  history.push(route)

  const { getByTestId } = render(
    <Router history={history}>
      <Routes />
    </Router>
  )
  expect(getByTestId('routes-resolved')).toHaveTextContent(
    'Your selected route:'
  )
})
