const apiRouter = require("express").Router();
const usersRouter = require("./users.router");

apiRouter
    .route("/")
    .get((req, res) => {
        res.status(200).send({ msg: "API Connection Successful, Welcome Back Commander" })
    })

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;