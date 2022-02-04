const { 
    collection , 
    getDocs , 
    getDoc , 
    doc , 
    deleteDoc , 
    updateDoc ,
    addDoc 
} = require("firebase/firestore");
const { db } = require("../../db/index.js");

exports.createBranch = ( branchData ) => {
    const data = branchData;
    return addDoc(collection(db, "fabrication", "branches"), data);
};