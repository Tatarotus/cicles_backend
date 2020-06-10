const request = require("request")
const cheerio = require("cheerio")
let angelIndex = 0;

const angelicPosition = {
  Sun: "",
  Moon: "",
  Mercury: "",
  Venus: "",
  Mars: "",
  Jupiter: "",
  Saturn: "",
}

module.exports = {
  async index(req, res) {
    try {
      await request("https://currentplanetarypositions.com", (error, response, html) => {
        if(!error && response.statusCode === 200) {
          const $ = cheerio.load(html)
          const planetPositions = $(".planet_positions span").each(function(index) {
            if(index % 2 !== 0 && index < 14) {
              const rawPosition = $(this).text().split(' ');
              const zodiacPosition = rawPosition[1];
              angelicPosition[Object.keys(angelicPosition)[angelIndex]] = zodiacPosition;
              angelIndex++;
            } 
          })
        }
        return res.json(angelicPosition)
      })
    } catch (err) {
      console.log(err);
    }
  },
};
