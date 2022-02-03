const express = require("express");

const conesRouter = express();

conesRouter
    .route("/cones")
    .get()
    .post(postCone);

conesRouter
    .route("/cones/:coneId")
    .get()
    .patch()
    .delete();

module.exports = conesRouter;