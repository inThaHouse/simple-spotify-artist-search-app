import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  colors: {
    spotifyGreen: '#1ED760',
    spotifyDark: '#282828',
  },
}

export const theme = extendTheme(customTheme)
