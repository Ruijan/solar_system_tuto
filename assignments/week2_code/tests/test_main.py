import unittest
from unittest.mock import mock_open, patch
import os
from math import sqrt, pi
import json
from src.main_answer import generate_planet, generate_star, save_solar_system, load_solar_system, compute_velocity, compute_star_mass, compute_orbit
G = 6.67430e-11  # gravitational constant

class TestSolarSystem(unittest.TestCase):

    def setUp(self):
        self.planet = generate_planet()
        self.star = generate_star()
        self.solar_system = {
            "star": self.star,
            "planets": [self.planet]
        }
        self.filename = 'test_solar_system.json'

    def tearDown(self):
        if os.path.exists(self.filename):
            os.remove(self.filename)

    def test_generate_planet(self):
        planet = generate_planet()
        self.assertIn("name", planet)
        self.assertIn("type", planet)
        self.assertIn("diameter", planet)
        self.assertIn("mass", planet)
        self.assertIn("distance_from_star", planet)
        self.assertIn("orbital_period", planet)
        self.assertIn("composition", planet)

    def test_generate_star(self):
        star = generate_star()
        self.assertIn("name", star)
        self.assertIn("mass", star)
        self.assertIn("luminosity", star)
        self.assertIn("radius", star)
        self.assertIn("temperature", star)

    @patch('builtins.open', new_callable=mock_open)
    def test_save_solar_system(self, mock_file):
        save_solar_system(self.solar_system, self.filename)
        mock_file().write.assert_called()  # Ensures write was called
        handle = mock_file()
        handle.write.assert_called()  # Ensure that write was called
        written_data = ''.join(call.args[0] for call in handle.write.call_args_list)
        self.assertEqual(written_data, json.dumps(self.solar_system))

    @patch('builtins.open', new_callable=mock_open, read_data=json.dumps({
        "star": {
            "name": "Sun",
            "mass": 1.989e30,
            "luminosity": 3.828e26,
            "radius": 696340,
            "temperature": 5778
        },
        "planets": [
            {
                "name": "Earth",
                "type": "rocky",
                "diameter": 12742,
                "mass": 5.972e24,
                "distance_from_star": 1.496e11,
                "orbital_period": 365.25,
                "composition": "iron, silicates"
            }
        ]
    }))
    def test_load_solar_system(self, mock_file):
        loaded_solar_system = load_solar_system(self.filename)
        self.assertEqual(self.solar_system, loaded_solar_system)

    def test_save_and_load_solar_system(self):
        save_solar_system(self.solar_system, self.filename)
        loaded_solar_system = load_solar_system(self.filename)
        self.assertEqual(self.solar_system, loaded_solar_system)

    def test_compute_velocity(self):
        distance = self.planet["distance_from_star"]
        star_mass = self.star["mass"]
        expected_velocity = sqrt(G * star_mass / distance)
        self.assertAlmostEqual(compute_velocity(distance, star_mass), expected_velocity, places=5)

    def test_compute_star_mass(self):
        distance = self.planet["distance_from_star"]
        period = self.planet["orbital_period"] * 24 * 3600  # Convert days to seconds
        expected_star_mass = (4 * pi**2 * distance**3) / (G * period**2)
        self.assertAlmostEqual(compute_star_mass(distance, period), expected_star_mass, places=5)

    def test_compute_orbit(self):
        velocity = compute_velocity(self.planet["distance_from_star"], self.star["mass"])
        star_mass = self.star["mass"]
        expected_orbit = G * star_mass / velocity**2
        self.assertAlmostEqual(compute_orbit(velocity, star_mass), expected_orbit, places=5)

if __name__ == '__main__':
    unittest.main()
