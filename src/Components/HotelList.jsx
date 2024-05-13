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
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch("https://hotels-gicm.onrender.com/todo");
        const data = await res.json();
        setHotels(data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
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
          <Box h="200px" w="100%">
            <Image
              h="100%"
              w="100%"
              objectFit="cover"
              src={hotel.Picture}
              alt={hotel.Name}
            />
          </Box>
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Text fontSize="xl" fontWeight="semibold" mr={2}>
                {hotel.Name}
              </Text>
              <Flex alignItems="center">
                {[...Array(hotel.Rating)].map((_, index) => (
                  <Icon key={index} as={AiFillStar} color="yellow" />
                ))}
              </Flex>
            </Box>
            <Text fontSize="sm" mt={2}>
              Destination: {hotel.Destination}
            </Text>
          </Box>
          <Button mt={4} colorScheme="blue" variant="solid" onClick={openModal}>
            Book Hotel
          </Button>
        </Box>
      ))}

      <Modal isOpen={isModalOpen} onClose={closeModal} size="sm">
        <ModalOverlay />
        <ModalContent background={"black"}>
          <ModalHeader color="white">Book Hotel</ModalHeader>

          <ModalBody>
            <FormControl mb={2}>
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
            <Button colorScheme="blue" mr={3}>
              Complete Booking
            </Button>
            <Button variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default HotelList;
