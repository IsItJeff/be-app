const express = require("express");

const claddingsRouter = express();

claddingsRouter
    .route("/claddings")
    .get()
    .post(postCladding);

claddingsRouter
    .route("/claddings/:claddingId")
    .get()
    .patch()
    .delete();


module.exports = claddingsRouter;