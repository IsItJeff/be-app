import express from "express";
import usersRouter  from "./users.router.js";
import loginRouter from "./login.router.js";

const apiRouter = express();

apiRouter
    .route("/")
    .get((req, res) => {
        res.status(200).send({ msg: "API Connection Successful, Welcome Back Commander" })
    })

apiRouter.use("/users", usersRouter);
apiRouter.use("/login", loginRouter)


export default apiRouter;