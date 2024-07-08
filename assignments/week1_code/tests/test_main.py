# test_planet_generation.py

import unittest
from src.main import generate_planet, generate_solar_system, generate_planet_name

class TestPlanetGeneration(unittest.TestCase):

    def test_generate_planet_name(self):
        name = generate_planet_name()
        self.assertIsInstance(name, str, "The generated planet name should be a string")
        # Check if the name is not empty
        self.assertTrue(name, "The generated planet name should not be empty")
        # Check if the name is capitalized
        self.assertEqual(name, name.capitalize(), "The generated planet name should be capitalized")


    def test_generate_planet(self):
        planet = generate_planet()

        # Check if the generated planet is a dictionary
        self.assertIsInstance(planet, dict, "The generated planet should be a dictionary")

        # Check if the planet has all required keys
        required_keys = ["name", "size", "color", "orbit_distance", "orbital_period"]
        for key in required_keys:
            self.assertIn(key, planet, f"The planet should have the key '{key}'")

        # Check if the values have the correct types
        self.assertIsInstance(planet["name"], str, "The planet name should be a string")
        self.assertIsInstance(planet["size"], float, "The planet size should be a float")
        self.assertIsInstance(planet["color"], str, "The planet color should be a string")
        self.assertIsInstance(planet["orbit_distance"], float, "The planet orbit distance should be a float")
        self.assertIsInstance(planet["orbital_period"], float, "The planet orbital period should be a float")
        # check if float values are positive
        self.assertGreater(planet["size"], 0, "The planet size should be positive")
        self.assertGreater(planet["orbit_distance"], 0, "The planet orbit distance should be positive")
        self.assertGreater(planet["orbital_period"], 0, "The planet orbital period should be positive")

    def test_generate_solar_system(self):
        solar_system = generate_solar_system(8)

        # Check if the generated solar system is a list
        self.assertIsInstance(solar_system, list, "The generated solar system should be a list")

        # Check if the list has the correct number of planets
        self.assertEqual(len(solar_system), 8, "The generated solar system should have 8 planets")

        # Check if each element in the list is a valid planet
        for planet in solar_system:
            self.assertIsInstance(planet, dict, "Each element in the solar system should be a dictionary")
            required_keys = ["name", "size", "color", "orbit_distance", "orbital_period"]
            for key in required_keys:
                self.assertIn(key, planet, f"The planet should have the key '{key}'")
                self.assertIsInstance(planet[key], (str, float), f"The planet {key} should be a string or a float")

if __name__ == "__main__":
    unittest.main()
