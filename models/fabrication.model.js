const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc ,addDoc } = require("firebase/firestore");
const { db } = require("../db/index.js");

exports.createTube = ( tubeData ) => {
    const data = tubeData;
    return addDoc(collection( db , "fabrications", "tubes"), data);
};

exports.createRectangle = ( rectangleData ) => {
    const data = rectangleData;
    return addDoc(collection( db , "fabrications", "rectangles"), data);
};

exports.createGusset = ( gussetData ) =>{
    const data = gussetData;
    return addDoc(collection( db , "fabrications", "gussets"), data);
};

exports.createInsulation = ( insulationData ) => {
    const data = insulationData;
    return addDoc(collection( db , "fabrications", "insulations"), data); 
};

exports.createRing = ( ringData ) => {
    const data = ringData;
    return addDoc(collection(db, "fabrications", "rings"), data);
};

exports.createCladding = ( claddingData ) => {
    const data = claddingData;
    return addDoc(collection(db, "fabrication", "claddings" ), data);
};

exports.createCone = ( coneData ) => {
    const data = coneData;
    return addDoc(collection(db , "fabrication", "cones" ), data);
};

exports.createTopCap = ( topCapData ) => {
    const data = topCapData;
    return addDoc(collection(db, "fabrication", "topCaps" ), data);
};

exports.createBranch = ( branchData ) => {
    const data = branchData;
    return addDoc(collection(db, "fabrication", "branches"), data);
};

exports.createChimney = ( chimneyData ) => {
    const data = chimneyData;
    return addDoc(collection(db, "fabrication", "chimneys"), data )
}