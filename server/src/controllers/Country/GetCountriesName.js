const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query;
    const countryName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}`,
        },
      },
      include: {
        model: Activity,
      },
    });
    if (!countryName) {
      return res
        .status(404)
        .json({ error: "There are no Countries with this name" });
    }

    res.status(200).json(countryName);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryByName;
