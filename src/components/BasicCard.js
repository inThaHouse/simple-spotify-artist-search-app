import { Box, Image } from '@chakra-ui/react'

const BasicCard = ({ name, images, children }) => {
  // it is possible that a fetched artist does not have an avatar, a fallback will be provided.
  const fallbackImage = 'https://via.placeholder.com/300'
  const image = images.length ? images[0].url : fallbackImage

  return (
    <Box
      borderWidth='1px'
      borderColor='black'
      display='flex'
      flexDirection='column'
      _hover={{ boxShadow: 'gray 0px 5px 30px 0px;' }}
      height='100%'
    >
      <Image borderBottom='1px solid black' src={image} alt={name} />
      {children}
    </Box>
  )
}

export default BasicCard
