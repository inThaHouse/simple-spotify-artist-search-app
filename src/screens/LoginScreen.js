import { useEffect, useContext } from 'react'
import CenterContainer from '../components/CenterContainer'
import { checkAuthInfo } from '../utils/auth'
import { SPOTIFY_AUTH_ROUTE, AUTH_SUCCESS_STATE } from '../utils/constants'
import { appRoutes } from '../utils/routes'
import { AuthContext } from '../hooks/use-auth'
import { Redirect } from 'react-router-dom'
import { Button, Icon } from '@chakra-ui/react'
import { FaSpotify } from 'react-icons/fa'

const LoginScreen = () => {
  const { authDetails, setAuthDetails } = useContext(AuthContext)

  useEffect(() => {
    if (window.location.hash) {
      const authInfo = checkAuthInfo(window.location.hash)
      setAuthDetails({ ...authInfo })
    }
  }, [setAuthDetails])

  return authDetails.state === AUTH_SUCCESS_STATE ? (
    <Redirect to={appRoutes.searchPage} />
  ) : (
    <CenterContainer>
      <Button
        display='flex'
        justifyContent='space-between'
        as='a'
        leftIcon={<Icon visibility='hidden' as={FaSpotify} />}
        rightIcon={<Icon as={FaSpotify} color='spotifyGreen' />}
        href={SPOTIFY_AUTH_ROUTE}
        size={'lg'}
        w={['90%', '60%', '40%']}
        fontSize='30px'
        padding='2rem'
      >
        Login with Spotify
      </Button>
    </CenterContainer>
  )
}

export default LoginScreen
