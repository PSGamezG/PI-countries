const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
      const { data } = await axios.get("http://localhost:5000/countries"); //repasar
      data.map(async (country) => {
        await Country.findOrCreate({
          where: {
            ID: country.cca3,
          },

          defaults: {
            name: country.name.common,
            flagImage: country.flags.png,
            continents: country.continents
              ? country.continents[0]
              : "undefined",
            capital: country.capital ? country.capital[0] : "undefined",
            subregion: country.subregion,
            area: country.area,
            population: country.population,
          },
        });
      });
    });
  })
  .catch((error) => console.error(error));
