import random

def generate_planet_name():
    syllables = ["a", "e", "i", "o", "u", "ba", "be", "bi", "bo", "bu", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu"]
    name = ''.join(random.choices(syllables, k=random.randint(2, 4))).capitalize()
    return name

def generate_planet():
    name = generate_planet_name()
    size = random.uniform(0.5, 10.0)  # size in arbitrary units
    color = random.choice(["red", "blue", "green", "yellow", "purple", "orange"])
    orbit_distance = random.uniform(0.5, 50.0)  # distance in arbitrary units
    orbital_period = random.uniform(0.5, 10.0)  # period in arbitrary units

    planet = {
        "name": name,
        "size": size,
        "color": color,
        "orbit_distance": orbit_distance,
        "orbital_period": orbital_period
    }
    return planet

def generate_solar_system(num_planets=8):
    solar_system = [generate_planet() for _ in range(num_planets)]
    return solar_system

if __name__ == "__main__":
    solar_system = generate_solar_system()
    for planet in solar_system:
        print(planet)
