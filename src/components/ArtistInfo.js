import { Heading, Box } from '@chakra-ui/react'
import { commonH2Props, commonH3Props } from '../utils/commonProps'

// Used as children props for BasicCard.js
const ArtistInfo = ({ name, followers }) => {
  const formatNumber = (followersTotal) => {
    return followersTotal.toLocaleString()
  }

  return (
    <Box mb='15'>
      <Heading {...commonH2Props}>{name}</Heading>
      <Heading {...commonH3Props}>
        {formatNumber(followers.total)} followers
      </Heading>
    </Box>
  )
}

export default ArtistInfo
