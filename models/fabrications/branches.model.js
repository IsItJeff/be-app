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
const path = "fabrications/branches/branch";

exports.createBranch = ( branchData ) => {
    const data = branchData;
    return addDoc(collection(db , path), data);
};

exports.fetchBranch = ( branchId ) => {
    return getDoc(doc( db , path , branchId))
        .then((snapshot)=>{
            return snapshot.data();
        });
};

exports.updateBranch = ( branchId , branchData ) =>{
    return updateDoc(doc(db , path , branchId), branchData);
};

exports.removeBranch = ( branchId ) => {
    return deleteDoc(doc(db , path , branchId))
};

exports.fetchBranches = () => {
    return getDocs(collection(db , path))
        .then((snapshot) => {
            let branches = [];

            snapshot.docs.forEach((branch) => {
                branches.push({...branch.data(), id: branch.id });
            });

            return branches;
        });
};