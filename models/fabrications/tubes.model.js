const { 
    collection , 
    getDocs , 
    getDoc , 
    doc , 
    deleteDoc , 
    updateDoc ,
    query ,
    addDoc 
} = require("firebase/firestore");
const { db } = require("../../db/index.js");
const { compaireInputToDb } = require("../../utils/fabrication/tube.utils");

const path = "fabrications/tubes/tube";

exports.createTube = ( tubeData ) => {
    const data =  compaireInputToDb(tubeData)
    console.log(data)
    // const refactoredData = {
    //     type: data.type(),
    //     innerDiam: data.innerDiam(),
    //     outterDiam: data.outterDiam(),
    //     thickness: data.thickness(),
    //     length: data.tLength()
    // }
    
    return addDoc(collection( db , path ), tubeData);
};

exports.fetchTube = ( tubeId ) => {
    return getDoc(doc( db , path , tubeId))
        .then((snapshot) => {
            return snapshot.data();
        });
};

exports.updateTube = ( tubeId , tubeData ) =>{
    const data = new Tube(tubeData);
    console.log(data);
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