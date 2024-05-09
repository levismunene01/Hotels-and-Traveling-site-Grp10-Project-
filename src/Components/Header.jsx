
import { Grid, Input, Flex, Box } from "@chakra-ui/react";
import {  FaPhone } from 'react-icons/fa';

const Header = () => {
  const handleContactClick = () => {
    // Logic to navigate to footer
    console.log("Navigate to footer");
  };

  return (
    <Grid
      templateColumns="1fr 3fr 1fr"
      gap={6}
      bg="Navy Blue"
      py={4}
      px={6}
      alignItems="center"
    >
      {/* Left side search */}
      <Flex alignItems="center" >
       
        <Input type="text" placeholder="Search hotels...."style={{ fontSize: '1.2rem', padding: '0.5rem', background: 'Aquamarine', borderRadius:'12cm'}} />
      </Flex>

      <Box />

      {/* Right side contact and calendar */}
      <Flex justifyContent="flex-end" alignItems="center">
        <Input placeholder='Select Date and Time' size='md' type='datetime-local' mr={4} style={{ fontSize: '1.2rem', padding: '0.5rem', borderRadius:'14cm'}} />
        <Box as="button" onClick={handleContactClick} style={{ background: 'none', border: 'none', cursor: 'pointer',  }}>
          <FaPhone size={30} />
        </Box>
        <Box ml={2}>Contact Us</Box>
      </Flex>
    </Grid>
    
  );
};

export default Header;
