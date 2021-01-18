import { Button } from '@chakra-ui/react'

const ExternalBtn = ({ externalLink, btnLabel }) => {
  return (
    <Button
      as='a'
      borderTop='1px solid black'
      textAlign='center'
      py='5px'
      bg='spotifyGreen'
      href={externalLink}
      target={'_blank'}
      borderRadius='0'
    >
      {btnLabel}
    </Button>
  )
}

export default ExternalBtn
