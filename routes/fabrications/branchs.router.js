const express = require("express");

const branchsRouter = express();

branchsRouter
    .route("/branchs")
    .get()
    .post(postBranch);

branchsRouter
    .route("/branchs/:branchId")
    .get()
    .patch()
    .delete();

module.exports = branchsRouter;