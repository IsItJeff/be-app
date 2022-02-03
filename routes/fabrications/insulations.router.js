const express = require("express");

const insulationsRouter = express();

insulationsRouter
    .route("/insulations")
    .get()
    .post(postInsulation);

insulationsRouter
    .route("/insulations/:insulationId")
    .get()
    .patch()
    .delete();

module.exports = insulationsRouter;