const express = require("express");
const { postCladding } = require("../../controllers/fabrications/claddings.controller.js");

const claddingsRouter = express();

claddingsRouter
    .route("/")
    .get()
    .post(postCladding);

claddingsRouter
    .route("/:claddingId")
    .get()
    .patch()
    .delete();

module.exports = claddingsRouter;