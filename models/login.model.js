import { getAuth , signInWithEmailAndPassword } from "firebase/auth";

export const fetchLogin = (email , pass) =>{
    const auth = getAuth();
    
    return signInWithEmailAndPassword(auth , email , pass)
        .then((credential) => {
            const loginCredential = credential.user;
            return loginCredential;
        }).catch((err) => {
            const errCode = err.code;
            const errMsg = err.message;
        });
}