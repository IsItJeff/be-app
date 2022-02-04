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

exports.createCone = ( coneData ) => {
    const data = coneData;
    return addDoc(collection(db , "fabrication", "cones" ), data);
};