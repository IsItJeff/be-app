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
const path = "fabrication/topCaps/topCap";

exports.createTopCap = ( topCapData ) => {
    const data = topCapData;
    return addDoc(collection(db, path), data);
};

exports.fetchTopCap = ( topCapId ) => {
    return getDoc(doc( db , path , topCapId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateTopCap = ( topCapId , topCapData ) =>{
    return updateDoc(doc(db , path , topCapId), topCapData);
};

exports.removeTopCap = ( topCapId ) => {
    return deleteDoc(doc(db , path , topCapId))
}

exports.fetchTopCaps = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let topCaps = [];

            snapshot.docs.forEach((topCap) => {
                topCaps.push({...topCap.data(), id: topCap.id});
            });

            return topCaps;
        });
};