const express = require("express");
const { postTopCap } = require("../../controllers/fabrications/topCaps.controller.js");

const topCapsRouter = express();

topCapsRouter
    .route("/")
    .get()
    .post(postTopCap);

topCapsRouter
    .route("/:topCapId")
    .get()
    .patch()
    .delete();

module.exports = topCapsRouter;