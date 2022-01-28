const { createUser , fetchUsers , fetchUser , updateUser , deleteUser } = require("../models/users.model.js");

exports.addUser = (req , res , next) => {
    const userData = req.body;

    createUser(userData)
        .then((user) => {
            res.status(201).send(user.msg ? user : {msg: "New User Created"});
        }).catch((err) => {
            next(err);
        });
};

exports.getUser = (req , res , next) => {
    const userId = req.params.userId;

    fetchUser(userId)
        .then((user) => {
            res.status(200).send({ user });
        }).catch((err) => {
            next(err);
        });
};

exports.getUsers = (req , res , next) => {
    fetchUsers()
        .then((users) => {
            res.status(200).send({ users });
        }).catch((err) => {
            next(err);
        });
};

exports.patchUser = (req , res , next) => {
    const userId = req.params.userId;
    const userData = req.body;

    updateUser(userData , userId)
        .then((user) => {
            res.status(200).send(user.msg ? user : {msg: "New User Created"})
        }).catch((err) => {
            next(err);
        });
};

exports.removeUser = (req , res , next) => {
    const userId = req.params.userId;
    
    deleteUser(userId)
        .then((user) => {
            res.status(204).send({ msg:"Deleted Successful" })
        }).catch((err)=>{
            next(err);
        });
};