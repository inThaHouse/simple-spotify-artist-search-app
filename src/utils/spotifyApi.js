import { BASE_API } from './constants'

export const getArtists = async (searchedArtist, accessToken) => {
  try {
    const response = await fetch(
      `${BASE_API}/search?q=${searchedArtist}&type=artist`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
    const artistsData = await response.json()

    return artistsData
  } catch (error) {
    throw new Error(error)
  }
}

export const getAlbums = async (artistId, accessToken) => {
  try {
    const response = await fetch(`${BASE_API}/artists/${artistId}/albums`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const albumsData = await response.json()

    return albumsData
  } catch (error) {
    throw new Error(error)
  }
}

export const getNextOrPreviousList = async (list, token) => {
  try {
    const response = await fetch(list, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    return data
  } catch (error) {
    throw new Error(error)
  }
}
