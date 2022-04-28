import * as React from 'react';
import Typography from '@mui/material/Typography';

interface titleProps {
    title: string;
    subTitle: string;
}

export default function Title({ title, subTitle }: titleProps) {
    return (
        <>
            <Typography variant="h3" color="inherit">
                {title}
            </Typography>
            <Typography variant="h6" color="inherit">
                {subTitle}
            </Typography>
            <hr />
        </>
    );
}
