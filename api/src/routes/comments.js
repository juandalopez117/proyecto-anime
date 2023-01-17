const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { getCommentsByScore } = require("./Controllers");

router.get("/", async function (req, res) {
  try {
    let result = await getCommentsByScore();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
