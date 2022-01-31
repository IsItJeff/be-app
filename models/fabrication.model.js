const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc ,addDoc } = require("firebase/firestore");
const { db } = require("../db/index.js");

exports.createTube = (tubeData) => {
    const data = tubeData;
    return addDoc(collection( db , "fabrications"), data)
};

exports.createRectangle = ( rectangleData ) => {
    const data = rectangleData;
    return addDoc(collection( db , "fabrications"), data)
}

exports.createGusset = ( gussetData ) =>{
    const data = gussetData;
    return addDoc(collection( db , "fabrications"), data)
}

exports.createInsulation = (insulationData) => {
    const data = insulationData;
    return addDoc(collection( db , "fabrications"), data) 
}