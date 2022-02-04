const express = require("express");
const { postTube } = require("../../controllers/fabrications/tubes.controllers.js");

const tubesRouter = express();

tubesRouter
    .route("/")
    .get()
    .post(postTube);

tubesRouter
    .route("/tubeId")
    .get()
    .patch()
    .delete()

module.exports = tubesRouter;