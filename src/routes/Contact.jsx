

import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'








const Contact = () => {
  const phoneNumbers = [
    '+254-748-288-593',
    '+254-797-501-993',
    '+254-740-887-442',
    '+254-706-016-860',
    '+254-782-033-687'
  ]

  const emails = [
    'info@magendotours.com',
    'support@magendotours.com',
  ]

  return (
    <Box p={8} maxW="800px" mx="auto" mt={10} borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Contact Us
      </Heading>
      <Flex direction="column" align="center">
        <Box mb={6} w="100%">
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            Phone Numbers
          </Heading>
          {phoneNumbers.map((phone, index) => (
            <Flex key={index} align="center" mb={2} justify="center">
              <Icon as={FaPhone} color="blue.500" mr={2} />
              <Text fontSize="lg">{phone}</Text>
            </Flex>
          ))}
        </Box>
        <Box w="100%">
          <Heading as="h3" size="lg" mb={4} textAlign="center">
            Emails
          </Heading>
          {emails.map((email, index) => (
            <Flex key={index} align="center" mb={2} justify="center">
              <Icon as={FaEnvelope} color="blue.500" mr={2} />
              <Text fontSize="lg">{email}</Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact

