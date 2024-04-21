import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
    return (
        <Card raised>
            <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body1">
                    Prezzo: €{product.price}
                </Typography>
                {/* Bottone Acquista rimosso */}
            </CardContent>
        </Card>
    );
}


export default ProductCard;
