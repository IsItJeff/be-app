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
const path = "fabrications/rectangles/rectangle";

exports.createRectangle = ( rectangleData ) => {
    const data = rectangleData;
    return addDoc(collection( db , path ), data);
};

exports.fetchRectangle = ( rectangleId ) => {
    return getDoc(doc( db , path , rectangleId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateRectangle = ( rectangleId , rectangleData ) =>{
    return updateDoc(doc(db , path , rectangleId), rectangleData);
};

exports.removeRectangle= ( rectangleId ) => {
    return deleteDoc(doc(db , path , rectangleId))
}

exports.fetchRectangles = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let rectangles = [];

            snapshot.docs.forEach((rectangle) => {
                rectangles.push({...rectangle.data(), id: rectangle.id});
            });

            return rectangles;
        });
};