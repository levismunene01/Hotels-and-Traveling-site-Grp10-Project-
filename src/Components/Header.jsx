import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

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
      borderBottom="1px solid #e2e8f0"
    >
      <Heading as="h1" fontSize="2xl" fontWeight={'bold'}>
        MAGENDO TOURS TRAVELINGS AND HOTELS
      </Heading>
      {/* Add your navigation or any other header elements here */}
    </Flex>
  );
};

export default Header;
