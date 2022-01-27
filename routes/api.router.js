import express from "express";
import usersRouter  from "./users.router.js";
import loginRouter from "./login.router.js";
import { getAuth , onAuthStateChanged } from "firebase/auth";

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

export default apiRouter;