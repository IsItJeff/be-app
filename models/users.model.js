const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc , addDoc } = require("firebase/firestore");
const { db } = require("../db/index.js")

exports.createUser = (userData) => {
    return data.msg ? data : addDoc(collection( db , "users"), userData);
};

exports.fetchUser = (userId) => {
    return getDoc(doc( db , "users" , userId))
        .then((snapshot) => {
            return snapshot.data()
        }); 
};

exports.updateUser = (userData , userId) => {
    return updateDoc(doc(db , "users" , userId ), userData);
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