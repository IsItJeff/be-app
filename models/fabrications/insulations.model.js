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
const path = "fabrications/insulations/insulation";

exports.createInsulation = ( insulationData ) => {
    const data = insulationData;
    return addDoc(collection( db , path ), data); 
};

exports.fetchInsulation = ( insulationId ) => {
    return getDoc(doc( db , path , insulationId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateInsulation = ( insulationId , insulationData ) =>{
    return updateDoc(doc(db , path , insulationId), insulationData);
};

exports.removeInsulation = ( insulationId ) => {
    return deleteDoc(doc(db , path , insulationId))
}

exports.fetchInsulations = () => {
    return getDocs(collection( db , path))
        .then((snapshot) => {
            let insulations = [];

            snapshot.docs.forEach((insulation) => {
                insulations.push({...insulation.data(), id: insulation.id});
            });

            return insulations;
        });
};