import json
import os
from math import sqrt, pi

# Assuming the functions are implemented in a module named solar_system.py
# from solar_system import generate_planet, generate_star, save_solar_system, load_solar_system, compute_velocity, compute_star_mass, compute_orbit

G = 6.67430e-11  # gravitational constant

# Dummy functions for demonstration
def generate_planet():
    return {
        "name": "Earth",
        "type": "rocky",
        "diameter": 12742,
        "mass": 5.972e24,
        "distance_from_star": 1.496e11,
        "orbital_period": 365.25,
        "composition": "iron, silicates"
    }

def generate_star():
    return {
        "name": "Sun",
        "mass": 1.989e30,
        "luminosity": 3.828e26,
        "radius": 696340,
        "temperature": 5778
    }

def save_solar_system(solar_system, filename):
    with open(filename, 'w') as file:
        json.dump(solar_system, file)

def load_solar_system(filename):
    with open(filename, 'r') as file:
        return json.load(file)

def compute_velocity(distance, star_mass):
    return sqrt(G * star_mass / distance)

def compute_star_mass(distance, period):
    return (4 * pi**2 * distance**3) / (G * period**2)

def compute_orbit(velocity, star_mass):
    return G * star_mass / velocity**2
