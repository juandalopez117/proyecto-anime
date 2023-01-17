const { Router } = require("express");
const router = Router();
const axios = require("axios");

const mwAnime = require("./animes");
const mwComments = require("./comments");

router.use("/anime", mwAnime);
router.use("/comments", mwComments);
module.exports = router;
