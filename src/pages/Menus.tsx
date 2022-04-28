import * as React from 'react';
import { Box, Button } from '@mui/material';
import 'css/menus.scss';

const Menus = () => {
    return (
        <Box className="menus">
            <Button className="btn" color="inherit" href="/dashboard">
                Dashboard
            </Button>
            <Button className="btn" color="inherit" href="/users">
                Users
            </Button>
            <Button className="btn" color="inherit" href="/projects">
                Projects
            </Button>
            <Button className="btn" color="inherit" href="/settings">
                Settings
            </Button>
            <hr />
        </Box>
    );
};

export default Menus;
