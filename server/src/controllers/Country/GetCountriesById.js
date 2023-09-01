const { Country, Activity } = require("../../db");

const getCountryById = async (req, res) => {
  try {
    const { idPais } = req.params;

    const response = await Country.findOne({
      where: { ID: idPais },
      include: {
        model: Activity,
        attributes: ["ID", "name", "difficulty", "duration", "season"],
      },
    });

    if (!response) {
      return res.status(404).json({ error: "Could not find Country" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryById;
