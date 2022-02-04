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
const path = "fabrications/rings/ring";

exports.createRing = ( ringData ) => {
    const data = ringData;
    return addDoc(collection(db, path), data);
};

exports.fetchRing = ( ringId ) => {
    return getDoc(doc( db , path , ringId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateRing = ( ringId , ringData ) =>{
    return updateDoc(doc(db , path , ringId), ringData);
};

exports.removeRing = ( ringId ) => {
    return deleteDoc(doc(db , path , ringId))
}

exports.fetchRings = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let rings = [];

            snapshot.docs.forEach((ring) => {
                rings.push({...ring.data(), id: ring.id});
            });

            return rings;
        });
};