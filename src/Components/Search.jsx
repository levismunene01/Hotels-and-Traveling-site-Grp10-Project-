import { useState, useEffect } from 'react'
import {
  Box,
  TextField,
  Button,
  Card,
 
  CardMedia,
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
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
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
        >
          Search
        </Button>
      </Box>

      <Grid container spacing={3}>
        {searchResults && searchResults.length > 0 && (
          searchResults.map((hotel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={hotel.Picture}
                  alt={hotel.Name}
                />
                </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  )
}

export default Search
