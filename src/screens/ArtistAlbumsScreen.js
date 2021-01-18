import { useState } from 'react'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../hooks/use-auth'
import { getAlbums } from '../utils/spotifyApi'
import { useParams } from 'react-router-dom'
import { Box, SimpleGrid, Container, Heading } from '@chakra-ui/react'
import BasicCard from '../components/BasicCard'
import AlbumInfo from '../components/AlbumInfo'
import {
  commonBoxLayoutProps,
  commonGridProps,
  commonContainerProps,
} from '../utils/commonProps'
import { useHistory } from 'react-router-dom'
import { appRoutes } from '../utils/routes'
import NextPrevBtns from '../components/NextPrevBtns'

const ArtistAlbumsScreen = () => {
  const history = useHistory()
  const { artistId } = useParams()
  const { authDetails } = useContext(AuthContext)
  const [albums, setAlbums] = useState()

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      const data = await getAlbums(artistId, authDetails.access_token)

      if (data.error) {
        history.push(appRoutes.root)
        return
      }

      setAlbums(data)
    }

    fetchAndSetAlbums()
  }, [artistId, authDetails, history])

  return (
    <Container {...commonContainerProps}>
      <Heading fontSize={['1rem', '1.8rem']}>
        {history.location.state.artistName}
      </Heading>
      <Heading fontSize={['1rem', '1.8rem']} fontWeight='300'>
        Albums
      </Heading>
      <SimpleGrid {...commonGridProps}>
        {albums &&
          albums.items.map((album) => (
            <BasicCard key={album.id} {...album}>
              <Box {...commonBoxLayoutProps}>
                <AlbumInfo {...album} />
              </Box>
            </BasicCard>
          ))}
      </SimpleGrid>
      {albums && (
        <NextPrevBtns
          accessToken={authDetails.access_token}
          nextList={albums.next}
          previousList={albums.previous}
          setData={setAlbums}
        />
      )}
    </Container>
  )
}

export default ArtistAlbumsScreen
