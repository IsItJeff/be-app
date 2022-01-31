const { collection , getDocs , getDoc , doc , deleteDoc , updateDoc ,addDoc } = require("firebase/firestore");
const { db } = require("../db/index.js");

exports.createOrders = (orderData) => {
    const data = orderData;
    return addDoc(collection( db , "orders"), data );
}

exports.fetchOrder = (orderId) => {
    return getDoc(doc( db , "orders" , orderId))
        .then((snapshot)=>{
            return snapshot.data()
    });
};

exports.fetchOrders = () => {
    return getDocs(collection( db , "orders"))
        .then((snapshot)=>{
            const orders = []

            snapshot.docs.forEach((order) => {
                orders.push({...order.data(), id: order.id});
            });

            return orders;
    });
};