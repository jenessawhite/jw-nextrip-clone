import axios from 'axios'

axios.defaults.baseURL = 'https://svc.metrotransit.org/NexTrip'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getRoutes = () => axios.get('/Routes')
export const getRouteDirections = (routeId) =>
  axios.get('/Directions/' + routeId)
export const getStops = (routeId, direction) =>
  axios.get('/Stops/' + routeId + '/' + direction)
