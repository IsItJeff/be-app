import { collection , getDocs , getDoc , query , where , doc , addDoc , deleteDoc , updateDoc , arrayUnion , arrayRemove , setDoc } from "firebase/firestore";
import { db } from "../db/index.js";

export const createUser = (userData) => {
    return setDoc(doc(db , "users"), userData);
};

export const fetchUser = (userId) => {
    const docRef = doc( db , "users" , userId);
    return getDoc(docRef)
        .then((snapshot) => {
            snapshot.data()
        }); 
};

export const fetchUsers = () => {
    return getDocs(collection( db , "users")).then((snapshot) => {
        let users = [];
        
        snapshot.docs.forEach((user) => {
            users.push({...user.data(), id: user.id});
        });
        
        return users;
    });
};

export const updateUser = (userData , userId) => {
    return updateDoc(doc(db , "users" , userId ), userData);
};

export const deleteUser = (userId) => {
    return deleteDoc(doc(db , "users" , userId ));
};  