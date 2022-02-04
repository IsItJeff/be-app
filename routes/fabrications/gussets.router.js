const express = require("express");
const { postGusset } = require("../../controllers/fabrications/gussets.controller.js");

const gussetsRouter = express();

gussetsRouter
    .route("/")
    .get()
    .post(postGusset);

gussetsRouter
    .route("/:gussetId")
    .get()
    .patch()
    .delete();

module.exports = gussetsRouter;