import { Flex, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
      as="header"
      direction="column"
      align="center"
      justify="center"
      py="4"
      px="8"
      bg="gray.800"
      color="white"
      borderBottom="2px solid #3182ce"
      boxShadow="md"
    >
   <Heading
  as="h1"
  fontSize="3xl"
  fontWeight="bold"
  color="gray.300"
  textAlign="center"
  textShadow="2px 2px #1a202c"
  mb="4"
>
  QuickSafe Tours & Hotels
</Heading>


      <Flex>
        <Button
          as={Link}
          to="/about"
          colorScheme="blue"
          mr="4"
        >
          About
        </Button>

        <Button
          as={Link}
          to="/contact"
          bg="teal.500"
          color="white"
          _hover={{ bg: 'teal.600' }}
        >
          Contact
        </Button>
      </Flex>
    </Flex>
  )
}

export default Header
