const express = require("express");

const tubesRouter = express();

tubesRouter
    .route("/tubes")
    .get()
    .post(postTube);

tubesRouter
    .route("/tubes/tubeId")
    .get()
    .patch()
    .delete()

module.exports = tubesRouter;