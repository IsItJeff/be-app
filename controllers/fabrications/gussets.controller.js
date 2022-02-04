const { createGusset } = require("../../models/fabrications/gussets.model.js");

exports.postGusset = (req , res , next) => {
    const gussetData = req.body;

    createGusset(gussetData)
        .then((gusset) => {
            res.status(201).send({gusset});
        }).catch((err) => {
            next(err);
        });
};