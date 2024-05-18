import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Stack, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import welcomeImage from '../image/welcome.jpg';

function Menu() {
    const navigate = useNavigate(); 

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
                <img src={welcomeImage} alt="Descrizione dell'immagine" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
            </Box>
            <Button onClick={() => navigate('/')} style={{ marginBottom: '10px', }}>
                Torna alla Home
            </Button>
            <Stack direction="column" spacing={2}>
                <Button variant="contained" component={Link} to="/pizza" color="inherit">
                    Pizze
                </Button>
                <Button variant="contained" component={Link} to="/antipasti" color="inherit">
                    Antipasti & Taglieri 
                </Button>
                <Button variant="contained" component={Link} to="/sfizi" color="inherit">
                    Gli Sfizi
                </Button>
                <Button variant="contained" component={Link} to="/carni" color="inherit">
                    Le nostre carni 
                </Button>
                <Button variant="contained" component={Link} to="/contorni" color="inherit">
                    I Contorni
                </Button>
                <Button variant="contained" component={Link} to="/insalate" color="inherit">
                    Le Insalatone
                </Button>
                <Button variant="contained" component={Link} to="/panini" color="inherit">
                    I Nostri Panini
                </Button>
                <Button variant="contained" component={Link} to="/tost" color="inherit">
                    I Toast
                </Button>
                <Button variant="contained" component={Link} to="/pizzeClassiche" color="inherit">
                    Le Nostre Pizze Classiche
                </Button>
                <Button variant="contained" component={Link} to="/pizzeSpeciali" color="inherit">
                    Le Nostre Pizze Speciali
                </Button>
            </Stack>
        </Container>
    );
}

export default Menu;
