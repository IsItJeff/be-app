const { createOrder , fetchOrder , fetchOrders} = require("../models/orders.model.js");

exports.postOrder = (req , res , next ) => {
    const orderData = req.body;

    createOrder(orderData)
        .then((order)=>{
            res.status(201).send(order)
        }).catch((err)=>{
            next(err);
        });
};

exports.getOrder = (req , res , next) =>{
    const orderId = req.params.orderId;
    
    fetchOrder(orderId)
        .then((order)=>{
            res.status(200).send({order});
    }).catch((err)=>{
        next(err);
    })
}


exports.getOrders = (req , res , next) => {
    fetchOrders()
        .then((orders)=>{
            res.status(200).send({orders});
    }).catch((err)=>{
        next(err);
    })
}