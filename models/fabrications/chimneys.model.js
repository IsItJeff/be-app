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
const path = "fabrications/chimneys/chimney";

exports.createChimney = ( chimneyData ) => {
    const data = chimneyData;
    return addDoc(collection( db, path ), data );
};

exports.fetchChimney = ( chimneyId ) => {
    return getDoc(doc( db , path , chimneyId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateChimney = ( chimneyId , chimneyData ) =>{
    return updateDoc(doc(db , path , chimneyId), chimneyData);
};

exports.removeChimney = ( chimneyId ) => {
    return deleteDoc(doc(db , path , chimneyId))
};

exports.fetchChimney = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let chimneys = [];

            snapshot.docs.forEach((chimney) => {
                chimneys.push({...chimney.data(), id: chimney.id});
            });

            return chimneys;
        });
};