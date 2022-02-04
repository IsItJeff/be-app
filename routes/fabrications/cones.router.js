const express = require("express");
const { postCone } = require("../../controllers/fabrications/cones.controller.js");

const conesRouter = express();

conesRouter
    .route("/")
    .get()
    .post(postCone);

conesRouter
    .route("/:coneId")
    .get()
    .patch()
    .delete();

module.exports = conesRouter;