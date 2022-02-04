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

exports.createGusset = ( gussetData ) => {
    const data = gussetData;
    return addDoc(collection( db , "fabrications", "gussets"), data);
};