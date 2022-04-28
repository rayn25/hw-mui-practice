import * as React from 'react';
import { Box } from '@mui/material';
import MainLayout from './MainLayout';

const Dashboard = () => {
    const [loading, setLoading] = React.useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <MainLayout loading={loading}>
            <Box>
                <h1>Dashboard</h1>
            </Box>
        </MainLayout>
    );
};

export default Dashboard;
