const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { getAnimes, getAnimeByName } = require("./Controllers");

router.get("/", async function (req, res) {
  try {
    let result = await getAnimes();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:name", async function (req, res) {
  const { name } = req.params;
  try {
    let animeByName = await getAnimeByName(name);
    res.send(animeByName);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
