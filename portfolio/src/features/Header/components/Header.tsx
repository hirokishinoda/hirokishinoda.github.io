import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
    return (
    <header>
        <AppBar position="fixed">
            <Toolbar>{/* content */}</Toolbar>
        </AppBar>
    </header>
    );
};

export default Header;