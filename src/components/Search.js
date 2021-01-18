import { Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ onSearch, onChange, searchInput, alignment }) => {
  return (
    <form onSubmit={onSearch}>
      <InputGroup>
        <Input
          textAlign={alignment}
          size='lg'
          border={'1px solid black'}
          variant='filled'
          onChange={onChange}
          placeholder='Search for an artist...'
          value={searchInput}
        />
        <InputRightElement
          w='3rem'
          h='3rem'
          children={<Icon as={FaSearch} />}
        />
      </InputGroup>
    </form>
  )
}

export default Search
