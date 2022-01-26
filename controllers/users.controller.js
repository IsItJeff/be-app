import { createUser , fetchUsers , fetchUser , updateUser , deleteUser } from "../models/users.model.js";

export const addUser = (req , res , next) => {
    const userData = req.body;

    createUser(userData)
        .then((user) => {
            res.status(201).send(user.msg ? user : {msg: "New User Created"});
        }).catch((err) => {
            next(err);
        });
};

export const getUser = (req , res , next) => {
    const userId = req.params.userId;

    fetchUser(userId)
        .then((user) => {
            res.status(200).send({ user });
        }).catch((err) => {
            next(err);
        });
};

export const getUsers = (req , res , next) => {
    fetchUsers()
        .then((users) => {
            res.status(200).send({ users });
        }).catch((err) => {
            next(err);
        });
};

export const patchUser = (req , res , next) => {
    const userId = req.params.userId;
    const userData = req.body;

    updateUser(userData , userId)
        .then((user) => {
            res.status(200).send(user.msg ? user : {msg: "New User Created"})
        }).catch((err) => {
            next(err);
        });
};

export const removeUser = (req , res , next) => {
    const userId = req.params.userId;
    
    deleteUser(userId)
        .then((user) => {
            res.status(204).send({ msg:"Deleted Successful" })
        }).catch((err)=>{
            next(err);
        });
};