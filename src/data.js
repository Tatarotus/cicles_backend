const date = new Date();
const day = date.getDay();

const planetOfWeek = [
  "Sun",
  "Moon",
  "Mars",
  "Mercury",
  "Jupiter",
  "Venus",
  "Saturn"
]
const planetaryHours = [
  "Saturn",
  "Jupiter",
  "Mars",
  "Sun",
  "Venus",
  "Mercury",
  "Moon"
]


console.log(planetOfWeek[day]);
