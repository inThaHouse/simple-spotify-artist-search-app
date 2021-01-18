import { useState, useEffect } from 'react'
import { getArtists } from '../utils/spotifyApi'
import { useHistory } from 'react-router-dom'

export const useArtists = (location, authDetails) => {
  const history = useHistory()
  const [artists, setArtists] = useState()
  const [searchedArtist, setSearchedArtist] = useState('')

  const onSearchArtist = async (event) => {
    event.preventDefault()

    const response = await getArtists(searchedArtist, authDetails.access_token)

    if (response) {
      if (response.error) {
        history.push('/')
        return
      }

      if (response.artists.items.length) {
        setArtists({ ...response.artists })
      }
    }

    setSearchedArtist('')
  }

  const onInputChange = (input) => setSearchedArtist(input)

  useEffect(() => {
    if (location && location.state) {
      setArtists({ ...location.state })
    }
  }, [location])

  return {
    artists,
    searchedArtist,
    onSearchArtist,
    onInputChange,
    setArtists,
  }
}
