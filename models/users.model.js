const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc ,addDoc } = require("firebase/firestore");
const { userValidation } = require("../db/data/validation/user.validation.js");
const { db } = require("../db/index.js")

exports.createUser = async (userData) => {
    const data = await userValidation(userData)
    return data.msg ? data : addDoc(collection( db , "users"), data);
};

exports.fetchUser = (userId) => {
    return getDoc(doc( db , "users" , userId))
        .then((snapshot) => {
            return snapshot.data()
        }); 
};

exports.updateUser = async (userData , userId) => {
    const data = await userValidation(userData)
    return data.msg ? data : updateDoc(doc(db , "users" , userId ), data);
};

exports.removeUser = (userId) => {
    return deleteDoc(doc(db , "users" , userId ));
};  

exports.fetchUsers = () => {
    return getDocs(collection( db , "users"))
        .then((snapshot) => {
            let users = [];
            
            snapshot.docs.forEach((user) => {
                users.push({...user.data(), id: user.id});
            });
        
            return users;
    });
};