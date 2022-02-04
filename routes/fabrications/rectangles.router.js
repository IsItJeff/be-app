const express = require("express");
const { postRectangle } = require("../../controllers/fabrications/rectangles.controllers.js");

const rectanglesRouter = express();

rectanglesRouter
    .route("/")
    .get()
    .post(postRectangle);

rectanglesRouter
    .route("/:rectangleId")
    .get()
    .patch()
    .delete();

module.exports = rectanglesRouter;