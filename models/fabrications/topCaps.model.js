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

exports.createTopCap = ( topCapData ) => {
    const data = topCapData;
    return addDoc(collection(db, "fabrication", "topCaps" ), data);
};
