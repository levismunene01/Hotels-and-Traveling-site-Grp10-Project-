
import { Box, Heading, Text } from '@chakra-ui/react';
import { FaRegFileAlt } from 'react-icons/fa';







const TermsOfService = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        <FaRegFileAlt /> Terms of Service
      </Heading>
      <Text>
        Welcome to Quicksafe Tours, Hotels, and Travelling! Our terms of service outline the rules and regulations for the use of our website.
      </Text>
      {/* Add detailed terms of service here */}
    </Box>
  );
}

export default TermsOfService;
