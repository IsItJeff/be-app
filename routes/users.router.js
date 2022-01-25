import express  from "express";
import { getUsers , getUser } from "../controllers/getUsers.controller.js";

const usersRouter = express()

usersRouter
    .route("/")
    .get(getUsers)

usersRouter
    .route("/:userId")
    .get(getUser)


export default usersRouter