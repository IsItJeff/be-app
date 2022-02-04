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

exports.createChimney = ( chimneyData ) => {
    const data = chimneyData;
    return addDoc(collection(db, "fabrications/chimneys/chimney"), data );
};