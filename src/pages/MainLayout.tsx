import * as React from 'react';
import { Box } from '@mui/material';
import Loading from 'components/Loading';
import 'css/mainLayout.scss';

type Props = {
    children: React.ReactElement;
    loading: boolean;
};

const MainLayout = ({ children, loading }: Props) => {
    React.useEffect(() => {}, [loading]);

    return (
        <>
            {loading && <Loading />}
            <Box className="mainLayout">{children}</Box>
        </>
    );
};

export default MainLayout;
