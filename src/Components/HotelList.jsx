import { useState, useEffect } from "react"
import {
  Box, Image, Text, Button, Flex, Icon, SimpleGrid
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
    <Box p={[2, 4]} bg="gray.100" minH="100vh">
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {hotels.map((hotel) => (
          <Box
            key={hotel.id}
            w="100%"
            bg="gray.50" // slight grey background
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Image
              h={["180px", "200px"]}
              w="100%"
              objectFit="cover"
              src={hotel.Picture}
              alt={hotel.Name}
            />
            <Box p="4" flex="1" display="flex" flexDirection="column" justifyContent="space-between">
              <Box>
                <Text fontSize="lg" fontWeight="bold" color="blue.800" mb="1">
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

                <Text fontSize="sm" color="gray.700" mb="1">
                  Destination: <span style={{ fontWeight: "500" }}>{hotel.Destination}</span>
                </Text>

                <Text fontSize="md" color="green.600" fontWeight="bold" mb="2">
                  ${hotel["Price Per night"]} / night
                </Text>

                <Flex align="center" gap="3">
                  <Icon as={FaWifi} color="blue.500" boxSize={5} />
                  <Icon as={FaCamera} color="blue.500" boxSize={5} />
                  <Icon as={FaHiking} color="blue.500" boxSize={5} />
                  <Icon as={FaSpa} color="blue.500" boxSize={5} />
                </Flex>
              </Box>
            </Box>
            <Box p="4">
            <Button
  colorScheme="blue"
  w="full"
  fontWeight="bold"
  fontSize="sm"
  bg="blue.500"
  color="white"
  _hover={{
    bg: "blue.600",
    transform: "scale(1.03)",
    boxShadow: "lg"
  }}
  _active={{
    bg: "blue.700",
    transform: "scale(0.98)"
  }}
  transition="all 0.2s ease-in-out"
>
  Your Button Text
</Button>

            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default HotelList
