import { fetchLogin } from "../models/login.model.js"

export const postLogin = (req , res , next) => {
    const {email , pass} = req.body;

    fetchLogin(email , pass)
        .then((login)=>{
            res.status(200).send({msg: "Login Successful"})
        }).catch((err)=>{
            next(err);
        });
};