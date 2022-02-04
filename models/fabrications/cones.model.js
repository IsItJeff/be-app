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
const path = "fabrications/cones/cone";

exports.createCone = ( coneData ) => {
    const data = coneData;
    return addDoc(collection(db , path ), data);
};

exports.fetchCone = ( coneId ) => {
    return getDoc(doc( db , path , coneId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateCone = ( coneId , coneData ) =>{
    return updateDoc(doc(db , path , coneId), coneData);
};

exports.removeCone = ( coneId ) => {
    return deleteDoc(doc(db , path , coneId))
}

exports.fetchCones = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let cones = [];

            snapshot.docs.forEach((cone) => {
                cones.push({...cone.data(), id: cone.id});
            });

            return cones;
        });
};