import { useEffect, useContext } from 'react'
import CenterContainer from '../components/CenterContainer'
import Search from '../components/Search'
import { Box } from '@chakra-ui/react'
import { appRoutes } from '../utils/routes'
import { useHistory } from 'react-router-dom'
import { useArtists } from '../hooks/use-artists'
import { AuthContext } from '../hooks/use-auth'

const SearchScreen = ({ location }) => {
  const history = useHistory()
  const { authDetails } = useContext(AuthContext)
  const { artists, onSearchArtist, onInputChange } = useArtists(
    location,
    authDetails
  )

  useEffect(() => {
    if (artists && artists.items) {
      history.push({ pathname: appRoutes.artistsPage, state: artists })
    }
  }, [history, artists])

  return (
    <CenterContainer>
      <Box w={'70%'} p={8} borderWidth={1} borderRadius={8} boxShadow='lg'>
        <Search
          onChange={(event) => onInputChange(event.target.value)}
          onSearch={onSearchArtist}
          alignment={'center'}
        />
      </Box>
    </CenterContainer>
  )
}

export default SearchScreen
