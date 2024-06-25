// src/components/Week1.tsx

import React, {useEffect, useState} from 'react';
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
import TableOfContents from "../../TableOfContents";
import Grid from '@mui/material/Grid';
import {Link as RouterLink} from "react-router-dom";
import VerticalLinearStepper from "../../VerticalLinearStepper"; // Grid version 1


const Week1: React.FC = () => {
    const [steps, setSteps] = useState<{ id: string; text: string; subSteps?: { id: string; text: string }[] }[]>([]);

    useEffect(() => {
        const headingElements = Array.from(document.querySelectorAll('h2, h3'));
        const newSteps: { id: string; text: string; subSteps?: { id: string; text: string }[] }[] = [];

        headingElements.forEach((heading) => {
            const element = heading as HTMLElement;
            if (element.tagName.toLowerCase() === 'h2') {
                newSteps.push({
                    id: element.id || element.innerText.replace(/\s+/g, '-').toLowerCase(),
                    text: element.innerText,
                    subSteps: [],
                });
            } else if (element.tagName.toLowerCase() === 'h3' && newSteps.length > 0) {
                newSteps[newSteps.length - 1].subSteps?.push({
                    id: element.id || element.innerText.replace(/\s+/g, '-').toLowerCase(),
                    text: element.innerText,
                });
            }
        });

        headingElements.forEach((heading) => {
            const element = heading as HTMLElement;
            element.id = element.innerText.replace(/\s+/g, '-').toLowerCase();
        });

        setSteps(newSteps);
    }, []);


    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Week 1: Refresher on Basics and Simple Planet Generation
                </Typography>
                <Box sx={{ position: 'fixed', top: '20px', right: '20px', width: '300px', height: '90vh', overflowX: 'hidden' }}>
                    <VerticalLinearStepper steps={steps} />
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
                                <ListItemText
                                    primary="Review Python basics: variables, data types, and basic operations"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Control structures: conditionals and loops"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Basic data structures: lists and dictionaries"/>
                            </ListItem>
                        </List>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Coding Objectives
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Implement basic procedural planet generation"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Create a list of planets with random attributes"/>
                            </ListItem>
                        </List>
                        <Typography variant="h6" component="h3" gutterBottom>
                            Activities
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Lecture:</strong> Review of Python basics, conditionals, loops, and data structures.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Assignment:</strong> Create a list of planets with randomly generated attributes and
                            print their details.
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
                                        Lecture 1: Variables in Python
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Learn about different types of variables in Python.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week/1/lecture/1">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        Lecture 2: Control Structures
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Understand conditionals and loops in Python.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week/1/lecture/2">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        Lecture 3: Data Structures
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Learn about lists and dictionaries in Python.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={RouterLink} to="/week/1/lecture/3">
                                        Go to Lecture
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box my={4}>
                    <Divider />
                    <Typography variant="h4" component="h2" gutterBottom my={2}>
                        Assignments
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Week1;
