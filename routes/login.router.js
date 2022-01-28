const express = require("express");
const { postLogin } = require("../controllers/login.controller.js")

const loginRouter = express();

loginRouter
    .route("/")
    .post(postLogin)

module.exports = loginRouter;