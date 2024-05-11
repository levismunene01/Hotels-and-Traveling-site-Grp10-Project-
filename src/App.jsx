import { Grid, GridItem, Box } from "@chakra-ui/react";
import Header from './Components/Header';
import HotelList from './Components/HotelList';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Filter from './Components/Filter';




function App() {
  return (
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
  );
}

export default App;
