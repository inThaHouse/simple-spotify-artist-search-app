const AUTH_END_POINT = 'https://accounts.spotify.com/authorize'
const REDIRECT_URI = 'http://localhost:3000'
const CLIENT_ID = 'ef06f6883920433ea7310fd0d616b386'

export const AUTH_SUCCESS_STATE = 'AUTH_SUCCESS_STATE'
export const BASE_API = 'https://api.spotify.com/v1'
export const SPOTIFY_AUTH_ROUTE = `${AUTH_END_POINT}?client_id=${CLIENT_ID}&redirect_uri=${
  process.env.NODE_ENV === 'development'
    ? REDIRECT_URI
    : process.env.REDIRECT_URI
}&scope=user-read-private&response_type=token&state=${AUTH_SUCCESS_STATE}`
