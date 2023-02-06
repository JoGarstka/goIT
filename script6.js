// "Normalna" deklaracja funkcji
function classicAdd(a, b, c) {
    return a + b + c;
  }

  // To samo w postaci arrow function
const arrowAdd1 = (a, b, c) => {
    return a + b + c;
  };
  
  // To samo w postaci arrow function
  const arrowAdd2 = (a, b, c) => a + b + c;

  const planets = ["Ziemia", "Mars", "Wenus", "Jowisz"];

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInLowerCase);

// Oryginalna tablica się nie zmieniła
console.log(planets);
