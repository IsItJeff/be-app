import express from "express";
import { postLogin } from "../controllers/login.controller.js";

const loginRouter = express();

loginRouter
    .route("/")
    .post(postLogin)

export default loginRouter;