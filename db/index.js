require("dotenv").config()
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
const { getAnalytics } = require("firebase/analytics");
const { getFirestore } = require("firebase/firestore");

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
const storage = getStorage(app);

module.exports = {app , db , storage}