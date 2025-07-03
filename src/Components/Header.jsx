import { Flex, Heading, Button, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Flex
      as="header"
      direction="column"
      align="center"
      justify="center"
      py={{ base: 3, md: 4 }}
      px={{ base: 4, md: 8 }}
      bg="gray.800"
      color="white"
      borderBottom="2px solid #3182ce"
      boxShadow="md"
    >
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="gray.300"
        textAlign="center"
        textShadow="2px 2px #1a202c"
        mb={{ base: 2, md: 4 }}
      >
        QuickSafe Tours & Hotels
      </Heading>

      <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
        <Button
          as={Link}
          to="/about"
          colorScheme="blue"
          w={{ base: "full", sm: "auto" }}
        >
          About
        </Button>

        <Button
          as={Link}
          to="/contact"
          bg="teal.500"
          color="white"
          _hover={{ bg: 'teal.600' }}
          w={{ base: "full", sm: "auto" }}
        >
          Contact
        </Button>
      </Stack>
    </Flex>
  )
}

export default Header
