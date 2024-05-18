import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';  // Assicurati che il percorso sia corretto
import menuData from '../menuData.json';  // Assicurati che il percorso sia corretto

function Pizza() {
    const navigate = useNavigate();  // Ottieni la funzione navigate

    return (
        <Container style={{ marginTop: '20px' }}>
            <Button onClick={() => navigate('/menu')} style={{ marginBottom: '10px' }}>
                Torna al Menù
            </Button>
            <Grid container spacing={4} justifyContent="center">
                {menuData.pizza.map(pizza => (
                    <Grid item key={pizza.id} xs={12} sm={6} md={4}>
                        <ProductCard product={pizza} />
                    </Grid>
                ))}
            </Grid>
            <h2 style={{ marginTop: '30px', textAlign: 'center' }} >le pizze speciali</h2>
            <hr/>
            <br/>
            <Grid container spacing={4} justifyContent="center">
                {menuData.pizzaSpeciale.map(pizzaSpeciale => (
                    <Grid item key={pizzaSpeciale.id} xs={12} sm={6} md={4}>
                        <ProductCard product={pizzaSpeciale} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Pizza;
