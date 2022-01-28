const express = require("express");
const {addUser , getUser , getUsers , patchUser , removeUser} = require("../controllers/users.controller");

const usersRouter = express()

usersRouter
    .route("/")
    .get(getUsers)
    .post(addUser)

usersRouter
    .route("/:userId")
    .get(getUser)
    .patch(patchUser)
    .delete(removeUser)


module.exports = usersRouter;