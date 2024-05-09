import { Grid, GridItem,  } from "@chakra-ui/react";
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
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
     
      <GridItem bg='blue.300' area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default App;
