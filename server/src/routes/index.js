const { Router } = require("express");
const getCountries = require("../controllers/Country/GetCountries.js");
const getCountryById = require("../controllers/Country/GetCountriesById.js");
const getCountryByName = require("../controllers/Country/GetCountriesName.js");
const postActivities = require("../controllers/Activity/PostActivities.js");
const getActivities = require("../controllers/Activity/GetActivities.js");

const router = Router();

router.get("/countries", getCountries);

router.get("/countries/name", getCountryByName);

router.get("/countries/:idPais", getCountryById);

router.post("/activities", postActivities);

router.get("/activities", getActivities);

module.exports = router;
