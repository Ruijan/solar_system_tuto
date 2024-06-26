// src/components/weeks/week1/Exercise1.tsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { CopyBlock, dracula } from 'react-code-blocks';

const Exercise1: React.FC = () => {
    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Exercise 1: Create the `generate_planet` Function
            </Typography>
            <Typography variant="body1" paragraph>
                In this exercise, you will define a function called `generate_planet` that creates a planet with random attributes (e.g., name, size, color, orbit distance, and orbital period).
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. Create a new Python file called `planet_generation.py`." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2. Define the `generate_planet` function." />
                </ListItem>
            </List>
            <Typography variant="h6" component="h3" gutterBottom>
                Template Code
            </Typography>
            <CopyBlock
                text={`
import random

def generate_planet():
    # Define attributes such as name, size, color, orbit distance, and orbital period
    # Use random to generate these attributes
    pass
                `}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Use the `random` module to generate random attributes for the planet. For example, you can use `random.randint` for integers and `random.choice` for selecting random elements from a list.
            </Typography>
        </Box>
    );
};

export default Exercise1;
