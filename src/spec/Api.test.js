import React from 'react'
import axios from 'axios'
import { getRoutes, getRouteDirections } from '../API'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

jest.mock('axios')

test('should GET routes from nextrip', () => {
  const routes = [
    { Description: 'METRO Blue Line', ProviderID: '8', Route: '901' },
    { Description: 'METRO Green Line', ProviderID: '8', Route: '902' },
    { Description: 'METRO Red Line', ProviderID: '9', Route: '903' },
  ]
  const resp = { data: routes }
  axios.get.mockResolvedValue(resp)

  return getRoutes().then((res) => expect(res.data).toEqual(routes))
})

test('should GET directions given a route', () => {
  const directions = [
    { Text: 'NORTHBOUND', Value: '1' },
    { Text: 'SOUTHBOUND', Value: '3' },
  ]
  const resp = { data: directions }
  axios.get.mockResolvedValue(resp)

  return getRouteDirections('62').then((res) =>
    expect(res.data).toEqual(directions)
  )
})
