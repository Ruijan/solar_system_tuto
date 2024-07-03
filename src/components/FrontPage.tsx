// src/components/FrontPage.tsx

import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WeekCard from "./WeekCard";


const FrontPage: React.FC = () => {
    let week1Item = {
        title: 'Week 1: Refresher on Basics',
        description: 'Review Python basics, control structures, and basic data structures. Implement a basic procedural planet generation.',
        link: '/week1',
        buttonName: 'Go to Week 1'
    }
    let week2Item = {
        title: 'Week 2: Object-Oriented Programming',
        description: 'Learn the basics of object-oriented programming in Python. Implement a class-based planet generation.',
        link: '/week2',
        buttonName: 'Go to Week 2'
    }
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
                    <WeekCard item={week1Item}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <WeekCard item={week2Item}/>
                </Grid>
            </Grid>


        </Container>
    );
};

export default FrontPage;
