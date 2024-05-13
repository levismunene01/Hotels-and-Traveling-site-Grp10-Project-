import { Flex, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';








const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py={4}
      px={8}
      bg="gray.800"
      color="white"
      borderBottom="1px solid #0364e2"
    >
      <Heading as="h1" fontSize="2xl" fontWeight={'bold'}>
        MAGENDO TOURS TRAVELINGS AND HOTELS
      </Heading>
      <Flex>
        <Button
          as={Link}
          to="/about"
          colorScheme="blue"
          mr={4}
          _hover={{ transform: 'translateY(-1px)', boxShadow: 'lg' }}
          _active={{ transform: 'translateY(1px)', boxShadow: 'none' }}
        >
          About
        </Button>
        <Button
          as={Link}
          to="/contact"
          colorScheme="blue"
          _hover={{ transform: 'translateY(-1px)', boxShadow: 'lg' }}
          _active={{ transform: 'translateY(1px)', boxShadow: 'none' }}
          style={{
            background: 'linear-gradient(145deg, #2a2e37, #21242b)',
            border: '1px solid #2a2e37',
            borderRadius: '8px',
            boxShadow: '5px 5px 10px #1a1c20, -5px -5px 10px #333739',
          }}
        >
          Contact
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
