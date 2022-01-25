import "dotenv/config";
import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";

const config = {
  apiKey: process.env.DB_APIKEY,
  authDomain: process.env.DB_AUTHDOM,
  projectId: process.env.DB_PROJECTID,
  storageBucket: process.env.DB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_MESSAGESENDERID,
  appId: process.env.DB_APPID,
  measurementId: process.env.DB_MEASUREMENTID
};

export const app = initializeApp(config);
export const db = getFirestore(app);
export const storage = getStorage(app);

const auth = getAuth();
const email = process.env.DB_USER_TWO;
const password =  process.env.DB_PASS_TWO;

signInWithEmailAndPassword(auth , email , password)
.then((userCredential) => {
  const user = userCredential.user;
}).catch((err) => {
  const errCode = err.code;
  const errMsg = err.message;
});
