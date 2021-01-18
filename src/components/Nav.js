import { Flex, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { appRoutes } from '../utils/routes'

const Nav = () => (
  <Flex
    as='nav'
    padding='1.2rem'
    bg='spotifyDark'
    width='100%'
    justifyContent={['center', 'center', 'flex-start']}
  >
    <Link to={appRoutes.searchPage}>
      <Heading
        cursor='pointer'
        letterSpacing='1px'
        fontSize='25px'
        color='spotifyGreen'
      >
        Spotify Viewer
      </Heading>
    </Link>
  </Flex>
)

export default Nav
