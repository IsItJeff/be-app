const express = require("express");

const chimneysRouter = express();

chimneysRouter
    .route("/chimneys")
    .get()
    .post(postChimney);

chimneysRouter
    .route("/chimneys/:chimneyId")
    .get()
    .patch()
    .delete();

module.exports = chimneysRouter;