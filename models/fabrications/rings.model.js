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

exports.createRing = ( ringData ) => {
    const data = ringData;
    return addDoc(collection(db, "fabrications", "rings"), data);
};