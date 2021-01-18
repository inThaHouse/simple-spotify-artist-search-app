import { Button, ButtonGroup } from '@chakra-ui/react'
import { getNextOrPreviousList } from '../utils/spotifyApi'
import { useHistory } from 'react-router-dom'
import { appRoutes } from '../utils/routes'

const NextPrevBtns = ({ previousList, nextList, accessToken, setData }) => {
  const history = useHistory()
  const buttonProps = {
    color: 'spotifyGreen',
    bg: 'spotifyDark',
  }

  const fetchNextOrPreviousList = async (list, token) => {
    const data = await getNextOrPreviousList(list, token)

    if (data.error) {
      history.push(appRoutes.root)
      return
    } else if (data.artists) {
      setData({ ...data.artists })
    } else {
      setData({ ...data })
    }
  }

  return (
    <ButtonGroup
      variant='outline'
      spacing='6'
      display='flex'
      justifyContent='center'
      my='10'
    >
      {previousList && (
        <Button
          {...buttonProps}
          onClick={() => fetchNextOrPreviousList(previousList, accessToken)}
        >
          Previous
        </Button>
      )}
      {nextList && (
        <Button
          {...buttonProps}
          onClick={() => fetchNextOrPreviousList(nextList, accessToken)}
        >
          Next
        </Button>
      )}
    </ButtonGroup>
  )
}

export default NextPrevBtns
