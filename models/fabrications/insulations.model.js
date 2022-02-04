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

exports.createInsulation = ( insulationData ) => {
    const data = insulationData;
    return addDoc(collection( db , "fabrications/insulations/insulation"), data); 
};