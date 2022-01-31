const {postOrder, getOrders, getOrder} = require("../controllers/orders.controller")
const express = require("express");

const ordersRouter = express()

ordersRouter
    .route("/")
    .get(getOrders)
    .post(postOrder);

ordersRouter
    .route("/:orderId")
    .get(getOrder)
    .patch()
    .delete();


module.exports = ordersRouter;