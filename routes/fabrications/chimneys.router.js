const express = require("express");
const { postChimney } = require("../../controllers/fabrications/chimneys.controller.js");

const chimneysRouter = express();

chimneysRouter
    .route("/")
    .get()
    .post(postChimney);

chimneysRouter
    .route("/:chimneyId")
    .get()
    .patch()
    .delete();

module.exports = chimneysRouter;