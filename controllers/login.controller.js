const { fetchLogin } = require("../models/login.model")

exports.postLogin = (req , res , next) => {
    const {email , pass} = req.body;

    fetchLogin(email , pass)
        .then((login) => {
            res.status(200).send(!login? {msg: "Email or Password is Incorrect"} : {msg: "Login Successful"})
        }).catch((err)=>{
            next(err);
        });
};