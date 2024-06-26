// src/components/weeks/week1/Exercise1.tsx
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Collapse, Button } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';


import { CopyBlock, dracula } from 'react-code-blocks';

const Exercise1: React.FC = () => {
    const [showTip1, setShowTip1] = React.useState(false);
    const [showTip2, setShowTip2] = React.useState(false);

    return (
        <Box my={4}>
            <Typography variant="h5" component="h2" gutterBottom>
                Exercise 1: Understanding the Random Module
            </Typography>
            <Typography variant="body1" paragraph>
                In this exercise, you will learn about the `random` module in Python and use it to create a function that generates random planet names.
            </Typography>
            <Typography variant="body1" paragraph>
                The `random` module is a built-in module in Python that allows you to generate random numbers. You can use it to create random values for different types of data.
            </Typography>
            <Typography variant="body1" paragraph>
                Here are some useful functions from the `random` module:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="1. `random.random()` - Returns a random float between 0.0 and 1.0." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="2. `random.randint(a, b)` - Returns a random integer between `a` and `b` (inclusive)." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="3. `random.choice(seq)` - Returns a random element from the non-empty sequence `seq`." />
                </ListItem>
                <ListItem>
                    <ListItemText primary="4. `random.uniform(a, b)` - Returns a random float between `a` and `b`." />
                </ListItem>
            </List>
            <Typography variant="body1" paragraph>
                Let's see an example of how to use the `random` module to generate a random planet name:
            </Typography>
            <CopyBlock
                text={`import random

def generate_planet_name():
    names = ["jupiter", "mars", "venus", "earth", "saturn", "neptune", "uranus", "pluto"]
    return random.choice(names)

# Example usage
print(generate_planet_name())`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Your task is to create a function called `generate_planet_name` that uses the `random` module to generate random planet names. This function should return a string.
                It should be able to generate more than <strong>1000 unique planet names</strong>. It should always start with a capital letter and have a length between 5 and 10 characters.
                Obvious names like "Earth" or "Mars" should not be generated and you should not create an array of all possible planet names.
            </Typography>
            <Typography variant="body1" paragraph>
                Ensure you return the generated name at the end of your function.
            </Typography>
            <Typography variant="body1" paragraph>
                Once you have implemented the function, you can run the unit tests to verify its correctness. Open a terminal in your project's root directory and run the following command:
            </Typography>
            <CopyBlock
                text={`python -m unittest discover -s tests -p 'test_planet_generation.py'`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="h6" component="h3" gutterBottom>
                Template Code
            </Typography>
            <CopyBlock
                text={`import random

def generate_planet_name():
    # Use random to generate a random planet name
    pass`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="h6" component="h3" gutterBottom>
                Tips
            </Typography>

            <Button onClick={() => setShowTip1(!showTip1)} startIcon={<LightbulbIcon />}>
                {showTip1 ? 'Hide Tip 1' : 'Show Tip 1'}
            </Button>
            <Collapse in={showTip1}>
                <Box p={2} bgcolor="#d5f5e3" borderRadius={4}>
                    <Typography variant="body1" paragraph display="flex" alignItems="center">
                        <LightbulbIcon style={{ marginRight: 8 }} /> Tip 1: Think about how words are usually composed. For example, you can create a prefix and a suffix list and combine them to form names.
                    </Typography>
                </Box>
            </Collapse>

            <Button onClick={() => setShowTip2(!showTip2)} startIcon={<LightbulbIcon />}>
                {showTip2 ? 'Hide Tip 2' : 'Show Tip 2'}
            </Button>
            <Collapse in={showTip2}>
                <Box p={2} bgcolor="#d5f5e3" borderRadius={4}>
                    <Typography variant="body1" paragraph display="flex" alignItems="center">
                        <LightbulbIcon style={{ marginRight: 8 }} /> Tip 2: You can use `random.choice` multiple times to pick different parts of the name.
                    </Typography>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Exercise1;
