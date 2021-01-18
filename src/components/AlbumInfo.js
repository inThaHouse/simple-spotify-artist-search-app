import { Heading, Box } from '@chakra-ui/react'
import ExternalBtn from './ExternalBtn'
import {
  commonBoxLayoutProps,
  commonTextProps,
  commonH2Props,
  commonH3Props,
} from '../utils/commonProps'

// Used as children props for BasicCard.js
const AlbumInfo = ({
  name,
  release_date,
  artists,
  total_tracks,
  external_urls,
}) => {
  const buildArtistsLabel = (artists) => {
    return artists.length > 1
      ? artists
          .reduce((accumulator, item) => (accumulator += `${item.name}, `), '')
          .slice(0, -2) // to remove ', ' at the end of string
      : artists[0].name
  }

  return (
    <Box {...commonBoxLayoutProps}>
      <Box {...commonBoxLayoutProps} p='10px'>
        <Box pb='10px'>
          <Heading {...commonH2Props}>{name}</Heading>
          <Heading {...commonH3Props}>{buildArtistsLabel(artists)}</Heading>
        </Box>

        <Box>
          <Heading {...commonTextProps}>{release_date}</Heading>
          <Heading {...commonTextProps}>{total_tracks} tracks</Heading>
        </Box>
      </Box>

      <ExternalBtn
        btnLabel='Preview on Spotify'
        externalLink={external_urls.spotify}
      />
    </Box>
  )
}

export default AlbumInfo
