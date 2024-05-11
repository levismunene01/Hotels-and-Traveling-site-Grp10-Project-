import Filter from "../Components/Filter"
import Search from "../Components/Search"
import HotelList from "../Components/HotelList"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

import { Grid, GridItem, Box } from "@chakra-ui/react";




function Home() {
  return (
    <div>
       
    <Grid
      templateAreas={`"header"
                      "content"
                      "footer"`}
      gap={4}
      justifyContent="center"
    >
      <GridItem bg='orange.300' area={'header'}>
        <Header />
      </GridItem>

      <GridItem bg='pink.300' area={'content'}>
        <Box mt={8}>
          <Filter />
          <Search />
          <HotelList />
        </Box>
      </GridItem>

      <GridItem bg='blue.300' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  
      
    </div>
  )
}

export default Home
