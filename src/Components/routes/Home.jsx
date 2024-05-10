import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from "../Header";
import Filter from "../Filter";
import Search from "../Search";
import HotelList from "../HotelList";
import Footer from "../Footer";



function Home() {
  return (
    <div>
       
    <Grid
      templateAreas={`"header"
                      "hotellist"
                      "footer"`}
      templateRows={'auto 1fr auto'}
      h='100vh'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
      <GridItem bg='orange.300' area={'header'}>
        <Header />
      </GridItem>
      <GridItem bg='pink.300' area={'hotellist'}>
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
