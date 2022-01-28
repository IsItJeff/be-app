const express = require("express");
const usersRouter = require("./users.router");
const loginRouter = require("./login.router");
const {getAuth , onAuthStateChanged} = require("firebase/auth")

const apiRouter = express();
const auth = getAuth();

onAuthStateChanged(auth, (user)=>{
    if(user){
        apiRouter
            .route("/")
            .get((req, res) => {
                res.status(200).send({ msg: "API Connection Successful, Welcome Back Commander" })
            })
        apiRouter.use("/users", usersRouter);
    }else{
        apiRouter.use("/login", loginRouter);    
    }
})

module.exports = apiRouter;