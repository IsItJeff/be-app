const express = require("express");

const rectanglesRouter = express();

rectanglesRouter
    .route("/rectangles")
    .get()
    .post(postRectangle);

rectanglesRouter
    .route("/rectangles/:rectangleId")
    .get()
    .patch()
    .delete();

module.exports = rectanglesRouter;