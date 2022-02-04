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

exports.createCladding = ( claddingData ) => {
    const data = claddingData;
    return addDoc(collection(db, "fabrication", "claddings" ), data);
};