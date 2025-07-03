import { Box, Grid, Link, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 4,
        mt: 4
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <Link href="/about" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
            <Link href="/terms" underline="hover" color="inherit">
              Terms of Service
            </Link>
            <Link href="/privacy" underline="hover" color="inherit">
              Privacy Statement
            </Link>
            <Link href="/blog" underline="hover" color="inherit">
              Blog
            </Link>
            <Link href="/support" underline="hover" color="inherit">
              Support
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} QuickSafe Tours & Hotels. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
