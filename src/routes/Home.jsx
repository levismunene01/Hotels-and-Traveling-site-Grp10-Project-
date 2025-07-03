// import Filter from "../Components/Filter"
import Search from "../Components/Search"
import HotelList from "../Components/HotelList"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

import { Box } from "@chakra-ui/react"

function Home() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      bg="gray.50"
    >
      <Box as="header" w="100%" bg="orange.300">
        <Header />
      </Box>

      <Box
        as="main"
        flex="1"
        bg="pink.300"
        mt={{ base: 2, md: 4 }}
        px={{ base: 2, md: 8 }}
        py={{ base: 4, md: 8 }}
      >
        {/* Uncomment when Filter is ready */}
        {/* <Filter /> */}

        <Search />
        <HotelList />
      </Box>

      <Box as="footer" w="100%" bg="blue.300">
        <Footer />
      </Box>
    </Box>
  )
}

export default Home
