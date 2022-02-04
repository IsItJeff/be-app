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

exports.createBranch = ( branchData ) => {
    const data = branchData;
    return addDoc(collection(db, "fabrications/branches/branch"), data);
};

exports.fetchBranches = () => {
    return getDocs(collection(db , "fabrications/branches/branch"))
        .then((snapshot) => {
            let branches = [];

            snapshot.docs.forEach((branch) => {
                branches.push({...branch.data(), id: branch.id });
            });

            return branches;
        });
};