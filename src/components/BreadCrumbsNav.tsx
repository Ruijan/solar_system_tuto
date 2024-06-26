// src/components/BreadcrumbsNav.tsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {Breadcrumbs, Typography, Button, Box, styled} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = styled(Button)({
    position: 'fixed',
    top: 16,
    left: 16,
    zIndex: 1000,
});

const BreadcrumbsNav: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Box display="flex" alignItems="center" mb={2}>
            <BackButton
                startIcon={<ArrowBackIcon fontSize={"large"}/>}
                onClick={() => window.history.back()}
                sx={{ mr: 2 }}
                size={"large"}
            />
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <Typography color="text.primary" key={to}>
                            {value}
                        </Typography>
                    ) : (
                        <Link to={to} key={to}>
                            {value}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </Box>
    );
};

export default BreadcrumbsNav;
