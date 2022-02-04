const express = require("express");
const loginRouter = require("./login.router");
const usersRouter = require("./users.router");
const ordersRouter = require("./orders.router");
const fabricationsRouter = require("./fabrications.router.js")
const { getAuth , onAuthStateChanged } = require("firebase/auth")

const apiRouter = express();
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if(user){
        apiRouter
            .route("/")
            .get((req, res) => {
                res.status(200).send({ msg: "API Connection Successful, Welcome Back Commander" })
            })
        apiRouter.use("/users" , usersRouter);
        apiRouter.use("/orders" , ordersRouter);
        apiRouter.use("/fabrications" , fabricationsRouter);
    }else{
        apiRouter.use("/login" , loginRouter);    
    }
});

module.exports = apiRouter;