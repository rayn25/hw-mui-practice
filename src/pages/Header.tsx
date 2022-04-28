import * as React from 'react';
import { AppBar, Button, Toolbar, Typography, Avatar, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const whiteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fffeff',
        },
    },
});

export default function Header() {
    return (
        <ThemeProvider theme={whiteTheme}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <img alt="logo" src={require('images/logo.png')} />
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {window.location.hostname}
                    </Typography>
                    <Button color="inherit">Docs</Button>
                    <Button color="inherit">Help</Button>
                    <Avatar color="inherit" sx={{ marginLeft: '8px' }}></Avatar>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
