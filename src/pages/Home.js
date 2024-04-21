import React from 'react';
import { Button, Stack, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import welcomeImage from '../image/welcome.jpg';  // Assicurati che il percorso sia corretto
import { grey } from '@mui/material/colors';

const colorG = grey[900];


function Home() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <img src={welcomeImage} alt="Descrizione dell'immagine" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
            </Box>
            <Stack direction="column" spacing={2}>
                <Button variant="contained" component={Link} to="/pizza" color="inherit">
                    Pizze
                </Button>
                <Button variant="contained" component={Link} to="/fritti" color="inherit">
                    Fritti
                </Button>
                <Button variant="contained" component={Link} to="/bevande" color="inherit">
                    Bevande
                </Button>
            </Stack>
        </Container>
    );
}

export default Home;
