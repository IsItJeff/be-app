const { collection , getDocs ,query , where } = require("firebase/firestore")
const { db } = require("../../db/index.js");
const axios = require("axios").default;

const path = "fabrications/tubes/tube";

exports.compaireInputToDb = ({type , innerDiam , outterDiam , thikness , length}) => {
    
    const collectionRef = collection(db, path);
    const queryType = getDocs(query(collectionRef, where("type", "==" , type)));
    const queryInnerDiam = getDocs(query(collectionRef, where("innerDiam", "==" , innerDiam)));
    const queryOutterDiam = getDocs(query(collectionRef, where("outterDiam", "==" , outterDiam)));
    const queryThickness = getDocs(query(collectionRef, where("thikness", "==" , thikness)));
    const queryLength = getDocs(query(collectionRef, where("length", "==" , length)));

    return [queryType , queryInnerDiam , queryOutterDiam , queryThickness , queryLength];
};

// class Tube {

//     constructor({type , innerDiam , outterDiam , thickness , length}){
//         this._type = type;
//         this._innerDiam = innerDiam;
//         this._outterDiam = outterDiam;
//         this._thickness = thickness;
//         this._tLength = length;
//     };

//     type(){
//         if(!this._type){
//             return this._msg = "Value Required";
//         }else{
//             return this._type;
//         }
//     };

//     innerDiam(){
//         if(!this._innerDiam || this._innerDiam === 0){
//             return this._innerDiam = this._outterDiam - (this._thickness * 2);
//         }else{
//             return this._innerDiam;
//         }
//     };

//     outterDiam(){
//         if(!this._outterDiam || this._outterDiam === 0){
//             return this._outterDiam = this._innerDiam + (this._thickness * 2);
//         }else{
//             return this._outterDiam;
//         }
//     };

//     thickness(){
//         if(!this._thickness || this._thickness === 0){
//             return this._thickness = this._outterDiam - this._innerDiam;
//         }else{
//             return this._thickness;
//         }
//     };

//     tLength(){
//         if(!this._tLength || this._tLength === 0){
//             return this._tLength;
//         }else{
//             return this._tLength;
//         }
//     };

// };

// module.exports = Tube;