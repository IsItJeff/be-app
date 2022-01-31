const express = require("express");
const {postUser , getUser , getUsers , patchUser , deleteUser} = require("../controllers/users.controller");

const usersRouter = express()

usersRouter
    .route("/")
    .get(getUsers)
    .post(postUser)

usersRouter
    .route("/:userId")
    .get(getUser)
    .patch(patchUser)
    .delete(deleteUser)


module.exports = usersRouter;