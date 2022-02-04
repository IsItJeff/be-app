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

exports.createRectangle = ( rectangleData ) => {
    const data = rectangleData;
    return addDoc(collection( db , "fabrications", "rectangles"), data);
};
