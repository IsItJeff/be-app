const { createTopCap } = require("../../models/fabrications/topCaps.model.js");

exports.postTopCap = (req , res , next) => {
    const topCapData = req.body;

    createTopCap(topCapData)
        .then((topCap) => {
            res.status(201).send({topCap});
        }).catch((err) => {
            next(err);
        });
};