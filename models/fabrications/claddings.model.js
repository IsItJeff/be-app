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
const path = "fabrications/claddings/cladding";

exports.createCladding = ( claddingData ) => {
    const data = claddingData;
    return addDoc(collection(db , path), data);
};

exports.fetchCladding = ( claddingId ) => {
    return getDoc(doc( db , path , claddingId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateCladding = ( claddingId , claddingData ) =>{
    return updateDoc(doc(db , path , claddingId), claddingData);
};

exports.removeCladding = ( claddingId ) => {
    return deleteDoc(doc(db , path , claddingId))
}

exports.fetchCladding = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let claddings = [];

            snapshot.docs.forEach((cladding) => {
                claddings.push({...cladding.data(), id: cladding.id});
            });

            return claddings;
        });
};