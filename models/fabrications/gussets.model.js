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
const path = "fabrications/gussets/gusset";

exports.createGusset = ( gussetData ) => {
    const data = gussetData;
    return addDoc(collection( db , path ), data);
};

exports.fetchGusset = ( gussetId ) => {
    return getDoc(doc( db , path , gussetId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateGusset = ( gussetId , gussetData ) =>{
    return updateDoc(doc(db , path , gussetId), gussetData);
};

exports.removeGusset = ( gussetId ) => {
    return deleteDoc(doc(db , path , gussetId))
}

exports.fetchGussets = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let gussets = [];

            snapshot.docs.forEach((gusset) => {
                gussets.push({...gusset.data(), id: gusset.id});
            });

            return gussets;
        });
};