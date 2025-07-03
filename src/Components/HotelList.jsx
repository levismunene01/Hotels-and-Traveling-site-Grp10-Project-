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
    <Box p={4}>
      <Flex flexWrap="wrap" justify="center">
        {hotels.map((hotel) => (
          <Box
            key={hotel.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            boxShadow="md"
          >
            <Image
              h="200px"
              w="100%"
              objectFit="cover"
              src={hotel.Picture}
              alt={hotel.Name}
            />
            <Box p="4">
              <Text fontSize="xl" fontWeight="bold" mb="2" color="blue.600">
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
              <Text fontSize="sm">Destination: {hotel.Destination}</Text>
              <Text fontSize="sm" mb="2">Price Per Night: {hotel["Price Per night"]}</Text>
              <Flex align="center" gap="2">
                <Icon as={FaWifi} color="blue.500" />
                <Icon as={FaCamera} color="blue.500" />
                <Icon as={FaHiking} color="blue.500" />
                <Icon as={FaSpa} color="blue.500" />
              </Flex>
              <Button
                mt={4}
                colorScheme="blue"
                w="full"
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
