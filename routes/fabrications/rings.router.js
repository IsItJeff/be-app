const express = require("express");
const { postRing } = require("../../controllers/fabrications/rings.controllers.js");

const ringsRouter = express();

ringsRouter
    .route("/")
    .get()
    .post(postRing);

ringsRouter
    .route("/:ringId")
    .get()
    .patch()
    .delete();

module.exports = ringsRouter;