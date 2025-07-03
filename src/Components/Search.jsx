import { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid
} from '@mui/material'

function Search() {
  const [destination, setDestination] = useState('')
  const [allHotels, setAllHotels] = useState([])
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    fetchHotelData()
  }, [])

  const fetchHotelData = async () => {
    try {
      const response = await fetch('https://hotels-gicm.onrender.com/todo')
      if (!response.ok) {
        throw new Error('Failed to fetch hotel data')
      }
      const data = await response.json()
      setAllHotels(data.hotels)
      setSearchResults(data.hotels)
    } catch (error) {
      console.error('Error fetching hotel data:', error)
    }
  }

  const handleSearch = () => {
    const formattedDestination =
      destination.charAt(0).toUpperCase() + destination.slice(1)
    const filteredHotels = allHotels.filter(
      hotel => hotel.destination === formattedDestination
    )
    setSearchResults(filteredHotels)
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
        <TextField
          label="Enter destination"
          variant="outlined"
          fullWidth
          value={destination}
          onChange={e => setDestination(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          Search
        </Button>
      </Box>

      <Grid container spacing={3}>
        {searchResults && searchResults.length > 0 && (
          searchResults.map((hotel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={hotel.Picture}
                  alt={hotel.Name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {hotel.Name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Destination: {hotel.Destination}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price Per Night: ${hotel.PricePernight}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating: {hotel.Rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amenities: {hotel.Amenities?.join(', ')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default Search
