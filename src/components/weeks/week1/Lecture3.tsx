// src/components/weeks/week1/Lecture3.tsx

import React, { useEffect } from 'react';
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
                    In this lecture, we will explore data structures in Python, such as lists, dictionaries, sets, and tuples. These structures are crucial for organizing and managing data in a program. They allow you to store collections of related data and provide various ways to access and manipulate these collections.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom>
                    Lists
                </Typography>
                <Typography variant="body1" paragraph>
                    A list is a collection of items that can be of any type. Lists are ordered, meaning that the items have a defined order, and you can access elements by their position in the list. Lists are changeable, allowing you to add, remove, or modify elements. They also allow duplicate members, so the same value can appear multiple times. Lists are very versatile and can be used to store related items such as a collection of planet names.
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
                    A dictionary is a collection of key-value pairs. Each key is unique, and it is associated with a value. Dictionaries are unordered, meaning that the items do not have a defined order, but you can access elements by their keys. Dictionaries are changeable, so you can add, remove, or modify key-value pairs. They are very useful for storing data that can be associated with unique keys, such as the number of moons each planet has.
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
                    Sets
                </Typography>
                <Typography variant="body1" paragraph>
                    A set is a collection of unique items. Sets are unordered, meaning that the items do not have a defined order, and you cannot access elements by their position. Sets are changeable, allowing you to add or remove elements. They are particularly useful for storing collections of unique items, such as a list of unique planet names without duplicates.
                </Typography>
                <CopyBlock
                    text={`
# Creating a set
unique_planets = {"Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"}
print(unique_planets)
# Output: {'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'}

# Adding elements
unique_planets.add("Pluto")
print(unique_planets)  # Output: {'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'}

# Removing elements
unique_planets.remove("Pluto")
print(unique_planets)  # Output: {'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'}
                    `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Tuples
                </Typography>
                <Typography variant="body1" paragraph>
                    A tuple is a collection of items that can be of any type. Tuples are ordered and unchangeable, meaning that once a tuple is created, you cannot add, remove, or modify elements. Tuples allow duplicate members. They are useful for storing related items that should not change, such as coordinates or RGB color values.
                </Typography>
                <CopyBlock
                    text={`
# Creating a tuple
planet_position = ("Earth", 3)
print(planet_position)
# Output: ('Earth', 3)

# Accessing elements
print(planet_position[0])  # Output: Earth
print(planet_position[1])  # Output: 3
                    `}
                    language="python"
                    theme={dracula}
                    codeBlock
                />

                <Typography variant="h5" component="h2" gutterBottom>
                    Nested Data Structures
                </Typography>
                <Typography variant="body1" paragraph>
                    You can nest data structures within each other to create complex data models. For example, a list can contain dictionaries, and a dictionary can contain lists. This allows you to represent more complex relationships. For instance, you might use a dictionary to represent a solar system, where each key is a planet and the value is a list of its moons.
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

                <Typography variant="h5" component="h2" gutterBottom>
                    Nested Dictionaries
                </Typography>
                <Typography variant="body1" paragraph>
                    Nested dictionaries are dictionaries within dictionaries. This structure allows you to store more complex data relationships. For example, you might have a dictionary where each key is a planet, and the value is another dictionary containing attributes about that planet.
                </Typography>
                <CopyBlock
                    text={`
# Nested dictionaries
solar_system = {
    "Mercury": {"moons": 0, "orbit": 0.39},
    "Venus": {"moons": 0, "orbit": 0.72},
    "Earth": {"moons": 1, "orbit": 1.00, "details": {"mass": 5.97, "radius": 6371}},
    "Mars": {"moons": 2, "orbit": 1.52},
    "Jupiter": {"moons": 79, "orbit": 5.20},
    "Saturn": {"moons": 83, "orbit": 9.58},
    "Uranus": {"moons": 27, "orbit": 19.22},
    "Neptune": {"moons": 14, "orbit": 30.05}
}

for planet, attributes in solar_system.items():
    print(f"Planet: {planet}")
    for attribute, value in attributes.items():
        print(f" - {attribute}: {value}")
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
