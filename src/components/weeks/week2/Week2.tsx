// src/components/Week2.tsx

import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    List,
    ListItem,
    ListItemText,
    Typography,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link as RouterLink } from "react-router-dom";
import VerticalLinearStepper from "../../VerticalLinearStepper";

const objectives = [
    {
        id: 'lecture1',
        text: 'Lecture 1: Object-Oriented Programming in Python',
        subObjectives: [
            { id: 'lecture1Content', text: 'Read Lecture 1', route: '/week2/lecture1' },
            { id: 'lecture1Questionnaire', text: 'Complete Questionnaire', route: '/week2/lecture1/questionnaire' },
        ],
    },
    {
        id: 'lecture2',
        text: 'Lecture 2: Advanced Data Structures',
        subObjectives: [
            { id: 'lecture2Content', text: 'Read Lecture 2', route: '/week2/lecture2' },
            { id: 'lecture2Questionnaire', text: 'Complete Questionnaire', route: '/week2/lecture2/questionnaire' },
        ],
    },
    {
        id: 'lecture3',
        text: 'Lecture 3: Algorithms',
        subObjectives: [
            { id: 'lecture3Content', text: 'Read Lecture 3', route: '/week2/lecture3' },
            { id: 'lecture3Questionnaire', text: 'Complete Questionnaire', route: '/week2/lecture3/questionnaire' },
        ],
    },
    {
        id: 'assignment2',
        text: 'Week 2 Assignment',
        subObjectives: [
            { id: 'assignment2Instructions', text: 'Read Assignment Instructions', route: '/week2/assignment/instructions' },
        ],
    },
];

const Week2: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Week 2: Enhanced Planet Generation with OOP
                </Typography>
                <Box sx={{ position: 'fixed', top: '250px', right: '20px', width: '300px', height: '90vh', overflowX: 'hidden' }}>
                    <VerticalLinearStepper objectives={objectives} />
                </Box>
                <Grid container my={4}>
                    <Grid xs={8}>
                        <Typography variant="h4" component="h2" gutterBottom>
                            Objectives
                        </Typography>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Learning Objectives
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Understand the principles of object-oriented programming in Python" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Learn about advanced data structures" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Explore algorithms and their applications" />
                            </ListItem>
                        </List>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Coding Objectives
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Implement classes and objects for planet generation" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Enhance the planet generation logic using advanced data structures" />
                            </ListItem>
                        </List>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Activities
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Lecture:</strong> Explore object-oriented programming, advanced data structures, and algorithms.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Assignment:</strong> Implement classes and objects for planet generation and enhance the logic using advanced data structures.
                        </Typography>
                    </Grid>
                </Grid>
                <Box my={4}>
                    <Divider />
                    <Typography variant="h4" component="h2" gutterBottom my={2}>
                        Lectures
                    </Typography>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        Lecture 1: Object-Oriented Programming in Python
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Learn about classes, objects, inheritance, and polymorphism.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week2/lecture1">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        Lecture 2: Advanced Data Structures
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Understand advanced data structures like trees, graphs, and heaps.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week2/lecture2">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        Lecture 3: Algorithms
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Learn about various algorithms and their applications.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week2/lecture3">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Divider/>
                <Box my={4}>
                    <Divider />
                    <Typography variant="h4" component="h2" gutterBottom my={2}>
                        Assignments
                    </Typography>
                    <Button variant="contained" color="primary" component={RouterLink} to="/week2/assignment/instructions">
                        View Assignment Instructions
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Week2;
