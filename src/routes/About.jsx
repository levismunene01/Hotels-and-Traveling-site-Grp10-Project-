
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';








const About = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        <FaInfoCircle /> About Us
      </Heading>
      <Text>
        Quicksafe Tours, Hotels, and Travelling is your one-stop destination for all your travel needs.
      </Text>
      <List mt={4}>
        <ListItem>Our mission is to make the World a best place for people to travel</ListItem>
        <ListItem>Founded in MAY 8 2024</ListItem>
        <ListItem>Based in NAIROBI/KENYA</ListItem>
        <ListItem>Contact us:</ListItem>
        <List ml={4}>
          <ListItem>Email: info@quicksafe.com,Levismunene@gmail.com</ListItem>
          <ListItem>Phone: +254748288593</ListItem>
          <ListItem>Address: 123 Main Street, NairobiCity, KENYA</ListItem>
        </List>
      </List>
    </Box>
  );
}

export default About;
