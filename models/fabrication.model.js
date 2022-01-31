const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc ,addDoc } = require("firebase/firestore");
const { db } = require("../db/index.js");

exports.createTube = (tubeData) => {
    const data = tubeData;
    return addDoc(collection( db , "fabrications"), data)
};

exports.createRectangle = ( ) => {
    
}