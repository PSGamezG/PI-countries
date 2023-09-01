const { Country, Activity } = require("../../db.js");

const getCountries = async (req, res) => {
  try {
    const response = await Country.findAll({
      include: {
        model: Activity,
        attributes: ["ID", "name", "difficulty", "duration", "season"],
      },
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log({ error: error.message });
  }
};

module.exports = getCountries;

//Crear un controlador que obtenga el arreglo de objetos,
//include para interactuar con la tabla intermedia,
//https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/
