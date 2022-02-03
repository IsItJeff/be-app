const express = require("express");

const topCapsRouter = express();

topCapsRouter
    .route("/topCaps")
    .get()
    .post(postTopCap);

topCapsRouter
    .route("/topCaps/:topCapId")
    .get()
    .patch()
    .delete();

module.exports = topCapsRouter;