import express from "express";
import usersRouter  from "./users.router.js";
import loginRouter from "./login.router.js";
import { getAuth } from "firebase/auth";

const apiRouter = express();

apiRouter
    .route("/")
    .get((req, res) => {
        res.status(200).send({ msg: "API Connection Successful, Welcome Back Commander" })
    })

apiRouter.use("/login", loginRouter);

if(getAuth().currentUser){
    apiRouter.use("/users", usersRouter);
}else{
    apiRouter
    .route("/*")
    .get((req, res) => {
        res.status(404).send({ msg: "Please Login First" })
    })
}


export default apiRouter;