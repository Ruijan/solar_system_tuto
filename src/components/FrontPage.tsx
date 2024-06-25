// src/components/FrontPage.tsx

import React from 'react';
import { Container, Typography, Button, Box, CardActions, Card, CardContent, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Week1Card from "./weeks/week1/Week1Card";


const FrontPage: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box textAlign="center" my={4}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Solar System Simulation Tutorial
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    Learn Python Programming by Building a Solar System Simulation
                </Typography>
                <Typography variant="body1" paragraph>
                    This tutorial will guide you through the process of creating a functional solar system simulation. You will learn the basics of programming in Python, implement core simulation functionalities, and eventually add a graphical interface.
                </Typography>
                <Button variant="contained" color="primary" size="large" component={RouterLink} to="/week1">
                    Get Started
                </Button>
            </Box>
            <Typography variant="h4" component="h2" gutterBottom>
                Weekly Content
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Week1Card />
                </Grid>
            </Grid>


        </Container>
    );
};

export default FrontPage;
