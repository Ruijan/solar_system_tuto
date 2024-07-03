import {Container, Typography, Box, Button} from '@mui/material';
import {CopyBlock, dracula} from "react-code-blocks";
import React, {useEffect} from "react";
import { Link as RouterLink } from 'react-router-dom';


export function Lecture1() {
    useEffect(() => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture1'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
    }, []);

    return <Container maxWidth="md">
        <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
                Lecture: Variables in Python
            </Typography>
            <Typography variant="body1" paragraph>
                In Python, a variable is a reserved memory location to store values. In other words, a variable in a
                python
                program gives data to the computer for processing. Python variables do not need explicit declaration to
                reserve memory space.
            </Typography>
            <Typography variant="h6" component="h3" gutterBottom>
                Types of Variables:
            </Typography>
            <Typography variant="body1" paragraph>
                1. **Integer:** Used to represent whole numbers.
            </Typography>
            <CopyBlock
                text={`# Integer variable\nx = 5\nprint(x)  # Output: 5`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                2. **Float:** Used to represent real numbers with a fractional part.
            </Typography>
            <CopyBlock
                text={`# Float variable\ny = 3.14\nprint(y)  # Output: 3.14`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                3. **String:** Used to represent text.
            </Typography>
            <CopyBlock
                text={`# String variable\nname = "Alice"\nprint(name)  # Output: Alice`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                4. **Boolean:** Used to represent True or False values.
            </Typography>
            <CopyBlock
                text={`# Boolean variable\nis_student = True\nprint(is_student)  # Output: True`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Variables can be used in expressions and can be reassigned:
            </Typography>
            <CopyBlock
                text={`# Variable usage\nx = 10\ny = 5\nz = x + y\nprint(z)  # Output: 15\n\n# Reassigning variables\nx = 7\nprint(x)  # Output: 7`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Typography variant="body1" paragraph>
                Python is dynamically typed, which means you can change the type of the variable by assigning a value of
                another type:
            </Typography>
            <CopyBlock
                text={`# Dynamic typing\nx = 5       # x is an integer\nx = "Hello" # Now x is a string\nprint(x)   # Output: Hello`}
                language="python"
                theme={dracula}
                codeBlock
            />
            <Box mt={4}>
                <Button variant="contained" color="primary" component={RouterLink} to="/week1/lecture1/questionnaire">
                    Take the Questionnaire
                </Button>
            </Box>
        </Box>
    </Container>;
}

export default Lecture1;
