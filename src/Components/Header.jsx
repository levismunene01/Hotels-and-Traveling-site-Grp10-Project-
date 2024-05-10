
import { Box, Image, Flex, Text, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
 // Replace with the actual path to your logo image

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="1px solid #e2e8f0"
      padding="1rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={'https://www.google.com/imgres?q=falcon%20c%2B%2B&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069236200562&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Ffalconcpp%2F%3Flocale%3Des_LA&docid=QDFftQfRb3B2JM&tbnid=6MVorFBepb50iM&vet=12ahUKEwibgr3d0YKGAxU1zAIHHVSwA2IQM3oECEoQAA..i&w=256&h=256&hcb=2&ved=2ahUKEwibgr3d0YKGAxU1zAIHHVSwA2IQM3oECEoQAA'} alt="Hotel Logo" boxSize="50px" objectFit="contain" />

      <Flex align="center">
        <Text fontSize="lg" fontWeight="bold" mr={50}>
          MAGENDO TOURS TRAVELING AND HOTELS
        </Text>
       
        <Text fontSize="lg" fontWeight="bold" mr={4}>
          Services
        </Text>
        
        <NavLink to={'/About'} >
        <Button colorScheme="blue" variant="outline">
          About
        </Button>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Header;
