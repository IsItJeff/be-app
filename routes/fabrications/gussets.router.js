const express = require("express");

const gussetsRouter = express();

gussetsRouter
    .route("/gussets")
    .get()
    .post(postGusset);

gussetsRouter
    .route("/gussets/:gussetId")
    .get()
    .patch()
    .delete()

module.exports = gussetsRouter;