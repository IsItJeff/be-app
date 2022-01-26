import { collection , getDocs , getDoc , doc , deleteDoc , updateDoc , setDoc ,addDoc } from "firebase/firestore";
import { userValidation }  from "../db/data/validation/user.validation.js";
import { db } from "../db/index.js";

export const createUser = async (userData) => {
    const data = await userValidation(userData)
    return data.msg ? data.msg : addDoc(collection( db , "users"), userData);
};

export const fetchUser = (userId) => {
    return getDoc(doc( db , "users" , userId))
        .then((snapshot) => {
            return snapshot.data()
        }); 
};

export const fetchUsers = () => {
    return getDocs(collection( db , "users"))
        .then((snapshot) => {
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