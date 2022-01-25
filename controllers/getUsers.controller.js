import { createUser , fetchUsers , fetchUser , updateUser , deleteUser } from "../models/fetchUsers.model.js";

export const addUser = (req , res , next) => {
    const userData = req.params.data;

    createUser(userData)
        .then((user) => {
            res.status(200).send({ user });
        }).catch((err) => {
            next(err);
        });
};

export const getUser = (req , res , next) => {
    const userId = req.params.id;

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
    const userId = req.params.id;
    const userData = req.params.data;

    updateUser(userData , userId)
        .then((user) => {
            res.status(200).send({ user })
        }).catch((err) => {
            next(err);
        });
};

export const removeUser = (req , res , next) => {
    const userId = req.params.id;
    
    deleteUser(userId)
        .then((user) => {
            res.status(200).send({ user })
        }).catch((err)=>{
            next(err);
        });
};