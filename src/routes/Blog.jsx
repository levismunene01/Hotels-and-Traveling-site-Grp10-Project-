
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';







const Features = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        <FaStar /> Features
      </Heading>
      <Text>
        Discover the features that make QuickSafe Tours, Hotels, and Travelling stand out:
      </Text>
      <List mt={4}>
        <ListItem>Easy Hotel Booking</ListItem>
        <ListItem>Customized Travel Tours</ListItem>
        <ListItem>Secure Payment Options</ListItem>
        <ListItem>24/7 Customer Support</ListItem>
        <ListItem>User-Friendly Interface</ListItem>
        <ListItem>Mobile Compatibility</ListItem>
        <ListItem>Travel Deals and Discounts</ListItem>
      </List>
    </Box>
  );
}

export default Features;
