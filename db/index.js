import { initializeApp } from 'firebase/app';
import dotenv from "dotenv";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const config = {
  apiKey: process.env.DB_APIKEY,
  authDomain: process.env.DB_AUTHDOM,
  projectId: process.env.DB_PROJECTID,
  storageBucket: process.env.DB_STORAGEBUCKET,
  messagingSenderId: process.env.DB_MESSAGESENDERID,
  appId: process.env.DB_APPID,
  measurementId: process.env.DB_MEASUREMENTID
};

const app = initializeApp(config);
const db = getFirestore(app);

module.exports = {app, db}