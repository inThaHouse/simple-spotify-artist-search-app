import { useContext } from 'react'
import BasicCard from '../components/BasicCard'
import { Box, SimpleGrid, Container } from '@chakra-ui/react'
import Search from '../components/Search'
import { useArtists } from '../hooks/use-artists'
import { AuthContext } from '../hooks/use-auth'
import ArtistInfo from '../components/ArtistInfo'
import StarsRating from '../components/StarsRating'
import { Link } from 'react-router-dom'
import { appRoutes } from '../utils/routes'
import {
  commonBoxLayoutProps,
  commonGridProps,
  commonContainerProps,
} from '../utils/commonProps'
import NextPrevBtns from '../components/NextPrevBtns'

const ArtistListScreen = ({ location }) => {
  const { authDetails } = useContext(AuthContext)
  const {
    artists,
    onSearchArtist,
    onInputChange,
    searchedArtist,
    setArtists,
  } = useArtists(location, authDetails)

  return (
    <Container {...commonContainerProps}>
      <Box w={['100%', '80%']} m={'auto'}>
        <Search
          searchInput={searchedArtist}
          onChange={(event) => onInputChange(event.target.value)}
          onSearch={onSearchArtist}
          alignment={'left'}
        />
      </Box>
      <SimpleGrid {...commonGridProps}>
        {artists &&
          artists.items.map((artist) => (
            <Link
              key={artist.id}
              to={{
                pathname: `${appRoutes.artistPath}/${artist.id}/${appRoutes.albums}`,
                state: { artistName: artist.name },
              }}
            >
              <BasicCard {...artist}>
                <Box {...commonBoxLayoutProps} padding='10px'>
                  <ArtistInfo name={artist.name} followers={artist.followers} />
                  <StarsRating popularity={artist.popularity} />
                </Box>
              </BasicCard>
            </Link>
          ))}
      </SimpleGrid>
      {artists && (
        <NextPrevBtns
          accessToken={authDetails.access_token}
          nextList={artists.next}
          previousList={artists.previous}
          setData={setArtists}
        />
      )}
    </Container>
  )
}

export default ArtistListScreen
