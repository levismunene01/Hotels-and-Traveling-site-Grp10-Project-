import { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { FaWifi, FaCamera, FaHiking, FaSpa } from "react-icons/fa";







const HotelList = () => {
  const [hotels, setHotels] = useState([])
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)


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

  const openModal = (hotel) => {
    setSelectedHotel(hotel)
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
  };

  
  const handleBooking = () => {
    alert("Thanks for booking with us! We are looking forward to seeing you.");
    setIsModalOpen(false)
  }

  return (
    <Box>
      <Flex flexWrap="wrap" justifyContent="center">
        {hotels.map((hotel) => (
          <Box
            key={hotel.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m={4}
            boxShadow="md"
            cursor="pointer"
            onClick={() => openModal(hotel)}
          >
            <Image
              h="200px"
              w="100%"
              objectFit="cover"
              src={hotel.Picture}
              alt={hotel.Name}
            />
            <Flex p="4" alignItems="center">
              <Box flex="1">
                <Text fontSize="xl" fontWeight="bold" mb="2">
                  {hotel.Name}
                </Text>
                <Flex alignItems="center">
                  {[...Array(hotel.Rating)].map((_, index) => (
                    <Icon key={index} as={AiFillStar} color="yellow.400" />
                  ))}
                  <Text ml="2" fontSize="sm" color="gray.600">
                    {hotel.Rating}
                  </Text>
                </Flex>
                <Text fontSize="sm" mt="2">
                  Destination: {hotel.Destination}
                </Text>
                <Text fontSize="sm" mt="2">
                  Price Per night: {hotel["Price Per night"]}
                </Text>
              </Box>
              <Flex>
                Amenities:
                <Icon as={FaWifi} color="blue" boxSize={20} mr={2} />
                <Icon as={FaCamera} color="blue.500" boxSize={20} mr={2} />
                <Icon as={FaHiking} color="blue.500" boxSize={20} mr={2} />
                <Icon as={FaSpa} color="blue.500" boxSize={20} />
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>


{/* The open Modal appears  when the hotel is click so one can see more info about the hotel and book the hotel */}

      <Modal isOpen={isModalOpen} onClose={closeModal} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
           backgroundColor={'silver'}
           fontSize={'x-large'} 
           fontWeight={'bold'}
           fontStyle={'italic'}
           >{selectedHotel?.Name}</ModalHeader>
          


{/* The modal where the booking forms are */}

            <ModalBody 
            backgroundColor={'silver'} >


            <FormControl mb={2} >
              <FormLabel>
                <h3 style={{ color: "white" }}>Check-in Date</h3>
              </FormLabel>
              <Input type="date" style={{ fontSize: "1.2rem", padding: "0.5rem" }} />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>
                <h3 style={{ color: "white" }}>Check-out Date</h3>
              </FormLabel>

                            <Input type="date" style={{ fontSize: "1.1rem", padding: "0.4rem" }} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel style={{ color: "white" }}>Number of Guests</FormLabel>
              <Input type="number" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel style={{ color: "white" }}>Room Type</FormLabel>

              <Select>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </Select>
            </FormControl>

           

            <FormControl mb={4}>
              <FormLabel style={{ color: "white" }}>Special Requests</FormLabel>
              <Textarea />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel style={{ color: "white" }}>Contact Information</FormLabel>
              <Input type="text" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel style={{ color: "white" }}>Payment Information</FormLabel>
              <Input type="text" />
            </FormControl>
          </ModalBody>
          

         
          <ModalFooter>
            <Button color="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
            {/* <Button color="green">Book Now</Button> */}
            <Button color="green" onClick={handleBooking}>
              Book Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}





export default HotelList;
