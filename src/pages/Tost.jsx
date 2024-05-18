import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';  // Assicurati che il percorso sia corretto
import menuData from '../menuData.json';  // Assicurati che il percorso sia corretto

function Tost() {
    const navigate = useNavigate();  // Ottieni la funzione navigate

    return (
        <Container style={{ marginTop: '20px' }}>
            <Button onClick={() => navigate('/menu')} style={{ marginBottom: '10px' }}>
                Torna al Menù
            </Button>
            <Grid container spacing={4} justifyContent="center">
                {menuData.tost.map(tost => (
                    <Grid item key={tost.id} xs={12} sm={6} md={4}>
                        <ProductCard product={tost} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Tost;
