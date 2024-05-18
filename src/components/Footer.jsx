import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    © BACCO
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    ristorante pizza 
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    Via Indirizzo, 123 - 00100 Città, Paese
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
