

import React, { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(formData)

    // TODO: Send formData to backend API for booking
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box
        sx={{
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: 'white'
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Book Your Stay
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Check-In"
                name="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Check-Out"
                name="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={handleChange}
                fullWidth
                required
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Number of Guests"
                name="guests"
                type="number"
                value={formData.guests}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default BookingForm
