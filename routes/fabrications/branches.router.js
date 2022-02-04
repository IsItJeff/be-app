const express = require("express");
const { postBranch } = require("../../controllers/fabrications/branches.controller.js")

const branchesRouter = express();

branchesRouter
    .route("/")
    .get()
    .post(postBranch);

branchesRouter
    .route("/:branchId")
    .get()
    .patch()
    .delete();

module.exports = branchesRouter;