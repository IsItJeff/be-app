import express  from "express";
import {addUser , getUser , getUsers , patchUser , removeUser} from "../controllers/users.controller.js";

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


export default usersRouter