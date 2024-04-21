import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import logoImage from '../image/logo.jpg';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = React.useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    return (
        <AppBar position="static" sx={{ 
            backgroundColor: '#000000', 
            color: 'white'
        }}>
            <Toolbar>
                <IconButton
                    edge="start"
                    sx={{ color: 'white' }}
                    aria-label="menu"
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={logoImage} alt="Logo" style={{ maxHeight: '80px' }} />
                </Box>
                <Box>
                    <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer">
                        <IconButton sx={{ color: 'white' }} aria-label="facebook">
                            <FacebookIcon />
                        </IconButton>
                    </a>
                    <a href="https://www.instagram.com/yourinstagramhandle" target="_blank" rel="noopener noreferrer">
                        <IconButton sx={{ color: 'white' }} aria-label="instagram">
                            <InstagramIcon />
                        </IconButton>
                    </a>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            color: 'inherit',
                            backgroundColor: '#e0e0e0'
                        }
                    }}
                >
                    <MenuItem onClick={handleClose} component={Link} to="/" sx={{ color: 'black' }}>Home</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/pizza" sx={{ color: 'black' }}>Pizze</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/fritti" sx={{ color: 'black' }}>Fritti</MenuItem>
                    <MenuItem onClick={handleClose} component={Link} to="/bevande" sx={{ color: 'black' }}>Bevande</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
