// src/components/weeks/week1/Lecture2.tsx

import React, {useEffect} from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CopyBlock, dracula } from 'react-code-blocks';

const Lecture2: React.FC = () => {
    useEffect(() => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture2'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
    }, []);

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lecture 2: Control Structures in Python
                </Typography>
                <Typography variant="body1" paragraph>
                    In this lecture, we will cover control structures in Python, including conditionals and loops. Control structures are a fundamental aspect of programming, allowing you to control the flow of your code based on conditions and to repeat actions multiple times.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom>
                    Conditionals
                </Typography>
                <Typography variant="body1" paragraph>
                    Conditionals allow you to execute certain pieces of code based on whether a condition is true or false. The basic syntax for conditionals in Python includes <code>if</code>, <code>elif</code> (short for "else if"), and <code>else</code>.
                </Typography>
                <CopyBlock
                    text={`
# Example of conditionals in Python
temperature = 20

if temperature > 30:
    print("It's hot!")
elif temperature < 10:
    print("It's cold!")
else:
    print("It's nice outside!")
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Loops
                </Typography>
                <Typography variant="body1" paragraph>
                    Loops allow you to execute a block of code multiple times. Python supports two main types of loops: <code>for</code> loops and <code>while</code> loops.
                </Typography>

                <Typography variant="h6" component="h3" gutterBottom>
                    For Loops
                </Typography>
                <Typography variant="body1" paragraph>
                    A <code>for</code> loop is used to iterate over a sequence (such as a list, tuple, dictionary, set, or string).
                </Typography>
                <CopyBlock
                    text={`
# Example of a for loop in Python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

for planet in planets:
    print(planet)
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h6" component="h3" gutterBottom>
                    While Loops
                </Typography>
                <Typography variant="body1" paragraph>
                    A <code>while</code> loop is used to execute a block of code as long as a condition is true.
                </Typography>
                <CopyBlock
                    text={`
# Example of a while loop in Python
countdown = 5

while countdown > 0:
    print(countdown)
    countdown -= 1

print("Blast off!")
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Combining Conditionals and Loops
                </Typography>
                <Typography variant="body1" paragraph>
                    You can combine conditionals and loops to perform more complex operations. For example, you might want to iterate over a list of numbers and print only the even ones.
                </Typography>
                <CopyBlock
                    text={`
# Combining conditionals and loops
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
    if number % 2 == 0:
        print(f"{number} is even")
    else:
        print(f"{number} is odd")
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Box mt={4}>
                    <Button variant="contained" color="primary" component={RouterLink} to="/week1/lecture2/questionnaire">
                        Take the Questionnaire
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Lecture2;
