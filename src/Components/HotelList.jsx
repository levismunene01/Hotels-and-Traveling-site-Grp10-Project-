import { useState, useEffect } from "react"
import {
  Box, Image, Text, Button, Flex, Icon
} from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai"
import { FaWifi, FaCamera, FaHiking, FaSpa } from "react-icons/fa"

const HotelList = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("https://hotels-gicm.onrender.com/todo")
        const data = await res.json()
        setHotels(data)
      } catch (error) {
        console.error("Error fetching hotels:", error)
      }
    }
    fetchHotels()
  }, [])

  return (
    <Box p={4} bg="gray.100" minH="100vh">
      <Flex flexWrap="wrap" justify="center" gap={6}>
        {hotels.map((hotel) => (
          <Box
            key={hotel.id}
            w="300px" // fixed width
            h="500px" // fixed height
            bg="white"
            borderRadius="md"
            overflow="hidden"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.03)" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Image
              h="200px"
              w="100%"
              objectFit="cover"
              src={hotel.Picture}
              alt={hotel.Name}
            />
            <Box p="4" flex="1">
              <Text fontSize="xl" fontWeight="bold" mb="2" color="blue.700">
                {hotel.Name}
              </Text>
              <Flex align="center" mb="2">
                {[...Array(hotel.Rating)].map((_, index) => (
                  <Icon key={index} as={AiFillStar} color="yellow.400" />
                ))}
                <Text ml="2" fontSize="sm" color="gray.600">
                  {hotel.Rating}
                </Text>
              </Flex>
              <Text fontSize="sm" mb="1"><strong>Destination:</strong> {hotel.Destination}</Text>
              <Text fontSize="sm" mb="2"><strong>Price Per Night:</strong> {hotel["Price Per night"]}</Text>
              <Flex align="center" gap="2" mb="3">
                <Icon as={FaWifi} color="blue.500" />
                <Icon as={FaCamera} color="blue.500" />
                <Icon as={FaHiking} color="blue.500" />
                <Icon as={FaSpa} color="blue.500" />
              </Flex>
            </Box>
            <Box p="4">
              <Button
                colorScheme="blue"
                w="full"
                fontWeight="bold"
              >
                Book Now
              </Button>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default HotelList
