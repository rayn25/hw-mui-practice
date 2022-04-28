import * as React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';

const Error404 = () => {
    return (
        <Paper
            sx={{
                backgroundColor: (t) => t.palette.background.default,
                margin: 0,
                height: `calc(100vh)`,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: `100%`,
                }}
            >
                <Typography variant="h4">404</Typography>
                <Typography variant="subtitle1">page_not_found</Typography>
                <Button color="secondary" aria-label="home" href="/" style={{ marginTop: 20 }}>
                    <Home />
                </Button>
            </div>
        </Paper>
    );
};

export default Error404;
