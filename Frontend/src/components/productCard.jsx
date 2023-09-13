import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Your Desired Font, sans-serif', // Replace 'Your Desired Font' with the actual font you want to use
  },
});

export default function ProductCard() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          maxWidth: '22.5vw',
          position: 'relative',
          borderRadius: '5px',
          overflow: 'hidden',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      >
        {/* Background image container */}
        <div
          style={{
            backgroundImage: 'url("https://s3.envato.com/files/235229666/101417%20(3).jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height:'100%',
            paddingTop: '75%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
        <Box sx={{ my: '1rem', mx: '2%' }}>
          <Grid container sx={{ marginTop: '1rem' }}>
            <Grid item xs>
              <Stack direction="row" spacing="1vw">
                <img
                  src="https://clipground.com/images/square-clipart-image-9.png"
                  height="60px"
                  alt="test img here"
                  style={{ marginTop: '1vw' }}
                />
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '2vw',marginLeft:'0.5vw', fontSize: '1.5vw',backgroundColor:'black' }} sx={{ mt: '1.125rem', width: '100%', whiteSpace: 'nowrap' }}>
                  INTEL-I510900K
                </Typography>
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '2vw',marginLeft:'0.5vw', fontSize: '1.5vw' }} sx={{ mt: '1.125rem', width: '100%', whiteSpace: 'nowrap' }}>
                  $134.50
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Typography color="white" variant="body2" sx={{ mt: '1.5rem' }}>
            <List>
              <ListItem>
                <Stack direction="row" spacing="1vw">
                  <Typography gutterBottom variant="body2" component="div">
                    Sub feature 1
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Sub feature 2
                  </Typography>
                </Stack>
              </ListItem>
              <ListItem>
                <Stack direction="row" spacing="1vw">
                  <Typography gutterBottom variant="body2" component="div">
                    Sub feature 3
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    Sub feature 4
                  </Typography>
                </Stack>
              </ListItem>
              <ListItem></ListItem>
            </List>
          </Typography>
        </Box>
        <Divider variant="middle" color="white" />
        <Box sx={{ m: '2%' }}>
          <Typography gutterBottom variant="body1">
            Key features are
          </Typography>
          <Stack direction="row" spacing="1vw">
            <Chip label="Subtype1" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem' }} />
            <Chip color="primary" label="Subtype 2" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem' }} />
            <Chip label="Medium" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem' }} />
            <Chip label="Hard" sx={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '1rem' }} />
          </Stack>
        </Box>
        <Box sx={{ mt: '1rem', ml: '1%', mb: '1%' }}>
          <Button sx={{ backgroundColor: '#6600CC', color: 'white', borderRadius: '10px', fontSize: '1rem' }}>Add to cart</Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
