import React from 'react';
import { Button, Stack, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import welcomeImage from '../image/welcome.jpg';

function Home() {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <img src={welcomeImage} alt="Descrizione dell'immagine" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
            </Box>
            <Stack direction="column" spacing={2}>
                <Button variant="contained" component={Link} to="/menu" color="inherit">
                    Menu
                </Button>
                <Button variant="contained" component={Link} to="/vini" color="inherit">
                    Carta Dei Vini
                </Button>
                <Button variant="contained" component={Link} to="/bevande" color="inherit">
                    Bevande
                </Button>
                <Button variant="contained" component={Link} to="/altro" color="inherit">
                    altro
                </Button>
            </Stack>
        </Container>
    );
}

export default Home;
