const express = require("express");
const { postInsulation } = require("../../controllers/fabrications/insulations.controller");

const insulationsRouter = express();

insulationsRouter
    .route("/")
    .get()
    .post(postInsulation);

insulationsRouter
    .route("/:insulationId")
    .get()
    .patch()
    .delete();

module.exports = insulationsRouter;