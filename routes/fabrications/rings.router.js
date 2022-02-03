const express = require("express");

const ringsRouter = express();

ringsRouter
    .route("/rings")
    .get()
    .post(postRing);

ringsRouter
    .route("/rings/:ringId")
    .get()
    .patch()
    .delete();

module.exports = ringsRouter;