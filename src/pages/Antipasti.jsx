import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';  // Verifica il percorso
import menuData from '../menuData.json';  // Verifica il percorso

function Antipasti() {
    const navigate = useNavigate();  // Ottieni la funzione navigate

    return (
        <Container style={{ marginTop: '20px' }}>
            <Button onClick={() => navigate('/menu')} style={{ marginBottom: '10px' }}>
                Torna al Menù
            </Button>
            <Grid container spacing={4} justifyContent="center">
                {menuData.antipasti.map(antipasti => (
                    <Grid item key={antipasti.id} xs={12} sm={6} md={4}>
                        <ProductCard product={antipasti} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Antipasti;
