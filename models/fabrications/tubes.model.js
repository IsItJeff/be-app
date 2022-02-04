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
const path = "fabrications/tubes/tube";

exports.createTube = ( tubeData ) => {
    const data = tubeData;
    return addDoc(collection( db , path ), data);
};

exports.fetchTube = ( tubeId ) => {
    return getDoc(doc( db , path , tubeId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateTube = ( tubeId , tubeData ) =>{
    return updateDoc(doc(db , path , tubeId), tubeData);
};

exports.removeTube = ( tubeId ) => {
    return deleteDoc(doc(db , path , tubeId))
}

exports.fetchTubes = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let tubes = [];

            snapshot.docs.forEach((tube) => {
                tubes.push({...tube.data(), id: tube.id});
            });

            return tubes;
        });
};