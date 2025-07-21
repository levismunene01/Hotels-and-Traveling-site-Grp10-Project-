import { Box, Heading, Text, Flex, Icon, Stack, Divider, Button } from '@chakra-ui/react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

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
    <Box
      bgGradient="linear(to-r, blue.50, blue.100)"
      py={10}
      px={6}
      minH="100vh"
    >
      <Box
        maxW="800px"
        mx="auto"
        bg="white"
        p={8}
        borderRadius="xl"
        boxShadow="2xl"
      >
        <Heading
          as="h2"
          size="xl"
          mb={8}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, blue.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Contact Us
        </Heading>

        <Stack spacing={10}>
          <Box>
            <Heading
              as="h3"
              size="md"
              mb={4}
              textAlign="center"
              color="blue.700"
            >
              Phone Numbers
            </Heading>
            <Divider mb={4} />
            {phoneNumbers.map((phone, index) => (
              <Flex
                key={index}
                align="center"
                mb={2}
                justify="center"
                _hover={{ transform: 'scale(1.02)', color: 'blue.600' }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={FaPhone} color="blue.500" mr={2} />
                <Text fontSize="lg" fontWeight="medium">
                  {phone}
                </Text>
              </Flex>
            ))}
          </Box>

          <Box>
            <Heading
              as="h3"
              size="md"
              mb={4}
              textAlign="center"
              color="blue.700"
            >
              Emails
            </Heading>
            <Divider mb={4} />
            {emails.map((email, index) => (
              <Flex
                key={index}
                align="center"
                mb={2}
                justify="center"
                _hover={{ transform: 'scale(1.02)', color: 'blue.600' }}
                transition="all 0.2s ease-in-out"
              >
                <Icon as={FaEnvelope} color="blue.500" mr={2} />
                <Text fontSize="lg" fontWeight="medium">
                  {email}
                </Text>
              </Flex>
            ))}
          </Box>

          <Box>
            <Heading
              as="h3"
              size="md"
              mb={4}
              textAlign="center"
              color="blue.700"
            >
              Office Location
            </Heading>
            <Divider mb={4} />
            <Flex align="center" justify="center">
              <Icon as={FaMapMarkerAlt} color="blue.500" mr={2} />
              <Text fontSize="lg" fontWeight="medium">
                Nairobi, Kenya
              </Text>
            </Flex>
          </Box>

          <Box textAlign="center">
            <Button
              leftIcon={<FaArrowLeft />}
              colorScheme="blue"
              variant="solid"
              size="md"
              onClick={() => navigate('/')}
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: 'md'
              }}
              transition="all 0.2s ease-in-out"
            >
              Back to Home
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Contact
