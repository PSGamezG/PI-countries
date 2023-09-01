const { Activity, Country } = require("../../db");

const postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    const mapCountry = await Promise.all(
      countries.map(async (element) => {
        const getCountry = await Country.findOne({
          where: {
            ID: element,
          },
        });

        const countryRelation = await newActivity.addCountry(getCountry);
        return countryRelation;
      })
    );

    return res.status(200).json(mapCountry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postActivities;

// POST | /activities
// Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
// Toda la información debe ser recibida por body.
// Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
