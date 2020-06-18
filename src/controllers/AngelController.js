const request = require("request")
const cheerio = require("cheerio")

let angelIndex = 0;

const planetaryTime = {
  currentHour: "",
  currentYear: "",
  currentDay: "",
}

const classicalPlanets = [
  "saturn",
  "jupiter",
  "mars",
  "sun",
  "venus",
  "mercury",
  "moon"
];

const weeklyPlanets = [
  "sun",
  "moon",
  "mars",
  "mercury",
  "jupiter",
  "venus",
  "saturn"
];

const angelicPosition = {
  sun: "",
  moon: "",
  mercury: "",
  venus: "",
  mars: "",
  jupiter: "",
  saturn: "",
}

function getYearIndex() {
  let splitedYear = String(new Date().getFullYear()).split("");
  splitedYear = splitedYear.map(Number)
  const yearIndex = splitedYear.reduce((a,b) => a + b, 0);
  return yearIndex - 1;
}

module.exports = {
  async planets(req, res) {
    try {
      await request("https://currentplanetarypositions.com", (error, response, html) => {
        if(!error && response.statusCode === 200) {
          const $ = cheerio.load(html)
          const planetPositions = $(".planet_positions span").each(function(index) {
            if(index % 2 !== 0 && index < 14) {
              const rawPosition = $(this).text().split(' ');
              const zodiacPosition = rawPosition[1].toLowerCase();
              if(angelIndex < 7) {
                angelicPosition[Object.keys(angelicPosition)[angelIndex]] = zodiacPosition;
                angelIndex++;
              }
            } 
          })
        }
        return res.json(angelicPosition)
      })
    } catch (err) {
      console.log(err);
    }
  },
  async time(req, res) {
    try {
      await request("https://www.lunarium.co.uk/planets/hours.jsp?location=Rio%20de%20Janeiro&ltt=-22.54&lgt=-43.14&tz=Brazil/East&dformat=UK&geoFormat=degMin", (error, response, html) => {
        if(!error && response.statusCode === 200) {
          const $ = cheerio.load(html)
          const currentTime = $('.current img').attr('class');
          planetaryTime.currentHour = currentTime;
          planetaryTime.currentYear = classicalPlanets[getYearIndex()];
          planetaryTime.currentDay = weeklyPlanets[new Date().getDay()];

          return res.json(planetaryTime)
        }
      });
    } catch (err) {
      console.log(err);
    }

  }
};
