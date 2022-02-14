const { getAuth , signInWithEmailAndPassword } = require("firebase/auth");

exports.fetchLogin = (email , password) =>{
    const auth = getAuth();
    
    return signInWithEmailAndPassword(auth , email , password)
        .then((credential) => {
            const loginCredential = credential.user;
            return loginCredential;
        }).catch((err) => {
            const errCode = err.code;
            const errMsg = err.message;
        });
}