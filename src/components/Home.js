import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export const Home = () => {
  const myStyle={
    backgroundImage: `url(https://www.ppt-backgrounds.net/thumbs/abstract-education-art-templates.jpg)`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:650,
  }
  return (
    <div  style={myStyle} >
      <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{marginTop:10}} variant="h2">Welcome to Book Store</Typography>
        <Button LinkComponent={Link} to="/books"  sx={{marginTop:15, background:"orangered" }} variant="contained">
          <Typography variant='h3'>See all Books</Typography>
        </Button>
      </Box>
    </div>
  )
}