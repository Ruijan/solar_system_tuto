// src/components/weeks/week1/Lecture3.tsx

import React, {useEffect} from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CopyBlock, dracula } from 'react-code-blocks';

const Lecture3: React.FC = () => {
    useEffect(() => {
        const completionStatus = JSON.parse(localStorage.getItem('completionStatus') || '{}');
        completionStatus['lecture3'] = true;
        localStorage.setItem('completionStatus', JSON.stringify(completionStatus));
    }, []);
    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Lecture 3: Data Structures in Python
                </Typography>
                <Typography variant="body1" paragraph>
                    In this lecture, we will explore data structures in Python, such as lists and dictionaries. These structures are crucial for organizing and managing data in a program.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom>
                    Lists
                </Typography>
                <Typography variant="body1" paragraph>
                    A list is a collection of items that can be of any type. Lists are ordered and changeable, and they allow duplicate members.
                </Typography>
                <CopyBlock
                    text={`
# Creating a list
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
print(planets)
# Output: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

# Accessing elements
print(planets[0])  # Output: Mercury
print(planets[-1])  # Output: Neptune

# Adding elements
planets.append("Pluto")
print(planets)  # Output: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto']

# Removing elements
planets.remove("Pluto")
print(planets)  # Output: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Dictionaries
                </Typography>
                <Typography variant="body1" paragraph>
                    A dictionary is a collection of key-value pairs. Dictionaries are unordered, changeable, and do not allow duplicates.
                </Typography>
                <CopyBlock
                    text={`
# Creating a dictionary
planet_moons = {
    "Mercury": 0,
    "Venus": 0,
    "Earth": 1,
    "Mars": 2,
    "Jupiter": 79,
    "Saturn": 83,
    "Uranus": 27,
    "Neptune": 14
}
print(planet_moons)
# Output: {'Mercury': 0, 'Venus': 0, 'Earth': 1, 'Mars': 2, 'Jupiter': 79, 'Saturn': 83, 'Uranus': 27, 'Neptune': 14}

# Accessing values
print(planet_moons["Earth"])  # Output: 1

# Adding key-value pairs
planet_moons["Pluto"] = 5
print(planet_moons)  # Output: {'Mercury': 0, 'Venus': 0, 'Earth': 1, 'Mars': 2, 'Jupiter': 79, 'Saturn': 83, 'Uranus': 27, 'Neptune': 14, 'Pluto': 5}

# Removing key-value pairs
del planet_moons["Pluto"]
print(planet_moons)  # Output: {'Mercury': 0, 'Venus': 0, 'Earth': 1, 'Mars': 2, 'Jupiter': 79, 'Saturn': 83, 'Uranus': 27, 'Neptune': 14}
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Nested Data Structures
                </Typography>
                <Typography variant="body1" paragraph>
                    You can nest data structures within each other. For example, a list can contain dictionaries, and a dictionary can contain lists.
                </Typography>
                <CopyBlock
                    text={`
# Nested data structures
solar_system = {
    "Mercury": [],
    "Venus": [],
    "Earth": ["Moon"],
    "Mars": ["Phobos", "Deimos"],
    "Jupiter": ["Io", "Europa", "Ganymede", "Callisto"],
    "Saturn": ["Titan", "Enceladus", "Mimas", "Dione"],
    "Uranus": ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    "Neptune": ["Triton", "Nereid"]
}

for planet, moons in solar_system.items():
    print(f"Planet: {planet}")
    for moon in moons:
        print(f" - Moon: {moon}")
          `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Box mt={4}>
                    <Button variant="contained" color="primary" component={RouterLink} to="/week1/lecture3/questionnaire">
                        Take the Questionnaire
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Lecture3;
