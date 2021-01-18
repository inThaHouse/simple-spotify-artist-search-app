import { Icon } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

const StarsRating = ({ popularity }) => {
  const convertPopularity = (number) => {
    switch (true) {
      case number <= 19:
        return 1
      case number >= 20 && number <= 39:
        return 2
      case number >= 40 && number <= 59:
        return 3
      case number >= 60 && number <= 84:
        return 4
      case number >= 85:
        return 5
      default:
        return 0
    }
  }

  return (
    <div>
      {new Array(convertPopularity(popularity)).fill('').map((_, index) => (
        <Icon as={FaStar} key={index} color='yellow.400' />
      ))}
    </div>
  )
}

export default StarsRating
