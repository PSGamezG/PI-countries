const { Activity, Country } = require("../../db.js");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
      },
    });

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log({ error: error.message });
  }
};

module.exports = getActivities;
