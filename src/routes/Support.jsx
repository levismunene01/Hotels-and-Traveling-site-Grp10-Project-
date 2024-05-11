
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { FaHeadset } from 'react-icons/fa';

const Support = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        <FaHeadset /> Support
      </Heading>
      <Text>
        Our dedicated support team is here to assist you with any questions or issues you may have.
      </Text>
      <List mt={4}>
        <ListItem>Email: support@magendo.com</ListItem>
        <ListItem>Phone: 1-800-123-4567</ListItem>
        <ListItem>Live Chat: Available on our website</ListItem>
      </List>
    </Box>
  );
}

export default Support;
